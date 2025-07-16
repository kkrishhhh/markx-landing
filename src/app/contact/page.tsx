'use client'

import { motion } from 'framer-motion'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'

export default function ContactPage() {
  return (
    <main className="min-h-screen py-20 px-6 bg-white text-zinc-800">
      <div className="max-w-xl mx-auto text-center space-y-12">
        {/* MarkX Title */}
        <motion.h1
          className="text-4xl font-extrabold tracking-tight text-zinc-900"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          MarkX
        </motion.h1>

        {/* Email Section */}
        <motion.div
          className="space-y-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
        >
          <p className="text-zinc-600 text-lg">
            Contact us directly at <br />
            <span className="font-semibold text-zinc-900">markxoffice@gmail.com</span>
          </p>

          <a
            href="mailto:markxoffice@gmail.com"
            className="inline-block bg-zinc-900 text-white rounded-full px-6 py-2 text-sm font-medium cursor-pointer hover:opacity-90"
          >
            Send Email
          </a>
        </motion.div>

        {/* FAQ Section */}
        <motion.div
          className="text-left pt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <h2 className="text-2xl font-bold mb-6 text-center">Frequently Asked Questions</h2>

          <Accordion type="multiple" className="w-full text-sm">
            <AccordionItem value="faq1">
              <AccordionTrigger className="cursor-pointer">What is MarkX?</AccordionTrigger>
              <AccordionContent>
                MarkX is a new-age creative marketing agency that helps brands, influencers, and startups grow their
                digital presence through content, storytelling, influencer marketing, and AI-driven insights.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="faq2">
              <AccordionTrigger className="cursor-pointer">What services do you offer?</AccordionTrigger>
              <AccordionContent>
                Social media content, UGC campaigns, paid ad strategy, brand consulting, and AI-powered audits.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="faq3">
              <AccordionTrigger className="cursor-pointer">Who are your services for?</AccordionTrigger>
              <AccordionContent>
                We work with creators, startups, beauty/fashion brands, and regional businesses — customized for all stages.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="faq4">
              <AccordionTrigger className="cursor-pointer">Why should I choose MarkX over others?</AccordionTrigger>
              <AccordionContent>
                Direct founder access, startup-friendly pricing, AI-powered execution, and creator-first culture.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="faq5">
              <AccordionTrigger className="cursor-pointer">What makes MarkX different?</AccordionTrigger>
              <AccordionContent>
                We're building a strategy + tech + culture ecosystem for next-gen brands — not just selling services.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="faq6">
              <AccordionTrigger className="cursor-pointer">How does your pricing work?</AccordionTrigger>
              <AccordionContent>
                4 monthly plans from ₹5,999 to ₹29,999 based on content volume, ads, influencer support, and analytics.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="faq7">
              <AccordionTrigger className="cursor-pointer">Can I book a free consultation?</AccordionTrigger>
              <AccordionContent>
                Yes! We offer a free Instagram audit or a 15-min strategy call. Email us to book it.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="faq8">
              <AccordionTrigger className="cursor-pointer">Where is your team based?</AccordionTrigger>
              <AccordionContent>
                We're India-based with global collaborators — fully remote and talent-first.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="faq9">
              <AccordionTrigger className="cursor-pointer">I’m a student/intern/freelancer. Can I work with you?</AccordionTrigger>
              <AccordionContent>
                Yes! We offer internships and collabs across content, editing, marketing, design, and automation. Hit us up!
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="faq10">
              <AccordionTrigger className="cursor-pointer">How can I get in touch with MarkX?</AccordionTrigger>
              <AccordionContent>
                Email us at <strong>markxoffice@gmail.com</strong> or visit our Contact section to start a convo.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </motion.div>
      </div>
    </main>
  )
}
