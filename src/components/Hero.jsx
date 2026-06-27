import { lazy, Suspense } from 'react'
import useGridGlow from '../hooks/useGridGlow'

const Lightbulb3D = lazy(() => import('./Lightbulb3D'))

function LightbulbFallback() {
  return (
    <div className="w-64 h-64 md:w-96 md:h-96 mx-auto flex items-center justify-center">
      <div className="w-12 h-12 border-2 border-gold/30 border-t-gold rounded-full animate-spin" />
    </div>
  )
}

export default function Hero({ onOpenModal }) {
  const { handlers, maskStyle } = useGridGlow()

  return (
    <section
      {...handlers}
      className="bg-primary min-h-[calc(100vh-5rem)] lg:min-h-[calc(100vh-5rem)] relative"
      style={{
        backgroundImage: `
          linear-gradient(rgba(214,171,52,0.04) 1px, transparent 1px),
          linear-gradient(90deg, rgba(214,171,52,0.04) 1px, transparent 1px)
        `,
        backgroundSize: '40px 40px',
        backgroundPosition: 'center center',
      }}
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          ...maskStyle,
          WebkitMaskImage: maskStyle.WebkitMaskImage,
          maskImage: maskStyle.maskImage,
          backgroundImage: `
            linear-gradient(rgba(214,171,52,0.18) 1px, transparent 1px),
            linear-gradient(90deg, rgba(214,171,52,0.18) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
          backgroundPosition: 'center center',
          WebkitMaskRepeat: 'no-repeat',
          maskRepeat: 'no-repeat',
        }}
      />
      <div className="max-w-7xl mx-auto px-6 lg:px-12 h-full relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 min-h-[calc(100vh-5rem)]">
          <div className="flex flex-col justify-center items-center md:items-start text-center md:text-left gap-y-6 lg:gap-y-8 py-16 md:py-0">
            <h1 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl xl:text-7xl leading-tight text-white">
              <span className="inline-block animate-fadeUp" style={{ animationDelay: '0ms' }}>
                BUILD
              </span>{' '}
              <span className="inline-block animate-fadeUp text-gold" style={{ animationDelay: '150ms' }}>
                SOFTWARE
              </span>
              <br />
              <span className="inline-block animate-fadeUp" style={{ animationDelay: '300ms' }}>
                THAT SCALES
              </span>
            </h1>

            <p
              className="font-body text-base lg:text-lg text-white/80 max-w-lg leading-relaxed animate-fadeUp"
              style={{ animationDelay: '600ms' }}
            >
              Watts Innovation helps businesses and founders design, build, and improve
              custom digital solutions — from websites and client-facing platforms to
              audits, optimization, and ongoing support.
            </p>

            <div
              className="flex flex-wrap gap-3 justify-center md:justify-start animate-fadeUp"
              style={{ animationDelay: '750ms' }}
            >
              <button
                onClick={() => onOpenModal('consultation')}
                className="px-6 py-3 bg-gold text-primary font-body font-semibold text-sm rounded-full transition-all duration-300 hover:bg-transparent hover:border-2 hover:border-gold hover:text-gold cursor-pointer"
              >
                Book a Consultation
              </button>
              <a
                href="#services"
                className="px-6 py-3 border border-white/30 text-white font-body font-semibold text-sm rounded-full transition-all duration-300 hover:bg-white hover:text-primary hover:border-white"
              >
                View Services
              </a>
              <button
                onClick={() => onOpenModal('quote')}
                className="px-6 py-3 border border-white/20 text-white/70 font-body font-semibold text-sm rounded-full transition-all duration-300 hover:border-gold hover:text-gold cursor-pointer"
              >
                Request a Quote
              </button>
            </div>
          </div>

          <div className="relative flex items-center justify-center py-16 md:py-0 animate-fadeUp" style={{ animationDelay: '900ms' }}>
            <div
              className="absolute w-96 h-96 md:w-[32rem] md:h-[32rem] rounded-full pointer-events-none"
              style={{
                background: 'radial-gradient(circle at 50% 50%, rgba(214,171,52,0.12) 0%, rgba(214,171,52,0.04) 50%, transparent 85%)',
              }}
            />
            <Suspense fallback={<LightbulbFallback />}>
              <Lightbulb3D />
            </Suspense>
          </div>
        </div>
      </div>
    </section>
  )
}
