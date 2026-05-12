import { Link, useLocation } from 'react-router-dom';
import { Heart, Menu, X, Instagram, Youtube } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import logo from '../assets/logo.png';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Our Team', path: '/team' },
    { name: 'Awards', path: '/awards' },
    { name: 'Events', path: '/events' },
    { name: 'Support', path: '/support' },
    { name: 'Volunteer', path: '/volunteer' },
    { name: 'Kaushalya', path: '/kaushalya' },
    { name: 'Media', path: '/media' },
  ];

  return (
    <motion.header
      className="bg-surface/90 backdrop-blur-md shadow-sm fixed top-0 w-full z-50"
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="flex justify-between items-center w-full px-3 sm:px-6 py-4 max-w-7xl mx-auto">
        <Link to="/" onClick={() => setIsOpen(false)} className="flex items-center gap-1 sm:gap-3 group shrink-0">
          <motion.img
            src={logo}
            alt="Maitri Logo"
            className="w-8 h-8 sm:w-10 sm:h-10 object-contain shrink-0"
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ type: "spring", stiffness: 400 }}
          />
          <div className="flex flex-col">
            <h1 className="text-sm min-[400px]:text-base sm:text-lg xl:text-xl font-extrabold text-primary tracking-tight leading-tight">
              Maitri Welfare Foundation
            </h1>
            <span className="text-[9px] sm:text-[10px] text-secondary font-extrabold tracking-wider uppercase">
              "एक हात मैत्रीचा"
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-4 xl:gap-6">
          {navLinks.map((link, idx) => (
            <motion.div
              key={link.path}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.05 + 0.3 }}
            >
              <Link
                to={link.path}
                className={`text-[13px] xl:text-sm font-semibold transition-colors duration-200 relative ${location.pathname === link.path
                  ? 'text-secondary'
                  : 'text-on-surface-variant hover:text-primary'
                  }`}
              >
                {link.name}
                {location.pathname === link.path && (
                  <motion.div
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-secondary rounded-full"
                    layoutId="navIndicator"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
              </Link>
            </motion.div>
          ))}
        </nav>

        <div className="flex items-center gap-1 sm:gap-4">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="hidden xl:block"
          >
            <Link
              to="/contact"
              onClick={() => setIsOpen(false)}
              className="border border-primary text-primary px-5 py-2 rounded-full text-xs font-bold transition-all hover:bg-primary/5"
            >
              Contact Us
            </Link>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              to="/support"
              onClick={() => setIsOpen(false)}
              className="bg-secondary-container text-on-secondary-container px-4 sm:px-6 py-2 rounded-full text-xs sm:text-sm font-bold shadow-sm transition-all whitespace-nowrap flex items-center justify-center min-w-fit"
            >
              <span className="hidden min-[410px]:inline">Donate Now</span>
              <span className="min-[410px]:hidden">Donate</span>
            </Link>
          </motion.div>
          <motion.button
            className="lg:hidden cursor-pointer p-2 hover:bg-surface-container rounded-lg transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            whileTap={{ scale: 0.9 }}
          >
            {isOpen ? <X className="w-6 h-6 text-primary" /> : <Menu className="w-6 h-6 text-primary" />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="lg:hidden bg-surface border-t border-outline-variant overflow-hidden"
          >
            <nav className="flex flex-col p-6 gap-5">
              <div className="grid grid-cols-2 gap-x-4 gap-y-6 px-2 pt-2">
                {navLinks.map((link, idx) => (
                  <motion.div
                    key={link.path}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.05 }}
                  >
                    <Link
                      to={link.path}
                      onClick={() => setIsOpen(false)}
                      className={`text-sm font-bold block transition-colors ${location.pathname === link.path ? 'text-secondary' : 'text-on-surface-variant hover:text-primary'
                        }`}
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                ))}
              </div>
              <motion.div
                className="flex flex-col gap-4 mt-6 pt-6 border-t border-outline-variant/30"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <Link
                  to="/contact"
                  onClick={() => setIsOpen(false)}
                  className="w-full text-center py-4 text-primary font-bold border-2 border-primary rounded-2xl hover:bg-primary/5 transition-colors"
                >
                  Contact Us
                </Link>
                <Link
                  to="/support"
                  onClick={() => setIsOpen(false)}
                  className="w-full text-center py-4 bg-primary text-on-primary font-bold rounded-2xl shadow-xl hover:opacity-90 transition-all cursor-pointer"
                >
                  Donate Now
                </Link>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

