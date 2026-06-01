import { useEffect, useState } from 'react'
import { ChevronDown } from 'lucide-react'

const CoffeeBean = ({
  style,
  className = '',
  opacity = '0.18',
  crackOpacity = '0.28',
}: {
  style?: React.CSSProperties
  className?: string
  opacity?: string
  crackOpacity?: string
}) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`animate-coffee-bean-float pointer-events-none select-none z-0 ${className}`}
    style={style}
  >
    {/* Bean body */}
    <path
      d="M19.5 9.5C21.5 13.5 19.5 18 15.5 20C11.5 22 7 20.5 5 16.5C3 12.5 4.5 8 8.5 6C12.5 4 17.5 5.5 19.5 9.5Z"
      fill="#8B5E3C"
      opacity={opacity}
    />
    {/* Center crack line */}
    <path
      d="M5 16.5C8 14.5 10 13 12 12C14 11 16.5 10 19.5 9.5"
      stroke="#5D4037"
      strokeWidth="1.2"
      strokeLinecap="round"
      opacity={crackOpacity}
    />
  </svg>
)

const CoffeeDrop = ({
  style,
  className = '',
  opacity = '0.18',
  animationClass = 'animate-coffee-bean-float',
}: {
  style?: React.CSSProperties
  className?: string
  opacity?: string
  animationClass?: string
}) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`${animationClass} pointer-events-none select-none z-0 ${className}`}
    style={style}
  >
    <path
      d="M12 2.5C12 2.5 6 10.5 6 14.5C6 17.8 8.7 20.5 12 20.5C15.3 20.5 18 17.8 18 14.5C18 10.5 12 2.5 12 2.5Z"
      fill="#8B5E3C"
      opacity={opacity}
    />
  </svg>
)

