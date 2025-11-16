import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import logo from '../assets/Engagify_logo.png'

const Header = ({ onOpenRegistration }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-[100] glass-blur border-b border-gray-800/50"
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
          onClick={closeMenu}
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

        {/* Desktop Navigation */}
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
          <motion.button
            onClick={onOpenRegistration}
            className="px-6 py-2 bg-gradient-to-r from-neon-blue to-neon-cyan rounded-full font-semibold text-white text-sm"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get Early Access
          </motion.button>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5 glass-blur rounded-lg border border-neon-cyan/30 hover:border-neon-cyan transition-colors"
          aria-label="Toggle menu"
        >
          <motion.span
            className="w-6 h-0.5 bg-neon-cyan rounded"
            animate={isMenuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.3 }}
          />
          <motion.span
            className="w-6 h-0.5 bg-neon-cyan rounded"
            animate={isMenuOpen ? { opacity: 0 } : { opacity: 1 }}
            transition={{ duration: 0.3 }}
          />
          <motion.span
            className="w-6 h-0.5 bg-neon-cyan rounded"
            animate={isMenuOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.3 }}
          />
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence mode="wait">
        {isMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeMenu}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[60] md:hidden"
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 h-full w-80 max-w-[85vw] glass-blur border-l border-gray-800/50 z-[70] md:hidden overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-6 pt-20">
                <nav className="flex flex-col gap-6">
                  <motion.a
                    href="#features"
                    onClick={(e) => {
                      e.preventDefault()
                      closeMenu()
                      setTimeout(() => {
                        document.querySelector('#features')?.scrollIntoView({ behavior: 'smooth' })
                      }, 100)
                    }}
                    className="text-xl font-semibold text-gray-300 hover:text-neon-cyan transition-colors py-2 cursor-pointer"
                    whileHover={{ x: 5 }}
                  >
                    Features
                  </motion.a>
                  <motion.a
                    href="#countdown"
                    onClick={(e) => {
                      e.preventDefault()
                      closeMenu()
                      setTimeout(() => {
                        document.querySelector('#countdown')?.scrollIntoView({ behavior: 'smooth' })
                      }, 100)
                    }}
                    className="text-xl font-semibold text-gray-300 hover:text-neon-cyan transition-colors py-2 cursor-pointer"
                    whileHover={{ x: 5 }}
                  >
                    Launch Countdown
                  </motion.a>
                  <motion.button
                    onClick={() => {
                      closeMenu()
                      setTimeout(() => {
                        onOpenRegistration()
                      }, 100)
                    }}
                    className="text-left text-xl font-semibold text-gray-300 hover:text-neon-cyan transition-colors py-2 cursor-pointer"
                    whileHover={{ x: 5 }}
                  >
                    Get Early Access
                  </motion.button>
                  <motion.a
                    href="https://engagify.site"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={closeMenu}
                    className="text-xl font-semibold text-gray-300 hover:text-neon-cyan transition-colors py-2 cursor-pointer"
                    whileHover={{ x: 5 }}
                  >
                    Join Launch Crew
                  </motion.a>
                  <motion.a
                    href="#cta"
                    onClick={(e) => {
                      e.preventDefault()
                      closeMenu()
                      setTimeout(() => {
                        document.querySelector('#cta')?.scrollIntoView({ behavior: 'smooth' })
                      }, 100)
                    }}
                    className="text-xl font-semibold text-gray-300 hover:text-neon-cyan transition-colors py-2 cursor-pointer"
                    whileHover={{ x: 5 }}
                  >
                    Learn More
                  </motion.a>
                </nav>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.header>
  )
}

export default Header

