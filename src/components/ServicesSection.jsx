import useScrollReveal from '../hooks/useScrollReveal'

const serviceIcons = {
  web: (
    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
    </svg>
  ),
  mobile: (
    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
    </svg>
  ),
  cloud: (
    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 001.332-7.257 3 3 0 00-3.758-3.848 5.25 5.25 0 00-10.233 2.33A4.502 4.502 0 002.25 15z" />
    </svg>
  ),
  design: (
    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" />
    </svg>
  ),
}

const services = [
  {
    key: 'web',
    title: 'Web Development',
    description:
      'High-performance web applications built with React, Next.js, and modern frameworks. Responsive, accessible, and optimized for speed.',
  },
  {
    key: 'mobile',
    title: 'Mobile Applications',
    description:
      'Cross-platform mobile apps using React Native that deliver native-quality experiences on iOS and Android from a single codebase.',
  },
  {
    key: 'cloud',
    title: 'Cloud Architecture',
    description:
      'Scalable infrastructure on AWS, GCP, and Azure. Serverless, containers, and CI/CD pipelines designed for reliability and cost efficiency.',
  },
  {
    key: 'design',
    title: 'UI/UX Engineering',
    description:
      'Human-centered design backed by clean implementation. From Figma prototypes to pixel-perfect, production-ready interfaces.',
  },
]

export default function ServicesSection() {
  const [ref, isVisible] = useScrollReveal()

  return (
    <section id="services" className="py-20 lg:py-28 relative" style={{ background: 'linear-gradient(to bottom, #ffffff, #102120)' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div
          ref={ref}
          className="text-center mb-16 transition-all duration-700"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
          }}
        >
          <h2 className="font-display font-bold text-3xl lg:text-4xl text-[#102120] mb-6">
            Let Me Handle
          </h2>
          <div className="w-12 h-0.5 bg-gold mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {services.map((service, i) => (
            <div
              key={service.title}
              className="group bg-white shadow-md border border-gray-100 rounded-2xl p-8 text-center md:text-left transition-all duration-500 hover:border-gold/40 hover:shadow-xl hover:shadow-gold/5 hover:-translate-y-1"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
                transitionDelay: `${i * 150}ms`,
              }}
            >
              <div className="flex justify-center md:justify-start text-gold/80 mb-5 group-hover:text-gold transition-colors duration-300">
                {serviceIcons[service.key]}
              </div>
              <h3 className="font-display font-semibold text-xl text-gold mb-4">
                {service.title}
              </h3>
              <p className="font-body text-base text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
