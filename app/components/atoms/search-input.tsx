type SearchInputProps = {
  value: string
  onChange: (value: string) => void
  placeholder?: string
}

export function SearchInput({ value, onChange, placeholder = "Find a project..." }: SearchInputProps) {
  return (
    <div className="relative flex-1 min-w-48">
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full px-3 py-1.5 text-sm border border-border rounded-md bg-white placeholder:text-text-subtle focus:outline-none focus:border-border-hover transition-colors"
      />
    </div>
  )
}
