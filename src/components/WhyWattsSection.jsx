import useScrollReveal from '../hooks/useScrollReveal'

const values = [
  {
    title: 'Custom Solutions',
    description:
      'Every project is built from the ground up to fit your specific needs, goals, and growth plans.',
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.893 13.393l-1.135-1.135a2.252 2.252 0 01-.421-.585l-1.08-2.16a.414.414 0 00-.663-.107.83.83 0 01-.812.21l-1.273-.363a.89.89 0 00-.738 1.595l.587.39c.59.395.674 1.23.172 1.732l-.2.2c-.212.212-.33.498-.33.796v.41c0 .409-.11.809-.32 1.158l-1.315 2.191a2.11 2.11 0 01-1.81 1.025 1.11 1.11 0 01-1.07-1.07v-1.108a1.89 1.89 0 00-.557-1.347l-1.122-1.122a.8.8 0 00-.283-.188.8.8 0 00-.374-.058c-.28.027-.536.175-.689.399l-1.079 1.574a1.074 1.074 0 01-.96.49l-.152-.005a.852.852 0 01-.646-.341 3.726 3.726 0 01-.384-.693l-.267-.666c-.003-.009-.007-.019-.012-.028a1.606 1.606 0 00-.052-.101 1.396 1.396 0 00-.952-.555l-1.436-.191a.647.647 0 01-.537-.795l.192-.766a.89.89 0 00-.062-.74.47.47 0 01-.095-.447l.746-1.819a.963.963 0 01.454-.495l.238-.119a1.15 1.15 0 00.346-.297.254.254 0 00.014-.03 1.107 1.107 0 00.106-.258l.284-.983a1.02 1.02 0 01.722-.668l1.665-.396a1.76 1.76 0 001.064-.687l1.03-1.366a.846.846 0 01.695-.351.835.835 0 01.688.35l1.014 1.349c.267.354.66.586 1.098.636l1.7.194a1.01 1.01 0 01.961.731l.386 1.447c.11.413.428.744.837.875l1.436.46a.833.833 0 01.562.92l-.176.849c-.058.281.007.573.18.785l.666.813.058.06c.275.288.683.375 1.046.24l.892-.332a.704.704 0 01.85.32l.363.704c.125.243.148.52.048.767a9.053 9.053 0 01-1.206 2.416" />
      </svg>
    ),
  },
  {
    title: 'Scalable Development',
    description:
      'Architected to grow with you — from MVP to millions of users without rewriting code.',
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9l3-3 2.148 2.148A12.061 12.061 0 0116.5 7.605" />
      </svg>
    ),
  },
  {
    title: 'Clean, User-Focused Design',
    description:
      'Interfaces that are intuitive, accessible, and built around how real people use software.',
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" />
      </svg>
    ),
  },
  {
    title: 'Long-Term Support',
    description:
      'We don\'t build and disappear. Ongoing maintenance, updates, and technical support keep your software healthy.',
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17l-3.252-3.252a1.5 1.5 0 010-2.121l2.205-2.205a1.5 1.5 0 012.121 0l3.252 3.252m-3.252 3.252l2.205 2.205a1.5 1.5 0 002.121 0l2.205-2.205a1.5 1.5 0 000-2.121l-3.252-3.252m-3.252 3.252l3.252 3.252m-3.252-3.252l-3.252-3.252m.026 7.026a1.038 1.038 0 01-.026 0l-.026-.001a1.055 1.055 0 01-.51-.194l-3.252-3.252a1.054 1.054 0 010-1.49l.026.026-.026-.026 2.205-2.205a1.054 1.054 0 011.49 0l3.252 3.252m-3.252-3.252l.026-.026a1.054 1.054 0 011.49 0l2.205 2.205a1.054 1.054 0 010 1.49l-3.252 3.252m-3.252-3.252a1.055 1.055 0 010 1.49l-3.252 3.252m11.976-11.24l-3.252-3.252a1.054 1.054 0 00-1.49 0L9.122 5.008" />
      </svg>
    ),
  },
  {
    title: 'Strategic Problem Solving',
    description:
      'We dig into your business challenges and recommend the right approach — not just the trendiest one.',
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
      </svg>
    ),
  },
  {
    title: 'Modern Development Standards',
    description:
      'Clean code, automated testing, CI/CD, and security best practices baked into every project.',
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
  },
]

export default function WhyWattsSection({ onOpenModal }) {
  const [ref, isVisible] = useScrollReveal()

  return (
    <section id="about" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div
          ref={ref}
          className={`transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="text-center mb-16">
            <h2 className="font-display font-bold text-3xl lg:text-4xl text-primary mb-6">
              Why Work With Watts Innovation
            </h2>
            <div className="w-12 h-0.5 bg-gold mx-auto" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-12 lg:mb-16">
            <div className="text-center">
              <div className="font-display font-bold text-4xl lg:text-5xl text-primary mb-2">50+</div>
              <div className="font-body text-sm lg:text-base text-dark-grey/70">Projects Delivered</div>
            </div>
            <div className="text-center">
              <div className="font-display font-bold text-4xl lg:text-5xl text-primary mb-2">20+</div>
              <div className="font-body text-sm lg:text-base text-dark-grey/70">Happy Clients</div>
            </div>
            <div className="text-center">
              <div className="font-display font-bold text-4xl lg:text-5xl text-primary mb-2">8+</div>
              <div className="font-body text-sm lg:text-base text-dark-grey/70">Years Experience</div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            {values.slice(0, 3).map((item) => (
              <div
                key={item.title}
                className="bg-white border border-gray-200 rounded-xl p-6 transition-all duration-500 hover:border-gold/40 hover:shadow-lg hover:-translate-y-0.5"
              >
                <div className="text-gold mb-3">{item.icon}</div>
                <h3 className="font-display font-semibold text-sm text-primary mb-2">
                  {item.title}
                </h3>
                <p className="font-body text-sm text-dark-grey/70 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {values.slice(3).map((item) => (
              <div
                key={item.title}
                className="bg-white border border-gray-200 rounded-xl p-6 transition-all duration-500 hover:border-gold/40 hover:shadow-lg hover:-translate-y-0.5"
              >
                <div className="text-gold mb-3">{item.icon}</div>
                <h3 className="font-display font-semibold text-sm text-primary mb-2">
                  {item.title}
                </h3>
                <p className="font-body text-sm text-dark-grey/70 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-8 bg-primary/5 border border-primary/10 rounded-xl p-6 lg:p-8 text-center">
            <p className="font-body text-sm lg:text-base text-dark-grey/80 leading-relaxed mb-6">
              <span className="font-semibold text-primary">Not just a developer — a strategic partner.</span>{' '}
              Whether you need a full product built, an existing system audited, or ongoing technical
              leadership, Watts Innovation delivers software that moves your business forward.
            </p>
            <button
              onClick={() => onOpenModal('consultation')}
              className="inline-block px-8 py-3.5 bg-cta-teal text-white font-body font-semibold text-base rounded-full transition-all duration-300 hover:bg-transparent hover:border-2 hover:border-gold hover:text-gold cursor-pointer"
            >
              Book a Consultation
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
