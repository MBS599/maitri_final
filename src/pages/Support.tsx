import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, Eye, Lock, Landmark } from 'lucide-react';
import { AnimatedCounter } from '../components/AnimatedCounter';
import SEO from '../components/SEO';
import { useT } from '../i18n/LanguageContext';
import { supportDict } from '../i18n/pages/support';

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

export default function Support() {
  const t = useT(supportDict);

  return (
    <div className="pt-20">
      <SEO 
        title="Support Best NGO in Pune | Donate for Social Welfare"
        description="Donate to Maitri Welfare Foundation, a registered NGO in Pune. Support our community programs, tree plantation drives, and Project Kaushalya."
        keywords="donate NGO Pune, support Maitri Foundation, NGO bank details, charity Pune, social welfare donation, donation for NGO in Pune"
        canonical="/support"
      />
      {/* Hero Section */}
      <section className="grain mx-3 sm:mx-5 mt-3 rounded-[2rem] sm:rounded-[2.5rem] min-[1440px]:mx-auto min-[1440px]:max-w-[1400px] bg-ink py-24 text-center text-on-ink relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-10">
          <img
            src="https://images.pexels.com/photos/36739282/pexels-photo-36739282.jpeg?auto=compress&cs=tinysrgb&w=1260"
            className="w-full h-full object-cover"
            alt={t.heroAlt}
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
              {t.heroTitle}
            </motion.h1>
            <motion.p
              variants={fadeInUp}
              className="text-base sm:text-lg opacity-90 mb-12 leading-relaxed"
            >
              {t.heroBody}
              <br />
              <span className="text-xs sm:text-sm font-bold text-secondary-container mt-2 block">{t.regNo}F-0062418(PUN)</span>
            </motion.p>
            <motion.div
              className="flex flex-wrap justify-center gap-4"
              variants={containerVariants}
            >
              {[
                { icon: ShieldCheck, label: t.badges[0] },
                { icon: Eye, label: t.badges[1] },
                { icon: Lock, label: t.badges[2] }
              ].map((badge, idx) => (
                <motion.div
                  key={idx}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05, y: -3 }}
                  transition={{ type: "spring", stiffness: 400 }}
                  className="flex items-center gap-2 bg-on-ink/10 backdrop-blur-md px-5 py-2 rounded-full border border-on-ink/20"
                >
                  <badge.icon className="w-5 h-5 text-secondary-container" />
                  <span className="text-[10px] font-bold uppercase tracking-widest">{badge.label}</span>
                </motion.div>
              ))}
            </motion.div>
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
          <motion.h2
            className="text-3xl sm:text-4xl font-bold mb-6 text-primary text-center"
            variants={fadeInUp}
          >
            {t.directTitle}
          </motion.h2>
          <motion.div
            className="bg-surface-container-low rounded-3xl p-10 shadow-sm border border-outline-variant/30 max-w-lg mx-auto"
            whileHover={{ boxShadow: "0 15px 40px rgba(0,0,0,0.08)" }}
            transition={{ duration: 0.3 }}
          >
            <div className="w-full">
              <motion.h3
                className="text-2xl font-bold mb-8 text-on-surface text-center"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                {t.bankTitle}
              </motion.h3>
              <div className="space-y-4 max-w-sm mx-auto">
                {[
                  { label: t.bankLabels[0], value: t.bankName },
                  { label: t.bankLabels[1], value: '1200362614021' },
                  { label: t.bankLabels[2], value: 'CNRB0003265' },
                  { label: t.bankLabels[3], value: t.branch }
                ].map((row, idx) => (
                  <motion.div
                    key={idx}
                    className="flex justify-between border-b border-outline-variant/20 pb-2 gap-8"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 * idx + 0.3 }}
                  >
                    <span className="text-on-surface-variant text-sm font-semibold">{row.label}</span>
                    <span className="text-on-surface font-bold text-sm tracking-wide">{row.value}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Transparency */}
      <section className="bg-surface-container py-24">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.h3
            className="text-3xl font-bold mb-12 text-primary"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            {t.transparencyTitle}
          </motion.h3>
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              { val: '100%', label: t.stats[0] },
              { val: '5k+', label: t.stats[1] },
              { val: '150+', label: t.stats[2] },
              { val: '24/7', label: t.stats[3] }
            ].map((stat, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                whileHover={{ scale: 1.08, y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="p-8 bg-surface-container-low rounded-2xl shadow-sm border border-outline-variant/10 group cursor-pointer"
              >
                <motion.div
                  className="text-4xl font-extrabold text-secondary mb-2"
                  initial={{ scale: 0.5, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1, type: "spring", stiffness: 200 }}
                >
                  <AnimatedCounter value={stat.val} />
                </motion.div>
                <p className="text-[10px] font-bold uppercase text-on-surface-variant tracking-widest">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>


    </div>
  );
}
