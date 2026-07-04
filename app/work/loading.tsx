export default function Loading() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-12" aria-busy="true">
      <div className="animate-pulse space-y-4">
        <div className="h-8 bg-surface-hover rounded-fillet w-48" />
        <div className="h-4 bg-surface-hover rounded-fillet w-96" />
        <div className="h-4 bg-surface-hover rounded-fillet w-80" />
      </div>
    </main>
  )
}
