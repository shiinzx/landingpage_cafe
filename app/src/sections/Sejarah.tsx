import { useEffect, useRef, useState } from 'react'
import { MapPin, Building2, Home, Store } from 'lucide-react'

const timelineItems = [
  {
    year: '2013',
    title: 'Awal Berdiri',
    description:
      "Ar'Seven Coffee Corner pertama kali didirikan pada tahun 2013. Memulai perjalanan di sebuah pom bensin yang menjadi lokasi pertama kami.",
    icon: Building2,
  },
  {
    year: '2013–2018',
    title: 'Pindah ke Cugenang',
    description:
      'Setelah sukses di pom bensin, kami pindah ke Cugenang untuk memberikan pengalaman ngopi yang lebih nyaman bagi pelanggan setia kami.',
    icon: Home,
  },
  {
    year: '2018–2022',
    title: 'Musibah Gempa & Kolaborasi',
    description:
      'Sayangnya lokasi di Cugenang terkena musibah gempa. Kami kemudian berkolaborasi di tempat yang kini telah menjadi Cafe Frekuensi di Jl. Gadog II.',
    icon: Store,
  },
  {
    year: '2022–Sekarang',
    title: 'Lokasi Sekarang',
    description:
      "Saat ini Ar'Seven Coffee Corner berdiri kokoh di Sabandar, Karangtengah, Cianjur. Siap melayani para pecinta kopi dengan hangat.",
    icon: MapPin,
  },
]

