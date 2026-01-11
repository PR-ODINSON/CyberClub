import { useState } from 'react'
import { motion } from 'framer-motion'
import { FiCalendar, FiMapPin, FiUsers, FiClock, FiShield, FiZap, FiTarget, FiCode, FiArrowLeft, FiGlobe, FiLock, FiAlertCircle, FiLinkedin } from 'react-icons/fi'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import eventsData from '../data/events.json'

const NetWise = () => {
  const [event] = useState(eventsData.find(e => e.id === 2)) // Get the NETWISE event

  // Speakers data
  const speakers = [
    {
      name: 'Dr. Deepa Dubey',
      affiliation: 'National Forensic Sciences University (NFSU)',
      photo: '/Deepa.jpg',
      linkedin: '#'
    },
    {
      name: 'Dr. Nilay Mistry',
      affiliation: 'National Forensic Sciences University (NFSU)',
      photo: '/Nilay Mistry.jpg',
      linkedin: '#'
    },
    {
      name: 'Dr. Chintan Patel',
      affiliation: 'Kaushalya - The Skill University',
      photo: '/chintan.jpg',
      linkedin: '#'
    },
    {
      name: 'Dr. Soumya Maity',
      affiliation: 'Dell',
      photo: '/soumya_maity.jpg',
      linkedin: '#'
    },
    {
      name: 'Dr. Abdul Wahid',
      affiliation: 'IIIT Dharwad',
      photo: '/Abdul_wahid.jpg',
      linkedin: '#'
    },
    {
      name: 'Dr. Somindu Chaya Ramanna',
      affiliation: 'IIT Kharagpur',
      photo: '/Dr. Somindu.png',
      linkedin: '#'
    }
  ]

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
    'Infrastructure Resilience': FiShield,
    'Cyber Risk Management': FiTarget,
    'Safety Practices': FiLock,
    'Incident Response': FiAlertCircle
  }

  return (
    <>
      <Helmet>
        <title>INFRA CYBERWISE 2026 – IITRAM Cyber Club</title>
        <meta name="description" content="INFRA CYBERWISE 2026 – A 2-day Infrastructure Cybersecurity Workshop at IITRAM, Ahmedabad. Learn about securing critical infrastructure systems against modern cyber threats." />
        <meta property="og:title" content="INFRA CYBERWISE 2026 – Infrastructure Cybersecurity Workshop" />
        <meta property="og:description" content="Join us for a comprehensive workshop on safeguarding essential infrastructure such as power, transportation, communication, and industrial control systems." />
        <meta property="og:type" content="event" />
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
            {/* Cyber grid pattern */}
            <div className="absolute inset-0 bg-cyber-grid bg-grid opacity-[0.03]" />
            
            {/* Animated gradient overlay */}
            <motion.div
              className="absolute inset-0 bg-gradient-conic from-green-400/10 via-blue-600/10 to-green-400/10"
              animate={{ rotate: 360 }}
              transition={{
                duration: 30,
                repeat: Infinity,
                ease: 'linear',
              }}
            />
            
            {/* Neon edges effect */}
            <div className="absolute inset-0">
              <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-green-400/50 to-transparent" />
              <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-600/50 to-transparent" />
              <div className="absolute top-0 left-0 w-px h-full bg-gradient-to-b from-transparent via-green-400/50 to-transparent" />
              <div className="absolute top-0 right-0 w-px h-full bg-gradient-to-b from-transparent via-blue-600/50 to-transparent" />
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
                <div className="bg-gradient-to-r from-green-400 to-blue-600 p-1 rounded-2xl">
                  <div className="bg-dark rounded-2xl px-4 sm:px-8 py-4">
                    <h1 className="text-3xl sm:text-4xl lg:text-6xl font-heading font-black mb-2">
                      <span className="bg-gradient-to-r from-green-400 to-blue-600 bg-clip-text text-transparent">
                        INFRA CYBERWISE 2026
                      </span>
                    </h1>
                    <p className="text-base sm:text-lg text-muted-light dark:text-muted-dark">
                      Infrastructure Cybersecurity Workshop
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.h2 
                variants={itemVariants}
                className="text-xl sm:text-2xl lg:text-3xl font-heading font-bold text-light mb-6 px-4"
              >
                Securing Critical Infrastructure Systems Against Modern Cyber Threats
              </motion.h2>

              <motion.p 
                variants={itemVariants}
                className="text-base sm:text-lg lg:text-xl text-muted-light dark:text-muted-dark max-w-4xl mx-auto leading-relaxed px-4"
              >
                {event?.description}
              </motion.p>
              
              {/* Registration Open Badge */}
              <motion.div variants={itemVariants} className="mt-8 px-4">
                <a 
                  href="https://forms.cloud.microsoft/r/cd7k3PMp3p" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center space-x-2 bg-green-500/20 border-2 border-green-500/40 rounded-full px-4 sm:px-6 py-3 hover:bg-green-500/30 hover:border-green-500/60 transition-all duration-300 min-h-[48px]"
                >
                  <FiAlertCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <span className="text-green-400 font-semibold text-sm sm:text-base lg:text-lg text-center">
                    <span className="hidden sm:inline">Registration Now Open - Click to Register</span>
                    <span className="sm:hidden">Register Now</span>
                  </span>
                </a>
              </motion.div>
            </motion.div>
          </div>
        </motion.section>

        {/* Event Details */}
        <motion.section 
          className="py-20 bg-gradient-to-b from-green-400/5 to-transparent"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <div className="container-width">
            <motion.div variants={itemVariants} className="text-center mb-16 px-4">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold mb-6">
                <span className="gradient-text">Event Details</span>
              </h2>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-8 sm:gap-12">
              {/* Left Column - Key Info */}
              <motion.div variants={itemVariants} className="space-y-8">
                <div className="bg-dark/50 dark:bg-light/5 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-primary/20">
                  <h3 className="text-xl sm:text-2xl font-heading font-bold text-light mb-6">Key Information</h3>
                  
                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-green-400/20 rounded-xl flex items-center justify-center flex-shrink-0">
                        <FiCalendar className="w-6 h-6 text-green-400" />
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-light mb-1">Dates</h4>
                        <p className="text-muted-light dark:text-muted-dark">30th – 31st January 2026</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-blue-600/20 rounded-xl flex items-center justify-center flex-shrink-0">
                        <FiMapPin className="w-6 h-6 text-blue-600" />
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-light mb-1">Venue</h4>
                        <p className="text-muted-light dark:text-muted-dark">{event?.location}</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-green-400/20 rounded-xl flex items-center justify-center flex-shrink-0">
                        <FiClock className="w-6 h-6 text-green-400" />
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-light mb-1">Time</h4>
                        <p className="text-muted-light dark:text-muted-dark">09:00 AM - 05:00 PM (Both Days)</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-blue-600/20 rounded-xl flex items-center justify-center flex-shrink-0">
                        <FiUsers className="w-6 h-6 text-blue-600" />
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
                <div className="bg-dark/50 dark:bg-light/5 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-primary/20">
                  <h3 className="text-xl sm:text-2xl font-heading font-bold text-light mb-6">Organizers</h3>
                  
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-lg font-semibold text-green-400 mb-2">Organized by</h4>
                      <p className="text-muted-light dark:text-muted-dark">{event?.organizer}</p>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-blue-600 mb-2">Sponsored by</h4>
                      <p className="text-muted-light dark:text-muted-dark">{event?.sponsor}</p>
                    </div>

                    <div className="pt-4 border-t border-primary/20">
                      <h4 className="text-lg font-semibold text-light mb-3">What You'll Need</h4>
                      <ul className="space-y-2">
                        {event?.materials?.map((material, index) => (
                          <li key={index} className="flex items-center space-x-2">
                            <div className="w-2 h-2 bg-green-400 rounded-full"></div>
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
            <motion.div variants={itemVariants} className="text-center mb-16 px-4">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold mb-6">
                <span className="gradient-text">Workshop Focus Areas</span>
              </h2>
              <p className="text-lg sm:text-xl text-muted-light dark:text-muted-dark max-w-3xl mx-auto">
                Explore critical topics in infrastructure cybersecurity through expert-led sessions
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {event?.agenda?.map((item, index) => {
                const IconComponent = agendaIcons[item] || FiZap
                return (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="bg-dark/50 dark:bg-light/5 backdrop-blur-sm rounded-2xl p-6 border border-primary/20 hover:border-green-400/40 transition-all duration-300 group text-center"
                  >
                    <div className="w-16 h-16 bg-green-400/20 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-green-400/30 transition-colors">
                      <IconComponent className="w-8 h-8 text-green-400" />
                    </div>
                    <h3 className="text-xl font-heading font-bold text-light mb-2">
                      {item}
                    </h3>
                    <p className="text-muted-light dark:text-muted-dark text-sm">
                      {item === 'Infrastructure Resilience' && 'Build robust and resilient critical infrastructure systems'}
                      {item === 'Cyber Risk Management' && 'Identify and mitigate infrastructure-specific cyber risks'}
                      {item === 'Safety Practices' && 'Implement best practices for infrastructure security'}
                      {item === 'Incident Response' && 'Respond effectively to infrastructure cyber incidents'}
                    </p>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </motion.section>

        {/* Speakers Section */}
        <motion.section 
          className="py-20 bg-gradient-to-b from-green-400/5 to-transparent"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <div className="container-width">
            <motion.div variants={itemVariants} className="text-center mb-16 px-4">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold mb-6">
                <span className="gradient-text">Expert Speakers</span>
              </h2>
              <p className="text-lg sm:text-xl text-muted-light dark:text-muted-dark max-w-3xl mx-auto">
                Learn from leading experts in infrastructure cybersecurity and critical systems protection
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6 sm:gap-8">
              {speakers.map((speaker, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="group perspective-1000 touch-manipulation"
                >
                  <div className="relative w-full h-80 transform-style-preserve-3d transition-transform duration-700 group-hover:rotate-y-180 group-active:rotate-y-180">
                    {/* Front of card */}
                    <div className="absolute inset-0 backface-hidden rounded-2xl overflow-hidden border border-primary/20 shadow-lg">
                      <div className="relative h-full">
                        <img 
                          src={speaker.photo}
                          alt={speaker.name}
                          className="w-full h-full object-cover"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-dark/90 via-dark/20 to-transparent" />
                        <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6">
                          <h3 className="text-lg sm:text-xl font-heading font-bold text-white mb-1">
                            {speaker.name}
                          </h3>
                          <p className="text-primary text-xs sm:text-sm font-semibold line-clamp-2">
                            {speaker.affiliation}
                          </p>
                        </div>
                      </div>
                    </div>
                    
                    {/* Back of card */}
                    <div className="absolute inset-0 backface-hidden rotate-y-180 bg-dark/95 backdrop-blur-sm rounded-2xl border border-primary/20 p-6 flex flex-col justify-center">
                      <div className="text-center">
                        <h3 className="text-lg font-heading font-bold text-white mb-4">
                          {speaker.name}
                        </h3>
                        <div className="space-y-3 text-sm text-muted-light">
                          <p><strong className="text-primary">Affiliation:</strong> {speaker.affiliation}</p>
                          <p className="text-xs leading-relaxed">
                            Expert in infrastructure cybersecurity and critical systems protection
                          </p>
                        </div>
                        {speaker.linkedin && speaker.linkedin !== '#' && (
                          <a
                            href={speaker.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center space-x-2 mt-4 text-primary hover:text-green-400 transition-colors"
                          >
                            <FiLinkedin className="w-4 h-4" />
                            <span className="text-xs">LinkedIn Profile</span>
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* About the Workshop Section */}
        <motion.section 
          className="py-20 bg-gradient-to-b from-transparent to-green-400/5"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <div className="container-width">
            <motion.div variants={itemVariants} className="space-y-12">
              <div className="text-center px-4">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold mb-6">
                  <span className="gradient-text">About the Workshop</span>
                </h2>
              </div>
              
              <div className="bg-dark/50 dark:bg-light/5 backdrop-blur-sm rounded-2xl p-6 sm:p-8 lg:p-12 border border-primary/20">
                <p className="text-base sm:text-lg text-muted-light dark:text-muted-dark leading-relaxed mb-8">
                  INFRA CYBERWISE: Infrastructure Cybersecurity Workshop aims to bring together students, faculty members, and industry professionals to explore the evolving cybersecurity challenges and protection strategies related to critical infrastructure systems. The workshop focuses on safeguarding essential infrastructure such as power, transportation, communication, and industrial control systems against modern cyber threats.
                </p>
                <p className="text-base sm:text-lg text-muted-light dark:text-muted-dark leading-relaxed">
                  By addressing topics including infrastructure resilience, cyber risk management, safety practices, and incident response, INFRA CYBERWISE highlights the importance of securing nation-critical assets in an increasingly digital world. Through expert lectures, real-world case studies, and interactive sessions, the workshop seeks to enhance awareness, technical understanding, and preparedness to build robust, secure, and resilient infrastructure ecosystems.
                </p>
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* Objective Section */}
        <motion.section 
          className="py-20 bg-gradient-to-r from-green-400/10 via-blue-600/10 to-green-400/10"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <div className="container-width">
            <motion.div variants={itemVariants} className="space-y-12">
              <div className="text-center px-4">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold mb-6">
                  <span className="gradient-text">Objective</span>
                </h2>
              </div>
              
              <div className="bg-dark/50 dark:bg-light/5 backdrop-blur-sm rounded-2xl p-6 sm:p-8 lg:p-12 border border-primary/20">
                <p className="text-base sm:text-lg text-muted-light dark:text-muted-dark leading-relaxed">
                  The primary objective of INFRA CYBERWISE: Infrastructure Cybersecurity Workshop is to empower participants with essential knowledge and practical insights into securing critical infrastructure systems against evolving cyber threats. The workshop focuses on enhancing awareness of infrastructure-specific cyber risks, strengthening technical competence in identifying vulnerabilities, and implementing effective mitigation and resilience strategies. It aims to bridge the gap between theoretical concepts and real-world infrastructure security challenges through expert-led sessions, case studies, and interactive discussions. INFRA CYBERWISE seeks to prepare participants to contribute effectively to the protection, reliability, and resilience of critical infrastructure in a digitally interconnected environment.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-4 pt-4 px-4">
                <a
                  href="https://forms.cloud.microsoft/r/cd7k3PMp3p"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center space-x-2 bg-gradient-to-r from-green-400 to-blue-600 hover:from-green-300 hover:to-blue-500 text-dark font-bold text-base sm:text-lg px-8 sm:px-10 py-4 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-primary/25 min-h-[56px]"
                >
                  <span>Register Now</span>
                  <FiArrowLeft className="w-5 h-5 rotate-180" />
                </a>
                
                <Link
                  to="/events"
                  className="inline-flex items-center justify-center space-x-2 bg-gradient-to-r from-green-400/20 to-blue-600/20 hover:from-green-400/30 hover:to-blue-600/30 text-primary font-bold text-base sm:text-lg px-8 sm:px-10 py-4 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-primary/25 border-2 border-green-400/40 min-h-[56px]"
                >
                  <FiArrowLeft className="w-5 h-5 rotate-180" />
                  <span>View All Events</span>
                </Link>
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* CTA Section */}
        <motion.section 
          className="py-20"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <div className="container-width text-center px-4">
            <motion.div variants={itemVariants} className="space-y-6">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-bold text-light">
                INFRA CYBERWISE 2026 — Securing the backbone of our digital world.
              </h2>
              <p className="text-lg sm:text-xl text-green-400 font-semibold">
                Join IITRAM Cyber Club in protecting critical infrastructure for a secure future.
              </p>
            </motion.div>
          </div>
        </motion.section>
      </div>
    </>
  )
}

export default NetWise
