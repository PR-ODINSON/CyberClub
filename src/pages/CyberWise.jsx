import { useState } from 'react'
import { motion } from 'framer-motion'
import { FiCalendar, FiMapPin, FiUsers, FiClock, FiAward, FiShield, FiZap, FiTarget, FiCode, FiArrowLeft } from 'react-icons/fi'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import CountdownTimer from '../components/CountdownTimer'
import eventsData from '../data/events.json'

const CyberWise = () => {
  const [event] = useState(eventsData[0]) // Get the CYBERWISE event

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
    'Expert Talks': FiUsers,
    'Hands-on Labs': FiCode,
    'Cybercrime Awareness': FiShield,
    'Preventive Techniques': FiTarget
  }

  return (
    <>
      <Helmet>
        <title>CYBERWISE Workshop – IITRAM Cyber Club</title>
        <meta name="description" content="CYBERWISE – A 2-day workshop on Cybersecurity at IITRAM, Ahmedabad sponsored by CAWACH Kendra, Government of Gujarat." />
        <meta property="og:title" content="CYBERWISE – Cybersecurity Workshop at IITRAM" />
        <meta property="og:description" content="Hands-on sessions, expert talks, and cybersecurity awareness organized by CyberClub IITRAM." />
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
              className="absolute inset-0 bg-gradient-conic from-primary/10 via-accent/10 to-primary/10"
              animate={{ rotate: 360 }}
              transition={{
                duration: 30,
                repeat: Infinity,
                ease: 'linear',
              }}
            />
            
            {/* Neon edges effect */}
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
                        CYBERWISE
                      </span>
                    </h1>
                    <p className="text-lg text-muted-light dark:text-muted-dark">
                      2-Day Workshop on Cybersecurity
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.h2 
                variants={itemVariants}
                className="text-2xl lg:text-3xl font-heading font-bold text-light mb-6"
              >
                For Information Security Expertise
              </motion.h2>

              <motion.p 
                variants={itemVariants}
                className="text-lg lg:text-xl text-muted-light dark:text-muted-dark max-w-4xl mx-auto leading-relaxed"
              >
                {event.description}
              </motion.p>
            </motion.div>

            {/* Countdown Timer */}
            <motion.div variants={itemVariants} className="mb-16">
              <CountdownTimer targetDate="2025-11-14T09:00:00" />
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
                        <h4 className="text-lg font-semibold text-light mb-1">Dates</h4>
                        <p className="text-muted-light dark:text-muted-dark">14th – 15th November 2025</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-accent/20 rounded-xl flex items-center justify-center flex-shrink-0">
                        <FiMapPin className="w-6 h-6 text-accent" />
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-light mb-1">Venue</h4>
                        <p className="text-muted-light dark:text-muted-dark">{event.location}</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center flex-shrink-0">
                        <FiClock className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-light mb-1">Time</h4>
                        <p className="text-muted-light dark:text-muted-dark">09:00 AM - 05:00 PM (Both Days)</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-accent/20 rounded-xl flex items-center justify-center flex-shrink-0">
                        <FiUsers className="w-6 h-6 text-accent" />
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-light mb-1">Capacity</h4>
                        <p className="text-muted-light dark:text-muted-dark">{event.maxAttendees} Participants</p>
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
                      <p className="text-muted-light dark:text-muted-dark">{event.organizer}</p>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-accent mb-2">Sponsored by</h4>
                      <p className="text-muted-light dark:text-muted-dark">{event.sponsor}</p>
                    </div>

                    <div className="pt-4 border-t border-primary/20">
                      <h4 className="text-lg font-semibold text-light mb-3">What You'll Need</h4>
                      <ul className="space-y-2">
                        {event.materials.map((material, index) => (
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
                Experience comprehensive cybersecurity training through our carefully curated program
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {event.agenda.map((item, index) => {
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
                      {item === 'Expert Talks' && 'Learn from industry professionals and cybersecurity experts'}
                      {item === 'Hands-on Labs' && 'Practical sessions with real-world scenarios'}
                      {item === 'Cybercrime Awareness' && 'Understanding current threats and attack vectors'}
                      {item === 'Preventive Techniques' && 'Best practices for defense and protection'}
                    </p>
                  </motion.div>
                )
              })}
            </div>
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
                Learn from distinguished experts and industry leaders in cybersecurity
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
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
                          Central Bureau of Investigation, Delhi
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
                          Seasoned investigator with extensive experience in handling high-profile cybercrime cases and digital forensics.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Speaker 2: Dr. Nitin Awathare */}
              <motion.div
                variants={itemVariants}
                className="group perspective-1000"
              >
                <div className="relative w-full h-80 transform-style-preserve-3d transition-transform duration-700 group-hover:rotate-y-180">
                  {/* Front of card */}
                  <div className="absolute inset-0 backface-hidden rounded-2xl overflow-hidden border border-primary/20">
                    <div className="relative h-full">
                      <img 
                        src="/Nitin Awathare.png" 
                        alt="Dr. Nitin Awathare"
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-dark/90 via-dark/20 to-transparent" />
                      <div className="absolute bottom-0 left-0 right-0 p-6">
                        <h3 className="text-xl font-heading font-bold text-white mb-1">
                          Dr. Nitin Awathare
                        </h3>
                        <p className="text-primary text-sm font-semibold">
                          IIT Jodhpur
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Back of card */}
                  <div className="absolute inset-0 backface-hidden rotate-y-180 bg-dark/95 backdrop-blur-sm rounded-2xl border border-primary/20 p-6 flex flex-col justify-center">
                    <div className="text-center">
                      <h3 className="text-lg font-heading font-bold text-white mb-4">
                        Dr. Nitin Awathare
                      </h3>
                      <div className="space-y-3 text-sm text-muted-light">
                        <p><strong className="text-primary">Position:</strong> Assistant Professor, CSE</p>
                        <p><strong className="text-primary">Expertise:</strong> Distributed Systems, Blockchain</p>
                        <p><strong className="text-primary">Focus:</strong> Payment Channel Networks, System Architecture</p>
                        <p className="text-xs leading-relaxed">
                          Ph.D. from IIT Bombay (2022), specializes in blockchain technology and distributed systems security.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Speaker 3: Dr. Sameer Kulkarni */}
              <motion.div
                variants={itemVariants}
                className="group perspective-1000"
              >
                <div className="relative w-full h-80 transform-style-preserve-3d transition-transform duration-700 group-hover:rotate-y-180">
                  {/* Front of card */}
                  <div className="absolute inset-0 backface-hidden rounded-2xl overflow-hidden border border-primary/20">
                    <div className="relative h-full">
                      <img 
                        src="/Sameer Kulkarni.jpg" 
                        alt="Dr. Sameer Kulkarni"
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-dark/90 via-dark/20 to-transparent" />
                      <div className="absolute bottom-0 left-0 right-0 p-6">
                        <h3 className="text-xl font-heading font-bold text-white mb-1">
                          Dr. Sameer Kulkarni
                        </h3>
                        <p className="text-primary text-sm font-semibold">
                          IIT Gandhinagar
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Back of card */}
                  <div className="absolute inset-0 backface-hidden rotate-y-180 bg-dark/95 backdrop-blur-sm rounded-2xl border border-primary/20 p-6 flex flex-col justify-center">
                    <div className="text-center">
                      <h3 className="text-lg font-heading font-bold text-white mb-4">
                        Dr. Sameer Kulkarni
                      </h3>
                      <div className="space-y-3 text-sm text-muted-light">
                        <p><strong className="text-primary">Position:</strong> Faculty, Computer Science</p>
                        <p><strong className="text-primary">Expertise:</strong> Cybersecurity, Network Security</p>
                        <p><strong className="text-primary">Focus:</strong> Information Security, Cryptography</p>
                        <p className="text-xs leading-relaxed">
                          Renowned researcher in cybersecurity with extensive work in network security and cryptographic protocols.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Speaker 4: Dr. Nilay Mistry */}
              <motion.div
                variants={itemVariants}
                className="group perspective-1000"
              >
                <div className="relative w-full h-80 transform-style-preserve-3d transition-transform duration-700 group-hover:rotate-y-180">
                  {/* Front of card */}
                  <div className="absolute inset-0 backface-hidden rounded-2xl overflow-hidden border border-primary/20">
                    <div className="relative h-full">
                      <img 
                        src="/Nilay Mistry.jpg" 
                        alt="Dr. Nilay Mistry"
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-dark/90 via-dark/20 to-transparent" />
                      <div className="absolute bottom-0 left-0 right-0 p-6">
                        <h3 className="text-xl font-heading font-bold text-white mb-1">
                          Dr. Nilay Mistry
                        </h3>
                        <p className="text-primary text-sm font-semibold">
                          National Forensic Sciences University
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Back of card */}
                  <div className="absolute inset-0 backface-hidden rotate-y-180 bg-dark/95 backdrop-blur-sm rounded-2xl border border-primary/20 p-6 flex flex-col justify-center">
                    <div className="text-center">
                      <h3 className="text-lg font-heading font-bold text-white mb-4">
                        Dr. Nilay Mistry
                      </h3>
                      <div className="space-y-3 text-sm text-muted-light">
                        <p><strong className="text-primary">Position:</strong> Faculty, NFSU</p>
                        <p><strong className="text-primary">Expertise:</strong> Digital Forensics, Cyber Law</p>
                        <p><strong className="text-primary">Focus:</strong> Forensic Analysis, Evidence Recovery</p>
                        <p className="text-xs leading-relaxed">
                          Expert in digital forensics and cyber law with extensive experience in forensic investigations and evidence analysis.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Speaker 5: Dr. Manoj Choudhuri */}
              <motion.div
                variants={itemVariants}
                className="group perspective-1000"
              >
                <div className="relative w-full h-80 transform-style-preserve-3d transition-transform duration-700 group-hover:rotate-y-180">
                  {/* Front of card */}
                  <div className="absolute inset-0 backface-hidden rounded-2xl overflow-hidden border border-primary/20">
                    <div className="relative h-full">
                      <img 
                        src="/Manoj Choudhuri.jpg" 
                        alt="Dr. Manoj Choudhuri"
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-dark/90 via-dark/20 to-transparent" />
                      <div className="absolute bottom-0 left-0 right-0 p-6">
                        <h3 className="text-xl font-heading font-bold text-white mb-1">
                          Dr. Manoj Choudhuri
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
                        Dr. Manoj Choudhuri
                      </h3>
                      <div className="space-y-3 text-sm text-muted-light">
                        <p><strong className="text-primary">Position:</strong> Faculty, IITRAM</p>
                        <p><strong className="text-primary">Expertise:</strong> Computer Science, Cybersecurity</p>
                        <p><strong className="text-primary">Focus:</strong> Information Security, Research</p>
                        <p className="text-xs leading-relaxed">
                          Distinguished faculty member at IITRAM with expertise in computer science and cybersecurity research.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Registration Section */}
        <motion.section 
          className="py-20 bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <div className="container-width text-center">
            <motion.div variants={itemVariants} className="space-y-8">
              <h2 className="text-4xl lg:text-5xl font-heading font-bold mb-6">
                <span className="gradient-text">Secure Your Spot</span>
              </h2>
              <p className="text-xl text-light max-w-3xl mx-auto leading-relaxed">
                Don't miss this opportunity to enhance your cybersecurity knowledge and connect with like-minded professionals.
              </p>
              
              <motion.a
                href="https://forms.cloud.microsoft/r/cd7k3PMp3p?origin=lprLink"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-gradient-to-r from-cyan-400 to-purple-600 hover:from-cyan-300 hover:to-purple-500 text-dark font-bold text-lg px-12 py-4 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-primary/25 hover:scale-105"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Register Now
              </motion.a>
              
              <p className="text-sm text-muted-light dark:text-muted-dark">
                Limited seats available • Free registration
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
                Join us in CYBERWISE — where awareness meets action.
              </h2>
              <p className="text-xl text-primary font-semibold">
                Be part of IITRAM's journey towards a secure digital future.
              </p>
            </motion.div>
          </div>
        </motion.section>
      </div>
    </>
  )
}

export default CyberWise
