import { useState } from 'react'
import { motion } from 'framer-motion'
import { FiCalendar, FiMapPin, FiUsers, FiClock, FiShield, FiZap, FiTarget, FiCode, FiArrowLeft, FiAward } from 'react-icons/fi'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import eventsData from '../data/events.json'

const CyberWise2 = () => {
  const [event] = useState(eventsData.find(e => e.id === 3) || eventsData[0])

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

  const agendaIcons = {
    'Cybersecurity Practices': FiShield,
    'Threat Analysis & Defense': FiTarget,
    'Network & Information Security': FiCode,
    'Interactive Expert Sessions': FiUsers,
    'Expert Talks': FiUsers,
    'Hands-on Labs': FiCode,
    'Cybercrime Awareness': FiShield,
    'Preventive Techniques': FiTarget
  }

  return (
    <>
      <Helmet>
        <title>Cyberwise 2.0 2026 – IITRAM Cyber Club</title>
        <meta name="description" content="Cyberwise 2.0 2026 – A 1-day workshop on cybersecurity practices at IITRAM, Ahmedabad sponsored by CAWACH Kendra, Government of Gujarat." />
        <meta property="og:title" content="Cyberwise 2.0 2026 – Cybersecurity Practices Workshop" />
        <meta property="og:description" content="Join our 1-day workshop on cybersecurity practices featuring expert speakers from CBI, IITRAM, and Sardar Patel University." />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

      <div className="min-h-screen pt-24">
        {/* Back Button */}
        <motion.div
          className="container-width mb-8"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link
            to="/events"
            className="inline-flex items-center space-x-2 text-primary hover:text-accent transition-colors duration-300"
          >
            <FiArrowLeft className="w-4 h-4" />
            <span>Back to Events</span>
          </Link>
        </motion.div>

        {/* Hero Section */}
        <motion.section
          className="relative overflow-hidden"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Animated Background */}
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-cyber-grid bg-grid opacity-[0.03]" />
            <motion.div
              className="absolute inset-0 bg-gradient-conic from-primary/10 via-accent/10 to-primary/10"
              animate={{ rotate: 360 }}
              transition={{
                duration: 30,
                repeat: Infinity,
                ease: 'linear',
              }}
            />
            <div className="absolute inset-0">
              <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
              <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent" />
              <div className="absolute top-0 left-0 w-px h-full bg-gradient-to-b from-transparent via-primary/50 to-transparent" />
              <div className="absolute top-0 right-0 w-px h-full bg-gradient-to-b from-transparent via-accent/50 to-transparent" />
            </div>
          </div>

          <div className="container-width section-padding relative z-10">
            <motion.div variants={itemVariants} className="text-center mb-16">
              {/* Event Logo/Banner */}
              <motion.div
                className="inline-block mb-8"
                whileHover={{ scale: 1.05 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              >
                <div className="bg-gradient-to-r from-cyan-400 to-purple-600 p-1 rounded-2xl">
                  <div className="bg-dark rounded-2xl px-8 py-4">
                    <h1 className="text-4xl lg:text-6xl font-heading font-black mb-2">
                      <span className="bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
                        CYBERWISE 2.0
                      </span>
                    </h1>
                    <p className="text-lg text-muted-light dark:text-muted-dark">
                      1-Day Workshop on Cybersecurity Practices
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.h2 
                variants={itemVariants}
                className="text-2xl lg:text-3xl font-heading font-bold text-light mb-6"
              >
                Practical Cybersecurity Defense & Modern Practices
              </motion.h2>

              <motion.p 
                variants={itemVariants}
                className="text-lg lg:text-xl text-muted-light dark:text-muted-dark max-w-4xl mx-auto leading-relaxed"
              >
                {event?.description}
              </motion.p>
              
              {/* Registration Open Badge */}
              <motion.div variants={itemVariants} className="mt-8">
                <a
                  href="https://forms.cloud.microsoft/r/Tm6n0ZCCgZ"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 bg-green-500/20 border-2 border-green-500/40 rounded-full px-6 py-3 hover:bg-green-500/30 hover:border-green-500/60 transition-all duration-300 hover:scale-105"
                >
                  <div className="w-2.5 h-2.5 bg-green-400 rounded-full animate-pulse" />
                  <span className="text-green-400 font-semibold text-lg">Registration Open — Click to Register</span>
                </a>
              </motion.div>
            </motion.div>
          </div>
        </motion.section>

        {/* Event Details */}
        <motion.section 
          className="py-20 bg-gradient-to-b from-primary/5 to-transparent"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <div className="container-width">
            <motion.div variants={itemVariants} className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-heading font-bold mb-6">
                <span className="gradient-text">Event Details</span>
              </h2>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-12">
              {/* Left Column - Key Info */}
              <motion.div variants={itemVariants} className="space-y-8">
                <div className="bg-dark/50 dark:bg-light/5 backdrop-blur-sm rounded-2xl p-8 border border-primary/20">
                  <h3 className="text-2xl font-heading font-bold text-light mb-6">Key Information</h3>
                  
                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center flex-shrink-0">
                        <FiCalendar className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-light mb-1">Date & Duration</h4>
                        <p className="text-muted-light dark:text-muted-dark">1-Day Workshop • 2026</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-accent/20 rounded-xl flex items-center justify-center flex-shrink-0">
                        <FiMapPin className="w-6 h-6 text-accent" />
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-light mb-1">Venue</h4>
                        <p className="text-muted-light dark:text-muted-dark">{event?.location}</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center flex-shrink-0">
                        <FiClock className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-light mb-1">Time</h4>
                        <p className="text-muted-light dark:text-muted-dark">09:00 AM - 05:00 PM</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-accent/20 rounded-xl flex items-center justify-center flex-shrink-0">
                        <FiUsers className="w-6 h-6 text-accent" />
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-light mb-1">Capacity</h4>
                        <p className="text-muted-light dark:text-muted-dark">{event?.maxAttendees} Participants</p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Right Column - Organizers */}
              <motion.div variants={itemVariants} className="space-y-8">
                <div className="bg-dark/50 dark:bg-light/5 backdrop-blur-sm rounded-2xl p-8 border border-primary/20">
                  <h3 className="text-2xl font-heading font-bold text-light mb-6">Organizers & Sponsors</h3>
                  
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-lg font-semibold text-primary mb-2">Organized by</h4>
                      <p className="text-muted-light dark:text-muted-dark">{event?.organizer}</p>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-accent mb-2">Sponsored by</h4>
                      <p className="text-muted-light dark:text-muted-dark">{event?.sponsor}</p>
                    </div>

                    <div className="pt-4 border-t border-primary/20">
                      <h4 className="text-lg font-semibold text-light mb-3">What You'll Need</h4>
                      <ul className="space-y-2">
                        {event?.materials?.map((material, index) => (
                          <li key={index} className="flex items-center space-x-2">
                            <div className="w-2 h-2 bg-primary rounded-full"></div>
                            <span className="text-muted-light dark:text-muted-dark">{material}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Agenda Highlights */}
        <motion.section 
          className="py-20"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <div className="container-width">
            <motion.div variants={itemVariants} className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-heading font-bold mb-6">
                <span className="gradient-text">Agenda Highlights</span>
              </h2>
              <p className="text-xl text-muted-light dark:text-muted-dark max-w-3xl mx-auto">
                Practical insights and defense techniques covered throughout the day
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {event?.agenda?.map((item, index) => {
                const IconComponent = agendaIcons[item] || FiZap
                return (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="bg-dark/50 dark:bg-light/5 backdrop-blur-sm rounded-2xl p-6 border border-primary/20 hover:border-primary/40 transition-all duration-300 group text-center"
                  >
                    <div className="w-16 h-16 bg-primary/20 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/30 transition-colors">
                      <IconComponent className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-heading font-bold text-light mb-2">
                      {item}
                    </h3>
                    <p className="text-muted-light dark:text-muted-dark text-sm">
                      {item === 'Cybersecurity Practices' && 'Essential cybersecurity practices and defensive strategies for modern threats'}
                      {item === 'Threat Analysis & Defense' && 'Deep dive into emerging threat vectors and preventive defense techniques'}
                      {item === 'Network & Information Security' && 'Safeguarding communication systems and information assets'}
                      {item === 'Interactive Expert Sessions' && 'Direct interactions, Q&A, and real-world case discussions with speakers'}
                    </p>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </motion.section>

        {/* Registration & Participation Section */}
        <motion.section 
          className="py-20 bg-gradient-to-b from-primary/5 to-transparent"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <div className="container-width text-center">
            <motion.div variants={itemVariants} className="space-y-8">
              <h2 className="text-4xl lg:text-5xl font-heading font-bold mb-6">
                <span className="gradient-text">Registration & Participation</span>
              </h2>
              <p className="text-xl text-muted-light dark:text-muted-dark max-w-3xl mx-auto">
                Join our 1-day workshop on cybersecurity practices and learn directly from renowned domain experts
              </p>
              
              <motion.a
                href="https://forms.cloud.microsoft/r/Tm6n0ZCCgZ"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-3 bg-gradient-to-r from-cyan-400 to-purple-600 hover:from-cyan-300 hover:to-purple-500 text-dark font-bold text-lg px-10 py-4 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-primary/25 hover:scale-105"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FiCalendar className="w-6 h-6" />
                <span>Register for Cyberwise 2.0</span>
              </motion.a>
              
              <p className="text-sm text-muted-light dark:text-muted-dark">
                Official Registration Form • Cyberwise 2.0 2026
              </p>
            </motion.div>
          </div>
        </motion.section>

        {/* Invited Speakers Section */}
        <motion.section 
          className="py-20 bg-gradient-to-b from-accent/5 to-transparent"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <div className="container-width">
            <motion.div variants={itemVariants} className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-heading font-bold mb-6">
                <span className="gradient-text">Invited Speakers</span>
              </h2>
              <p className="text-xl text-muted-light dark:text-muted-dark max-w-3xl mx-auto">
                Learn from distinguished experts and leaders in cybersecurity
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {/* Speaker 1: Shahnawaaz Abdullah */}
              <motion.div
                variants={itemVariants}
                className="group perspective-1000"
              >
                <div className="relative w-full h-80 transform-style-preserve-3d transition-transform duration-700 group-hover:rotate-y-180">
                  {/* Front of card */}
                  <div className="absolute inset-0 backface-hidden rounded-2xl overflow-hidden border border-primary/20">
                    <div className="relative h-full">
                      <img 
                        src="/Shahnawaaz Abdullah.jpg" 
                        alt="Mr. Shahnawaaz Abdullah"
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-dark/90 via-dark/20 to-transparent" />
                      <div className="absolute bottom-0 left-0 right-0 p-6">
                        <h3 className="text-xl font-heading font-bold text-white mb-1">
                          Mr. Shahnawaaz Abdullah
                        </h3>
                        <p className="text-primary text-sm font-semibold">
                          Central Bureau of Investigation (CBI), Delhi
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Back of card */}
                  <div className="absolute inset-0 backface-hidden rotate-y-180 bg-dark/95 backdrop-blur-sm rounded-2xl border border-primary/20 p-6 flex flex-col justify-center">
                    <div className="text-center">
                      <h3 className="text-lg font-heading font-bold text-white mb-4">
                        Mr. Shahnawaaz Abdullah
                      </h3>
                      <div className="space-y-3 text-sm text-muted-light">
                        <p><strong className="text-primary">Position:</strong> Officer, CBI Delhi</p>
                        <p><strong className="text-primary">Expertise:</strong> Cybercrime Investigation, Digital Forensics</p>
                        <p><strong className="text-primary">Focus:</strong> Complex cybercrime cases, financial fraud investigation</p>
                        <p className="text-xs leading-relaxed">
                          Distinguished guest investigator re-invited to share in-depth knowledge on active cybercrime threats and digital investigation practices.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Speaker 2: Dr. Prakash A. Dabhi */}
              <motion.div
                variants={itemVariants}
                className="group perspective-1000"
              >
                <div className="relative w-full h-80 transform-style-preserve-3d transition-transform duration-700 group-hover:rotate-y-180">
                  {/* Front of card */}
                  <div className="absolute inset-0 backface-hidden rounded-2xl overflow-hidden border border-primary/20">
                    <div className="relative h-full">
                      <img 
                        src="/Prakash_Dabhi.jpg" 
                        alt="Dr. Prakash A. Dabhi"
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-dark/90 via-dark/20 to-transparent" />
                      <div className="absolute bottom-0 left-0 right-0 p-6">
                        <h3 className="text-xl font-heading font-bold text-white mb-1">
                          Dr. Prakash A. Dabhi
                        </h3>
                        <p className="text-primary text-sm font-semibold">
                          IITRAM
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Back of card */}
                  <div className="absolute inset-0 backface-hidden rotate-y-180 bg-dark/95 backdrop-blur-sm rounded-2xl border border-primary/20 p-6 flex flex-col justify-center">
                    <div className="text-center">
                      <h3 className="text-lg font-heading font-bold text-white mb-4">
                        Dr. Prakash A. Dabhi
                      </h3>
                      <div className="space-y-3 text-sm text-muted-light">
                        <p><strong className="text-primary">Institution:</strong> IITRAM, Ahmedabad</p>
                        <p><strong className="text-primary">Expertise:</strong> Computer Science & Engineering, Cybersecurity</p>
                        <p><strong className="text-primary">Focus:</strong> Security Architecture, Information Protection</p>
                        <p className="text-xs leading-relaxed">
                          Distinguished academician at IITRAM leading research and practical education in cybersecurity practices and computer systems.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Speaker 3: Dr. Jay Mehta */}
              <motion.div
                variants={itemVariants}
                className="group perspective-1000"
              >
                <div className="relative w-full h-80 transform-style-preserve-3d transition-transform duration-700 group-hover:rotate-y-180">
                  {/* Front of card */}
                  <div className="absolute inset-0 backface-hidden rounded-2xl overflow-hidden border border-primary/20">
                    <div className="relative h-full">
                      <img 
                        src="/J-G-Mehta-147x189.jpeg" 
                        alt="Dr. Jay Mehta"
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-dark/90 via-dark/20 to-transparent" />
                      <div className="absolute bottom-0 left-0 right-0 p-6">
                        <h3 className="text-xl font-heading font-bold text-white mb-1">
                          Dr. Jay Mehta
                        </h3>
                        <p className="text-primary text-sm font-semibold">
                          Sardar Patel University
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Back of card */}
                  <div className="absolute inset-0 backface-hidden rotate-y-180 bg-dark/95 backdrop-blur-sm rounded-2xl border border-primary/20 p-6 flex flex-col justify-center">
                    <div className="text-center">
                      <h3 className="text-lg font-heading font-bold text-white mb-4">
                        Dr. Jay Mehta
                      </h3>
                      <div className="space-y-3 text-sm text-muted-light">
                        <p><strong className="text-primary">Institution:</strong> Sardar Patel University</p>
                        <p><strong className="text-primary">Expertise:</strong> Computer Science, Cybersecurity Research</p>
                        <p><strong className="text-primary">Focus:</strong> Cyber Defense Strategies, Secure Computing</p>
                        <p className="text-xs leading-relaxed">
                          Renowned educator and cybersecurity researcher from Sardar Patel University guiding students in effective cyber hygiene and defense techniques.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* CTA Section */}
        <motion.section 
          className="py-20 bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <div className="container-width text-center">
            <motion.div variants={itemVariants} className="space-y-6">
              <h2 className="text-3xl lg:text-4xl font-heading font-bold text-light">
                Cyberwise 2.0 2026 — Elevating Cybersecurity Awareness
              </h2>
              <p className="text-xl text-muted-light dark:text-muted-dark max-w-3xl mx-auto">
                Organized by Cyber Club IITRAM and supported by CAWACH Kendra, Government of Gujarat.
              </p>
              <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href="https://forms.cloud.microsoft/r/Tm6n0ZCCgZ"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-400 to-purple-600 hover:from-cyan-300 hover:to-purple-500 text-dark font-bold text-lg px-8 py-3 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-primary/25"
                >
                  <span>Register Now</span>
                  <FiArrowLeft className="w-5 h-5 rotate-180" />
                </a>
                <Link
                  to="/events"
                  className="inline-flex items-center space-x-2 bg-dark/10 dark:bg-light/5 text-primary font-bold text-lg px-8 py-3 rounded-xl hover:bg-dark/20 dark:hover:bg-light/10 transition-all duration-300 border-2 border-primary/30"
                >
                  <span>View All Events</span>
                  <FiArrowLeft className="w-5 h-5 rotate-180" />
                </Link>
              </div>
            </motion.div>
          </div>
        </motion.section>
      </div>
    </>
  )
}

export default CyberWise2

