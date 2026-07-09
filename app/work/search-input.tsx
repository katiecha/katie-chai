type SearchInputProps = {
  value: string
  onChange: (value: string) => void
  placeholder?: string
}

export function SearchInput({ value, onChange, placeholder = "Find a project..." }: SearchInputProps) {
  return (
    <div className="relative flex-1 min-w-48">
      <svg
        className="absolute left-3 top-1/2 -translate-y-1/2 text-text-subtle pointer-events-none"
        width="14"
        height="14"
        viewBox="0 0 16 16"
        fill="currentColor"
      >
        <path d="M10.68 11.74a6 6 0 0 1-7.922-8.982 6 6 0 0 1 8.982 7.922l3.04 3.04a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215ZM11.5 7a4.499 4.499 0 1 0-8.997 0A4.499 4.499 0 0 0 11.5 7Z" />
      </svg>
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full pl-8 pr-3 py-1.5 text-sm border border-border rounded-fillet bg-white placeholder:text-text-subtle focus:outline-none focus:border-border-hover transition-colors"
      />
    </div>
  )
}
