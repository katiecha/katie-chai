import Link from "next/link"

export function BackLink({ className }: { className?: string }) {
  return (
    <Link
      href="/work"
      className={`text-sm text-text-subtle hover:text-black transition-colors inline-flex items-center gap-1 ${className ?? ""}`}
    >
      ← Back to Work
    </Link>
  )
}
