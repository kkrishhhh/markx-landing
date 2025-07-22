'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

// Custom Button Component (since we can't import external UI)
const Button = ({ children, className = '', ...props }) => (
  <motion.button
    whileHover={{ 
      scale: 1.05,
      y: -5,
      boxShadow: "0 20px 60px rgba(244, 167, 140, 0.6)",
      background: "linear-gradient(135deg, rgb(220, 150, 120) 0%, rgb(200, 140, 110) 100%)"
    }}
    whileTap={{ scale: 0.98, y: -2 }}
    className={`relative overflow-hidden font-semibold transition-all duration-300 cursor-pointer ${className}`}
    {...props}
  >
    <motion.div
      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full"
      whileHover={{
        translateX: "200%",
        transition: { duration: 0.6, ease: "easeInOut" }
      }}
    />
    {children}
  </motion.button>
)

// Floating Elements Component
const FloatingElements = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 50,
        y: (e.clientY / window.innerHeight - 0.5) * 50
      })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <>
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full opacity-10"
          style={{
            background: `linear-gradient(135deg, rgb(244, 167, 140) 0%, rgb(232, 197, 160) 100%)`,
            width: `${60 + i * 20}px`,
            height: `${60 + i * 20}px`,
            top: `${20 + i * 15}%`,
            left: `${10 + i * 15}%`,
            right: i % 2 === 0 ? `${15 + i * 10}%` : 'auto',
          }}
          animate={{
            y: [0, -20, 0],
            rotate: [0, 180, 360],
            x: mousePosition.x * (i + 1) * 0.1,
          }}
          transition={{
            y: {
              duration: 4 + i,
              repeat: Infinity,
              ease: "easeInOut"
            },
            rotate: {
              duration: 8 + i * 2,
              repeat: Infinity,
              ease: "linear"
            },
            x: {
              duration: 0.3,
              ease: "easeOut"
            }
          }}
        />
      ))}
    </>
  )
}

export default function Hero() {
  return (
    <section className="relative w-full min-h-[90vh] flex flex-col items-center justify-center px-4 text-center overflow-hidden"
      style={{
        background: `
          radial-gradient(circle at 20% 20%, rgba(244, 167, 140, 0.1) 0%, transparent 50%),
          radial-gradient(circle at 80% 80%, rgba(232, 197, 160, 0.1) 0%, transparent 50%),
          radial-gradient(circle at 40% 60%, rgba(210, 180, 140, 0.05) 0%, transparent 50%),
          rgb(250, 247, 242)
        `
      }}
    >
      {/* Floating Elements */}
      <FloatingElements />
      
      {/* Main Content */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.2,
          duration: 1.2,
          ease: 'easeOut',
        }}
        className="max-w-4xl z-10"
      >
        {/* Main Heading */}
        <motion.h1 
          className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
          style={{ 
            color: 'rgb(58, 35, 23)',
            letterSpacing: '-0.02em'
          }}
        >
          Not Just Another{' '}
          <motion.span
            className="relative inline-block"
            style={{
              background: 'linear-gradient(135deg, rgb(180, 120, 90) 0%, rgb(160, 110, 80) 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
            animate={{
              backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: 'easeInOut'
            }}
          >
            Agency
          </motion.span>
          .
          <br />
          <motion.span
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            We're a Growth System.
          </motion.span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0, duration: 0.8 }}
          className="text-lg md:text-xl mb-8 leading-relaxed max-w-2xl mx-auto"
          style={{ color: 'rgb(139, 115, 85)' }}
        >
          MarkX blends psychology, UGC, content systems, and AI to help creators and brands{' '}
          <motion.span
            className="font-semibold relative"
            style={{ color: 'rgb(139, 69, 19)' }}
            whileHover={{ 
              scale: 1.05,
              transition: { duration: 0.2 }
            }}
          >
            scale with soul
          </motion.span>
          {' '}— not noise.
        </motion.p>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4, duration: 0.8 }}
        >
          <Button
            className="text-white text-lg px-8 py-4 rounded-full font-semibold shadow-lg cursor-pointer"
            style={{
              background: 'linear-gradient(135deg, rgb(180, 120, 90) 0%, rgb(160, 110, 80) 100%)',
              boxShadow: '0 10px 40px rgba(180, 120, 90, 0.4)'
            }}
          >
            Get Your Free Audit
          </Button>
        </motion.div>
      </motion.div>

      {/* Decorative Elements */}
      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, -10, 0] }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <div className="w-6 h-10 border-2 rounded-full flex justify-center"
          style={{ borderColor: 'rgb(244, 167, 140)' }}
        >
          <motion.div
            className="w-1 h-3 mt-2 rounded-full"
            style={{ backgroundColor: 'rgb(244, 167, 140)' }}
            animate={{ y: [0, 12, 0] }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </div>
      </motion.div>
    </section>
  )
}