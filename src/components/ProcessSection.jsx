import { useRef } from 'react'
import useScrollReveal from '../hooks/useScrollReveal'

const steps = [
  {
    number: '01',
    title: 'Discovery',
    description:
      'We dive deep into your vision, goals, and constraints. Understanding your market, users, and technical needs before writing a single line of code.',
  },
  {
    number: '02',
    title: 'Architecture',
    description:
      'I design a scalable system architecture tailored to your needs — choosing the right stack, data models, and infrastructure from the start.',
  },
  {
    number: '03',
    title: 'Build',
    description:
      'Iterative development in two-week sprints. You see progress constantly, give feedback, and stay in control of the direction at every step.',
  },
  {
    number: '04',
    title: 'Launch',
    description:
      'Production deployment with CI/CD, monitoring, and performance optimization. Zero-downtime releases and a smooth go-live process.',
  },
  {
    number: '05',
    title: 'Evolve',
    description:
      'Post-launch support, analytics-driven improvements, and scaling your product as your user base grows. Your software evolves with your business.',
  },
]

export default function ProcessSection() {
  const [ref, isVisible] = useScrollReveal()
  const lineRef = useRef(null)

  return (
    <section id="process" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div
          ref={ref}
          className="text-center mb-16 transition-all duration-700"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
          }}
        >
          <h2 className="font-display font-bold text-3xl lg:text-4xl text-primary mb-6">
            Process
          </h2>
          <div className="w-12 h-0.5 bg-gold mx-auto" />
        </div>

        <div className="max-w-4xl mx-auto relative">
          <div
            ref={lineRef}
            className="absolute left-[23px] top-12 w-px bg-gray-200 hidden md:block"
            style={{
              height: isVisible ? 'calc(100% - 3rem)' : '0%',
              transition: 'height 1.2s ease-out 0.3s',
            }}
          />

          {steps.map((step, index) => (
            <div
              key={step.number}
              className="relative flex gap-8 pb-12 last:pb-0"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateX(0)' : 'translateX(-20px)',
                transition: `opacity 0.5s ease-out ${0.2 + index * 0.15}s, transform 0.5s ease-out ${0.2 + index * 0.15}s`,
              }}
            >
              <div className="hidden md:flex flex-shrink-0 w-12 h-12 rounded-full bg-primary items-center justify-center relative z-10">
                <span
                  className="font-display font-bold text-sm text-gold"
                  style={{
                    transform: isVisible ? 'scale(1)' : 'scale(0)',
                    transition: `transform 0.4s ease-out ${0.3 + index * 0.15}s`,
                  }}
                >
                  {step.number}
                </span>
              </div>

              <div className="flex-1 pt-1 text-center md:text-left">
                <h3 className="font-display font-semibold text-xl text-primary mb-2">
                  <span className="md:hidden font-display text-gold mr-2">
                    {step.number}.
                  </span>
                  {step.title}
                </h3>
                <p className="font-body text-base text-dark-grey/70 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
