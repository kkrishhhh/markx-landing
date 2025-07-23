'use client'

import { useState, useEffect, useRef } from 'react'

const cases = [
  {
    img: '/images/case-studies/elina.jpg.png',
    name: 'Elina Chauhan – Singer & Content Creator',
    emoji: '🎤',
    category: 'Content Creator',
    metrics: ['2x Views', '2x Engagement', 'Brand Loyalty'],
    story: (
      <>
        Elina had the talent and the content — but engagement had plateaued. Despite putting in the work,
        her reels weren't reaching like they used to. We optimized her bio, restructured her content pillars,
        and introduced a subtle UGC loop that brought the soul back into her content. Within weeks, her reels
        began <span className="font-semibold text-amber-700">doubling in views</span> and fan DMs reignited.{" "}
        <span className="font-semibold text-amber-700">
          Engagement 2x'd and her personal brand started converting attention into loyalty.
        </span>
      </>
    ),
  },
  {
    img: '/images/case-studies/parikrama.jpg.png' ,
    name: 'Parikrama – Legacy Rock Band',
    emoji: '🥁',
    category: 'Legacy Band',
    metrics: ['30% Reach', 'Cross-Gen Appeal', 'Nostalgia Engine'],
    story: (
      <>
        Parikrama is iconic, but their online narrative didn't reflect that. We didn't change their voice —
        we enhanced it. By building a repeatable storytelling engine using legacy content + band psychology,
        we revived fan nostalgia and{" "}
        <span className="font-semibold text-amber-700">increased reel reach by 30%+</span>. Their content
        started pulling in younger fans without alienating the old guard.
      </>
    ),
  },
  {
    img: '/images/case-studies/vj.jpg.png',
    name: 'VJ Infinity – Performer & Personal Brand',
    emoji: '🎧',
    category: 'Performer',
    metrics: ['11.75% Engagement', 'Brand Identity', 'Booking Inquiries'],
    story: (
      <>
        VJ already had an audience — but no strategy. With no clear CTA or funnel, his followers were loyal
        but lost. We stepped in to decode his audience, mapped his top-performing formats, and rebuilt his
        Instagram CTA and bio flow.{" "}
        <span className="font-semibold text-amber-700">
          The result? 11.75% avg engagement rate and a brand identity that finally matched his energy.
        </span>{" "}
        His DMs shifted from "love your vibe" to "how can I book you?"
      </>
    ),
  },
  {
    img: '/images/case-studies/sama.jpg.png',
    name: 'SAMA Duo – Acoustic Event Artists',
    emoji: '🎻',
    category: 'Event Artists',
    metrics: ['900+ Followers', '3 Bookings', '4 Weeks'],
    story: (
      <>
        SAMA was growing but mostly offline. Their digital presence lacked cohesion — no clear hook, outdated bio,
        and scattered visual tone. We reframed their positioning to highlight intimacy + elegance, redesigned their
        Instagram layout strategy, and introduced emotion-driven copy.{" "}
        <span className="font-semibold text-amber-700">
          In 4 weeks, they gained 900+ organic followers and had 3 inbound booking requests from 1 reel.
        </span>
      </>
    ),
  },
]

