"use client"

import { useState } from "react"
import { Row } from "@/app/components/row"
import { Section } from "@/app/components/section"
import { SearchInput } from "@/app/components/search-input"
import { DropdownFilter } from "@/app/components/dropdown-filter"
import type { Category } from "@/app/work/data"

// Ordered by domain: Web → AI → Systems → Data → Creative
const TAG_ORDER = [
  "TypeScript", "React", "Three.js", "JavaScript", "HTML", "CSS",
  "Claude Code", "AI",
  "C", "MIPS", "Logisim",
  "Python", "R", "SAS",
  "Java",
  "Unity", "C#", "Swift",
]

export function FilterableCSProjects({ categories }: { categories: Category[] }) {
  const [search, setSearch] = useState("")
  const [activeTag, setActiveTag] = useState<string | null>(null)

  const presentTags = new Set(
    categories.flatMap((cat) => cat.projects.flatMap((p) => p.tags ?? []))
  )
  const orderedTags = TAG_ORDER.filter((t) => presentTags.has(t))

  const query = search.trim().toLowerCase()

  const visibleCategories = categories
    .map((cat) => ({
      ...cat,
      projects: cat.projects.filter((p) => {
        const matchesTag = activeTag ? p.tags?.includes(activeTag) : true
        const matchesSearch = query
          ? p.name.toLowerCase().includes(query) || p.description.toLowerCase().includes(query)
          : true
        return matchesTag && matchesSearch
      }),
    }))
    .filter((cat) => cat.projects.length > 0)

  return (
    <div>
      {/* Search + filter bar */}
      <div className="flex items-center gap-2 mb-4 flex-wrap">
        <SearchInput value={search} onChange={setSearch} />
        <DropdownFilter
          label="Language"
          options={orderedTags}
          value={activeTag}
          onChange={setActiveTag}
        />
      </div>

      {visibleCategories.length === 0 ? (
        <p className="text-sm text-text-muted py-8 text-center">No projects match your search.</p>
      ) : (
        visibleCategories.map((cat) => (
          <Section key={cat.title} title={cat.title} emoji={cat.emoji}>
            <div>
              {cat.projects.map((project) => (
                <Row key={project.name} project={project} />
              ))}
            </div>
          </Section>
        ))
      )}
    </div>
  )
}
