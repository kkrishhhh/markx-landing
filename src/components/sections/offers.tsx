'use client'

import { motion } from 'framer-motion'
import { BadgePercent, Sparkles, Gift } from 'lucide-react'

const offers = [
    {
    icon: <Gift className="w-5 h-5 text-indigo-700" />,
    title: 'Free first audit for all new clients',
  },
  {
    icon: <Sparkles className="w-5 h-5 text-indigo-700" />,
    title: 'Seasonal campaigns: Diwali, Month-end drops & more',
  },
  {
    icon: <BadgePercent className="w-5 h-5 text-indigo-700" />,
    title: '10% off your first service',
  },
]

export default function Offers() {
  return (
    <section className="w-full py-20 px-6 bg-slate-50">
      <div className="max-w-5xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.4 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-3xl font-semibold mb-10 text-zinc-800"
        >
          Offers & Perks
        </motion.h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 text-left">
          {offers.map((offer, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.4, ease: 'easeOut', delay: idx * 0.05 }}
              className="bg-white rounded-2xl border ring-1 ring-zinc-200 p-5 flex items-start gap-3 hover:shadow-md transition-all duration-300 ease-in-out"
            >
              {offer.icon}
              <p className="text-zinc-700 text-sm">{offer.title}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
