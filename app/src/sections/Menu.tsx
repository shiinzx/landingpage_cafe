import { useEffect, useRef, useState } from 'react'
import { menuItems } from '../data/menuData'
import MenuDetailModal from './MenuDetailModal'
import type { MenuItem } from '../data/menuData'
import { Star } from 'lucide-react'

export default function Menu() {
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null)
  const sectionRef = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold: 0.1 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])



  return (
    <section
      id="menu"
      ref={sectionRef}
      className="relative py-20 sm:py-28 overflow-hidden"
      style={{ background: 'linear-gradient(180deg, var(--bg-mid) 0%, var(--bg-dark) 100%)' }}
    >
      {/* Noise */}
      <div className="noise-overlay" />

      {/* Ambient */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] opacity-[0.05] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, #C9963B, transparent 70%)' }}
      />

      {/* Section divider top */}
      <div className="section-divider mb-16 sm:mb-20" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div
          className={`text-center mb-10 sm:mb-14 transition-all duration-700 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <div className="inline-flex items-center gap-3 mb-5">
            <div className="h-px w-8 bg-[#C9963B]/50" />
            <span className="text-[#C9963B] text-xs tracking-[0.4em] uppercase font-medium">Menu Kami</span>
            <div className="h-px w-8 bg-[#C9963B]/50" />
          </div>
          <h2
            className="text-3xl sm:text-4xl md:text-5xl text-[var(--cream)] mb-4 leading-tight"
            style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontWeight: 600 }}
          >
            Menu <em className="text-[#C9963B]">Terlaris</em>
          </h2>
          <p className="text-[#C4A882]/60 max-w-md mx-auto text-sm sm:text-base">
            Berbagai pilihan kopi berkualitas dengan harga terjangkau. Mulai dari{' '}
            <span className="text-[#C9963B] font-medium">Rp 3.000</span> saja!
          </p>
        </div>



        {/* Menu Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {menuItems.map((item, i) => (
            <div
              key={item.id}
              className={`group relative rounded-2xl overflow-hidden flex flex-col transition-all duration-700 hover:-translate-y-1 ${
                visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{
                transitionDelay: `${200 + i * 80}ms`,
                background: 'var(--bg-card)',
                border: '1px solid var(--border)',
                boxShadow: '0 4px 24px rgba(141,90,56,0.05)',
              }}
            >
              {/* Image */}
              <div className="relative aspect-square overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Dark overlay on hover reveal */}
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-darkest)]/60 via-transparent to-transparent opacity-60" />

                {/* Best Seller badge */}
                {item.isBestSeller && (
                  <div className="absolute top-3 left-3 px-3 py-1 bg-[var(--gold)] text-white text-[10px] font-bold rounded-full tracking-wide uppercase shadow-md">
                    ⭐ Best Seller
                  </div>
                )}

                {/* Category badge */}
                <div className="absolute top-3 right-3 px-2 py-1 text-[10px] font-medium text-[#C4A882]/80 rounded-full"
                  style={{ background: 'rgba(11,6,2,0.7)', border: '1px solid rgba(201,150,59,0.2)' }}
                >
                  {item.category}
                </div>
              </div>

              {/* Content */}
              <div className="p-5 flex flex-col flex-1">
                <h3
                  className="text-lg font-semibold text-[var(--cream)] mb-1"
                  style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
                >
                  {item.name}
                </h3>
                <p className="text-xs text-[#C4A882]/50 mb-3 line-clamp-2 leading-relaxed flex-1">
                  {item.description}
                </p>

                {/* Rating */}
                <div className="flex items-center gap-1.5 mb-3">
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, idx) => (
                      <svg
                        key={idx}
                        className="w-3.5 h-3.5"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <defs>
                          <linearGradient id={`menuStarGrad-${item.id}-${idx}`} x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#FFE082" />
                            <stop offset="50%" stopColor="#FFB300" />
                            <stop offset="100%" stopColor="#FF6F00" />
                          </linearGradient>
                        </defs>
                        <path
                          d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21L12 17.27Z"
                          fill={idx < Math.floor(item.rating) ? `url(#menuStarGrad-${item.id}-${idx})` : '#E2E8F0'}
                        />
                      </svg>
                    ))}
                  </div>
                  <span className="text-xs text-[#C4A882]/40">({item.rating})</span>
                </div>

                {/* Price + Button row */}
                <div className="flex items-center justify-between mt-auto">
                  <p className="text-lg font-bold text-[#C9963B]">
                    Rp {item.price}
                  </p>
                  <button
                    onClick={() => setSelectedItem(item)}
                    className="px-4 py-2 rounded-xl text-xs font-semibold text-[var(--gold)] border border-[var(--gold)]/30 hover:bg-[var(--gold)] hover:text-white transition-all"
                  >
                    Detail →
                  </button>
                </div>
              </div>

              {/* Hover glow */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                style={{ boxShadow: 'inset 0 0 0 1px rgba(201,150,59,0.25)' }}
              />
            </div>
          ))}
        </div>

        {/* Bottom price info */}
        <div
          className={`mt-12 text-center transition-all duration-700 delay-500 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          <div
            className="inline-flex items-center gap-3 px-6 py-3 rounded-full text-sm"
            style={{ background: 'rgba(201,150,59,0.06)', border: '1px solid rgba(201,150,59,0.15)' }}
          >
            <span className="text-[#C9963B]">⚡</span>
            <span className="text-[#C4A882]/70">
              Harga mulai{' '}
              <span className="text-[#C9963B] font-semibold">Rp 3.000</span>
              {' '}— Rp 35.000
            </span>
          </div>
        </div>
      </div>

      {/* Section divider bottom */}
      <div className="section-divider mt-16 sm:mt-20" />

      {/* Detail Modal */}
      {selectedItem && (
        <MenuDetailModal item={selectedItem} onClose={() => setSelectedItem(null)} />
      )}
    </section>
  )
}
