'use client'
import { motion } from 'framer-motion'
import { BadgePercent, Sparkles, Gift, Star } from 'lucide-react'

const offers = [
  {
    icon: <Gift className="w-6 h-6 text-rose-600" />,
    title: 'Free first audit for all new clients',
    description: 'Complete strategy review',
    highlight: 'New Client',
  },
  {
    icon: <Sparkles className="w-6 h-6 text-amber-600" />,
    title: 'Seasonal campaigns: Diwali, Month-end drops & more',
    description: 'Festival-focused marketing',
    highlight: 'Seasonal',
  },
  {
    icon: <BadgePercent className="w-6 h-6 text-orange-600" />,
    title: '10% off your first service',
    description: 'Exclusive discount',
    highlight: 'Save 10%',
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
    },
  },
}

const itemVariants = {
  hidden: { 
    opacity: 0, 
    x: -50,
    scale: 0.9,
  },
  visible: { 
    opacity: 1, 
    x: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 120,
      damping: 15,
    },
  },
}

export default function Offers() {
  return (
    <section className="w-full py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-rose-50 via-amber-50 to-orange-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-64 h-64 bg-gradient-to-br from-rose-200/20 to-amber-200/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-tr from-orange-200/20 to-rose-200/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-amber-100/10 to-rose-100/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-16"
        >
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            whileInView={{ scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-rose-100 to-amber-100 rounded-full text-sm font-medium text-rose-800 mb-6"
          >
            <Star className="w-4 h-4" />
            Special Deals
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-rose-600 via-amber-600 to-orange-600 bg-clip-text text-transparent mb-4">
            Offers & Perks
          </h2>
          <p className="text-lg text-rose-700/80 max-w-2xl mx-auto">
            Exclusive benefits and seasonal promotions for our valued clients
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {offers.map((offer, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              whileHover={{ 
                scale: 1.05, 
                y: -8,
                transition: { type: "spring", stiffness: 300, damping: 20 }
              }}
              whileTap={{ scale: 0.98 }}
              className="group relative bg-white/90 backdrop-blur-sm rounded-3xl p-8 border border-rose-200/50 shadow-xl hover:shadow-2xl transition-all duration-500 ease-out overflow-hidden"
            >
              {/* Animated background gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-rose-100/30 via-amber-100/30 to-orange-100/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Floating particles effect */}
              <div className="absolute inset-0 overflow-hidden">
                <motion.div
                  className="absolute w-2 h-2 bg-rose-400 rounded-full"
                  style={{ top: "20%", left: "20%" }}
                  animate={{
                    y: [0, -20, 0],
                    opacity: [0.5, 1, 0.5],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: idx * 0.5,
                  }}
                />
                <motion.div
                  className="absolute w-1 h-1 bg-amber-400 rounded-full"
                  style={{ top: "70%", right: "30%" }}
                  animate={{
                    y: [0, -15, 0],
                    opacity: [0.3, 0.8, 0.3],
                  }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    delay: idx * 0.3,
                  }}
                />
              </div>
              
              <div className="relative z-10">
                <div className="flex items-start justify-between mb-6">
                  <motion.div
                    className="w-16 h-16 bg-gradient-to-br from-rose-200 via-amber-200 to-orange-200 rounded-2xl flex items-center justify-center shadow-lg"
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  >
                    {offer.icon}
                  </motion.div>
                  
                  <motion.div
                    className="px-3 py-1 bg-gradient-to-r from-rose-500 to-amber-500 text-white rounded-full text-xs font-bold shadow-md"
                    initial={{ scale: 0, rotate: -45 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    transition={{ delay: 0.4 + idx * 0.1, type: "spring" }}
                  >
                    {offer.highlight}
                  </motion.div>
                </div>
                
                <motion.h3 
                  className="text-xl font-bold text-rose-900 mb-3 text-left group-hover:text-rose-800 transition-colors leading-tight"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.5 + idx * 0.1 }}
                >
                  {offer.title}
                </motion.h3>
                
                <motion.p 
                  className="text-sm text-rose-700/70 text-left font-medium"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.6 + idx * 0.1 }}
                >
                  {offer.description}
                </motion.p>
                
                {/* Decorative bottom line */}
                {/* <motion.div
                  className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-rose-400 to-amber-400 rounded-full"
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  transition={{ delay: 0.7 + idx * 0.1, duration: 0.8 }}
                /> */}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}