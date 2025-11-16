import { motion } from 'framer-motion'
import logo from '../assets/engagify _logo.png'

const Footer = () => {
  return (
    <footer className="border-t border-gray-800 py-12 px-4 relative">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.img
              src={logo}
              alt="Engagify Logo"
              className="h-12 md:h-14 w-auto mb-4"
              whileHover={{
                scale: 1.05,
                filter: 'drop-shadow(0 0 15px rgba(0, 240, 255, 0.6))',
              }}
              transition={{ duration: 0.3 }}
            />
            <p className="text-gray-400">
              Building the future of immersive learning and XR experiences.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="text-lg font-semibold mb-4 text-white">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#features" className="text-gray-400 hover:text-neon-cyan transition-colors">Features</a></li>
              <li><a href="#countdown" className="text-gray-400 hover:text-neon-cyan transition-colors">Launch Countdown</a></li>
              <li><a href="#cta" className="text-gray-400 hover:text-neon-cyan transition-colors">Early Access</a></li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="text-lg font-semibold mb-4 text-white">Connect</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-neon-cyan transition-colors">Twitter</a></li>
              <li><a href="#" className="text-gray-400 hover:text-neon-cyan transition-colors">Discord</a></li>
              <li><a href="#" className="text-gray-400 hover:text-neon-cyan transition-colors">Instagram</a></li>
            </ul>
          </motion.div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center">
          <motion.p
            className="text-gray-500"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            © 2025 Engagify. Built for the future.
          </motion.p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

