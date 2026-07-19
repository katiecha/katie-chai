type ImagePlaceholderProps = {
  label: string
  aspect?: string
}

export function ImagePlaceholder({ label, aspect = "16/9" }: ImagePlaceholderProps) {
  const [w, h] = aspect.split("/").map(Number)
  const isPortrait = w && h ? w < h : false
  const maxWidth = isPortrait ? "max-w-[220px]" : "max-w-xl"

  return (
    <div
      className={`w-full ${maxWidth} rounded-fillet border border-dashed border-border bg-surface-hover flex items-center justify-center px-6 text-center`}
      style={{ aspectRatio: aspect }}
    >
      <span className="text-xs text-text-subtle leading-relaxed">{label}</span>
    </div>
  )
}
