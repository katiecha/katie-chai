"use client"

import { useState } from "react"
import { Row } from "@/app/components/molecules/row"
import { Section } from "@/app/components/molecules/section"
import { SearchInput } from "@/app/components/atoms/search-input"
import { DropdownFilter } from "@/app/components/molecules/dropdown-filter"
import { IconLink } from "@/app/components/molecules/icon-link"
import type { Category } from "@/app/work/data"

const LANGUAGE_ORDER = [
  "TypeScript", "JavaScript", "HTML", "CSS",
  "C", "MIPS", "Logisim",
  "Python", "R", "SAS",
  "Java",
  "C#", "Swift",
]

const OTHER_ORDER = [
  "React", "Next.js", "Three.js", "Express", "FastAPI", "Firebase", "Unity", "TensorFlow", "OpenCV",
]

export function FilterableCSProjects({ categories }: { categories: Category[] }) {
  const [search, setSearch] = useState("")
  const [activeLanguage, setActiveLanguage] = useState<string | null>(null)
  const [activeOther, setActiveOther] = useState<string | null>(null)

  const presentLanguages = new Set(
    categories.flatMap((cat) => cat.projects.flatMap((p) => p.tags ?? []))
  )
  const presentOther = new Set(
    categories.flatMap((cat) => cat.projects.flatMap((p) => p.other ?? []))
  )

  const orderedLanguages = LANGUAGE_ORDER.filter((t) => presentLanguages.has(t))
  const orderedOther = OTHER_ORDER.filter((f) => presentOther.has(f))

  const query = search.trim().toLowerCase()
  const hasFilter = Boolean(activeLanguage || activeOther || query)

  const visibleCategories = categories
    .map((cat) => {
      if (cat.note) return hasFilter ? null : cat

      return {
        ...cat,
        projects: cat.projects.filter((p) => {
          const matchesLanguage = activeLanguage ? p.tags?.includes(activeLanguage) : true
          const matchesOther = activeOther ? p.other?.includes(activeOther) : true
          const matchesSearch = query
            ? p.name.toLowerCase().includes(query) || p.description.toLowerCase().includes(query)
            : true
          return matchesLanguage && matchesOther && matchesSearch
        }),
      }
    })
    .filter((cat): cat is NonNullable<typeof cat> => {
      if (!cat) return false
      if (cat.note) return true
      return cat.projects.length > 0
    })

  return (
    <div>
      <div className="flex flex-col gap-2 mb-4 md:flex-row md:items-center md:flex-wrap">
        <SearchInput value={search} onChange={setSearch} />
        <div className="flex items-center gap-2">
          <DropdownFilter
            label="Language"
            options={orderedLanguages}
            value={activeLanguage}
            onChange={setActiveLanguage}
          />
          <DropdownFilter
            label="Other"
            options={orderedOther}
            value={activeOther}
            onChange={setActiveOther}
          />
        </div>
      </div>

      {visibleCategories.length === 0 ? (
        <p className="text-sm text-text-muted py-8 text-center">No projects match your search.</p>
      ) : (
        visibleCategories.map((cat) => (
          <Section key={cat.title} title={cat.title} emoji={cat.emoji}>
            {cat.note ? (
              <div>
                <p className="text-sm text-text-muted leading-relaxed">{cat.note}</p>
                {cat.noteLinks && cat.noteLinks.length > 0 && (
                  <div className="flex items-center gap-3 mt-3">
                    {cat.noteLinks.map((link) => (
                      <IconLink key={link.href} href={link.href} label={link.label} type={link.type} />
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <div>
                {cat.projects.map((project) => (
                  <Row key={project.name} project={project} />
                ))}
              </div>
            )}
          </Section>
        ))
      )}
    </div>
  )
}
