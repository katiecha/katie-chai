import { CARD_SHELL } from "@/app/lib/styles"

export function DefinitionGrid({ items }: { items: { name: string; definition: string }[] }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
      {items.map(({ name, definition }) => (
        <div key={name} className={`${CARD_SHELL} p-3`}>
          <p className="text-xs font-semibold mb-1">{name}</p>
          <p className="text-xs text-text-muted leading-relaxed">{definition}</p>
        </div>
      ))}
    </div>
  )
}
