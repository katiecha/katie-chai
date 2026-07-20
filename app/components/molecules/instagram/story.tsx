import { ProfilePicture } from "@/app/components/atoms/instagram/profile-picture"

type StoryProps = {
  cover: string
  label: string
  onClick: () => void
  size?: "sm" | "md" | "lg"
}

export function Story({ cover, label, onClick, size = "md" }: StoryProps) {
  return (
    <button onClick={onClick} className="shrink-0 flex flex-col items-center gap-2 group cursor-pointer">
      <ProfilePicture src={cover} alt={label} size={size} ring="plain" />
      <span className="text-xs text-text-subtle text-center w-16 md:w-24 truncate group-hover:text-text-muted transition-colors">{label}</span>
    </button>
  )
}
