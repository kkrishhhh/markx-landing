'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'

const addons = [
  {
    name: 'Extra Reel',
    price: '₹799',
  },
  {
    name: 'Mini UGC Collab Campaign',
    price: '₹2,999 – ₹4,999',
  },
  {
    name: 'Strategy Audit Call (1 hour)',
    price: '₹699',
  },
  {
    name: 'Ad Copywriting (5 sets)',
    price: '₹1,499',
  },
]

export default function AddOns() {
  return (
    <section className="w-full py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.4 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-3xl font-semibold mb-12 text-zinc-800"
        >
          Add-Ons (Optional Upsells)
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {addons.map((addon, idx) => (
            <motion.div
  key={idx}
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: false, amount: 0.2 }}
  transition={{
    duration: 0.4,
    ease: 'easeOut',
    delay: idx * 0.05,
  }}
  className="bg-zinc-50 rounded-xl p-4 border ring-1 ring-zinc-200 flex flex-col gap-2 hover:shadow-md hover:scale-[1.02] transition-all duration-300 ease-in-out"
>
  <h3 className="text-base font-semibold text-zinc-900 leading-snug text-left">
  {addon.name}
</h3>


  <div className="flex items-center justify-between mt-1">
    <p className="text-sm text-zinc-600">{addon.price}</p>
    <Button size="sm" variant="outline" className="cursor-pointer">
      Add
    </Button>
  </div>
</motion.div>


          ))}
        </div>
      </div>
    </section>
  )
}
