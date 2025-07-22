'use client'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Plus, Sparkles } from 'lucide-react'

const addons = [
  {
    name: 'Extra Reel',
    price: '₹799',
    description: 'Additional content creation',
  },
  {
    name: 'Mini UGC Collab Campaign',
    price: '₹2,999 – ₹4,999',
    description: 'User-generated content',
  },
  {
    name: 'Strategy Audit Call (1 hour)',
    price: '₹699',
    description: 'Expert consultation',
  },
  {
    name: 'Ad Copywriting (5 sets)',
    price: '₹1,499',
    description: 'Professional ad copy',
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { 
    opacity: 0, 
    y: 30,
    scale: 0.95,
  },
  visible: { 
    opacity: 1, 
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15,
    },
  },
}

export default function AddOns() {
  return (
    <section className="w-full py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-amber-50 via-orange-50 to-rose-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-amber-200/30 to-rose-200/30 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-orange-200/30 to-amber-200/30 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-amber-100 to-rose-100 rounded-full text-sm font-medium text-amber-800 mb-6"
          >
            <Sparkles className="w-4 h-4" />
            Optional Upsells
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-amber-700 via-orange-600 to-rose-600 bg-clip-text text-transparent mb-4">
            Add-Ons
          </h2>
          <p className="text-lg text-amber-700/80 max-w-2xl mx-auto">
            Enhance your package with these premium add-ons
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {addons.map((addon, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              whileHover={{ 
                scale: 1.05, 
                y: -5,
                transition: { type: "spring", stiffness: 300, damping: 20 }
              }}
              whileTap={{ scale: 0.98 }}
              className="group relative bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-amber-200/50 shadow-lg hover:shadow-2xl transition-all duration-500 ease-out overflow-hidden"
            >
              {/* Hover gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-amber-100/50 to-rose-100/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              {/* Animated border */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-amber-400 to-rose-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></div>
              <div className="absolute inset-[1px] rounded-2xl bg-white/90 backdrop-blur-sm"></div>
              
              <div className="relative z-10">
                <div className="flex items-start justify-between mb-4">
                  <motion.div
                    className="w-12 h-12 bg-gradient-to-br from-amber-200 to-rose-200 rounded-xl flex items-center justify-center"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Plus className="w-6 h-6 text-amber-700" />
                  </motion.div>
                  
                  <motion.div
                    className="px-3 py-1 bg-gradient-to-r from-amber-100 to-rose-100 rounded-full text-xs font-semibold text-amber-800"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ delay: 0.3 + idx * 0.1 }}
                  >
                    Add-on
                  </motion.div>
                </div>
                
                <h3 className="text-lg font-bold text-amber-900 mb-2 text-left group-hover:text-amber-800 transition-colors">
                  {addon.name}
                </h3>
                
                <p className="text-sm text-amber-700/70 mb-4 text-left">
                  {addon.description}
                </p>
                
                <div className="flex items-center justify-between">
                  <motion.p 
                    className="text-xl font-bold bg-gradient-to-r from-amber-700 to-rose-600 bg-clip-text text-transparent"
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.4 + idx * 0.1 }}
                  >
                    {addon.price}
                  </motion.p>
                  
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button 
                      size="sm" 
                      className="bg-gradient-to-r from-amber-500 to-rose-500 hover:from-amber-600 hover:to-rose-600 text-white border-0 shadow-lg hover:shadow-xl transition-all duration-300"
                    >
                      Add
                    </Button>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}