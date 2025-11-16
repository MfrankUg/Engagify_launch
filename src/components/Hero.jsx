import { motion } from 'framer-motion'
import { useRef } from 'react'

const FloatingShape = ({ delay, position, size, color }) => {
  return (
    <motion.div
      className="absolute rounded-full blur-xl opacity-30"
      style={{
        width: size,
        height: size,
        left: position.x,
        top: position.y,
        background: `radial-gradient(circle, ${color} 0%, transparent 70%)`,
      }}
      animate={{
        y: [0, -50, 0],
        x: [0, 30, 0],
        scale: [1, 1.3, 1],
        rotate: [0, 180, 360],
      }}
      transition={{
        duration: 8,
        repeat: Infinity,
        delay,
        ease: 'easeInOut',
      }}
    />
  )
}

const Hero = () => {
  const containerRef = useRef(null)

  return (
    <section ref={containerRef} className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 pt-32 pb-32">
      {/* 3D Floating Shapes */}
      <FloatingShape
        delay={0}
        position={{ x: '10%', y: '20%' }}
        size={300}
        color="#00F0FF"
      />
      <FloatingShape
        delay={1}
        position={{ x: '80%', y: '30%' }}
        size={250}
        color="#FF00F5"
      />
      <FloatingShape
        delay={2}
        position={{ x: '50%', y: '70%' }}
        size={200}
        color="#B026FF"
      />
      <FloatingShape
        delay={1.5}
        position={{ x: '20%', y: '60%' }}
        size={180}
        color="#00FFD1"
      />

      <div className="container mx-auto max-w-6xl text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.h1
            className="text-5xl md:text-7xl lg:text-8xl font-display font-bold mb-6 leading-tight"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <span className="text-white block">
              <motion.span
                className="inline-block"
                animate={{ 
                  textShadow: [
                    '0 0 20px rgba(0, 240, 255, 0.5)',
                    '0 0 40px rgba(255, 0, 245, 0.8)',
                    '0 0 20px rgba(0, 240, 255, 0.5)',
                  ]
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                Engagify Drops
              </motion.span>
            </span>
            <span className="text-gradient block text-6xl md:text-8xl lg:text-9xl mt-4">
              2nd December!
            </span>
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl lg:text-3xl text-white max-w-4xl mx-auto mb-12 leading-relaxed font-light"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Say goodbye to boring classrooms and screens. With Engagify, you&apos;re stepping into 3D worlds, VR adventures, and next-level immersive learning - anytime, anywhere.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <motion.a
              href="https://engagify.site"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-neon-blue via-neon-pink to-neon-purple rounded-full font-bold text-lg text-white shadow-lg neon-border relative overflow-hidden group inline-block"
            >
              <span className="relative z-10">Get Early Access</span>
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
              className="px-8 py-4 glass-blur rounded-full font-bold text-lg text-white border-2 border-neon-cyan hover:border-neon-blue transition-all duration-300"
            >
              Join the Launch Crew
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero

