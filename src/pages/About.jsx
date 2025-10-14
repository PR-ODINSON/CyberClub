import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { FiShield, FiTarget, FiUsers, FiCode, FiLock, FiZap, FiArrowRight } from 'react-icons/fi'

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut'
      }
    }
  }

  const activities = [
    {
      icon: FiCode,
      title: "Workshops & Training",
      description: "Real-world sessions on network security, penetration testing, digital forensics, cryptography, and malware analysis."
    },
    {
      icon: FiZap,
      title: "Research & Development",
      description: "Exploring emerging domains like AI-driven security, IoT protection, blockchain for cybersecurity, and threat intelligence."
    },
    {
      icon: FiTarget,
      title: "Capture The Flag (CTF) Events",
      description: "Hosting and participating in national-level competitions to test and showcase our skills."
    },
    {
      icon: FiUsers,
      title: "Collaborations",
      description: "Working with IITRAM's internal departments, startups, and external security labs to contribute to impactful projects."
    },
    {
      icon: FiShield,
      title: "Awareness Drives",
      description: "Conducting campaigns on safe internet practices, cyber hygiene, and digital rights."
    }
  ]

  const infoCards = [
    { label: "Founded", value: "2025" },
    { label: "Parent Organization", value: "Cyber Club, IITRAM" },
    { label: "Supported By", value: "CAWACH Kendra, Government of Gujarat" },
    { label: "Location", value: "IITRAM, Ahmedabad, India" }
  ]

  return (
    <div className="min-h-screen pt-24">
      {/* Hero Section */}
      <motion.section
        className="container-width py-8 px-4"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={itemVariants} className="text-center mb-10">
          <h1 className="text-5xl lg:text-7xl font-heading font-black mb-6">
            <span className="gradient-text">Who We Are</span>
          </h1>
          <div className="max-w-4xl mx-auto">
            <p className="text-xl lg:text-2xl text-muted-light dark:text-muted-dark leading-relaxed mb-8">
              <strong className="text-primary">CyberClub IITRAM</strong> is the official Cybersecurity and Ethical Hacking Club of IITRAM, Ahmedabad, 
              dedicated to cultivating a generation of technically sharp, security-conscious innovators.
            </p>
            <p className="text-lg text-muted-light dark:text-muted-dark leading-relaxed">
              We operate at the intersection of research, real-world defense, and ethical exploration, empowering students to understand, 
              analyze, and strengthen the digital infrastructure that drives our modern world.
            </p>
          </div>
        </motion.div>

        {/* Philosophy */}
        <motion.div variants={itemVariants} className="text-center mb-8">
          <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-8 lg:p-12 border border-primary/20">
            <p className="text-xl lg:text-2xl text-dark dark:text-light leading-relaxed mb-6">
              We believe that cybersecurity is not just about preventing attacks — it's about understanding systems, 
              anticipating threats, and engineering resilience.
            </p>
            <p className="text-lg text-primary font-semibold">
              At CyberClub IITRAM, every member learns to <span className="text-accent">think like a hacker</span>, 
              <span className="text-primary"> act like a defender</span>, and <span className="text-accent">build like an engineer</span>.
            </p>
          </div>
        </motion.div>
      </motion.section>


      {/* Vision & Mission */}
      <motion.section 
        className="py-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <div className="container-width">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Vision */}
            <motion.div variants={itemVariants} className="space-y-4">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center">
                  <FiTarget className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-3xl lg:text-4xl font-heading font-bold gradient-text">Our Vision</h3>
              </div>
              <p className="text-lg text-muted-light dark:text-muted-dark leading-relaxed">
                To establish IITRAM as a national hub for cybersecurity excellence, where knowledge meets practice 
                and curiosity fuels protection.
              </p>
              <p className="text-lg text-muted-light dark:text-muted-dark leading-relaxed">
                We aim to create a self-sustaining ecosystem where students not only learn but also lead in 
                cybersecurity research, development, and defense.
              </p>
            </motion.div>

            {/* Mission */}
            <motion.div variants={itemVariants} className="space-y-4">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-12 h-12 bg-accent/20 rounded-xl flex items-center justify-center">
                  <FiShield className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-3xl lg:text-4xl font-heading font-bold gradient-text">Our Mission</h3>
              </div>
              <ul className="space-y-4 text-lg text-muted-light dark:text-muted-dark">
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></div>
                  <span>To educate and empower students with hands-on cybersecurity and ethical hacking skills.</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-accent rounded-full mt-3 flex-shrink-0"></div>
                  <span>To build awareness of digital safety and responsible cyber behavior within and beyond IITRAM.</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></div>
                  <span>To collaborate with academia, industry, and government organizations to explore new security technologies.</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-accent rounded-full mt-3 flex-shrink-0"></div>
                  <span>To organize workshops, CTF events, and hackathons that encourage practical learning and innovation.</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></div>
                  <span>To develop in-house tools, research projects, and publications that contribute to the cybersecurity community.</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* What We Do */}
      <motion.section 
        className="bg-gradient-to-b from-primary/5 to-transparent py-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <div className="container-width">
          <motion.div variants={itemVariants} className="text-center mb-8">
            <h2 className="text-4xl lg:text-5xl font-heading font-bold mb-6">
              <span className="gradient-text">What We Do</span>
            </h2>
            <p className="text-xl text-muted-light dark:text-muted-dark max-w-3xl mx-auto">
              From hands-on workshops to cutting-edge research, we're building the next generation of cybersecurity professionals.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {activities.map((activity, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-dark/50 dark:bg-light/5 backdrop-blur-sm rounded-2xl p-6 border border-primary/20 hover:border-primary/40 transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary/30 transition-colors">
                  <activity.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-heading font-bold text-dark dark:text-light mb-3">
                  {activity.title}
                </h3>
                <p className="text-muted-light dark:text-muted-dark leading-relaxed">
                  {activity.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Our Culture */}
      <motion.section 
        className="py-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <div className="container-width">
          <motion.div variants={itemVariants} className="text-center mb-8">
            <h2 className="text-4xl lg:text-5xl font-heading font-bold mb-6">
              <span className="gradient-text">Our Culture</span>
            </h2>
            <div className="max-w-4xl mx-auto space-y-6">
              <p className="text-xl lg:text-2xl text-dark dark:text-light leading-relaxed">
                We're not just a club — we're a <span className="text-primary font-semibold">protocol</span>, 
                a <span className="text-accent font-semibold">mindset</span>.
              </p>
              <p className="text-lg text-muted-light dark:text-muted-dark leading-relaxed">
                A place where code meets curiosity, and where every member learns the art of controlled chaos — 
                <span className="text-primary font-semibold"> hacking with ethics</span>, 
                <span className="text-accent font-semibold"> defending with purpose</span>.
              </p>
              <p className="text-xl text-primary font-bold">
                At CyberClub IITRAM, you don't just learn cybersecurity — you live it.
              </p>
            </div>
          </motion.div>
        </div>
      </motion.section>


      {/* Info Cards */}
      <motion.section 
        className="py-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <div className="container-width">
          <motion.div variants={itemVariants} className="text-center mb-8">
            <h3 className="text-2xl lg:text-3xl font-heading font-bold gradient-text mb-4">
              Organization Details
            </h3>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {infoCards.map((card, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-dark/30 dark:bg-light/5 backdrop-blur-sm rounded-xl p-6 text-center border border-primary/20"
              >
                <h4 className="text-primary font-semibold mb-2">{card.label}</h4>
                <p className="text-dark dark:text-light font-medium">{card.value}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
    </div>
  )
}

export default About
