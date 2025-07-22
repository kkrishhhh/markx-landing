'use client'

import { useState } from 'react'
import { Menu, X, Home, Lightbulb, FileText, Mail } from 'lucide-react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  const navLinks = [
    { href: '/', label: 'Home', icon: Home },
    { href: '/insight', label: 'Insight', icon: Lightbulb },
    { href: '/case-studies', label: 'Case Studies', icon: FileText },
    { href: '/contact', label: 'Contact', icon: Mail },
  ]

  return (
    <header className="w-full bg-white/20 backdrop-blur-lg border-b border-white/30 sticky top-0 z-50 shadow-lg shadow-white/10">
      <nav className="flex justify-between items-center px-6 py-4 max-w-7xl mx-auto">
        
        {/* Logo — always black */}
        <div className="relative group">
          <div className="text-3xl font-black tracking-tight text-black">
            MarkX
          </div>
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg blur opacity-0 group-hover:opacity-30 transition duration-300"></div>
        </div>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center gap-8 text-sm font-medium">
          {navLinks.map((link) => {
            const Icon = link.icon
            return (
              <li key={link.href} className="relative group">
                <Link
                  href={link.href}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-300 hover:bg-white/20 hover:shadow-lg hover:shadow-white/10 backdrop-blur-sm ${
                    pathname === link.href
                      ? 'text-blue-700 bg-white/30 shadow-lg shadow-white/10'
                      : 'text-gray-700 hover:text-gray-900'
                  }`}
                >
                  <Icon className="w-4 h-4 transition-transform duration-300 group-hover:scale-110" />
                  <span className="font-medium">{link.label}</span>
                </Link>
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 transition-all duration-300 group-hover:w-full"></div>
              </li>
            )
          })}
        </ul>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="relative p-2 rounded-lg hover:bg-white/20 hover:backdrop-blur-sm transition-all duration-200"
          >
            <div className="w-6 h-6 relative">
              <Menu
                className={`w-6 h-6 absolute transition-all duration-300 ${
                  isOpen ? 'rotate-90 opacity-0' : 'rotate-0 opacity-100'
                }`}
              />
              <X
                className={`w-6 h-6 absolute transition-all duration-300 ${
                  isOpen ? 'rotate-0 opacity-100' : '-rotate-90 opacity-0'
                }`}
              />
            </div>
          </button>
        </div>
      </nav>

      {/* Mobile Nav Dropdown */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="bg-white/20 backdrop-blur-lg border-t border-white/30 px-6 py-4">
          <ul className="flex flex-col gap-2">
            {navLinks.map((link) => {
              const Icon = link.icon
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 hover:bg-white/20 hover:shadow-lg hover:shadow-white/10 backdrop-blur-sm ${
                      pathname === link.href
                        ? 'text-blue-700 bg-white/30 shadow-lg shadow-white/10'
                        : 'text-gray-700 hover:text-gray-900'
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    <Icon className="w-5 h-5" />
                    <span className="font-medium">{link.label}</span>
                  </Link>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </header>
  )
}
