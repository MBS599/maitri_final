import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { CheckCircle, ArrowRight, ArrowUpRight, MapPin, Plus, Heart, Leaf, Users } from 'lucide-react';
import heroImg from '../assets/hero.png';
import { AnimatedCounter } from '../components/AnimatedCounter';
import news1 from '../assets/news/new1.jpeg';
import news2 from '../assets/news/news2.jpeg';
import about1 from '../assets/team/about1.jpg';
import SEO from '../components/SEO';

export default function Home() {
  const homeSchema = {
    "@context": "https://schema.org",
    "@type": "NGO",
    "name": "Maitri Welfare Foundation",
    "url": "https://maitriwelfarefoundation.org",
    "logo": "https://maitriwelfarefoundation.org/favicon.ico",
    "description": "Maitri Welfare Foundation is a non-profit NGO in Katraj, Pune, dedicated to environmental conservation, women empowerment through Kaushalya project, and community welfare.",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Katraj, Pune",
      "addressRegion": "Maharashtra",
      "postalCode": "411046",
      "addressCountry": "IN"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91-7447434373",
      "contactType": "customer service"
    }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is the primary mission of Maitri Welfare Foundation?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our primary mission is to empower communities through sustainable social welfare programs, including environmental conservation, tree plantation drives, and women empowerment through our Project Kaushalya."
        }
      },
      {
        "@type": "Question",
        "name": "Where is Maitri Welfare Foundation located?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We are based in Katraj, Pune (Maharashtra), and our primary on-ground activities are centered around the Pune region, though our digital community spans across India."
        }
      },
      {
        "@type": "Question",
        "name": "How can I contribute to the foundation's work?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "You can contribute by donating through our secure payment channels, volunteering your time for our various drives, or spreading awareness about our social and environmental initiatives."
        }
      },
      {
        "@type": "Question",
        "name": "What is Project Kaushalya?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Project Kaushalya is our flagship women empowerment initiative that provides vocational training, financial literacy, and leadership skills to women from underprivileged backgrounds to help them become self-reliant."
        }
      },
      {
        "@type": "Question",
        "name": "Is Maitri Welfare Foundation a registered NGO?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we are a legally registered non-profit organization (NGO) under the registration number F-0062418(PUN)."
        }
      }
    ]
  };

  const combinedSchema = [homeSchema, faqSchema];

  const stats = [
    { label: 'Needy Helped', value: '5k+' },
    { label: 'Environmental Events', value: '150+' },
    { label: 'Years of Impact', value: '7+' }
  ];

  const pillars = [
    'Transparent and Accountable Operations',
    'Community-Driven Conservation Projects',
    'Direct Support for Marginalized Families'
  ];

  const highlights = [
    {
      category: 'Environment',
      title: 'Tree Plantation Drive',
      desc: 'Join us for our annual mega plantation event in suburban green belts to foster environmental sustainability.',
      location: 'Pune',
      img: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=800&q=80'
    },
    {
      category: 'Social Welfare',
      title: 'Community Food Distribution',
      desc: 'Providing essential ration kits and healthy cooked meals to support underprivileged families and elderly citizens.',
      location: 'Pune',
      img: news2
    },
    {
      category: 'Health & Care',
      title: 'Mega Blood Donation Camp',
      desc: 'Organizing robust community blood donation drives to aid city hospitals during critical blood shortages.',
      location: 'Pune',
      img: news1
    }
  ];

  const faqs = [
    {
      q: "What is the primary mission of Maitri Welfare Foundation?",
      a: "Our primary mission is to empower communities through sustainable social welfare programs, including environmental conservation, tree plantation drives, and women empowerment through our Project Kaushalya."
    },
    {
      q: "Where is Maitri Welfare Foundation located?",
      a: "We are based in Katraj, Pune (Maharashtra), and our primary on-ground activities are centered around the Pune region, though our digital community spans across India."
    },
    {
      q: "How can I contribute to the foundation's work?",
      a: "You can contribute by donating through our secure payment channels, volunteering your time for our various drives, or spreading awareness about our social and environmental initiatives."
    },
    {
      q: "What is Project Kaushalya?",
      a: "Project Kaushalya is our flagship women empowerment initiative that provides vocational training, financial literacy, and leadership skills to women from underprivileged backgrounds to help them become self-reliant."
    },
    {
      q: "Is Maitri Welfare Foundation a registered NGO?",
      a: "Yes, we are a legally registered non-profit organization (NGO) under the registration number F-0062418(PUN)."
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.12 } }
  };

  const itemVariants = {
    hidden: { y: 24, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
  };

  const marqueeItems = [...pillars, '"एक हात मैत्रीचा" • One Hand of Friendship'];

  return (
    <div className="pt-20">
      <SEO
        title="Best NGO in Pune | Empowering Lives & Protecting Nature"
        description="Maitri Welfare Foundation is one of the best NGOs in Pune (Katraj), dedicated to tree plantation, women empowerment (Project Kaushalya), and community social welfare."
        keywords="NGO in Pune, Best NGO in Pune, NGO in Katraj Pune, Tree Plantation Pune, Women Empowerment NGO, Social Welfare Pune, Maitri Welfare Foundation"
        canonical="/"
        ogImage="/og-image.png"
        ogImageWidth="1200"
        ogImageHeight="630"
        schemaData={combinedSchema}
      />

      {/* Hero */}
      <section className="px-3 sm:px-5 pt-3">
        <div className="relative max-w-[1400px] mx-auto min-h-[640px] sm:min-h-[720px] lg:min-h-[calc(100vh-7rem)] rounded-[2rem] sm:rounded-[2.5rem] overflow-hidden flex items-end">
          <motion.img
            alt="Volunteers of Maitri Foundation amid lush green trees"
            className="absolute inset-0 w-full h-full object-cover"
            src={heroImg}
            fetchPriority="high"
            initial={{ scale: 1.12 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.8, ease: [0.22, 1, 0.36, 1] }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/60 to-ink/10" />
          <div className="absolute inset-0 bg-gradient-to-r from-ink/70 via-transparent to-transparent" />

          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="relative z-10 w-full px-6 sm:px-10 lg:px-14 pt-12 pb-10 sm:pb-14 lg:pb-16 text-on-ink"
          >
            <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-2.5 mb-6 sm:mb-8">
              <span className="inline-flex items-center gap-2 bg-on-ink/10 border border-on-ink/20 backdrop-blur-md px-4 py-2 rounded-full text-xs sm:text-sm font-semibold">
                <span className="w-1.5 h-1.5 rounded-full bg-secondary-container" />
                "एक हात मैत्रीचा" • One Hand of Friendship
              </span>
              <span className="inline-flex bg-on-ink/10 border border-on-ink/20 backdrop-blur-md px-4 py-2 rounded-full text-xs sm:text-sm font-semibold">
                Established 2019
              </span>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="max-w-5xl font-display font-medium leading-[0.98] tracking-[-0.03em]"
            >
              <span className="block text-lg sm:text-2xl font-sans font-semibold tracking-normal text-on-ink/80 mb-4">
                Maitri Welfare Foundation:
              </span>
              <span className="block text-[2.75rem] min-[400px]:text-5xl sm:text-7xl lg:text-8xl">
                Empowering Lives,{' '}
                <span className="italic text-secondary-container">Protecting Nature</span>
              </span>
            </motion.h1>

            <div className="mt-8 sm:mt-10 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
              <motion.p variants={itemVariants} className="max-w-xl text-base sm:text-lg text-on-ink/80 leading-relaxed">
                We are dedicated to <strong className="text-on-ink">empowering lives</strong> and <strong className="text-on-ink">protecting nature</strong> through sustainable social impact, environmental conservation, and community welfare initiatives across India.
              </motion.p>
              <motion.div variants={itemVariants} className="flex flex-wrap gap-3">
                <Link
                  to="/support"
                  className="group inline-flex items-center gap-2 bg-secondary-container text-on-secondary-container pl-7 pr-6 py-4 rounded-full font-bold text-base hover:brightness-105 active:scale-95 transition-all shadow-[0_10px_30px_-10px_rgba(244,182,63,0.7)]"
                >
                  Donate Now
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </Link>
                <Link
                  to="/volunteer"
                  className="inline-flex items-center gap-2 bg-on-ink/10 border border-on-ink/30 backdrop-blur-md text-on-ink px-7 py-4 rounded-full font-bold text-base hover:bg-on-ink hover:text-ink active:scale-95 transition-all"
                >
                  Join Us
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="px-3 sm:px-5 relative z-10 -mt-px">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="max-w-6xl mx-auto mt-6 sm:mt-0 sm:-translate-y-1/2 grid grid-cols-1 sm:grid-cols-3 bg-surface-container-lowest border border-outline-variant rounded-[1.75rem] shadow-card-hover overflow-hidden divide-y sm:divide-y-0 sm:divide-x divide-outline-variant"
        >
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className="group px-8 py-8 sm:py-10 text-center sm:text-left cursor-default"
            >
              <span className="block font-display text-5xl sm:text-6xl font-medium text-primary tracking-tight">
                <AnimatedCounter value={stat.value} />
              </span>
              <p className="mt-2 text-sm font-semibold uppercase tracking-[0.14em] text-on-surface-variant">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Mission — bento */}
      <section className="py-16 sm:py-20 lg:pt-4 lg:pb-28">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="lg:col-span-5 flex flex-col justify-between rounded-[2rem] bg-primary-container text-on-primary-container p-8 sm:p-10"
            >
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.2em] opacity-70 mb-5">Who we are</p>
                <h2 className="text-4xl sm:text-5xl font-medium leading-[1.05]">Our Mission &amp; Vision</h2>
                <p className="mt-6 leading-relaxed opacity-90">
                  We established our Maitri Foundation back in 2019. We started this foundation to assist the needy ones as well as help our mother nature in every possible way. Together, we strive to make a meaningful difference.
                </p>
              </div>
              <Link
                to="/about"
                className="group mt-10 inline-flex items-center gap-2 self-start font-bold border-b-2 border-current pb-1"
              >
                About Us <ArrowUpRight className="w-4 h-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="lg:col-span-7 relative rounded-[2rem] overflow-hidden min-h-[320px] sm:min-h-[420px] group"
            >
              <img
                alt="Foundation Activities in Slum Areas"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-105"
                src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=1200&q=80"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/10 to-transparent" />
              <p className="absolute left-6 right-6 bottom-6 sm:left-10 sm:bottom-10 sm:right-auto max-w-sm font-display text-2xl sm:text-3xl italic leading-snug text-on-ink">
                "Making a meaningful difference, one step at a time."
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="lg:col-span-4 relative rounded-[2rem] overflow-hidden min-h-[260px] group"
            >
              <img
                alt="Maitri Foundation volunteers together"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-105"
                src={about1}
                loading="lazy"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="lg:col-span-8 rounded-[2rem] border border-outline-variant bg-surface-container-lowest p-8 sm:p-10"
            >
              <p className="text-on-surface-variant leading-relaxed text-lg max-w-2xl">
                Our approach balances the urgent, high-impact nature of environmental and social welfare with a warm, human-centric focus. We believe that by protecting our environment, we create a better world for everyone to thrive in.
              </p>
              <ul className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-3">
                {pillars.map((item, idx) => (
                  <li
                    key={idx}
                    className="flex sm:flex-col items-start gap-3 rounded-2xl bg-surface-container-low p-5 transition-colors hover:bg-surface-container"
                  >
                    <CheckCircle className="text-secondary w-6 h-6 shrink-0" />
                    <span className="font-semibold leading-snug">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Marquee */}
      <section aria-hidden="true" className="border-y border-outline-variant bg-surface-container-low overflow-hidden py-5">
        <div className="flex w-max animate-marquee">
          {[0, 1].map((dup) => (
            <div key={dup} className="flex items-center shrink-0">
              {marqueeItems.map((item, i) => (
                <span key={i} className="flex items-center gap-8 px-8 font-display text-xl sm:text-2xl italic text-on-surface-variant whitespace-nowrap">
                  {i % 3 === 0 ? <Leaf className="w-5 h-5 text-primary not-italic" /> : i % 3 === 1 ? <Heart className="w-5 h-5 text-accent" /> : <Users className="w-5 h-5 text-secondary" />}
                  {item}
                </span>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* Latest Highlights */}
      <section className="py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <motion.div
            className="flex flex-col sm:flex-row sm:justify-between sm:items-end gap-6 mb-12"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-secondary mb-4">Events</p>
              <h2 className="text-4xl sm:text-5xl font-medium text-on-surface">Latest Highlights</h2>
            </div>
            <Link
              to="/events"
              className="group inline-flex items-center gap-2 self-start sm:self-auto px-5 py-3 rounded-full border border-outline-variant font-semibold hover:bg-on-surface hover:text-surface hover:border-transparent transition-all"
            >
              View All <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {highlights.map((item, idx) => (
              <motion.article
                key={idx}
                className="group flex flex-col rounded-[1.75rem] bg-surface-container-lowest border border-outline-variant overflow-hidden transition-shadow duration-300 hover:shadow-card-hover"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
              >
                <div className="relative aspect-[4/3] overflow-hidden m-2 rounded-[1.35rem]">
                  <img
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    src={item.img}
                    loading="lazy"
                  />
                  <span className="absolute top-3 left-3 bg-surface/90 backdrop-blur text-on-surface text-[11px] font-bold px-3 py-1.5 rounded-full uppercase tracking-wider">
                    {item.category}
                  </span>
                </div>
                <div className="px-6 pt-4 pb-6 flex flex-col grow">
                  <h3 className="text-2xl font-medium text-on-surface leading-tight">{item.title}</h3>
                  <p className="text-on-surface-variant text-sm mt-3 mb-6 line-clamp-3 leading-relaxed">{item.desc}</p>
                  <div className="flex items-center gap-1.5 text-on-surface-variant text-xs font-semibold uppercase tracking-wider mt-auto">
                    <MapPin className="w-4 h-4 text-accent shrink-0" />
                    <span className="truncate">{item.location}</span>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 sm:py-28 bg-surface-container-low">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-4 lg:sticky lg:top-28 self-start"
          >
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-secondary mb-4">Got Questions?</p>
            <h2 className="text-4xl sm:text-5xl font-medium text-on-surface leading-[1.05]">Frequently Asked Questions</h2>
            <Link
              to="/contact"
              className="group mt-8 inline-flex items-center gap-2 font-bold text-primary border-b-2 border-current pb-1"
            >
              Contact Us <ArrowUpRight className="w-4 h-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>
          </motion.div>

          <div className="lg:col-span-8 space-y-3">
            {faqs.map((faq, idx) => (
              <motion.details
                key={idx}
                open={idx === 0}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.06 }}
                className="group rounded-3xl bg-surface-container-lowest border border-outline-variant open:shadow-card transition-shadow"
              >
                <summary className="flex items-start justify-between gap-6 cursor-pointer list-none p-6 sm:p-7 [&::-webkit-details-marker]:hidden">
                  <h3 className="font-sans text-base sm:text-lg font-bold text-on-surface leading-snug tracking-normal">{faq.q}</h3>
                  <span className="w-9 h-9 rounded-full bg-surface-container flex items-center justify-center shrink-0 transition-all group-open:rotate-45 group-open:bg-primary group-open:text-on-primary">
                    <Plus className="w-4 h-4" />
                  </span>
                </summary>
                <p className="px-6 sm:px-7 pb-7 -mt-1 text-on-surface-variant leading-relaxed max-w-2xl">{faq.a}</p>
              </motion.details>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="px-3 sm:px-5 py-16 sm:py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="grain relative max-w-[1400px] mx-auto rounded-[2rem] sm:rounded-[2.5rem] overflow-hidden bg-ink text-on-ink px-6 py-16 sm:px-12 sm:py-24 text-center"
        >
          <div className="absolute -top-24 -right-24 w-72 h-72 rounded-full bg-secondary-container/25 blur-3xl" />
          <div className="absolute -bottom-24 -left-24 w-72 h-72 rounded-full bg-accent/20 blur-3xl" />
          <div className="relative">
            <h2 className="text-5xl sm:text-7xl font-medium tracking-[-0.03em]">Stay Connected</h2>
            <p className="mt-6 opacity-80 max-w-2xl mx-auto text-lg leading-relaxed">
              Follow our journey and become part of the change.
              We are always looking for passionate volunteers to help us grow our impact.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                to="/support"
                className="inline-flex items-center justify-center gap-2 bg-secondary-container text-on-secondary-container px-8 py-4 rounded-full font-bold text-lg hover:brightness-105 active:scale-95 transition-all"
              >
                <Heart className="w-5 h-5 fill-current" /> Support Our Mission
              </Link>
              <Link
                to="/team"
                className="inline-flex items-center justify-center gap-2 border border-current/30 px-8 py-4 rounded-full font-bold text-lg hover:bg-white/10 active:scale-95 transition-all"
              >
                Meet The Team
              </Link>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
