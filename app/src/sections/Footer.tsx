export default function Footer() {
  const currentYear = new Date().getFullYear()

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <footer
      className="relative overflow-hidden bg-[#32261B] text-[#E0D9D1]"
    >
      {/* Noise */}
      <div className="noise-overlay opacity-[0.03]" />

      {/* Top border glow */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(139,94,60,0.3), transparent)' }}
      />

      {/* Ambient */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] opacity-[0.05] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, rgba(215,168,110,0.15), transparent 70%)' }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Main Footer Content */}
        <div className="py-12 sm:py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-12">

          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <button
              onClick={() => scrollToSection('beranda')}
              className="group flex flex-col items-start mb-5"
            >
              <span
                className="text-4xl text-white group-hover:text-[#D7A86E] transition-colors leading-none font-bold"
                style={{ letterSpacing: '0.02em' }}
              >
                Ar'Seven
              </span>
              <span className="text-[#D7A86E] text-[9px] tracking-[0.4em] uppercase font-medium mt-0.5">
                Coffee Corner
              </span>
            </button>

            <p className="text-[#FAF6F1]/70 text-sm leading-relaxed mb-5 max-w-xs">
              Menyajikan kopi berkualitas dengan harga terjangkau sejak 2013.
              Nikmati secangkir kopi hangat di tengah suasana Cianjur yang nyaman.
            </p>

            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm bg-[#3E2723] border border-[rgba(139,94,60,0.2)]"
            >
              <span className="text-[#D7A86E]">✦</span>
              <span className="text-[#D7A86E] font-medium text-xs">Harga mulai dari Rp 3.000</span>
            </div>

            {/* Social icons */}
            <div className="flex gap-3 mt-5">
              {/* WhatsApp */}
              <a
                href="https://wa.me/6281927737777"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full flex items-center justify-center transition-all hover:-translate-y-0.5 hover:bg-[#8B5E3C] group"
                style={{ background: 'rgba(139,94,60,0.1)', border: '1px solid rgba(139,94,60,0.2)' }}
                aria-label="WhatsApp"
              >
                <svg className="w-4 h-4 text-[#D7A86E] group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </a>

              {/* GrabFood / location */}
              <a
                href="https://r.grab.com/g/6-20260512_094057_8d3f2fb5409f4deda59258445cda5087_MEXMPS-IDGFSTI000039oz"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full flex items-center justify-center transition-all hover:-translate-y-0.5 hover:bg-[#8B5E3C] group"
                style={{ background: 'rgba(139,94,60,0.1)', border: '1px solid rgba(139,94,60,0.2)' }}
                aria-label="GrabFood"
              >
                <svg className="w-4 h-4 text-[#D7A86E] group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h4
              className="text-white font-bold mb-5 text-base tracking-normal"
            >
              Navigasi
            </h4>
            <ul className="space-y-3">
              {[
                { label: 'Beranda', id: 'beranda' },
                { label: 'Signature', id: 'signature' },
                { label: 'Menu', id: 'menu' },
                { label: 'Sejarah', id: 'sejarah' },
                { label: 'Kontak & Lokasi', id: 'kontak' },
              ].map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-[#E0D9D1]/70 hover:text-[#D7A86E] transition-colors text-sm flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-[#D7A86E]/30 group-hover:bg-[#D7A86E] transition-colors" />
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4
              className="text-white font-bold mb-5 text-base tracking-normal"
            >
              Hubungi Kami
            </h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3 text-[#E0D9D1]/70">
                <svg className="w-4 h-4 text-[#D7A86E] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>Sabandar, Karangtengah, Cianjur</span>
              </li>
              <li>
                <a
                  href="https://wa.me/6281927737777"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-[#E0D9D1]/70 hover:text-[#D7A86E] transition-colors"
                >
                  <svg className="w-4 h-4 text-[#D7A86E] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  0819-2773-7777
                </a>
              </li>
              <li className="flex items-start gap-3 text-[#E0D9D1]/70">
                <svg className="w-4 h-4 text-[#D7A86E] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>09:00 – 02:00 (Jumat: 13:00 – 02:00)</span>
              </li>
            </ul>

            {/* Quick action */}
            <a
              href="https://wa.me/6281927737777"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold text-white bg-[#8B5E3C] hover:bg-[#7A4E2F] transition-all hover:-translate-y-0.5 shadow-md shadow-[rgba(139,94,60,0.3)]"
            >
              💬 Chat WhatsApp
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="py-5 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-[#E0D9D1]/40"
          style={{ borderTop: '1px solid rgba(139,94,60,0.15)' }}
        >
          <span>© {currentYear} Ar'Seven Coffee Corner — Cianjur, Indonesia.</span>
          <span className="flex items-center gap-1.5">
            Dibuat dengan
            <span className="text-red-500/70">♥</span>
            untuk para pecinta kopi
          </span>
        </div>
      </div>
    </footer>
  )
}
