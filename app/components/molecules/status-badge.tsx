import { Tooltip } from "@/app/components/atoms/tooltip"
import type { Project } from "@/app/work/data"

export function InProgressBadge() {
  return (
    <Tooltip label="in progress: coming soon!">
      <span className="text-sm leading-none select-none shrink-0">⚠️</span>
    </Tooltip>
  )
}

export function VisibilityBadge({ status }: { status?: Project["status"] }) {
  const isPrivate = status === "private"
  return (
    <span className="text-xs font-medium text-text-muted bg-background border border-border rounded-full px-2.5 py-0.5 leading-tight shrink-0">
      {isPrivate ? "Private" : "Public"}
    </span>
  )
}
