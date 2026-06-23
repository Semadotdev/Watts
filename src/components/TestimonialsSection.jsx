import { useState, useEffect, useCallback } from 'react'
import useScrollReveal from '../hooks/useScrollReveal'

const testimonials = [
  {
    quote:
      'Working with Watts Innovation transformed our outdated platform into a modern, scalable system. The team deeply understood our vision and delivered beyond expectations.',
    author: 'Sarah Chen',
    role: 'CTO, Meridian Health',
  },
  {
    quote:
      'From concept to launch, the process was seamless. Clean code, clear communication, and a product that actually works the way it should. Rare to find this level of quality.',
    author: 'Marcus Rivera',
    role: 'Founder, Elevate Studios',
  },
  {
    quote:
      'We needed a reliable partner to build our MVP under a tight deadline. They delivered on time, on budget, and the architecture has scaled effortlessly as we grew.',
    author: 'Priya Patel',
    role: 'CEO, NexGen Solutions',
  },
  {
    quote:
      'What sets them apart is the engineering discipline. Every component is well-architected, well-tested, and built to last. No shortcuts, no technical debt.',
    author: 'James Whitfield',
    role: 'VP of Engineering, Reliable Inc.',
  },
]

function Avatar({ name }) {
  const initials = name
    .split(' ')
    .map((n) => n[0])
    .join('')

  return (
    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-gold to-gold/60 text-primary flex items-center justify-center font-display font-bold text-sm flex-shrink-0">
      {initials}
    </div>
  )
}

export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const [sectionRef, sectionVisible] = useScrollReveal()
  const [cardVisible, setCardVisible] = useState(true)

  const next = useCallback(() => {
    setCardVisible(false)
    setTimeout(() => {
      setCurrent((c) => (c + 1) % testimonials.length)
      setCardVisible(true)
    }, 100)
  }, [])

  const prev = useCallback(() => {
    setCardVisible(false)
    setTimeout(() => {
      setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length)
      setCardVisible(true)
    }, 100)
  }, [])

  useEffect(() => {
    if (isPaused) return
    const id = setInterval(next, 5000)
    return () => clearInterval(id)
  }, [isPaused, next])

  const t = testimonials[current]

  return (
    <section id="testimonials" className="py-20 lg:py-28 bg-primary">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div
          ref={sectionRef}
          className="text-center mb-16 transition-all duration-700"
          style={{
            opacity: sectionVisible ? 1 : 0,
            transform: sectionVisible ? 'translateY(0)' : 'translateY(30px)',
          }}
        >
          <h2 className="font-display font-bold text-3xl lg:text-4xl text-white mb-6">
            Testimonials
          </h2>
          <div className="w-12 h-0.5 bg-gold mx-auto" />
        </div>

        <div
          className="relative max-w-3xl mx-auto"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <button
            onClick={prev}
            aria-label="Previous testimonial"
            className="absolute -left-4 md:-left-14 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center rounded-full bg-white/10 border border-white/20 shadow-sm hover:bg-white/20 transition-all duration-300 hover:-translate-y-1/2 hover:-translate-x-1 hover:shadow-md z-10"
          >
            <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={next}
            aria-label="Next testimonial"
            className="absolute -right-4 md:-right-14 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center rounded-full bg-white/10 border border-white/20 shadow-sm hover:bg-white/20 transition-all duration-300 hover:-translate-y-1/2 hover:translate-x-1 hover:shadow-md z-10"
          >
            <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>

          <div
            className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-8 md:p-10 shadow-sm h-[300px] flex flex-col justify-center relative overflow-hidden text-center md:text-left"
            style={{
              opacity: cardVisible ? 1 : 0,
              transform: cardVisible ? 'translateY(0)' : 'translateY(10px)',
              transition: 'opacity 0.3s ease-out, transform 0.3s ease-out',
            }}
          >
            <span className="absolute -top-6 -left-2 text-[120px] font-headline text-white/10 leading-none select-none pointer-events-none">
              &ldquo;
            </span>
            <div className="flex items-center md:items-start gap-4 mb-6">
              <Avatar name={t.author} />
              <div>
                <p className="font-body text-base md:text-lg text-white/70 leading-relaxed italic">
                  &ldquo;{t.quote}&rdquo;
                </p>
              </div>
            </div>
            <div className="border-t border-white/10 pt-4 mx-auto md:ml-16">
              <p className="font-display text-sm font-bold text-white">
                {t.author}
              </p>
              <p className="font-body text-sm text-white/50">{t.role}</p>
            </div>
          </div>
        </div>

        <div className="flex justify-center gap-2 mt-8">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                setCardVisible(false)
                setTimeout(() => {
                  setCurrent(i)
                  setCardVisible(true)
                }, 100)
              }}
              aria-label={`Go to testimonial ${i + 1}`}
              className={`transition-all duration-300 ${
                i === current
                  ? 'w-8 h-2.5 bg-gold rounded-full'
                  : 'w-2.5 h-2.5 bg-white/20 rounded-full hover:bg-white/40'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
