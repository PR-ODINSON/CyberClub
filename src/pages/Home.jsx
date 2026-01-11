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

  // INFRA CYBERWISE 2026 - Featured Event
  const upcomingEvents = [
    {
      id: 2,
      title: 'INFRA CYBERWISE 2026 - Infrastructure Cybersecurity Workshop',
      date: '2026-01-30',
      endDate: '2026-01-31',
      time: '09:00',
      endTime: '17:00',
      location: 'IITRAM Campus, Ahmedabad',
      type: 'Workshop',
      attendees: 0,
      maxAttendees: 150,
      description: 'A comprehensive workshop bringing together students, faculty, and industry professionals to explore cybersecurity challenges and protection strategies for critical infrastructure systems.',
      organizer: 'Cyber Club, IITRAM, Ahmedabad',
      sponsor: 'CAWACH Kendra, Government of Gujarat',
      featured: true,
      registrationOpen: true,
      registrationLink: 'https://forms.cloud.microsoft/r/cd7k3PMp3p',
      agenda: ['Infrastructure Resilience', 'Cyber Risk Management', 'Safety Practices', 'Incident Response']
    }
  ]

  return (
    <div ref={containerRef} className="relative">
      {/* News Ticker / Media Coverage Banner - Below Navbar */}
      <motion.section 
        className="bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 border-b border-primary/20 py-3 overflow-hidden sticky top-20 z-40"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <div className="container-width">
          <div className="flex items-center space-x-4">
            {/* Label */}
            <div className="flex-shrink-0 flex items-center space-x-2 bg-primary/20 px-3 py-1.5 rounded-full border border-primary/40">
              <FiShield className="w-3.5 h-3.5 text-primary animate-pulse" />
              <span className="text-xs font-bold text-primary uppercase tracking-wider">In The News</span>
            </div>
            
            {/* Scrolling News */}
            <div className="flex-1 overflow-hidden">
              <motion.div 
                className="flex space-x-8 whitespace-nowrap"
                animate={{ x: [0, -1000] }}
                transition={{
                  duration: 30,
                  repeat: Infinity,
                  ease: "linear"
                }}
              >
                {/* Repeat items for continuous scroll */}
                {[1, 2].map((iteration) => (
                  <div key={iteration} className="flex space-x-8">
                    <a 
                      href="https://english.khabarpatri.com/2025/11/18/iitram-presents-cyberwise-2025-a-workshop-on-cybersecurity-for-information-security-professionals/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-3 hover:text-primary transition-colors group"
                    >
                      <span className="text-accent font-semibold text-sm">📰 Khabar Patri:</span>
                      <span className="text-gray-700 dark:text-muted-dark group-hover:text-primary transition-colors text-sm">
                        IITRAM Presents CYBERWISE 2025 - A Workshop on Cybersecurity for Information Security Professionals
                      </span>
                    </a>
                    
                    <span className="text-primary/40">•</span>
                    
                    <a 
                      href="https://navjeevanexpress.com/iitrams-cyberwise-2025-national-workshop-builds-next-gen-cyber-defenders/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-3 hover:text-primary transition-colors group"
                    >
                      <span className="text-accent font-semibold text-sm">📰 Navjeevan Express:</span>
                      <span className="text-gray-700 dark:text-muted-dark group-hover:text-primary transition-colors text-sm">
                        IITRAM's CYBERWISE 2025 National Workshop Builds Next-Gen Cyber Defenders
                      </span>
                    </a>
                    
                    <span className="text-primary/40">•</span>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </motion.section>

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
                          <a
                            href={event.registrationLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center space-x-2 hover:scale-105 transition-transform"
                          >
                            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                            <span className="text-sm text-green-400 font-semibold hover:text-green-300">
                              Registration Open
                            </span>
                          </a>
                        </div>

                        {/* Event Title */}
                        <motion.div
                          className="mb-4"
                          whileHover={{ scale: 1.02 }}
                          transition={{ duration: 0.2 }}
                        >
                          <h3 className="text-4xl lg:text-5xl font-heading font-black mb-2">
                            <span className="bg-gradient-to-r from-green-400 to-blue-600 bg-clip-text text-transparent">
                              INFRA CYBERWISE 2026
                            </span>
                          </h3>
                          <p className="text-xl text-gray-600 dark:text-muted-dark font-medium">
                            Infrastructure Cybersecurity Workshop
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
                      <h4 className="font-semibold text-gray-500 dark:text-gray-400 mb-4 text-lg">Workshop Focus Areas</h4>
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
                          <a
                            href={event.registrationLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center space-x-2 px-8 py-3 bg-gradient-to-r from-green-400 to-blue-600 text-dark font-bold rounded-lg hover:from-green-300 hover:to-blue-500 transition-all duration-300 shadow-lg hover:shadow-xl"
                            onMouseEnter={() => setHover('register')}
                            onMouseLeave={removeHover}
                          >
                            <span>Register Now</span>
                            <FiArrowRight className="w-4 h-4" />
                          </a>
                        </motion.div>
                        <motion.div
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Link
                            to="/events/netwise"
                            className="inline-flex items-center space-x-2 px-8 py-3 bg-dark/10 dark:bg-light/5 text-primary font-bold rounded-lg hover:bg-dark/20 dark:hover:bg-light/10 transition-all duration-300 border-2 border-primary/30"
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
