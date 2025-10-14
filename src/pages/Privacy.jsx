import { motion } from 'framer-motion'
import { Helmet } from 'react-helmet-async'

const Privacy = () => {
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
        <title>Privacy Policy - CyberClub IITRAM</title>
        <meta name="description" content="Privacy Policy for CyberClub IITRAM cybersecurity club. Learn how we collect, use, and protect your personal information." />
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
                <span className="gradient-text">Privacy Policy</span>
              </h1>
              <p className="text-xl text-muted-light dark:text-muted-dark max-w-3xl mx-auto">
                Your privacy is important to us. This policy explains how CyberClub IITRAM 
                collects, uses, and protects your personal information.
              </p>
              <p className="text-sm text-muted-light dark:text-muted-dark mt-4">
                Last updated: October 10, 2025
              </p>
            </motion.div>

            <div className="prose prose-lg dark:prose-invert max-w-none">
              <motion.section variants={itemVariants} className="mb-12">
                <h2 className="text-2xl font-heading font-bold mb-4 gradient-text">
                  Information We Collect
                </h2>
                <div className="bg-surface-light dark:bg-surface-dark rounded-lg p-6 border border-border-light dark:border-border-dark">
                  <h3 className="text-xl font-semibold mb-3 text-text-light dark:text-text-dark">Personal Information</h3>
                  <p className="text-muted-light dark:text-muted-dark mb-4">
                    We may collect the following types of personal information when you interact with our services:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-muted-light dark:text-muted-dark">
                    <li>Name and contact information (email address, phone number)</li>
                    <li>Student ID and academic information (for membership verification)</li>
                    <li>Event registration and attendance data</li>
                    <li>Communication preferences and feedback</li>
                    <li>Technical information (IP address, browser type, device information)</li>
                  </ul>
                </div>
              </motion.section>

              <motion.section variants={itemVariants} className="mb-12">
                <h2 className="text-2xl font-heading font-bold mb-4 gradient-text">
                  How We Use Your Information
                </h2>
                <div className="bg-surface-light dark:bg-surface-dark rounded-lg p-6 border border-border-light dark:border-border-dark">
                  <p className="text-muted-light dark:text-muted-dark mb-4">
                    We use your personal information for the following purposes:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-muted-light dark:text-muted-dark">
                    <li>Processing membership applications and managing club activities</li>
                    <li>Organizing and managing events, workshops, and competitions</li>
                    <li>Communicating important updates and announcements</li>
                    <li>Improving our services and user experience</li>
                    <li>Ensuring security and preventing unauthorized access</li>
                    <li>Complying with legal obligations and university policies</li>
                  </ul>
                </div>
              </motion.section>

              <motion.section variants={itemVariants} className="mb-12">
                <h2 className="text-2xl font-heading font-bold mb-4 gradient-text">
                  Information Sharing and Disclosure
                </h2>
                <div className="bg-surface-light dark:bg-surface-dark rounded-lg p-6 border border-border-light dark:border-border-dark">
                  <p className="text-muted-light dark:text-muted-dark mb-4">
                    We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following circumstances:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-muted-light dark:text-muted-dark">
                    <li>With university administration for academic and security purposes</li>
                    <li>With event partners and sponsors (with your explicit consent)</li>
                    <li>When required by law or to protect our rights and safety</li>
                    <li>With service providers who assist in our operations (under strict confidentiality agreements)</li>
                  </ul>
                </div>
              </motion.section>

              <motion.section variants={itemVariants} className="mb-12">
                <h2 className="text-2xl font-heading font-bold mb-4 gradient-text">
                  Data Security
                </h2>
                <div className="bg-surface-light dark:bg-surface-dark rounded-lg p-6 border border-border-light dark:border-border-dark">
                  <p className="text-muted-light dark:text-muted-dark mb-4">
                    We implement appropriate technical and organizational measures to protect your personal information:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-muted-light dark:text-muted-dark">
                    <li>Encryption of sensitive data in transit and at rest</li>
                    <li>Regular security audits and vulnerability assessments</li>
                    <li>Access controls and authentication mechanisms</li>
                    <li>Regular backup and disaster recovery procedures</li>
                    <li>Staff training on data protection and privacy practices</li>
                  </ul>
                </div>
              </motion.section>

              <motion.section variants={itemVariants} className="mb-12">
                <h2 className="text-2xl font-heading font-bold mb-4 gradient-text">
                  Your Rights
                </h2>
                <div className="bg-surface-light dark:bg-surface-dark rounded-lg p-6 border border-border-light dark:border-border-dark">
                  <p className="text-muted-light dark:text-muted-dark mb-4">
                    You have the following rights regarding your personal information:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-muted-light dark:text-muted-dark">
                    <li><strong>Access:</strong> Request a copy of the personal information we hold about you</li>
                    <li><strong>Correction:</strong> Request correction of inaccurate or incomplete information</li>
                    <li><strong>Deletion:</strong> Request deletion of your personal information (subject to legal requirements)</li>
                    <li><strong>Portability:</strong> Request transfer of your data to another organization</li>
                    <li><strong>Objection:</strong> Object to certain types of processing of your information</li>
                    <li><strong>Withdrawal:</strong> Withdraw consent for data processing where applicable</li>
                  </ul>
                </div>
              </motion.section>

              <motion.section variants={itemVariants} className="mb-12">
                <h2 className="text-2xl font-heading font-bold mb-4 gradient-text">
                  Cookies and Tracking
                </h2>
                <div className="bg-surface-light dark:bg-surface-dark rounded-lg p-6 border border-border-light dark:border-border-dark">
                  <p className="text-muted-light dark:text-muted-dark mb-4">
                    Our website uses cookies and similar technologies to enhance your experience:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-muted-light dark:text-muted-dark">
                    <li><strong>Essential Cookies:</strong> Required for basic website functionality</li>
                    <li><strong>Analytics Cookies:</strong> Help us understand how visitors use our website</li>
                    <li><strong>Preference Cookies:</strong> Remember your settings and preferences</li>
                  </ul>
                  <p className="text-muted-light dark:text-muted-dark mt-4">
                    You can control cookie settings through your browser preferences.
                  </p>
                </div>
              </motion.section>

              <motion.section variants={itemVariants} className="mb-12">
                <h2 className="text-2xl font-heading font-bold mb-4 gradient-text">
                  Contact Us
                </h2>
                <div className="bg-surface-light dark:bg-surface-dark rounded-lg p-6 border border-border-light dark:border-border-dark">
                  <p className="text-muted-light dark:text-muted-dark mb-4">
                    If you have any questions about this Privacy Policy or wish to exercise your rights, please contact us:
                  </p>
                  <div className="space-y-2 text-muted-light dark:text-muted-dark">
                    <p><strong>Email:</strong> privacy@zero-protocol.edu</p>
                    <p><strong>Address:</strong> Computer Science Building, Room 301</p>
                    <p><strong>Phone:</strong> +1 (555) 123-4567</p>
                  </div>
                </div>
              </motion.section>

              <motion.section variants={itemVariants}>
                <h2 className="text-2xl font-heading font-bold mb-4 gradient-text">
                  Changes to This Policy
                </h2>
                <div className="bg-surface-light dark:bg-surface-dark rounded-lg p-6 border border-border-light dark:border-border-dark">
                  <p className="text-muted-light dark:text-muted-dark">
                    We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. 
                    We will notify you of any material changes by posting the updated policy on our website and updating the 
                    "Last updated" date. Your continued use of our services after such changes constitutes acceptance of the updated policy.
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

export default Privacy
