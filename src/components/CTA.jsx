import { motion } from 'framer-motion'

const CTA = () => {
  return (
    <section id="cta" className="py-20 md:py-32 px-4 relative overflow-hidden">
      {/* Animated gradient background */}
      <motion.div
        className="absolute inset-0 opacity-30"
        animate={{
          background: [
            'radial-gradient(circle at 20% 50%, rgba(0, 240, 255, 0.3) 0%, transparent 50%)',
            'radial-gradient(circle at 80% 50%, rgba(255, 0, 245, 0.3) 0%, transparent 50%)',
            'radial-gradient(circle at 50% 80%, rgba(176, 38, 255, 0.3) 0%, transparent 50%)',
            'radial-gradient(circle at 20% 50%, rgba(0, 240, 255, 0.3) 0%, transparent 50%)',
          ],
        }}
        transition={{ duration: 10, repeat: Infinity }}
      />

      <div className="container mx-auto max-w-5xl text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6">
            <span className="text-gradient neon-text block mb-4">
              Ready for the Future?
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto">
            Be the first to create and explore immersive experiences that will change how we learn, create, and connect.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <motion.a
              href="https://engagify.site"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-5 bg-gradient-to-r from-neon-blue via-neon-pink to-neon-purple rounded-full font-bold text-xl text-white shadow-2xl neon-border relative overflow-hidden group inline-block"
            >
              <span className="relative z-10 flex items-center gap-2">
                Get Early Access
                <motion.span
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1, repeat: Infinity }}
                >
                  →
                </motion.span>
              </span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-neon-purple via-neon-pink to-neon-blue"
                initial={{ x: '-100%' }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.3 }}
              />
            </motion.a>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-5 glass-blur rounded-full font-bold text-xl text-white border-2 border-neon-cyan hover:border-neon-blue transition-all duration-300"
            >
              Join the Launch Crew
            </motion.button>
          </div>

          <motion.p
            className="mt-8 text-gray-400 text-lg"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            Launching December 2nd, 2025 • Don't miss out!
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}

export default CTA

