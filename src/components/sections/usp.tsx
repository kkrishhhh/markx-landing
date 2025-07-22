"use client";

import React, { useState, useEffect } from 'react';
import { Zap, Eye, Brain } from 'lucide-react';

const points = [
  {
    icon: <Zap className="w-8 h-8" />,
    title: 'AI + Psychology Engine',
    desc: 'We don\'t guess. We audit, analyze, and scale using audience behavior and growth science.',
  },
  {
    icon: <Eye className="w-8 h-8" />,
    title: 'Audience-First Strategy', 
    desc: 'Your growth isn\'t based on trends — it\'s built from what your audience actually wants.',
  },
  {
    icon: <Brain className="w-8 h-8" />,
    title: 'Smart Content System',
    desc: 'Every caption, post, and plan is rooted in brand psychology and systemized storytelling.',
  },
];

export default function EnergeticUSPSection() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="relative w-full py-24 px-6 overflow-hidden"
      style={{
        background: `
          radial-gradient(circle at 20% 20%, rgba(244, 167, 140, 0.15) 0%, transparent 50%),
          radial-gradient(circle at 80% 80%, rgba(232, 197, 160, 0.15) 0%, transparent 50%),
          radial-gradient(circle at 40% 60%, rgba(210, 180, 140, 0.1) 0%, transparent 50%),
          rgb(250, 247, 242)
        `
      }}
    >
      {/* Floating Elements */}
      <div className="absolute inset-0">
        {[...Array(4)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full opacity-20 animate-pulse"
            style={{
              background: `linear-gradient(135deg, rgb(244, 167, 140) 0%, rgb(232, 197, 160) 100%)`,
              width: `${80 + i * 30}px`,
              height: `${80 + i * 30}px`,
              top: `${20 + i * 20}%`,
              left: `${15 + i * 20}%`,
              animationDelay: `${i * 0.8}s`,
              animationDuration: `${3 + i}s`,
              transform: `translate(${mousePosition.x * (i + 1) * 0.1}px, ${mousePosition.y * (i + 1) * 0.1}px)`,
              transition: 'transform 0.3s ease-out',
            }}
          />
        ))}
      </div>

      <div className="relative max-w-6xl mx-auto text-center">
        {/* Heading */}
        <div className="mb-20">
          <div className="inline-block px-6 py-3 rounded-full mb-8 border border-amber-200/30 bg-gradient-to-r from-amber-100/30 to-amber-50/20">
            <span className="text-sm font-medium flex items-center gap-2"
              style={{ color: 'rgb(139, 69, 19)' }}
            >
              <Zap className="w-4 h-4 text-yellow-600" />
              What Makes Us Different
            </span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight"
            style={{ color: 'rgb(58, 35, 23)' }}
          >
            What Makes MarkX
            <br />
            <span className="bg-gradient-to-r from-yellow-600 via-orange-500 to-red-500 bg-clip-text text-transparent">
              Different?
            </span>
          </h2>
          
          <p className="text-xl max-w-2xl mx-auto leading-relaxed"
            style={{ color: 'rgb(100, 85, 75)' }}
          >
            We don't follow trends. We create them using data-driven insights and proven psychology.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {points.map((point, idx) => (
            <div
              key={idx}
              className="group relative backdrop-blur-sm rounded-2xl p-8 border border-amber-200/30 transition-all duration-300 hover:scale-105 hover:-translate-y-2 hover:shadow-xl"
              style={{ 
                background: `linear-gradient(135deg, 
                  rgba(255, 255, 255, 0.9) 0%, 
                  rgba(250, 240, 230, 0.8) 50%,
                  rgba(240, 230, 220, 0.7) 100%
                )`,
                boxShadow: `0 8px 32px rgba(180, 120, 90, 0.1)`,
              }}
            >
              {/* Icon */}
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl mb-6 transition-all duration-300 group-hover:scale-110 group-hover:rotate-6"
                style={{
                  background: `linear-gradient(135deg, rgb(244, 167, 140) 0%, rgb(232, 197, 160) 100%)`,
                  color: 'white',
                  boxShadow: `0 4px 16px rgba(244, 167, 140, 0.3)`,
                }}
              >
                {point.icon}
              </div>
              
              <h3 className="font-bold text-2xl mb-4 transition-all duration-300 group-hover:scale-105"
                style={{ color: 'rgb(58, 35, 23)' }}
              >
                {point.title}
              </h3>
              
              <p className="leading-relaxed"
                style={{ color: 'rgb(100, 85, 75)' }}
              >
                {point.desc}
              </p>
              
              {/* Hover glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/10 to-orange-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>
        
        {/* CTA */}
        <div className="mt-16">
          <button className="group relative px-8 py-4 bg-gradient-to-r from-yellow-500 to-orange-600 text-white font-bold text-lg rounded-full hover:from-yellow-400 hover:to-orange-500 transition-all duration-300 hover:scale-105 hover:shadow-xl">
            <span className="relative z-10">See How We Do It</span>
            <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </button>
        </div>
      </div>
    </section>
  );
}