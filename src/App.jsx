import { useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import AboutSection from './components/AboutSection'
import NumberMarquee from './components/NumberMarquee'
import ServicesSection from './components/ServicesSection'
import WorkSection from './components/WorkSection'
import ProcessSection from './components/ProcessSection'
import ContactSection from './components/ContactSection'
import TestimonialsSection from './components/TestimonialsSection'
import Footer from './components/Footer'
import SplashIntro from './components/SplashIntro'

export default function App() {
  const [splashDone, setSplashDone] = useState(false)

  return (
    <>
      {!splashDone && <SplashIntro onComplete={() => setSplashDone(true)} />}
      <div className="min-h-screen bg-white">
        <Header />
        <main>
          <Hero />
        <AboutSection />
        <NumberMarquee textColor="#205D67" />
        <ServicesSection />
        <WorkSection />
        <NumberMarquee textColor="#FFCB3B" className="bg-primary" />
        <ProcessSection />
        <TestimonialsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
    </>
  )
}
