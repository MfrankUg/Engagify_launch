import { useState, useEffect, memo } from 'react'
import { motion } from 'framer-motion'

const TimeUnit = memo(({ value, label, isBlinking = false }) => {
    const displayValue = String(value).padStart(2, '0')
    
    if (isBlinking) {
      return (
        <motion.div
          className="glass-blur rounded-2xl p-4 md:p-6 lg:p-8 text-center min-w-[80px] md:min-w-[100px] lg:min-w-[120px]"
          whileHover={{ scale: 1.05, y: -3 }}
          initial={{ opacity: 1, y: 0 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <motion.div
            key={value}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gradient countdown-text mb-2"
          >
            {displayValue}
          </motion.div>
          <div className="text-xs md:text-sm lg:text-base text-gray-400 uppercase tracking-wider font-semibold">
            {label}
          </div>
        </motion.div>
      )
    }
    
    return (
      <div
        className="glass-blur rounded-2xl p-4 md:p-6 lg:p-8 text-center min-w-[80px] md:min-w-[100px] lg:min-w-[120px] transition-transform hover:scale-105 hover:-translate-y-1"
      >
        <div className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gradient countdown-text mb-2">
          {displayValue}
        </div>
        <div className="text-xs md:text-sm lg:text-base text-gray-400 uppercase tracking-wider font-semibold">
          {label}
        </div>
      </div>
    )
})

const Countdown = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date().getTime()
      // Set launch date to December 2nd, 2025 at midnight local time
      const launchDate = new Date(2025, 11, 2, 0, 0, 0, 0).getTime()
      const difference = launchDate - now

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        })
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 })
      }
    }

    calculateTimeLeft()
    const timer = setInterval(calculateTimeLeft, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <section id="countdown" className="pt-4 md:pt-6 pb-12 md:pb-16 px-4 relative">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          className="text-center mb-8 md:mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-3 md:mb-4">
            <span className="text-gradient neon-text">Launching in:</span>
          </h2>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-3 md:gap-4 lg:gap-6 mb-8 md:mb-12">
          <TimeUnit value={timeLeft.days} label="Days" />
          <TimeUnit value={timeLeft.hours} label="Hours" />
          <TimeUnit value={timeLeft.minutes} label="Minutes" />
          <TimeUnit value={timeLeft.seconds} label="Seconds" isBlinking={true} />
        </div>

        <motion.p
          className="text-lg md:text-xl lg:text-2xl text-gray-300 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Are you ready to level up?
        </motion.p>
      </div>
    </section>
  )
}

export default Countdown

