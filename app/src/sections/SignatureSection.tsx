import { useEffect, useRef, useState } from 'react'

/* ── Animated Ice Cream Coffee Illustration ── */
export function IceCreamCoffeeArt() {
  return (
    <div className="relative w-full max-w-[320px] sm:max-w-[380px] mx-auto aspect-square flex items-center justify-center">

      {/* Outer glow ring */}
      <div
        className="absolute inset-0 rounded-full animate-glow-pulse"
        style={{
          background: 'radial-gradient(circle, rgba(139,94,60,0.12) 0%, transparent 70%)',
        }}
      />

      {/* Rotating orbit ring */}
      <div
        className="absolute w-[85%] h-[85%] rounded-full border border-[#D7A86E]/20 animate-rotate-slow"
        style={{ borderStyle: 'dashed' }}
      />

      {/* Floating particles */}
      {[...Array(6)].map((_, i) => (
        <div
          key={i}
          className="absolute w-1.5 h-1.5 rounded-full bg-[#D7A86E]/40 animate-bubble-rise"
          style={{
            left: `${20 + i * 12}%`,
            bottom: `${20 + (i % 3) * 10}%`,
            animationDelay: `${i * 0.5}s`,
            animationDuration: `${2.5 + i * 0.4}s`,
          }}
        />
      ))}

      {/* Main glass/cup container */}
      <div className="relative z-10 flex flex-col items-center">

        {/* Drip drops from ice cream */}
        <div className="relative h-4 w-full flex justify-center gap-6 mb-0">
          {[0, 1].map((i) => (
            <div
              key={i}
              className="w-1 h-4 rounded-full bg-gradient-to-b from-[#F5E6C8] to-[#D4A045] animate-drop-drip opacity-70"
              style={{
                animationDelay: `${i * 0.8}s`,
                animationDuration: '2.2s',
              }}
            />
          ))}
        </div>

        {/* Ice cream scoops */}
        <div className="relative flex justify-center">
          {/* Back scoop */}
          <div
            className="absolute -top-2 w-[72px] h-[72px] rounded-full bg-gradient-to-br from-[#FDEAC2] via-[#F5C87B] to-[#D4903A] opacity-80 animate-ice-cream-melt"
            style={{ animationDelay: '0.5s', zIndex: 1, left: '50%', transform: 'translateX(-50%) translateX(-20px)' }}
          />
          {/* Front main scoop */}
          <div
            className="relative w-[80px] h-[80px] rounded-[50%_50%_45%_45%] bg-gradient-to-br from-[#FFF0D0] via-[#F0C870] to-[#C98535] animate-ice-cream-melt z-10"
            style={{
              animationDelay: '0.5s',
              boxShadow: '0 4px 20px rgba(139,94,60,0.3), inset 0 -4px 8px rgba(0,0,0,0.1)',
            }}
          >
            {/* Shine highlight */}
            <div className="absolute top-3 left-3 w-5 h-3 rounded-full bg-white/40 blur-sm" />
            {/* Small cherry on top */}
            <div
              className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-gradient-to-br from-[#FF6B6B] to-[#CC2200] animate-float"
              style={{ animationDelay: '1s', boxShadow: '0 2px 6px rgba(200,30,0,0.3)' }}
            />
          </div>
        </div>

        {/* Glass cup body */}
        <div
          className="relative mt-0 overflow-hidden"
          style={{
            width: '110px',
            height: '150px',
            background: 'linear-gradient(180deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.03) 100%)',
            borderRadius: '4px 4px 18px 18px',
            border: '1.5px solid rgba(139,94,60,0.25)',
            boxShadow: '0 8px 32px rgba(0,0,0,0.1), inset 0 0 20px rgba(139,94,60,0.03)',
          }}
        >
          {/* Coffee liquid layers */}
          {/* Cream layer */}
          <div
            className="absolute top-0 left-0 right-0 h-8 opacity-80"
            style={{ background: 'linear-gradient(180deg, #F5E6C8 0%, #E8C878 100%)' }}
          />

          {/* Coffee mid layer */}
          <div
            className="absolute left-0 right-0 overflow-hidden"
            style={{ top: '28px', height: '60px' }}
          >
            <div
              className="w-full h-full animate-liquid-swirl"
              style={{
                background: 'radial-gradient(ellipse at 30% 50%, #6B3A1F 0%, #3D1F0A 50%, #1A0A03 100%)',
                transformOrigin: 'center center',
                opacity: 0.9,
              }}
            />
            {/* Swirl detail */}
            <div
              className="absolute inset-0 animate-liquid-swirl"
              style={{
                animationDirection: 'reverse',
                animationDuration: '12s',
                background: 'radial-gradient(ellipse at 70% 50%, rgba(201,150,59,0.15) 0%, transparent 60%)',
              }}
            />
          </div>

          {/* Ice cubes */}
          <div className="absolute bottom-10 left-4 w-7 h-7 rounded-md bg-white/15 border border-white/20 backdrop-blur-sm animate-float" style={{ animationDelay: '0.3s' }} />
          <div className="absolute bottom-8 right-4 w-5 h-5 rounded-md bg-white/10 border border-white/15 animate-float" style={{ animationDelay: '0.8s' }} />
          <div className="absolute bottom-14 left-8 w-4 h-4 rounded-md bg-white/10 border border-white/15 animate-float" style={{ animationDelay: '1.2s' }} />

          {/* Dark coffee base */}
          <div
            className="absolute bottom-0 left-0 right-0 h-10"
            style={{ background: 'linear-gradient(0deg, #32261B 0%, #8B5E3C 100%)' }}
          />

          {/* Condensation drops on glass */}
          {[...Array(4)].map((_, i) => (
            <div
              key={i}
              className="absolute w-0.5 rounded-full bg-white/20 animate-drop-drip"
              style={{
                left: `${15 + i * 22}%`,
                top: '20%',
                height: `${8 + i * 3}px`,
                animationDelay: `${i * 0.6}s`,
                animationDuration: '3s',
              }}
            />
          ))}

          {/* Glass shine */}
          <div
            className="absolute top-0 bottom-0 left-2 w-4 rounded-full opacity-20"
            style={{ background: 'linear-gradient(180deg, rgba(255,255,255,0.4) 0%, transparent 100%)' }}
          />
        </div>

        {/* Cup base / saucer */}
        <div
          className="w-[130px] h-3 rounded-full mt-1"
          style={{
            background: 'linear-gradient(180deg, rgba(139,94,60,0.2) 0%, rgba(139,94,60,0.05) 100%)',
            border: '1px solid rgba(139,94,60,0.2)',
          }}
        />

        {/* Steam from top of ice cream */}
        <div className="absolute -top-12 flex gap-3 left-1/2 -translate-x-1/2">
          {[0, 1].map((i) => (
            <div
              key={i}
              className="steam-line"
              style={{
                animationDelay: `${i * 0.5}s`,
                background: 'linear-gradient(to top, rgba(139,94,60,0.4), transparent)',
                opacity: 0.5,
              }}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

/* ── Main Signature Section ── */
export default function SignatureSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold: 0.2 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="signature"
      ref={sectionRef}
      className="relative py-20 sm:py-28 md:py-32 overflow-hidden bg-[#FAF6F1]"
    >
      {/* Noise */}
      <div className="noise-overlay opacity-[0.03]" />

      {/* Ambient blobs */}
      <div
        className="absolute -left-40 top-1/3 w-[500px] h-[500px] rounded-full opacity-[0.05] pointer-events-none"
        style={{ background: 'radial-gradient(circle, #8B5E3C, transparent 70%)' }}
      />
      <div
        className="absolute -right-40 bottom-1/3 w-[400px] h-[400px] rounded-full opacity-[0.03] pointer-events-none"
        style={{ background: 'radial-gradient(circle, #D7A86E, transparent 70%)' }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Badge */}
        <div
          className={`text-center mb-12 md:mb-16 transition-all duration-700 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <div className="inline-flex items-center gap-3 mb-5">
            <div className="h-px w-8 bg-[#8B5E3C]/30" />
            <span className="text-[#8B5E3C] text-xs tracking-[0.4em] uppercase font-bold">Ciri Khas Kami</span>
            <div className="h-px w-8 bg-[#8B5E3C]/30" />
          </div>
          <h2
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#32261B] mb-5 leading-[1.0] font-bold"
          >
            Setiap minuman <em className="text-[#8B5E3C] not-italic"> lebih sempurna dengan satu scoop.</em>
          </h2>
          <p className="text-[#5D4037] text-sm sm:text-base max-w-xl mx-auto leading-[1.4]">
            Semua menu Minuman dingin kami hadir dengan sentuhan spesial: 1 scoop es krim yang diletakkan tepat di atas Minumanmu.
            Dingin bertemu dingin — tapi rasanya? Jauh lebih dari itu. Es krim yang perlahan meleleh berpadu dengan pahitnya kopi, menciptakan rasa yang creamy, segar, dan bikin nagih.
          </p>
        </div>

        {/* Two-column grid: video + info */}
        {/* MOBILE: video full screen tersendiri, DESKTOP: 2 kolom */}

        {/* ── MOBILE VIDEO (full layar hp) ── */}
        <div className="block lg:hidden -mx-4 sm:-mx-6 mb-10">
          <div className="relative w-full" style={{ height: '100svh' }}>
            <video
              src="/signature-video.mp4"
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover"
              style={{ display: 'block' }}
            />
            {/* Gradient fade top & bottom */}
            <div
              className="absolute inset-x-0 top-0 h-24 pointer-events-none"
              style={{ background: 'linear-gradient(to bottom, #FAF6F1 0%, transparent 100%)' }}
            />
            <div
              className="absolute inset-x-0 bottom-0 h-24 pointer-events-none"
              style={{ background: 'linear-gradient(to top, #FAF6F1 0%, transparent 100%)' }}
            />
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* Left: Video Column (DESKTOP only) */}
          <div
            className={`hidden lg:block transition-all duration-700 delay-200 ${
              visible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
            }`}
          >
            <div
              className="relative rounded-2xl overflow-hidden"
              style={{
                border: '1px solid rgba(139, 94, 60, 0.1)',
                background: '#FFFFFF',
                boxShadow: 'rgba(0, 0, 0, 0.05) 0px 1px 2px 0px',
              }}
            >
              <video
                src="/signature-video.mp4"
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-auto block"
                style={{ maxHeight: '520px', objectFit: 'cover' }}
              />
              {/* Gold border glow bottom */}
              <div
                className="absolute inset-x-0 bottom-0 h-16 pointer-events-none"
                style={{ background: 'linear-gradient(to top, rgba(139,94,60,0.08), transparent)' }}
              />
            </div>
          </div>

          {/* Right: Info Column */}
          <div
            className={`space-y-7 transition-all duration-700 delay-300 ${
              visible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
            }`}
          >
            {/* Feature tags */}
            <div className="flex flex-wrap gap-2">
              {['Es Kopi Susu', 'Premium Blend', 'Best Seller', 'Must Try'].map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 rounded-full text-xs font-medium text-[#8B5E3C] border border-[#8B5E3C]/20 bg-[#8B5E3C]/5"
                >
                  {tag}
                </span>
              ))}
            </div>

            <h3
              className="text-2xl sm:text-3xl text-[#32261B] leading-tight font-bold"
            >
              Yang bikin Ar'Seven beda dari yang lain
            </h3>

            <p className="text-[#5D4037] text-sm sm:text-base leading-[1.4]">
              Kami percaya kopi yang nikmat tidak harus mahal. Kopi kami
              menggunakan biji kopi pilihan dari kebun lokal Cianjur, diseduh segar setiap hari,
              dan disajikan dengan satu scoop es krim vanilla yang meleleh perlahan — menciptakan
              perpaduan rasa yang tidak bisa kamu lupakan.
            </p>

            {/* Feature list */}
            <ul className="space-y-4">
              {[
                { icon: '🌱', title: 'Biji Kopi Lokal Cianjur', desc: 'Dipetik & diroasting segar untuk rasa maksimal' },
                { icon: '🍦', title: 'Es Krim Vanilla Premium', desc: 'Satu scoop penuh yang meleleh sempurna di Minuman Dinginmu' },
                { icon: '💰', title: 'Harga Terjangkau', desc: 'Mulai dari Rp 3.000 — semua orang berhak menikmati' },
              ].map((item) => (
                <li key={item.title} className="flex items-start gap-4">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 text-lg bg-[#8B5E3C]/5 border border-[#8B5E3C]/10"
                  >
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-[#32261B] text-sm font-semibold mb-0.5">{item.title}</p>
                    <p className="text-[#5D4037] text-xs leading-relaxed">{item.desc}</p>
                  </div>
                </li>
              ))}
            </ul>

            {/* CTA */}
            <div className="pt-2 flex flex-col sm:flex-row gap-3">
              <a
                href="https://wa.me/6281927737777"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-[#8B5E3C] text-white rounded-[10px] font-normal text-sm hover:bg-[#7A4E2F] transition-all hover:-translate-y-0.5 shadow-md shadow-[rgba(139,94,60,0.3)]"
              >
                <span>💬</span> Pesan via WhatsApp
              </a>
              <button
                onClick={() => document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' })}
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-white border border-[#8B5E3C]/30 text-[#8B5E3C] rounded-[9999px] font-semibold text-sm hover:bg-[#F5EBE0] hover:border-[#6B4427] hover:text-[#5D4037] transition-all"
              >
                Lihat Menu Lainnya →
              </button>
            </div>
          </div>
        </div>

        {/* Stats row */}
        <div
          className={`mt-16 sm:mt-20 grid grid-cols-2 sm:grid-cols-4 gap-4 transition-all duration-700 delay-500 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          {[
            { value: '10+', label: 'Tahun Melayani' },
            { value: '4', label: 'Lokasi Ditempati' },
            { value: 'Rp 3rb', label: 'Harga Mulai' },
            { value: '02:00', label: 'Buka Sampai' },
          ].map((stat) => (
            <div
              key={stat.label}
              className="text-center py-6 px-4 rounded-2xl bg-white border border-[rgba(139,94,60,0.1)] shadow-[rgba(0,0,0,0.05)_0px_1px_2px_0px]"
            >
              <p
                className="text-2xl sm:text-3xl text-[#8B5E3C] mb-1 font-bold"
              >
                {stat.value}
              </p>
              <p className="text-[#5D4037] text-xs sm:text-sm">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
