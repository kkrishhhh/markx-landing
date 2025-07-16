'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'

export default function Hero() {
  return (
    <section className="w-full min-h-[90vh] flex flex-col items-center justify-center px-4 text-center bg-zinc-50">
      <motion.div
  initial={{ opacity: 0, y: 60 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{
  delay: 0.2,
  duration: 1.2,
  ease: 'easeOut',
}}

  className="max-w-2xl"
>

        <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight text-zinc-900">
          Not Just Another <span className="text-indigo-700">Agency</span>.
          <br />
          We’re a Growth System.
        </h1>

        <p className="text-zinc-600 text-lg md:text-xl mb-6">
          MarkX blends psychology, UGC, content systems, and AI to help creators and brands
          <span className="font-medium"> scale with soul</span> — not noise.
        </p>

        <Button
          size="lg"
          className="bg-zinc-900 text-white hover:opacity-90 rounded-full px-6 cursor-pointer"
        >
          Get Your Free Audit
        </Button>
      </motion.div>
    </section>
  )
}
