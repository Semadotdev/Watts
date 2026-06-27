import { useState } from 'react'
import useScrollReveal from '../hooks/useScrollReveal'
import ProjectModal from './ProjectModal'

const projects = [
  {
    title: 'Fintech Dashboard',
    category: 'Web App',
    description:
      'Real-time analytics platform for a Series A fintech startup, handling millions of transactions with sub-second query performance.',
    extendedDescription:
      'Built from the ground up for a rapidly growing fintech startup, this real-time analytics platform ingests millions of transactions daily and delivers sub-second query performance. The system features interactive dashboards, automated reporting, anomaly detection, and role-based access control — all running on a serverless AWS infrastructure that scales automatically with demand.',
    tags: ['React', 'Node.js', 'PostgreSQL', 'AWS'],
    liveUrl: 'https://example.com/fintech',
    githubUrl: 'https://github.com/example/fintech',
    images: [
      'https://picsum.photos/seed/fintech1/800/400',
      'https://picsum.photos/seed/fintech2/800/400',
      'https://picsum.photos/seed/fintech3/800/400',
    ],
  },
  {
    title: 'Health Marketplace',
    category: 'Mobile + Web',
    description:
      'Full-stack marketplace connecting patients with healthcare providers, featuring scheduling, payments, and telemedicine integration.',
    extendedDescription:
      'A two-sided marketplace platform connecting patients with healthcare providers across multiple specialties. The mobile-first experience includes real-time appointment scheduling, HIPAA-compliant video consultations, integrated payments via Stripe, and an intelligent provider matching algorithm. The web dashboard gives providers full control over their availability, patient records, and earnings.',
    tags: ['React Native', 'Next.js', 'Stripe', 'GCP'],
    liveUrl: 'https://example.com/health',
    githubUrl: 'https://github.com/example/health',
    images: [
      'https://picsum.photos/seed/health1/800/400',
      'https://picsum.photos/seed/health2/800/400',
    ],
  },
  {
    title: 'E-Commerce Engine',
    category: 'Web App',
    description:
      'Headless commerce platform for a D2C brand, delivering 3x improvement in page speed and 40% increase in conversion rate.',
    extendedDescription:
      'Migrated a legacy monolithic Shopify storefront to a headless architecture powered by Next.js and Shopify\'s Storefront API. The result was a 3x improvement in Lighthouse performance scores and a 40% boost in conversion rate. Features include dynamic product recommendations powered by Redis caching, instant search with Algolia, a custom checkout flow, and real-time inventory syncing across warehouses.',
    tags: ['Next.js', 'Shopify', 'Redis', 'Cloudflare'],
    liveUrl: 'https://example.com/commerce',
    githubUrl: 'https://github.com/example/commerce',
    images: [
      'https://picsum.photos/seed/commerce1/800/400',
      'https://picsum.photos/seed/commerce2/800/400',
      'https://picsum.photos/seed/commerce3/800/400',
      'https://picsum.photos/seed/commerce4/800/400',
    ],
  },
  {
    title: 'Logistics API',
    category: 'Backend',
    description:
      'High-throughput routing and tracking API for a logistics startup, processing 50K+ requests per minute with 99.99% uptime.',
    extendedDescription:
      'Designed and built a high-throughput API layer for a logistics startup that processes over 50,000 requests per minute with 99.99% uptime. The system handles route optimization, real-time package tracking, driver dispatch, and customer notifications. Built with Go for maximum throughput, GraphQL for flexible client queries, and TimescaleDB for time-series analytics on delivery performance.',
    tags: ['Go', 'GraphQL', 'Kubernetes', 'TimescaleDB'],
    liveUrl: 'https://example.com/logistics',
    githubUrl: 'https://github.com/example/logistics',
    images: [
      'https://picsum.photos/seed/logistics1/800/400',
      'https://picsum.photos/seed/logistics2/800/400',
      'https://picsum.photos/seed/logistics3/800/400',
    ],
  },
]

export default function WorkSection() {
  const [ref, isVisible] = useScrollReveal()
  const [selectedProject, setSelectedProject] = useState(null)

  return (
    <>
    <section id="work" className="py-20 lg:py-22 relative" style={{ background: 'linear-gradient(to bottom, #ffffff, #102120)' }}>
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
            Featured Work
          </h2>
          <div className="w-12 h-0.5 bg-gold mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {projects.map((project, i) => (
            <div
              key={project.title}
              className="space-y-4"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
                transitionDelay: `${i * 150}ms`,
              }}
            >
              <button
                onClick={() => setSelectedProject(project)}
                className="w-full text-left group bg-white border border-gray-200 rounded-2xl overflow-hidden transition-all duration-500 hover:border-gold/50 hover:shadow-lg hover:shadow-gold/5 hover:-translate-y-1 cursor-pointer"
              >
                <div className="h-48 bg-gradient-to-br from-gray-100 to-gray-200 relative overflow-hidden">
                  {project.images?.[0] ? (
                    <img
                      src={project.images[0]}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <svg className="w-12 h-12 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909M3.75 21h16.5A2.25 2.25 0 0022.5 18.75V5.25A2.25 2.25 0 0020.25 3H3.75A2.25 2.25 0 001.5 5.25v13.5A2.25 2.25 0 003.75 21z" />
                      </svg>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/60 transition-all duration-500 flex items-center justify-center">
                    <span className="text-white font-body text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-500 translate-y-2 group-hover:translate-y-0">
                      View Project
                    </span>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 px-5 py-3 bg-white/80 backdrop-blur-sm flex items-center justify-between md:hidden">
                    <span className="font-body text-sm text-gold font-semibold">View Details</span>
                    <svg className="w-4 h-4 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                    </svg>
                  </div>
                </div>
              </button>
              <div className="bg-white border border-gray-200 rounded-2xl p-8 text-center md:text-left transition-all duration-500 hover:border-gold/50 hover:shadow-lg hover:shadow-gold/5 hover:-translate-y-1">
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

    {selectedProject && (
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    )}
    </>
  )
}
