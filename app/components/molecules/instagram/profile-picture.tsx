import Image from "next/image"

type ProfilePictureSize = "sm" | "md" | "lg" | "xl"
type ProfilePictureRing = "none" | "plain" | "gradient"

const SIZE_CLASSES: Record<ProfilePictureSize, string> = {
  sm: "w-8 h-8",
  md: "w-16 h-16",
  lg: "w-24 h-24",
  xl: "w-36 h-36",
}

const SIZE_PX: Record<ProfilePictureSize, number> = {
  sm: 32,
  md: 64,
  lg: 96,
  xl: 144,
}

type ProfilePictureProps = {
  src: string
  alt: string
  size?: ProfilePictureSize
  ring?: ProfilePictureRing
  fit?: "cover" | "contain"
  priority?: boolean
  className?: string
}

export function ProfilePicture({
  src,
  alt,
  size = "md",
  ring = "none",
  fit = "cover",
  priority,
  className,
}: ProfilePictureProps) {
  const avatar = (
    <div className={`relative rounded-full overflow-hidden ${SIZE_CLASSES[size]} ${className ?? ""}`}>
      <Image src={src} alt={alt} fill sizes={`${SIZE_PX[size]}px`} className={fit === "cover" ? "object-cover" : "object-contain"} priority={priority} />
    </div>
  )

  if (ring === "plain") {
    return (
      <div className="p-px rounded-full border border-border/70 shrink-0">
        {avatar}
      </div>
    )
  }

  if (ring === "gradient") {
    return (
      <div className="p-[2.5px] rounded-full bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 shrink-0">
        <div className="p-[2.5px] rounded-full bg-white">{avatar}</div>
      </div>
    )
  }

  return avatar
}
