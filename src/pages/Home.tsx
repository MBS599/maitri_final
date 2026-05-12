import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { CheckCircle, Award, Users, Calendar, ArrowRight } from 'lucide-react';
import heroImg from '../assets/hero.png';
import { AnimatedCounter } from '../components/AnimatedCounter';

export default function Home() {
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
    visible: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            alt="Maitri Foundation Hero"
            className="w-full h-full object-cover"
            src={heroImg}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-primary/30"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="max-w-2xl text-on-primary"
          >
            <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-3 mb-6">
              <span className="bg-secondary/20 text-secondary-container border border-secondary/30 px-4 py-1.5 rounded-full font-bold tracking-wider uppercase text-xs backdrop-blur-sm">
                "एक हात मैत्रीचा" • One Hand of Friendship
              </span>
              <span className="text-on-primary/80 font-bold tracking-widest uppercase text-xs hidden sm:inline">
                | &nbsp;Established 2019
              </span>
            </motion.div>
            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6 leading-[1.1]"
            >
              Maitri Welfare Foundation: Empowering Lives, Protecting Nature
            </motion.h1>
            <motion.p
              variants={itemVariants}
              className="text-base sm:text-lg opacity-90 mb-8 leading-relaxed"
            >
              Dedicated to sustainable social impact through environmental conservation and community welfare initiatives across India.
            </motion.p>
            <motion.div variants={itemVariants} className="flex flex-wrap gap-4">
              <Link to="/support" className="bg-secondary-container text-on-secondary-container px-8 py-3 rounded-full font-bold active:scale-95 hover:shadow-xl hover:scale-105 transition-all">
                Donate Now
              </Link>
              <Link to="/volunteer" className="border-2 border-on-primary text-on-primary px-8 py-3 rounded-full font-bold hover:bg-on-primary hover:text-primary active:scale-95 transition-all">
                Join Us
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-20 bg-surface-container-low">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {[
              { label: 'Needy Helped', value: '5k+' },
              { label: 'Environmental Events', value: '150+' },
              { label: 'Established', value: '2019' }
            ].map((stat, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="bg-surface p-10 rounded-2xl shadow-sm border border-outline-variant/30 text-center group cursor-pointer"
              >
                <motion.span
                  className="text-4xl font-extrabold text-secondary mb-2 block"
                  initial={{ scale: 0.5, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.15, type: "spring", stiffness: 200 }}
                >
                  <AnimatedCounter value={stat.value} />
                </motion.span>
                <p className="text-on-surface-variant font-medium">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* About Mission */}
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
              <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl">
                <motion.img
                  alt="Foundation Activities"
                  className="w-full h-full object-cover"
                  src="https://images.pexels.com/photos/36739282/pexels-photo-36739282.jpeg?auto=compress&cs=tinysrgb&w=1260"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.6 }}
                />
              </div>
              <motion.div
                className="absolute -bottom-6 -right-6 bg-primary-container text-on-primary-container p-8 rounded-2xl shadow-xl max-w-[280px]"
                initial={{ opacity: 0, y: 20, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.5 }}
              >
                <p className="text-sm italic font-medium">"Making a meaningful difference, one step at a time."</p>
              </motion.div>
            </motion.div>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
            >
              <motion.h2 variants={fadeInRight} className="text-3xl sm:text-4xl font-bold text-primary mb-6">Our Mission & Vision</motion.h2>
              <motion.p variants={fadeInRight} className="text-on-surface-variant mb-6 leading-relaxed text-sm sm:text-base">
                We established our Maitri Foundation back in 2019. We started this foundation to assist the needy ones as well as help our mother nature in every possible way. Together, we strive to make a meaningful difference.
              </motion.p>
              <motion.p variants={fadeInRight} className="text-on-surface-variant mb-8 leading-relaxed">
                Our approach balances the urgent, high-impact nature of environmental and social welfare with a warm, human-centric focus. We believe that by protecting our environment, we create a better world for everyone to thrive in.
              </motion.p>
              <ul className="space-y-4">
                {[
                  'Transparent and Accountable Operations',
                  'Community-Driven Conservation Projects',
                  'Direct Support for Marginalized Families'
                ].map((item, idx) => (
                  <motion.li
                    key={idx}
                    variants={itemVariants}
                    className="flex items-center gap-3"
                    whileHover={{ x: 8 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + idx * 0.1, type: "spring", stiffness: 400 }}
                    >
                      <CheckCircle className="text-secondary w-6 h-6" />
                    </motion.div>
                    <span className="font-medium">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Latest Events Preview */}
      <section className="py-24 bg-surface-container-low">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            className="flex justify-between items-end mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <div>
              <motion.span
                className="text-secondary font-bold tracking-widest uppercase text-xs"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
              >
                Events
              </motion.span>
              <motion.h3
                className="text-3xl font-bold text-primary mt-2"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                Latest Highlights
              </motion.h3>
            </div>
            <motion.div
              whileHover={{ x: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Link to="/events" className="text-secondary font-bold hover:underline flex items-center gap-1">
                View All <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              className="bg-surface rounded-2xl overflow-hidden shadow-md border border-outline-variant/20 group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              whileHover={{ y: -8, boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}
            >
              <div className="h-48 overflow-hidden relative">
                <img
                  alt="Tree Plantation"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  src="https://images.pexels.com/photos/20356926/pexels-photo-20356926.jpeg?auto=compress&cs=tinysrgb&w=1260"
                />
              </div>
              <div className="p-6">
                <motion.span
                  className="bg-primary-container text-on-primary-container text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider inline-block"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                >
                  Environment
                </motion.span>
                <h4 className="text-xl font-bold mt-4 mb-2">Tree Plantation Drive</h4>
                <p className="text-on-surface-variant text-sm line-clamp-2">Join us for our annual mega plantation event in Mumbai suburbs.</p>
              </div>
            </motion.div>
            {/* Additional cards would go here for a full list */}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-primary py-24">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            <motion.h2 variants={fadeInUp} className="text-4xl font-bold text-on-primary mb-6">Stay Connected</motion.h2>
            <motion.p variants={fadeInUp} className="text-on-primary/70 mb-12 max-w-2xl mx-auto">
              Follow our journey and become part of the change.
              We are always looking for passionate volunteers to help us grow our impact.
            </motion.p>
            <motion.div
              variants={fadeInUp}
              className="flex flex-col sm:flex-row gap-6 justify-center"
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link to="/support" className="bg-secondary-container text-on-secondary-container px-10 py-4 rounded-full font-bold hover:shadow-xl transition-all text-lg shadow-xl inline-block">
                  Support Our Mission
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link to="/team" className="border-2 border-on-primary/30 text-on-primary px-10 py-4 rounded-full font-bold hover:bg-on-primary/10 transition-all text-lg inline-block">
                  Meet The Team
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
