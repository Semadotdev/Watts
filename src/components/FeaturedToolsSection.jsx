import useScrollReveal from '../hooks/useScrollReveal'

const featuredTools = [
  {
    title: 'Website Health Report Generator',
    description:
      'Get a quick snapshot of your website\u2019s health and discover opportunities for improvement. Checks SEO, metadata, accessibility, PWA readiness, and technical issues.',
    cta: 'Check Your Site',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
      </svg>
    ),
  },
  {
    title: 'PWA Readiness Auditor',
    description:
      'Check if your site is installable, mobile-ready, and properly configured as a Progressive Web App.',
    cta: 'Audit Your Site',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
      </svg>
    ),
  },
]

const planningTools = [
  {
    title: 'MVP Scope Planner',
    description: 'Define and prioritize features for your minimum viable product.',
    cta: 'Plan Your MVP',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
      </svg>
    ),
  },
  {
    title: 'API Scope Checklist',
    description: 'Plan your API endpoints, data models, and integration needs.',
    cta: 'Build Checklist',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: 'Automation Readiness Check',
    description: 'Find out what processes in your business are ready for automation.',
    cta: 'Check Readiness',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
      </svg>
    ),
  },
]

export default function FeaturedToolsSection() {
  const [ref, isVisible] = useScrollReveal()

  return (
    <section id="tools" className="py-20 lg:py-28 bg-primary">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div
          ref={ref}
          className="text-center mb-16 transition-all duration-700"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
          }}
        >
          <h2 className="font-display font-bold text-3xl lg:text-4xl text-white mb-6">
            Featured Tools & Reports
          </h2>
          <p className="font-body text-base lg:text-lg text-white/50 max-w-2xl mx-auto leading-relaxed">
            Smart tools to help you understand, improve, and plan your digital products.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 mb-8">
          {featuredTools.map((tool, i) => (
            <div
              key={tool.title}
              className={`bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 transition-all duration-500 hover:border-gold/40 hover:shadow-lg hover:-translate-y-1 ${
                i === 0 ? 'lg:col-span-2' : 'lg:col-span-1'
              }`}
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                transitionDelay: `${i * 150}ms`,
              }}
            >
              <div className="text-gold mb-5">{tool.icon}</div>
              <h3 className="font-display font-semibold text-lg text-white mb-3">
                {tool.title}
              </h3>
              <p className="font-body text-sm text-white/60 leading-relaxed mb-6">
                {tool.description}
              </p>
              <button className="inline-flex items-center gap-2 font-body text-sm font-semibold text-gold hover:text-white transition-colors duration-300">
                {tool.cta}
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </button>
            </div>
          ))}
        </div>

        <div
          className="grid grid-cols-1 sm:grid-cols-3 gap-6 lg:gap-8"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
            transition: 'opacity 0.6s ease-out 0.4s, transform 0.6s ease-out 0.4s',
          }}
        >
          {planningTools.map((tool) => (
            <div
              key={tool.title}
              className="bg-white/5 border border-white/10 rounded-xl p-6 transition-all duration-500 hover:border-gold/30 hover:bg-white/[0.07]"
            >
              <div className="text-gold/70 mb-3">{tool.icon}</div>
              <h4 className="font-display font-semibold text-sm text-white mb-2">
                {tool.title}
              </h4>
              <p className="font-body text-xs text-white/50 leading-relaxed mb-4">
                {tool.description}
              </p>
              <button className="font-body text-xs font-semibold text-gold hover:text-white transition-colors duration-300">
                {tool.cta} &rarr;
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
