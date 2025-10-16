import { motion } from 'framer-motion'
import { FiMail, FiGithub, FiLinkedin, FiUser, FiUsers, FiAward } from 'react-icons/fi'

const Team = () => {
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

  const mentors = [
    {
      name: "Dr. Prasun Chandra Tripathi",
      email: "prasunchandratripathi@iitram.ac.in",
      specialization: "Cybersecurity & Network Security",
      department: "Electrical and Computer Engineering",
      image: "/team/Prasun Chandra Tripathi.webp"
    },
    {
      name: "Dr. Ramnarayan Yadav",
      email: "ramnarayan@iitram.ac.in",
      specialization: "Information Security & Cryptography",
      department: "Electrical and Computer Engineering",
      image: "/team/Ramnarayan Yadav.webp"
    },
    {
      name: "Dr. Ravi Bhandari",
      email: "ravibhandari@iitram.ac.in",
      specialization: "Digital Forensics & Ethical Hacking",
      department: "Electrical and Computer Engineering",
      image: "/team/Ravi Bhandari.webp"
    },
    {
      name: "Dr. Manoj Choudhuri",
      email: "manojchoudhuri@iitram.ac.in",
      specialization: "Machine Learning Security",
      department: "Basic Sciences",
      image: "/team/Manoj Choudhuri.jpg"
    },
    {
      name: "Dr. Sumit Tripathi",
      email: "sumittripathi@iitram.ac.in",
      specialization: "Blockchain & Distributed Systems",
      department: "Mechanical and Aerospace Engineering",
      image: "/team/Sumit Tripathi.webp"
    },
    {
      name: "Dr. Naveet Khanna",
      email: "naveetkhanna@iitram.ac.in",
      specialization: "IoT Security & Privacy",
      department: "Mechanical and Aerospace Engineering",
      image: "/team/Navneet Khanna.webp"
    }
  ]

  const students = [
    {
      name: "Prithviraj Verma",
      oneLiner: "B.Tech Undergrad working in AI/ML and Backend Development",
      role: "Lead Developer & AI Researcher",
      image: "/team/Prithviraj Verma.JPG"
    },
    {
      name: "Rudra Trangadia",
      oneLiner: "Passionate cybersecurity enthusiast and developer",
      role: "Student Member",
      image: "/team/Rudra Trangadia.jpg"
    },
    {
      name: "Lakavath Sandeep",
      oneLiner: "Dedicated to advancing cybersecurity research and development",
      role: "Student Member",
      image: "/team/Lakavath Sandeep.jpg"
    },
    {
      name: "Tholiya Bhagy Ketanbhai",
      oneLiner: "Innovative thinker in cybersecurity and technology",
      role: "Student Member",
      image: "/team/Bhagy Tholiya.webp"
    },
    {
      name: "Devkrishna Rajkotiya",
      oneLiner: "Exploring the frontiers of digital security and privacy",
      role: "Student Member",
      image: "/team/Devkrishna.jpg",
      imagePosition: "object-[center_20%]" // Adjust positioning to show face better
    },
    {
      name: "Khushan Borse",
      oneLiner: "Committed to building secure digital solutions",
      role: "Student Member",
      image: "/team/Khushan Borse.JPG"
    },
    {
      name: "Anshul Singhal",
      oneLiner: "Cybersecurity researcher with focus on emerging threats",
      role: "Student Member",
      image: "/team/Anshul Singhal.jpg"
    },
    {
      name: "Chintan Boghani",
      oneLiner: "Passionate about ethical hacking and security analysis",
      role: "Student Member",
      image: "/team/Chintan Boghani.jpg"
    },
    {
      name: "Lucky Prasad",
      oneLiner: "Dedicated to cybersecurity education and awareness",
      role: "Student Member",
      image: "/team/Lucky Prasad.jpg"
    }
  ]

  const MentorCard = ({ mentor, index }) => (
    <motion.div
      variants={itemVariants}
      className="bg-dark/50 dark:bg-light/5 backdrop-blur-sm rounded-2xl p-6 border border-primary/20 hover:border-primary/40 transition-all duration-300 group"
      whileHover={{ scale: 1.02, y: -5 }}
      transition={{ duration: 0.3 }}
    >
      {/* Avatar */}
      <div className="flex items-center justify-center mb-6">
        <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-primary/30 group-hover:border-primary/60 transition-all duration-300">
          {mentor.image ? (
            <img 
              src={mentor.image} 
              alt={mentor.name}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
              <FiUser className="w-12 h-12 text-primary" />
            </div>
          )}
        </div>
      </div>

      {/* Name */}
      <h3 className="text-xl font-heading font-bold text-dark dark:text-light mb-2 text-center">
        {mentor.name}
      </h3>

      {/* Department */}
      <p className="text-muted-light dark:text-muted-dark text-sm text-center mb-4">
        {mentor.department}
      </p>

      {/* Email */}
      <div className="flex items-center justify-center space-x-2 text-muted-light dark:text-muted-dark hover:text-primary transition-colors duration-300">
        <FiMail className="w-4 h-4" />
        <a 
          href={`mailto:${mentor.email}`}
          className="text-sm hover:text-primary transition-colors duration-300"
        >
          {mentor.email}
        </a>
      </div>

      {/* Mentor Badge */}
      <div className="flex items-center justify-center mt-4">
        <div className="flex items-center space-x-2 bg-primary/10 px-3 py-1 rounded-full">
          <FiAward className="w-4 h-4 text-primary" />
          <span className="text-sm font-medium text-primary">Mentor</span>
        </div>
      </div>
    </motion.div>
  )

  const StudentCard = ({ student, index }) => (
    <motion.div
      variants={itemVariants}
      className="bg-dark/50 dark:bg-light/5 backdrop-blur-sm rounded-2xl p-6 border border-accent/20 hover:border-accent/40 transition-all duration-300 group"
      whileHover={{ scale: 1.02, y: -5 }}
      transition={{ duration: 0.3 }}
    >
      {/* Avatar */}
      <div className="flex items-center justify-center mb-6">
        <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-accent/30 group-hover:border-accent/60 transition-all duration-300">
          {student.image ? (
            <img 
              src={student.image} 
              alt={student.name}
              className={`w-full h-full object-cover ${student.imagePosition || ''}`}
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-accent/20 to-primary/20 flex items-center justify-center">
              <FiUser className="w-12 h-12 text-accent" />
            </div>
          )}
        </div>
      </div>

      {/* Name */}
      <h3 className="text-xl font-heading font-bold text-dark dark:text-light mb-2 text-center">
        {student.name}
      </h3>

      {/* Role */}
      <p className="text-accent font-medium text-center mb-3">
        {student.role}
      </p>

      {/* One Liner */}
      <p className="text-muted-light dark:text-muted-dark text-sm text-center mb-6 leading-relaxed">
        {student.oneLiner}
      </p>


      {/* Student Badge */}
      <div className="flex items-center justify-center mt-4">
        <div className="flex items-center space-x-2 bg-accent/10 px-3 py-1 rounded-full">
          <FiUsers className="w-4 h-4 text-accent" />
          <span className="text-sm font-medium text-accent">Student Member</span>
        </div>
      </div>
    </motion.div>
  )

  return (
    <div className="min-h-screen pt-24">
      {/* Hero Section */}
      <motion.section
        className="container-width py-8 px-4"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={itemVariants} className="text-center mb-12">
          <h1 className="text-5xl lg:text-7xl font-heading font-black mb-6">
            <span className="gradient-text">Our Team</span>
          </h1>
          <div className="max-w-4xl mx-auto">
            <p className="text-xl lg:text-2xl text-muted-light dark:text-muted-dark leading-relaxed mb-8">
              Meet the brilliant minds behind <strong className="text-primary">CyberClub IITRAM</strong> - 
              our dedicated mentors and passionate student members working together to advance cybersecurity education and research.
            </p>
            <p className="text-lg text-muted-light dark:text-muted-dark leading-relaxed">
              From seasoned faculty mentors to innovative student researchers, our team combines academic excellence 
              with practical expertise to create a thriving cybersecurity community.
            </p>
          </div>
        </motion.div>
      </motion.section>

      {/* Mentors Section */}
      <motion.section 
        className="py-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <div className="container-width">
          <motion.div variants={itemVariants} className="text-center mb-12">
            <div className="flex items-center justify-center space-x-4 mb-6">
              <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center">
                <FiAward className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-4xl lg:text-5xl font-heading font-bold gradient-text">
                Faculty Mentors
              </h2>
            </div>
            <p className="text-xl text-muted-light dark:text-muted-dark max-w-3xl mx-auto">
              Our esteemed faculty mentors bring decades of research experience and industry expertise 
              to guide the next generation of cybersecurity professionals.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mentors.map((mentor, index) => (
              <MentorCard key={index} mentor={mentor} index={index} />
            ))}
          </div>
        </div>
      </motion.section>

      {/* Student Members Section */}
      <motion.section 
        className="bg-gradient-to-b from-accent/5 to-transparent py-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <div className="container-width">
          <motion.div variants={itemVariants} className="text-center mb-12">
            <div className="flex items-center justify-center space-x-4 mb-6">
              <div className="w-12 h-12 bg-accent/20 rounded-xl flex items-center justify-center">
                <FiUsers className="w-6 h-6 text-accent" />
              </div>
              <h2 className="text-4xl lg:text-5xl font-heading font-bold gradient-text">
                Student Members
              </h2>
            </div>
            <p className="text-xl text-muted-light dark:text-muted-dark max-w-3xl mx-auto">
              Our passionate student members are the driving force behind innovation, 
              bringing fresh perspectives and cutting-edge skills to cybersecurity research and development.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
            {students.map((student, index) => (
              <StudentCard key={index} student={student} index={index} />
            ))}
          </div>
        </div>
      </motion.section>

      {/* Join Us Section */}
      <motion.section 
        className="py-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <div className="container-width">
          <motion.div variants={itemVariants} className="text-center">
            <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-8 lg:p-12 border border-primary/20">
              <h3 className="text-3xl lg:text-4xl font-heading font-bold mb-6">
                <span className="gradient-text">Want to Join Our Team?</span>
              </h3>
              <p className="text-xl text-muted-light dark:text-muted-dark mb-8 max-w-2xl mx-auto">
                We're always looking for passionate individuals who want to make a difference in cybersecurity. 
                Whether you're a student, researcher, or industry professional, there's a place for you in our community.
              </p>
              <motion.a
                href="/contact"
                className="inline-flex items-center space-x-2 bg-gradient-to-r from-primary to-accent text-dark font-semibold px-8 py-4 rounded-xl hover:shadow-lg hover:shadow-primary/25 transition-all duration-300"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Get In Touch</span>
                <motion.svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </motion.svg>
              </motion.a>
            </div>
          </motion.div>
        </div>
      </motion.section>
    </div>
  )
}

export default Team