const CoffeeSplash = ({
  style,
  className = '',
  opacity = '0.16',
  animationClass = 'animate-float-slow',
}: {
  style?: React.CSSProperties
  className?: string
  opacity?: string
  animationClass?: string
}) => (
  <svg
    viewBox="0 0 120 120"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`${animationClass} pointer-events-none select-none z-0 ${className}`}
    style={style}
  >
    {/* Elegant liquid splash curves */}
    <path
      d="M20 70C25 55 45 40 60 50C75 60 85 45 80 30C75 15 90 5 100 15C110 25 105 45 95 55C85 65 95 85 85 95C75 105 55 90 40 85C25 80 15 85 20 70Z"
      fill="#8B5E3C"
      opacity={opacity}
    />
    <path
      d="M45 35C50 28 65 22 70 30C75 38 60 45 55 42C50 39 40 42 45 35Z"
      fill="#8B5E3C"
      opacity={opacity}
    />
    {/* Floating droplets around splash */}
    <circle cx="12" cy="50" r="3.5" fill="#8B5E3C" opacity={opacity} />
    <circle cx="32" cy="22" r="2.5" fill="#8B5E3C" opacity={opacity} />
    <circle cx="95" cy="8" r="4.5" fill="#8B5E3C" opacity={opacity} />
    <circle cx="112" cy="38" r="3" fill="#8B5E3C" opacity={opacity} />
    <circle cx="68" cy="110" r="4" fill="#8B5E3C" opacity={opacity} />
    <circle cx="102" cy="78" r="2.5" fill="#8B5E3C" opacity={opacity} />
  </svg>
)

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

      {/* Floating Coffee Splashes in background */}
      <CoffeeSplash className="absolute" style={{ top: '15%', left: '25%', width: '140px', height: '140px', '--duration': '9s' } as React.CSSProperties} opacity="0.14" />
      <CoffeeSplash className="absolute sm:block hidden" style={{ top: '65%', right: '28%', width: '180px', height: '180px', '--duration': '12s', animationDelay: '2s' } as React.CSSProperties} opacity="0.12" />
      <CoffeeSplash className="absolute md:block hidden" style={{ top: '40%', left: '2%', width: '120px', height: '120px', '--duration': '10s', animationDelay: '1s' } as React.CSSProperties} opacity="0.12" />

      {/* Coffee Splashes rising up from bottom to top */}
      <CoffeeSplash className="absolute animate-coffee-rise" style={{ left: '10%', width: '150px', height: '150px', '--duration': '14s', '--start-rot': '45deg', '--end-rot': '180deg', '--max-opacity': '0.16' } as React.CSSProperties} opacity="0.16" animationClass="animate-coffee-rise" />
      <CoffeeSplash className="absolute sm:block hidden animate-coffee-rise" style={{ left: '55%', width: '170px', height: '170px', '--duration': '17s', '--start-rot': '-30deg', '--end-rot': '90deg', '--max-opacity': '0.14', animationDelay: '3s' } as React.CSSProperties} opacity="0.14" animationClass="animate-coffee-rise" />
      <CoffeeSplash className="absolute md:block hidden animate-coffee-rise" style={{ left: '85%', width: '130px', height: '130px', '--duration': '12s', '--start-rot': '15deg', '--end-rot': '270deg', '--max-opacity': '0.16', animationDelay: '1.5s' } as React.CSSProperties} opacity="0.16" animationClass="animate-coffee-rise" />

      {/* Floating Coffee Drops in background */}
      <CoffeeDrop className="absolute" style={{ top: '5%', left: '18%', width: '28px', height: '28px', '--rot': '12deg', '--duration': '6s', animationDelay: '0.5s' } as React.CSSProperties} opacity="0.18" />
      <CoffeeDrop className="absolute md:block hidden" style={{ top: '45%', right: '5%', width: '36px', height: '36px', '--rot': '-25deg', '--duration': '8s', animationDelay: '2.5s' } as React.CSSProperties} opacity="0.16" />
      <CoffeeDrop className="absolute sm:block hidden" style={{ top: '80%', left: '32%', width: '24px', height: '24px', '--rot': '40deg', '--duration': '7s', animationDelay: '1.2s' } as React.CSSProperties} opacity="0.20" />

      {/* Coffee Drops rising up from bottom to top */}
      <CoffeeDrop className="absolute animate-coffee-rise" style={{ left: '30%', width: '32px', height: '32px', '--duration': '11s', '--max-opacity': '0.20', animationDelay: '0.8s' } as React.CSSProperties} opacity="0.20" animationClass="animate-coffee-rise" />
      <CoffeeDrop className="absolute sm:block hidden animate-coffee-rise" style={{ left: '42%', width: '40px', height: '40px', '--duration': '13s', '--max-opacity': '0.16', animationDelay: '4s' } as React.CSSProperties} opacity="0.16" animationClass="animate-coffee-rise" />
      <CoffeeDrop className="absolute md:block hidden animate-coffee-rise" style={{ left: '72%', width: '36px', height: '36px', '--duration': '9s', '--max-opacity': '0.18', animationDelay: '2.2s' } as React.CSSProperties} opacity="0.18" animationClass="animate-coffee-rise" />

      {/* Floating Coffee Beans in background - Left Side */}
      <CoffeeBean className="absolute" style={{ top: '8%', left: '4%', width: '96px', height: '96px', '--rot': '15deg', '--duration': '12s' } as React.CSSProperties} opacity="0.20" crackOpacity="0.30" />
      <CoffeeBean className="absolute sm:block hidden" style={{ top: '20%', left: '15%', width: '64px', height: '64px', '--rot': '45deg', '--duration': '9s', animationDelay: '1s' } as React.CSSProperties} opacity="0.16" crackOpacity="0.24" />
      <CoffeeBean className="absolute md:block hidden" style={{ top: '32%', left: '8%', width: '84px', height: '84px', '--rot': '-20deg', '--duration': '11s', animationDelay: '0.5s' } as React.CSSProperties} opacity="0.18" crackOpacity="0.28" />
      <CoffeeBean className="absolute" style={{ top: '48%', left: '20%', width: '60px', height: '60px', '--rot': '75deg', '--duration': '7s', animationDelay: '1.5s' } as React.CSSProperties} opacity="0.22" crackOpacity="0.34" />
      <CoffeeBean className="absolute sm:block hidden" style={{ top: '62%', left: '6%', width: '76px', height: '76px', '--rot': '120deg', '--duration': '10s', animationDelay: '2s' } as React.CSSProperties} opacity="0.14" crackOpacity="0.22" />
      <CoffeeBean className="absolute md:block hidden" style={{ top: '78%', left: '14%', width: '68px', height: '68px', '--rot': '-40deg', '--duration': '8s', animationDelay: '0.8s' } as React.CSSProperties} opacity="0.20" crackOpacity="0.30" />
      <CoffeeBean className="absolute" style={{ top: '90%', left: '3%', width: '88px', height: '88px', '--rot': '10deg', '--duration': '13s', animationDelay: '1.2s' } as React.CSSProperties} opacity="0.16" crackOpacity="0.24" />

      {/* Floating Coffee Beans in background - Right Side */}
      <CoffeeBean className="absolute" style={{ top: '10%', right: '14%', width: '104px', height: '104px', '--rot': '35deg', '--duration': '10s', animationDelay: '2.5s' } as React.CSSProperties} opacity="0.18" crackOpacity="0.28" />
      <CoffeeBean className="absolute md:block hidden" style={{ top: '22%', right: '6%', width: '72px', height: '72px', '--rot': '-65deg', '--duration': '11s', animationDelay: '0.2s' } as React.CSSProperties} opacity="0.16" crackOpacity="0.24" />
      <CoffeeBean className="absolute" style={{ top: '36%', right: '20%', width: '64px', height: '64px', '--rot': '80deg', '--duration': '8s', animationDelay: '1.8s' } as React.CSSProperties} opacity="0.22" crackOpacity="0.32" />
      <CoffeeBean className="absolute sm:block hidden" style={{ top: '48%', right: '10%', width: '80px', height: '80px', '--rot': '-15deg', '--duration': '9.5s', animationDelay: '0.7s' } as React.CSSProperties} opacity="0.18" crackOpacity="0.26" />
      <CoffeeBean className="absolute md:block hidden" style={{ top: '60%', right: '24%', width: '70px', height: '70px', '--rot': '105deg', '--duration': '7.5s', animationDelay: '2.2s' } as React.CSSProperties} opacity="0.20" crackOpacity="0.30" />
      <CoffeeBean className="absolute" style={{ top: '74%', right: '12%', width: '92px', height: '92px', '--rot': '-45deg', '--duration': '11.5s', animationDelay: '1.4s' } as React.CSSProperties} opacity="0.14" crackOpacity="0.22" />
      <CoffeeBean className="absolute sm:block hidden" style={{ top: '88%', right: '4%', width: '64px', height: '64px', '--rot': '95deg', '--duration': '8.5s', animationDelay: '0.9s' } as React.CSSProperties} opacity="0.18" crackOpacity="0.28" />

      {/* Floating Coffee Beans in background - Middle/Center */}
      <CoffeeBean className="absolute lg:block hidden" style={{ top: '5%', left: '45%', width: '56px', height: '56px', '--rot': '50deg', '--duration': '9s', animationDelay: '3s' } as React.CSSProperties} opacity="0.14" crackOpacity="0.22" />
      <CoffeeBean className="absolute lg:block hidden" style={{ top: '85%', left: '50%', width: '78px', height: '78px', '--rot': '-70deg', '--duration': '10.5s', animationDelay: '1.6s' } as React.CSSProperties} opacity="0.16" crackOpacity="0.24" />

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
