export default function Button({ variant = 'primary', onClick, type, children, className = '' }) {
  const base = 'w-full border-none font-bold cursor-pointer transition-all duration-200 font-sans tracking-wide'
  const variants = {
    primary: 'bg-accent text-black py-[18px] rounded-[4px] text-base hover:bg-accent-light hover:-translate-y-0.5 shadow-[0_4px_20px_rgba(150,144,94,0.25)]',
    submit: 'bg-accent text-black py-[20px] rounded-[4px] text-[17px] font-extrabold hover:bg-accent-light hover:-translate-y-0.5 shadow-[0_8px_32px_rgba(150,144,94,0.35)]',
    ghost: 'bg-transparent text-muted border border-border py-[14px] rounded-[4px] text-sm hover:text-text hover:border-accent',
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
