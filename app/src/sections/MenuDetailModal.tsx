import { X, Star } from 'lucide-react'
import type { MenuItem } from '../data/menuData'

interface MenuDetailModalProps {
  item: MenuItem
  onClose: () => void
}

export default function MenuDetailModal({ item, onClose }: MenuDetailModalProps) {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/70 backdrop-blur-md"
        onClick={onClose}
      />

      {/* Modal */}
      <div
        className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl animate-scale-in"
        style={{
          background: 'var(--bg-card)',
          border: '1px solid var(--border)',
          boxShadow: '0 10px 50px rgba(141,90,56,0.15)',
        }}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full flex items-center justify-center transition-all hover:bg-[var(--border)]"
          style={{ background: 'var(--bg-card)', border: '1px solid var(--border)' }}
        >
          <X className="w-4 h-4 text-[var(--cream-muted)]" />
        </button>

        <div className="grid md:grid-cols-2">
          {/* Image */}
          <div className="relative aspect-square md:aspect-auto overflow-hidden rounded-t-2xl md:rounded-l-2xl md:rounded-tr-none">
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-full object-cover"
            />
            <div
              className="absolute inset-0"
              style={{ background: 'linear-gradient(180deg, transparent 50%, var(--bg-darkest) 100%)' }}
            />
            {item.isBestSeller && (
              <div className="absolute top-4 left-4 px-3 py-1 bg-[var(--gold)] text-white text-[10px] font-bold rounded-full tracking-wide uppercase">
                ⭐ Best Seller
              </div>
            )}
            {/* Category badge */}
            <div
              className="absolute bottom-4 left-4 px-3 py-1 rounded-full text-xs text-[var(--cream-muted)]"
              style={{ background: 'var(--bg-card)', border: '1px solid var(--border)' }}
            >
              {item.category}
            </div>
          </div>

          {/* Content */}
          <div className="p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <h3
                className="text-2xl sm:text-3xl font-semibold text-[var(--cream)] mb-3"
                style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
              >
                {item.name}
              </h3>

              {/* Rating */}
              <div className="flex items-center gap-2 mb-5">
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-4 h-4"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <defs>
                        <linearGradient id={`modalStarGrad-${item.id}-${i}`} x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#FFE082" />
                          <stop offset="50%" stopColor="#FFB300" />
                          <stop offset="100%" stopColor="#FF6F00" />
                        </linearGradient>
                      </defs>
                      <path
                        d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21L12 17.27Z"
                        fill={i < Math.floor(item.rating) ? `url(#modalStarGrad-${item.id}-${i})` : '#E2E8F0'}
                      />
                    </svg>
                  ))}
                </div>
                <span className="text-sm text-[#C4A882]/50">
                  {item.rating} ({item.reviews} ulasan)
                </span>
              </div>

              {/* Description */}
              <p className="text-[#C4A882]/60 mb-6 leading-relaxed text-sm">
                {item.description}
              </p>

              {/* Details */}
              <div className="grid grid-cols-2 gap-3 mb-6">
                <div
                  className="p-3 rounded-xl"
                  style={{ background: 'var(--bg-mid)', border: '1px solid var(--border)' }}
                >
                  <p className="text-[var(--cream-faint)] text-xs mb-1">Kategori</p>
                  <p className="text-[var(--cream)] text-sm font-semibold">{item.category}</p>
                </div>
                <div
                  className="p-3 rounded-xl"
                  style={{ background: 'var(--bg-mid)', border: '1px solid var(--border)' }}
                >
                  <p className="text-[var(--cream-faint)] text-xs mb-1">Status</p>
                  <span className="inline-flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 bg-green-500 rounded-full" />
                    <span className="text-[var(--cream)] text-sm font-semibold">{item.status}</span>
                  </span>
                </div>
              </div>
            </div>

            {/* Price + CTA */}
            <div>
              <p
                className="text-3xl font-bold text-[var(--gold)] mb-5"
                style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
              >
                Rp {item.price}
              </p>
              <a
                href="https://wa.me/6287818475075"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-3.5 rounded-xl text-sm font-semibold text-white bg-[var(--gold)] hover:bg-[var(--gold-light)] transition-all hover:-translate-y-0.5 shadow-md shadow-[var(--gold)]/10"
              >
                💬 Pesan via WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
