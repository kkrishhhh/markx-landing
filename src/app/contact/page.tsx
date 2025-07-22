'use client'

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ContactPage = () => {
  const [activeAccordion, setActiveAccordion] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const toggleAccordion = (index) => {
    setActiveAccordion(activeAccordion === index ? null : index);
  };

  const faqs = [
    {
      question: "What is MarkX?",
      answer: "MarkX is a new-age creative marketing agency that helps brands, influencers, and startups grow their digital presence through content, storytelling, influencer marketing, and AI-driven insights."
    },
    {
      question: "What services do you offer?",
      answer: "Social media content, UGC campaigns, paid ad strategy, brand consulting, and AI-powered audits."
    },
    {
      question: "Who are your services for?",
      answer: "We work with creators, startups, beauty/fashion brands, and regional businesses — customized for all stages."
    },
    {
      question: "Why should I choose MarkX over others?",
      answer: "Direct founder access, startup-friendly pricing, AI-powered execution, and creator-first culture."
    },
    {
      question: "What makes MarkX different?",
      answer: "We're building a strategy + tech + culture ecosystem for next-gen brands — not just selling services."
    },
    {
      question: "How does your pricing work?",
      answer: "4 monthly plans from ₹5,999 to ₹29,999 based on content volume, ads, influencer support, and analytics."
    },
    {
      question: "Can I book a free consultation?",
      answer: "Yes! We offer a free Instagram audit or a 15-min strategy call. Email us to book it."
    },
    {
      question: "Where is your team based?",
      answer: "We're India-based with global collaborators — fully remote and talent-first."
    },
    {
      question: "I'm a student/intern/freelancer. Can I work with you?",
      answer: "Yes! We offer internships and collabs across content, editing, marketing, design, and automation. Hit us up!"
    },
    {
      question: "How can I get in touch with MarkX?",
      answer: "Email us at markxoffice@gmail.com or visit our Contact section to start a convo."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-rose-50 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-64 h-64 bg-gradient-to-br from-amber-200/20 to-rose-200/20 rounded-full blur-3xl"
            style={{
              left: `${20 + i * 15}%`,
              top: `${10 + i * 12}%`,
            }}
            animate={{
              x: [0, 50, 0],
              y: [0, -30, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 6 + i * 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Cursor Following Element */}
      <motion.div
        className="fixed w-6 h-6 bg-gradient-to-br from-amber-400 to-rose-400 rounded-full pointer-events-none z-50 mix-blend-difference"
        style={{
          left: mousePosition.x - 12,
          top: mousePosition.y - 12,
        }}
        animate={{
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 1,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
        {/* Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            className="text-8xl font-black mb-6 bg-gradient-to-r from-amber-600 via-rose-600 to-orange-600 bg-clip-text text-transparent"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            Contact
          </motion.h1>
          <motion.p
            className="text-2xl text-amber-800/80 font-light"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Let's create something amazing together
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-20 items-start">
          {/* Contact Information */}
          <motion.div
            className="space-y-12"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {/* MarkX Brand */}
            <div className="text-center lg:text-left">
              <motion.h2
                className="text-6xl font-black mb-6 bg-gradient-to-r from-amber-600 to-rose-600 bg-clip-text text-transparent"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                MarkX
              </motion.h2>
              <p className="text-amber-800/70 text-lg leading-relaxed">
                A new-age creative marketing agency transforming brands through innovative storytelling and AI-driven insights.
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-8">
              <motion.div
                className="group"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-8 shadow-lg border border-amber-200/50">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-amber-400 to-rose-400 rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-amber-900">Email Us</h3>
                      <p className="text-amber-700">Get in touch directly</p>
                    </div>
                  </div>
                  <p className="text-2xl font-bold text-amber-900 mb-4">markxoffice@gmail.com</p>
                  <motion.a
                    href="mailto:markxoffice@gmail.com"
                    className="inline-flex items-center space-x-2 bg-gradient-to-r from-amber-500 to-rose-500 text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span>Send Email</span>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </motion.a>
                </div>
              </motion.div>


            </div>
          </motion.div>

          {/* FAQ Section */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <div className="text-center lg:text-left">
              <h2 className="text-4xl font-black mb-6 bg-gradient-to-r from-rose-600 to-orange-600 bg-clip-text text-transparent">
                Frequently Asked Questions
              </h2>
              <p className="text-amber-800/70 text-lg">
                Everything you need to know about MarkX
              </p>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  className="bg-white/60 backdrop-blur-sm rounded-2xl shadow-lg border border-amber-200/50 overflow-hidden"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <motion.button
                    onClick={() => toggleAccordion(index)}
                    className="w-full p-6 text-left flex items-center justify-between hover:bg-amber-50/50 transition-colors duration-300"
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                  >
                    <span className="text-lg font-semibold text-amber-900">{faq.question}</span>
                    <motion.svg
                      className="w-6 h-6 text-amber-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      animate={{ rotate: activeAccordion === index ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </motion.svg>
                  </motion.button>
                  <AnimatePresence>
                    {activeAccordion === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="px-6 pb-6 text-amber-800/80 leading-relaxed">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-20"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          <div className="bg-gradient-to-r from-amber-500 via-rose-500 to-orange-500 rounded-3xl p-12 text-white">
            <h3 className="text-3xl font-black mb-4">Ready to Transform Your Brand?</h3>
            <p className="text-xl mb-8 opacity-90">
              Join the next generation of brands that are redefining digital marketing
            </p>
            <motion.a
              href="mailto:markxoffice@gmail.com"
              className="inline-flex items-center space-x-2 bg-white text-amber-600 px-8 py-4 rounded-full font-bold text-lg hover:shadow-xl transition-all duration-300"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>Start Your Journey</span>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ContactPage;