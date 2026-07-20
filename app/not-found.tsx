import Link from "next/link"
import { PageShell } from "@/app/components/molecules/page-shell"

export default function NotFound() {
  return (
    <PageShell>
      <div className="flex flex-col items-center gap-4 py-16 text-center">
        <p className="text-6xl font-semibold font-mono text-text-disabled">404</p>
        <h1 className="text-2xl font-semibold text-text-primary">
          This is not the page you&apos;re looking for.
        </h1>
        <p className="text-sm text-text-muted font-mono">
          katiecha / <span className="font-semibold text-black">this-page</span> — repo not found 🥚
        </p>
        <Link
          href="/work"
          className="mt-4 px-4 py-1.5 text-sm font-medium text-text-primary bg-surface-muted border border-border rounded-md hover:bg-surface-hover transition-colors"
        >
          Back to my work
        </Link>
      </div>
    </PageShell>
  )
}