export function Footer() {
  const [modalType, setModalType] = useState<'privacy' | 'terms' | null>(null);

  const policyContent = {
    privacy: {
      title: "Privacy Policy",
      content: [
        "Maitri Welfare Foundation is committed to protecting your personal information. We collect data such as name, email, and phone number only for volunteering, event proposals, and donation receipts.",
        "Your data is stored securely and never shared with third-party commercial entities. We use this information solely to communicate our impact and coordinate our social welfare programs.",
        "All financial transactions are handled through secure channels, and we maintain 100% transparency in our fund utilization as a registered NGO (PUNE/0000407/2023).",
        "Our website uses standard security measures, including mathematical CAPTCHAs, to prevent automated spam and protect user submissions."
      ]
    },
    terms: {
      title: "Terms of Service",
      content: [
        "By using this website, you agree to support the mission and values of Maitri Welfare Foundation. All content, logos, and assets are property of the foundation and may not be used without prior written consent.",
        "Donations made through this portal are voluntary and non-refundable, as they are immediately allocated to ongoing social welfare projects including food distribution and healthcare camps.",
        "Volunteers must adhere to our code of conduct, ensuring compassionate professionalism and respect for all community members during on-ground initiatives.",
        "Any misuse of our official communication channels or submission of false information through our forms may lead to suspension of volunteer status or legal action where applicable."
      ]
    }
  };

  return (
    <footer className="bg-primary text-on-primary">
      <div className="w-full px-6 py-12 flex flex-col md:flex-row justify-between items-start gap-12 max-w-7xl mx-auto">
        <motion.div
          className="max-w-sm"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-start gap-3 mb-6 group text-on-primary">
            <motion.img
              src={logo}
              alt="Maitri Logo"
              className="w-10 h-10 sm:w-12 sm:h-12 object-contain shrink-0 mt-0.5"
              whileHover={{ rotate: 10 }}
              transition={{ type: "spring", stiffness: 300 }}
            />
            <div className="flex flex-col">
              <h2 className="text-xl sm:text-2xl font-extrabold tracking-tight leading-tight">Maitri Welfare Foundation</h2>
              <span className="text-[10px] sm:text-xs text-secondary font-bold tracking-widest uppercase mt-1.5 leading-normal">
                "एक हात मैत्रीचा" • One Hand of Friendship
              </span>
            </div>
          </div>
          <p className="text-sm text-on-primary/70 leading-relaxed">
            Empowering communities through transparent and professional social welfare programs.
            Registered NGO F-0062418(PUN).
            <br />
            <span className="inline-block mt-2 font-bold text-on-primary">
              Contact: +91 7447434373 <br />
              Email: maitrifoundation2019@gmail.com
            </span>
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 gap-8 md:gap-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="flex flex-col gap-3">
            <h5 className="font-bold text-secondary-container uppercase text-xs tracking-wider">Organization</h5>
            {[
              { name: 'About Us', path: '/about' },
              { name: 'Our Team', path: '/team' },
              { name: 'Awards', path: '/awards' },
              { name: 'Media', path: '/media' }
            ].map((link, idx) => (
              <motion.div key={link.path} whileHover={{ x: 4 }} transition={{ type: "spring", stiffness: 300 }}>
                <Link to={link.path} className="text-sm text-on-primary/80 hover:text-on-primary transition-colors">{link.name}</Link>
              </motion.div>
            ))}
          </div>
          <div className="flex flex-col gap-3">
            <h5 className="font-bold text-secondary-container uppercase text-xs tracking-wider">Engage</h5>
            {[
              { name: 'Kaushalya', path: '/kaushalya' },
              { name: 'Volunteer', path: '/volunteer' },
              { name: 'Events', path: '/events' },
              { name: 'Contact Us', path: '/contact' },
              { name: 'Donate', path: '/support' }
            ].map((link, idx) => (
              <motion.div key={link.path} whileHover={{ x: 4 }} transition={{ type: "spring", stiffness: 300 }}>
                <Link to={link.path} className="text-sm text-on-primary/80 hover:text-on-primary transition-colors">{link.name}</Link>
              </motion.div>
            ))}
          </div>
          <div className="flex flex-col gap-4">
            <h5 className="font-bold text-secondary-container uppercase text-xs tracking-wider">Socials</h5>
            <div className="flex gap-4">
              <motion.a
                href="https://chat.whatsapp.com/F46mGxCY15QHB3GE7aAFgR"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-on-primary/10 flex items-center justify-center hover:bg-secondary transition-all cursor-pointer fill-current"
                whileHover={{ scale: 1.15, rotate: 5 }}
                transition={{ type: "spring", stiffness: 400 }}
                title="Join WhatsApp Community"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.414 2.534 1.196 3.568l-.801 2.923 3.013-.789c.96.657 2.094 1.008 3.361 1.008 3.182 0 5.769-2.586 5.77-5.767 0-3.181-2.587-5.767-5.771-5.767zm3.435 8.163c-.156.438-.918.843-1.28.887-.363.044-.814.11-2.454-.531-1.981-.774-3.254-2.793-3.354-2.926-.1-.133-.8-.106-.8-.106s.013-1.042.825-1.042c.163 0 .356.006.488.025.156.025.363-.062.556.406.206.5.7 1.713.763 1.838.063.125.106.269.025.431-.081.163-.125.263-.25.406-.125.144-.263.306-.375.406-.125.112-.263.238-.112.5.15.263.669 1.113 1.438 1.8 1.011.895 1.82 1.18 2.08 1.306.26.126.413.106.568-.069.155-.175.669-.781.85-1.05.181-.269.363-.225.6-.138.238.088 1.5.706 1.756.831.256.125.425.188.488.294.063.106.063.619-.093 1.057z" />
                  <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-.031 19.387c-1.302 0-2.576-.35-3.69-1.013l-4.105 1.075 1.092-4.001c-.727-1.157-1.111-2.488-1.111-3.86 0-4.116 3.348-7.464 7.465-7.464 4.118 0 7.467 3.348 7.467 7.464s-3.349 7.464-7.467 7.464z" />
                </svg>
              </motion.a>
              <motion.a
                href="https://www.instagram.com/maitri_welfare_foundation_"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-on-primary/10 flex items-center justify-center hover:bg-secondary transition-all cursor-pointer"
                whileHover={{ scale: 1.15, rotate: 5 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <Instagram className="w-5 h-5" />
              </motion.a>
              <motion.a
                href="https://www.youtube.com/@maitriwelfarefoundation_"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-on-primary/10 flex items-center justify-center hover:bg-secondary transition-all cursor-pointer"
                whileHover={{ scale: 1.15, rotate: -5 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <Youtube className="w-5 h-5" />
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div
        className="border-t border-on-primary/10 max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center gap-4"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4 }}
      >
        <p className="text-xs text-on-primary/60">
          © 2026 Maitri Welfare Foundation. Compassionate Professionalism in Social Change.
        </p>
        <div className="flex gap-6">
          <button 
            onClick={() => setModalType('privacy')}
            className="text-[10px] uppercase tracking-widest font-bold text-on-primary/40 hover:text-secondary transition-colors cursor-pointer"
          >
            Privacy
          </button>
          <button 
            onClick={() => setModalType('terms')}
            className="text-[10px] uppercase tracking-widest font-bold text-on-primary/40 hover:text-secondary transition-colors cursor-pointer"
          >
            Terms
          </button>
        </div>
      </motion.div>

      {/* Policy Modal */}
      <AnimatePresence>
        {modalType && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setModalType(null)}
              className="absolute inset-0 bg-primary/40 backdrop-blur-sm cursor-pointer"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative bg-white rounded-[2rem] shadow-2xl w-full max-w-lg p-8 md:p-10"
            >
              <button
                onClick={() => setModalType(null)}
                className="absolute top-6 right-6 p-2 hover:bg-surface-container rounded-full transition-colors cursor-pointer"
              >
                <X className="w-5 h-5 text-on-surface-variant" />
              </button>
              <h3 className="text-2xl font-bold text-primary mb-6">{policyContent[modalType].title}</h3>
              <div className="space-y-4">
                {policyContent[modalType].content.map((text, i) => (
                  <p key={i} className="text-sm text-on-surface-variant leading-relaxed">
                    {text}
                  </p>
                ))}
              </div>
              <button
                onClick={() => setModalType(null)}
                className="w-full mt-8 bg-primary text-on-primary py-3 rounded-xl font-bold hover:opacity-90 transition-all cursor-pointer"
              >
                Close
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </footer>
  );
}
