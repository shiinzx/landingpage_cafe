import { useEffect, useRef, useState } from 'react'
import { Clock, MapPin, MessageCircle, ExternalLink, Navigation } from 'lucide-react'

export default function Kontak() {
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

  const hours = [
    { days: 'Senin – Kamis', time: '09:00 – 02:00', note: false },
    { days: 'Jumat', time: '13:00 – 02:00', note: true },
    { days: 'Sabtu', time: '09:00 – 02:00', note: false },
    { days: 'Minggu', time: '09:00 – 02:00', note: false },
  ]

  return (
    <section
      id="kontak"
      ref={sectionRef}
      className="relative py-20 sm:py-28 overflow-hidden"
      style={{ background: 'linear-gradient(180deg, var(--bg-dark) 0%, var(--bg-mid) 100%)' }}
    >
      {/* Noise */}
      <div className="noise-overlay" />

      {/* Ambient glow */}
      <div
        className="absolute left-0 top-1/3 w-[500px] h-[500px] opacity-[0.05] pointer-events-none"
        style={{ background: 'radial-gradient(circle, #C9963B, transparent 70%)' }}
      />

      {/* Top divider */}
      <div className="section-divider mb-16 sm:mb-20" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div
          className={`text-center mb-12 sm:mb-16 transition-all duration-700 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <div className="inline-flex items-center gap-3 mb-5">
            <div className="h-px w-8 bg-[#C9963B]/50" />
            <span className="text-[#C9963B] text-xs tracking-[0.4em] uppercase font-medium">Hubungi Kami</span>
            <div className="h-px w-8 bg-[#C9963B]/50" />
          </div>
          <h2
            className="text-3xl sm:text-4xl md:text-5xl text-[var(--cream)] mb-4 leading-tight"
            style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontWeight: 600 }}
          >
            Kontak <em className="text-[#C9963B]">&amp; Lokasi</em>
          </h2>
          <p className="text-[#C4A882]/60 max-w-md mx-auto text-sm sm:text-base">
            Kunjungi kami atau hubungi melalui WhatsApp untuk pemesanan dan informasi lebih lanjut.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">

          {/* Left column */}
          <div
            className={`space-y-5 transition-all duration-700 delay-200 ${
              visible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
            }`}
          >
            {/* Jam Operasional */}
            <div
              className="p-5 sm:p-6 rounded-2xl"
              style={{ background: 'var(--bg-card)', border: '1px solid var(--border)' }}
            >
              <div className="flex items-center gap-3 mb-5">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center"
                  style={{ background: 'rgba(201,150,59,0.12)', border: '1px solid rgba(201,150,59,0.2)' }}
                >
                  <Clock className="w-5 h-5 text-[#C9963B]" />
                </div>
                <h3
                  className="text-lg font-semibold text-[var(--cream)]"
                  style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
                >
                  Jam Operasional
                </h3>
              </div>

              <div className="space-y-2.5">
                {hours.map((h) => (
                  <div
                    key={h.days}
                    className={`flex justify-between items-center py-2.5 px-3 rounded-xl text-sm ${
                      h.note
                        ? 'bg-[#C9963B]/8 border border-[#C9963B]/15'
                        : 'border border-transparent'
                    }`}
                  >
                    <span className={`${h.note ? 'text-[#C4A882] font-medium' : 'text-[#C4A882]/60'}`}>
                      {h.days}
                      {h.note && <span className="ml-2 text-[10px] text-[#C9963B] bg-[#C9963B]/10 px-2 py-0.5 rounded-full">Khusus</span>}
                    </span>
                    <span className="font-semibold text-[#C9963B]">{h.time}</span>
                  </div>
                ))}
              </div>

              <p className="mt-4 text-xs text-[#C4A882]/40 flex items-center gap-2">
                <span>ℹ️</span>
                Khusus hari Jumat buka mulai jam 1 siang
              </p>
            </div>

            {/* WhatsApp & GrabFood cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* WhatsApp */}
              <a
                href="https://wa.me/6287818475075"
                target="_blank"
                rel="noopener noreferrer"
                className="group p-5 rounded-2xl flex flex-col transition-all hover:-translate-y-0.5"
                style={{
                  background: 'var(--bg-card)',
                  border: '1px solid var(--border)',
                }}
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-green-900/30 border border-green-700/30 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                    <MessageCircle className="w-5 h-5 text-green-400" />
                  </div>
                  <h4 className="text-sm font-semibold text-[var(--cream)]">WhatsApp</h4>
                </div>
                <p className="text-[#C4A882]/60 text-sm mb-2">087818475075</p>
                <span className="inline-flex items-center gap-1 text-xs text-green-400 font-medium mt-auto">
                  Chat sekarang <ExternalLink className="w-3 h-3" />
                </span>
              </a>

              {/* GrabFood */}
              <a
                href="https://r.grab.com/g/6-20260512_094057_8d3f2fb5409f4deda59258445cda5087_MEXMPS-IDGFSTI000039oz"
                target="_blank"
                rel="noopener noreferrer"
                className="group p-5 rounded-2xl flex flex-col transition-all hover:-translate-y-0.5"
                style={{
                  background: 'var(--bg-card)',
                  border: '1px solid var(--border)',
                }}
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-green-900/30 border border-green-700/30 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Navigation className="w-5 h-5 text-green-400" />
                  </div>
                  <h4 className="text-sm font-semibold text-[var(--cream)]">GrabFood</h4>
                </div>
                <p className="text-[#C4A882]/60 text-sm mb-2">Ar'Seven Coffee</p>
                <span className="inline-flex items-center gap-1 text-xs text-green-400 font-medium mt-auto">
                  Pesan sekarang <ExternalLink className="w-3 h-3" />
                </span>
              </a>
            </div>

            {/* Lokasi */}
            <div
              className="p-5 sm:p-6 rounded-2xl"
              style={{ background: 'var(--bg-card)', border: '1px solid var(--border)' }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center"
                  style={{ background: 'rgba(201,150,59,0.12)', border: '1px solid rgba(201,150,59,0.2)' }}
                >
                  <MapPin className="w-5 h-5 text-[#C9963B]" />
                </div>
                <h3
                  className="text-lg font-semibold text-[var(--cream)]"
                  style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
                >
                  Lokasi Toko
                </h3>
              </div>
              <p className="text-[#C4A882]/60 text-sm leading-relaxed mb-5">
                Sabandar, Karangtengah, Cianjur Regency, West Java 43281, Indonesia
              </p>
              <a
                href="https://maps.app.goo.gl/3X8uvchnowvwNwGD9?g_st=aw"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-white bg-[var(--gold)] hover:bg-[var(--gold-light)] transition-all hover:-translate-y-0.5 shadow-md shadow-[var(--gold)]/10"
              >
                <MapPin className="w-4 h-4" />
                Buka di Google Maps
              </a>
            </div>
          </div>

          {/* Right: Map */}
          <div
            className={`relative transition-all duration-700 delay-300 ${
              visible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
            }`}
          >
            <div
              className="rounded-2xl overflow-hidden h-full min-h-[400px] lg:min-h-[500px]"
              style={{ border: '1px solid rgba(201,150,59,0.12)' }}
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15846.168675218325!2d107.1306!3d-6.8083!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68533e12345678%3A0xabcdef1234567890!2sSabandar%2C%20Karangtengah%2C%20Cianjur%20Regency%2C%20West%20Java!5e0!3m2!1sen!2sid!4v1700000000000!5m2!1sen!2sid"
                className="w-full h-full"
                style={{ border: 0, minHeight: '400px' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Lokasi Ar'Seven Coffee Corner"
              />

              {/* Info overlay */}
              <div
                className="absolute bottom-4 left-4 right-4 p-4 rounded-xl flex items-start gap-3"
                style={{
                  background: 'var(--bg-card)',
                  border: '1px solid var(--border)',
                  backdropFilter: 'blur(12px)',
                }}
              >
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{ background: 'rgba(201,150,59,0.15)' }}
                >
                  <MapPin className="w-5 h-5 text-[#C9963B]" />
                </div>
                <div>
                  <p
                    className="font-semibold text-[var(--cream)] text-sm mb-0.5"
                    style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
                  >
                    Ar'Seven Coffee Corner
                  </p>
                  <p className="text-xs text-[#C4A882]/60">Sabandar, Karangtengah, Cianjur</p>
                  <a
                    href="https://maps.app.goo.gl/3X8uvchnowvwNwGD9?g_st=aw"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs text-[#C9963B] hover:underline mt-1.5"
                  >
                    Lihat peta lebih besar <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
