type PageHeaderProps = {
  title: string
  subtitle: string
}

export function PageHeader({ title, subtitle }: PageHeaderProps) {
  return (
    <div className="mb-10">
      <h1 className="text-3xl font-semibold mb-2">{title}</h1>
      <p className="text-sm text-text-muted">{subtitle}</p>
    </div>
  )
}