export default function Sejarah() {
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
      id="sejarah"
      ref={sectionRef}
      className="relative py-20 sm:py-28 overflow-hidden bg-[#E0D9D1]"
    >
      {/* Noise */}
      <div className="noise-overlay opacity-[0.03]" />

      {/* Ambient */}
      <div
        className="absolute right-0 top-1/4 w-[500px] h-[500px] opacity-[0.03] pointer-events-none"
        style={{ background: 'radial-gradient(circle, #8B5E3C, transparent 70%)' }}
      />
      <div
        className="absolute left-0 bottom-1/4 w-[400px] h-[400px] opacity-[0.02] pointer-events-none"
        style={{ background: 'radial-gradient(circle, #D7A86E, transparent 70%)' }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div
          className={`text-center mb-12 sm:mb-16 transition-all duration-700 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <div className="inline-flex items-center gap-3 mb-5">
            <div className="h-px w-8 bg-[#8B5E3C]/30" />
            <span className="text-[#8B5E3C] text-xs tracking-[0.4em] uppercase font-bold">Tentang Kami</span>
            <div className="h-px w-8 bg-[#8B5E3C]/30" />
          </div>
          <h2
            className="text-3xl sm:text-4xl md:text-5xl text-[#32261B] mb-4 leading-[1.0] font-bold"
          >
            Sejarah <em className="text-[#8B5E3C] not-italic">Ar'Seven</em>
          </h2>
          <p className="text-[#5D4037] max-w-2xl mx-auto text-sm sm:text-base">
            Perjalanan kami dimulai sejak tahun 2013. Meski sempat berpindah-pindah lokasi,
            semangat kami untuk menyajikan kopi berkualitas tetap sama.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">

          {/* Timeline */}
          <div
            className={`relative transition-all duration-700 delay-200 ${
              visible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
            }`}
          >
            {/* Vertical line */}
            <div
              className="absolute left-[26px] md:left-[30px] top-8 bottom-8 w-px"
              style={{ background: 'linear-gradient(180deg, #8B5E3C 0%, rgba(139,94,60,0.2) 100%)' }}
            />

            <div className="space-y-7">
              {timelineItems.map((item, index) => (
                <div
                  key={index}
                  className="relative flex gap-5 md:gap-6"
                  style={{
                    transitionDelay: `${300 + index * 100}ms`,
                  }}
                >
                  {/* Icon circle */}
                  <div
                    className="relative z-10 flex-shrink-0 w-[52px] h-[52px] md:w-[60px] md:h-[60px] rounded-full flex items-center justify-center shadow-lg transition-all"
                    style={{
                      background: 'linear-gradient(135deg, #8B5E3C 0%, #7A4E2F 100%)',
                      boxShadow: '0 0 20px rgba(139,94,60,0.2)',
                    }}
                  >
                    <item.icon className="w-5 h-5 md:w-6 md:h-6 text-white" />
                  </div>

                  {/* Content card */}
                  <div
                    className="flex-1 p-4 sm:p-5 rounded-2xl bg-white border border-[rgba(139,94,60,0.1)] shadow-[rgba(0,0,0,0.05)_0px_1px_2px_0px] transition-all hover:border-[#8B5E3C]/25"
                  >
                    <span
                      className="inline-block px-3 py-1 text-[10px] font-bold rounded-full mb-2 tracking-wider bg-[#F5EBE0] text-[#8B5E3C] border border-[rgba(139,94,60,0.15)]"
                    >
                      {item.year}
                    </span>
                    <h3
                      className="text-base sm:text-lg font-bold text-[#32261B] mb-1.5"
                    >
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#5D4037] leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Image + Quote */}
          <div
            className={`space-y-6 transition-all duration-700 delay-300 ${
              visible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
            }`}
          >
            {/* Image */}
            <div className="relative rounded-2xl overflow-hidden">
              <div
                className="absolute inset-0"
                style={{ background: 'linear-gradient(180deg, transparent 50%, #3E2723 100%)' }}
              />
              <img
                src="/about-interior.jpg"
                alt="Interior Ar'Seven Coffee Corner"
                className="w-full aspect-video sm:aspect-[4/3] lg:aspect-video object-cover"
              />
              {/* Floating badge */}
              <div
                className="absolute bottom-4 left-4 right-4 sm:right-auto sm:max-w-[220px] p-4 rounded-xl bg-white border border-[rgba(139,94,60,0.1)] shadow-[rgba(0,0,0,0.05)_0px_1px_2px_0px]"
              >
                <p className="text-[#8B5E3C] text-sm font-bold mb-0.5">Berdiri Sejak</p>
                <p
                  className="text-[#32261B] text-3xl font-bold leading-none"
                >
                  2013
                </p>
                <p className="text-[#5D4037] text-xs mt-1">Lebih dari 10 tahun di Cianjur</p>
              </div>

              {/* Corner decoration */}
              <div className="absolute top-3 right-3 w-8 h-8 opacity-20">
                <svg viewBox="0 0 32 32" fill="none">
                  <path d="M28 4 L4 4 L4 28" stroke="#8B5E3C" strokeWidth="1.5"/>
                </svg>
              </div>
            </div>

            {/* Quote */}
            <div
              className="p-5 sm:p-6 rounded-2xl relative bg-[#FAF6F1] border border-[rgba(139,94,60,0.12)] shadow-[rgba(0,0,0,0.05)_0px_1px_2px_0px]"
            >
              <span
                className="text-6xl text-[#8B5E3C]/20 leading-none absolute top-2 left-4"
                style={{ fontFamily: 'Georgia, serif' }}
              >
                "
              </span>
              <p
                className="text-[#5D4037] text-sm sm:text-base italic leading-relaxed pt-4 px-2"
              >
                Kami percaya bahwa secangkir kopi yang baik bisa mengubah hari seseorang.
                Itulah mengapa kami selalu hadir — apapun yang terjadi.
              </p>
              <p className="text-[#8B5E3C]/60 text-xs mt-3 px-2">— Pendiri Ar'Seven Coffee Corner</p>
            </div>

            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-3">
              {[
                { value: '10+', label: 'Tahun Berdiri' },
                { value: '4', label: 'Lokasi Ditempati' },
                { value: 'Rp 3rb', label: 'Harga Mulai' },
                { value: '02:00', label: 'Buka Sampai' },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="text-center py-5 px-4 rounded-xl bg-white border border-[rgba(139,94,60,0.1)] shadow-[rgba(0,0,0,0.05)_0px_1px_2px_0px]"
                >
                  <p
                    className="text-2xl font-bold text-[#8B5E3C] mb-1"
                  >
                    {stat.value}
                  </p>
                  <p className="text-xs text-[#5D4037]">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
