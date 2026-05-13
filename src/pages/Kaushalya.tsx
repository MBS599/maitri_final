import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, Heart, BookOpen, Scissors, TrendingUp, ArrowRight, Send, Loader2, Award, Youtube, Mic, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState, useRef, useEffect } from 'react';
import award2023 from '../assets/alka_gujnan.png';
import award2024 from '../assets/shilpa_datar.png';
import award2025 from '../assets/sapana_kakade.png';
// @ts-ignore
import rangoliSheetImg from '../assets/news/rangoli_sheet.png';
import { toast } from 'sonner';

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

const scaleIn = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.7, ease: "easeOut" } }
};

export default function Kaushalya() {
  const [isSending, setIsSending] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState<string | null>(null);
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

    try {
      const sheetData = {
        name: formData.get('name'),
        email: formData.get('email'),
        phone: formData.get('phone'),
        expertise: formData.get('expertise'),
        message: formData.get('message'),
        applied_at: "'" + new Date().toLocaleString()
      };

      const SHEETDB_URL = 'https://sheetdb.io/api/v1/szlyae3x9dd1o?sheet=Sheet3';
      const res = await fetch(SHEETDB_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ data: [sheetData] })
      });

      if (res.ok) {
        toast.success('Mentorship application submitted successfully!');
        formRef.current?.reset();
        generateCaptcha();
      } else {
        throw new Error('Submission failed');
      }
    } catch (error) {
      console.error('Submission Error:', error);
      toast.error('Failed to submit application. Please try again.');
    } finally {
      setIsSending(false);
    }
  };

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative h-[550px] flex items-center overflow-hidden bg-primary text-on-primary">
        <motion.div
          className="absolute inset-0 z-0 opacity-20"
          initial={{ scale: 1.15 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          <img
            alt="Kaushalya Hero"
            className="w-full h-full object-cover object-[center_30%]"
            src="https://images.pexels.com/photos/5909876/pexels-photo-5909876.jpeg?auto=compress&cs=tinysrgb&w=1260"
          />
        </motion.div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="max-w-2xl"
          >
            <motion.div variants={itemVariants} className="flex items-center gap-3 mb-6">
              <motion.div
                animate={{ rotate: [0, 15, -15, 0], scale: [1, 1.2, 1] }}
                transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              >
                <Sparkles className="text-secondary-container w-6 h-6" />
              </motion.div>
              <span className="font-bold tracking-widest uppercase text-xs">Women Empowerment Initiative</span>
            </motion.div>
            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6 leading-[1.1]"
            >
              Kaushalya: Skill, Strength & Success
            </motion.h1>
            <motion.p
              variants={itemVariants}
              className="text-base sm:text-lg opacity-90 mb-8 leading-relaxed"
            >
              Empowering women through vocational training, financial independence, and community leadership to build a more equitable future.
            </motion.p>
            <motion.div variants={itemVariants} className="flex flex-wrap gap-4">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link to="/support" className="bg-secondary-container text-on-secondary-container px-8 py-3 rounded-full font-bold transition-all shadow-xl inline-block">
                  Support This Cause
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Our Mission */}
      <section className="py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="max-w-3xl mx-auto"
          >
            <motion.h2 variants={fadeInUp} className="text-3xl sm:text-4xl font-bold text-primary mb-6">Empowering Half the Sky</motion.h2>
            <motion.p variants={fadeInUp} className="text-on-surface-variant leading-relaxed text-base sm:text-lg">
              The 'Kaushalya' initiative focuses on bridging the skill gap for women in marginalized communities.
              We believe that when you empower a woman, you empower an entire family and ultimately, the nation.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Core Programs */}
      <section className="py-24 bg-surface-container-low">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            {[
              {
                icon: Scissors,
                title: 'Vocational Training',
                desc: 'Training in specialized handcrafting including sheet rangoli making, mombatti manufacturing, and traditional aari work to enable home-based businesses.'
              },
              {
                icon: BookOpen,
                title: 'Financial Literacy',
                desc: 'Workshops on banking, savings, and micro-entrepreneurship to foster economic independence.'
              },
              {
                icon: TrendingUp,
                title: 'Leadership Dev',
                desc: 'Building confidence and community organizing skills to create local women leaders.'
              }
            ].map((program, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                whileHover={{ y: -10, boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}
                transition={{ type: "spring", stiffness: 300 }}
                className="bg-surface p-10 rounded-3xl shadow-sm border border-outline-variant/30 transition-all group"
              >
                <motion.div
                  className="w-14 h-14 bg-primary-container text-on-primary-container rounded-2xl flex items-center justify-center mb-6 shadow-md"
                  whileHover={{ scale: 1.15, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <program.icon className="w-7 h-7" />
                </motion.div>
                <h3 className="text-2xl font-bold text-primary mb-4">{program.title}</h3>
                <p className="text-on-surface-variant text-sm leading-relaxed">{program.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Naarishakti Podcast Section */}
      <section className="py-24 bg-surface overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center gap-16">
            <motion.div
              className="flex-1"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInLeft}
            >
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 rounded-full bg-secondary-container text-on-secondary-container flex items-center justify-center">
                  <Youtube className="w-5 h-5" />
                </div>
                <span className="text-secondary font-bold tracking-widest uppercase text-xs">Annual Navratri Event</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-6">Naarishakti: Celebrating the Goddess Within</h2>
              <p className="text-on-surface-variant text-base sm:text-lg leading-relaxed mb-8">
                Every year during the auspicious days of Navratri, we host <strong>Naarishakti</strong>—a tribute to the women who tirelessly serve society. We facilitate these extraordinary women and share their inspiring life journeys through our dedicated YouTube podcast series.
              </p>
              <div className="space-y-4">
                {[
                  "Annual Felicitation of Social Workers",
                  "Deep-dive Podcast Interviews",
                  "Spreading Inspiration Worldwide",
                  "Community-driven Recognition"
                ].map((point, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-secondary"></div>
                    <span className="text-on-surface font-medium">{point}</span>
                  </div>
                ))}
              </div>
              <motion.div
                className="mt-10"
                whileHover={{ x: 5 }}
              >
                <a
                  href="https://www.youtube.com/@maitriwelfarefoundation_"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 text-primary font-bold hover:text-secondary transition-colors"
                >
                  Watch our Podcast Series <ArrowRight className="w-5 h-5" />
                </a>
              </motion.div>
            </motion.div>
            <motion.div
              className="flex-1 relative"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInRight}
            >
              <div className="relative aspect-video rounded-[2.5rem] overflow-hidden shadow-2xl border-8 border-white group bg-black">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/2DuyvmW4I6s?autoplay=1&mute=1&loop=1&playlist=2DuyvmW4I6s"
                  title="Naarishakti Podcast"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
              {/* Floating element */}
              <motion.div
                className="absolute -bottom-10 -left-10 bg-white p-6 rounded-3xl shadow-xl border border-outline-variant/30 hidden md:block"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center text-red-600">
                    <Mic className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-on-surface-variant uppercase">Latest Episode</div>
                    <div className="text-sm font-bold text-primary">Voices of Resilience</div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Narishakti Awardees Gallery */}
      <section className="py-24 bg-surface-container-low">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="text-center mb-16"
          >
            <span className="text-secondary font-bold tracking-widest uppercase text-xs">Hall of Fame</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-primary mt-2">Our Narishakti Awardees</h2>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              { year: '2025', img: award2025, title: 'Sapna Kakade', position: 'object-[25%_center]' },
              { year: '2025', img: award2024, title: 'Shilpa Datar', position: 'object-center' },
              { year: '2025', img: award2023, title: 'Alka Gujnal', position: 'object-center' }
            ].map((awardee, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                whileHover={{ y: -10 }}
                onClick={() => setSelectedPhoto(awardee.img)}
                className="bg-white rounded-[2.5rem] overflow-hidden shadow-sm border border-outline-variant/30 group cursor-pointer"
              >
                <div className="aspect-[3/4] overflow-hidden relative">
                  <motion.img
                    src={awardee.img}
                    alt={awardee.title}
                    className={`w-full h-full object-cover ${awardee.position}`}
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  />
                  <div className="absolute top-6 right-6 bg-primary text-on-primary px-4 py-1 rounded-full text-sm font-bold shadow-xl">
                    {awardee.year}
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-8">
                    <p className="text-white text-sm font-medium italic">"Recognized for exceptional service to society"</p>
                  </div>
                </div>
                <div className="p-8 text-center">
                  <h4 className="text-xl font-bold text-primary">{awardee.title}</h4>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Impact Story */}
      <section className="py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={scaleIn}
              className="relative"
            >
              <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
                <motion.img
                  alt="Lady displaying handcrafted sheet rangoli art"
                  className="w-full h-full object-cover"
                  src={rangoliSheetImg}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.6 }}
                />
              </div>
              <motion.div
                className="mt-6 lg:mt-0 lg:absolute lg:-bottom-6 lg:-right-6 bg-secondary text-on-secondary p-6 sm:p-8 rounded-2xl shadow-xl max-w-full lg:max-w-[280px] z-10"
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.5, type: "spring" }}
              >
                <p className="text-sm italic font-medium">"Kaushalya gave me the wings to fly and the skills to feed my family."</p>
                <motion.span
                  className="block mt-4 font-bold text-xs"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.8 }}
                >
                  — Sheet Rangoli Making, Batch of 2025
                </motion.span>
              </motion.div>
            </motion.div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.h2 variants={fadeInRight} className="text-3xl sm:text-4xl font-bold text-primary mb-6">Our Impact So Far</motion.h2>
              <motion.p variants={fadeInRight} className="text-on-surface-variant mb-10 leading-relaxed">
                Since its inception, Kaushalya has trained over 100 women in various skills. Many have started their own small ventures, while others have found stable employment in the local industry.
              </motion.p>

              <motion.div
                className="grid grid-cols-2 gap-8"
                variants={containerVariants}
              >
                {[
                  { value: '100+', label: 'Women Trained' },
                  { value: '50+', label: 'Micro-Enterprises' }
                ].map((stat, idx) => (
                  <motion.div
                    key={idx}
                    variants={itemVariants}
                    whileHover={{ scale: 1.05, y: -5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="p-6 bg-surface-container rounded-2xl border border-outline-variant/30 text-center"
                  >
                    <motion.span
                      className="text-3xl font-extrabold text-secondary mb-1 block"
                      initial={{ scale: 0.5, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.15, type: "spring", stiffness: 200 }}
                    >
                      {stat.value}
                    </motion.span>
                    <p className="text-on-surface-variant text-[10px] font-bold uppercase tracking-widest">{stat.label}</p>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mentor Form Section */}
      <section className="py-24 bg-surface-container-low border-t border-outline-variant/20" id="mentor-form">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInLeft}
            >
              <span className="text-secondary font-bold tracking-widest uppercase text-xs">Join Us</span>
              <h2 className="text-3xl sm:text-4xl font-bold text-primary mt-2 mb-6">Become a Mentor</h2>
              <p className="text-on-surface-variant mb-8 leading-relaxed">
                Your expertise can change lives. Share your skills and experience with our students to help them achieve their dreams of independence.
              </p>
              <div className="space-y-6">
                {[
                  { title: 'Share Your Expertise', desc: 'Guide students in traditional handcrafting, aari work, or business management.' },
                  { title: 'Flexible Commitment', desc: 'Choose a schedule that works for you, from weekly to monthly sessions.' },
                  { title: 'Direct Impact', desc: 'See firsthand the transformation your mentorship brings to these women.' }
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary-container text-on-primary-container flex items-center justify-center shrink-0">
                      <Award className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-primary">{item.title}</h4>
                      <p className="text-sm text-on-surface-variant">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInRight}
              className="bg-white p-8 md:p-12 rounded-[32px] border border-outline-variant/20 shadow-xl"
            >
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-primary">Full Name <span className="text-red-500">*</span></label>
                    <input
                      required
                      name="name"
                      type="text"
                      placeholder="John Doe"
                      className="w-full bg-surface border border-outline-variant/50 rounded-2xl px-5 py-4 focus:outline-none focus:border-primary transition-all text-sm"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-primary">Email Address <span className="text-red-500">*</span></label>
                    <input
                      required
                      name="email"
                      type="email"
                      placeholder="john@example.com"
                      className="w-full bg-surface border border-outline-variant/50 rounded-2xl px-5 py-4 focus:outline-none focus:border-primary transition-all text-sm"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-primary">Phone Number <span className="text-red-500">*</span></label>
                    <input
                      required
                      name="phone"
                      type="tel"
                      placeholder="+91 98765 43210"
                      className="w-full bg-surface border border-outline-variant/50 rounded-2xl px-5 py-4 focus:outline-none focus:border-primary transition-all text-sm"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-primary">Expertise / Skill <span className="text-red-500">*</span></label>
                    <input
                      required
                      name="expertise"
                      type="text"
                      placeholder="e.g. Handcrafting, Finance"
                      className="w-full bg-surface border border-outline-variant/50 rounded-2xl px-5 py-4 focus:outline-none focus:border-primary transition-all text-sm"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-primary">Message / Motivation <span className="text-red-500">*</span></label>
                  <textarea
                    required
                    name="message"
                    rows={4}
                    placeholder="Tell us why you'd like to join as a mentor..."
                    className="w-full bg-surface border border-outline-variant/50 rounded-2xl px-5 py-4 focus:outline-none focus:border-primary transition-all text-sm resize-none"
                  ></textarea>
                </div>

                <div className="bg-primary-container/30 p-6 rounded-2xl border border-primary-container/50">
                  <label className="text-xs font-bold uppercase tracking-wider text-primary block mb-3">Security Check</label>
                  <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                    <span className="text-lg font-bold text-primary bg-white px-6 py-3 rounded-xl border border-primary-container shadow-sm">
                      {captcha.question}
                    </span>
                    <input
                      required
                      type="number"
                      value={userCaptcha}
                      onChange={(e) => setUserCaptcha(e.target.value)}
                      placeholder="Your answer"
                      className="w-full sm:w-40 bg-white border border-outline-variant/50 rounded-xl px-5 py-3 focus:outline-none focus:border-primary transition-all font-bold text-center"
                    />
                  </div>
                </div>

                <motion.button
                  type="submit"
                  disabled={isSending}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`w-full py-5 rounded-2xl font-bold text-lg shadow-xl flex items-center justify-center gap-3 transition-all ${isSending
                    ? 'bg-outline-variant text-on-surface-variant cursor-not-allowed'
                    : 'bg-primary text-on-primary hover:bg-primary/90'
                    }`}
                >
                  {isSending ? (
                    <>
                      <Loader2 className="w-6 h-6 animate-spin" />
                      Submitting Application...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Apply as Mentor
                    </>
                  )}
                </motion.button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary py-24 text-center">
        <motion.div
          className="max-w-4xl mx-auto px-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <motion.h2 variants={fadeInUp} className="text-3xl sm:text-4xl font-bold text-on-primary mb-6">Help Us Expand Kaushalya</motion.h2>
          <motion.p variants={fadeInUp} className="text-on-primary/70 mb-12 text-lg">
            We aim to reach 1000 women by 2025. Your donation can provide training kits, handcrafting materials, and expert mentorship.
          </motion.p>
          <motion.div
            variants={fadeInUp}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link to="/support" className="bg-secondary-container text-on-secondary-container px-12 py-4 rounded-full font-bold text-lg shadow-2xl transition-all inline-block">
              Donate to Kaushalya
            </Link>
          </motion.div>
        </motion.div>
      </section>
      {/* Image Modal */}
      <AnimatePresence>
        {selectedPhoto && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedPhoto(null)}
            className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4 md:p-10 cursor-pointer"
          >
            <motion.button
              className="absolute top-6 right-6 text-white hover:text-secondary-container transition-colors p-2 bg-white/10 rounded-full backdrop-blur-md"
              onClick={() => setSelectedPhoto(null)}
            >
              <X className="w-8 h-8" />
            </motion.button>
            <motion.img
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              src={selectedPhoto}
              alt="Full view"
              className="max-w-full max-h-[90vh] object-contain rounded-2xl shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
