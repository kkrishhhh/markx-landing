'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Check, Star, Zap, Target, Rocket, Crown } from 'lucide-react'

const plans = [
  {
    name: 'Launch Pad',
    price: '₹5,999',
    originalPrice: '₹6,999',
    period: 'per month',
    tagline: 'Best for First-Time Clients',
    icon: <Rocket className="w-6 h-6" />,
    popular: false,
    features: [
      '6 static/carousel posts',
      '1 reel',
      'Profile + bio optimization',
      'Hashtag & caption strategy',
      'Weekly insights summary',
    ],
    bonus: 'Free 1-hour brand strategy call',
    cta: 'Get started',
  },
  {
    name: 'Growth Boost',
    price: '₹9,999',
    originalPrice: '₹14,999',
    period: 'per month',
    tagline: 'Most Popular',
    icon: <Target className="w-6 h-6" />,
    popular: true,
    features: [
      '10 posts',
      '3 reels',
      'Community engagement (comments + DMs)',
      'Content calendar & approval system',
      'Monthly performance report',
    ],
    bonus: 'Free paid ad setup',
    cta: 'Get started',
  },
  {
    name: 'Scale Up Pro',
    price: '₹17,999',
    originalPrice: '₹24,999',
    period: 'per month',
    tagline: 'Designed for Hustling Brands',
    icon: <Zap className="w-6 h-6" />,
    popular: false,
    features: [
      '12 posts',
      '5 reels',
      'Ad budget management up to ₹5,000',
      'Influencer shortlisting & outreach',
      'Monthly analytics dashboard',
      '2 strategy calls/month',
    ],
    bonus: 'Storyline + engagement support',
    cta: 'Get started',
  },
  {
    name: 'Dominate Plan',
    price: '₹29,999',
    originalPrice: '₹39,999',
    period: 'per month',
    tagline: 'For High-Intent Brands',
    icon: <Crown className="w-6 h-6" />,
    popular: false,
    features: [
      '15 posts',
      '6–8 reels',
      'Paid ads setup + optimization',
      'UGC strategy execution',
      'Conversion-focused content',
      'Custom analytics dashboard',
      'Weekly strategy sync',
    ],
    bonus: 'Custom content strategy PDF',
    cta: 'Request trial',
  },
]

export default function ModernPricingSection() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)

  return (
    <div className="min-h-screen bg-gray-950 py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">Pricing</h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Simple pricing, serious growth. Upgrade to enable unlimited posts, enhanced analytics, and additional features.
          </p>
        </motion.div>

        {/* Cards */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          initial="hidden"
          whileInView="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.1, delayChildren: 0.2 },
            },
          }}
          viewport={{ once: true }}
        >
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              className={`relative rounded-2xl p-6 border transition-all duration-300 ${
                plan.popular
                  ? 'border-blue-500 bg-gradient-to-b from-blue-500/5 to-gray-900'
                  : 'bg-gray-900 border-gray-800 hover:border-gray-700'
              }`}
              variants={{
                hidden: { opacity: 0, y: 50, scale: 0.95 },
                visible: {
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  transition: { type: 'spring', stiffness: 100, damping: 15 },
                },
              }}
              whileHover={{
                scale: 1.02,
                y: -5,
                transition: { duration: 0.2 },
              }}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {plan.popular && (
                <motion.div
                  initial={{ scale: 0, rotate: -10 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ type: 'spring', stiffness: 200, delay: 0.4 }}
                  className="absolute -top-3 left-1/2 transform -translate-x-1/2"
                >
                  <div className="bg-blue-500 text-white px-3 py-1 rounded-full text-xs font-medium">
                    Most Popular
                  </div>
                </motion.div>
              )}

              {/* Plan Info */}
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-white mb-1">{plan.name}</h3>
                <p className="text-gray-400 text-sm mb-4">{plan.tagline}</p>

                {/* Pricing */}
                <div className="mb-4">
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-400 text-sm">{plan.period}</span>
                  </div>
                  <div className="text-gray-500 text-sm line-through">{plan.originalPrice}</div>
                </div>
              </div>

              {/* Features */}
              <ul className="space-y-3 mb-6">
                {plan.features.map((feature, idx) => (
                  <motion.li
                    key={idx}
                    className="flex items-start gap-3 text-gray-300"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center mt-0.5">
                      <Check className="w-3 h-3 text-white" />
                    </div>
                    <span className="text-sm">{feature}</span>
                  </motion.li>
                ))}
              </ul>

              {/* Bonus */}
              <div className="mb-6 p-3 bg-gray-800 rounded-lg">
                <div className="flex items-center gap-2 text-blue-400">
                  <Star className="w-4 h-4" />
                  <span className="text-sm font-medium">Bonus: {plan.bonus}</span>
                </div>
              </div>

              {/* CTA */}
              <motion.button
                type="button"
                className={`w-full py-3 rounded-lg font-medium transition-all duration-300 ${
                  plan.popular
                    ? 'bg-blue-500 hover:bg-blue-600 text-white'
                    : index === 3
                    ? 'bg-gray-800 hover:bg-gray-700 text-white border border-gray-700'
                    : 'bg-gray-800 hover:bg-gray-700 text-white'
                }`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {plan.cta}
              </motion.button>

              {index === 3 && (
                <div className="text-center mt-3">
                  <button
                    type="button"
                    className="text-blue-400 text-sm hover:text-blue-300 transition-colors"
                  >
                    or contact sales
                  </button>
                </div>
              )}

              {/* Hover glow effect */}
              <AnimatePresence>
                {hoveredCard === index && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-2xl pointer-events-none"
                  />
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>

        {/* Footer note */}
        <motion.p
          className="text-center mt-16 text-gray-400 text-sm"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          viewport={{ once: true }}
        >
          Powering the world's best product teams
        </motion.p>
      </div>
    </div>
  )
}
