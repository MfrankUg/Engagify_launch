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
      iconName: 'rocket',
      title: 'No-Code XR Platform',
      description: "Build interactive 3D lessons, VR games, or 360° experiences - from your phone or laptop, no crazy tech skills needed. Super smooth platform inspired by industry leaders.",
      gradient: 'text-neon-blue',
    },
    {
      iconName: 'gamepad',
      title: 'Full VR Compatibility',
      description: "Go fully immersive whenever you're ready - compatible with Oculus, Vive, and all major VR headsets. Or experience it on common devices like your smartphone or PC.",
      gradient: 'text-neon-pink',
    },
    {
      iconName: 'lightning',
      title: 'Create in Minutes',
      description: "Add voiceovers, annotations, interactive quizzes, or embedded videos. Whether you're a creator, teacher, or just curious - explore, learn, and share instantly.",
      gradient: 'text-neon-purple',
    },
    {
      iconName: 'chart',
      title: 'Track Performance',
      description: 'See how people engage with your experiences. Record interactions, track performance metrics, and understand what works best in your immersive content.',
      gradient: 'text-neon-cyan',
    },
    {
      iconName: 'globe',
      title: '3D Worlds & VR Adventures',
      description: 'Step into immersive learning environments. From virtual classrooms to interactive simulations - create experiences that captivate and educate like never before.',
      gradient: 'text-neon-pink',
    },
    {
      iconName: 'sparkles',
      title: 'Anytime, Anywhere',
      description: 'Access your experiences from any device. Share with your community, collaborate with creators, and build the future of immersive education together.',
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
            Imagine building interactive 3D lessons, VR games, or 360° experiences - all from your phone or laptop, no crazy tech skills needed.
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

