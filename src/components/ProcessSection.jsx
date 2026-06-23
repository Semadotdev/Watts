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

  return (
    <section id="process" className="py-20 lg:py-28 bg-white overflow-hidden">
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

        <div className="relative">
          <div
            className="absolute top-6 left-12 right-12 h-px bg-gray-200 hidden lg:block"
            style={{
              opacity: isVisible ? 1 : 0,
              transition: 'opacity 0.6s ease-out 0.3s',
            }}
          />

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 lg:gap-8">
            {steps.map((step, index) => (
              <div
                key={step.number}
                className="flex flex-col items-center"
                style={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                  transition: `opacity 0.5s ease-out ${0.2 + index * 0.15}s, transform 0.5s ease-out ${0.2 + index * 0.15}s`,
                }}
              >
                <div
                  className="w-12 h-12 rounded-full bg-primary flex items-center justify-center mb-5 relative z-10 shadow-sm"
                  style={{
                    transform: isVisible ? 'scale(1)' : 'scale(0)',
                    transition: `transform 0.4s ease-out ${0.3 + index * 0.15}s`,
                  }}
                >
                  <span className="font-display font-bold text-sm text-gold">
                    {step.number}
                  </span>
                </div>

                <div className="bg-white shadow-md border border-gray-100 rounded-2xl p-6 text-center w-full transition-all duration-500 hover:border-gold/30 hover:shadow-lg h-full">
                  <h3 className="font-display font-semibold text-lg text-primary mb-3">
                    {step.title}
                  </h3>
                  <p className="font-body text-sm text-dark-grey/70 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
