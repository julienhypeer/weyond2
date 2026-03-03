export default function CheckboxGroup({ name, options, values = [], onChange }) {
  return (
    <div className="grid grid-cols-2 max-[520px]:grid-cols-1 gap-2.5">
      {options.map((opt) => {
        const checked = values.includes(opt)
        const id = `${name}-${opt.replace(/\s/g, '-').toLowerCase()}`
        return (
          <div key={opt}>
            <input
              type="checkbox"
              id={id}
              checked={checked}
              onChange={() => onChange(opt)}
              className="hidden"
            />
            <label
              htmlFor={id}
              className={`flex items-center gap-2.5 py-[12px] px-3.5 border-[1.5px] rounded-lg text-[13px] cursor-pointer transition-all duration-200 font-sans leading-snug ${
                checked
                  ? 'border-accent bg-accent-8 text-accent-light font-semibold'
                  : 'border-border bg-card text-muted hover:border-accent-40'
              }`}
            >
              <span
                className={`w-4 h-4 rounded-[3px] border shrink-0 flex items-center justify-center text-[10px] transition-all duration-200 ${
                  checked
                    ? 'bg-accent border-accent text-black font-bold'
                    : 'border-border bg-transparent'
                }`}
              >
                {checked ? '✓' : ''}
              </span>
              {opt}
            </label>
          </div>
        )
      })}
    </div>
  )
}
