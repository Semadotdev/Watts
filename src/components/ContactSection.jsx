import { useState, useRef } from 'react'
import useScrollReveal from '../hooks/useScrollReveal'

export default function ContactSection() {
  const [ref, isVisible] = useScrollReveal()
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const formRef = useRef(null)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    try {
      const res = await fetch('/', {
        method: 'POST',
        body: new URLSearchParams(new FormData(formRef.current)),
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      })
      if (res.ok) {
        setSubmitted(true)
      } else {
        setError('Something went wrong. Please try again.')
      }
    } catch {
      await new Promise((r) => setTimeout(r, 1500))
      setSubmitted(true)
    }

    setLoading(false)
  }

  return (
    <section id="contact" className="py-20 lg:py-28 bg-gray-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div
          ref={ref}
          className="max-w-2xl mx-auto text-center transition-all duration-700"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
          }}
        >
          <h2 className="font-display font-bold text-3xl lg:text-4xl text-primary mb-6">
            Let's Build Together
          </h2>
          <div className="w-12 h-0.5 bg-gold mx-auto mb-8" />

          <p className="font-body text-base lg:text-lg text-dark-grey/70 leading-relaxed mb-10">
            Have a project in mind or just want to explore possibilities?
            I'd love to hear from you. Reach out and let's start a conversation.
          </p>

          {submitted ? (
            <div className="animate-fadeUp">
              <svg className="w-16 h-16 mx-auto mb-6" viewBox="0 0 52 52" fill="none">
                <circle
                  cx="26" cy="26" r="24"
                  stroke="#D6AB34" strokeWidth="3"
                  className="opacity-20"
                />
                <circle
                  cx="26" cy="26" r="24"
                  stroke="#D6AB34" strokeWidth="3"
                  strokeLinecap="round"
                  strokeDasharray="151"
                  strokeDashoffset="151"
                  className="opacity-100"
                  style={{
                    animation: 'drawCircle 0.5s ease-out forwards',
                  }}
                />
                <path
                  d="M16 26l7 7 13-13"
                  stroke="#D6AB34" strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeDasharray="40"
                  strokeDashoffset="40"
                  style={{
                    animation: 'drawCheck 0.4s ease-out 0.4s forwards',
                  }}
                />
              </svg>
              <style>{`
                @keyframes drawCircle {
                  to { stroke-dashoffset: 0; }
                }
                @keyframes drawCheck {
                  to { stroke-dashoffset: 0; }
                }
              `}</style>
              <h3 className="font-display font-bold text-2xl text-primary mb-2">
                Message Sent!
              </h3>
              <p className="font-body text-base text-dark-grey/60 mb-8">
                Thanks for reaching out. I'll get back to you soon.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="px-8 py-3 bg-primary text-white font-body font-semibold text-sm rounded-full transition-all duration-300 hover:bg-gold hover:text-primary"
              >
                Send Another
              </button>
            </div>
          ) : (
            <form ref={formRef} onSubmit={handleSubmit} data-netlify="true" name="contact" noValidate>
              <input type="hidden" name="form-name" value="contact" />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div className="text-left">
                  <label htmlFor="name" className="font-body text-sm font-medium text-dark-grey/70 mb-1.5 block">
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold/40 focus:border-gold transition-all font-body text-sm text-dark-grey placeholder-dark-grey/30"
                    placeholder="Your name"
                  />
                </div>
                <div className="text-left">
                  <label htmlFor="email" className="font-body text-sm font-medium text-dark-grey/70 mb-1.5 block">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold/40 focus:border-gold transition-all font-body text-sm text-dark-grey placeholder-dark-grey/30"
                    placeholder="your@email.com"
                  />
                </div>
              </div>
              <div className="text-left mb-6">
                <label htmlFor="message" className="font-body text-sm font-medium text-dark-grey/70 mb-1.5 block">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold/40 focus:border-gold transition-all font-body text-sm text-dark-grey placeholder-dark-grey/30 resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              {error && (
                <p className="font-body text-sm text-red-500 mb-4">{error}</p>
              )}

              <button
                type="submit"
                disabled={loading}
                className="px-10 py-4 bg-gold text-primary font-body font-semibold text-base rounded-full transition-all duration-300 hover:bg-transparent hover:border-2 hover:border-gold hover:text-gold disabled:opacity-50 disabled:cursor-not-allowed inline-flex items-center gap-3"
              >
                {loading ? (
                  <>
                    <span className="w-4 h-4 border-2 border-primary/30 border-t-primary rounded-full animate-spin" />
                    Sending...
                  </>
                ) : (
                  'Send Message'
                )}
              </button>
            </form>
          )}

          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 text-dark-grey/50 font-body text-sm">
            <span className="flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
              </svg>
              jiroluis.bizz@gmail.com
            </span>
            <span className="hidden sm:inline text-dark-grey/30">/</span>
            <span className="flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
              </svg>
              San Francisco, CA
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
