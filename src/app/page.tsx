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
      <Pricing />
      <AddOns />
      <Offers />
      {/* <Footer /> */}
    </main>
  )
}
