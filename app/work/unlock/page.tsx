"use client"

import { Suspense, useState } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import { BackLink } from "@/app/work/back-link"
import { SOCIAL_LINKS } from "@/app/work/data"

function UnlockForm() {
  const router = useRouter()
  const params = useSearchParams()
  const next = params.get("next") || "/work"

  const [password, setPassword] = useState("")
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(false)

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (loading) return
    setLoading(true)
    setError(false)

    const res = await fetch("/api/unlock", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ password }),
    })

    if (res.ok) {
      router.replace(next)
      router.refresh()
    } else {
      setError(true)
      setLoading(false)
    }
  }

  return (
    <div className="w-full max-w-sm rounded-fillet border border-border bg-white shadow-md p-8">
      <div className="flex flex-col items-center text-center mb-6">
        <span className="text-2xl mb-3 leading-none select-none">🔒</span>
        <h1 className="text-lg font-semibold mb-2">Protected project</h1>
        <p className="text-sm text-text-muted leading-relaxed">
          This UI/UX case study is password-protected. Enter the password to continue, or email{" "}
          <span className="text-text-primary">{SOCIAL_LINKS.email}</span> for access.
        </p>
      </div>

      <form onSubmit={onSubmit} className="flex flex-col gap-3">
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          autoFocus
          aria-label="Password"
          aria-invalid={error}
          className="w-full px-3 py-2 text-sm text-center bg-surface text-text-primary rounded-md border border-border focus:border-border-hover focus:outline-none"
        />
        {error && (
          <p className="text-xs text-text-muted text-center">Incorrect password. Try again.</p>
        )}
        <button
          type="submit"
          disabled={loading || password.length === 0}
          className="w-full px-3 py-2 text-sm font-medium text-white bg-black rounded-md hover:bg-text-primary transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
        >
          {loading ? "Unlocking…" : "Unlock"}
        </button>
      </form>

      <div className="text-center mt-6">
        <BackLink />
      </div>
    </div>
  )
}

export default function UnlockPage() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-16 min-h-[70vh] flex items-center justify-center">
      <Suspense>
        <UnlockForm />
      </Suspense>
    </main>
  )
}
