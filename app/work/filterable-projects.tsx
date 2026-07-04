"use client"

import { useState } from "react"
import { Row } from "@/app/components/row"
import { Tag } from "@/app/components/tag"
import { Section } from "@/app/components/section"
import type { Category } from "@/app/work/data"

// Ordered by domain to match category grouping: Web → Systems → Data → Creative
const TAG_ORDER = [
  "TypeScript", "React", "JavaScript", "HTML", "CSS",
  "C", "MIPS", "Logisim",
  "Python", "R", "SAS",
  "Unity", "C#", "Swift",
]

export function FilterableCSProjects({ categories }: { categories: Category[] }) {
  const [activeTag, setActiveTag] = useState<string | null>(null)

  const presentTags = new Set(
    categories.flatMap((cat) => cat.projects.flatMap((p) => p.tags ?? []))
  )
  const orderedTags = TAG_ORDER.filter((t) => presentTags.has(t))

  const visibleCategories = activeTag
    ? categories
        .map((cat) => ({
          ...cat,
          projects: cat.projects.filter((p) => p.tags?.includes(activeTag)),
        }))
        .filter((cat) => cat.projects.length > 0)
    : categories

  return (
    <div>
      {orderedTags.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-2">
          <Tag active={activeTag === null} onClick={() => setActiveTag(null)}>
            All
          </Tag>
          {orderedTags.map((tag) => (
            <Tag
              key={tag}
              active={activeTag === tag}
              onClick={() => setActiveTag(activeTag === tag ? null : tag)}
            >
              {tag}
            </Tag>
          ))}
        </div>
      )}

      {visibleCategories.map((cat) => (
        <Section key={cat.title} title={cat.title} emoji={cat.emoji}>
          <div>
            {cat.projects.map((project) => (
              <Row key={project.name} project={project} />
            ))}
          </div>
        </Section>
      ))}
    </div>
  )
}
