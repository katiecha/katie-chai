type TagProps = {
  children: React.ReactNode
  active?: boolean
  onClick?: () => void
}

export function Tag({ children, active = false, onClick }: TagProps) {
  const base = "text-xs px-2 py-0.5 rounded-full border transition-colors"
  const style = active
    ? "bg-black text-white border-black"
    : "text-gray-400 bg-gray-50 border-gray-200"

  if (onClick) {
    return (
      <button
        onClick={onClick}
        className={`${base} ${style} cursor-pointer hover:border-gray-400`}
      >
        {children}
      </button>
    )
  }

  return <span className={`${base} ${style}`}>{children}</span>
}
