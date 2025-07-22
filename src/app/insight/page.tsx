'use client';

import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const modules = [
  {
    title: 'Brand Psychology',
    desc: 'Analyze your voice, vibe, values — then align it with audience triggers.',
    icon: '🧠',
    color: 'from-rose-100 to-orange-100'
  },
  {
    title: 'Content & Platform Audit',
    desc: 'We review content formats, posting frequency, analytics, and platform strategy.',
    icon: '📊',
    color: 'from-amber-100 to-yellow-100'
  },
  {
    title: 'Audience Deep Dive',
    desc: 'Study who your followers are, what they respond to, and what builds loyalty.',
    icon: '🎯',
    color: 'from-orange-100 to-red-100'
  },
  {
    title: 'Growth Lever Mapping',
    desc: 'Based on your goals, we map what\'s actually worth scaling next.',
    icon: '🚀',
    color: 'from-pink-100 to-rose-100'
  }
];

const steps = [
  {
    step: '1',
    title: 'Understand the Brand',
    desc: 'We analyze your tone, vibe, positioning and emotional hooks — and match them to how your audience sees you.',
    detail: 'Deep brand analysis with psychological insights'
  },
  {
    step: '2',
    title: 'Audit Your Platform',
    desc: 'Everything from posting habits to content types to bio setup is reviewed for clarity, trust and growth leverage.',
    detail: 'Comprehensive platform performance review'
  },
  {
    step: '3',
    title: 'Map Your Audience',
    desc: 'We deep dive into who follows you, what they crave, and what turns them into loyal advocates.',
    detail: 'Behavioral audience segmentation & analysis'
  },
  {
    step: '4',
    title: 'Recommend Levers',
    desc: 'From content to community to conversions — we tell you where to push and where to pause.',
    detail: 'Actionable growth strategy recommendations'
  }
];

const features = [
  { title: 'Tailored Workflows', desc: 'Track progress across custom issue flows for your team.', icon: '⚡' },
  { title: 'Custom Views', desc: 'Switch between list and board. Group issues with swimlanes.', icon: '👁️' },
  { title: 'Smart Filters', desc: 'Refine issue lists down to what\'s most relevant to you.', icon: '🔍' },
  { title: 'Auto SLAs', desc: 'Automatically apply deadlines to time-sensitive tasks.', icon: '⏰' }
];

