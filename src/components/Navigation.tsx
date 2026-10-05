import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Instagram, Youtube, Sun, Moon, ArrowUpRight, MapPin, Phone, Mail, Heart } from 'lucide-react';
import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'motion/react';
import logo from '../assets/logo.webp';
import { useTheme } from '../hooks/useTheme';
import { handleContactEmail } from '../utils/contactAction';
import { useT } from '../i18n/LanguageContext';
import { common } from '../i18n/common';
import LanguageSwitcher from './LanguageSwitcher';

function ThemeToggle({ theme, toggleTheme }: { theme: 'light' | 'dark'; toggleTheme: () => void }) {
  const isDark = theme === 'dark';
  const t = useT(common);
  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? t.toLight : t.toDark}
      title={isDark ? t.toLight : t.toDark}
      className="relative w-10 h-10 rounded-full flex items-center justify-center text-on-surface hover:bg-surface-container transition-colors cursor-pointer overflow-hidden"
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={theme}
          initial={{ y: -16, opacity: 0, rotate: -90 }}
          animate={{ y: 0, opacity: 1, rotate: 0 }}
          exit={{ y: 16, opacity: 0, rotate: 90 }}
          transition={{ duration: 0.2 }}
          className="flex"
        >
          {isDark ? <Sun className="w-[18px] h-[18px]" /> : <Moon className="w-[18px] h-[18px]" />}
        </motion.span>
      </AnimatePresence>
    </button>
  );
}

