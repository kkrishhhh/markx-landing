'use client'

import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'

const plans = [
  {
    name: 'Launch Pad',
    price: '₹4,999',
    tagline: 'Best for First-Time Clients',
    features: ['6 Posts', '1 Reel', 'Profile Optimization'],
    details: [
      '6 static/carousel posts',
      '1 reel',
      'Profile + bio optimization',
      'Hashtag & caption strategy',
      'Weekly insights summary',
      'Bonus: Free 1-hour brand strategy call',
    ],
  },
  {
    name: 'Growth Boost',
    price: '₹9,999',
    tagline: 'Most Popular',
    features: ['10 Posts', '3 Reels', 'Community Engagement'],
    details: [
      '10 posts',
      '3 reels',
      'Community engagement (comments + DMs)',
      'Content calendar & approval system',
      'Monthly performance report',
      'Bonus: Free paid ad setup (client funds ad budget separately)',
    ],
  },
  {
    name: 'Scale Up Pro',
    price: '₹17,999',
    tagline: 'Designed for Hustling Brands',
    features: ['12 Posts', '5 Reels', 'Ad Budget Mgmt'],
    details: [
      '12 posts',
      '5 reels',
      'Ad budget management up to ₹5,000',
      'Influencer shortlisting & outreach',
      'Monthly analytics dashboard',
      '2 strategy calls/month',
      'Bonus: Storyline + engagement support',
    ],
  },
  {
    name: 'Dominate Plan',
    price: '₹29,999',
    tagline: 'For High-Intent Brands',
    features: ['15 Posts', '6–8 Reels', 'Conversion Strategy'],
    details: [
      '15 posts',
      '6–8 reels',
      'Paid ads setup + optimization (₹10K budget handled)',
      'UGC strategy or influencer campaign execution',
      'Conversion-focused content',
      'Custom analytics dashboard',
      'Bi-weekly reporting + weekly strategy sync',
      'Bonus: Custom content strategy PDF & story design',
    ],
  },
]

export default function Pricing() {
  return (
    <section className="w-full py-20 px-6 bg-zinc-100" id="pricing">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.4 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="text-3xl font-semibold mb-12 text-zinc-800"
        >
          Simple Pricing, Serious Growth
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {plans.map((plan, i) => (
            <motion.div
  key={i}
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: false, amount: 0.15 }}
  transition={{
    duration: 0.4,           
    ease: 'easeOut',         
    delay: i * 0.04          
  }}
  className="bg-white border rounded-2xl p-6 shadow-sm ring-1 ring-zinc-200 flex flex-col justify-between text-left hover:shadow-lg hover:scale-[1.03] transition-all duration-300 ease-in-out"
>


              <div>
                <h3 className="text-xl font-semibold mb-1 text-zinc-800">{plan.name}</h3>
                <p className="text-zinc-500 mb-2 text-sm">{plan.tagline}</p>
                <p className="text-2xl font-bold mb-4">{plan.price}</p>
                <ul className="text-sm text-zinc-600 mb-4 space-y-1">
                  {plan.features.map((feature, idx) => (
                    <li key={idx}>✅ {feature}</li>
                  ))}
                </ul>
              </div>

              <div className="flex gap-2 mt-auto pt-4">
                <Button variant="default" className="cursor-pointer">
                Get Started
                </Button>


                <Dialog>
                  <DialogTrigger asChild>
  <Button variant="outline" className="cursor-pointer">Details</Button>
</DialogTrigger>

                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>
                        {plan.name} – {plan.price}
                      </DialogTitle>
                      <DialogDescription>
                        <ul className="mt-4 text-sm space-y-2 text-zinc-700 list-disc list-inside">
                          {plan.details.map((item, idx) => (
                            <li key={idx}>{item}</li>
                          ))}
                        </ul>
                      </DialogDescription>
                    </DialogHeader>
                  </DialogContent>
                </Dialog>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