export default function MarkXInsightsPage() {
  const [activeStep, setActiveStep] = useState(0);
  const { scrollYProgress } = useScroll();
  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-rose-50 to-amber-50 text-amber-900 overflow-hidden">
      {/* Floating Background Elements */}
      <div className="fixed inset-0 pointer-events-none">
        <motion.div 
          animate={{
            y: [-20, 20, -20]
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-rose-200/30 to-orange-200/30 rounded-full blur-xl"
        />
        <motion.div 
          animate={{
            y: [-20, 20, -20]
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
          className="absolute top-40 right-20 w-40 h-40 bg-gradient-to-br from-amber-200/30 to-yellow-200/30 rounded-full blur-xl"
        />
        <motion.div 
          animate={{
            y: [-20, 20, -20]
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 4
          }}
          className="absolute bottom-20 left-1/4 w-24 h-24 bg-gradient-to-br from-pink-200/30 to-rose-200/30 rounded-full blur-xl"
        />
      </div>

      <main className="relative z-10 py-20 px-6">
        <div className="max-w-6xl mx-auto space-y-32">

          {/* Hero Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="text-center space-y-8"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-rose-100 to-orange-100 rounded-full text-sm font-medium text-amber-800 shadow-lg"
            >
              <span className="w-2 h-2 bg-orange-400 rounded-full animate-pulse"></span>
              Strategic Brand Intelligence
            </motion.div>
            
            <h1 className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-amber-800 via-orange-700 to-rose-700 bg-clip-text text-transparent leading-tight">
              What is MarkX 
              <span className="block">Insight™?</span>
            </h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-xl md:text-2xl text-amber-700 max-w-4xl mx-auto leading-relaxed"
            >
              A strategic brand-auditing tool powered by psychology and performance logic.
              It\'s not just about what works — it\'s about understanding 
              <span className="font-semibold text-orange-700"> why your audience responds</span> the way they do.
            </motion.p>
          </motion.div>

          {/* Audience First Section */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="text-center space-y-6"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-amber-800 mb-6">
              Audience-First Strategy
            </h2>
            <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-2xl border border-orange-200/50">
              <p className="text-lg md:text-xl text-amber-700 leading-relaxed max-w-4xl mx-auto">
                Most audits look at reach, likes, and trends. MarkX Insight flips that. We start with what your
                audience actually wants — and reverse-engineer your content, offer, and ecosystem around that.
              </p>
            </div>
          </motion.div>

          {/* Modules Grid */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="space-y-8"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-center text-amber-800 mb-12">
              Core Modules
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              {modules.map((mod, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30, scale: 0.95 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  whileHover={{ scale: 1.02, y: -5 }}
                  transition={{ duration: 0.6, ease: 'easeOut', delay: i * 0.1 }}
                  className="group relative"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${mod.color} rounded-2xl blur-xl opacity-40 group-hover:opacity-60 transition-opacity duration-300`} />
                  <div className="relative bg-white/80 backdrop-blur-sm p-8 rounded-2xl border border-orange-200/50 shadow-xl hover:shadow-2xl transition-all duration-300">
                    <div className="flex items-start gap-4">
                      <div className="text-4xl">{mod.icon}</div>
                      <div>
                        <h3 className="font-bold text-xl text-amber-800 mb-3">{mod.title}</h3>
                        <p className="text-amber-700 leading-relaxed">{mod.desc}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Interactive Timeline */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="space-y-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-center text-amber-800 mb-16">
              How MarkX Insight™ Actually Works
            </h2>

            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-orange-300 to-rose-300 rounded-full opacity-30" />
              
              <div className="space-y-24">
                {steps.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{ duration: 0.7, ease: 'easeOut', delay: i * 0.15 }}
                    className={`flex items-center justify-center ${
                      i % 2 === 0 ? 'md:justify-start' : 'md:justify-end'
                    }`}
                  >
                    <div className={`flex items-center gap-8 max-w-2xl ${
                      i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                    }`}>
                      {/* Step Number */}
                      <motion.div
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        className="flex-shrink-0 w-16 h-16 rounded-full bg-gradient-to-br from-orange-400 to-rose-400 text-white font-bold text-xl flex items-center justify-center shadow-2xl relative z-10"
                      >
                        {item.step}
                      </motion.div>

                      {/* Content */}
                      <motion.div
                        whileHover={{ scale: 1.02 }}
                        className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-orange-200/50 hover:shadow-2xl transition-all duration-300"
                      >
                        <h3 className="text-2xl font-bold mb-3 text-amber-800">
                          {item.title}
                        </h3>
                        <p className="text-amber-700 leading-relaxed mb-2">
                          {item.desc}
                        </p>
                        <div className="text-sm text-orange-600 font-medium">
                          {item.detail}
                        </div>
                      </motion.div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Features Grid */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="space-y-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-center text-amber-800 mb-16">
              Advanced Features
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((feature, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{ scale: 1.05, y: -10 }}
                  transition={{ duration: 0.5, ease: 'easeOut', delay: i * 0.1 }}
                  className="group"
                >
                  <div className="bg-white/70 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-orange-200/50 hover:shadow-xl transition-all duration-300 h-full">
                    <div className="text-3xl mb-4 group-hover:scale-110 transition-transform duration-300">
                      {feature.icon}
                    </div>
                    <h3 className="font-bold text-lg text-amber-800 mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-amber-700 text-sm leading-relaxed">
                      {feature.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="text-center space-y-8"
          >
            <div className="bg-gradient-to-r from-orange-100 to-rose-100 p-12 rounded-3xl shadow-2xl border border-orange-200/50">
              <h2 className="text-3xl md:text-4xl font-bold text-amber-800 mb-6">
                Ready to Transform Your Brand Strategy?
              </h2>
              <p className="text-xl text-amber-700 mb-8 max-w-2xl mx-auto">
                Let MarkX Insight™ unlock the psychology behind your audience\'s behavior and accelerate your growth.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-orange-500 to-rose-500 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                Start Your Insight Journey
              </motion.button>
            </div>
          </motion.div>
        </div>
      </main>
    </div>
  );
}