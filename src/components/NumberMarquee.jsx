import { useMemo } from 'react'

function generateDigits(count) {
  return Array.from({ length: count }, () => String(Math.floor(Math.random() * 10)))
}

export default function NumberMarquee({ textColor = '#205D67', className = '' }) {
  const items = useMemo(() => generateDigits(30), [])

  return (
    <div className={`w-full overflow-hidden py-5 ${className}`}>
      <div className="marquee-track flex whitespace-nowrap">
        <div className="marquee-content flex items-center gap-16 shrink-0">
          {items.map((d, i) => (
            <span key={i} className="font-display text-lg sm:text-xl md:text-2xl font-bold tracking-widest" style={{ color: textColor }}>
              {d}
            </span>
          ))}
        </div>
        <div className="marquee-content flex items-center gap-16 shrink-0">
          {items.map((d, i) => (
            <span key={`dup-${i}`} className="font-display text-lg sm:text-xl md:text-2xl font-bold tracking-widest" style={{ color: textColor }}>
              {d}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
