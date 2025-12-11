import { useState } from 'react'
import { motion } from 'framer-motion'
import { FiCalendar, FiMapPin, FiUsers, FiClock, FiShield, FiZap, FiTarget, FiCode, FiArrowLeft, FiGlobe, FiLock, FiAlertCircle } from 'react-icons/fi'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import eventsData from '../data/events.json'

const NetWise = () => {
  const [event] = useState(eventsData.find(e => e.id === 2)) // Get the NETWISE event

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
    'Smart Internet Habits': FiGlobe,
    'Online Fraud Prevention': FiShield,
    'Digital Ethics': FiTarget,
    'Digital Footprint Management': FiLock
  }

  return (
    <>
      <Helmet>
        <title>NETWISE Seminar – IITRAM Cyber Club</title>
        <meta name="description" content="NETWISE – A 2-day seminar on Smart & Safe Internet Practices at IITRAM, Ahmedabad. Learn about digital safety, online fraud prevention, and digital ethics." />
        <meta property="og:title" content="NETWISE – Smart & Safe Internet Practices" />
        <meta property="og:description" content="Join us for a comprehensive seminar on responsible internet usage, online security, and digital ethics." />
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
                  <div className="bg-dark rounded-2xl px-8 py-4">
                    <h1 className="text-4xl lg:text-6xl font-heading font-black mb-2">
                      <span className="bg-gradient-to-r from-green-400 to-blue-600 bg-clip-text text-transparent">
                        NETWISE
                      </span>
                    </h1>
                    <p className="text-lg text-muted-light dark:text-muted-dark">
                      Smart & Safe Internet Practices
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.h2 
                variants={itemVariants}
                className="text-2xl lg:text-3xl font-heading font-bold text-light mb-6"
              >
                Promoting Responsible and Safe Internet Usage
              </motion.h2>

              <motion.p 
                variants={itemVariants}
                className="text-lg lg:text-xl text-muted-light dark:text-muted-dark max-w-4xl mx-auto leading-relaxed"
              >
                {event?.description}
              </motion.p>
              
              {/* Coming Soon Badge */}
              <motion.div variants={itemVariants} className="mt-8">
                <div className="inline-flex items-center space-x-2 bg-yellow-500/20 border-2 border-yellow-500/40 rounded-full px-6 py-3">
                  <FiAlertCircle className="w-5 h-5 text-yellow-400" />
                  <span className="text-yellow-400 font-semibold text-lg">Registration Opening Soon</span>
                </div>
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
                      <div className="w-12 h-12 bg-green-400/20 rounded-xl flex items-center justify-center flex-shrink-0">
                        <FiCalendar className="w-6 h-6 text-green-400" />
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-light mb-1">Dates</h4>
                        <p className="text-muted-light dark:text-muted-dark">16th – 17th January 2026</p>
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
                <div className="bg-dark/50 dark:bg-light/5 backdrop-blur-sm rounded-2xl p-8 border border-primary/20">
                  <h3 className="text-2xl font-heading font-bold text-light mb-6">Organizers</h3>
                  
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
            <motion.div variants={itemVariants} className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-heading font-bold mb-6">
                <span className="gradient-text">Seminar Highlights</span>
              </h2>
              <p className="text-xl text-muted-light dark:text-muted-dark max-w-3xl mx-auto">
                Master essential digital safety skills through our comprehensive program
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
                      {item === 'Smart Internet Habits' && 'Develop responsible online behavior and best practices'}
                      {item === 'Online Fraud Prevention' && 'Identify and protect against digital scams and phishing'}
                      {item === 'Digital Ethics' && 'Understanding ethical considerations in the digital world'}
                      {item === 'Digital Footprint Management' && 'Control and manage your online presence effectively'}
                    </p>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </motion.section>

        {/* Coming Soon Section */}
        <motion.section 
          className="py-20 bg-gradient-to-r from-green-400/10 via-blue-600/10 to-green-400/10"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <div className="container-width text-center">
            <motion.div variants={itemVariants} className="space-y-8">
              <h2 className="text-4xl lg:text-5xl font-heading font-bold mb-6">
                <span className="gradient-text">Stay Tuned!</span>
              </h2>
              <p className="text-xl text-light max-w-3xl mx-auto leading-relaxed">
                Registration for NETWISE will open soon. Follow us on social media and check back regularly for updates on registration dates, detailed schedule, and speaker announcements.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4 pt-4">
                <Link
                  to="/events"
                  className="inline-flex items-center space-x-2 bg-gradient-to-r from-green-400/20 to-blue-600/20 hover:from-green-400/30 hover:to-blue-600/30 text-primary font-bold text-lg px-10 py-4 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-primary/25 border-2 border-green-400/40"
                >
                  <FiArrowLeft className="w-5 h-5 rotate-180" />
                  <span>View All Events</span>
                </Link>
                
                <Link
                  to="/contact"
                  className="inline-flex items-center space-x-2 bg-gradient-to-r from-green-400 to-blue-600 hover:from-green-300 hover:to-blue-500 text-dark font-bold text-lg px-10 py-4 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-primary/25"
                >
                  <span>Contact Us for Updates</span>
                  <FiArrowLeft className="w-5 h-5 rotate-180" />
                </Link>
              </div>
              
              <p className="text-sm text-muted-light dark:text-muted-dark">
                Expected registration opening: January 2026
              </p>
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
          <div className="container-width text-center">
            <motion.div variants={itemVariants} className="space-y-6">
              <h2 className="text-3xl lg:text-4xl font-heading font-bold text-light">
                NETWISE — where smart practices meet digital safety.
              </h2>
              <p className="text-xl text-green-400 font-semibold">
                Join IITRAM Cyber Club in building a safer digital future for all.
              </p>
            </motion.div>
          </div>
        </motion.section>
      </div>
    </>
  )
}

export default NetWise
