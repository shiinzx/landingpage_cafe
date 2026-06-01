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
      className="relative py-20 sm:py-28 overflow-hidden bg-[#FAF6F1]"
    >
      {/* Noise */}
      <div className="noise-overlay opacity-[0.03]" />

      {/* Ambient glow */}
      <div
        className="absolute left-0 top-1/3 w-[500px] h-[500px] opacity-[0.03] pointer-events-none"
        style={{ background: 'radial-gradient(circle, #8B5E3C, transparent 70%)' }}
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
            <div className="h-px w-8 bg-[#8B5E3C]/30" />
            <span className="text-[#8B5E3C] text-xs tracking-[0.4em] uppercase font-bold">Hubungi Kami</span>
            <div className="h-px w-8 bg-[#8B5E3C]/30" />
          </div>
          <h2
            className="text-3xl sm:text-4xl md:text-5xl text-[#32261B] mb-4 leading-[1.0] font-bold"
          >
            Kontak <em className="text-[#8B5E3C] not-italic">&amp; Lokasi</em>
          </h2>
          <p className="text-[#5D4037] max-w-md mx-auto text-sm sm:text-base">
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
            <div
              className="p-5 sm:p-6 rounded-2xl bg-white border border-[rgba(139,94,60,0.1)] shadow-[rgba(0,0,0,0.05)_0px_1px_2px_0px]"
            >
              <div className="flex items-center gap-3 mb-5">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center bg-[#8B5E3C]/8 border border-[#8B5E3C]/15"
                >
                  <Clock className="w-5 h-5 text-[#8B5E3C]" />
                </div>
                <h3
                  className="text-lg font-bold text-[#32261B]"
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
                        ? 'bg-[#8B5E3C]/5 border border-[#8B5E3C]/10'
                        : 'border border-transparent'
                    }`}
                  >
                    <span className={`${h.note ? 'text-[#32261B] font-semibold' : 'text-[#5D4037]'}`}>
                      {h.days}
                      {h.note && <span className="ml-2 text-[10px] text-[#8B5E3C] bg-[#8B5E3C]/10 px-2 py-0.5 rounded-full">Khusus</span>}
                    </span>
                    <span className="font-semibold text-[#8B5E3C]">{h.time}</span>
                  </div>
                ))}
              </div>

              <p className="mt-4 text-xs text-[#5D4037]/60 flex items-center gap-2">
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
                className="group p-5 rounded-2xl flex flex-col bg-white border border-[rgba(139,94,60,0.1)] shadow-[rgba(0,0,0,0.05)_0px_1px_2px_0px] transition-all hover:-translate-y-0.5"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-green-900/10 border border-green-700/10 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                    <MessageCircle className="w-5 h-5 text-green-600" />
                  </div>
                  <h4 className="text-sm font-semibold text-[#32261B]">WhatsApp</h4>
                </div>
                <p className="text-[#5D4037] text-sm mb-2">087818475075</p>
                <span className="inline-flex items-center gap-1 text-xs text-green-600 font-medium mt-auto">
                  Chat sekarang <ExternalLink className="w-3 h-3" />
                </span>
              </a>

              {/* GrabFood */}
              <a
                href="https://r.grab.com/g/6-20260512_094057_8d3f2fb5409f4deda59258445cda5087_MEXMPS-IDGFSTI000039oz"
                target="_blank"
                rel="noopener noreferrer"
                className="group p-5 rounded-2xl flex flex-col bg-white border border-[rgba(139,94,60,0.1)] shadow-[rgba(0,0,0,0.05)_0px_1px_2px_0px] transition-all hover:-translate-y-0.5"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-green-900/10 border border-green-700/10 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Navigation className="w-5 h-5 text-green-600" />
                  </div>
                  <h4 className="text-sm font-semibold text-[#32261B]">GrabFood</h4>
                </div>
                <p className="text-[#5D4037] text-sm mb-2">Ar'Seven Coffee</p>
                <span className="inline-flex items-center gap-1 text-xs text-green-600 font-medium mt-auto">
                  Pesan sekarang <ExternalLink className="w-3 h-3" />
                </span>
              </a>
            </div>

            {/* Lokasi */}
            <div
              className="p-5 sm:p-6 rounded-2xl bg-white border border-[rgba(139,94,60,0.1)] shadow-[rgba(0,0,0,0.05)_0px_1px_2px_0px]"
            >
              <div className="flex items-center gap-3 mb-4">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center bg-[#8B5E3C]/8 border border-[#8B5E3C]/15"
                >
                  <MapPin className="w-5 h-5 text-[#8B5E3C]" />
                </div>
                <h3
                  className="text-lg font-bold text-[#32261B]"
                >
                  Lokasi Toko
                </h3>
              </div>
              <p className="text-[#5D4037] text-sm leading-relaxed mb-5">
                Sabandar, Karangtengah, Cianjur Regency, West Java 43281, Indonesia
              </p>
              <a
                href="https://maps.app.goo.gl/3X8uvchnowvwNwGD9?g_st=aw"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-[10px] text-sm font-semibold text-white bg-[#8B5E3C] hover:bg-[#7A4E2F] transition-all hover:-translate-y-0.5 shadow-md shadow-[rgba(139,94,60,0.3)]"
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
              style={{ border: '1px solid rgba(139,94,60,0.1)' }}
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
                className="absolute bottom-4 left-4 right-4 p-4 rounded-xl flex items-start gap-3 bg-white border border-[rgba(139,94,60,0.1)] shadow-[rgba(0,0,0,0.05)_0px_1px_2px_0px] backdrop-blur-md"
              >
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 bg-[#8B5E3C]/10"
                >
                  <MapPin className="w-5 h-5 text-[#8B5E3C]" />
                </div>
                <div>
                  <p
                    className="font-bold text-[#32261B] text-sm mb-0.5"
                  >
                    Ar'Seven Coffee Corner
                  </p>
                  <p className="text-xs text-[#5D4037]">Sabandar, Karangtengah, Cianjur</p>
                  <a
                    href="https://maps.app.goo.gl/3X8uvchnowvwNwGD9?g_st=aw"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs text-[#8B5E3C] hover:underline mt-1.5"
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
