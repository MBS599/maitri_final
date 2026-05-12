import { motion } from 'motion/react';
import { Mail, Link as LinkIcon, ArrowRight, Award } from 'lucide-react';
import teamBg from '../assets/team.jpg';
import siddhiKadam from '../assets/team/sidhhi.png';
import pranavPawar from '../assets/team/pranav.png';
import sanikaPhadtare from '../assets/team/sanika phadtare.png';
import nirajSharma from '../assets/team/niraj.png';
import sid from '../assets/team/sid.png';
import mayurSutar from '../assets/team/mayur.png';
import divya from '../assets/team/divya.png';
import jayesh from '../assets/team/jayesh.png';
import ankita from '../assets/team/ankita.png';
import piyush from '../assets/team/piyush.png';
import shivam from '../assets/team/shivam.png';
import awanti from '../assets/team/awanti.png';
import pranjal from '../assets/team/pranjal.png';
import reema from '../assets/team/reema.png';

import awardJayesh from '../assets/awards/best_volunteer/jayesh_pachange.webp';
import awardPranaw from '../assets/awards/best_volunteer/pranav_pawar.jpeg';
import awardShreya from '../assets/awards/best_volunteer/shreya deshpande.jpeg';

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

export default function Team() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-primary py-48 text-center text-on-primary relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-50">
          <img
            src={teamBg}
            alt="Team background"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-primary/40"></div>
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-6">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            <motion.h2
              variants={fadeInUp}
              className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6 leading-[1.1]"
            >
              Meet Our Compassionate Team
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-base sm:text-lg text-on-primary/90 max-w-2xl mx-auto leading-relaxed"
            >
              A dedicated group of professionals and community leaders united by a single mission: creating sustainable social change through empathy and action.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Core Committee */}
      <section className="max-w-7xl mx-auto px-6 py-24 border-b border-outline-variant/30">
        <motion.div
          className="mb-16 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <span className="text-secondary font-bold tracking-widest uppercase text-[10px]">Governance</span>
          <h3 className="text-3xl sm:text-4xl font-bold text-primary mt-2">Core Committee</h3>
          <p className="text-on-surface-variant text-xs sm:text-sm mt-4 max-w-2xl mx-auto">The dedicated individuals guiding Maitri's mission and strategic decisions.</p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8"
        >
          {/* Siddhesh Nikam */}
          <motion.div
            variants={itemVariants}
            whileHover={{ y: -5 }}
            className="bg-white rounded-[2rem] overflow-hidden shadow-sm border border-outline-variant/30 group transition-all hover:shadow-md"
          >
            <div className="aspect-square overflow-hidden relative">
              <motion.img
                className="w-full h-full object-cover object-[center_25%]"
                alt="Siddhesh Nikam"
                src={sid}
                initial={{ scale: 1.15 }}
                whileHover={{ scale: 1.2 }}
                transition={{ duration: 0.6 }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>
            <div className="p-6 text-center">
              <h4 className="text-xl font-bold text-primary mb-1 leading-tight">Siddhesh Nikam</h4>
              <p className="text-secondary font-bold text-[10px] uppercase tracking-widest">President</p>
            </div>
          </motion.div>

          {/* Shivam Mhetre */}
          <motion.div
            variants={itemVariants}
            whileHover={{ y: -5 }}
            className="bg-white rounded-[2rem] overflow-hidden shadow-sm border border-outline-variant/30 group transition-all hover:shadow-md"
          >
            <div className="aspect-square overflow-hidden relative">
              <motion.img
                className="w-full h-full object-cover object-[center_25%]"
                alt="Shivam Mhetre"
                src={shivam}
                initial={{ scale: 1.15 }}
                whileHover={{ scale: 1.2 }}
                transition={{ duration: 0.6 }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>
            <div className="p-6 text-center">
              <h4 className="text-xl font-bold text-primary mb-1 leading-tight">Shivam Mhetre</h4>
              <p className="text-secondary font-bold text-[10px] uppercase tracking-widest">Vice President</p>
            </div>
          </motion.div>

          {/* Awanti Gaikwad */}
          <motion.div
            variants={itemVariants}
            whileHover={{ y: -5 }}
            className="bg-white rounded-[2rem] overflow-hidden shadow-sm border border-outline-variant/30 group transition-all hover:shadow-md"
          >
            <div className="aspect-square overflow-hidden relative">
              <motion.img
                className="w-full h-full object-cover object-[center_25%]"
                alt="Awanti Gaikwad"
                src={awanti}
                initial={{ scale: 1.15 }}
                whileHover={{ scale: 1.2 }}
                transition={{ duration: 0.6 }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>
            <div className="p-6 text-center">
              <h4 className="text-xl font-bold text-primary mb-1 leading-tight">Awanti Gaikwad</h4>
              <p className="text-secondary font-bold text-[10px] uppercase tracking-widest">Joint Secretary</p>
            </div>
          </motion.div>

          {/* Jayesh Pachange */}
          <motion.div
            variants={itemVariants}
            whileHover={{ y: -5 }}
            className="bg-white rounded-[2rem] overflow-hidden shadow-sm border border-outline-variant/30 group transition-all hover:shadow-md"
          >
            <div className="aspect-square overflow-hidden relative">
              <motion.img
                className="w-full h-full object-cover object-[center_25%]"
                alt="Jayesh Pachange"
                src={jayesh}
                initial={{ scale: 1.1 }}
                whileHover={{ scale: 1.15 }}
                transition={{ duration: 0.6 }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>
            <div className="p-6 text-center">
              <h4 className="text-xl font-bold text-primary mb-1 leading-tight">Jayesh Pachange</h4>
              <p className="text-secondary font-bold text-[10px] uppercase tracking-widest">Treasurer</p>
            </div>
          </motion.div>

          {/* Niraj Sharma */}
          <motion.div
            variants={itemVariants}
            whileHover={{ y: -5 }}
            className="bg-white rounded-[2rem] overflow-hidden shadow-sm border border-outline-variant/30 group transition-all hover:shadow-md"
          >
            <div className="aspect-square overflow-hidden relative">
              <motion.img
                className="w-full h-full object-cover object-[center_25%]"
                alt="Niraj Sharma"
                src={nirajSharma}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.6 }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>
            <div className="p-6 text-center">
              <h4 className="text-xl font-bold text-primary mb-1 leading-tight">Niraj Sharma</h4>
              <p className="text-secondary font-bold text-[10px] uppercase tracking-widest">Director (Event Management)</p>
            </div>
          </motion.div>

          {/* Pranav Pawar */}
          <motion.div
            variants={itemVariants}
            whileHover={{ y: -5 }}
            className="bg-white rounded-[2rem] overflow-hidden shadow-sm border border-outline-variant/30 group transition-all hover:shadow-md"
          >
            <div className="aspect-square overflow-hidden relative">
              <motion.img
                className="w-full h-full object-cover object-[center_25%]"
                alt="Pranav Pawar"
                src={pranavPawar}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.6 }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>
            <div className="p-6 text-center">
              <h4 className="text-xl font-bold text-primary mb-1 leading-tight">Pranav Pawar</h4>
              <p className="text-secondary font-bold text-[10px] uppercase tracking-widest">Director (Social Media)</p>
            </div>
          </motion.div>

          {/* Divya */}
          <motion.div
            variants={itemVariants}
            whileHover={{ y: -5 }}
            className="bg-white rounded-[2rem] overflow-hidden shadow-sm border border-outline-variant/30 group transition-all hover:shadow-md"
          >
            <div className="aspect-square overflow-hidden relative">
              <motion.img
                className="w-full h-full object-cover object-[center_35%]"
                alt="Divya"
                src={divya}
                initial={{ scale: 1.2 }}
                whileHover={{ scale: 1.3 }}
                transition={{ duration: 0.6 }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>
            <div className="p-6 text-center">
              <h4 className="text-xl font-bold text-primary mb-1 leading-tight">Divya</h4>
              <p className="text-secondary font-bold text-[10px] uppercase tracking-widest">Director (Kaushalya)</p>
            </div>
          </motion.div>

          {/* Sanika Phadtare */}
          <motion.div
            variants={itemVariants}
            whileHover={{ y: -5 }}
            className="bg-white rounded-[2rem] overflow-hidden shadow-sm border border-outline-variant/30 group transition-all hover:shadow-md"
          >
            <div className="aspect-square overflow-hidden relative">
              <motion.img
                className="w-full h-full object-cover object-[center_25%]"
                alt="Sanika Phadtare"
                src={sanikaPhadtare}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.6 }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>
            <div className="p-6 text-center">
              <h4 className="text-xl font-bold text-primary mb-1 leading-tight">Sanika Phadtare</h4>
              <p className="text-secondary font-bold text-[10px] uppercase tracking-widest leading-relaxed">
                Joint Director (Kaushalya),<br />Team Leader (Promotion & Marketing)
              </p>
            </div>
          </motion.div>

          {/* Siddhi Kadam */}
          <motion.div
            variants={itemVariants}
            whileHover={{ y: -5 }}
            className="bg-white rounded-[2rem] overflow-hidden shadow-sm border border-outline-variant/30 group transition-all hover:shadow-md"
          >
            <div className="aspect-square overflow-hidden relative">
              <motion.img
                className="w-full h-full object-cover object-[center_25%]"
                alt="Siddhi Kadam"
                src={siddhiKadam}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.6 }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>
            <div className="p-6 text-center">
              <h4 className="text-xl font-bold text-primary mb-1">Siddhi Kadam</h4>
              <p className="text-secondary font-bold text-[10px] uppercase tracking-widest">Executive Representative</p>
            </div>
          </motion.div>

          {/* Pranjal Khalate */}
          <motion.div
            variants={itemVariants}
            whileHover={{ y: -5 }}
            className="bg-white rounded-[2rem] overflow-hidden shadow-sm border border-outline-variant/30 group transition-all hover:shadow-md"
          >
            <div className="aspect-square overflow-hidden relative">
              <motion.img
                className="w-full h-full object-cover object-[center_25%]"
                alt="Pranjal Khalate"
                src={pranjal}
                initial={{ scale: 1.15 }}
                whileHover={{ scale: 1.2 }}
                transition={{ duration: 0.6 }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>
            <div className="p-6 text-center">
              <h4 className="text-xl font-bold text-primary mb-1 leading-tight">Pranjal Khalate</h4>
              <p className="text-secondary font-bold text-[10px] uppercase tracking-widest">Member</p>
            </div>
          </motion.div>

          {/* Piyush Kadam */}
          <motion.div
            variants={itemVariants}
            whileHover={{ y: -5 }}
            className="bg-white rounded-[2rem] overflow-hidden shadow-sm border border-outline-variant/30 group transition-all hover:shadow-md"
          >
            <div className="aspect-square overflow-hidden relative">
              <motion.img
                className="w-full h-full object-cover object-[center_15%]"
                alt="Piyush Kadam"
                src={piyush}
                initial={{ scale: 1.1 }}
                whileHover={{ scale: 1.15 }}
                transition={{ duration: 0.6 }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>
            <div className="p-6 text-center">
              <h4 className="text-xl font-bold text-primary mb-1 leading-tight">Piyush Kadam</h4>
              <p className="text-secondary font-bold text-[10px] uppercase tracking-widest">Member</p>
            </div>
          </motion.div>

          {/* Reema Kalbhor */}
          <motion.div
            variants={itemVariants}
            whileHover={{ y: -5 }}
            className="bg-white rounded-[2rem] overflow-hidden shadow-sm border border-outline-variant/30 group transition-all hover:shadow-md"
          >
            <div className="aspect-square overflow-hidden relative">
              <motion.img
                className="w-full h-full object-cover object-[center_15%]"
                alt="Reema Kalbhor"
                src={reema}
                initial={{ scale: 1.15 }}
                whileHover={{ scale: 1.2 }}
                transition={{ duration: 0.6 }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>
            <div className="p-6 text-center">
              <h4 className="text-xl font-bold text-primary mb-1 leading-tight">Reema Kalbhor</h4>
              <p className="text-secondary font-bold text-[10px] uppercase tracking-widest">Member</p>
            </div>
          </motion.div>

          {/* Ankita Aware */}
          <motion.div
            variants={itemVariants}
            whileHover={{ y: -5 }}
            className="bg-white rounded-[2rem] overflow-hidden shadow-sm border border-outline-variant/30 group transition-all hover:shadow-md"
          >
            <div className="aspect-square overflow-hidden relative">
              <motion.img
                className="w-full h-full object-cover object-[center_25px]"
                alt="Ankita Aware"
                src={ankita}
                initial={{ scale: 1.65 }}
                whileHover={{ scale: 1.75 }}
                transition={{ duration: 0.6 }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>
            <div className="p-6 text-center">
              <h4 className="text-xl font-bold text-primary mb-1 leading-tight">Ankita Aware</h4>
              <p className="text-secondary font-bold text-[10px] uppercase tracking-widest">Member (Report Writing)</p>
            </div>
          </motion.div>

          {/* Mayur Sutar */}
          <motion.div
            variants={itemVariants}
            whileHover={{ y: -5 }}
            className="bg-white rounded-[2rem] overflow-hidden shadow-sm border border-outline-variant/30 group transition-all hover:shadow-md"
          >
            <div className="aspect-square overflow-hidden relative">
              <motion.img
                className="w-full h-full object-cover object-[center_15%]"
                alt="Mayur Sutar"
                src={mayurSutar}
                initial={{ scale: 1.15 }}
                whileHover={{ scale: 1.2 }}
                transition={{ duration: 0.6 }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>
            <div className="p-6 text-center">
              <h4 className="text-xl font-bold text-primary mb-1 leading-tight">Mayur Sutar</h4>
              <p className="text-secondary font-bold text-[10px] uppercase tracking-widest">Member</p>
            </div>
          </motion.div>

          {/* Add more members here as needed */}
        </motion.div>
      </section>


      {/* Best Volunteer Award */}
      <section className="bg-surface-container-low py-24 border-b border-outline-variant/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInLeft}
            >
              <span className="text-secondary font-bold tracking-widest uppercase text-[10px] sm:text-xs">Excellence in Service</span>
              <h3 className="text-3xl sm:text-4xl font-bold text-primary mt-2">Best Volunteer Award</h3>
            </motion.div>
            <motion.p
              className="text-on-surface-variant max-w-md text-sm leading-relaxed"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInRight}
            >
              Honoring the dedicated individuals who have gone above and beyond to serve the community through the Maitri Welfare Foundation.
            </motion.p>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {[
              {
                year: '2025-26',
                name: 'Mrs. Shreya Deshpande',
                title: 'Maitrian of the Year',
                desc: 'Always active in groups and events, providing invaluable support and help whenever possible.',
                img: awardShreya
              },
              {
                year: '2023-24',
                name: 'Jayesh Pachange',
                title: 'Maitrian of the Year',
                desc: 'Recognized for his exceptional financial management and transparency in handling the foundation\'s resources.',
                img: awardJayesh
              },
              {
                year: '2022-23',
                name: 'Pranav Pawar',
                title: 'Maitrian of the Year',
                desc: 'Awarded for his creative leadership in enhancing our social media presence and digital outreach.',
                img: awardPranaw
              }
            ].map((award, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                whileHover={{ y: -10 }}
                className="bg-white rounded-[2.5rem] overflow-hidden border border-outline-variant/20 shadow-sm transition-all hover:shadow-xl group relative"
              >
                <div className="absolute top-6 right-6 z-20">
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.5, type: "spring" }}
                    className="bg-secondary text-on-secondary w-14 h-14 rounded-full flex items-center justify-center shadow-lg border-4 border-white"
                  >
                    <Award className="w-6 h-6" />
                  </motion.div>
                </div>

                <div className="aspect-[4/5] overflow-hidden relative">
                  <motion.img
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    src={award.img}
                    alt={award.name}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity"></div>

                  <div className="absolute bottom-0 left-0 right-0 p-8 text-on-primary">
                    <motion.div
                      initial={{ y: 20, opacity: 0 }}
                      whileInView={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.2 }}
                    >
                      <span className="text-secondary-container font-bold text-xs uppercase tracking-widest">Maitrian of the Year</span>
                      <h4 className="text-2xl font-bold mt-1 leading-tight">{award.name}</h4>
                    </motion.div>
                  </div>
                </div>

                <div className="p-8">
                  <h5 className="text-primary font-bold text-lg mb-2">Awarded Year: {award.year}</h5>
                  <p className="text-on-surface-variant text-sm leading-relaxed">{award.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Advisory Board snippet */}
      <section className="py-24 max-w-7xl mx-auto px-6 text-center border-t border-outline-variant/30">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <motion.span variants={fadeInUp} className="text-secondary font-bold tracking-widest uppercase text-xs">Governance</motion.span>
          <motion.h3 variants={fadeInUp} className="text-4xl font-bold text-primary mt-2 mb-12">The Steering Committee</motion.h3>
        </motion.div>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {['Finance Committee', 'Ethics & Governance', 'Community Impact'].map((title, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className="flex flex-col items-center"
              whileHover={{ y: -8 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <motion.div
                className="w-16 h-16 rounded-full bg-secondary-container flex items-center justify-center text-on-secondary-container mb-6 shadow-md"
                whileHover={{ scale: 1.15, rotate: 10 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <Award className="w-8 h-8" />
              </motion.div>
              <h6 className="text-lg font-bold text-primary mb-2">{title}</h6>
              <p className="text-sm text-on-surface-variant leading-relaxed">Strategic oversight and guidance ensuring the foundation's long-term sustainability.</p>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </div>
  );
}
