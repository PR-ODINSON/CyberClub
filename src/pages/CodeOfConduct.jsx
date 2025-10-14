import { motion } from 'framer-motion'
import { Helmet } from 'react-helmet-async'
import { FiShield, FiUsers, FiHeart, FiEye } from 'react-icons/fi'

const CodeOfConduct = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  }

  const principles = [
    {
      icon: FiShield,
      title: 'Ethical Security',
      description: 'We commit to using our cybersecurity knowledge responsibly and ethically, always seeking to protect rather than harm.'
    },
    {
      icon: FiUsers,
      title: 'Inclusive Community',
      description: 'We welcome and respect all members regardless of background, experience level, or identity.'
    },
    {
      icon: FiHeart,
      title: 'Collaborative Learning',
      description: 'We support each other\'s growth through knowledge sharing, mentorship, and constructive feedback.'
    },
    {
      icon: FiEye,
      title: 'Transparency',
      description: 'We maintain open communication and accountability in all our activities and decisions.'
    }
  ]

  return (
    <>
      <Helmet>
        <title>Code of Conduct - CyberClub IITRAM</title>
        <meta name="description" content="Code of Conduct for CyberClub IITRAM cybersecurity club. Learn about our community standards and behavioral expectations." />
      </Helmet>
      
      <div className="min-h-screen pt-24 pb-16">
        <div className="container-width section-padding">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="max-w-4xl mx-auto"
          >
            <motion.div variants={itemVariants} className="text-center mb-16">
              <h1 className="text-4xl lg:text-6xl font-heading font-bold mb-6">
                <span className="gradient-text">Code of Conduct</span>
              </h1>
              <p className="text-xl text-muted-light dark:text-muted-dark max-w-3xl mx-auto">
                Our commitment to creating a safe, inclusive, and ethical cybersecurity community 
                where everyone can learn and grow together.
              </p>
              <p className="text-sm text-muted-light dark:text-muted-dark mt-4">
                Last updated: October 10, 2025
              </p>
            </motion.div>

            {/* Core Principles */}
            <motion.section variants={itemVariants} className="mb-16">
              <h2 className="text-3xl font-heading font-bold mb-8 text-center gradient-text">
                Our Core Principles
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                {principles.map((principle, index) => (
                  <motion.div
                    key={principle.title}
                    variants={itemVariants}
                    className="bg-surface-light dark:bg-surface-dark rounded-lg p-6 border border-border-light dark:border-border-dark"
                  >
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <principle.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold mb-2 text-text-light dark:text-text-dark">
                          {principle.title}
                        </h3>
                        <p className="text-muted-light dark:text-muted-dark">
                          {principle.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.section>

            <div className="prose prose-lg dark:prose-invert max-w-none">
              <motion.section variants={itemVariants} className="mb-12">
                <h2 className="text-2xl font-heading font-bold mb-4 gradient-text">
                  Expected Behavior
                </h2>
                <div className="bg-surface-light dark:bg-surface-dark rounded-lg p-6 border border-border-light dark:border-border-dark">
                  <p className="text-muted-light dark:text-muted-dark mb-4">
                    All members of CyberClub IITRAM are expected to:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-muted-light dark:text-muted-dark">
                    <li><strong>Be Respectful:</strong> Treat all community members with dignity and respect, regardless of their background, experience level, or opinions</li>
                    <li><strong>Be Inclusive:</strong> Welcome newcomers and help create an environment where everyone feels valued and included</li>
                    <li><strong>Be Collaborative:</strong> Share knowledge freely and work together to achieve common goals</li>
                    <li><strong>Be Ethical:</strong> Use cybersecurity knowledge and skills only for legitimate, legal, and ethical purposes</li>
                    <li><strong>Be Professional:</strong> Maintain professional standards in all interactions and communications</li>
                    <li><strong>Be Responsible:</strong> Take ownership of your actions and their impact on the community</li>
                    <li><strong>Be Constructive:</strong> Provide helpful feedback and engage in productive discussions</li>
                  </ul>
                </div>
              </motion.section>

              <motion.section variants={itemVariants} className="mb-12">
                <h2 className="text-2xl font-heading font-bold mb-4 gradient-text">
                  Unacceptable Behavior
                </h2>
                <div className="bg-surface-light dark:bg-surface-dark rounded-lg p-6 border border-border-light dark:border-border-dark">
                  <p className="text-muted-light dark:text-muted-dark mb-4">
                    The following behaviors are considered unacceptable and will not be tolerated:
                  </p>
                  
                  <h3 className="text-xl font-semibold mb-3 text-text-light dark:text-text-dark">Harassment and Discrimination</h3>
                  <ul className="list-disc list-inside space-y-2 text-muted-light dark:text-muted-dark mb-4">
                    <li>Offensive comments related to gender, sexual orientation, race, religion, disability, or other personal characteristics</li>
                    <li>Deliberate intimidation, stalking, or following</li>
                    <li>Unwelcome sexual attention or inappropriate physical contact</li>
                    <li>Sustained disruption of talks, events, or online discussions</li>
                  </ul>

                  <h3 className="text-xl font-semibold mb-3 text-text-light dark:text-text-dark">Unethical Technical Conduct</h3>
                  <ul className="list-disc list-inside space-y-2 text-muted-light dark:text-muted-dark mb-4">
                    <li>Unauthorized access to systems, networks, or data</li>
                    <li>Malicious hacking or cyber attacks</li>
                    <li>Distribution of malware, exploits, or harmful code</li>
                    <li>Violation of computer crime laws or university policies</li>
                    <li>Using club resources for illegal or commercial purposes</li>
                  </ul>

                  <h3 className="text-xl font-semibold mb-3 text-text-light dark:text-text-dark">Disruptive Behavior</h3>
                  <ul className="list-disc list-inside space-y-2 text-muted-light dark:text-muted-dark">
                    <li>Trolling, insulting, or derogatory comments</li>
                    <li>Public or private harassment</li>
                    <li>Publishing others' private information without consent</li>
                    <li>Advocating for or encouraging any of the above behaviors</li>
                  </ul>
                </div>
              </motion.section>

              <motion.section variants={itemVariants} className="mb-12">
                <h2 className="text-2xl font-heading font-bold mb-4 gradient-text">
                  Ethical Hacking Guidelines
                </h2>
                <div className="bg-surface-light dark:bg-surface-dark rounded-lg p-6 border border-border-light dark:border-border-dark">
                  <p className="text-muted-light dark:text-muted-dark mb-4">
                    As cybersecurity professionals in training, we adhere to strict ethical guidelines:
                  </p>
                  
                  <h3 className="text-xl font-semibold mb-3 text-text-light dark:text-text-dark">Authorization and Consent</h3>
                  <ul className="list-disc list-inside space-y-2 text-muted-light dark:text-muted-dark mb-4">
                    <li>Only test systems you own or have explicit written permission to test</li>
                    <li>Respect the scope and limitations of any testing authorization</li>
                    <li>Never exceed the boundaries of permitted activities</li>
                  </ul>

                  <h3 className="text-xl font-semibold mb-3 text-text-light dark:text-text-dark">Responsible Disclosure</h3>
                  <ul className="list-disc list-inside space-y-2 text-muted-light dark:text-muted-dark mb-4">
                    <li>Report vulnerabilities to the appropriate parties promptly</li>
                    <li>Allow reasonable time for fixes before public disclosure</li>
                    <li>Do not exploit vulnerabilities for personal gain</li>
                  </ul>

                  <h3 className="text-xl font-semibold mb-3 text-text-light dark:text-text-dark">Educational Purpose</h3>
                  <ul className="list-disc list-inside space-y-2 text-muted-light dark:text-muted-dark">
                    <li>Use hacking skills only for learning and legitimate security testing</li>
                    <li>Share knowledge to improve overall security, not to cause harm</li>
                    <li>Mentor others in ethical practices and responsible disclosure</li>
                  </ul>
                </div>
              </motion.section>

              <motion.section variants={itemVariants} className="mb-12">
                <h2 className="text-2xl font-heading font-bold mb-4 gradient-text">
                  Reporting and Enforcement
                </h2>
                <div className="bg-surface-light dark:bg-surface-dark rounded-lg p-6 border border-border-light dark:border-border-dark">
                  <h3 className="text-xl font-semibold mb-3 text-text-light dark:text-text-dark">How to Report</h3>
                  <p className="text-muted-light dark:text-muted-dark mb-4">
                    If you experience or witness behavior that violates this Code of Conduct, please report it immediately:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-muted-light dark:text-muted-dark mb-4">
                    <li><strong>Email:</strong> conduct@zero-protocol.edu</li>
                    <li><strong>In Person:</strong> Speak with any club officer or faculty advisor</li>
                    <li><strong>Anonymous:</strong> Use our anonymous reporting form on the website</li>
                    <li><strong>Emergency:</strong> Contact campus security or local authorities for immediate threats</li>
                  </ul>

                  <h3 className="text-xl font-semibold mb-3 text-text-light dark:text-text-dark">Investigation Process</h3>
                  <ul className="list-disc list-inside space-y-2 text-muted-light dark:text-muted-dark mb-4">
                    <li>All reports will be taken seriously and investigated promptly</li>
                    <li>Investigations will be conducted fairly and confidentially</li>
                    <li>Both parties will have the opportunity to present their perspective</li>
                    <li>Decisions will be made by club leadership in consultation with faculty advisors</li>
                  </ul>

                  <h3 className="text-xl font-semibold mb-3 text-text-light dark:text-text-dark">Consequences</h3>
                  <p className="text-muted-light dark:text-muted-dark mb-2">
                    Violations may result in:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-muted-light dark:text-muted-dark">
                    <li>Warning and required training</li>
                    <li>Temporary suspension from activities</li>
                    <li>Permanent removal from the club</li>
                    <li>Reporting to university administration</li>
                    <li>Involvement of law enforcement for illegal activities</li>
                  </ul>
                </div>
              </motion.section>

              <motion.section variants={itemVariants} className="mb-12">
                <h2 className="text-2xl font-heading font-bold mb-4 gradient-text">
                  Support and Resources
                </h2>
                <div className="bg-surface-light dark:bg-surface-dark rounded-lg p-6 border border-border-light dark:border-border-dark">
                  <p className="text-muted-light dark:text-muted-dark mb-4">
                    We are committed to supporting all members of our community:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-muted-light dark:text-muted-dark">
                    <li><strong>Mentorship Program:</strong> Pairing experienced members with newcomers</li>
                    <li><strong>Counseling Services:</strong> University counseling and psychological services</li>
                    <li><strong>Academic Support:</strong> Study groups and academic assistance</li>
                    <li><strong>Diversity and Inclusion:</strong> Programs to promote diversity in cybersecurity</li>
                    <li><strong>Career Guidance:</strong> Professional development and career counseling</li>
                  </ul>
                </div>
              </motion.section>

              <motion.section variants={itemVariants}>
                <h2 className="text-2xl font-heading font-bold mb-4 gradient-text">
                  Acknowledgment and Agreement
                </h2>
                <div className="bg-surface-light dark:bg-surface-dark rounded-lg p-6 border border-border-light dark:border-border-dark">
                  <p className="text-muted-light dark:text-muted-dark mb-4">
                    By participating in CyberClub IITRAM activities, you acknowledge that you have read, 
                    understood, and agree to abide by this Code of Conduct. This code applies to all 
                    club-related activities, both online and offline.
                  </p>
                  <p className="text-muted-light dark:text-muted-dark">
                    We reserve the right to update this Code of Conduct as needed. All members will be 
                    notified of significant changes, and continued participation constitutes acceptance 
                    of the updated code.
                  </p>
                </div>
              </motion.section>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  )
}

export default CodeOfConduct
