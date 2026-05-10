import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Send, Loader2, Heart, Users, Globe, Sparkles, Upload, Eye, ArrowRight } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';
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
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: "easeOut" } }
};

export default function Volunteer() {
  const [isSending, setIsSending] = useState(false);
  const [previews, setPreviews] = useState<Record<string, string>>({});
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

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>, name: string) => {
    const file = e.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setPreviews(prev => ({ ...prev, [name]: url }));
    }
  };

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

    // Validation for skills
    if (formData.getAll('skills').length === 0) {
      toast.error('Please select at least one skill');
      setIsSending(false);
      return;
    }

    // Helper to upload to Cloudinary
    const uploadToCloudinary = async (file: File, label: string) => {
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
        toast.success(`${label} uploaded successfully!`);
        return json.secure_url;
      } catch (err) {
        console.error('Upload error:', err);
        toast.error(`Failed to upload ${label}`);
        return null;
      }
    };

    try {
      // 1. Upload all files to Cloudinary
      toast.info('Starting document upload...');
      const aadhaarUrl = await uploadToCloudinary(formData.get('aadhaar_pan') as File, 'Aadhaar Card');
      const photoUrl = await uploadToCloudinary(formData.get('passport_photo') as File, 'Passport Photo');
      const signatureUrl = await uploadToCloudinary(formData.get('signature') as File, 'Signature');
      const paymentUrl = await uploadToCloudinary(formData.get('payment_screenshot') as File, 'Payment Screenshot');

      // 2. Google Sheets Flow
      const sheetData = {
        name: formData.get('name'),
        email: formData.get('email'),
        phone: formData.get('phone'),
        dob: formData.get('dob'),
        skills: formData.getAll('skills').join(', '),
        message: formData.get('message'),
        aadhaar_link: aadhaarUrl,
        photo_link: photoUrl,
        signature_link: signatureUrl,
        payment_link: paymentUrl,
        applied_at: "'" + new Date().toLocaleString()
      };

      const SHEETDB_URL = 'https://sheetdb.io/api/v1/szlyae3x9dd1o';
      const res = await fetch(SHEETDB_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ data: [sheetData] })
      });
      
      if (res.ok) {
        toast.success('Registration successful! Welcome to Maitri.');
        formRef.current?.reset();
        setPreviews({});
        generateCaptcha();
      } else {
        throw new Error('Sheet submission failed');
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
      <section className="bg-primary-container py-24 relative overflow-hidden text-on-primary-container">
        <motion.div 
          className="absolute inset-0 opacity-10"
          initial={{ scale: 1.15 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          <img
            src="https://images.pexels.com/photos/1046820/pexels-photo-1046820.jpeg?auto=compress&cs=tinysrgb&w=1260"
            className="w-full h-full object-cover"
            alt="Nature bg"
          />
        </motion.div>
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            <motion.span 
              variants={scaleIn}
              className="inline-block px-4 py-1 bg-secondary-container text-on-secondary-container rounded-full text-xs font-bold uppercase tracking-widest mb-6"
            >
              Become a Change Maker
            </motion.span>
            <motion.h1 
              variants={fadeInUp}
              className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6 leading-[1.1]"
            >
              Join Our Passionate Community
            </motion.h1>
            <motion.p 
              variants={fadeInUp}
              className="text-base sm:text-lg opacity-90 leading-relaxed max-w-2xl mx-auto"
            >
              Your time and skills can make a world of difference. Join Maitri Welfare Foundation and help us protect our planet and empower communities in need.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center mb-20"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {[
            { icon: Heart, title: 'Impact Lives', desc: 'Directly contribute to projects that change lives for the better.' },
            { icon: Globe, title: 'Save Nature', desc: 'Be part of large-scale reforestation and conservation efforts.' },
            { icon: Users, title: 'Meet Like-minds', desc: 'Join a passionate community of volunteers across the country.' }
          ].map((item, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              whileHover={{ y: -10, boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}
              transition={{ type: "spring", stiffness: 300 }}
              className="p-8 rounded-3xl bg-surface-container-low border border-outline-variant/30"
            >
              <motion.div 
                className="w-16 h-16 bg-primary-container text-on-primary-container rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg"
                whileHover={{ scale: 1.15, rotate: 5 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <item.icon className="w-8 h-8" />
              </motion.div>
              <h3 className="text-xl font-bold text-primary mb-3">{item.title}</h3>
              <p className="text-on-surface-variant text-sm leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          {/* Information Section */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInLeft}
            className="lg:sticky lg:top-32 self-start bg-surface-container-low p-8 md:p-12 rounded-[32px] border border-outline-variant/20 shadow-sm"
          >
            <motion.h2 
              className="text-3xl sm:text-4xl font-bold text-primary mb-8"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              How You Can Help
            </motion.h2>
            <div className="space-y-8">
              {[
                { title: 'Environmental Drives', desc: 'Tree plantation, beach cleanups, and waste management workshops.' },
                { title: 'Community Support', desc: 'Assisting in food distribution and educational camps for children.' },
                { title: 'Digital Advocacy', desc: 'Helping us spread awareness through social media and content creation.' },
                { title: 'Event Planning', desc: 'Organizing fundraising events and local community meetups.' }
              ].map((role, idx) => (
                <motion.div 
                  key={idx} 
                  className="flex gap-6 group"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.15 * idx + 0.2 }}
                  whileHover={{ x: 8 }}
                >
                  <motion.div 
                    className="flex-shrink-0 w-10 h-10 rounded-full bg-secondary-container text-on-secondary-container flex items-center justify-center font-bold text-sm shadow-md"
                    whileHover={{ scale: 1.2 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    {idx + 1}
                  </motion.div>
                  <div>
                    <h4 className="text-lg font-bold text-on-surface mb-2">{role.title}</h4>
                    <p className="text-on-surface-variant text-sm leading-relaxed">{role.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div 
              className="mt-12 p-8 bg-surface-container-high rounded-3xl border border-outline-variant/30 flex items-center gap-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
            >
              <motion.div
                animate={{ rotate: [0, 15, -15, 0], scale: [1, 1.1, 1] }}
                transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              >
                <Sparkles className="w-12 h-12 text-secondary shrink-0" />
              </motion.div>
              <p className="text-sm font-medium italic text-on-surface-variant">
                "Volunteering with Maitri was one of the most rewarding experiences of my life. Seeing the trees we planted grow is like seeing our future thrive."
              </p>
            </motion.div>
          </motion.div>

          {/* Registration Form */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInRight}
            className="bg-white rounded-3xl p-10 shadow-2xl border border-outline-variant/30 relative"
          >
            <motion.div 
              className="absolute top-0 right-10 -translate-y-1/2 bg-secondary text-on-secondary px-6 py-2 rounded-full text-xs font-bold uppercase tracking-widest shadow-xl"
              initial={{ opacity: 0, y: -10, scale: 0.8 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, type: "spring", stiffness: 300 }}
            >
              Registration Form
            </motion.div>
            <form ref={formRef} className="space-y-6" onSubmit={handleSubmit}>
              <motion.div 
                className="grid grid-cols-1 sm:grid-cols-2 gap-6"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
              >
                <div>
                  <label className="block text-[10px] uppercase font-bold text-on-surface-variant mb-2 tracking-widest">Full Name <span className="text-red-500">*</span></label>
                  <input name="name" required className="w-full rounded-xl border-2 border-outline-variant/50 focus:border-primary focus:ring-0 px-4 py-3 text-sm font-semibold outline-none transition-all" placeholder="Jane Doe" type="text" />
                </div>
                <div>
                  <label className="block text-[10px] uppercase font-bold text-on-surface-variant mb-2 tracking-widest">Date of Birth <span className="text-red-500">*</span></label>
                  <input name="dob" required className="w-full rounded-xl border-2 border-outline-variant/50 focus:border-primary focus:ring-0 px-4 py-3 text-sm font-semibold outline-none transition-all" type="date" />
                </div>
              </motion.div>

              <motion.div 
                className="grid grid-cols-1 sm:grid-cols-2 gap-6"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <div>
                  <label className="block text-[10px] uppercase font-bold text-on-surface-variant mb-2 tracking-widest">Email Address <span className="text-red-500">*</span></label>
                  <input name="email" required className="w-full rounded-xl border-2 border-outline-variant/50 focus:border-primary focus:ring-0 px-4 py-3 text-sm font-semibold outline-none transition-all" placeholder="jane@example.com" type="email" />
                </div>
                <div>
                  <label className="block text-[10px] uppercase font-bold text-on-surface-variant mb-2 tracking-widest">Phone Number <span className="text-red-500">*</span></label>
                  <input name="phone" required className="w-full rounded-xl border-2 border-outline-variant/50 focus:border-primary focus:ring-0 px-4 py-3 text-sm font-semibold outline-none transition-all" placeholder="+91 98765 43210" type="tel" />
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                <label className="block text-[10px] uppercase font-bold text-on-surface-variant mb-4 tracking-widest">Skills & Expertise <span className="text-red-500">*</span></label>
                <div className="grid grid-cols-2 gap-4 bg-surface-container-low p-4 rounded-2xl border border-outline-variant/30">
                  {[
                    'Photography', 'Social Media',
                    'Content Writing', 'Report Writing',
                    'Promotion', 'Event Management'
                  ].map((skill, idx) => (
                    <motion.label 
                      key={skill} 
                      className="flex items-center gap-3 cursor-pointer group"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.05 * idx + 0.35 }}
                      whileHover={{ x: 4 }}
                    >
                      <input type="checkbox" name="skills" value={skill} className="w-5 h-5 rounded border-2 border-outline-variant/50 text-primary focus:ring-primary transition-all" />
                      <span className="text-xs font-semibold text-on-surface-variant group-hover:text-primary">{skill}</span>
                    </motion.label>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
                <label className="block text-[10px] uppercase font-bold text-on-surface-variant mb-2 tracking-widest">Required Documents (PDF/JPG) <span className="text-red-500">*</span></label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    { name: 'aadhaar_pan', label: 'Aadhaar / PAN Card' },
                    { name: 'passport_photo', label: 'Passport Size Photo' },
                    { name: 'signature', label: 'Digital Signature' }
                  ].map((doc, idx) => (
                    <motion.div 
                      key={doc.name} 
                      className="relative group"
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.05 * idx + 0.45 }}
                      whileHover={{ scale: 1.03 }}
                    >
                      <input 
                        name={doc.name} 
                        type="file" 
                        required
                        accept="image/*,.pdf" 
                        onChange={(e) => handleFileChange(e, doc.name)}
                        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-20" 
                      />
                      <div className={`border-2 border-dashed ${previews[doc.name] ? 'border-primary bg-primary/5' : 'border-outline-variant/50'} group-hover:border-primary rounded-xl px-4 py-3 text-center transition-all relative overflow-hidden`}>
                        {previews[doc.name] ? (
                          <div className="flex items-center justify-between gap-2">
                            <span className="text-[9px] font-bold text-primary truncate max-w-[80px]">{doc.label} Selected</span>
                            <a href={previews[doc.name]} target="_blank" rel="noreferrer" className="relative z-30 p-1 bg-primary text-on-primary rounded-full hover:scale-110 transition-transform cursor-pointer">
                              <Eye className="w-3 h-3" />
                            </a>
                          </div>
                        ) : (
                          <>
                            <Upload className="w-4 h-4 mx-auto mb-1 text-on-surface-variant/40" />
                            <p className="text-[9px] font-bold text-on-surface-variant uppercase tracking-tighter">{doc.label}</p>
                          </>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              <motion.div 
                className="p-6 bg-primary-container/30 rounded-3xl border-2 border-primary/20"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
              >
                <div className="flex items-center gap-3 mb-4 text-primary font-bold">
                  <motion.div
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
                  >
                    <Sparkles className="w-5 h-5" />
                  </motion.div>
                  <span>Registration Fee: ₹200</span>
                </div>
                <p className="text-xs text-on-surface-variant mb-6 leading-relaxed">
                  Please pay the registration fee via Bank Transfer and upload the screenshot below for verification.
                </p>
                <motion.div 
                  className="relative group"
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <input 
                    name="payment_screenshot" 
                    type="file" 
                    required
                    accept="image/*" 
                    onChange={(e) => {
                      const file = e.target.files?.[0];
                      if (file && file.size > 500000) {
                        toast.warning('Large file detected. Upload may take a few seconds.');
                      }
                      handleFileChange(e, 'payment_screenshot');
                    }}
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-20" 
                  />
                  <div className={`bg-white border-2 border-dashed ${previews.payment_screenshot ? 'border-primary' : 'border-primary/50'} group-hover:border-primary rounded-2xl px-6 py-6 text-center transition-all shadow-sm relative`}>
                    {previews.payment_screenshot ? (
                      <div className="flex flex-col items-center gap-2">
                        <div className="flex items-center gap-3">
                          <p className="text-xs font-bold text-primary uppercase tracking-widest">Screenshot Selected</p>
                          <a href={previews.payment_screenshot} target="_blank" rel="noreferrer" className="relative z-30 p-2 bg-primary text-on-primary rounded-full hover:scale-110 transition-transform cursor-pointer">
                            <Eye className="w-4 h-4" />
                          </a>
                        </div>
                      </div>
                    ) : (
                      <>
                        <Upload className="w-6 h-6 mx-auto mb-2 text-primary" />
                        <p className="text-xs font-bold text-primary uppercase tracking-widest">Upload Payment Screenshot <span className="text-red-500">*</span></p>
                        <p className="text-[10px] text-on-surface-variant/60 mt-1">Proof of Bank Transfer</p>
                      </>
                    )}
                  </div>
                </motion.div>
                <motion.div 
                  className="mt-6 text-center"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Link to="/support" className="inline-flex items-center gap-2 text-primary font-bold text-xs hover:underline group cursor-pointer">
                    View bank transfer details here
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </motion.div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
              >
                <label className="block text-[10px] uppercase font-bold text-on-surface-variant mb-2 tracking-widest">Motivation & Message <span className="text-red-500">*</span></label>
                <textarea name="message" required rows={3} className="w-full rounded-xl border-2 border-outline-variant/50 focus:border-primary focus:ring-0 px-4 py-3 text-sm font-semibold outline-none transition-all resize-none" placeholder="How do you wish to contribute?"></textarea>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="bg-surface-container-low p-5 rounded-2xl border border-outline-variant/30 flex flex-col sm:flex-row items-center justify-between gap-4 mt-8"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center font-bold text-primary">
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
                  className="w-full sm:w-32 rounded-xl border-2 border-outline-variant/50 focus:border-primary focus:ring-0 px-4 py-2.5 text-sm font-bold outline-none transition-all text-center"
                  placeholder="Answer"
                />
              </motion.div>

              <motion.button
                type="submit"
                disabled={isSending}
                className="w-full bg-primary text-on-primary py-4 rounded-2xl font-bold text-lg hover:opacity-95 transition-all shadow-xl flex items-center justify-center gap-3 disabled:opacity-70 disabled:cursor-not-allowed mt-8 cursor-pointer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.7 }}
              >
                {isSending ? (
                  <Loader2 className="w-5 h-5 animate-spin" />
                ) : (
                  <Send className="w-5 h-5" />
                )}
                {isSending ? 'Submitting...' : 'Apply to Volunteer'}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
