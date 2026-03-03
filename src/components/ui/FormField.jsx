export default function FormField({ label, required, children }) {
  return (
    <div className="mb-6 last:mb-0">
      <label className="block text-[12px] font-semibold uppercase tracking-[0.1em] text-muted mb-2.5 leading-snug font-sans">
        {label} {required && <span className="text-accent">*</span>}
      </label>
      {children}
    </div>
  )
}
