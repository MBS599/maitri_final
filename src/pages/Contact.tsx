import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Send, Youtube, Instagram, Share2, Loader2, MessageCircle, Mail, Copy, Check, X, MapPin } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';
import { toast } from 'sonner';
import SEO from '../components/SEO';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { 
    y: 0, 
    opacity: 1,
    transition: { duration: 0.5, ease: "easeOut" }
  }
};

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

export default function Contact() {
  const [isSending, setIsSending] = useState(false);
  const [showShareMenu, setShowShareMenu] = useState(false);
  const [copied, setCopied] = useState(false);
  const [captcha, setCaptcha] = useState({ question: '', answer: 0 });
  const [userCaptcha, setUserCaptcha] = useState('');
  const formRef = useRef<HTMLFormElement>(null);

  const generateCaptcha = () => {
    const num1 = Math.floor(Math.random() * 10) + 1;
    const num2 = Math.floor(Math.random() * 10) + 1;
    setCaptcha({
      question: `What is ${num1} + ${num2}?`,
      answer: num1 + num2
    });
    setUserCaptcha('');
  };

  useEffect(() => {
    generateCaptcha();
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formRef.current) return;

    if (parseInt(userCaptcha) !== captcha.answer) {
      toast.error('Incorrect CAPTCHA answer. Please try again.');
      generateCaptcha();
      return;
    }

    setIsSending(true);
    const formData = new FormData(formRef.current);

    const contactData = {
      name: formData.get('name'),
      email: formData.get('email'),
      message: formData.get('message'),
      submitted_at: "'" + new Date().toLocaleString()
    };

    try {
      const SHEETDB_URL = 'https://sheetdb.io/api/v1/szlyae3x9dd1o?sheet=Contact_Inquiries';
      const res = await fetch(SHEETDB_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ data: [contactData] })
      });

      if (res.ok) {
        toast.success('Message sent successfully! We will get back to you soon.');
        formRef.current?.reset();
        generateCaptcha();
      } else {
        throw new Error('Failed to record contact query');
      }
    } catch (error) {
      console.error('SheetDB Error:', error);
      toast.error('Failed to send message. Please try again later.');
    } finally {
      setIsSending(false);
    }
  };

  return (
    <div className="pt-20">
      <SEO 
        title="Contact Us | Get in Touch with Maitri Foundation"
        description="Have questions? Want to volunteer? Contact Maitri Welfare Foundation in Katraj, Pune. Reach us via email, phone, or visit our office."
        keywords="contact NGO Pune, Maitri Foundation contact, volunteer Pune NGO, NGO office Pune"
        canonical="/contact"
      />
      {/* Hero Section */}
      <section className="bg-primary py-24 text-center text-on-primary relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-10">
          <img
            src="https://images.pexels.com/photos/8882791/pexels-photo-8882791.jpeg?auto=compress&cs=tinysrgb&w=1260"
            className="w-full h-full object-cover"
            alt="Maitri Welfare Foundation office contact background"
          />
        </div>
        <div className="relative z-10 max-w-3xl mx-auto px-6">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            <motion.h1
              variants={fadeInUp}
              className="text-4xl sm:text-5xl font-extrabold mb-6 leading-[1.1]"
            >
              Let's Connect
            </motion.h1>
            <motion.p
              variants={fadeInUp}
              className="text-base sm:text-lg opacity-90 leading-relaxed"
            >
              Whether you have a question, want to volunteer, or just want to say hi, our team is always ready to hear from you.
            </motion.p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 max-w-4xl mx-auto px-6">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <motion.h2 className="text-3xl sm:text-4xl font-bold mb-10 text-primary text-center">Get in Touch</motion.h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12 text-center">
            <motion.div variants={itemVariants} className="bg-surface-container-low p-6 rounded-2xl border border-outline-variant/20 shadow-sm">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <MapPin className="text-primary w-6 h-6" />
              </div>
              <h3 className="font-bold text-primary mb-1 text-sm">Our Location</h3>
              <p className="text-xs text-on-surface-variant font-medium">Katraj, Pune - 411046, India</p>
            </motion.div>

            <motion.div variants={itemVariants} className="bg-surface-container-low p-6 rounded-2xl border border-outline-variant/20 shadow-sm">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Mail className="text-primary w-6 h-6" />
              </div>
              <h3 className="font-bold text-primary mb-1 text-sm">Email Us</h3>
              <p className="text-xs text-on-surface-variant font-medium truncate" title="maitrifoundation2019@gmail.com">maitrifoundation2019@gmail.com</p>
            </motion.div>
            
            <motion.div variants={itemVariants} className="bg-surface-container-low p-6 rounded-2xl border border-outline-variant/20 shadow-sm">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <MessageCircle className="text-primary w-6 h-6" />
              </div>
              <h3 className="font-bold text-primary mb-1 text-sm">Call / WhatsApp</h3>
              <p className="text-xs text-on-surface-variant font-medium">+91 7447434373</p>
            </motion.div>

            <motion.div variants={itemVariants} className="bg-surface-container-low p-6 rounded-2xl border border-outline-variant/20 shadow-sm">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Check className="text-primary w-6 h-6" />
              </div>
              <h3 className="font-bold text-primary mb-1 text-sm">Response Time</h3>
              <p className="text-xs text-on-surface-variant font-medium">Within 24 Hours</p>
            </motion.div>
          </div>

          <motion.div 
            className="bg-white rounded-3xl p-10 shadow-xl border border-outline-variant/30"
            whileHover={{ boxShadow: "0 20px 50px rgba(0,0,0,0.1)" }}
            transition={{ duration: 0.3 }}
          >
            <form ref={formRef} className="space-y-6" onSubmit={handleSubmit}>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <label className="block text-[10px] uppercase font-bold text-on-surface-variant mb-2 tracking-widest">Full Name</label>
                <input name="name" required className="w-full rounded-xl border-2 border-outline-variant/50 focus:border-primary focus:ring-0 px-4 py-3 text-sm font-semibold outline-none transition-all" placeholder="John Doe" type="text" />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                <label className="block text-[10px] uppercase font-bold text-on-surface-variant mb-2 tracking-widest">Email Address</label>
                <input name="email" required className="w-full rounded-xl border-2 border-outline-variant/50 focus:border-primary focus:ring-0 px-4 py-3 text-sm font-semibold outline-none transition-all" placeholder="john@example.com" type="email" />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
                <label className="block text-[10px] uppercase font-bold text-on-surface-variant mb-2 tracking-widest">Your Message</label>
                <textarea name="message" required rows={4} className="w-full rounded-xl border-2 border-outline-variant/50 focus:border-primary focus:ring-0 px-4 py-3 text-sm font-semibold outline-none transition-all resize-none" placeholder="How can we help?"></textarea>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.45 }}
                className="bg-surface-container-low p-4 rounded-xl border border-outline-variant/30 flex flex-col sm:flex-row items-center justify-between gap-4"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center font-bold text-primary">
                    ?
                  </div>
                  <div>
                    <p className="text-[10px] uppercase font-bold text-on-surface-variant tracking-widest">Security Check</p>
                    <p className="text-sm font-bold text-primary">{captcha.question}</p>
                  </div>
                </div>
                <input
                  type="number"
                  required
                  value={userCaptcha}
                  onChange={(e) => setUserCaptcha(e.target.value)}
                  className="w-full sm:w-32 rounded-xl border-2 border-outline-variant/50 focus:border-primary focus:ring-0 px-4 py-2 text-sm font-bold outline-none transition-all text-center"
                  placeholder="Answer"
                />
              </motion.div>
              <motion.button
                type="submit"
                disabled={isSending}
                className="w-full bg-primary text-on-primary py-4 rounded-2xl font-bold text-lg hover:opacity-95 transition-all shadow-xl flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed cursor-pointer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
              >
                {isSending ? (
                  <Loader2 className="w-5 h-5 animate-spin" />
                ) : (
                  <Send className="w-5 h-5" />
                )}
                {isSending ? 'Sending...' : 'Send Message'}
              </motion.button>
            </form>
          </motion.div>
        </motion.div>
      </section>

      {/* Social Links */}
      <section className="pb-24 max-w-7xl mx-auto px-6 text-center">
        <motion.h2 
          className="text-3xl sm:text-4xl font-bold text-primary mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          Stay Connected
        </motion.h2>
        <motion.div 
          className="flex flex-wrap justify-center gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.a 
            variants={itemVariants}
            href="https://chat.whatsapp.com/F46mGxCY15QHB3GE7aAFgR" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex items-center gap-3 bg-surface-container-low px-8 py-4 rounded-2xl shadow-sm hover:shadow-md transition-all group border border-outline-variant/20 cursor-pointer"
            whileHover={{ y: -5, scale: 1.03 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="w-6 h-6 text-[#25D366] fill-current flex items-center justify-center">
              <svg viewBox="0 0 24 24" className="w-full h-full">
                <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.414 2.534 1.196 3.568l-.801 2.923 3.013-.789c.96.657 2.094 1.008 3.361 1.008 3.182 0 5.769-2.586 5.77-5.767 0-3.181-2.587-5.767-5.771-5.767zm3.435 8.163c-.156.438-.918.843-1.28.887-.363.044-.814.11-2.454-.531-1.981-.774-3.254-2.793-3.354-2.926-.1-.133-.8-.106-.8-.106s.013-1.042.825-1.042c.163 0 .356.006.488.025.156.025.363-.062.556.406.206.5.7 1.713.763 1.838.063.125.106.269.025.431-.081.163-.125.263-.25.406-.125.144-.263.306-.375.406-.125.112-.263.238-.112.5.15.263.669 1.113 1.438 1.8 1.011.895 1.82 1.18 2.08 1.306.26.126.413.106.568-.069.155-.175.669-.781.85-1.05.181-.269.363-.225.6-.138.238.088 1.5.706 1.756.831.256.125.425.188.488.294.063.106.063.619-.093 1.057z" />
                <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-.031 19.387c-1.302 0-2.576-.35-3.69-1.013l-4.105 1.075 1.092-4.001c-.727-1.157-1.111-2.488-1.111-3.86 0-4.116 3.348-7.464 7.465-7.464 4.118 0 7.467 3.348 7.467 7.464s-3.349 7.464-7.467 7.464z" />
              </svg>
            </div>
            <span className="font-bold text-on-surface-variant group-hover:text-[#25D366]">WhatsApp Community</span>
          </motion.a>
          <motion.a 
            variants={itemVariants}
            href="https://www.youtube.com/@maitriwelfarefoundation_" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex items-center gap-3 bg-surface-container-low px-8 py-4 rounded-2xl shadow-sm hover:shadow-md transition-all group border border-outline-variant/20 cursor-pointer"
            whileHover={{ y: -5, scale: 1.03 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Youtube className="text-[#FF0000] w-6 h-6" />
            <span className="font-bold text-on-surface-variant group-hover:text-primary">YouTube</span>
          </motion.a>
          <motion.a 
            variants={itemVariants}
            href="https://www.instagram.com/maitri_welfare_foundation_" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex items-center gap-3 bg-surface-container-low px-8 py-4 rounded-2xl shadow-sm hover:shadow-md transition-all group border border-outline-variant/20 cursor-pointer"
            whileHover={{ y: -5, scale: 1.03 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Instagram className="text-[#E1306C] w-6 h-6" />
            <span className="font-bold text-on-surface-variant group-hover:text-primary">Instagram</span>
          </motion.a>
          <motion.button 
            variants={itemVariants}
            onClick={() => setShowShareMenu(true)}
            className="flex items-center gap-3 bg-surface-container-low px-8 py-4 rounded-2xl shadow-sm hover:shadow-md transition-all group border border-outline-variant/20 cursor-pointer"
            whileHover={{ y: -5, scale: 1.03 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Share2 className="text-primary w-6 h-6" />
            <span className="font-bold text-on-surface-variant group-hover:text-primary">Share Journey</span>
          </motion.button>
        </motion.div>
      </section>

      {/* Share Modal */}
      <AnimatePresence>
        {showShareMenu && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm" onClick={() => setShowShareMenu(false)}>
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-3xl p-8 max-w-sm w-full shadow-2xl relative"
            >
              <button 
                onClick={() => setShowShareMenu(false)}
                className="absolute top-4 right-4 text-on-surface-variant hover:text-primary transition-colors cursor-pointer"
              >
                <X className="w-6 h-6" />
              </button>
              
              <h3 className="text-2xl font-bold text-primary mb-8 text-center">Share Our Journey</h3>
              
              <div className="grid grid-cols-4 gap-4">
                {/* WhatsApp */}
                <button 
                  onClick={() => window.open(`https://wa.me/?text=${encodeURIComponent('Check out the amazing work Maitri Welfare Foundation is doing! ' + window.location.origin)}`, '_blank')} 
                  className="flex flex-col items-center gap-3 group cursor-pointer"
                >
                  <div className="w-14 h-14 rounded-full bg-[#25D366]/10 flex items-center justify-center group-hover:bg-[#25D366]/20 transition-all group-hover:scale-110">
                    <MessageCircle className="w-7 h-7 text-[#25D366]" />
                  </div>
                  <span className="text-xs font-bold text-on-surface-variant group-hover:text-[#25D366] transition-colors">WhatsApp</span>
                </button>
                
                {/* Instagram */}
                <button 
                  onClick={() => {
                    navigator.clipboard.writeText('Check out the amazing work Maitri Welfare Foundation is doing! ' + window.location.origin);
                    toast.success('Message & Link copied! Open Instagram to share.');
                    setTimeout(() => window.open('https://instagram.com', '_blank'), 1000);
                  }} 
                  className="flex flex-col items-center gap-3 group"
                >
                  <div className="w-14 h-14 rounded-full bg-[#E1306C]/10 flex items-center justify-center group-hover:bg-[#E1306C]/20 transition-all group-hover:scale-110">
                    <Instagram className="w-7 h-7 text-[#E1306C]" />
                  </div>
                  <span className="text-xs font-bold text-on-surface-variant group-hover:text-[#E1306C] transition-colors">Instagram</span>
                </button>

                {/* Mail */}
                <button 
                  onClick={() => window.open(`mailto:?subject=Support Maitri Welfare Foundation&body=${encodeURIComponent('Check out the amazing work Maitri Welfare Foundation is doing for the community and nature! ' + window.location.origin)}`, '_blank')} 
                  className="flex flex-col items-center gap-3 group"
                >
                  <div className="w-14 h-14 rounded-full bg-blue-500/10 flex items-center justify-center group-hover:bg-blue-500/20 transition-all group-hover:scale-110">
                    <Mail className="w-7 h-7 text-blue-500" />
                  </div>
                  <span className="text-xs font-bold text-on-surface-variant group-hover:text-blue-500 transition-colors">Mail</span>
                </button>
                
                {/* Copy */}
                <button 
                  onClick={() => {
                    navigator.clipboard.writeText('Check out the amazing work Maitri Welfare Foundation is doing for the community and nature! ' + window.location.origin);
                    setCopied(true);
                    toast.success('Message & Link copied to clipboard!');
                    setTimeout(() => setCopied(false), 2000);
                  }} 
                  className="flex flex-col items-center gap-3 group"
                >
                  <div className="w-14 h-14 rounded-full bg-gray-500/10 flex items-center justify-center group-hover:bg-gray-500/20 transition-all group-hover:scale-110">
                    {copied ? <Check className="w-7 h-7 text-green-500" /> : <Copy className="w-7 h-7 text-gray-500" />}
                  </div>
                  <span className="text-xs font-bold text-on-surface-variant group-hover:text-gray-700 transition-colors">{copied ? 'Copied' : 'Copy'}</span>
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
