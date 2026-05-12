import React from 'react';
import { motion } from 'motion/react';
import { Calendar, MapPin, Filter, ArrowRight, X, Send, Loader2, Sparkles, ClipboardList, Eye } from 'lucide-react';
import { Link } from 'react-router-dom';
import { AnimatedCounter } from '../components/AnimatedCounter';
import { useState, useRef, useEffect } from 'react';
import { toast } from 'sonner';
import { AnimatePresence } from 'motion/react';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const itemVariants = {
  hidden: { y: 25, opacity: 0 },
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

const fadeInLeft = {
  hidden: { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const fadeInRight = {
  hidden: { opacity: 0, x: 40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const events = [
  {
    category: 'Environment',
    date: 'Nov 24, 2024 • 09:00 AM',
    title: 'Tree Plantation Drive',
    desc: 'Help us restore the local green belt by planting 500 indigenous saplings. Tools and refreshments provided.',
    location: 'City Central Park',
    img: 'https://images.pexels.com/photos/20356926/pexels-photo-20356926.jpeg?auto=compress&cs=tinysrgb&w=1260'
  },
  {
    category: 'Social Welfare',
    date: 'Dec 05, 2024 • 12:30 PM',
    title: 'Food Distribution',
    desc: 'Providing balanced meals to underprivileged families in the northern suburbs. Join as a server or logistics aid.',
    location: 'North Community Center',
    img: 'https://images.pexels.com/photos/5909876/pexels-photo-5909876.jpeg?auto=compress&cs=tinysrgb&w=1260'
  },
  {
    category: 'Health',
    date: 'Dec 12, 2024 • 08:00 AM',
    title: 'Community Health Camp',
    desc: 'Free general check-ups, eye screenings, and basic medication distribution for senior citizens.',
    location: 'Maitri Wellness Hub',
    img: 'https://images.pexels.com/photos/14558560/pexels-photo-14558560.jpeg?auto=compress&cs=tinysrgb&w=1260'
  }
];

export default function Events() {
  const [tab, setTab] = useState('upcoming');
  const [isProposalModalOpen, setIsProposalModalOpen] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [attachmentPreview, setAttachmentPreview] = useState<string | null>(null);
  const [captcha, setCaptcha] = useState({ question: '', answer: 0 });
  const [userCaptcha, setUserCaptcha] = useState('');
  const proposalFormRef = useRef<HTMLFormElement>(null);

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

  useEffect(() => {
    if (isProposalModalOpen) {
      generateCaptcha();
    }
  }, [isProposalModalOpen]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setAttachmentPreview(URL.createObjectURL(file));
    }
  };

  const handleProposalSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!proposalFormRef.current) return;

    if (parseInt(userCaptcha) !== captcha.answer) {
      toast.error('Incorrect CAPTCHA answer. Please try again.');
      generateCaptcha();
      return;
    }

    setIsSending(true);
    const formData = new FormData(proposalFormRef.current);

    // Helper to upload to Cloudinary
    const uploadToCloudinary = async (file: File) => {
      if (!file || file.size === 0) return null;

      const data = new FormData();
      data.append('file', file);
      data.append('upload_preset', 'ml_default');
      data.append('cloud_name', 'dbzbpmkff');

      try {
        const res = await fetch('https://api.cloudinary.com/v1_1/dbzbpmkff/image/upload', {
          method: 'POST',
          body: data
        });
        const json = await res.json();
        return json.secure_url;
      } catch (err) {
        console.error('Upload error:', err);
        return null;
      }
    };

    try {
      toast.info('Uploading attachment...');
      const attachmentUrl = await uploadToCloudinary(formData.get('attachment') as File);

      const proposalData = {
        name: formData.get('name'),
        email: formData.get('email'),
        phone: formData.get('phone'),
        event_title: formData.get('event_title'),
        category: formData.get('category'),
        description: formData.get('description'),
        attachment_link: attachmentUrl || 'No attachment',
        submitted_at: "'" + new Date().toLocaleString()
      };

      const SHEETDB_URL = 'https://sheetdb.io/api/v1/szlyae3x9dd1o?sheet=Sheet2';

      const response = await fetch(SHEETDB_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ data: [proposalData] })
      });

      if (response.ok) {
        toast.success('Proposal submitted successfully!');
        setIsProposalModalOpen(false);
        setAttachmentPreview(null);
        proposalFormRef.current.reset();
        generateCaptcha();
      } else {
        throw new Error('Failed to submit');
      }
    } catch (error) {
      console.error('Proposal Error:', error);
      toast.error('Failed to submit proposal.');
    } finally {
      setIsSending(false);
    }
  };

  return (
    <div className="pt-20">
      {/* Background Hero */}
      <section className="relative h-[450px] flex items-center justify-center overflow-hidden">
        <motion.img
          className="absolute inset-0 w-full h-full object-cover"
          src="https://images.pexels.com/photos/1046820/pexels-photo-1046820.jpeg?auto=compress&cs=tinysrgb&w=1260"
          alt="Forest"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        />
        <div className="absolute inset-0 bg-primary/60 backdrop-blur-[2px]"></div>
        <div className="relative z-10 text-center px-6 max-w-4xl text-on-primary">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            <motion.h1
              variants={fadeInUp}
              className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6 leading-[1.1]"
            >
              Our Collective Journey
            </motion.h1>
            <motion.p
              variants={fadeInUp}
              className="text-base sm:text-lg opacity-90 max-w-2xl mx-auto leading-relaxed"
            >
              Join our upcoming initiatives or explore our past achievements. Every action counts towards a more compassionate world.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Tabs and Filter */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <motion.div
          className="flex flex-col md:flex-row justify-between items-end gap-8 mb-12 border-b border-outline-variant/30"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <motion.div variants={fadeInLeft} className="flex gap-6 sm:gap-12">
            <button
              onClick={() => setTab('upcoming')}
              className={`pb-4 text-lg sm:text-2xl font-bold transition-all border-b-4 cursor-pointer ${tab === 'upcoming' ? 'border-secondary text-primary' : 'border-transparent text-on-surface-variant hover:text-primary'
                }`}
            >
              Upcoming
            </button>
            <button
              onClick={() => setTab('past')}
              className={`pb-4 text-lg sm:text-2xl font-bold transition-all border-b-4 cursor-pointer ${tab === 'past' ? 'border-secondary text-primary' : 'border-transparent text-on-surface-variant hover:text-primary'
                }`}
            >
              Past
            </button>
          </motion.div>
          <motion.div
            variants={fadeInRight}
            whileHover={{ scale: 1.05 }}
            className="mb-4 flex items-center gap-2 text-on-surface-variant font-semibold cursor-pointer hover:text-primary transition-colors"
          >
            <Filter className="w-5 h-5" />
            <span>Filter by Category</span>
          </motion.div>
        </motion.div>

        {/* Events Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {events.map((event, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              whileHover={{ y: -10, boxShadow: "0 25px 50px rgba(0,0,0,0.12)" }}
              transition={{ type: "spring", stiffness: 300 }}
              className="bg-surface border border-outline-variant rounded-3xl overflow-hidden shadow-sm transition-all group"
            >
              <div className="h-60 overflow-hidden relative">
                <motion.img
                  className="w-full h-full object-cover"
                  src={event.img}
                  alt={event.title}
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.7 }}
                />
                <motion.div
                  className="absolute top-4 right-4 bg-secondary-container text-on-secondary-container px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + idx * 0.1 }}
                >
                  {event.category}
                </motion.div>
              </div>
              <div className="p-8">
                <motion.div
                  className="flex items-center gap-2 text-secondary font-bold text-xs uppercase tracking-widest mb-3"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + idx * 0.1 }}
                >
                  <Calendar className="w-4 h-4" />
                  {event.date}
                </motion.div>
                <h3 className="text-2xl font-bold text-primary mb-3">{event.title}</h3>
                <p className="text-on-surface-variant text-sm mb-8 line-clamp-2 leading-relaxed">
                  {event.desc}
                </p>
                <div className="flex items-center justify-between mt-auto">
                  <div className="flex items-center gap-2 text-on-surface-variant text-xs font-medium uppercase tracking-wider">
                    <MapPin className="w-4 h-4 text-secondary" />
                    {event.location}
                  </div>
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Link to="/volunteer" className="bg-primary text-on-primary px-6 py-2 rounded-xl text-sm font-bold hover:bg-primary-container transition-all">
                      Join Now
                    </Link>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Host an Event CTA */}
        <motion.div
          className="mt-24 bg-surface-container-low rounded-3xl p-10 flex flex-col md:flex-row items-center gap-8 border border-outline-variant/30"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          whileHover={{ boxShadow: "0 15px 40px rgba(0,0,0,0.08)" }}
        >
          <motion.div
            className="flex-grow text-center md:text-left"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInLeft}
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-2">Host an Event</h2>
            <p className="text-sm sm:text-base text-on-surface-variant leading-relaxed">Do you have a cause or an idea for a community drive? Partner with Maitri to bring it to life.</p>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <button
              onClick={() => setIsProposalModalOpen(true)}
              className="border-2 border-primary text-primary px-10 py-3 rounded-full font-bold hover:bg-primary hover:text-on-primary transition-all text-center inline-block cursor-pointer"
            >
              Submit Proposal
            </button>
          </motion.div>
        </motion.div>
      </section>

      {/* Proposal Modal */}
      <AnimatePresence>
        {isProposalModalOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsProposalModalOpen(false)}
              className="absolute inset-0 bg-primary/20 backdrop-blur-sm cursor-pointer"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative bg-white rounded-[1.5rem] shadow-2xl w-full max-w-2xl overflow-hidden max-h-[90vh] flex flex-col"
            >
              <div className="flex justify-between items-center p-6 border-b border-outline-variant/30 flex-shrink-0">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center">
                    <ClipboardList className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-primary leading-tight">Event Proposal</h2>
                    <p className="text-[10px] text-on-surface-variant font-medium tracking-wide">Partner with us</p>
                  </div>
                </div>
                <button
                  onClick={() => setIsProposalModalOpen(false)}
                  className="p-1.5 hover:bg-surface-container rounded-full transition-colors cursor-pointer"
                >
                  <X className="w-5 h-5 text-on-surface-variant" />
                </button>
              </div>

              <form ref={proposalFormRef} onSubmit={handleProposalSubmit} className="p-6 space-y-5 overflow-y-auto custom-scrollbar flex-grow max-h-[50vh]">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase font-bold text-on-surface-variant tracking-widest px-1">Full Name <span className="text-red-500">*</span></label>
                    <input
                      name="name"
                      required
                      className="w-full rounded-xl border-2 border-outline-variant/50 focus:border-primary focus:ring-0 px-4 py-3 text-sm font-semibold outline-none transition-all"
                      placeholder="Enter your name"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase font-bold text-on-surface-variant tracking-widest px-1">Phone Number <span className="text-red-500">*</span></label>
                    <input
                      name="phone"
                      required
                      type="tel"
                      className="w-full rounded-xl border-2 border-outline-variant/50 focus:border-primary focus:ring-0 px-4 py-3 text-sm font-semibold outline-none transition-all"
                      placeholder="+91 98765 43210"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] uppercase font-bold text-on-surface-variant tracking-widest px-1">Email Address <span className="text-red-500">*</span></label>
                  <input
                    name="email"
                    required
                    type="email"
                    className="w-full rounded-xl border-2 border-outline-variant/50 focus:border-primary focus:ring-0 px-4 py-3 text-sm font-semibold outline-none transition-all"
                    placeholder="your@email.com"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase font-bold text-on-surface-variant tracking-widest px-1">Proposed Event Title <span className="text-red-500">*</span></label>
                    <input
                      name="event_title"
                      required
                      className="w-full rounded-xl border-2 border-outline-variant/50 focus:border-primary focus:ring-0 px-4 py-3 text-sm font-semibold outline-none transition-all"
                      placeholder="e.g. Beach Cleanup Drive"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase font-bold text-on-surface-variant tracking-widest px-1">Category <span className="text-red-500">*</span></label>
                    <select
                      name="category"
                      required
                      className="w-full rounded-xl border-2 border-outline-variant/50 focus:border-primary focus:ring-0 px-4 py-3 text-sm font-semibold outline-none transition-all bg-white cursor-pointer"
                    >
                      <option value="Environment">Environment</option>
                      <option value="Social Welfare">Social Welfare</option>
                      <option value="Education">Education</option>
                      <option value="Health">Health</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] uppercase font-bold text-on-surface-variant tracking-widest px-1">Proposal Details <span className="text-red-500">*</span></label>
                  <textarea
                    name="description"
                    required
                    rows={3}
                    className="w-full rounded-xl border-2 border-outline-variant/50 focus:border-primary focus:ring-0 px-4 py-3 text-sm font-semibold outline-none transition-all resize-none"
                    placeholder="Describe your event idea..."
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] uppercase font-bold text-on-surface-variant tracking-widest px-1">Attachments <span className="text-red-500">*</span></label>
                  <div className="relative group">
                    <input
                      name="attachment"
                      type="file"
                      required
                      accept="image/*,.pdf"
                      onChange={handleFileChange}
                      className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-20"
                    />
                    <div className={`border-2 border-dashed ${attachmentPreview ? 'border-primary bg-primary/5' : 'border-outline-variant/50'} group-hover:border-primary rounded-2xl px-6 py-6 text-center transition-all relative overflow-hidden flex flex-col items-center gap-2`}>
                      {attachmentPreview ? (
                        <div className="flex items-center gap-3">
                          <ClipboardList className="w-6 h-6 text-primary" />
                          <span className="text-xs font-bold text-primary">Document Selected</span>
                          <Eye className="w-4 h-4 text-primary" />
                        </div>
                      ) : (
                        <>
                          <Send className="w-5 h-5 text-on-surface-variant/40 rotate-[-45deg]" />
                          <p className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest">Upload Proposal PDF or Image (Required)</p>
                        </>
                      )}
                    </div>
                  </div>
                </div>

                <div className="bg-surface-container-low p-4 rounded-xl border border-outline-variant/30 flex flex-col sm:flex-row items-center justify-between gap-4">
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
                </div>
              </form>

              <div className="p-6 border-t border-outline-variant/30 bg-surface-container-low">
                <motion.button
                  onClick={() => proposalFormRef.current?.requestSubmit()}
                  disabled={isSending}
                  className="w-full bg-primary text-on-primary py-2.5 rounded-xl font-bold text-base hover:opacity-95 transition-all shadow-lg flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed cursor-pointer"
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {isSending ? (
                    <Loader2 className="w-4 h-4 animate-spin" />
                  ) : (
                    <Send className="w-4 h-4" />
                  )}
                  {isSending ? 'Submitting...' : 'Submit Proposal'}
                </motion.button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Impact Numbers */}
      <section className="bg-primary-container py-24">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.h2
            className="text-3xl sm:text-4xl font-bold text-on-primary mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            Our Impact in Numbers
          </motion.h2>
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              { val: '150+', label: 'Events Hosted' },
              { val: '5K', label: 'Lives Touched' },
              { val: '200+', label: 'Volunteers' },
              { val: '10+', label: 'Partner NGOs' }
            ].map((stat, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                whileHover={{ scale: 1.08, y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="bg-white/5 backdrop-blur-md p-8 rounded-2xl border border-on-primary/10 group cursor-pointer"
              >
                <motion.div
                  className="text-secondary-container text-4xl font-extrabold mb-2"
                  initial={{ scale: 0.5, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1, type: "spring", stiffness: 200 }}
                >
                  <AnimatedCounter value={stat.val} />
                </motion.div>
                <div className="text-on-primary/70 text-xs font-bold uppercase tracking-widest">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
