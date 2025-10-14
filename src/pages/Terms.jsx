import { motion } from 'framer-motion'
import { Helmet } from 'react-helmet-async'

const Terms = () => {
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

  return (
    <>
      <Helmet>
        <title>Terms of Service - CyberClub IITRAM</title>
        <meta name="description" content="Terms of Service for CyberClub IITRAM cybersecurity club. Learn about the rules and guidelines for using our services." />
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
                <span className="gradient-text">Terms of Service</span>
              </h1>
              <p className="text-xl text-muted-light dark:text-muted-dark max-w-3xl mx-auto">
                These terms govern your use of CyberClub IITRAM services and participation 
                in our cybersecurity community.
              </p>
              <p className="text-sm text-muted-light dark:text-muted-dark mt-4">
                Last updated: October 10, 2025
              </p>
            </motion.div>

            <div className="prose prose-lg dark:prose-invert max-w-none">
              <motion.section variants={itemVariants} className="mb-12">
                <h2 className="text-2xl font-heading font-bold mb-4 gradient-text">
                  Acceptance of Terms
                </h2>
                <div className="bg-surface-light dark:bg-surface-dark rounded-lg p-6 border border-border-light dark:border-border-dark">
                  <p className="text-muted-light dark:text-muted-dark">
                    By accessing or using CyberClub IITRAM website, services, or participating in our activities, 
                    you agree to be bound by these Terms of Service and our Privacy Policy. If you do not agree 
                    to these terms, please do not use our services or participate in our activities.
                  </p>
                </div>
              </motion.section>

              <motion.section variants={itemVariants} className="mb-12">
                <h2 className="text-2xl font-heading font-bold mb-4 gradient-text">
                  Membership and Eligibility
                </h2>
                <div className="bg-surface-light dark:bg-surface-dark rounded-lg p-6 border border-border-light dark:border-border-dark">
                  <h3 className="text-xl font-semibold mb-3 text-text-light dark:text-text-dark">Eligibility Requirements</h3>
                  <ul className="list-disc list-inside space-y-2 text-muted-light dark:text-muted-dark mb-4">
                    <li>Must be a current student, faculty, or staff member of the university</li>
                    <li>Must be in good academic and disciplinary standing</li>
                    <li>Must complete the membership application process</li>
                    <li>Must agree to abide by our Code of Conduct</li>
                  </ul>
                  
                  <h3 className="text-xl font-semibold mb-3 text-text-light dark:text-text-dark">Membership Responsibilities</h3>
                  <ul className="list-disc list-inside space-y-2 text-muted-light dark:text-muted-dark">
                    <li>Maintain active participation in club activities</li>
                    <li>Respect fellow members and club property</li>
                    <li>Follow all ethical hacking and cybersecurity guidelines</li>
                    <li>Report any security vulnerabilities responsibly</li>
                  </ul>
                </div>
              </motion.section>

              <motion.section variants={itemVariants} className="mb-12">
                <h2 className="text-2xl font-heading font-bold mb-4 gradient-text">
                  Acceptable Use Policy
                </h2>
                <div className="bg-surface-light dark:bg-surface-dark rounded-lg p-6 border border-border-light dark:border-border-dark">
                  <h3 className="text-xl font-semibold mb-3 text-text-light dark:text-text-dark">Permitted Activities</h3>
                  <ul className="list-disc list-inside space-y-2 text-muted-light dark:text-muted-dark mb-4">
                    <li>Participating in authorized educational activities and workshops</li>
                    <li>Engaging in ethical hacking within designated environments</li>
                    <li>Collaborating on approved research projects</li>
                    <li>Competing in sanctioned cybersecurity competitions</li>
                  </ul>

                  <h3 className="text-xl font-semibold mb-3 text-text-light dark:text-text-dark">Prohibited Activities</h3>
                  <ul className="list-disc list-inside space-y-2 text-muted-light dark:text-muted-dark">
                    <li>Any form of malicious hacking or unauthorized access</li>
                    <li>Sharing or distributing malware, exploits, or harmful code</li>
                    <li>Attempting to compromise university or external systems without permission</li>
                    <li>Using club resources for commercial or illegal purposes</li>
                    <li>Harassment, discrimination, or inappropriate behavior</li>
                    <li>Violating any local, state, or federal laws</li>
                  </ul>
                </div>
              </motion.section>

              <motion.section variants={itemVariants} className="mb-12">
                <h2 className="text-2xl font-heading font-bold mb-4 gradient-text">
                  Intellectual Property
                </h2>
                <div className="bg-surface-light dark:bg-surface-dark rounded-lg p-6 border border-border-light dark:border-border-dark">
                  <h3 className="text-xl font-semibold mb-3 text-text-light dark:text-text-dark">Club Content</h3>
                  <p className="text-muted-light dark:text-muted-dark mb-4">
                    All content provided by CyberClub IITRAM, including but not limited to text, graphics, logos, 
                    images, software, and educational materials, is owned by the club or its licensors and is 
                    protected by copyright and other intellectual property laws.
                  </p>

                  <h3 className="text-xl font-semibold mb-3 text-text-light dark:text-text-dark">User Content</h3>
                  <p className="text-muted-light dark:text-muted-dark mb-4">
                    By submitting content to our platforms or participating in our activities, you grant CyberClub IITRAM 
                    a non-exclusive, royalty-free license to use, modify, and distribute your contributions for 
                    educational and promotional purposes.
                  </p>

                  <h3 className="text-xl font-semibold mb-3 text-text-light dark:text-text-dark">Research and Projects</h3>
                  <p className="text-muted-light dark:text-muted-dark">
                    Intellectual property rights for collaborative research projects will be determined on a 
                    case-by-case basis and documented in separate agreements.
                  </p>
                </div>
              </motion.section>

              <motion.section variants={itemVariants} className="mb-12">
                <h2 className="text-2xl font-heading font-bold mb-4 gradient-text">
                  Events and Activities
                </h2>
                <div className="bg-surface-light dark:bg-surface-dark rounded-lg p-6 border border-border-light dark:border-border-dark">
                  <h3 className="text-xl font-semibold mb-3 text-text-light dark:text-text-dark">Registration and Attendance</h3>
                  <ul className="list-disc list-inside space-y-2 text-muted-light dark:text-muted-dark mb-4">
                    <li>Event registration may be required and is subject to availability</li>
                    <li>Participants must arrive on time and follow event guidelines</li>
                    <li>The club reserves the right to refuse entry or remove disruptive participants</li>
                  </ul>

                  <h3 className="text-xl font-semibold mb-3 text-text-light dark:text-text-dark">Competitions and CTFs</h3>
                  <ul className="list-disc list-inside space-y-2 text-muted-light dark:text-muted-dark">
                    <li>All competition rules must be followed strictly</li>
                    <li>Cheating or unsportsmanlike conduct will result in disqualification</li>
                    <li>Team formation and participation guidelines apply</li>
                    <li>External competitions represent the university and club</li>
                  </ul>
                </div>
              </motion.section>

              <motion.section variants={itemVariants} className="mb-12">
                <h2 className="text-2xl font-heading font-bold mb-4 gradient-text">
                  Liability and Disclaimers
                </h2>
                <div className="bg-surface-light dark:bg-surface-dark rounded-lg p-6 border border-border-light dark:border-border-dark">
                  <h3 className="text-xl font-semibold mb-3 text-text-light dark:text-text-dark">Limitation of Liability</h3>
                  <p className="text-muted-light dark:text-muted-dark mb-4">
                    CyberClub IITRAM and its officers, advisors, and members shall not be liable for any direct, 
                    indirect, incidental, special, or consequential damages arising from your participation in 
                    club activities or use of our services.
                  </p>

                  <h3 className="text-xl font-semibold mb-3 text-text-light dark:text-text-dark">Educational Purpose</h3>
                  <p className="text-muted-light dark:text-muted-dark mb-4">
                    All activities and materials are provided for educational purposes only. Participants are 
                    responsible for using knowledge and skills ethically and legally.
                  </p>

                  <h3 className="text-xl font-semibold mb-3 text-text-light dark:text-text-dark">Third-Party Services</h3>
                  <p className="text-muted-light dark:text-muted-dark">
                    We may use third-party services and platforms. We are not responsible for the availability, 
                    content, or practices of these external services.
                  </p>
                </div>
              </motion.section>

              <motion.section variants={itemVariants} className="mb-12">
                <h2 className="text-2xl font-heading font-bold mb-4 gradient-text">
                  Termination and Suspension
                </h2>
                <div className="bg-surface-light dark:bg-surface-dark rounded-lg p-6 border border-border-light dark:border-border-dark">
                  <h3 className="text-xl font-semibold mb-3 text-text-light dark:text-text-dark">Grounds for Termination</h3>
                  <ul className="list-disc list-inside space-y-2 text-muted-light dark:text-muted-dark mb-4">
                    <li>Violation of these Terms of Service or Code of Conduct</li>
                    <li>Engaging in illegal or unethical activities</li>
                    <li>Failure to maintain eligibility requirements</li>
                    <li>Disruptive or harmful behavior towards the community</li>
                  </ul>

                  <h3 className="text-xl font-semibold mb-3 text-text-light dark:text-text-dark">Process</h3>
                  <p className="text-muted-light dark:text-muted-dark">
                    Termination decisions will be made by the club leadership in consultation with faculty advisors. 
                    Members have the right to appeal decisions through the established grievance process.
                  </p>
                </div>
              </motion.section>

              <motion.section variants={itemVariants} className="mb-12">
                <h2 className="text-2xl font-heading font-bold mb-4 gradient-text">
                  Contact Information
                </h2>
                <div className="bg-surface-light dark:bg-surface-dark rounded-lg p-6 border border-border-light dark:border-border-dark">
                  <p className="text-muted-light dark:text-muted-dark mb-4">
                    For questions about these Terms of Service or to report violations, please contact us:
                  </p>
                  <div className="space-y-2 text-muted-light dark:text-muted-dark">
                    <p><strong>Email:</strong> legal@zero-protocol.edu</p>
                    <p><strong>Address:</strong> Computer Science Building, Room 301</p>
                    <p><strong>Phone:</strong> +1 (555) 123-4567</p>
                  </div>
                </div>
              </motion.section>

              <motion.section variants={itemVariants}>
                <h2 className="text-2xl font-heading font-bold mb-4 gradient-text">
                  Changes to Terms
                </h2>
                <div className="bg-surface-light dark:bg-surface-dark rounded-lg p-6 border border-border-light dark:border-border-dark">
                  <p className="text-muted-light dark:text-muted-dark">
                    We reserve the right to modify these Terms of Service at any time. Material changes will be 
                    communicated to members via email and posted on our website. Continued participation in club 
                    activities after changes constitutes acceptance of the updated terms.
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

export default Terms
