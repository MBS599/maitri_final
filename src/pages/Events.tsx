import React from 'react';
import { motion } from 'motion/react';
import { Calendar, MapPin, Filter, ArrowRight, X, Send, Loader2, Sparkles, ClipboardList, Eye, Instagram, Heart, ExternalLink, Play } from 'lucide-react';
import { Link } from 'react-router-dom';
import { AnimatedCounter } from '../components/AnimatedCounter';
import { useState, useRef, useEffect } from 'react';
import { toast } from 'sonner';
import { AnimatePresence } from 'motion/react';
import SEO from '../components/SEO';
import instagramEventsData from '../data/pastEventsInstagram.json';

// Local images to guarantee visibility and meaning
import news1 from '../assets/news/new1.jpeg';
import news2 from '../assets/news/news2.jpeg';
import news3 from '../assets/news/news3.jpeg';
import waariImg from '../assets/news/waari.png';
import bloodDonationImg from '../assets/news/blood_donation.jpg';
import aashramVisitImg from '../assets/news/aashram_visit.jpg';
import educationImg from '../assets/news/education.jpg';
import narishaktiImg from '../assets/news/narishakti.jpg';
import blanketDonationImg from '../assets/news/blanket_donation.png';
import about1 from '../assets/team/about1.jpg';
import about2 from '../assets/team/about2.jpg';
import samajSeva from '../assets/awards/samaj seva.jpeg';
import heroImg from '../assets/hero.png';

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
  // Upcoming Events
  {
    category: 'Social Welfare',
    date: 'May 17, 2026 • 10:00 AM',
    title: 'Aashram Visit & Food Donation',
    desc: 'Spending valuable time with elderly and underprivileged residents, alongside distributing healthy cooked meals and essential supplies.',
    location: 'Pune',
    status: 'upcoming',
    img: aashramVisitImg
  },
  {
    category: 'Education',
    date: 'May 25, 2026 • 11:00 AM',
    title: 'Educational Support for Children',
    desc: 'To support the educational expenses, stationary kits, and school uniforms of deserving school-going children to keep their dreams alive.',
    location: 'Pune',
    status: 'upcoming',
    img: educationImg
  },
  {
    category: 'Culture & Care',
    date: 'June 09, 2026 • 07:00 AM',
    title: 'Wari - 2026 & Blood Donation',
    desc: 'Serving the traditional Varkari pilgrims during the sacred annual Wari procession, coupled with a highly organized community Blood Donation drive.',
    location: 'Pune',
    status: 'upcoming',
    img: waariImg
  },
  {
    category: 'Environment',
    date: 'July 12, 2026 • 08:30 AM',
    title: 'Tree Plantation & Return Wari',
    desc: 'Greening the landscape by planting indigenous deep-root trees along the Return Wari route to create long-term carbon sinks and shade.',
    location: 'Pune',
    status: 'upcoming',
    img: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=1200&q=80'
  },
  {
    category: 'Health',
    date: 'August 15, 2026 • 09:00 AM',
    title: 'Blood Donation (Dhol Tasha Pathak)',
    desc: 'Partnering with energetic local Dhol Tasha groups to host a grand life-saving blood donation camp alongside self-defense workshops.',
    location: 'Pune',
    status: 'upcoming',
    img: bloodDonationImg
  },
  {
    category: 'Social Welfare',
    date: 'September 20, 2026 • 05:00 PM',
    title: 'Food Donation & Anniversary',
    desc: 'Marking another historic year of Maitri Welfare Foundation with a massive open-to-all community meal distribution and future roadmapping.',
    location: 'Pune',
    status: 'upcoming',
    img: about2
  },
  {
    category: 'Women Empowerment',
    date: 'October 18, 2026 • 10:30 AM',
    title: 'Narishakti (Kaushalya Initiative)',
    desc: 'Exhibiting handmade crafts and vocational success stories of our skilled women beneficiaries to open continuous direct market opportunities.',
    location: 'Pune',
    status: 'upcoming',
    img: narishaktiImg
  },
  {
    category: 'Social Welfare',
    date: 'November 10, 2026 • 11:30 PM',
    title: 'Blanket Donation Drive (Post 12 AM)',
    desc: 'A special night-time drive to distribute premium thermal blankets to unsheltered street dwellers, preceded by a sunset city cleanliness drive.',
    location: 'Pune',
    status: 'upcoming',
    img: blanketDonationImg
  },
  {
    category: 'Education',
    date: 'December 20, 2026 • 10:00 AM',
    title: 'Career Counselling Workshops',
    desc: 'Guiding secondary school students and job-seekers through career aptitude mapping, skill selection, and mock interviews by top industry leaders.',
    location: 'Pune',
    status: 'upcoming',
    img: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=1200&q=80'
  },

  // Past Events
  {
    category: 'Health',
    date: 'August 24, 2025 • Completed',
    title: 'Mega Blood Donation Camp 2025',
    desc: 'Successfully collected 561 blood units in collaboration with local youth organizations to support city hospitals during emergency shortages.',
    location: 'Pune',
    status: 'past',
    img: news3
  },
  {
    category: 'Education',
    date: 'June 15, 2025 • Completed',
    title: 'Rural School Uniform & Kit Distribution',
    desc: 'Distributed customized school bags, notebooks, and fresh uniforms to 350+ students across three remote village schools.',
    location: 'Pune',
    status: 'past',
    img: 'https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?auto=format&fit=crop&w=1200&q=80'
  },
  {
    category: 'Environment',
    date: 'July 10, 2024 • Completed',
    title: 'Monsoon Indigenous Tree Plantation',
    desc: 'Planted over 1,000 native banyan and peepal saplings with a committed 3-year nurturing plan to restore local green cover.',
    location: 'Pune',
    status: 'past',
    img: 'https://images.unsplash.com/photo-1530507629858-e4977d30e9e0?auto=format&fit=crop&w=1200&q=80'
  },
  {
    category: 'Social Welfare',
    date: 'May 05, 2024 • Completed',
    title: 'Pandemic Relief & Essential Ration Kits',
    desc: 'Provided emergency monthly grocery survival kits to daily wage laborers and destitute families during challenging times.',
    location: 'Pune',
    status: 'past',
    img: about1
  }
];

