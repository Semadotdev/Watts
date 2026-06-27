import { useEffect, useState, useCallback } from 'react'
import { createPortal } from 'react-dom'

const consultationFields = [
  { name: 'name', label: 'Name', type: 'text', required: true, placeholder: 'Your name' },
  { name: 'email', label: 'Email', type: 'email', required: true, placeholder: 'your@email.com' },
  { name: 'phone', label: 'Phone', type: 'tel', required: false, placeholder: '+1 (555) 000-0000' },
  {
    name: 'projectType',
    label: 'Project Type',
    type: 'select',
    required: true,
    options: ['Select one...', 'New Project', 'Redesign', 'Audit & Optimization', 'Ongoing Support', 'Other'],
  },
  {
    name: 'contactMethod',
    label: 'Preferred Contact Method',
    type: 'select',
    required: true,
    options: ['Select one...', 'Email', 'Phone', 'Video Call'],
  },
  { name: 'message', label: 'What would you like to discuss?', type: 'textarea', required: true, placeholder: 'Tell me about your project or what you need help with...' },
]

const quoteFields = [
  { name: 'name', label: 'Name', type: 'text', required: true, placeholder: 'Your name' },
  { name: 'email', label: 'Email', type: 'email', required: true, placeholder: 'your@email.com' },
  { name: 'company', label: 'Company', type: 'text', required: false, placeholder: 'Company name (optional)' },
  {
    name: 'projectType',
    label: 'Project Type',
    type: 'select',
    required: true,
    options: ['Select one...', 'Website', 'Web App', 'Mobile App', 'API / Backend', 'Other'],
  },
  {
    name: 'budget',
    label: 'Budget Range',
    type: 'select',
    required: true,
    options: ['Select one...', 'Under $5k', '$5k – $15k', '$15k – $50k', '$50k+', 'Not Sure'],
  },
  {
    name: 'timeline',
    label: 'Timeline',
    type: 'select',
    required: true,
    options: ['Select one...', 'ASAP', '1–3 Months', '3–6 Months', 'Flexible'],
  },
  { name: 'message', label: 'Project Details', type: 'textarea', required: true, placeholder: 'Describe your project, goals, and requirements...' },
]

const inputClass = 'w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold/40 focus:border-gold transition-all font-body text-sm text-dark-grey placeholder-dark-grey/30'
const selectClass = 'w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold/40 focus:border-gold transition-all font-body text-sm text-dark-grey appearance-none cursor-pointer'
const labelClass = 'font-body text-sm font-medium text-dark-grey/70 mb-1.5 block'

