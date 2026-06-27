import { useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import NumberMarquee from './components/NumberMarquee'
import ServicesSection from './components/ServicesSection'
import WhyWattsSection from './components/WhyWattsSection'
import ProcessSection from './components/ProcessSection'
import WorkSection from './components/WorkSection'
import FeaturedToolsSection from './components/FeaturedToolsSection'
import TestimonialsSection from './components/TestimonialsSection'
import ContactSection from './components/ContactSection'
import Footer from './components/Footer'
import SplashIntro from './components/SplashIntro'
import ContactModal from './components/ContactModal'

export default function App() {
  const [splashDone, setSplashDone] = useState(false)
  const [modalType, setModalType] = useState(null)

  return (
    <>
      {!splashDone && <SplashIntro onComplete={() => setSplashDone(true)} />}
      <div className="min-h-screen bg-white">
        <Header />
        <main>
          <Hero onOpenModal={setModalType} />
          <WhyWattsSection onOpenModal={setModalType} />
          <NumberMarquee textColor="#205D67" />
          <WorkSection />
          <FeaturedToolsSection />
          <ServicesSection />
          <NumberMarquee textColor="#FFCB3B" className="bg-primary" />
          <ProcessSection />
          <TestimonialsSection />
          <ContactSection onOpenModal={setModalType} />
        </main>
        <Footer />
        {modalType && (
          <ContactModal type={modalType} onClose={() => setModalType(null)} />
        )}
      </div>
    </>
  )
}
