import { useEffect, useState } from 'react'

export default function SplashIntro({ onComplete }) {
  const [phase, setPhase] = useState('entering')

  useEffect(() => {
    document.body.style.overflow = 'hidden'

    const exitTimer = setTimeout(() => setPhase('exiting'), 2200)
    const doneTimer = setTimeout(() => {
      document.body.style.overflow = ''
      onComplete()
    }, 2700)

    return () => {
      clearTimeout(exitTimer)
      clearTimeout(doneTimer)
      document.body.style.overflow = ''
    }
  }, [])

  return (
    <div
      className="fixed inset-0 z-[100] bg-primary flex items-center justify-center transition-opacity duration-500"
      style={{ opacity: phase === 'exiting' ? 0 : 1 }}
    >
      <style>{`
        @keyframes glowPulse {
          0%, 100% { transform: scale(1); opacity: 0.6; }
          50% { transform: scale(1.2); opacity: 1; }
        }
        @keyframes expandWidth {
          from { width: 0; }
          to { width: 120px; }
        }
        .splash-glow {
          animation: glowPulse 2s ease-in-out infinite;
        }
        .splash-line {
          animation: expandWidth 0.8s ease-out 1s forwards;
        }
      `}</style>

      <div
        className="absolute w-72 h-72 rounded-full splash-glow pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(214,171,52,0.12) 0%, transparent 70%)',
        }}
      />

      <div className="flex flex-col items-center gap-6">
        <div
          className="animate-popIn opacity-0"
          style={{ animationDelay: '200ms', animationFillMode: 'forwards' }}
        >
          <svg
            className="w-20 h-20 md:w-24 md:h-24 text-gold"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1.3.5 2.6 1.5 3.5.8.8 1.3 1.5 1.5 2.5" />
            <path d="M9 18h6" />
            <path d="M10 22h4" />
            <path d="M10 14v-2a2 2 0 0 1 4 0v2" />
          </svg>
        </div>

        <h1
          className="font-display font-bold text-5xl md:text-7xl text-gold tracking-wider animate-fadeUp opacity-0"
          style={{ animationDelay: '500ms', animationFillMode: 'forwards' }}
        >
          WATTS
        </h1>

        <div className="h-0.5 bg-gold rounded-full splash-line" style={{ width: 0 }} />

        <p
          className="font-body text-xs md:text-sm text-white/40 tracking-[0.15em] uppercase animate-fadeUp opacity-0"
          style={{ animationDelay: '1300ms', animationFillMode: 'forwards' }}
        >
          Build Software That Scales
        </p>
      </div>
    </div>
  )
}
