import Hero from '@/components/sections/hero'
import USP from '@/components/sections/usp'
import Pricing from '@/components/sections/pricing'
import AddOns from '@/components/sections/addons'
import Offers from '@/components/sections/offers'
import Footer from '@/components/layout/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <USP />

      {/* CTA Buttons to Insight & Case Studies */}
      <section className="flex justify-center gap-4 mt-12 mb-6">
        <a href="/insight">
          <button className="bg-zinc-900 text-white rounded-full px-5 py-2 text-sm hover:opacity-90 cursor-pointer">
            View Insight
          </button>
        </a>
        <a href="/case-studies">
          <button className="bg-zinc-900 text-white rounded-full px-5 py-2 text-sm hover:opacity-90 cursor-pointer">
            View Case Studies
          </button>
        </a>
      </section>

      <Pricing />
      <AddOns />
      <Offers />
      <Footer />
    </main>
  )
}
