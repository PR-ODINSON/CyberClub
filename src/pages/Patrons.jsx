import { motion } from 'framer-motion'
import { FiExternalLink, FiAward, FiUsers, FiTarget, FiGlobe } from 'react-icons/fi'
import { useCursor } from '../hooks/useCursor'

/**
 * Patrons page showcasing IITRAM and CAWACH
 */
const Patrons = () => {
  const { setHover, removeHover } = useCursor()

  const patrons = [
    {
      id: 'iitram',
      name: 'IITRAM',
      fullName: 'Institute of Infrastructure Technology Research and Management',
      description: 'Institute of Infrastructure, Technology, Research And Management has been established by the Government of Gujarat as an Autonomous University and has been mandated to bring about significant change in Engineering Education with respect to Technical and Managerial knowledge in the area of Infrastructure. The objective of this Institute is to serve as a Center of excellence in Research and Teaching in all areas pertaining to Infrastructure, and the Institute has a vision of acquiring a status of National importance in Infrastructure and related areas',
      logo: '/patrons/iitram-logo.png', // TODO: Add actual logo
      website: 'https://iitram.ac.in/',
      established: '2013',
      location: 'Ahmedabad, Gujarat, India',
      type: 'Educational Institution',
      highlights: [
        'Autonomous University status',
        'State-of-the-art laboratories and research facilities',
        'Focus on infrastructure and management education',
        'Strong industry partnerships and collaborations',
        'Research excellence in engineering disciplines'
      ],
      discipline: [
        'Computer Science and Engineering',
        'Electrical Engineering',
        'Mechanical Engineering', 
        'Civil Engineering',
        
      ],
      stats: {
        students: '800+',
        faculty: '50+',
        research: '120+',
        patents: '23+'
      },
      gradient: 'from-blue-500 to-cyan-400'
    },
    {
      id: 'cawach',
      name: 'CAWACH',
      fullName: 'Centre for Augmenting WAR with COVID-19 Health Crisis',
      description: 'The "CAWACH Kendra" is the part of Government of Gujarat initiative under the Education Department in collaboration with Home Department to aware college students for Cyber Hygiene, Cyber Crime and Cyber Security and to secure system with end users so as to prevent further cyber-attacks.',
      logo: '/patrons/cawach-logo.png', // TODO: Add actual logo
      website: 'https://cawach.gujgov.edu.in/',
      established: '2020',
      location: 'New Delhi, India',
      type: 'Government Initiative',
      highlights: [
        'Achieve heightened cyber awareness',
        'Implement a comprehensive Master Training Program',
        'Develop engaging e-content for online safety promotion',
        'Empower a wider audience through CYBER YUVA social media platforms'
      ],
      services: [
        'Cyber Club Activities',
        'Women Cyber Safety Wing',
        'Capsule Module for Online Safety',
        'Training & Awareness Program',
        'Lecture Series'
      ],
      stats: {
        Activities_Scheduled: '750+',
        Activities_Performed: '470+',
        Students_Attended: '45500+'
      },
      gradient: 'from-green-500 to-emerald-400'
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  }

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.9
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: 'easeOut'
      }
    }
  }

  return (
    <div className="min-h-screen pt-24 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-radial from-primary/5 via-transparent to-accent/5" />
        <div className="absolute inset-0 bg-cyber-grid bg-grid opacity-[0.02]" />
      </div>

      <div className="container-width section-padding relative z-10">
        {/* Header Section */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl lg:text-6xl font-heading font-bold mb-6">
            <span className="gradient-text">Our Patrons</span>
          </h1>
          <p className="text-xl text-muted-dark max-w-4xl mx-auto leading-relaxed">
            CyberClub IITRAM is proud to be supported by leading institutions that share our 
            vision of advancing cybersecurity education, research, and innovation. Our patrons 
            provide the foundation for our mission to protect the digital frontier.
          </p>
        </motion.div>

        {/* Patrons Grid */}
        <motion.div
          className="space-y-12"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {patrons.map((patron, index) => (
            <motion.div
              key={patron.id}
              className="relative"
              variants={cardVariants}
            >
              <div className={`
                card card-hover p-6 lg:p-8 relative overflow-hidden
                ${index % 2 === 1 ? 'lg:ml-8' : 'lg:mr-8'}
                border-2 border-primary/10 hover:border-primary/30 transition-all duration-300
                bg-gradient-to-br from-dark/80 to-dark/60 backdrop-blur-sm
              `}>
                {/* Background Gradient */}
                <div className={`
                  absolute inset-0 bg-gradient-to-br ${patron.gradient} 
                  opacity-5 group-hover:opacity-10 transition-opacity duration-500
                `} />

                <div className="relative z-10">
                  {/* Header */}
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                    <div className="flex-1">
                      <div className="flex items-center space-x-4 mb-3">
                        {/* Logo placeholder */}
                        <div className={`
                          w-14 h-14 rounded-xl bg-gradient-to-br ${patron.gradient} 
                          flex items-center justify-center text-xl font-bold text-dark
                          shadow-lg border-2 border-white/20
                        `}>
                          {patron.name.charAt(0)}
                        </div>
                        <div>
                          <h2 className="text-2xl lg:text-3xl font-heading font-bold text-primary mb-1">
                            {patron.name}
                          </h2>
                          <p className="text-base text-muted-dark font-medium">
                            {patron.fullName}
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex flex-wrap gap-3 text-sm text-muted-dark mb-4">
                        <div className="flex items-center space-x-2">
                          <FiGlobe className="w-4 h-4 text-primary" />
                          <span>{patron.location}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <FiTarget className="w-4 h-4 text-primary" />
                          <span>Est. {patron.established}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <FiUsers className="w-4 h-4 text-primary" />
                          <span>{patron.type}</span>
                        </div>
                      </div>
                    </div>

                    <motion.a
                      href={patron.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-secondary inline-flex items-center space-x-2 mt-4 lg:mt-0"
                      onMouseEnter={() => setHover('external')}
                      onMouseLeave={removeHover}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <span>Visit Website</span>
                      <FiExternalLink className="w-4 h-4" />
                    </motion.a>
                  </div>

                  {/* Description */}
                  <p className="text-base text-light/90 leading-relaxed mb-6">
                    {patron.description}
                  </p>

                  {/* Stats */}
                  <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6 p-4 bg-dark/30 rounded-xl border border-primary/10">
                    {Object.entries(patron.stats).map(([key, value]) => (
                      <div key={key} className="text-center">
                        <motion.div
                          className="text-xl lg:text-2xl font-heading font-bold text-primary mb-1"
                          animate={{
                            scale: [1, 1.05, 1],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: 'easeInOut',
                            delay: Math.random() * 2,
                          }}
                        >
                          {value}
                        </motion.div>
                        <div className="text-sm text-muted-dark capitalize">
                          {key === 'research' ? 'Publications' : 
                           key === 'funding' ? 'Total Funding' : key}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Content Grid */}
                  <div className="grid lg:grid-cols-2 gap-6">
                    {/* Highlights */}
                    <div>
                      <h3 className="text-lg font-heading font-semibold text-light mb-3 flex items-center space-x-2">
                        <FiAward className="w-5 h-5 text-primary" />
                        <span>Key Highlights</span>
                      </h3>
                      <ul className="space-y-2">
                        {patron.highlights.map((highlight, idx) => (
                          <motion.li
                            key={idx}
                            className="flex items-start space-x-3 text-muted-dark"
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                          >
                            <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                            <span>{highlight}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>

                    {/* Departments/Focus Areas */}
                    <div>
                      <h3 className="text-lg font-heading font-semibold text-light mb-3">
                        {patron.discipline ? 'Discipline' : 'Services'}
                      </h3>
                      <div className="grid grid-cols-1 gap-2">
                        {(patron.discipline || patron.services).map((item, idx) => (
                          <motion.div
                            key={idx}
                            className="bg-dark-300/30 border border-primary/20 rounded-lg px-3 py-2 text-sm text-light/90 hover:border-primary/40 hover:bg-primary/5 transition-all duration-300"
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.05 }}
                            whileHover={{ scale: 1.02 }}
                          >
                            {item}
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute top-4 right-4 w-24 h-24 border border-primary/20 rounded-full opacity-20" />
                <div className="absolute bottom-4 left-4 w-16 h-16 border border-accent/20 rounded-full opacity-20" />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Partnership Message */}
        <motion.div
          className="text-center mt-12 p-6 card border-2 border-primary/20 bg-gradient-to-r from-primary/5 to-accent/5"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-xl font-heading font-bold text-primary mb-3">
            Partnership & Collaboration
          </h3>
          <p className="text-base text-muted-dark max-w-3xl mx-auto leading-relaxed">
            Our partnerships with these esteemed institutions enable us to provide world-class 
            cybersecurity education, cutting-edge research opportunities, and real-world experience 
            to our members. Together, we're building the next generation of cybersecurity professionals.
          </p>
        </motion.div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-primary/10 text-4xl"
            style={{
              left: `${10 + (i * 15)}%`,
              top: `${20 + (i % 3) * 25}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.1, 0.3, 0.1],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 8 + (i % 3) * 2,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: i * 1.5,
            }}
          >
            {i % 3 === 0 ? '🏛️' : i % 3 === 1 ? '🔬' : '🤝'}
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default Patrons
