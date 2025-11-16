import { motion } from 'framer-motion'
import Icon from './Icon'

const FeatureCard = ({ iconName, title, description, delay, gradient }) => {
  return (
    <motion.div
      className="glass-blur rounded-3xl p-8 h-full hover:scale-105 transition-transform duration-300 border border-transparent hover:border-neon-cyan"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ 
        boxShadow: '0 0 40px rgba(0, 240, 255, 0.3)',
        y: -10,
      }}
    >
      <div className={`mb-6 inline-block ${gradient}`}>
        <Icon name={iconName} className="w-16 h-16" />
      </div>
      <h3 className="text-2xl font-bold mb-4 text-white">{title}</h3>
      <p className="text-gray-300 leading-relaxed">{description}</p>
    </motion.div>
  )
}

const Features = () => {
  const features = [
    {
      iconName: 'sparkles',
      title: 'Interactive 3D Models',
      description: 'Bring complex concepts to life with detailed, manipulable 3D objects. Students can rotate, zoom, and explore structures from all angles—making abstract ideas tangible and easier to understand.',
      gradient: 'text-neon-blue',
    },
    {
      iconName: 'globe',
      title: 'Immersive Virtual Tours',
      description: 'Travel anywhere without leaving the classroom. Engagify allows teachers to create or access virtual tours of museums, cultural sites, natural environments, and historical landmarks, enabling fully immersive exploration.',
      gradient: 'text-neon-pink',
    },
    {
      iconName: 'lightning',
      title: 'Augmented Reality (AR) Learning',
      description: 'Blend digital content seamlessly with the real world. Using any smartphone or tablet, students can project 3D models, diagrams, and scenes into their physical environment, creating engaging, hands-on learning moments.',
      gradient: 'text-neon-purple',
    },
    {
      iconName: 'rocket',
      title: 'No-Code Lesson Builder',
      description: 'Design immersive lessons in minutes—no technical skills required. Educators can effortlessly assemble lessons, add 3D models, integrate videos, and organize interactive content aligned to their curriculum.',
      gradient: 'text-neon-cyan',
    },
    {
      iconName: 'chart',
      title: 'Free & Accessible for All Schools',
      description: "Quality education shouldn't depend on budget limitations. Engagify is free to use, ensuring equal access to immersive learning for schools with limited infrastructure or resources.",
      gradient: 'text-neon-pink',
    },
    {
      iconName: 'gamepad',
      title: 'Cross-Device Compatibility',
      description: 'Experience Engagify anywhere, on any device. Whether using a smartphone, tablet, laptop, or interactive board, learners can fully engage with 3D and AR content without the need for specialized hardware.',
      gradient: 'text-neon-blue',
    },
  ]

  return (
    <section id="features" className="py-20 md:py-32 px-4 relative">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6">
            <span className="text-gradient neon-text">The Future is Here</span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
            Imagine creating interactive 3D lessons, VR games, or 360° experiences - all from your phone or laptop, no crazy tech skills needed.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              iconName={feature.iconName}
              title={feature.title}
              description={feature.description}
              delay={index * 0.1}
              gradient={feature.gradient}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features