export default function CaseStudiesPage() {
  const [isVisible, setIsVisible] = useState({})
  const [inView, setInView] = useState({})
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 })
  const [showFloatingElements, setShowFloatingElements] = useState(false)
  const [isHovering, setIsHovering] = useState(false)
  const observerRef = useRef(null)

  // Intersection Observer for scroll animations
  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = parseInt(entry.target.dataset.index)
          setInView(prev => ({ ...prev, [index]: entry.isIntersecting }))
        })
      },
      { threshold: 0.2 }
    )

    return () => observerRef.current?.disconnect()
  }, [])

  // Mouse tracking for subtle parallax effects and custom cursor
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      })
      setCursorPosition({
        x: e.clientX,
        y: e.clientY,
      })
    }

    window.addEventListener('mousemove', handleMouseMove)
    setTimeout(() => setShowFloatingElements(true), 500)
    
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  const attachObserver = (element, index) => {
    if (element && observerRef.current) {
      element.dataset.index = index
      observerRef.current.observe(element)
    }
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-stone-50 via-amber-50 to-stone-100 text-stone-800 overflow-hidden cursor-none">
      {/* Custom Cursor */}
      <div 
        className="fixed top-0 left-0 w-6 h-6 pointer-events-none z-50 transition-all duration-75 ease-out"
        style={{
          transform: `translate(${cursorPosition.x - 12}px, ${cursorPosition.y - 12}px)`,
        }}
      >
        <div className={`w-full h-full rounded-full bg-amber-600/80 backdrop-blur-sm border-2 border-white/50 shadow-lg transition-all duration-300 ${
          isHovering ? 'scale-150 bg-amber-500/90' : 'scale-100'
        }`} />
      </div>
      {/* Enhanced Background Pattern with Animation */}
      <div className="fixed inset-0 pointer-events-none opacity-30">
        <div 
          className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(180,83,9,0.03),transparent_50%)] transition-all duration-1000"
          style={{
            transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`,
          }}
        />
        <div 
          className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(41,37,36,0.03),transparent_50%)] transition-all duration-1000"
          style={{
            transform: `translate(${mousePosition.x * -0.02}px, ${mousePosition.y * -0.02}px)`,
          }}
        />
      </div>

      {/* Floating Elements */}
      {showFloatingElements && (
        <div className="fixed inset-0 pointer-events-none z-0">
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-amber-300/20 rounded-full animate-pulse" />
          <div className="absolute top-3/4 right-1/4 w-3 h-3 bg-stone-300/20 rounded-full animate-bounce" style={{ animationDelay: '2s' }} />
          <div className="absolute top-1/2 left-3/4 w-1 h-1 bg-amber-400/30 rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
        </div>
      )}

      <div className="relative z-10 py-20 px-6">
        <div className="max-w-4xl mx-auto space-y-24">

          {/* Enhanced Header with Staggered Animations */}
          <div className="text-center space-y-6">
            <div className="space-y-2">
              <h1 className="text-5xl md:text-6xl font-bold text-stone-900 tracking-tight animate-fade-in opacity-0 animation-delay-100">
                Real Results
              </h1>
              <h2 className="text-4xl md:text-5xl font-light text-amber-800 animate-fade-in opacity-0 animation-delay-300">
                Real Creators
              </h2>
            </div>
            
            <div className="space-y-4">
              <div className="inline-flex items-center px-4 py-2 bg-stone-200/50 backdrop-blur-sm rounded-full border border-stone-300/30 animate-fade-in opacity-0 animation-delay-500 hover:bg-stone-200/70 transition-all duration-300 hover:scale-105">
                <span className="text-sm text-stone-600">✨ Our previous work that actually speaks results</span>
              </div>
              <p className="text-lg text-stone-600 max-w-2xl mx-auto leading-relaxed animate-fade-in opacity-0 animation-delay-700">
                We don't do "just marketing." We engineer growth systems with soul — built for real people, not just metrics.
              </p>
            </div>
          </div>

          {/* Enhanced Case Studies */}
          {cases.map((cs, i) => (
            <div
              key={i}
              ref={(el) => attachObserver(el, i)}
              className={`group relative transform transition-all duration-1000 ${
                inView[i] ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
              }`}
              style={{ transitionDelay: `${i * 200}ms` }}
              onMouseEnter={() => {
                setIsVisible(prev => ({ ...prev, [i]: true }))
                setIsHovering(true)
              }}
              onMouseLeave={() => {
                setIsVisible(prev => ({ ...prev, [i]: false }))
                setIsHovering(false)
              }}
            >
              <div className="grid md:grid-cols-2 gap-12 items-center">
                {/* Enhanced Image Side */}
                <div className={`relative ${i % 2 === 1 ? 'md:order-2' : ''}`}>
                  <div className="relative group-hover:scale-[1.02] transition-all duration-700 ease-out">
                    {/* Enhanced Glow Effect */}
                    <div className="absolute -inset-4 bg-gradient-to-br from-amber-200/20 to-stone-300/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-700" />
                    
                    {/* Floating Border Animation */}
                    <div className="absolute -inset-1 bg-gradient-to-r from-amber-400/20 via-stone-400/20 to-amber-400/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-700 animate-pulse" />
                    
                    {/* Main Image Container */}
                    <div className="relative bg-white/80 backdrop-blur-sm rounded-xl overflow-hidden border border-stone-200/50 shadow-lg group-hover:shadow-2xl transition-all duration-700">
                      <img
                        src={cs.img}
                        alt={cs.name}
                        className="w-full h-auto object-cover group-hover:brightness-110 transition-all duration-700"
                      />
                      
                      {/* Enhanced Category Badge */}
                      <div className="absolute top-4 right-4 bg-stone-100/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium text-stone-700 border border-stone-200/50 group-hover:bg-amber-100/90 group-hover:border-amber-200/50 transition-all duration-500 group-hover:scale-110">
                        {cs.category}
                      </div>

                      {/* Animated Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-br from-amber-600/0 via-transparent to-stone-600/0 group-hover:from-amber-600/5 group-hover:to-stone-600/5 transition-all duration-700" />
                    </div>
                  </div>
                </div>

                {/* Enhanced Content Side */}
                <div className={`space-y-6 ${i % 2 === 1 ? 'md:order-1' : ''}`}>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3 group-hover:gap-4 transition-all duration-300">
                      <span className="text-2xl group-hover:scale-110 transition-transform duration-300 group-hover:animate-bounce">
                        {cs.emoji}
                      </span>
                      <h3 className="text-2xl md:text-3xl font-semibold text-stone-900 group-hover:text-amber-800 transition-colors duration-300">
                        {cs.name}
                      </h3>
                    </div>

                    {/* Enhanced Metrics */}
                    <div className="flex flex-wrap gap-2">
                      {cs.metrics.map((metric, idx) => (
                        <span 
                          key={idx}
                          className="px-3 py-1 bg-amber-100/70 text-amber-800 rounded-full text-sm font-medium border border-amber-200/50 hover:bg-amber-200/80 hover:scale-105 transition-all duration-300 cursor-default"
                          style={{ animationDelay: `${idx * 100}ms` }}
                        >
                          {metric}
                        </span>
                      ))}
                    </div>

                    <div className="text-base text-stone-600 leading-relaxed group-hover:text-stone-700 transition-colors duration-300">
                      {cs.story}
                    </div>
                  </div>

                  {/* Enhanced Progress Bar */}
                  <div className="relative w-full bg-stone-200/50 rounded-full h-2 overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-amber-500 via-amber-600 to-amber-700 rounded-full transition-all duration-1500 ease-out relative overflow-hidden"
                      style={{ width: isVisible[i] ? '100%' : '0%' }}
                    >
                      {/* Shimmer Effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] animate-shimmer" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* Enhanced CTA Section */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-amber-100/30 to-stone-200/30 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-700" />
            <div className="relative bg-white/60 backdrop-blur-sm rounded-2xl p-12 border border-stone-200/50 text-center space-y-6 shadow-lg group-hover:shadow-2xl transition-all duration-700 group-hover:bg-white/70">
              <h2 className="text-3xl md:text-4xl font-semibold text-stone-900 group-hover:text-amber-800 transition-colors duration-500">
                Want results like this?
              </h2>
              <p className="text-lg text-stone-600 max-w-2xl mx-auto leading-relaxed group-hover:text-stone-700 transition-colors duration-500">
                Get a free performance audit and let MarkX break down your next growth move.
              </p>
              <button 
                className="group/btn relative inline-flex items-center px-8 py-4 bg-gradient-to-r from-amber-700 to-amber-800 rounded-full text-white font-medium text-lg hover:shadow-xl hover:shadow-amber-700/20 transition-all duration-300 transform hover:scale-105 hover:from-amber-600 hover:to-amber-700 overflow-hidden"
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
              >
                {/* Button Shimmer Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover/btn:translate-x-[100%] transition-transform duration-700" />
                <span className="relative z-10">Claim Your Free Audit</span>
                <svg className="ml-2 w-5 h-5 group-hover/btn:translate-x-1 transition-transform duration-300 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Custom CSS Animations */}
      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        
        .animate-fade-in {
          animation: fadeIn 0.8s ease-out forwards;
        }
        
        .animate-shimmer {
          animation: shimmer 2s infinite;
        }
        
        .animation-delay-100 { animation-delay: 0.1s; }
        .animation-delay-300 { animation-delay: 0.3s; }
        .animation-delay-500 { animation-delay: 0.5s; }
        .animation-delay-700 { animation-delay: 0.7s; }
      `}</style>
    </main>
  )
}