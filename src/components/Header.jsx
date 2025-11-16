import { motion } from 'framer-motion'
import logo from '../assets/Engagify_logo.png'

const Header = () => {
  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 glass-blur border-b border-gray-800/50"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <nav className="container mx-auto max-w-7xl px-4 py-4 flex items-center justify-between">
        <motion.a
          href="#"
          className="flex items-center gap-3"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <motion.img
            src={logo}
            alt="Engagify Logo"
            className="h-10 md:h-12 w-auto"
            whileHover={{
              filter: 'drop-shadow(0 0 15px rgba(0, 240, 255, 0.6))',
            }}
            transition={{ duration: 0.3 }}
          />
        </motion.a>

        <div className="hidden md:flex items-center gap-8">
          <a
            href="#features"
            className="text-gray-300 hover:text-neon-cyan transition-colors font-medium"
          >
            Features
          </a>
          <a
            href="#countdown"
            className="text-gray-300 hover:text-neon-cyan transition-colors font-medium"
          >
            Launch
          </a>
          <motion.a
            href="#cta"
            className="px-6 py-2 bg-gradient-to-r from-neon-blue to-neon-cyan rounded-full font-semibold text-white text-sm"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get Early Access
          </motion.a>
        </div>
      </nav>
    </motion.header>
  )
}

export default Header

