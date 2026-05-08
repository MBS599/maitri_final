import { motion } from 'motion/react';
import { Sparkles, Heart, BookOpen, Scissors, TrendingUp, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

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
              className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight"
            >
              Kaushalya: Skill, Strength & Success
            </motion.h1>
            <motion.p 
              variants={itemVariants}
              className="text-lg opacity-90 mb-8 leading-relaxed"
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
            <motion.h2 variants={fadeInUp} className="text-4xl font-bold text-primary mb-6">Empowering Half the Sky</motion.h2>
            <motion.p variants={fadeInUp} className="text-on-surface-variant leading-relaxed text-lg">
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
                desc: 'Tailoring, handicrafts, and small-scale manufacturing skills to enable home-based businesses.'
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
                  alt="Women working together"
                  className="w-full h-full object-cover"
                  src="https://images.pexels.com/photos/14558560/pexels-photo-14558560.jpeg?auto=compress&cs=tinysrgb&w=1260"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.6 }}
                />
              </div>
              <motion.div 
                className="absolute -bottom-6 -right-6 bg-secondary text-on-secondary p-8 rounded-2xl shadow-xl max-w-[280px]"
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
                  — Meera, Batch of 2023
                </motion.span>
              </motion.div>
            </motion.div>
            
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.h2 variants={fadeInRight} className="text-4xl font-bold text-primary mb-6">Our Impact So Far</motion.h2>
              <motion.p variants={fadeInRight} className="text-on-surface-variant mb-10 leading-relaxed">
                Since its inception, Kaushalya has trained over 200 women in various skills. Many have started their own small ventures, while others have found stable employment in the local industry.
              </motion.p>
              
              <motion.div 
                className="grid grid-cols-2 gap-8"
                variants={containerVariants}
              >
                {[
                  { value: '200+', label: 'Women Trained' },
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

              <motion.div 
                variants={fadeInRight}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                <Link to="/volunteer" className="mt-12 inline-flex items-center gap-2 bg-primary text-on-primary px-10 py-4 rounded-full font-bold hover:shadow-xl transition-all">
                  Become a Mentor <ArrowRight className="w-5 h-5" />
                </Link>
              </motion.div>
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
          <motion.h2 variants={fadeInUp} className="text-4xl font-bold text-on-primary mb-6">Help Us Expand Kaushalya</motion.h2>
          <motion.p variants={fadeInUp} className="text-on-primary/70 mb-12 text-lg">
            We aim to reach 1000 women by 2025. Your donation can provide training kits, sewing machines, and expert mentorship.
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
    </div>
  );
}
