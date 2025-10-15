import { useState } from 'react'
import { motion } from 'framer-motion'
import { FiCalendar, FiMapPin, FiUsers, FiClock, FiArrowRight, FiShield, FiZap, FiTarget, FiCode, FiTrendingUp, FiAward } from 'react-icons/fi'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { useCursor } from '../hooks/useCursor'
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion'
import eventsData from '../data/events.json'

const Events = () => {
  const { setHover, removeHover } = useCursor()
  const prefersReducedMotion = usePrefersReducedMotion()
  
  // Events data - all events
  const allEvents = eventsData

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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

  const getEventIcon = (type) => {
    switch (type) {
      case 'Workshop': return FiCode
      case 'Competition': return FiAward
      case 'Seminar': return FiUsers
      default: return FiCalendar
    }
  }

  const getEventGradient = (type) => {
    switch (type) {
      case 'Workshop': return 'from-cyan-400 to-purple-600'
      case 'Competition': return 'from-orange-400 to-red-600'
      case 'Seminar': return 'from-green-400 to-blue-600'
      default: return 'from-primary to-accent'
    }
  }

  const getEventLink = (event) => {
    if (event.id === 1) return '/events/cyberwise' // CYBERWISE has dedicated page
    return '#' // Other events can link to registration or details
  }

  return (
    <>
      <Helmet>
        <title>Events – IITRAM Cyber Club</title>
        <meta name="description" content="Discover upcoming cybersecurity events, workshops, and competitions organized by CyberClub IITRAM." />
        <meta property="og:title" content="Cybersecurity Events at IITRAM" />
        <meta property="og:description" content="Join our workshops, competitions, and seminars to enhance your cybersecurity skills." />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

      <div className="min-h-screen pt-24">
        {/* Hero Section */}
        <motion.section
          className="relative overflow-hidden section-padding"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Background Effects */}
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/5 to-primary/5" />
            <div className="absolute inset-0 bg-cyber-grid bg-grid opacity-[0.02]" />
          </div>

          <div className="container-width relative z-10">
            <motion.div variants={itemVariants} className="text-center mb-16">
              <h1 className="text-4xl lg:text-6xl font-heading font-black mb-6">
                <span className="gradient-text">Upcoming Events</span>
              </h1>
              <p className="text-xl lg:text-2xl text-gray-600 dark:text-muted-dark max-w-4xl mx-auto leading-relaxed">
                Join us for workshops, competitions, and seminars designed to enhance your cybersecurity skills and connect with the community.
              </p>
            </motion.div>
          </div>
        </motion.section>

        {/* Events Timeline */}
        <motion.section 
          className="py-20"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <div className="container-width">
            <div className="space-y-12">
              {allEvents.map((event, index) => {
                const IconComponent = getEventIcon(event.type)
                const gradient = getEventGradient(event.type)
                const eventLink = getEventLink(event)
                
                return (
                  <motion.div
                    key={event.id}
                    variants={itemVariants}
                    className="relative"
                  >
                    {/* Timeline Line */}
                    {index < allEvents.length - 1 && (
                      <div className="absolute left-8 top-24 w-0.5 h-32 bg-gradient-to-b from-primary/50 to-transparent hidden lg:block" />
                    )}
                    
                    {/* Event Card */}
                    <motion.div
                      className="card card-hover relative overflow-hidden group"
                      whileHover={{ 
                        scale: prefersReducedMotion ? 1 : 1.02,
                        transition: { duration: 0.3 }
                      }}
                      onMouseEnter={() => setHover('calendar')}
                      onMouseLeave={removeHover}
                    >
                      {/* Background Effects */}
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/5 to-primary/5" />
                      <div className={`absolute inset-0 bg-gradient-to-r ${gradient.replace('from-', 'from-').replace('to-', 'to-')}/5 opacity-0 group-hover:opacity-50 transition-opacity duration-300`} />
                      
                      {/* Animated border */}
                      <motion.div
                        className="absolute inset-0 rounded-xl border-2 border-transparent"
                        whileHover={{
                          borderColor: 'rgba(15, 241, 178, 0.3)',
                        }}
                        transition={{ duration: 0.3 }}
                      />

                      <div className="relative z-10 p-8">
                        <div className="flex flex-col lg:flex-row lg:items-start gap-8">
                          {/* Event Icon & Timeline */}
                          <div className="flex-shrink-0">
                            <motion.div
                              className={`w-16 h-16 bg-gradient-to-br ${gradient} rounded-xl flex items-center justify-center mb-4 shadow-lg`}
                              whileHover={{ scale: 1.1, rotate: 5 }}
                              transition={{ duration: 0.3 }}
                            >
                              <IconComponent className="w-8 h-8 text-dark" />
                            </motion.div>
                            <div className="text-center">
                              <div className="text-sm font-semibold text-primary">
                                {new Date(event.date).toLocaleDateString('en-US', {
                                  month: 'short',
                                  day: 'numeric'
                                })}
                              </div>
                              <div className="text-xs text-gray-500 dark:text-muted-dark">
                                {new Date(event.date).getFullYear()}
                              </div>
                            </div>
                          </div>

                          {/* Event Content */}
                          <div className="flex-1">
                            {/* Header */}
                            <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                              <div className="flex-1">
                                <div className="flex items-center space-x-3 mb-3">
                                  <span className={`px-3 py-1 rounded-full text-sm font-semibold bg-gradient-to-r ${gradient}/20 text-primary border border-primary/30`}>
                                    {event.type}
                                  </span>
                                  {event.featured && (
                                    <span className="px-3 py-1 rounded-full text-xs font-semibold bg-accent/20 text-accent border border-accent/30">
                                      Featured
                                    </span>
                                  )}
                                  <div className="flex items-center space-x-1">
                                    <div className={`w-2 h-2 rounded-full ${event.registrationOpen ? 'bg-green-400 animate-pulse' : 'bg-yellow-400 animate-pulse'}`} />
                                    <span className="text-xs text-gray-600 dark:text-muted-dark">
                                      {event.registrationOpen ? 'Registration Open' : 'Registration Opening Soon'}
                                    </span>
                                  </div>
                                </div>

                                <h3 className="text-2xl lg:text-3xl font-heading font-bold mb-3 group-hover:text-primary transition-colors">
                                  {event.id === 1 ? (
                                    <span className={`bg-gradient-to-r ${gradient} bg-clip-text text-transparent`}>
                                      {event.title}
                                    </span>
                                  ) : (
                                    event.title
                                  )}
                                </h3>

                                <p className="text-gray-600 dark:text-muted-dark leading-relaxed mb-4">
                                  {event.description}
                                </p>
                              </div>

                              {/* Event Stats */}
                              <div className="lg:ml-8 mt-4 lg:mt-0">
                                <div className="bg-dark/10 dark:bg-light/5 backdrop-blur-sm rounded-xl p-4 border border-primary/20">
                                  <div className="text-center">
                                    <div className="text-xl font-bold text-primary mb-1">{event.maxAttendees}</div>
                                    <div className="text-xs text-gray-600 dark:text-muted-dark">Max Seats</div>
                                  </div>
                                </div>
                              </div>
                            </div>

                            {/* Event Details */}
                            <div className="grid md:grid-cols-3 gap-4 mb-6">
                              <div className="flex items-center space-x-3">
                                <FiCalendar className="w-4 h-4 text-primary" />
                                <div>
                                  <div className="text-sm font-medium text-gray-500 dark:text-gray-400">
                                    {event.date === event.endDate ? 
                                      new Date(event.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }) :
                                      `${new Date(event.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })} - ${new Date(event.endDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}`
                                    }
                                  </div>
                                  <div className="text-xs text-gray-500 dark:text-gray-400">
                                    {event.time} - {event.endTime}
                                  </div>
                                </div>
                              </div>

                              <div className="flex items-center space-x-3">
                                <FiMapPin className="w-4 h-4 text-accent" />
                                <div>
                                  <div className="text-sm font-medium text-gray-500 dark:text-gray-400">Location</div>
                                  <div className="text-xs text-gray-500 dark:text-gray-400">{event.location}</div>
                                </div>
                              </div>

                              <div className="flex items-center space-x-3">
                                <FiUsers className="w-4 h-4 text-primary" />
                                <div>
                                  <div className="text-sm font-medium text-gray-500 dark:text-gray-400">Organizer</div>
                                  <div className="text-xs text-gray-500 dark:text-gray-400">{event.organizer}</div>
                                </div>
                              </div>
                            </div>

                            {/* Agenda Tags */}
                            <div className="mb-6">
                              <div className="flex flex-wrap gap-2">
                                {event.agenda.slice(0, 4).map((item, i) => (
                                  <span key={i} className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs border border-primary/20">
                                    {item}
                                  </span>
                                ))}
                                {event.agenda.length > 4 && (
                                  <span className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-muted-dark rounded-full text-xs">
                                    +{event.agenda.length - 4} more
                                  </span>
                                )}
                              </div>
                            </div>

                            {/* Action Buttons */}
                            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between pt-4 border-t border-primary/20">
                              <div className="mb-4 sm:mb-0">
                                <p className="text-sm text-gray-600 dark:text-muted-dark">
                                  Sponsored by <span className="text-accent font-semibold">{event.sponsor}</span>
                                </p>
                              </div>
                              
                              <div className="flex items-center space-x-3">
                                {eventLink !== '#' && (
                                  <motion.div
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                  >
                                    <Link
                                      to={eventLink}
                                      className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-primary/20 to-accent/20 text-primary font-semibold rounded-lg hover:from-primary/30 hover:to-accent/30 transition-all duration-300 border-2 border-primary/40 hover:border-primary/60 shadow-lg hover:shadow-xl backdrop-blur-sm"
                                      onMouseEnter={() => setHover('info')}
                                      onMouseLeave={removeHover}
                                    >
                                      <span>Learn More</span>
                                      <FiArrowRight className="w-5 h-5" />
                                    </Link>
                                  </motion.div>
                                )}
                                
                                <motion.a
                                  href={event.id === 1 ? "https://forms.cloud.microsoft/r/cd7k3PMp3p?origin=lprLink" : "#"}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className={`inline-flex items-center space-x-2 px-6 py-2 bg-gradient-to-r ${gradient} text-dark font-semibold rounded-lg hover:shadow-lg transition-all duration-300`}
                                  onMouseEnter={() => setHover('external')}
                                  onMouseLeave={removeHover}
                                  whileHover={{ scale: 1.05 }}
                                  whileTap={{ scale: 0.95 }}
                                >
                                  <span>{event.id === 1 ? 'Register Now' : 'Coming Soon'}</span>
                                  <FiArrowRight className="w-4 h-4" />
                                </motion.a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Corner accents */}
                      <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-primary/30 rounded-tl-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-primary/30 rounded-br-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </motion.div>
                  </motion.div>
                )
              })}
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
                Stay Updated with Our Events
              </h2>
              <p className="text-xl text-muted-light dark:text-muted-dark max-w-3xl mx-auto">
                Follow us on social media and join our community to get notified about upcoming events and workshops.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                <Link
                  to="/about"
                  className="btn-secondary inline-flex items-center space-x-2"
                  onMouseEnter={() => setHover('info')}
                  onMouseLeave={removeHover}
                >
                  <span>Learn About Us</span>
                  <FiArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  to="/contact"
                  className="btn-primary inline-flex items-center space-x-2"
                  onMouseEnter={() => setHover('external')}
                  onMouseLeave={removeHover}
                >
                  <span>Get In Touch</span>
                  <FiArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          </div>
        </motion.section>
      </div>
    </>
  )
}

export default Events
