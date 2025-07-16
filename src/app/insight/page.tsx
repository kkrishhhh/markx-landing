'use client'

import { motion } from 'framer-motion'

const modules = [
  {
    title: 'Brand Psychology',
    desc: 'Analyze your voice, vibe, values — then align it with audience triggers.',
  },
  {
    title: 'Content & Platform Audit',
    desc: 'We review content formats, posting frequency, analytics, and platform strategy.',
  },
  {
    title: 'Audience Deep Dive',
    desc: 'Study who your followers are, what they respond to, and what builds loyalty.',
  },
  {
    title: 'Growth Lever Mapping',
    desc: 'Based on your goals, we map what’s actually worth scaling next.',
  },
]

export default function InsightPage() {
  return (
    <main className="min-h-screen py-20 px-6 bg-white text-zinc-800">
      <div className="max-w-4xl mx-auto space-y-16">

        {/* Heading Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <h1 className="text-4xl font-bold mb-4">
            What is MarkX Insight™?
          </h1>
          <p className="text-lg text-zinc-600">
            MarkX Insight™ is a strategic brand-auditing tool powered by psychology and performance logic.
            It’s not just about what works — it’s about understanding why your audience responds the way they do.
          </p>
        </motion.div>

        {/* Audience First */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <h2 className="text-2xl font-semibold mb-3">Audience-First Strategy</h2>
          <p className="text-zinc-600">
            Most audits look at reach, likes, and trends. MarkX Insight flips that. We start with what your
            audience actually wants — and reverse-engineer your content, offer, and ecosystem around that.
          </p>
        </motion.div>

        {/* Modules Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="grid md:grid-cols-2 gap-6"
        >
          {modules.map((mod, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: 'easeOut', delay: i * 0.1 }}
              className="p-6 bg-zinc-50 rounded-xl border ring-1 ring-zinc-200 hover:shadow-md transition-all"
            >
              <h3 className="font-medium text-lg mb-2">{mod.title}</h3>
              <p className="text-sm text-zinc-600">{mod.desc}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Modern Zigzag Timeline */}
<motion.div
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: false, amount: 0.4 }}
  transition={{ duration: 0.6, ease: 'easeOut' }}
  className="mt-20 max-w-5xl mx-auto"
>
  <h2 className="text-3xl font-semibold text-center text-zinc-800 mb-14">
    How MarkX Insight™ Actually Works
  </h2>

  <div className="space-y-20">
    {[
      {
        step: '1',
        title: 'Understand the Brand',
        desc: 'We analyze your tone, vibe, positioning and emotional hooks — and match them to how your audience sees you.',
      },
      {
        step: '2',
        title: 'Audit Your Platform',
        desc: 'Everything from posting habits to content types to bio setup is reviewed for clarity, trust and growth leverage.',
      },
      {
        step: '3',
        title: 'Map Your Audience',
        desc: 'We deep dive into who follows you, what content they crave, and what turns them into loyal advocates.',
      },
      {
        step: '4',
        title: 'Recommend Levers',
        desc: 'From content to community to conversions — we tell you where to push and where to pause.',
      },
    ].map((item, i) => (
      <motion.div
        key={i}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.4 }}
        transition={{ duration: 0.6, ease: 'easeOut', delay: i * 0.1 }}
        className={`flex flex-col md:flex-row items-center md:items-start gap-8 ${
          i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
        }`}
      >
        {/* Step Bubble */}
        <div className="flex-shrink-0 w-12 h-12 rounded-full bg-indigo-100 text-indigo-700 font-bold text-lg flex items-center justify-center shadow-md">
          {item.step}
        </div>

        {/* Content Box */}
        <div className="bg-zinc-50 p-6 rounded-xl border ring-1 ring-zinc-200 shadow-sm max-w-xl w-full">
          <h3 className="text-xl font-semibold mb-2 text-zinc-800">
            {item.title}
          </h3>
          <p className="text-sm text-zinc-600">{item.desc}</p>
        </div>
      </motion.div>
    ))}
  </div>
</motion.div>


      </div>
    </main>
  )
}

