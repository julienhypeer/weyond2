export default function TestimonialCard({ result, quote, name, sub, letter, color }) {
  return (
    <div className="bg-card border border-border card-accent rounded-2xl p-6 flex flex-col hover:-translate-y-1 transition-all duration-300 shadow-premium hover:shadow-glow group">
      <div className="inline-block bg-accent-15 border border-accent-30 text-accent text-[10px] font-bold py-1 px-2.5 rounded-full mb-3 tracking-wide w-fit">
        {result}
      </div>
      <div className="text-accent text-[13px] mb-3.5 tracking-widest">★★★★★</div>
      <blockquote className="text-[14px] leading-relaxed text-muted italic flex-1 mb-5 font-serif">
        &ldquo;{quote}&rdquo;
      </blockquote>
      <div className="flex items-center gap-3">
        <div
          className="w-10 h-10 rounded-full flex items-center justify-center font-extrabold text-[13px] shrink-0 text-text font-sans ring-2 ring-accent/30 ring-offset-2 ring-offset-card"
          style={{ background: color }}
        >
          {letter}
        </div>
        <div>
          <span className="text-[13px] font-bold block text-text font-sans">{name}</span>
          <span className="text-[11px] text-muted font-sans">{sub}</span>
        </div>
      </div>
    </div>
  )
}
