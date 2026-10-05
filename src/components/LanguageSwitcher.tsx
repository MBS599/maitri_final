import { useEffect, useRef, useState } from 'react';
import { Languages, Check } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import { LANGUAGES, useLanguage, useT } from '../i18n/LanguageContext';
import { common } from '../i18n/common';

export default function LanguageSwitcher({ variant = 'menu' }: { variant?: 'menu' | 'inline' }) {
  const { lang, setLang } = useLanguage();
  const t = useT(common);
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const onDown = (e: MouseEvent) => !ref.current?.contains(e.target as Node) && setOpen(false);
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false);
    document.addEventListener('mousedown', onDown);
    window.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('mousedown', onDown);
      window.removeEventListener('keydown', onKey);
    };
  }, [open]);

  if (variant === 'inline') {
    return (
      <div role="radiogroup" aria-label={t.chooseLanguage} className="flex rounded-full bg-surface-container p-1">
        {LANGUAGES.map((l) => (
          <button
            key={l.code}
            type="button"
            role="radio"
            aria-checked={lang === l.code}
            onClick={() => setLang(l.code)}
            title={l.label}
            className={`px-3 py-1.5 rounded-full text-sm font-semibold transition-colors cursor-pointer ${
              lang === l.code ? 'bg-primary text-on-primary' : 'text-on-surface-variant hover:text-on-surface'
            }`}
          >
            {l.label}
          </button>
        ))}
      </div>
    );
  }

  const current = LANGUAGES.find((l) => l.code === lang) ?? LANGUAGES[0];

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-haspopup="menu"
        aria-expanded={open}
        aria-label={t.chooseLanguage}
        title={t.chooseLanguage}
        className="h-10 px-2.5 rounded-full flex items-center gap-1.5 text-sm font-semibold text-on-surface hover:bg-surface-container transition-colors cursor-pointer"
      >
        <Languages className="w-[18px] h-[18px]" />
        <span className="min-w-[1.6rem] text-left">{current.short}</span>
      </button>

      <AnimatePresence>
        {open && (
          <motion.ul
            role="menu"
            initial={{ opacity: 0, y: -6, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -6, scale: 0.97 }}
            transition={{ duration: 0.15 }}
            className="absolute right-0 top-full mt-2 min-w-[9.5rem] rounded-2xl border border-outline-variant bg-surface/95 backdrop-blur-xl shadow-card-hover p-1.5 z-50"
          >
            {LANGUAGES.map((l) => (
              <li key={l.code} role="none">
                <button
                  type="button"
                  role="menuitemradio"
                  aria-checked={lang === l.code}
                  onClick={() => {
                    setLang(l.code);
                    setOpen(false);
                  }}
                  className={`w-full flex items-center justify-between gap-3 px-3 py-2.5 rounded-xl text-sm font-semibold transition-colors cursor-pointer ${
                    lang === l.code ? 'bg-primary/10 text-primary' : 'text-on-surface hover:bg-surface-container'
                  }`}
                >
                  {l.label}
                  {lang === l.code && <Check className="w-4 h-4" />}
                </button>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
}
