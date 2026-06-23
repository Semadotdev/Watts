export default function Logo() {
  return (
    <a href="#" className="flex items-center gap-2">
      <span className="flex items-baseline gap-0">
        <span className="font-display font-bold text-xl lg:text-2xl tracking-widest text-logo-teal">
          W
        </span>
        <span className="font-display font-bold text-xl lg:text-2xl tracking-widest text-logo-teal">
          A
        </span>
        <span className="font-display font-bold text-xl lg:text-2xl tracking-widest text-logo-teal">
          T
        </span>
        <span className="font-display font-bold text-xl lg:text-2xl tracking-widest text-logo-teal">
          T
        </span>
        <span className="font-display font-bold text-xl lg:text-2xl tracking-widest text-logo-teal">
          S
        </span>
      </span>
      <span className="hidden sm:inline-block w-px h-5 bg-logo-teal/30 mx-1" />
      <span className="hidden sm:inline font-body font-light text-sm lg:text-base tracking-[0.15em] text-logo-teal uppercase">
        Innovation
      </span>
    </a>
  )
}
