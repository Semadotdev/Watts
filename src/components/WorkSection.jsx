import useScrollReveal from '../hooks/useScrollReveal'

const projects = [
  {
    title: 'Fintech Dashboard',
    category: 'Web App',
    description:
      'Real-time analytics platform for a Series A fintech startup, handling millions of transactions with sub-second query performance.',
    tags: ['React', 'Node.js', 'PostgreSQL', 'AWS'],
  },
  {
    title: 'Health Marketplace',
    category: 'Mobile + Web',
    description:
      'Full-stack marketplace connecting patients with healthcare providers, featuring scheduling, payments, and telemedicine integration.',
    tags: ['React Native', 'Next.js', 'Stripe', 'GCP'],
  },
  {
    title: 'E-Commerce Engine',
    category: 'Web App',
    description:
      'Headless commerce platform for a D2C brand, delivering 3x improvement in page speed and 40% increase in conversion rate.',
    tags: ['Next.js', 'Shopify', 'Redis', 'Cloudflare'],
  },
  {
    title: 'Logistics API',
    category: 'Backend',
    description:
      'High-throughput routing and tracking API for a logistics startup, processing 50K+ requests per minute with 99.99% uptime.',
    tags: ['Go', 'GraphQL', 'Kubernetes', 'TimescaleDB'],
  },
]

export default function WorkSection() {
  const [ref, isVisible] = useScrollReveal()

  return (
    <section id="work" className="py-20 lg:py-22 bg-primary">
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
            Selected Work
          </h2>
          <div className="w-12 h-0.5 bg-gold mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {projects.map((project, i) => (
            <div
              key={project.title}
              className="group bg-white border border-gray-200 rounded-2xl overflow-hidden transition-all duration-500 hover:border-gold/50 hover:shadow-lg hover:shadow-gold/5 hover:-translate-y-1"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
                transitionDelay: `${i * 150}ms`,
              }}
            >
              <div className="h-48 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center relative overflow-hidden">
                <svg className="w-12 h-12 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909M3.75 21h16.5A2.25 2.25 0 0022.5 18.75V5.25A2.25 2.25 0 0020.25 3H3.75A2.25 2.25 0 001.5 5.25v13.5A2.25 2.25 0 003.75 21z" />
                </svg>
                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/60 transition-all duration-500 flex items-center justify-center">
                  <span className="text-white font-body text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-500 translate-y-2 group-hover:translate-y-0">
                    View Project
                  </span>
                </div>
              </div>
              <div className="p-8 text-center md:text-left">
                <span className="font-body text-xs font-semibold tracking-widest uppercase text-gold">
                  {project.category}
                </span>
                <h3 className="font-display font-semibold text-xl text-primary mt-2 mb-3">
                  {project.title}
                </h3>
                <p className="font-body text-base text-dark-grey/70 leading-relaxed mb-6">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="font-body text-xs font-medium text-primary bg-primary/5 px-3 py-1.5 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
