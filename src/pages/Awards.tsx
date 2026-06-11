import { motion } from 'motion/react';
import SEO from '../components/SEO';
import { Link } from 'react-router-dom';
import { ShieldCheck, Users, Clock, Trophy } from 'lucide-react';
import awardHero from '../assets/award_hero.jpg';
import { AnimatedCounter } from '../components/AnimatedCounter';
import samajSeva from '../assets/awards/samaj seva.jpeg';
import visheshSanman from '../assets/awards/vishesh sanman.jpeg';
import kakade from '../assets/awards/kakade.jpeg';
import maharashtraVisheshGaurav from '../assets/awards/maharashtra_vishesh_gaurav.jpg';

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

const awards = [
  {
    year: '2021',
    title: 'Corona Yoddha Award',
    desc: 'Honored for exceptional service and selfless dedication during the COVID-19 pandemic, providing essential supplies, medical aid, and frontline support to thousands in need.',
    org: 'Maharashtra News Marathi',
    img: awardHero
  },
  {
    year: '2021',
    title: 'Samaj Seva Gaurav Award',
    desc: 'Honored for outstanding contributions to community welfare and social empowerment through persistent grassroots initiatives.',
    org: 'Maharashtra News Marathi',
    img: samajSeva
  },
  {
    year: '2025',
    title: 'Vishesh Sanman Award',
    desc: 'Awarded for extraordinary dedication to community development and visionary social leadership in the year 2025.',
    org: 'Sambhajinana Beldare Social Trust',
    img: visheshSanman
  },
  {
    year: '2025',
    title: 'Kartutva Gaurav Award',
    desc: 'Honored for exceptional leadership and significant contributions to social welfare and community empowerment.',
    org: 'Sayog Ventures',
    img: kakade
  },
  {
    year: '2026',
    title: 'Maharashtra Vishesh Gaurav Award',
    desc: 'Recognized for outstanding contributions to public welfare, social upliftment, and community service initiatives.',
    org: 'Ajinkya Social Foundation, Pune',
    img: maharashtraVisheshGaurav
  }
];

export default function Awards() {
  return (
    <div className="pt-20">
      <SEO
        title="Awards & Recognition | Best NGO in Pune"
        description="Explore awards received by Maitri Welfare Foundation, one of the best NGOs in Pune, including the Corona Yoddha and Samaj Seva Gaurav awards."
        keywords="best NGO in Pune awards, NGO awards, Maitri Foundation recognition, Corona Yoddha Award, social service awards Pune"
        canonical="/awards"
      />
      {/* Hero */}
      <section className="relative py-32 overflow-hidden bg-primary text-on-primary">
        <div className="absolute inset-0 opacity-50">
          <img
            className="w-full h-full object-cover object-[center_40%]"
            src={awardHero}
            alt="Awards Background"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            <motion.span
              variants={scaleIn}
              className="inline-block px-4 py-1.5 bg-secondary-container text-on-secondary-container rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-widest mb-6"
            >
              Our Achievements
            </motion.span>
            <motion.h1
              variants={fadeInUp}
              className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6 leading-[1.1]"
            >
              Awards & Recognition: Our Social Impact
            </motion.h1>
            <motion.p
              variants={fadeInUp}
              className="text-base sm:text-lg max-w-2xl mx-auto opacity-90 leading-relaxed"
            >
              A decade of dedicated service recognized by esteemed institutions. These awards are a testament to our volunteers, donors, and the communities we serve.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Awards Grid */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {awards.map((award, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              whileHover={{ y: -10, boxShadow: "0 25px 50px rgba(0,0,0,0.12)" }}
              transition={{ type: "spring", stiffness: 300 }}
              className="group bg-surface rounded-3xl overflow-hidden shadow-sm transition-all duration-500 border border-outline-variant/30 flex flex-col"
            >
              <div className="h-64 overflow-hidden relative">
                <motion.img
                  className="w-full h-full object-cover"
                  src={award.img}
                  alt={award.title}
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.7 }}
                />
                <motion.div
                  className="absolute top-4 right-4 bg-secondary-container text-on-secondary-container px-4 py-1 rounded-xl text-xs font-bold shadow-lg"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + idx * 0.1 }}
                >
                  {award.year}
                </motion.div>
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <motion.h3
                  className="text-2xl font-bold text-primary mb-4"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + idx * 0.1 }}
                >
                  {award.title}
                </motion.h3>
                <p className="text-on-surface-variant text-sm mb-6 leading-relaxed flex-grow">
                  {award.desc}
                </p>
                <motion.div
                  className="pt-6 border-t border-outline-variant/30 flex items-center gap-2 text-secondary font-bold text-xs uppercase"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + idx * 0.1 }}
                >
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <ShieldCheck className="w-5 h-5" />
                  </motion.div>
                  <span>{award.org}</span>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Big Stats */}
      <section className="py-24 bg-surface-container-low border-y border-outline-variant/20">
        <motion.div
          className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12 text-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {[
            { value: '5+', label: 'Awards' },
            { value: '5k', label: 'Lives Impacted Annually' },
            { value: '8y', label: 'Of Continuous Service' }
          ].map((stat, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              whileHover={{ scale: 1.08 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="group cursor-pointer"
            >
              <motion.div
                className="text-5xl font-extrabold text-secondary mb-2"
                initial={{ scale: 0.5, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.15, type: "spring", stiffness: 200 }}
              >
                <AnimatedCounter value={stat.value} />
              </motion.div>
              <p className="text-on-surface-variant font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* CTA Box */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <motion.div
          className="bg-primary-container text-on-primary-container rounded-3xl p-12 md:p-20 flex flex-col md:flex-row items-center justify-between gap-12 relative overflow-hidden shadow-2xl"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <motion.div
            className="relative z-10"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            <motion.h2 variants={fadeInLeft} className="text-4xl font-bold text-on-primary mb-4">Be Part of the Success</motion.h2>
            <motion.p variants={fadeInLeft} className="text-lg opacity-80 max-w-xl leading-relaxed">
              Every award we win is shared with our supporters. Your contribution fuels the impact that makes these recognitions possible.
            </motion.p>
          </motion.div>
          <motion.div
            className="relative z-10 flex flex-col sm:flex-row gap-6 shrink-0"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link to="/support" className="bg-secondary-container text-on-secondary-container px-10 py-4 rounded-full text-lg font-bold hover:shadow-xl transition-all shadow-lg active:scale-95 inline-block">
                Donate Now
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link to="/volunteer" className="border-2 border-on-primary text-on-primary px-10 py-4 rounded-full text-lg font-bold hover:bg-on-primary/10 transition-all text-center inline-block">
                Volunteer
              </Link>
            </motion.div>
          </motion.div>
          {/* Abstract circle decoration */}
          <motion.div
            className="absolute top-0 right-0 w-80 h-80 bg-secondary-container opacity-10 rounded-full translate-x-1/2 -translate-y-1/2"
            animate={{ scale: [1, 1.1, 1], opacity: [0.1, 0.15, 0.1] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
          />
        </motion.div>
      </section>
    </div>
  );
}
