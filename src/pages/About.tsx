import React from 'react';
import { motion } from 'motion/react';
import { Heart, Target, Lightbulb, Users, Globe, Shield } from 'lucide-react';
import aboutHero from '../assets/hero.webp';
import { AnimatedCounter } from '../components/AnimatedCounter';
import fullTeam from '../assets/team/full_team.webp';
import about1 from '../assets/team/about1.webp';
import about2 from '../assets/team/about2.webp';
import SEO from '../components/SEO';
import { useT } from '../i18n/LanguageContext';
import { aboutDict } from '../i18n/pages/about';


const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.5, ease: "easeOut" }
  }
};

export default function About() {
  const t = useT(aboutDict);
  return (
    <div className="pt-20">
      <SEO
        title="About Our Pune NGO | Mission & Vision"
        description="Learn about Maitri Welfare Foundation's journey since 2019. We are a dedicated NGO in Pune working on environmental conservation, women empowerment, and child education."
        keywords="about Maitri Foundation, NGO in Pune, best NGO in Pune, social work Pune, Maitri Welfare Foundation team"
        canonical="/about"
      />
      {/* Hero Section */}
      <section className="grain mx-3 sm:mx-5 mt-3 rounded-[2rem] sm:rounded-[2.5rem] min-[1440px]:mx-auto min-[1440px]:max-w-[1400px] bg-ink py-24 text-center text-on-ink relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <img
            src={aboutHero}
            className="w-full h-full object-cover"
            alt={t.heroAlt}
          />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-6">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            <motion.h1
              variants={fadeInUp}
              className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6 tracking-tight leading-[1.1]"
            >
              {t.heroTitle}
            </motion.h1>
            <motion.p
              variants={fadeInUp}
              className="text-base sm:text-lg md:text-xl opacity-90 leading-relaxed font-medium"
            >
              {t.heroText}
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-16 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            className="bg-surface-container-low p-12 rounded-3xl border border-outline-variant/30 relative overflow-hidden group"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            whileHover={{ y: -5, boxShadow: "0 20px 40px rgba(0,0,0,0.05)" }}
          >
            <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
              <Target className="w-32 h-32 text-primary" />
            </div>
            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-8">
              <Target className="w-6 h-6 sm:w-8 sm:h-8 text-primary" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-4">{t.missionTitle}</h2>
            <p className="text-on-surface-variant leading-relaxed">
              {t.missionText}
            </p>
          </motion.div>

          <motion.div
            className="bg-surface-container-low p-12 rounded-3xl border border-outline-variant/30 relative overflow-hidden group"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            transition={{ delay: 0.2 }}
            whileHover={{ y: -5, boxShadow: "0 20px 40px rgba(0,0,0,0.05)" }}
          >
            <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
              <Lightbulb className="w-32 h-32 text-secondary" />
            </div>
            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-secondary/10 rounded-2xl flex items-center justify-center mb-8">
              <Lightbulb className="w-6 h-6 sm:w-8 sm:h-8 text-secondary" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-secondary mb-4">{t.visionTitle}</h2>
            <p className="text-on-surface-variant leading-relaxed">
              {t.visionText}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Journey Section */}
      <section className="py-32 bg-surface-container-lowest overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            className="text-center mb-16 sm:mb-24"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-primary mb-4">{t.journeyTitle}</h2>
            <div className="w-24 h-1.5 bg-secondary mx-auto rounded-full"></div>
          </motion.div>

          {/* Chapter 1: The Beginning */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center mb-48">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-secondary font-bold text-[10px] sm:text-sm uppercase tracking-widest mb-4 block">{t.ch1.eyebrow}</span>
              <h3 className="text-2xl sm:text-3xl font-bold text-primary mb-6">{t.ch1.title}</h3>
              <p className="text-on-surface-variant text-base sm:text-lg leading-relaxed mb-6">
                {t.ch1.text}
              </p>
              <div className="flex gap-4 items-center text-primary font-bold">
                <div className="w-12 h-0.5 bg-primary"></div>
                <span>{t.ch1.tag}</span>
              </div>
            </motion.div>
            <motion.div
              className="relative"
              initial={{ opacity: 0, scale: 0.9, x: 50 }}
              whileInView={{ opacity: 1, scale: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="aspect-[4/3] rounded-[2.5rem] overflow-hidden shadow-2xl border-8 border-white dark:border-surface-container-high">
                <img
                  src={about1}
                  alt={t.ch1.alt}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-secondary/10 rounded-full blur-3xl -z-10"></div>
            </motion.div>
          </div>

          {/* Chapter 2: Expansion */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center mb-48">
            <motion.div
              className="order-2 md:order-1 relative"
              initial={{ opacity: 0, scale: 0.9, x: -50 }}
              whileInView={{ opacity: 1, scale: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="aspect-[4/3] rounded-[2.5rem] overflow-hidden shadow-2xl border-8 border-white dark:border-surface-container-high">
                <img
                  src={about2}
                  alt={t.ch2.alt}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-primary/10 rounded-full blur-3xl -z-10"></div>
            </motion.div>
            <motion.div
              className="order-1 md:order-2"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-secondary font-bold text-sm uppercase tracking-widest mb-4 block">{t.ch2.eyebrow}</span>
              <h3 className="text-3xl font-bold text-primary mb-6">{t.ch2.title}</h3>
              <p className="text-on-surface-variant text-lg leading-relaxed mb-6">
                {t.ch2.text}
              </p>
              <div className="flex gap-4 items-center text-primary font-bold">
                <span>{t.ch2.tag}</span>
                <div className="w-12 h-0.5 bg-primary"></div>
              </div>
            </motion.div>
          </div>

          {/* Chapter 3: Today's Team */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-secondary font-bold text-sm uppercase tracking-widest mb-4 block">{t.ch3.eyebrow}</span>
              <h3 className="text-3xl font-bold text-primary mb-6">{t.ch3.title}</h3>
              <p className="text-on-surface-variant text-lg leading-relaxed mb-6">
                {t.ch3.text}
              </p>
              <div className="flex gap-4 items-center text-primary font-bold">
                <div className="w-12 h-0.5 bg-primary"></div>
                <span>{t.ch3.tag}</span>
              </div>
            </motion.div>
            <motion.div
              className="relative"
              initial={{ opacity: 0, scale: 0.9, x: 50 }}
              whileInView={{ opacity: 1, scale: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="aspect-video rounded-[2.5rem] overflow-hidden shadow-2xl border-8 border-white dark:border-surface-container-high bg-surface-container-low">
                <img
                  src={fullTeam}
                  alt={t.ch3.alt}
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-secondary/10 rounded-full blur-3xl -z-10"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="grain bg-ink text-on-ink py-24">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            className="text-center max-w-2xl mx-auto mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-4xl font-bold mb-6">{t.valuesTitle}</h2>
            <p className="text-on-ink/80">
              {t.valuesText}
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              { icon: Shield, ...t.values[0] },
              { icon: Heart, ...t.values[1] },
              { icon: Globe, ...t.values[2] }
            ].map((value, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="group relative overflow-hidden bg-on-ink/[0.04] p-8 sm:p-10 rounded-[2rem] border border-on-ink/10 hover:border-secondary-container/40 hover:bg-on-ink/[0.07] transition-all duration-300"
              >
                <span className="absolute top-6 right-8 font-display text-6xl italic text-on-ink/10 select-none" aria-hidden="true">0{idx + 1}</span>
                <span className="w-14 h-14 rounded-2xl bg-secondary-container text-on-secondary-container flex items-center justify-center mb-8 transition-transform duration-300 group-hover:-rotate-6 group-hover:scale-105">
                  <value.icon className="w-6 h-6" />
                </span>
                <h3 className="text-2xl font-medium mb-3">{value.title}</h3>
                <p className="text-on-ink/75 leading-relaxed">{value.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <motion.div
          className="bg-surface-container rounded-[3rem] p-12 md:p-20 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <h2 className="text-3xl font-bold text-primary mb-16">{t.impactTitle}</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "5k+", label: t.stats[0] },
              { number: "120+", label: t.stats[1] },
              { number: "5+", label: t.stats[2] },
              { number: "200+", label: t.stats[3] }
            ].map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ scale: 0.5, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, type: "spring", stiffness: 200 }}
                className="group cursor-pointer"
              >
                <div className="text-4xl md:text-5xl font-extrabold text-secondary mb-2">
                  <AnimatedCounter value={stat.number} />
                </div>
                <div className="text-xs font-bold uppercase tracking-widest text-on-surface-variant">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>
    </div>
  );
}
