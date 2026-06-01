import Navbar from '../sections/Navbar'
import Hero from '../sections/Hero'
import SignatureSection from '../sections/SignatureSection'
import Menu from '../sections/Menu'
import Sejarah from '../sections/Sejarah'
import Kontak from '../sections/Kontak'
import Footer from '../sections/Footer'

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <SignatureSection />
      <Menu />
      <Sejarah />
      <Kontak />
      <Footer />
    </div>
  )
}
