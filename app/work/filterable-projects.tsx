"use client"

import { useState } from "react"
import { Card } from "@/app/components/card"
import { Tag } from "@/app/components/tag"
import { Section } from "@/app/components/section"
import type { Category } from "@/app/work/data"

export function FilterableCSProjects({ categories }: { categories: Category[] }) {
  const [activeTag, setActiveTag] = useState<string | null>(null)

  const allTags = Array.from(
    new Set(categories.flatMap((cat) => cat.projects.flatMap((p) => p.tags ?? [])))
  ).sort()

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
      {allTags.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-6">
          {allTags.map((tag) => (
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
              <Card key={project.name} project={project} />
            ))}
          </div>
        </Section>
      ))}
    </div>
  )
}
