import React from 'react';
import { motion } from 'motion/react';
import { Heart, Target, Lightbulb, Users, Globe, Shield } from 'lucide-react';
import aboutHero from '../assets/hero.png';
import { AnimatedCounter } from '../components/AnimatedCounter';
import fullTeam from '../assets/team/full_team.jpeg';
import about1 from '../assets/team/about1.jpg';
import about2 from '../assets/team/about2.jpg';
import SEO from '../components/SEO';


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
  return (
    <div className="pt-20">
      <SEO
        title="About Us | Our Mission, Vision & Journey"
        description="Learn about Maitri Welfare Foundation's journey since 2019, our mission to alleviate poverty, and our vision for an equitable future through social welfare."
        keywords="about Maitri Foundation, NGO mission vision, social service history, Maitri Welfare Foundation team"
        canonical="/about"
      />
      {/* Hero Section */}
      <section className="bg-primary py-24 text-center text-on-primary relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <img
            src={aboutHero}
            className="w-full h-full object-cover"
            alt="Maitri Welfare Foundation social work background"
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
              About Us: Our Mission & Journey
            </motion.h1>
            <motion.p
              variants={fadeInUp}
              className="text-base sm:text-lg md:text-xl opacity-90 leading-relaxed font-medium"
            >
              Maitri Welfare Foundation is dedicated to empowering communities through transparent, professional, and compassionate social welfare programs. We believe in creating sustainable change that lasts generations.
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
            <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-4">Our Mission</h2>
            <p className="text-on-surface-variant leading-relaxed">
              To alleviate poverty, provide quality education, and offer essential healthcare services to the most vulnerable sections of society. We strive to create an ecosystem of equal opportunities where every individual has the resources they need to thrive and contribute to a better world.
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
            <h2 className="text-2xl sm:text-3xl font-bold text-secondary mb-4">Our Vision</h2>
            <p className="text-on-surface-variant leading-relaxed">
              A world where compassion and systemic support eradicate inequality. We envision empowered communities that are self-reliant, educated, and healthy, paving the way for a brighter, more equitable future for all generations to come.
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
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-primary mb-4">Our Journey</h2>
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
              <span className="text-secondary font-bold text-[10px] sm:text-sm uppercase tracking-widest mb-4 block">How it all began</span>
              <h3 className="text-2xl sm:text-3xl font-bold text-primary mb-6">A Vision Shared by Five Friends</h3>
              <p className="text-on-surface-variant text-base sm:text-lg leading-relaxed mb-6">
                Maitri Welfare Foundation started as a small seed of an idea shared among five close friends. Driven by a mutual desire to give back to society, they began their journey with simple social awareness programs, educating local communities about their rights and environmental responsibilities.
              </p>
              <div className="flex gap-4 items-center text-primary font-bold">
                <div className="w-12 h-0.5 bg-primary"></div>
                <span>The Foundation of Friendship</span>
              </div>
            </motion.div>
            <motion.div
              className="relative"
              initial={{ opacity: 0, scale: 0.9, x: 50 }}
              whileInView={{ opacity: 1, scale: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="aspect-[4/3] rounded-[2.5rem] overflow-hidden shadow-2xl border-8 border-white">
                <img
                  src={about1}
                  alt="Maitri Welfare Foundation founders and early team members"
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
              <div className="aspect-[4/3] rounded-[2.5rem] overflow-hidden shadow-2xl border-8 border-white">
                <img
                  src={about2}
                  alt="Maitri Welfare Foundation food donation drive for the needy"
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
              <span className="text-secondary font-bold text-sm uppercase tracking-widest mb-4 block">Next Chapter</span>
              <h3 className="text-3xl font-bold text-primary mb-6">Expanding Our Reach</h3>
              <p className="text-on-surface-variant text-lg leading-relaxed mb-6">
                As the group witnessed the profound impact of their awareness drives, they realized the need for more direct action. The foundation soon expanded its horizons into critical areas such as food donation, healthcare support, and sustainable development, touching thousands of lives every year.
              </p>
              <div className="flex gap-4 items-center text-primary font-bold">
                <span>Direct Impact on the Ground</span>
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
              <span className="text-secondary font-bold text-sm uppercase tracking-widest mb-4 block">Our Team Today</span>
              <h3 className="text-3xl font-bold text-primary mb-6">A Growing Community of Scholars</h3>
              <p className="text-on-surface-variant text-lg leading-relaxed mb-6">
                What began with five friends has now blossomed into a massive network of over 100+ dedicated individuals. Our team is uniquely powered by a vibrant community of scholars, bachelors, and young professionals who bring fresh energy, academic excellence, and a modern approach to social service.
              </p>
              <div className="flex gap-4 items-center text-primary font-bold">
                <div className="w-12 h-0.5 bg-primary"></div>
                <span>Driven by Youth & Intelligence</span>
              </div>
            </motion.div>
            <motion.div
              className="relative"
              initial={{ opacity: 0, scale: 0.9, x: 50 }}
              whileInView={{ opacity: 1, scale: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="aspect-video rounded-[2.5rem] overflow-hidden shadow-2xl border-8 border-white bg-white">
                <img
                  src={fullTeam}
                  alt="Maitri Welfare Foundation Team"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-secondary/10 rounded-full blur-3xl -z-10"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="bg-primary text-on-primary py-24">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            className="text-center max-w-2xl mx-auto mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-4xl font-bold mb-6">Our Core Values</h2>
            <p className="text-on-primary/80">
              The principles that guide every decision we make and every project we undertake.
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
              {
                icon: Shield,
                title: "Transparency",
                desc: "We maintain 100% financial and operational transparency with our donors and beneficiaries."
              },
              {
                icon: Heart,
                title: "Compassion",
                desc: "Empathy drives our initiatives. We listen, understand, and act with genuine care."
              },
              {
                icon: Globe,
                title: "Sustainability",
                desc: "Our solutions are designed to be long-lasting and environmentally conscious."
              }
            ].map((value, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="bg-on-primary/5 p-8 rounded-3xl border border-on-primary/10 hover:bg-on-primary/10 transition-colors"
              >
                <value.icon className="w-10 h-10 text-secondary-container mb-6" />
                <h3 className="text-xl font-bold mb-4">{value.title}</h3>
                <p className="text-on-primary/70 leading-relaxed">{value.desc}</p>
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
          <h2 className="text-3xl font-bold text-primary mb-16">The Impact We've Made</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "5k+", label: "Lives Impacted" },
              { number: "120+", label: "Projects Done" },
              { number: "5+", label: "Cities Reached" },
              { number: "200+", label: "Volunteers" }
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
