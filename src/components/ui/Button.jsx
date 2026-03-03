export default function Button({ variant = 'primary', onClick, type, children, className = '' }) {
  const base = 'w-full border-none font-bold cursor-pointer transition-all duration-300 font-sans tracking-wide'
  const variants = {
    primary: 'bg-accent text-black py-[18px] rounded-[4px] text-base hover:bg-accent-light hover:-translate-y-0.5 shadow-glow hover:shadow-glow-cta',
    submit: 'bg-accent text-black py-[20px] rounded-[4px] text-[17px] font-extrabold hover:bg-accent-light hover:-translate-y-1 shadow-glow-cta hover:shadow-[0_0_48px_rgba(150,144,94,0.35),0_12px_32px_rgba(150,144,94,0.2)]',
    ghost: 'bg-transparent text-muted border border-border py-[14px] rounded-[4px] text-sm hover:text-text hover:border-accent hover:shadow-[0_0_16px_rgba(150,144,94,0.1)]',
  }

  return (
    <button
      type={type || 'button'}
      className={`${base} ${variants[variant]} ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  )
}
