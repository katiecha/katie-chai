import { Tooltip } from "@/app/components/atoms/tooltip"

export function InProgressBadge() {
  return (
    <Tooltip label="in progress: coming soon!">
      <span className="text-sm leading-none select-none shrink-0">⚠️</span>
    </Tooltip>
  )
}

export function LockBadge() {
  return (
    <Tooltip label="private: available upon request">
      <span className="text-sm leading-none select-none shrink-0">🔒</span>
    </Tooltip>
  )
}
