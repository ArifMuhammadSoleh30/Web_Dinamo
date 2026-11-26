import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import FloatingWhatsApp from './components/layout/FloatingWhatsApp'
import Hero from './components/sections/Hero'
import Services from './components/sections/Services'
import WhyUs from './components/sections/WhyUs'
import CtaBanner from './components/sections/CtaBanner'
import Portfolio from './components/sections/Portfolio'
import Testimonials from './components/sections/Testimonials'
import Faq from './components/sections/Faq'
import Sop from './components/sections/Sop'
import Contact from './components/sections/Contact'
import Coverage from './components/sections/Coverage'

/* Urutan section mengikuti website referensi */
export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <WhyUs />
        <CtaBanner />
        <Portfolio />
        <Testimonials />
        <Faq />
        <Sop />
        <Contact />
        <Coverage />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  )
}
