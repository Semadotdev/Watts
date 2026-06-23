import useScrollReveal from '../hooks/useScrollReveal'

const stats = [
  { label: 'Projects Delivered', value: 50 },
  { label: 'Happy Clients', value: 20 },
  { label: 'Years Experience', value: 8 },
]

function StatBadge({ stat, isVisible }) {
  const displayValue = isVisible ? stat.value : 0

  return (
    <div className="text-center">
      <span className="font-headline font-bold text-3xl lg:text-4xl text-gold tabular-nums">
        {displayValue}+
      </span>
      <p className="font-body text-sm text-dark-grey/60 mt-1">{stat.label}</p>
    </div>
  )
}

export default function AboutSection() {
  const [ref, isVisible] = useScrollReveal()

  return (
    <section id="about" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div
          ref={ref}
          className={`grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-center transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="text-center md:text-left">
            <h2 className="font-display font-bold text-3xl lg:text-4xl text-primary mb-6">
              About
            </h2>
            <div className="w-12 h-0.5 bg-gold mb-8 mx-auto md:mx-0" />

            <p className="font-body text-base lg:text-lg text-dark-grey/80 leading-relaxed mb-6">
              I'm a full-stack software engineer who turns ambitious ideas into
              reliable, scalable digital products. With deep experience across the
              modern web stack — from React and Node.js to cloud infrastructure —
              I help businesses move fast without breaking things.
            </p>

            <p className="font-body text-base lg:text-lg text-dark-grey/70 leading-relaxed">
              Every project starts with understanding your goals, then architecting
              a solution that can grow with you. No bloated code. No shortcuts. Just
              clean, maintainable software engineered to perform.
            </p>
          </div>

          <div className="relative">
            <div className="aspect-[4/3] rounded-xl border-2 border-dashed border-primary/10 bg-gray-50 flex flex-col items-center justify-center gap-3">
              <svg className="w-12 h-12 text-primary/20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909M3.75 21h16.5A2.25 2.25 0 0022.5 18.75V5.25A2.25 2.25 0 0020.25 3H3.75A2.25 2.25 0 001.5 5.25v13.5A2.25 2.25 0 003.75 21z" />
              </svg>
              <span className="font-body text-sm text-dark-grey/30">Photo</span>
            </div>

            <div className="absolute -bottom-4 -right-4 w-24 h-24 border border-gold/20 rounded-full -z-10" />
            <div className="absolute -top-4 -left-4 w-16 h-16 border border-primary/5 rounded-full -z-10" />
          </div>
        </div>

        <div
          className={`grid grid-cols-3 gap-8 mt-16 max-w-2xl mx-auto transition-all duration-700 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {stats.map((stat) => (
            <StatBadge key={stat.label} stat={stat} isVisible={isVisible} />
          ))}
        </div>
      </div>
    </section>
  )
}
