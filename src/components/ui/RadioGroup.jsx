export default function RadioGroup({ name, options, value, onChange, columns = 2 }) {
  const gridCols =
    columns === 3 ? 'grid-cols-3 max-[520px]:grid-cols-1'
    : columns === 1 ? 'grid-cols-1'
    : 'grid-cols-2 max-[420px]:grid-cols-1'

  return (
    <div className={`grid ${gridCols} gap-2.5`}>
      {options.map((opt) => (
        <div key={opt.value}>
          <input
            type="radio"
            name={name}
            id={`${name}-${opt.value}`}
            value={opt.value}
            checked={value === opt.value}
            onChange={() => onChange(opt.value)}
            className="hidden"
          />
          <label
            htmlFor={`${name}-${opt.value}`}
            className={`block py-[13px] px-3.5 border-[1.5px] rounded-lg text-[13px] font-medium cursor-pointer transition-all duration-200 text-center leading-snug font-sans ${
              value === opt.value
                ? 'border-accent bg-accent-8 text-accent-light font-bold'
                : 'border-border bg-card text-muted hover:border-accent-40 hover:text-text'
            }`}
          >
            {opt.label}
          </label>
        </div>
      ))}
    </div>
  )
}