export default function Events() {
  const [tab, setTab] = useState('upcoming');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedYear, setSelectedYear] = useState('All');
  const [activeVideoModal, setActiveVideoModal] = useState<any | null>(null);
  const [isProposalModalOpen, setIsProposalModalOpen] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [attachmentPreview, setAttachmentPreview] = useState<string | null>(null);
  const [captcha, setCaptcha] = useState({ question: '', answer: 0 });
  const [userCaptcha, setUserCaptcha] = useState('');
  const proposalFormRef = useRef<HTMLFormElement>(null);

  const availableYears = [
    'All',
    ...Array.from(new Set(instagramEventsData.map((item: any) => String(item.year)))).sort((a, b) => Number(b) - Number(a))
  ];

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

      const SHEETDB_URL = 'https://sheetdb.io/api/v1/szlyae3x9dd1o?sheet=Event_Proposals';

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
      <SEO 
        title="Upcoming & Past Events | NGO in Pune | Community Drives"
        description="Stay updated with Maitri Welfare Foundation's upcoming events, including blood donation camps and tree plantations. Explore our past achievements in Pune."
        keywords="NGO events Pune, blood donation camp Pune, community service events, Maitri Foundation activities, best NGO in Pune events"
        canonical="/events"
      />
      {/* Background Hero */}
      <section className="grain mx-3 sm:mx-5 mt-3 rounded-[2rem] sm:rounded-[2.5rem] min-[1440px]:mx-auto min-[1440px]:max-w-[1400px] relative h-[450px] flex items-center justify-center overflow-hidden">
        <motion.img
          className="absolute inset-0 w-full h-full object-cover"
          src={heroImg}
          alt="Maitri Events Hero"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        />
        <div className="absolute inset-0 bg-primary/60 backdrop-blur-[2px]"></div>
        <div className="relative z-10 text-center px-6 max-w-4xl text-on-ink">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            <motion.h1
              variants={fadeInUp}
              className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6 leading-[1.1]"
            >
              Events & Community Drives: Our Collective Journey
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
          className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-12 border-b border-outline-variant/30"
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
            className="flex flex-col items-start md:items-end gap-3 pb-2 md:pb-0 w-full md:w-auto"
          >
            {/* Category Filter */}
            <div className="flex flex-wrap items-center justify-start md:justify-end gap-2 w-full md:w-auto">
              {['All', 'Social Welfare', 'Education', 'Environment', 'Health', 'Women Empowerment'].map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3.5 sm:px-4 py-1.5 rounded-full text-xs sm:text-sm font-bold transition-all cursor-pointer ${selectedCategory === cat
                      ? 'bg-primary text-on-primary shadow-md'
                      : 'bg-surface-container-low dark:bg-surface-container text-on-surface-variant hover:bg-surface-container dark:hover:bg-surface-container-high hover:text-primary dark:hover:text-primary border border-outline-variant/20 dark:border-outline-variant/10'
                    }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Year Filter for Past Events */}
            {tab === 'past' && availableYears.length > 1 && (
              <div className="flex flex-wrap items-center justify-start md:justify-end gap-1.5 pt-1 w-full md:w-auto">
                <span className="text-xs font-bold uppercase tracking-wider text-on-surface-variant/80 mr-1.5">
                  Year:
                </span>
                {availableYears.map((yr) => (
                  <button
                    key={yr}
                    onClick={() => setSelectedYear(yr)}
                    className={`px-3 py-1 rounded-xl text-xs font-bold transition-all cursor-pointer ${selectedYear === yr
                        ? 'bg-secondary text-on-secondary shadow-sm ring-2 ring-secondary/30'
                        : 'bg-surface-container-low dark:bg-surface-container text-on-surface-variant hover:bg-surface-container dark:hover:bg-surface-container-high hover:text-secondary dark:hover:text-secondary border border-outline-variant/20 dark:border-outline-variant/10'
                      }`}
                  >
                    {yr}
                  </button>
                ))}
              </div>
            )}
          </motion.div>
        </motion.div>

        {/* Events Grid */}
        {(() => {
          if (tab === 'past' && instagramEventsData && instagramEventsData.length > 0) {
            const filteredPast = (instagramEventsData as any[]).filter(evt => {
              const matchesYear = selectedYear === 'All' || String(evt.year) === selectedYear;
              const matchesCategory = selectedCategory === 'All' || evt.category === selectedCategory;
              return matchesYear && matchesCategory;
            });

            if (filteredPast.length === 0) {
              return (
                <div className="text-center py-16 bg-surface-container-low dark:bg-surface-container-low/60 rounded-3xl border border-outline-variant/30 dark:border-outline-variant/20">
                  <p className="text-lg font-bold text-on-surface-variant mb-2">No past events found matching your filter</p>
                  <button
                    onClick={() => { setSelectedCategory('All'); setSelectedYear('All'); }}
                    className="text-sm font-bold text-secondary hover:underline cursor-pointer"
                  >
                    Clear filters
                  </button>
                </div>
              );
            }

            return (
              <motion.div
                key={`${tab}-${selectedCategory}-${selectedYear}`}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                {filteredPast.map((event, idx) => (
                  <motion.div
                    key={event.shortcode || idx}
                    layout
                    variants={itemVariants}
                    whileHover={{ y: -8, boxShadow: "0 25px 50px rgba(0,0,0,0.15)" }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="bg-surface dark:bg-surface-container-low border border-outline-variant/50 dark:border-outline-variant/30 rounded-3xl overflow-hidden shadow-card dark:shadow-none hover:shadow-card-hover dark:hover:border-secondary/40 transition-all duration-300 group flex flex-col"
                  >
                    <div
                      className={`h-64 sm:h-72 overflow-hidden relative shrink-0 bg-surface-container dark:bg-surface-container-high ${event.video ? 'cursor-pointer group/vid' : ''}`}
                      onClick={() => {
                        if (event.video) {
                          setActiveVideoModal(event);
                        }
                      }}
                    >
                      <motion.img
                        className="w-full h-full object-cover"
                        src={event.img}
                        alt={event.title}
                        whileHover={{ scale: 1.08 }}
                        transition={{ duration: 0.6 }}
                        onError={(e: any) => {
                          e.currentTarget.src = news3;
                        }}
                      />
                      <motion.div
                        className="absolute top-3.5 right-3.5 bg-secondary-container text-on-secondary-container border border-black/5 dark:border-white/10 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider shadow-md"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                      >
                        {event.category}
                      </motion.div>
                      <div className="absolute top-3.5 left-3.5 bg-black/65 dark:bg-black/80 backdrop-blur-md text-white border border-white/10 px-3 py-1 rounded-full text-xs font-bold tracking-wider shadow-md">
                        {event.year}
                      </div>
                      {event.isVideo && (
                        <div className="absolute inset-0 flex items-center justify-center bg-black/35 group-hover/vid:bg-black/20 transition-colors">
                          <motion.div
                            whileHover={{ scale: 1.15 }}
                            whileTap={{ scale: 0.95 }}
                            className="w-14 h-14 rounded-full bg-white/95 dark:bg-white text-primary flex items-center justify-center shadow-2xl backdrop-blur-sm cursor-pointer"
                          >
                            <Play className="w-6 h-6 fill-primary ml-0.5 text-primary" />
                          </motion.div>
                        </div>
                      )}
                    </div>
                    <div className="p-6 sm:p-7 flex flex-col grow">
                      <div className="flex items-center justify-between gap-2 mb-3">
                        <span className="flex items-center gap-1.5 text-secondary font-bold text-xs uppercase tracking-wider font-sans">
                          <Calendar className="w-4 h-4 shrink-0" />
                          {event.date}
                        </span>
                        {event.likes > 0 && (
                          <span className="flex items-center gap-1 text-xs font-bold text-rose-500 bg-rose-500/10 dark:bg-rose-500/15 border border-rose-500/20 dark:border-rose-500/30 px-2.5 py-0.5 rounded-full">
                            <Heart className="w-3.5 h-3.5 fill-rose-500" />
                            {event.likes}
                          </span>
                        )}
                      </div>
                      <h3 className="font-display text-xl sm:text-2xl font-bold text-primary dark:text-primary mb-2 line-clamp-2 leading-snug tracking-tight">
                        {event.title}
                      </h3>
                      <p className="font-sans text-on-surface-variant dark:text-on-surface-variant text-sm mb-6 line-clamp-3 leading-relaxed">
                        {event.caption || event.title}
                      </p>
                      <div className="mt-auto pt-4 border-t border-outline-variant/30 dark:border-outline-variant/20 flex items-center justify-between gap-3">
                        <span className="text-xs font-medium text-on-surface-variant/80 dark:text-on-surface-variant/70 truncate font-sans">
                          Maitri Welfare Foundation
                        </span>
                        {event.video ? (
                          <motion.button
                            type="button"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => setActiveVideoModal(event)}
                            className="inline-flex items-center gap-2 bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#FCAF45] text-white px-4 py-2 sm:px-5 sm:py-2 rounded-xl text-xs sm:text-sm font-bold shadow-md hover:shadow-lg hover:brightness-105 active:scale-95 transition-all shrink-0 cursor-pointer font-sans"
                          >
                            <Play className="w-4 h-4 fill-white" />
                            <span>Watch Video</span>
                          </motion.button>
                        ) : (
                          <motion.a
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            href={event.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#FCAF45] text-white px-4 py-2 sm:px-5 sm:py-2 rounded-xl text-xs sm:text-sm font-bold shadow-md hover:shadow-lg hover:brightness-105 active:scale-95 transition-all shrink-0 cursor-pointer font-sans"
                          >
                            <Instagram className="w-4 h-4" />
                            <span>View on Instagram</span>
                          </motion.a>
                        )}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            );
          }

          const filteredEvents = events.filter(evt => {
            const matchesTab = evt.status === tab;
            const matchesCategory = selectedCategory === 'All' || evt.category === selectedCategory;
            return matchesTab && matchesCategory;
          });

          if (filteredEvents.length === 0) {
            return (
              <div className="text-center py-16 bg-surface-container-low rounded-3xl border border-outline-variant/30">
                <p className="text-lg font-bold text-on-surface-variant mb-2">No events found in this category</p>
                <button onClick={() => setSelectedCategory('All')} className="text-sm font-bold text-secondary hover:underline cursor-pointer">
                  Clear filter
                </button>
              </div>
            );
          }

          return (
            <motion.div
              key={`${tab}-${selectedCategory}`}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {filteredEvents.map((event, idx) => (
                <motion.div
                  key={event.title}
                  layout
                  variants={itemVariants}
                  whileHover={{ y: -10, boxShadow: "0 25px 50px rgba(0,0,0,0.12)" }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="bg-surface border border-outline-variant rounded-3xl overflow-hidden shadow-sm transition-all group flex flex-col"
                >
                  <div className="h-60 overflow-hidden relative shrink-0">
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
                  <div className="p-8 flex flex-col grow">
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
                    <div className="flex items-center justify-between gap-3 mt-auto pt-4 border-t border-outline-variant/10">
                      <div className="flex items-center gap-1.5 text-on-surface-variant text-xs font-medium uppercase tracking-wider flex-1 min-w-0">
                        <MapPin className="w-4 h-4 text-secondary shrink-0" />
                        <span className="truncate">{event.location}</span>
                      </div>
                      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="shrink-0">
                        <Link to="/volunteer" className="bg-primary text-on-primary px-4 sm:px-6 py-2 rounded-xl text-xs sm:text-sm font-bold hover:bg-primary-container transition-all whitespace-nowrap block text-center">
                          Join Now
                        </Link>
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          );
        })()}

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
              className="relative bg-surface-container-low rounded-[1.5rem] shadow-2xl w-full max-w-2xl overflow-hidden max-h-[90vh] flex flex-col"
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
                      className="w-full rounded-xl border-2 border-outline-variant/50 focus:border-primary focus:ring-0 px-4 py-3 text-sm font-semibold outline-none transition-all bg-surface-container-low cursor-pointer"
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

      {/* Reel Video Player Modal */}
      <AnimatePresence>
        {activeVideoModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0"
              onClick={() => setActiveVideoModal(null)}
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: 20 }}
              transition={{ type: "spring", duration: 0.4 }}
              className="bg-surface dark:bg-surface-container border border-outline-variant/60 dark:border-outline-variant/30 rounded-3xl overflow-hidden shadow-2xl max-w-4xl w-full flex flex-col md:flex-row relative z-10 max-h-[92vh]"
            >
              {/* Video Player */}
              <div className="md:w-1/2 bg-black flex items-center justify-center relative min-h-[300px] sm:min-h-[380px] md:min-h-[500px]">
                <video
                  src={activeVideoModal.video}
                  poster={activeVideoModal.img}
                  controls
                  autoPlay
                  playsInline
                  className="w-full h-full max-h-[500px] object-contain"
                />
              </div>

              {/* Video Details */}
              <div className="md:w-1/2 p-6 sm:p-8 flex flex-col justify-between overflow-y-auto bg-surface dark:bg-surface-container">
                <div>
                  <div className="flex items-center justify-between gap-3 mb-4">
                    <span className="bg-secondary-container text-on-secondary-container px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                      {activeVideoModal.category}
                    </span>
                    <button
                      onClick={() => setActiveVideoModal(null)}
                      className="w-9 h-9 rounded-full bg-surface-container dark:bg-surface-container-high flex items-center justify-center text-on-surface-variant hover:text-primary transition-colors cursor-pointer border border-outline-variant/30 dark:border-outline-variant/20"
                      aria-label="Close"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </div>

                  <div className="flex items-center gap-2 text-secondary font-bold text-xs uppercase tracking-wider mb-2 font-sans">
                    <Calendar className="w-4 h-4" />
                    {activeVideoModal.date}
                  </div>

                  <h3 className="font-display text-xl sm:text-2xl font-bold text-primary dark:text-primary mb-3 leading-snug tracking-tight">
                    {activeVideoModal.title}
                  </h3>

                  <div className="font-sans text-sm text-on-surface-variant leading-relaxed whitespace-pre-line max-h-52 overflow-y-auto pr-2 border-t border-outline-variant/20 pt-3">
                    {activeVideoModal.caption}
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-outline-variant/20 flex items-center justify-between gap-3">
                  {activeVideoModal.likes > 0 && (
                    <span className="flex items-center gap-1.5 text-rose-500 font-bold text-sm bg-rose-500/10 dark:bg-rose-500/15 border border-rose-500/20 px-3 py-1 rounded-full">
                      <Heart className="w-4 h-4 fill-rose-500" />
                      {activeVideoModal.likes} likes
                    </span>
                  )}
                  <a
                    href={activeVideoModal.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#FCAF45] text-white px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold shadow hover:brightness-105 active:scale-95 transition-all ml-auto font-sans"
                  >
                    <Instagram className="w-4 h-4" />
                    <span>Open on Instagram</span>
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Impact Numbers */}
      <section className="grain bg-ink text-on-ink py-24">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.h2
            className="text-3xl sm:text-4xl font-bold text-on-ink mb-12"
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
                className="bg-on-ink/5 backdrop-blur-md p-8 rounded-2xl border border-on-ink/10 group cursor-pointer"
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
                <div className="text-on-ink/70 text-xs font-bold uppercase tracking-widest">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