export default function ContactModal({ type, onClose }) {
  const [isOpen, setIsOpen] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const fields = type === 'quote' ? quoteFields : consultationFields
  const title = type === 'quote' ? 'Request a Quote' : 'Book a Consultation'
  const submitLabel = type === 'quote' ? 'Request Quote' : 'Book Consultation'

  useEffect(() => {
    requestAnimationFrame(() => setIsOpen(true))
  }, [])

  const handleClose = useCallback(() => {
    setIsOpen(false)
    setTimeout(onClose, 300)
  }, [onClose])

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') handleClose()
    }
    document.addEventListener('keydown', handleEscape)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = ''
    }
  }, [handleClose])

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    const data = Object.fromEntries(new FormData(e.target))

    const parts = []
    if (data.name) parts.push(`Name: ${data.name}`)
    if (data.email) parts.push(`Email: ${data.email}`)
    if (data.phone) parts.push(`Phone: ${data.phone}`)
    if (data.company) parts.push(`Company: ${data.company}`)
    if (data.projectType && data.projectType !== 'Select one...') parts.push(`Project Type: ${data.projectType}`)
    if (data.budget && data.budget !== 'Select one...') parts.push(`Budget: ${data.budget}`)
    if (data.timeline && data.timeline !== 'Select one...') parts.push(`Timeline: ${data.timeline}`)
    if (data.contactMethod && data.contactMethod !== 'Select one...') parts.push(`Preferred Contact: ${data.contactMethod}`)
    if (data.message) parts.push(`Message: ${data.message}`)

    const message = `[${title}]\n\n${parts.join('\n')}`

    try {
      const res = await fetch('/.netlify/functions/send-email', {
        method: 'POST',
        body: JSON.stringify({ name: data.name, email: data.email, message }),
        headers: { 'Content-Type': 'application/json' },
      })
      if (res.ok) {
        setSubmitted(true)
      } else {
        setError('Something went wrong. Please try again.')
      }
    } catch {
      setError('Network error. Please try again.')
    }

    setLoading(false)
  }

  return createPortal(
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center p-4 transition-all duration-300 ${
        isOpen ? 'bg-black/60 backdrop-blur-sm' : 'bg-transparent pointer-events-none'
      }`}
      onClick={handleClose}
    >
      <div
        className={`bg-white rounded-2xl max-w-lg w-full max-h-[90vh] overflow-y-auto transition-all duration-300 ${
          isOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative p-8">
          <button
            onClick={handleClose}
            className="absolute top-4 right-4 w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center text-gray-500 hover:text-gray-800 hover:bg-gray-200 transition-colors"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {submitted ? (
            <div className="text-center py-8">
              <svg className="w-16 h-16 mx-auto mb-6" viewBox="0 0 52 52" fill="none">
                <circle cx="26" cy="26" r="24" stroke="#D6AB34" strokeWidth="3" className="opacity-20" />
                <circle cx="26" cy="26" r="24" stroke="#D6AB34" strokeWidth="3" strokeLinecap="round" strokeDasharray="151" strokeDashoffset="151" className="opacity-100" style={{ animation: 'drawCircle 0.5s ease-out forwards' }} />
                <path d="M16 26l7 7 13-13" stroke="#D6AB34" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="40" strokeDashoffset="40" style={{ animation: 'drawCheck 0.4s ease-out 0.4s forwards' }} />
              </svg>
              <style>{`
                @keyframes drawCircle { to { stroke-dashoffset: 0; } }
                @keyframes drawCheck { to { stroke-dashoffset: 0; } }
              `}</style>
              <h3 className="font-display font-bold text-2xl text-primary mb-2">
                {type === 'quote' ? 'Quote Request Sent!' : 'Consultation Booked!'}
              </h3>
              <p className="font-body text-base text-dark-grey/60 mb-8">
                Thanks for reaching out. I'll get back to you within 24 hours.
              </p>
              <button
                onClick={handleClose}
                className="px-8 py-3 bg-primary text-white font-body font-semibold text-sm rounded-full transition-all duration-300 hover:bg-gold hover:text-primary"
              >
                Close
              </button>
            </div>
          ) : (
            <>
              <h3 className="font-display font-semibold text-2xl text-primary mb-1">{title}</h3>
              <p className="font-body text-sm text-dark-grey/60 mb-6">
                {type === 'quote'
                  ? 'Tell me about your project and I\'ll put together a custom quote.'
                  : 'Share a few details and I\'ll reach out to schedule a time to chat.'}
              </p>

              <form onSubmit={handleSubmit} noValidate>
                <div className="space-y-4">
                  {fields.map((field) => (
                    <div key={field.name} className="text-left">
                      <label htmlFor={field.name} className={labelClass}>
                        {field.label}
                        {field.required && <span className="text-red-400 ml-0.5">*</span>}
                      </label>
                      {field.type === 'textarea' ? (
                        <textarea
                          id={field.name}
                          name={field.name}
                          rows={4}
                          required={field.required}
                          className={inputClass + ' resize-none'}
                          placeholder={field.placeholder}
                        />
                      ) : field.type === 'select' ? (
                        <select id={field.name} name={field.name} required={field.required} className={selectClass}>
                          {field.options.map((opt) => (
                            <option key={opt} value={opt === field.options[0] ? '' : opt}>
                              {opt}
                            </option>
                          ))}
                        </select>
                      ) : (
                        <input
                          id={field.name}
                          name={field.name}
                          type={field.type}
                          required={field.required}
                          className={inputClass}
                          placeholder={field.placeholder}
                        />
                      )}
                    </div>
                  ))}
                </div>

                {error && (
                  <p className="font-body text-sm text-red-500 mt-4">{error}</p>
                )}

                <button
                  type="submit"
                  disabled={loading}
                  className="mt-6 w-full px-10 py-4 bg-gold text-primary font-body font-semibold text-base rounded-full transition-all duration-300 hover:bg-transparent hover:border-2 hover:border-gold hover:text-gold disabled:opacity-50 disabled:cursor-not-allowed inline-flex items-center justify-center gap-3"
                >
                  {loading ? (
                    <>
                      <span className="w-4 h-4 border-2 border-primary/30 border-t-primary rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    submitLabel
                  )}
                </button>
              </form>
            </>
          )}
        </div>
      </div>
    </div>,
    document.body
  )
}
