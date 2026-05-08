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
  ];

  return (
    <motion.header
      className="bg-surface/90 backdrop-blur-md shadow-sm fixed top-0 w-full z-50"
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="flex justify-between items-center w-full px-6 py-4 max-w-7xl mx-auto">
        <Link to="/" className="flex items-center gap-3 group">
          <motion.img
            src={logo}
            alt="Maitri Logo"
            className="w-10 h-10 object-contain"
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ type: "spring", stiffness: 400 }}
          />
          <h1 className="text-xl font-extrabold text-primary tracking-tight">Maitri Welfare Foundation</h1>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link, idx) => (
            <motion.div
              key={link.path}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.05 + 0.3 }}
            >
              <Link
                to={link.path}
                className={`text-sm font-semibold transition-colors duration-200 relative ${location.pathname === link.path
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

        <div className="flex items-center gap-4">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              to="/contact"
              className="hidden sm:block border border-primary text-primary px-6 py-2 rounded-full text-sm font-bold transition-all hover:bg-primary/5"
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
              className="bg-secondary-container text-on-secondary-container px-6 py-2 rounded-full text-sm font-bold shadow-sm transition-all"
            >
              Donate Now
            </Link>
          </motion.div>
          <motion.button
            className="md:hidden cursor-pointer"
            onClick={() => setIsOpen(!isOpen)}
            whileTap={{ scale: 0.9 }}
          >
            {isOpen ? <X /> : <Menu />}
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
            className="md:hidden bg-surface border-t border-outline-variant"
          >
            <nav className="flex flex-col p-4 gap-4">
              <div className="flex items-center gap-3 px-2 mb-2">
                <img src={logo} alt="Maitri Logo" className="w-8 h-8 object-contain" />
                <span className="font-bold text-primary">Maitri Welfare Foundation</span>
              </div>
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
                    className={`text-sm font-semibold block ${location.pathname === link.path ? 'text-secondary' : 'text-on-surface-variant'
                      }`}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                className="flex flex-col gap-3 mt-4 pt-4 border-t border-outline-variant/30"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <Link
                  to="/contact"
                  onClick={() => setIsOpen(false)}
                  className="w-full text-center py-3 text-primary font-bold border border-primary rounded-full"
                >
                  Contact Us
                </Link>
                <Link
                  to="/support"
                  onClick={() => setIsOpen(false)}
                  className="w-full text-center py-3 bg-secondary-container text-on-secondary-container font-bold rounded-xl shadow-lg cursor-pointer"
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
          <div className="flex items-center gap-3 mb-6 group text-on-primary">
            <motion.img
              src={logo}
              alt="Maitri Logo"
              className="w-10 h-10 object-contain"
              whileHover={{ rotate: 10 }}
              transition={{ type: "spring", stiffness: 300 }}
            />
            <h2 className="text-2xl font-extrabold tracking-tight">Maitri Welfare Foundation</h2>
          </div>
          <p className="text-sm text-on-primary/70 leading-relaxed">
            Empowering communities through transparent and professional social welfare programs.
            Registered NGO PUNE/0000407/2023.
            <br />
            <span className="inline-block mt-2 font-bold text-on-primary">
              Contact: +91 7447434373 <br />
              Email: maitrifoundation2019@gmail.com
            </span>
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 gap-12"
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
              { name: 'Awards', path: '/awards' }
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
