import { motion } from 'motion/react';
import { Mail, Link as LinkIcon, ArrowRight, Award } from 'lucide-react';
import teamBg from '../assets/team.jpg';
import siddhiKadam from '../assets/team/siddhi_kadam.png';
import pranavPawar from '../assets/team/pranav pawar.png';
import sanikaPhadtare from '../assets/team/sanika phadtare.png';
import nirajSharma from '../assets/team/niraj.png';
import sid from '../assets/team/sid.png';
import mayurSutar from '../assets/team/Mayur.png';
import divya from '../assets/team/divya.png';
import jayesh from '../assets/team/jayesh.png';
import ankita from '../assets/team/ankita.png';

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
      <section className="bg-primary py-24 text-center text-on-primary relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-50">
          <img
            src={teamBg}
            alt="Team background"
            className="w-full h-full object-cover object-[center_40%]"
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
              className="text-5xl font-extrabold mb-6"
            >
              Meet Our Compassionate Team
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-lg text-on-primary/90 max-w-2xl mx-auto leading-relaxed"
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
          <h3 className="text-4xl font-bold text-primary mt-2">Core Committee</h3>
          <p className="text-on-surface-variant text-sm mt-4 max-w-2xl mx-auto">The dedicated individuals guiding Maitri's mission and strategic decisions.</p>
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
                className="w-full h-full object-cover object-[center_5%]"
                alt="Siddhesh Nikam"
                src={sid}
                initial={{ scale: 1.0 }}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.6 }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>
            <div className="p-6 text-center">
              <h4 className="text-xl font-bold text-primary mb-1 leading-tight">Siddhesh Nikam</h4>
              <p className="text-secondary font-bold text-[10px] uppercase tracking-widest">President</p>
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
                className="w-full h-full object-cover object-[center_25%]"
                alt="Divya"
                src={divya}
                whileHover={{ scale: 1.05 }}
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

          {/* Ankita Aware */}
          <motion.div
            variants={itemVariants}
            whileHover={{ y: -5 }}
            className="bg-white rounded-[2rem] overflow-hidden shadow-sm border border-outline-variant/30 group transition-all hover:shadow-md"
          >
            <div className="aspect-square overflow-hidden relative">
              <motion.img
                className="w-full h-full object-cover object-[center_25%]"
                alt="Ankita Aware"
                src={ankita}
                initial={{ scale: 1.1 }}
                whileHover={{ scale: 1.15 }}
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
                className="w-full h-full object-cover object-[center_25%]"
                alt="Mayur Sutar"
                src={mayurSutar}
                initial={{ scale: 1.02 }}
                whileHover={{ scale: 1.1 }}
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


      {/* Program Experts */}
      <section className="bg-surface-container-low py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInLeft}
            >
              <span className="text-secondary font-bold tracking-widest uppercase text-xs">Program Experts</span>
              <h3 className="text-4xl font-bold text-primary mt-2">Passionate Minds in Action</h3>
            </motion.div>
            <motion.p
              className="text-on-surface-variant max-w-md text-sm leading-relaxed"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInRight}
            >
              Our team combines technical expertise with deep community ties to deliver lasting impact across our focus areas.
            </motion.p>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {[
              {
                name: 'Arjun Mehta',
                role: 'Community Outreach',
                desc: 'Bridging the gap between corporate partners and local village councils.',
                img: 'https://images.pexels.com/photos/33261949/pexels-photo-33261949.jpeg?auto=compress&cs=tinysrgb&w=1200'
              },
              {
                name: 'Sarah Jenkins',
                role: 'Sustainability Lead',
                desc: 'Specializing in water conservation and regenerative agricultural practices.',
                img: 'https://images.pexels.com/photos/7468194/pexels-photo-7468194.jpeg?auto=compress&cs=tinysrgb&w=1200'
              },
              {
                name: 'Dr. David Okafor',
                role: 'Health & Wellness',
                desc: 'Overseeing our mobile health clinics and nutritional support programs.',
                img: 'https://images.pexels.com/photos/4797690/pexels-photo-4797690.jpeg?auto=compress&cs=tinysrgb&w=1200'
              },
              {
                name: 'Elena Rodriguez',
                role: 'Education Director',
                desc: 'Designing inclusive curriculum for our vocational training centers.',
                img: 'https://images.pexels.com/photos/35843378/pexels-photo-35843378.jpeg?auto=compress&cs=tinysrgb&w=1200'
              }
            ].map((staff, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                whileHover={{ y: -10, boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}
                transition={{ type: "spring", stiffness: 300 }}
                className="bg-surface rounded-3xl p-4 border border-outline-variant/20 transition-all shadow-sm group"
              >
                <div className="aspect-[3/4] rounded-2xl overflow-hidden mb-6">
                  <motion.img
                    className="w-full h-full object-cover transition-transform duration-700"
                    src={staff.img}
                    alt={staff.name}
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  />
                </div>
                <motion.h5
                  className="text-xl font-bold text-primary mb-1"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * idx + 0.3 }}
                >
                  {staff.name}
                </motion.h5>
                <p className="text-secondary font-bold text-xs uppercase mb-3">{staff.role}</p>
                <p className="text-on-surface-variant text-xs leading-relaxed">{staff.desc}</p>
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