const navLinks = [
  { key: 'home', path: '/' },
  { key: 'about', path: '/about' },
  { key: 'team', path: '/team' },
  { key: 'awards', path: '/awards' },
  { key: 'events', path: '/events' },
  { key: 'support', path: '/support' },
  { key: 'volunteer', path: '/volunteer' },
  { key: 'kaushalya', path: '/kaushalya' },
  { key: 'media', path: '/media' },
] as const;

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { theme, toggleTheme } = useTheme();
  const t = useT(common);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setIsOpen(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [isOpen]);

  return (
    <motion.header
      className="fixed top-0 inset-x-0 z-50 px-3 sm:px-5 pt-3"
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <div
        className={`max-w-[1400px] mx-auto flex items-center justify-between gap-3 rounded-full border pl-2 pr-2 sm:pl-3 py-1.5 transition-all duration-300 backdrop-blur-xl ${
          scrolled
            ? 'bg-surface/85 border-outline-variant shadow-card'
            : 'bg-surface/70 border-outline-variant/60'
        }`}
      >
        <Link to="/" onClick={() => setIsOpen(false)} className="flex items-center gap-2.5 shrink-0 rounded-full pr-2">
          <span className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-surface-container-lowest ring-1 ring-outline-variant flex items-center justify-center shrink-0">
            <img src={logo} alt={t.logoAlt} className="w-8 h-8 sm:w-9 sm:h-9 object-contain" />
          </span>
          <span className="flex flex-col">
            <span className="font-display text-sm min-[400px]:text-base sm:text-lg font-semibold text-on-surface tracking-tight whitespace-nowrap leading-tight">
              {t.brand}
            </span>
            <span className="text-[10px] sm:text-[11px] text-secondary font-bold whitespace-nowrap leading-normal">
              "एक हात मैत्रीचा"
            </span>
          </span>
        </Link>

        <nav aria-label={t.nav.primary} className="hidden min-[1360px]:flex items-center gap-0.5 whitespace-nowrap">
          {navLinks.map((link) => {
            const active = location.pathname === link.path;
            return (
              <Link
                key={link.path}
                to={link.path}
                aria-current={active ? 'page' : undefined}
                className={`relative px-3 py-2 rounded-full text-sm font-semibold transition-colors ${
                  active ? 'text-on-primary' : 'text-on-surface-variant hover:text-on-surface hover:bg-surface-container'
                }`}
              >
                {active && (
                  <motion.span
                    layoutId="navIndicator"
                    className="absolute inset-0 rounded-full bg-primary"
                    transition={{ type: 'spring', stiffness: 400, damping: 32 }}
                  />
                )}
                <span className="relative">{t.nav[link.key]}</span>
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-1 sm:gap-1.5 shrink-0">
          <div className="hidden sm:block"><LanguageSwitcher /></div>
          <div className="hidden sm:block"><ThemeToggle theme={theme} toggleTheme={toggleTheme} /></div>
          <Link
            to="/contact"
            onClick={() => setIsOpen(false)}
            className="hidden 2xl:inline-flex items-center px-4 py-2.5 rounded-full text-sm font-semibold text-on-surface hover:bg-surface-container transition-colors whitespace-nowrap"
          >
            {t.contactUs}
          </Link>
          <Link
            to="/support"
            onClick={() => setIsOpen(false)}
            aria-label={t.donateNow}
            title={t.donateNow}
            className="group inline-flex items-center justify-center gap-1.5 bg-secondary-container text-on-secondary-container w-10 h-10 min-[440px]:w-auto min-[440px]:h-auto min-[440px]:pl-4 min-[440px]:pr-4 sm:pl-5 min-[440px]:py-2.5 rounded-full text-sm font-bold whitespace-nowrap hover:brightness-105 active:scale-95 transition-all"
          >
            <Heart className="w-4 h-4 fill-current" />
            <span className="hidden min-[440px]:inline">{t.donateNow}</span>
          </Link>
          <button
            type="button"
            className="min-[1360px]:hidden w-10 h-10 rounded-full flex items-center justify-center text-on-surface hover:bg-surface-container transition-colors cursor-pointer"
            onClick={() => setIsOpen(!isOpen)}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            aria-label={isOpen ? t.closeMenu : t.openMenu}
            title={isOpen ? t.closeMenu : t.openMenu}
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, y: -12, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -12, scale: 0.98 }}
            transition={{ duration: 0.22, ease: 'easeOut' }}
            className="min-[1360px]:hidden max-w-[1400px] mx-auto mt-2 rounded-3xl border border-outline-variant bg-surface/95 backdrop-blur-xl shadow-card-hover overflow-hidden"
          >
            <nav aria-label={t.nav.mobile} className="p-3 sm:p-4">
              <ul className="grid grid-cols-2 sm:grid-cols-3 gap-1.5">
                {navLinks.map((link, idx) => {
                  const active = location.pathname === link.path;
                  return (
                    <motion.li
                      key={link.path}
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: idx * 0.03 }}
                    >
                      <Link
                        to={link.path}
                        onClick={() => setIsOpen(false)}
                        aria-current={active ? 'page' : undefined}
                        className={`block px-4 py-3 rounded-2xl text-[15px] font-semibold transition-colors ${
                          active ? 'bg-primary text-on-primary' : 'text-on-surface hover:bg-surface-container'
                        }`}
                      >
                        {t.nav[link.key]}
                      </Link>
                    </motion.li>
                  );
                })}
              </ul>
              <div className="sm:hidden flex flex-wrap items-center justify-between gap-2 mt-3 pt-3 px-2 border-t border-outline-variant">
                <span className="text-sm font-semibold text-on-surface-variant">{t.language}</span>
                <LanguageSwitcher variant="inline" />
              </div>
              <div className="sm:hidden flex items-center justify-between mt-3 pt-3 px-2 border-t border-outline-variant">
                <span className="text-sm font-semibold text-on-surface-variant">{t.appearance}</span>
                <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
              </div>
              <div className="grid grid-cols-2 gap-2 mt-3 pt-3 border-t border-outline-variant">
                <Link
                  to="/contact"
                  onClick={() => setIsOpen(false)}
                  className="text-center py-3.5 rounded-2xl font-bold border border-outline-variant text-on-surface hover:bg-surface-container transition-colors"
                >
                  {t.contactUs}
                </Link>
                <Link
                  to="/support"
                  onClick={() => setIsOpen(false)}
                  className="text-center py-3.5 rounded-2xl font-bold bg-primary text-on-primary hover:opacity-90 transition-opacity"
                >
                  {t.donateNow}
                </Link>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

export function Footer() {
  const [modalType, setModalType] = useState<'privacy' | 'terms' | null>(null);
  const t = useT(common);

  useEffect(() => {
    if (!modalType) return;
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setModalType(null);
    window.addEventListener('keydown', onKey);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener('keydown', onKey);
    };
  }, [modalType]);

  const policyContent = t.policy;

  const orgLinks = [
    { name: t.footer.aboutUs, path: '/about' },
    { name: t.nav.team, path: '/team' },
    { name: t.nav.awards, path: '/awards' },
    { name: t.nav.media, path: '/media' }
  ];
  const engageLinks = [
    { name: t.nav.kaushalya, path: '/kaushalya' },
    { name: t.nav.volunteer, path: '/volunteer' },
    { name: t.nav.events, path: '/events' },
    { name: t.contactUs, path: '/contact' },
    { name: t.donate, path: '/support' }
  ];

  const socialClass =
    'w-11 h-11 rounded-full border border-on-ink/15 flex items-center justify-center text-on-ink hover:bg-secondary-container hover:text-on-secondary-container hover:border-transparent transition-all';

  return (
    <footer className="grain bg-ink text-on-ink mt-0">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 pt-16 sm:pt-20">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 pb-12 border-b border-on-ink/10">
          <h2 className="font-display text-3xl sm:text-5xl font-medium leading-[1.05] max-w-2xl">
            {t.footer.tagline1} <em className="text-secondary-container italic">{t.footer.tagline2}</em>
          </h2>
          <div className="flex flex-wrap gap-3">
            <Link
              to="/volunteer"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full border border-on-ink/20 font-semibold hover:bg-on-ink/10 transition-colors"
            >
              {t.footer.volunteer} <ArrowUpRight className="w-4 h-4" />
            </Link>
            <Link
              to="/support"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-secondary-container text-on-secondary-container font-bold hover:brightness-105 transition-all"
            >
              <Heart className="w-4 h-4 fill-current" /> {t.donate}
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-12 gap-10 py-14">
          <div className="col-span-2 md:col-span-5">
            <div className="flex items-center gap-3 mb-5">
              <span className="w-12 h-12 rounded-full bg-on-ink flex items-center justify-center shrink-0">
                <img src={logo} alt={t.logoAlt} className="w-9 h-9 object-contain" />
              </span>
              <div>
                <p className="font-display text-xl font-semibold leading-tight">{t.brand}</p>
                <p className="text-xs text-secondary-container font-bold tracking-wide mt-1">
                  {t.footer.motto}
                </p>
              </div>
            </div>
            <p className="text-sm text-on-ink/65 leading-relaxed max-w-sm">
              {t.footer.blurb}
            </p>
            <ul className="mt-6 space-y-3 text-sm">
              <li className="flex items-start gap-3 text-on-ink/85">
                <MapPin className="w-4 h-4 mt-0.5 text-secondary-container shrink-0" />
                <span><span className="sr-only">{t.footer.addressLabel}</span>{t.footer.address}</span>
              </li>
              <li>
                <a
                  href="tel:+917447434373"
                  className="flex items-start gap-3 text-on-ink/85 hover:text-secondary-container transition-colors cursor-pointer group"
                >
                  <Phone className="w-4 h-4 mt-0.5 text-secondary-container shrink-0 group-hover:scale-110 transition-transform" />
                  <span><span className="sr-only">{t.footer.contactLabel}</span>+91 7447434373</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:support@maitriwelfarefoundation.org"
                  onClick={handleContactEmail}
                  className="flex items-start gap-3 text-on-ink/85 hover:text-secondary-container transition-colors cursor-pointer group"
                  title={t.footer.emailTitle}
                >
                  <Mail className="w-4 h-4 mt-0.5 text-secondary-container shrink-0 group-hover:scale-110 transition-transform" />
                  <span className="break-all"><span className="sr-only">{t.footer.emailLabel}</span>support@maitriwelfarefoundation.org</span>
                </a>
              </li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <h3 className="font-sans text-xs font-bold uppercase tracking-[0.18em] text-on-ink/60 mb-5">{t.footer.organization}</h3>
            <ul className="space-y-3">
              {orgLinks.map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="text-sm text-on-ink/85 hover:text-secondary-container transition-colors">{link.name}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="md:col-span-2">
            <h3 className="font-sans text-xs font-bold uppercase tracking-[0.18em] text-on-ink/60 mb-5">{t.footer.engage}</h3>
            <ul className="space-y-3">
              {engageLinks.map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="text-sm text-on-ink/85 hover:text-secondary-container transition-colors">{link.name}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="col-span-2 md:col-span-3">
            <h3 className="font-sans text-xs font-bold uppercase tracking-[0.18em] text-on-ink/60 mb-5">{t.footer.socials}</h3>
            <div className="flex gap-3">
              <a
                href="https://chat.whatsapp.com/F46mGxCY15QHB3GE7aAFgR"
                target="_blank"
                rel="noopener noreferrer"
                className={socialClass}
                title={t.footer.whatsapp}
                aria-label={t.footer.whatsapp}
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.414 2.534 1.196 3.568l-.801 2.923 3.013-.789c.96.657 2.094 1.008 3.361 1.008 3.182 0 5.769-2.586 5.77-5.767 0-3.181-2.587-5.767-5.771-5.767zm3.435 8.163c-.156.438-.918.843-1.28.887-.363.044-.814.11-2.454-.531-1.981-.774-3.254-2.793-3.354-2.926-.1-.133-.8-.106-.8-.106s.013-1.042.825-1.042c.163 0 .356.006.488.025.156.025.363-.062.556.406.206.5.7 1.713.763 1.838.063.125.106.269.025.431-.081.163-.125.263-.25.406-.125.144-.263.306-.375.406-.125.112-.263.238-.112.5.15.263.669 1.113 1.438 1.8 1.011.895 1.82 1.18 2.08 1.306.26.126.413.106.568-.069.155-.175.669-.781.85-1.05.181-.269.363-.225.6-.138.238.088 1.5.706 1.756.831.256.125.425.188.488.294.063.106.063.619-.093 1.057z" />
                  <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-.031 19.387c-1.302 0-2.576-.35-3.69-1.013l-4.105 1.075 1.092-4.001c-.727-1.157-1.111-2.488-1.111-3.860 0-4.116 3.348-7.464 7.465-7.464 4.118 0 7.467 3.348 7.467 7.464s-3.349 7.464-7.467 7.464z" />
                </svg>
              </a>
              <a
                href="https://www.instagram.com/maitri_welfare_foundation_"
                target="_blank"
                rel="noopener noreferrer"
                className={socialClass}
                aria-label={t.footer.instagram}
                title={t.footer.instagram}
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://www.youtube.com/@maitriwelfarefoundation_"
                target="_blank"
                rel="noopener noreferrer"
                className={socialClass}
                aria-label={t.footer.youtube}
                title={t.footer.youtube}
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-on-ink/10">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-on-ink/55 text-center md:text-left">
            {t.footer.copyright}
          </p>
          <div className="flex gap-2">
            <button
              type="button"
              onClick={() => setModalType('privacy')}
              className="px-3 py-1.5 rounded-full text-xs font-semibold text-on-ink/60 hover:text-on-ink hover:bg-on-ink/10 transition-colors cursor-pointer"
            >
              {t.footer.privacy}
            </button>
            <button
              type="button"
              onClick={() => setModalType('terms')}
              className="px-3 py-1.5 rounded-full text-xs font-semibold text-on-ink/60 hover:text-on-ink hover:bg-on-ink/10 transition-colors cursor-pointer"
            >
              {t.footer.terms}
            </button>
          </div>
        </div>
      </div>

      {typeof document !== 'undefined' && createPortal(
        <AnimatePresence>
          {modalType && (
            <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-black/75 backdrop-blur-md">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setModalType(null)}
                className="absolute inset-0 cursor-pointer"
                aria-label={t.footer.closeBackdrop}
              />
              <motion.div
                role="dialog"
                aria-modal="true"
                aria-labelledby="policy-title"
                initial={{ opacity: 0, scale: 0.95, y: 16 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 16 }}
                transition={{ type: "spring", duration: 0.35 }}
                className="relative z-10 bg-surface dark:bg-surface-container text-on-surface rounded-3xl shadow-2xl w-full max-w-lg max-h-[85dvh] overflow-y-auto p-6 sm:p-8 md:p-10 border border-outline-variant/60 dark:border-outline-variant/30"
              >
                <button
                  type="button"
                  onClick={() => setModalType(null)}
                  aria-label={t.footer.close}
                  title={t.footer.close}
                  className="absolute top-4 right-4 sm:top-5 sm:right-5 w-9 h-9 flex items-center justify-center hover:bg-surface-container rounded-full transition-colors cursor-pointer border border-outline-variant/30 dark:border-outline-variant/20"
                >
                  <X className="w-5 h-5 text-on-surface-variant" />
                </button>
                <h3 id="policy-title" className="text-2xl font-bold text-primary dark:text-primary mb-6 pr-10">
                  {policyContent[modalType].title}
                </h3>
                <div className="space-y-4">
                  {policyContent[modalType].content.map((text, i) => (
                    <p key={i} className="text-sm text-on-surface-variant leading-relaxed">
                      {text}
                    </p>
                  ))}
                </div>
                <button
                  type="button"
                  onClick={() => setModalType(null)}
                  className="w-full mt-8 bg-primary text-on-primary py-3.5 rounded-full font-bold hover:opacity-90 active:scale-98 transition-all cursor-pointer shadow-md"
                >
                  {t.footer.close}
                </button>
              </motion.div>
            </div>
          )}
        </AnimatePresence>,
        document.body
      )}
    </footer>
  );
}
