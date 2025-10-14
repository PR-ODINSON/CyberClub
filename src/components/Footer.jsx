import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { FiMapPin, FiPhone, FiMail } from 'react-icons/fi'
import { useCursor } from '../hooks/useCursor'
import Logo from './Logo'

/**
 * Footer component with links, social media, and contact info
 */
const Footer = () => {
  const { setHover, removeHover } = useCursor()

  const footerLinks = {
    'Quick Links': [
      { name: 'Home', path: '/' },
      { name: 'About', path: '/about' },
      { name: 'Events', path: '/events' },
      { name: 'Patrons', path: '/patrons' },
      { name: 'Contact', path: '/contact' },
    ],
  }

  const socialLinks = []

  return (
    <footer className="bg-dark-200/50 border-t border-primary/20 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute top-0 right-1/4 w-64 h-64 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="container-width section-padding relative z-10">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <Link
              to="/"
              className="flex items-center space-x-3 mb-6 group"
              onMouseEnter={() => setHover('security')}
              onMouseLeave={removeHover}
            >
              <motion.div
                whileHover={{ scale: 1.05, rotate: 5 }}
                transition={{ type: 'spring', stiffness: 400, damping: 17 }}
              >
                <Logo className="w-12 h-12" animated={false} />
              </motion.div>
              <div>
                <div className="text-xl font-heading font-bold text-primary">
                  CyberClub IITRAM
                </div>
                <div className="text-sm text-muted-dark">
                  Guardians of the Campus Network
                </div>
              </div>
            </Link>
            
            <p className="text-muted-dark mb-6 max-w-md leading-relaxed">
              Elite cybersecurity club dedicated to ethical hacking, digital forensics, 
              and protecting the future of technology. Join us in the fight against cyber threats.
            </p>

            {/* Contact Info */}
            <div className="space-y-3 text-sm">
              <div className="flex items-center space-x-3 text-muted-dark">
                <FiMapPin className="w-4 h-4 text-primary" />
                <span>IITRAM, Ahmedabad</span>
              </div>
              <div className="flex items-center space-x-3 text-muted-dark">
                <FiMail className="w-4 h-4 text-primary" />
                <a
                  href="mailto:prasunchandratripathi@iitram.ac.in"
                  className="hover:text-primary transition-colors"
                  onMouseEnter={() => setHover('contact')}
                  onMouseLeave={removeHover}
                >
                  prasunchandratripathi@iitram.ac.in
                </a>
              </div>
              <div className="flex items-center space-x-3 text-muted-dark">
                <FiPhone className="w-4 h-4 text-primary" />
                <span>+91 9818741307</span>
              </div>
            </div>
          </div>

          {/* Links Sections */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="text-lg font-heading font-semibold text-light mb-6">
                {title}
              </h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.name}>
                    {link.external ? (
                      <a
                        href={link.path}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-dark hover:text-primary transition-colors duration-300"
                        onMouseEnter={() => setHover('external')}
                        onMouseLeave={removeHover}
                      >
                        {link.name}
                      </a>
                    ) : (
                      <Link
                        to={link.path}
                        className="text-muted-dark hover:text-primary transition-colors duration-300"
                        onMouseEnter={() => setHover('code')}
                        onMouseLeave={removeHover}
                      >
                        {link.name}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="border-t border-primary/20 mt-12 pt-8 flex flex-col lg:flex-row justify-between items-center">
          {/* Copyright */}
          <div className="text-muted-dark text-sm mb-4 lg:mb-0">
            © {new Date().getFullYear()} CyberClub IITRAM. All rights reserved.
          </div>

          {/* Social Links */}
          <div className="flex items-center space-x-4">
            {socialLinks.map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-lg bg-dark-300/50 border border-primary/20 text-primary hover:bg-primary/10 hover:border-primary/40 transition-all duration-300"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                onMouseEnter={() => setHover('external')}
                onMouseLeave={removeHover}
                aria-label={social.label}
              >
                <social.icon className="w-5 h-5" />
              </motion.a>
            ))}
          </div>
        </div>

        {/* Additional Links */}
        <div className="border-t border-primary/10 mt-8 pt-6 text-center">
          <div className="flex flex-wrap justify-center items-center space-x-6 text-sm text-muted-dark">
            <Link
              to="/privacy"
              className="hover:text-primary transition-colors"
              onMouseEnter={() => setHover('code')}
              onMouseLeave={removeHover}
            >
              Privacy Policy
            </Link>
            <Link
              to="/terms"
              className="hover:text-primary transition-colors"
              onMouseEnter={() => setHover('code')}
              onMouseLeave={removeHover}
            >
              Terms of Service
            </Link>
            <Link
              to="/code-of-conduct"
              className="hover:text-primary transition-colors"
              onMouseEnter={() => setHover('code')}
              onMouseLeave={removeHover}
            >
              Code of Conduct
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
