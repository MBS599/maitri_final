import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Newspaper, Camera, ExternalLink, Calendar, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import samajSeva from '../assets/awards/samaj seva.jpeg';
import kakade from '../assets/awards/kakade.jpeg';
import news1 from '../assets/news/new1.jpeg';
import news2 from '../assets/news/news2.jpeg';
import news3 from '../assets/news/news3.jpeg';

// Sample data for News & Newsletters
const newsItems = [
  {
    title: "Blood Donation Camp at Tulshibaug",
    source: "Saamana News",
    date: "August 2025",
    image: news1,
    desc: "Maitri Welfare Foundation partnered with Tulshibaug Ganeshotsav Mandal Trust for a mega blood donation camp, where 561 youths donated blood for a social cause."
  },
  {
    title: "Food Kit Distribution in Shirur",
    source: "Pudhari News",
    date: "July 2024",
    image: news2,
    desc: "In a joint effort, Maitri Foundation distributed essential food kits containing wheat, rice, oil, and sugar to 125 underprivileged families to support their livelihoods."
  },
  {
    title: "Community Health Initiative Coverage",
    source: "Local News Daily",
    date: "August 2025",
    image: news3,
    desc: "Extensive media coverage of our health and social welfare initiatives, highlighting the enthusiasm of volunteers and the impact on the local community."
  }
];

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

export default function Media() {
  const [selectedNews, setSelectedNews] = useState<typeof newsItems[0] | null>(null);

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-primary py-24 text-center text-on-primary relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-10">
          <Newspaper className="w-[500px] h-[500px] absolute -top-24 -left-24 rotate-12" />
          <Camera className="w-[400px] h-[400px] absolute -bottom-24 -right-24 -rotate-12" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-6">
          <motion.div initial="hidden" animate="visible" variants={containerVariants}>
            <motion.h1 variants={itemVariants} className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6 leading-[1.1]">News & Media</motion.h1>
            <motion.p variants={itemVariants} className="text-base sm:text-lg md:text-xl opacity-90 leading-relaxed max-w-2xl mx-auto font-medium">
              Stay updated with our latest news coverage and media highlights as we continue to make a difference.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Latest News Section */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <div className="flex items-center gap-4 mb-16">
          <div className="w-12 h-1 bg-secondary rounded-full"></div>
          <h2 className="text-3xl font-bold text-primary uppercase tracking-tight">Media Highlights</h2>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          {newsItems.map((item, idx) => (
            <motion.div 
              key={idx} 
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="bg-white rounded-3xl overflow-hidden border border-outline-variant shadow-sm hover:shadow-xl transition-all group"
            >
              <div className="aspect-video overflow-hidden relative">
                <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute top-4 left-4 bg-primary text-on-primary px-4 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest">
                  {item.source}
                </div>
              </div>
              <div className="p-8">
                <div className="flex items-center gap-2 text-secondary font-bold text-xs mb-4 uppercase tracking-widest">
                  <Calendar className="w-4 h-4" />
                  {item.date}
                </div>
                <h3 className="text-2xl font-bold text-primary mb-4 leading-tight">{item.title}</h3>
                <p className="text-on-surface-variant text-sm leading-relaxed line-clamp-3 mb-6">
                  {item.desc}
                </p>
                <button 
                  onClick={() => setSelectedNews(item)}
                  className="text-primary font-bold text-sm flex items-center gap-2 hover:gap-3 transition-all cursor-pointer"
                >
                  Read Full Story <ExternalLink className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>



      {/* Media Interaction CTA */}
      <section className="py-24 max-w-7xl mx-auto px-6 pb-32">
        <motion.div 
          className="bg-primary text-on-primary rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          <div className="relative z-10">
            <h2 className="text-2xl sm:text-4xl font-bold mb-8">For Media Inquiries</h2>
            <p className="text-lg opacity-80 max-w-2xl mx-auto mb-12 leading-relaxed">
              Are you a journalist or researcher interested in our work? Get in touch for high-res photos, interviews, or press kits.
            </p>
            <Link to="/contact" className="bg-secondary-container text-on-secondary-container px-12 py-4 rounded-full font-bold text-lg hover:shadow-2xl hover:scale-105 transition-all inline-block">
              Contact Media Desk
            </Link>
          </div>
        </motion.div>
      </section>

      {/* Full News Modal */}
      <AnimatePresence>
        {selectedNews && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedNews(null)}
              className="absolute inset-0 bg-primary/40 backdrop-blur-md cursor-pointer"
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative bg-white rounded-[2.5rem] shadow-2xl w-full max-w-5xl overflow-hidden flex flex-col lg:flex-row max-h-[90vh]"
            >
              <button 
                onClick={() => setSelectedNews(null)}
                className="absolute top-6 right-6 p-2 bg-white/80 backdrop-blur-md rounded-full shadow-lg z-10 hover:bg-white transition-colors cursor-pointer"
              >
                <X className="w-6 h-6 text-primary" />
              </button>
              <div className="w-full lg:w-3/5 bg-surface-container flex items-center justify-center p-6 lg:p-12 overflow-hidden">
                <img 
                  src={selectedNews.image} 
                  alt={selectedNews.title} 
                  className="max-w-full max-h-full object-contain rounded-2xl shadow-xl" 
                />
              </div>
              <div className="w-full lg:w-2/5 p-8 lg:p-12 overflow-y-auto bg-white">
                <div className="flex items-center gap-3 text-secondary font-bold text-[10px] mb-6 uppercase tracking-widest">
                  <Calendar className="w-5 h-5" />
                  {selectedNews.date}
                  <span className="text-on-surface-variant/30">•</span>
                  <span>{selectedNews.source}</span>
                </div>
                <h2 className="text-3xl font-bold text-primary mb-8 leading-tight">{selectedNews.title}</h2>
                <div className="space-y-6 text-on-surface-variant leading-relaxed text-base font-medium">
                  <p>{selectedNews.desc}</p>
                  <p>
                    This media coverage highlights our foundation's commitment to humanitarian causes and community development. 
                    Through collaborative efforts with local trusts and generous donors, we continue to strive for a positive impact on society.
                  </p>
                  <div className="pt-8 border-t border-outline-variant/30 flex flex-col gap-4">
                    <p className="text-sm font-bold text-primary">
                      Source: {selectedNews.source}
                    </p>
                    <Link to="/contact" onClick={() => setSelectedNews(null)} className="text-secondary font-bold text-sm hover:underline">
                      Have a news lead? Contact us &rarr;
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
