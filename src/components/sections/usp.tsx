'use client'

import { motion } from 'framer-motion'
import { RocketIcon, EyeIcon, BrainIcon } from 'lucide-react'

const points = [
  {
    icon: <RocketIcon className="w-6 h-6 text-indigo-700" />,
    title: 'AI + Psychology Engine',
    desc: 'We don’t guess. We audit, analyze, and scale using audience behavior and growth science.',
  },
  {
    icon: <EyeIcon className="w-6 h-6 text-indigo-700" />,
    title: 'Audience-First Strategy',
    desc: 'Your growth isn’t based on trends — it’s built from what your audience actually wants.',
  },
  {
    icon: <BrainIcon className="w-6 h-6 text-indigo-700" />,
    title: 'Smart Content System',
    desc: 'Every caption, post, and plan is rooted in brand psychology and systemized storytelling.',
  },
]

export default function USP() {
  return (
    <section className="w-full py-20 px-6 bg-slate-50 overflow-hidden">
      <div className="max-w-6xl mx-auto text-center">
        {/* Animated Heading */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
        >
          <h2 className="text-3xl font-semibold mb-16 text-zinc-800">
            What Makes MarkX Different?
          </h2>
        </motion.div>

        {/* Animated USP Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {points.map((point, idx) => (
            <motion.div
  key={idx}
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: false, amount: 0.15 }}
  transition={{
    duration: 0.4,
    ease: 'easeOut',
    delay: idx * 0.04,
  }}
  className="bg-white border rounded-2xl p-6 shadow-sm ring-1 ring-zinc-200 text-left hover:shadow-lg hover:scale-[1.03] transition-all duration-300 ease-in-out"
>

              <div className="mb-4">{point.icon}</div>
              <h3 className="font-medium text-lg mb-2 text-zinc-800">{point.title}</h3>
              <p className="text-sm text-zinc-600">{point.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
