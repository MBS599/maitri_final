import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, Eye, Lock, Landmark } from 'lucide-react';

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

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-primary py-24 text-center text-on-primary relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-10">
          <img
            src="https://images.pexels.com/photos/36739282/pexels-photo-36739282.jpeg?auto=compress&cs=tinysrgb&w=1260"
            className="w-full h-full object-cover"
            alt="Hero bg"
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
              className="text-5xl font-extrabold mb-6"
            >
              Empower Change with Your Kindness
            </motion.h1>
            <motion.p
              variants={fadeInUp}
              className="text-lg opacity-90 mb-12 leading-relaxed"
            >
              Every contribution fuels our mission to bring sustainable growth and social welfare to communities in need. Your trust is our greatest asset.
              <br />
              <span className="text-sm font-bold text-secondary-container mt-2 block">Reg No: PUNE/0000407/2023</span>
            </motion.p>
            <motion.div
              className="flex flex-wrap justify-center gap-4"
              variants={containerVariants}
            >
              {[
                { icon: ShieldCheck, label: 'NGO Verified' },
                { icon: Eye, label: 'Transparent Impact' },
                { icon: Lock, label: 'Safe & Secure' }
              ].map((badge, idx) => (
                <motion.div
                  key={idx}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05, y: -3 }}
                  transition={{ type: "spring", stiffness: 400 }}
                  className="flex items-center gap-2 bg-on-primary/10 backdrop-blur-md px-5 py-2 rounded-full border border-on-primary/20"
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
            className="text-4xl font-bold mb-6 text-primary text-center"
            variants={fadeInUp}
          >
            Direct Contribution
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
                Bank Transfer Details
              </motion.h3>
              <div className="space-y-4 max-w-sm mx-auto">
                {[
                  { label: 'Bank Name', value: 'Canara Bank' },
                  { label: 'Account No.', value: '1200362614021' },
                  { label: 'IFSC Code', value: 'CNRB0003265' }
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
            Our Transparency Report
          </motion.h3>
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              { val: '100%', label: 'Funds Allocation' },
              { val: '50k+', label: 'Lives Impacted' },
              { val: '120+', label: 'Projects Completed' },
              { val: '24/7', label: 'Donor Support' }
            ].map((stat, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                whileHover={{ scale: 1.08, y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="p-8 bg-white rounded-2xl shadow-sm border border-outline-variant/10"
              >
                <motion.div
                  className="text-4xl font-extrabold text-secondary mb-2"
                  initial={{ scale: 0.5, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1, type: "spring", stiffness: 200 }}
                >
                  {stat.val}
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
