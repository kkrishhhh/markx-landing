'use client'

import { motion } from 'framer-motion'

const cases = [
  {
    img: '/images/case-studies/elina.jpg.png',
    name: 'Elina Chauhan – Singer & Content Creator',
    emoji: '🎤',
    story: (
      <>
        Elina had the talent and the content — but engagement had plateaued. Despite putting in the work,
        her reels weren’t reaching like they used to. We optimized her bio, restructured her content pillars,
        and introduced a subtle UGC loop that brought the soul back into her content. Within weeks, her reels
        began <span className="font-semibold text-zinc-800">doubling in views</span> and fan DMs reignited.{" "}
        <span className="font-semibold text-zinc-800">
          Engagement 2x’d and her personal brand started converting attention into loyalty.
        </span>
      </>
    ),
  },
  {
    img: '/images/case-studies/parikrama.jpg.png',
    name: 'VJ Infinity – Performer & Personal Brand',
    emoji: '🎧',
    story: (
      <>
        VJ already had an audience — but no strategy. With no clear CTA or funnel, his followers were loyal
        but lost. We stepped in to decode his audience, mapped his top-performing formats, and rebuilt his
        Instagram CTA and bio flow.{" "}
        <span className="font-semibold text-zinc-800">
          The result? 11.75% avg engagement rate and a brand identity that finally matched his energy.
        </span>{" "}
        His DMs shifted from “love your vibe” to “how can I book you?”
      </>
    ),
  },
  {
    img: '/images/case-studies/sama.jpg.png',
    name: 'SAMA Duo – Acoustic Event Artists',
    emoji: '🎻',
    story: (
      <>
        SAMA was growing but mostly offline. Their digital presence lacked cohesion — no clear hook, outdated bio,
        and scattered visual tone. We reframed their positioning to highlight intimacy + elegance, redesigned their
        Instagram layout strategy, and introduced emotion-driven copy.{" "}
        <span className="font-semibold text-zinc-800">
          In 4 weeks, they gained 900+ organic followers and had 3 inbound booking requests from 1 reel.
        </span>
      </>
    ),
  },
  {
    img: '/images/case-studies/vj.jpg.png',
    name: 'Parikrama – Legacy Rock Band',
    emoji: '🥁',
    story: (
      <>
        Parikrama is iconic, but their online narrative didn’t reflect that. We didn't change their voice —
        we enhanced it. By building a repeatable storytelling engine using legacy content + band psychology,
        we revived fan nostalgia and{" "}
        <span className="font-semibold text-zinc-800">increased reel reach by 30%+</span>. Their content
        started pulling in younger fans without alienating the old guard.
      </>
    ),
  },
]

export default function CaseStudiesPage() {
  return (
    <main className="min-h-screen py-20 px-6 bg-white text-zinc-800">
      <div className="max-w-3xl mx-auto space-y-20">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="text-center"
        >
          <h1 className="text-4xl font-bold mb-2">Real Results, Real Creators</h1>
          <p className="text-sm text-zinc-500 mb-6">Our previous work that actually speaks results.</p>
          <p className="text-zinc-600 text-base max-w-xl mx-auto">
            We don’t do “just marketing.” We engineer growth systems with soul — built for real people, not just metrics.
          </p>
        </motion.div>

        {/* Case Studies */}
        {cases.map((cs, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.4 }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: i * 0.1 }}
            className="space-y-4"
          >
            {/* Image */}
            <div className="mx-auto max-w-md rounded-xl overflow-hidden shadow-md ring-1 ring-zinc-200">
              <img
                src={cs.img}
                alt={cs.name}
                className="w-full h-auto object-contain"
              />
            </div>

            {/* Text */}
            <div className="text-center space-y-2">
              <h2 className="text-xl font-semibold">
                {cs.emoji} {cs.name}
              </h2>
              <p className="text-base text-zinc-600 leading-relaxed">{cs.story}</p>
            </div>
          </motion.div>
        ))}

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-center bg-indigo-50 p-10 rounded-xl mt-20"
        >
          <h2 className="text-2xl font-semibold text-zinc-800 mb-3">
            Want results like this?
          </h2>
          <p className="text-zinc-600 mb-5 max-w-xl mx-auto">
            Get a free performance audit and let MarkX break down your next growth move.
          </p>
          <a href="/contact">
            <button className="bg-zinc-900 text-white px-6 py-2 rounded-full text-sm cursor-pointer hover:opacity-90">
              Claim Your Free Audit
            </button>
          </a>
        </motion.div>
      </div>
    </main>
  )
}
