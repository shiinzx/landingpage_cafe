import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 60)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMobileMenuOpen(false)
  }

  const navLinks = [
    { label: 'Beranda', id: 'beranda' },
    { label: 'Signature', id: 'signature' },
    { label: 'Menu', id: 'menu' },
    { label: 'Sejarah', id: 'sejarah' },
    { label: 'Kontak', id: 'kontak' },
  ]

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-[#FAF6F1]/80 backdrop-blur-xl border-b border-[#E0D9D1]'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">

            {/* Logo */}
            <button
              onClick={() => scrollToSection('beranda')}
              className="flex items-center gap-2.5 group"
            >
              <svg
                className="w-7 h-7 transition-transform group-hover:scale-110"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <linearGradient id="navCoffeeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="var(--gold-light)" />
                    <stop offset="100%" stopColor="var(--gold)" />
                  </linearGradient>
                </defs>
                {/* Steam */}
                <path d="M6 3C6.3 4 5.7 4.8 6 5.8" stroke="url(#navCoffeeGrad)" strokeWidth="1.5" strokeLinecap="round" />
                <path d="M9.5 2.5C9.8 3.5 9.2 4.3 9.5 5.3" stroke="url(#navCoffeeGrad)" strokeWidth="1.5" strokeLinecap="round" />
                <path d="M13 3C13.3 4 12.7 4.8 13 5.8" stroke="url(#navCoffeeGrad)" strokeWidth="1.5" strokeLinecap="round" />
                {/* Cup Body */}
                <path d="M16 8C16 11 14 13.5 11 13.5H7C4 13.5 2 11 2 8V7H16V8Z" fill="url(#navCoffeeGrad)" fillOpacity="0.15" stroke="url(#navCoffeeGrad)" strokeWidth="1.8" strokeLinejoin="round" />
                {/* Handle */}
                <path d="M16 8H17.5C18.8 8 19.5 8.8 19.5 9.8C19.5 10.8 18.8 11.5 17.5 11.5H16" stroke="url(#navCoffeeGrad)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                {/* Saucer */}
                <path d="M2 16.5H16" stroke="url(#navCoffeeGrad)" strokeWidth="1.8" strokeLinecap="round" />
              </svg>
              <span
                className="text-xl md:text-2xl text-[#32261B] font-bold tracking-tight"
              >
                Ar'Seven Coffee
              </span>
            </button>

            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="text-[#5D4037] hover:text-[#8B5E3C] hover:bg-[rgba(139,94,60,0.1)] px-4 py-2 rounded-lg text-base font-normal tracking-wide transition-all relative group"
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-[#8B5E3C] transition-all duration-300 group-hover:w-full" />
                </button>
              ))}
            </div>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 rounded-lg text-[var(--cream-muted)] hover:text-[var(--gold)] hover:bg-[var(--border)]/10 transition-colors"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40 md:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      <div
        className={`md:hidden fixed top-0 right-0 bottom-0 w-72 bg-[#FAF6F1] z-50 transform transition-transform duration-300 ease-in-out border-l border-[#E0D9D1] ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Close button */}
        <div className="flex items-center justify-between p-6 border-b border-[var(--border)]">
          <div className="flex items-center gap-2">
            <svg
              className="w-5 h-5"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <linearGradient id="drawerCoffeeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="var(--gold-light)" />
                  <stop offset="100%" stopColor="var(--gold)" />
                </linearGradient>
              </defs>
              <path d="M6 3C6.3 4 5.7 4.8 6 5.8" stroke="url(#drawerCoffeeGrad)" strokeWidth="1.5" strokeLinecap="round" />
              <path d="M9.5 2.5C9.8 3.5 9.2 4.3 9.5 5.3" stroke="url(#drawerCoffeeGrad)" strokeWidth="1.5" strokeLinecap="round" />
              <path d="M13 3C13.3 4 12.7 4.8 13 5.8" stroke="url(#drawerCoffeeGrad)" strokeWidth="1.5" strokeLinecap="round" />
              <path d="M16 8C16 11 14 13.5 11 13.5H7C4 13.5 2 11 2 8V7H16V8Z" fill="url(#drawerCoffeeGrad)" fillOpacity="0.15" stroke="url(#drawerCoffeeGrad)" strokeWidth="1.8" strokeLinejoin="round" />
              <path d="M16 8H17.5C18.8 8 19.5 8.8 19.5 9.8C19.5 10.8 18.8 11.5 17.5 11.5H16" stroke="url(#drawerCoffeeGrad)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M2 16.5H16" stroke="url(#drawerCoffeeGrad)" strokeWidth="1.8" strokeLinecap="round" />
            </svg>
            <span
              className="text-lg text-[#32261B] font-bold"
            >
              Ar'Seven Coffee
            </span>
          </div>
          <button
            onClick={() => setIsMobileMenuOpen(false)}
            className="p-2 text-[var(--cream-muted)] hover:text-[var(--gold)]"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 space-y-1">
          {navLinks.map((link, i) => (
            <button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className="block w-full text-left px-4 py-3 text-[#5D4037] hover:text-[#32261B] hover:bg-[rgba(139,94,60,0.1)] rounded-xl font-semibold transition-colors text-base tracking-wide"
              style={{ animationDelay: `${i * 0.05}s` }}
            >
              {link.label}
            </button>
          ))}
        </div>

        <div className="px-6">
          <a
            href="https://r.grab.com/g/6-20260512_094057_8d3f2fb5409f4deda59258445cda5087_MEXMPS-IDGFSTI000039oz"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full py-3 bg-[#8B5E3C] text-white rounded-[10px] font-normal text-center hover:bg-[#7A4E2F] transition-colors text-base shadow-md shadow-[rgba(139,94,60,0.3)]"
          >
            🛵 Pesan via GrabFood
          </a>
        </div>

        <div className="absolute bottom-8 left-6 right-6">
          <div className="p-4 border border-[#E0D9D1] rounded-xl bg-white shadow-sm">
            <p className="text-[#8B5E3C] text-xs font-bold mb-2">Jam Buka</p>
            <p className="text-[#5D4037] text-xs">Sen–Kam, Sab–Min: 09:00–02:00</p>
            <p className="text-[#5D4037] text-xs">Jumat: 13:00–02:00</p>
          </div>
        </div>
      </div>
    </>
  )
}
