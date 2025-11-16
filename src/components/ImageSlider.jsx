import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import image0 from '../assets/image_0.png'
import image1 from '../assets/image_1.png'
import image2 from '../assets/image_2.png'
import image3 from '../assets/image_3.png'

const ImageSlider = () => {
  const images = [image0, image1, image2, image3]
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
    }, 4000) // Change image every 4 seconds

    return () => clearInterval(interval)
  }, [images.length])

  const goToSlide = (index) => {
    setCurrentIndex(index)
  }

  return (
    <section className="pt-8 md:pt-12 pb-4 md:pb-6 px-4 relative mt-20">
      <div className="container mx-auto max-w-6xl">
        <div className="relative">
          {/* Main Image Display */}
          <div className="relative h-[300px] md:h-[400px] lg:h-[500px] rounded-3xl overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, scale: 0.8, rotateY: -180 }}
                animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                exit={{ opacity: 0, scale: 0.8, rotateY: 180 }}
                transition={{ duration: 0.8, ease: 'easeInOut' }}
                className="absolute inset-0"
              >
                <div className="relative w-full h-full rounded-3xl overflow-hidden glass-blur border-2 border-neon-cyan/30">
                  <motion.img
                    src={images[currentIndex]}
                    alt={`Slide ${currentIndex + 1}`}
                    className="w-full h-full object-cover rounded-3xl"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.5 }}
                  />
                  {/* Gradient overlay for depth */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent rounded-3xl" />
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Neon glow effect */}
            <motion.div
              className="absolute inset-0 rounded-3xl pointer-events-none"
              animate={{
                boxShadow: [
                  '0 0 30px rgba(0, 240, 255, 0.3)',
                  '0 0 50px rgba(255, 0, 245, 0.4)',
                  '0 0 30px rgba(0, 240, 255, 0.3)',
                ],
              }}
              transition={{ duration: 3, repeat: Infinity }}
            />
          </div>

          {/* Round Indicator Dots */}
          <div className="flex justify-center items-center gap-3 mt-6 md:mt-8">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className="relative focus:outline-none group"
                aria-label={`Go to slide ${index + 1}`}
              >
                <motion.div
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    currentIndex === index
                      ? 'bg-neon-cyan scale-125'
                      : 'bg-gray-600 hover:bg-gray-500'
                  }`}
                  whileHover={{ scale: 1.3 }}
                  whileTap={{ scale: 0.9 }}
                  animate={{
                    boxShadow:
                      currentIndex === index
                        ? [
                            '0 0 10px rgba(0, 240, 255, 0.8)',
                            '0 0 20px rgba(0, 240, 255, 0.6)',
                            '0 0 10px rgba(0, 240, 255, 0.8)',
                          ]
                        : '0 0 0px rgba(0, 240, 255, 0)',
                  }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                />
              </button>
            ))}
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={() => setCurrentIndex((prev) => (prev - 1 + images.length) % images.length)}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full glass-blur border border-neon-cyan/50 flex items-center justify-center hover:border-neon-cyan transition-all duration-300 group"
            aria-label="Previous slide"
          >
            <motion.svg
              className="w-6 h-6 text-neon-cyan"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              whileHover={{ x: -3 }}
              whileTap={{ scale: 0.9 }}
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </motion.svg>
          </button>

          <button
            onClick={() => setCurrentIndex((prev) => (prev + 1) % images.length)}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full glass-blur border border-neon-cyan/50 flex items-center justify-center hover:border-neon-cyan transition-all duration-300 group"
            aria-label="Next slide"
          >
            <motion.svg
              className="w-6 h-6 text-neon-cyan"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              whileHover={{ x: 3 }}
              whileTap={{ scale: 0.9 }}
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </motion.svg>
          </button>
        </div>
      </div>
    </section>
  )
}

export default ImageSlider

