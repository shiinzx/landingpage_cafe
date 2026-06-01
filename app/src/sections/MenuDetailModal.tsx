import { X } from 'lucide-react'
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
        className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl animate-scale-in bg-white border border-[rgba(139,94,60,0.1)] shadow-[rgba(139,94,60,0.2)_0px_25px_50px_-12px]"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full flex items-center justify-center transition-all hover:bg-[rgba(139,94,60,0.1)] bg-white border border-[rgba(139,94,60,0.1)]"
        >
          <X className="w-4 h-4 text-[#5D4037]" />
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
              style={{ background: 'linear-gradient(180deg, transparent 50%, #3E2723 100%)' }}
            />
            {item.isBestSeller && (
              <div className="absolute top-4 left-4 px-3 py-1 bg-[#8B5E3C] text-white text-[10px] font-bold rounded-[20px] tracking-wide uppercase">
                ⭐ Best Seller
              </div>
            )}
            {/* Category badge */}
            <div
              className="absolute bottom-4 left-4 px-3 py-1 rounded-full text-xs text-[#5D4037] bg-white border border-[rgba(139,94,60,0.1)]"
            >
              {item.category}
            </div>
          </div>

          {/* Content */}
          <div className="p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <h3
                className="text-2xl sm:text-3xl font-bold text-[#32261B] mb-3"
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
                <span className="text-sm text-[#5D4037]/60">
                  {item.rating} ({item.reviews} ulasan)
                </span>
              </div>

              {/* Description */}
              <p className="text-[#5D4037] mb-6 leading-relaxed text-sm">
                {item.description}
              </p>

              <div className="grid grid-cols-2 gap-3 mb-6">
                <div
                  className="p-3 rounded-xl bg-[#FAF6F1] border border-[rgba(139,94,60,0.1)]"
                >
                  <p className="text-[#8B5E3C] text-xs mb-1">Kategori</p>
                  <p className="text-[#32261B] text-sm font-semibold">{item.category}</p>
                </div>
                <div
                  className="p-3 rounded-xl bg-[#FAF6F1] border border-[rgba(139,94,60,0.1)]"
                >
                  <p className="text-[#8B5E3C] text-xs mb-1">Status</p>
                  <span className="inline-flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 bg-green-500 rounded-full" />
                    <span className="text-[#32261B] text-sm font-semibold">{item.status}</span>
                  </span>
                </div>
              </div>
            </div>

            {/* Price + CTA */}
            <div>
              <p
                className="text-3xl font-bold text-[#8B5E3C] mb-5"
              >
                Rp {item.price}
              </p>
              <a
                href="https://wa.me/6281927737777"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-3.5 rounded-[10px] text-sm font-semibold text-white bg-[#8B5E3C] hover:bg-[#7A4E2F] transition-all hover:-translate-y-0.5 shadow-md shadow-[rgba(139,94,60,0.3)]"
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
