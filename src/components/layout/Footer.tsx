import { Home, Lightbulb, FileText, Mail } from 'lucide-react'

export default function Footer() {
  const navLinks = [
    { href: '/', label: 'Home', icon: Home },
    { href: '/insight', label: 'Insight', icon: Lightbulb },
    { href: '/case-studies', label: 'Case Studies', icon: FileText },
    { href: '/contact', label: 'Contact', icon: Mail },
  ]

  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white py-12 px-6 overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent)]"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(45deg,transparent_49%,rgba(255,255,255,0.03)_50%,transparent_51%)] bg-[length:20px_20px]"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          {/* MarkX Title */}
          <div className="text-center lg:text-left">
            <div className="text-4xl font-black tracking-tight bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent mb-2">
              MarkX
            </div>
            <div className="text-gray-400 text-sm font-medium">
              Crafting Digital Excellence
            </div>
          </div>

          {/* Nav Links */}
          <nav className="flex flex-wrap justify-center gap-6 lg:gap-8">
            {navLinks.map((link) => {
              const Icon = link.icon
              return (
                <a
                  key={link.href}
                  href={link.href}
                  className="group flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-300 hover:bg-white/10 hover:shadow-lg hover:shadow-white/5 text-gray-300 hover:text-white"
                >
                  <Icon className="w-4 h-4 transition-all duration-300 group-hover:scale-110 group-hover:text-blue-400" />
                  <span className="font-medium">{link.label}</span>
                </a>
              )
            })}
          </nav>

          {/* Email */}
          <div className="flex items-center gap-3 px-4 py-3 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300 group">
            <Mail className="w-5 h-5 text-blue-400 group-hover:scale-110 transition-transform duration-300" />
            <a 
              href="mailto:markxoffice@gmail.com" 
              className="text-gray-300 hover:text-white font-medium transition-colors duration-300"
            >
              markxoffice@gmail.com
            </a>
          </div>
        </div>

        {/* Bottom border */}
        <div className="mt-8 pt-6 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
            <div>
              © 2025 MarkX. All rights reserved.
            </div>
            <div className="flex items-center gap-4">
              <span>Made with</span>
              <div className="w-4 h-4 bg-gradient-to-r from-red-500 to-pink-500 rounded-full animate-pulse"></div>
              <span>for digital innovation</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}