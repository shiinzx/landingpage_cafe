import { useEffect, useState } from 'react'
import { ChevronDown } from 'lucide-react'

export default function Hero() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setMounted(true), 100)
    return () => clearTimeout(timer)
  }, [])

  return (
    <section
      id="beranda"
      className="relative min-h-screen flex items-center justify-center pt-24 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden bg-[#E0D9D1]"
    >
      {/* Noise overlay */}
      <div className="noise-overlay opacity-[0.03]" />

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center z-10">
        
        {/* Left Column - Text Content */}
        <div
          className={`lg:col-span-7 flex flex-col items-start text-left transition-all duration-1000 delay-100 ${
            mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-1.5 rounded-[20px] text-xs font-semibold text-[#5D4037] bg-white border border-[rgba(139,94,60,0.1)] shadow-sm mb-6">
            <span className="w-2 h-2 rounded-full bg-[#8B5E3C] mr-2.5 animate-pulse" />
            Harga mulai dari Rp 3.000
          </div>

          {/* Main Title */}
          <h1
            className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-bold text-[#32261B] leading-[1.0] mb-6 tracking-normal"
          >
            Ar'Seven Coffee<br />Corner
          </h1>

          {/* Description */}
          <p className="text-sm sm:text-base md:text-lg text-[#5D4037] font-normal leading-[1.4] mb-8 max-w-xl">
            Nikmati secangkir kopi berkualitas dengan suasana nyaman dan harga terjangkau. Temukan kenikmatan kopi autentik di setiap tegukan.
          </p>

          <div className="flex flex-row items-center gap-4 w-full sm:w-auto">
            <button
              onClick={() => document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-3.5 bg-[#8B5E3C] text-white rounded-[10px] font-normal text-base hover:bg-[#7A4E2F] hover:-translate-y-0.5 active:scale-95 transition-all shadow-md shadow-[rgba(139,94,60,0.3)]"
            >
              Lihat Menu
            </button>
            <a
              href="https://r.grab.com/g/6-20260512_094057_8d3f2fb5409f4deda59258445cda5087_MEXMPS-IDGFSTI000039oz"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3.5 bg-white border-2 border-[#8B5E3C] text-[#8B5E3C] rounded-[9999px] font-semibold text-base hover:bg-[#F5EBE0] hover:border-[#6B4427] hover:-translate-y-0.5 active:scale-95 transition-all"
            >
              Pesan GrabFood
            </a>
          </div>

          <div className="inline-flex items-center gap-5 px-6 py-4 bg-white border border-[rgba(139,94,60,0.1)] rounded-2xl shadow-[rgba(0,0,0,0.05)_0px_1px_2px_0px] text-left w-full sm:w-auto max-w-md mt-10 md:mt-16">
            <div className="w-10 h-10 rounded-full bg-[#8B5E3C]/10 text-[#8B5E3C] flex items-center justify-center flex-shrink-0">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient id="clockSvgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#8B5E3C" />
                    <stop offset="100%" stopColor="#8B5E3C" />
                  </linearGradient>
                </defs>
                <circle cx="12" cy="12" r="9" stroke="url(#clockSvgGrad)" strokeWidth="1.8" fill="url(#clockSvgGrad)" fillOpacity="0.08" />
                <path d="M12 7V12L15 14.5" stroke="url(#clockSvgGrad)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                <circle cx="12" cy="12" r="1.2" fill="#8B5E3C" />
              </svg>
            </div>
            <div className="flex items-center gap-5 flex-1">
              <div>
                <p className="text-[9px] uppercase font-bold text-[#8B5E3C] tracking-wider mb-0.5">Jam Buka</p>
                <p className="text-xs sm:text-sm font-bold text-[#32261B]">09:00 - 02:00</p>
              </div>
              <div className="w-px h-8 bg-[#E0D9D1]" />
              <div>
                <p className="text-[9px] uppercase font-bold text-[#8B5E3C] tracking-wider mb-0.5">Jumat</p>
                <p className="text-xs sm:text-sm font-bold text-[#32261B]">13:00 - 02:00</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column - Visual/Image */}
        <div
          className={`lg:col-span-5 relative w-full flex justify-center items-center transition-all duration-1000 delay-300 ${
            mounted ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`}
        >
          {/* Main Image with Card container */}
          <div className="relative w-full max-w-lg aspect-[4/3] sm:aspect-[1.3] overflow-hidden rounded-[24px] shadow-sm border border-[rgba(139,94,60,0.1)] bg-white">
            <img
              src="/hero-coffee.png"
              alt="Ar'Seven Premium Coffee Cups"
              className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
            />
            
            {/* Rating / Floating Badge */}
            <div className="absolute bottom-5 left-5 bg-white border border-[rgba(139,94,60,0.1)] px-4 py-3.5 rounded-[20px] shadow-[rgba(0,0,0,0.05)_0px_1px_2px_0px] flex items-center gap-3 z-20">
              <div className="flex items-center gap-1">
                {[...Array(2)].map((_, i) => (
                  <div key={i} className="w-5.5 h-5.5 rounded-full bg-[#8B5E3C]/15 flex items-center justify-center">
                    <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <defs>
                        <linearGradient id={`starGrad-${i}`} x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#FFE082" />
                          <stop offset="50%" stopColor="#FFB300" />
                          <stop offset="100%" stopColor="#FF6F00" />
                        </linearGradient>
                      </defs>
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21L12 17.27Z" fill={`url(#starGrad-${i})`} />
                    </svg>
                  </div>
                ))}
              </div>
              <span className="text-xs sm:text-sm font-bold text-[#32261B]">Best Coffee</span>
            </div>
          </div>
        </div>

      </div>

      {/* Floating Chevron Down */}
      <ChevronDown
        className="w-6 h-6 text-[#8B5E3C] animate-bounce cursor-pointer absolute bottom-6 left-1/2 -translate-x-1/2 z-10 opacity-70 hover:opacity-100 transition-opacity"
        onClick={() => document.getElementById('signature')?.scrollIntoView({ behavior: 'smooth' })}
      />
    </section>
  )
}
