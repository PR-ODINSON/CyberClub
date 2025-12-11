import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { FiShield, FiCode, FiUsers, FiArrowRight, FiCalendar, FiMapPin } from 'react-icons/fi'
import { useCursor } from '../hooks/useCursor'
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion'
import Hero from '../components/Hero'
import FeatureCard from '../components/FeatureCard'

/**
 * Home page with hero section, features, and latest events
 */
const Home = () => {
  const { setHover, removeHover } = useCursor()
  const prefersReducedMotion = usePrefersReducedMotion()
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start']
  })

  // Parallax effects
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%'])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  // Features data
  const features = [
    {
      icon: FiShield,
      title: 'Cybersecurity Workshops',
      description: 'Learn ethical hacking, penetration testing, and digital forensics from industry experts.',
      gradient: 'from-primary to-accent',
      delay: 0,
      link: '/events',
      linkText: 'View Workshops'
    },
    {
      icon: FiUsers,
      title: 'Mentorship Program',
      description: 'Student-mentor collaboration initiatives connecting experienced professionals with aspiring cybersecurity enthusiasts.',
      gradient: 'from-accent to-primary',
      delay: 0.2,
      link: '/team',
      linkText: 'Meet Mentors'
    },
    {
      icon: FiCode,
      title: 'Security Research',
      description: 'Collaborate on cutting-edge research projects and publish findings in security conferences.',
      gradient: 'from-primary via-accent to-primary',
      delay: 0.4,
      link: '/about',
      linkText: 'Learn More'
    },
  ]

  // NETWISE Seminar - Featured Event
  const upcomingEvents = [
    {
      id: 2,
      title: 'NETWISE - Smart & Safe Internet Practices',
      date: '2026-01-16',
      endDate: '2026-01-17',
      time: '09:00',
      endTime: '17:00',
      location: 'IITRAM Campus, Ahmedabad',
      type: 'Seminar',
      attendees: 0,
      maxAttendees: 150,
      description: 'A program designed to promote responsible and safe internet usage, particularly among students and young professionals.',
      organizer: 'Cyber Club, IITRAM, Ahmedabad',
      sponsor: 'TBD',
      featured: true,
      registrationOpen: false,
      agenda: ['Smart Internet Habits', 'Online Fraud Prevention', 'Digital Ethics', 'Digital Footprint Management']
    }
  ]

  return (
    <div ref={containerRef} className="relative">
      {/* Hero Section */}
      <Hero />

      {/* Features Section */}
      <section className="section-padding section-light relative overflow-hidden">
        <div className="container-width">
          {/* Section Header */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <h2 className="text-4xl lg:text-5xl font-heading font-bold mb-6">
              <span className="gradient-text">What We Do</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-muted-dark max-w-3xl mx-auto">
              CyberClub IITRAM is more than a club—we're a community of cybersecurity 
              enthusiasts dedicated to protecting the digital world.
            </p>
          </motion.div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <FeatureCard
                key={feature.title}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                gradient={feature.gradient}
                delay={feature.delay}
                index={index}
                link={feature.link}
                linkText={feature.linkText}
              />
            ))}
          </div>
        </div>

        {/* Background decoration */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-accent/5 rounded-full blur-3xl" />
        </div>
      </section>

      {/* Latest Events Section */}
      <section className="section-padding relative">
        <div className="container-width">
          {/* Section Header */}
          <motion.div
            className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <div>
              <h2 className="text-3xl lg:text-4xl font-heading font-bold mb-4">
                <span className="gradient-text">Upcoming Events</span>
              </h2>
              <p className="text-lg text-gray-600 dark:text-muted-dark max-w-2xl">
                Join us for workshops, competitions, and networking events designed 
                to enhance your cybersecurity skills.
              </p>
            </div>
            
            <Link
              to="/events"
              className="btn-secondary mt-6 lg:mt-0 inline-flex items-center space-x-2"
              onMouseEnter={() => setHover('external')}
              onMouseLeave={removeHover}
            >
              <span>View All Events</span>
              <FiArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>

          {/* Featured Event - CYBERWISE */}
          <div className="max-w-5xl mx-auto">
            {upcomingEvents.map((event, index) => (
              <motion.div
                key={event.id}
                className="relative overflow-hidden"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.1,
                  ease: 'easeOut' 
                }}
                onMouseEnter={() => setHover('calendar')}
                onMouseLeave={removeHover}
              >
                {/* Main Event Card */}
                <motion.div
                  className="card card-hover relative overflow-hidden group"
                  whileHover={{ 
                    scale: prefersReducedMotion ? 1 : 1.02,
                    transition: { duration: 0.3 }
                  }}
                >
                  {/* Background Effects */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/5 to-primary/5" />
                  <div className="absolute inset-0 bg-gradient-to-r from-green-400/10 to-blue-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Animated border */}
                  <motion.div
                    className="absolute inset-0 rounded-xl border-2 border-transparent"
                    whileHover={{
                      borderColor: 'rgba(15, 241, 178, 0.3)',
                    }}
                    transition={{ duration: 0.3 }}
                  />

                  {/* Content */}
                  <div className="relative z-10 p-8">
                    {/* Header Section */}
                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-8">
                      <div className="flex-1">
                        {/* Event Badge & Status */}
                        <div className="flex items-center space-x-4 mb-6">
                          <motion.div
                            className="px-4 py-2 rounded-full bg-gradient-to-r from-green-400/20 to-blue-600/20 border border-primary/30"
                            whileHover={{ scale: 1.05 }}
                          >
                            <span className="text-sm font-semibold text-primary">
                              {event.type} • 2 Days
                            </span>
                          </motion.div>
                          <div className="flex items-center space-x-2">
                            <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse" />
                            <span className="text-sm text-gray-600 dark:text-muted-dark">
                              Registration Opening Soon
                            </span>
                          </div>
                        </div>

                        {/* Event Title */}
                        <motion.div
                          className="mb-4"
                          whileHover={{ scale: 1.02 }}
                          transition={{ duration: 0.2 }}
                        >
                          <h3 className="text-4xl lg:text-5xl font-heading font-black mb-2">
                            <span className="bg-gradient-to-r from-green-400 to-blue-600 bg-clip-text text-transparent">
                              NETWISE
                            </span>
                          </h3>
                          <p className="text-xl text-gray-600 dark:text-muted-dark font-medium">
                            Smart & Safe Internet Practices
                          </p>
                        </motion.div>

                        <p className="text-lg text-gray-600 dark:text-muted-dark leading-relaxed mb-6">
                          {event.description}
                        </p>
                      </div>

                      {/* Countdown or Status */}
                      <div className="lg:ml-8 mt-4 lg:mt-0">
                        <div className="bg-dark/10 dark:bg-light/5 backdrop-blur-sm rounded-xl p-4 border border-primary/20">
                          <div className="text-center">
                            <div className="text-2xl font-bold text-primary mb-1">150</div>
                            <div className="text-sm text-gray-600 dark:text-muted-dark">Seats</div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Event Details Grid */}
                    <div className="grid md:grid-cols-3 gap-6 mb-8">
                      <motion.div 
                        className="flex items-start space-x-3 p-4 rounded-xl bg-primary/5 border border-primary/10"
                        whileHover={{ scale: 1.02, backgroundColor: 'rgba(15, 241, 178, 0.1)' }}
                      >
                        <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                          <FiCalendar className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-500 dark:text-gray-400 mb-1">Dates</h4>
                          <p className="text-sm text-gray-500 dark:text-gray-400">
                            {new Date(event.date).toLocaleDateString('en-US', {
                              month: 'short',
                              day: 'numeric'
                            })} - {new Date(event.endDate).toLocaleDateString('en-US', {
                              month: 'short',
                              day: 'numeric',
                              year: 'numeric'
                            })}
                          </p>
                          <p className="text-xs text-gray-500 dark:text-gray-400">
                            {event.time} - {event.endTime}
                          </p>
                        </div>
                      </motion.div>

                      <motion.div 
                        className="flex items-start space-x-3 p-4 rounded-xl bg-accent/5 border border-accent/10"
                        whileHover={{ scale: 1.02, backgroundColor: 'rgba(255, 107, 107, 0.1)' }}
                      >
                        <div className="w-10 h-10 bg-accent/20 rounded-lg flex items-center justify-center flex-shrink-0">
                          <FiMapPin className="w-5 h-5 text-accent" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-500 dark:text-gray-400 mb-1">Location</h4>
                          <p className="text-sm text-gray-500 dark:text-gray-400">{event.location}</p>
                        </div>
                      </motion.div>

                      <motion.div 
                        className="flex items-start space-x-3 p-4 rounded-xl bg-primary/5 border border-primary/10"
                        whileHover={{ scale: 1.02, backgroundColor: 'rgba(15, 241, 178, 0.1)' }}
                      >
                        <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                          <FiUsers className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-500 dark:text-gray-400 mb-1">Organizer</h4>
                          <p className="text-sm text-gray-500 dark:text-gray-400">{event.organizer}</p>
                        </div>
                      </motion.div>
                    </div>

                    {/* Agenda Highlights */}
                    <div className="mb-8">
                      <h4 className="font-semibold text-gray-500 dark:text-gray-400 mb-4 text-lg">Seminar Highlights</h4>
                      <div className="grid md:grid-cols-2 gap-3">
                        {event.agenda.map((item, i) => (
                          <motion.div 
                            key={i} 
                            className="flex items-center space-x-3 p-3 rounded-lg bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20"
                            whileHover={{ scale: 1.02 }}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: i * 0.1 }}
                          >
                            <div className="w-2 h-2 bg-primary rounded-full" />
                            <span className="text-sm font-medium text-gray-500 dark:text-gray-400">{item}</span>
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    {/* Bottom Section */}
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between pt-6 border-t border-primary/20">
                      <div className="mb-4 lg:mb-0">
                        <p className="text-sm text-gray-600 dark:text-muted-dark mb-1">
                          Sponsored by
                        </p>
                        <p className="text-accent font-semibold text-lg">{event.sponsor}</p>
                      </div>
                      
                      {/* Action Buttons */}
                      <div className="flex items-center space-x-4">
                        <motion.div
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Link
                            to="/events/netwise"
                            className="inline-flex items-center space-x-2 px-8 py-3 bg-gradient-to-r from-green-400 to-blue-600 text-dark font-bold rounded-lg hover:from-green-300 hover:to-blue-500 transition-all duration-300 shadow-lg hover:shadow-xl"
                            onMouseEnter={() => setHover('info')}
                            onMouseLeave={removeHover}
                          >
                            <span>Learn More</span>
                            <FiArrowRight className="w-4 h-4" />
                          </Link>
                        </motion.div>
                      </div>
                    </div>
                  </div>

                  {/* Corner accents */}
                  <div className="absolute top-0 left-0 w-12 h-12 border-t-2 border-l-2 border-primary/30 rounded-tl-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-0 right-0 w-12 h-12 border-b-2 border-r-2 border-primary/30 rounded-br-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Floating particles */}
                  {!prefersReducedMotion && (
                    <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-xl">
                      {[...Array(5)].map((_, i) => (
                        <motion.div
                          key={i}
                          className="absolute w-1 h-1 bg-primary/40 rounded-full"
                          style={{
                            left: `${10 + i * 20}%`,
                            top: `${20 + i * 15}%`,
                          }}
                          animate={{
                            y: [0, -30, 0],
                            opacity: [0, 1, 0],
                            scale: [1, 1.5, 1],
                          }}
                          transition={{
                            duration: 4,
                            repeat: Infinity,
                            ease: 'easeInOut',
                            delay: i * 0.8,
                          }}
                        />
                      ))}
                    </div>
                  )}
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </div>
  )
}

export default Home
