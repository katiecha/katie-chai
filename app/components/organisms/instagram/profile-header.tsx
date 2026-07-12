import { ChevronDown, MoreHorizontal, UserPlus } from "lucide-react"
import { ProfilePicture } from "@/app/components/organisms/instagram/profile-picture"

type ProfileHeaderProps = {
  username: string
  avatarSrc: string
  displayName: string
  postsCount: number
  followersCount: number
  followingCount: number
  category: string
  bioTitle: string
  description: string
  followHref: string
  messageEmail: string
}

export function ProfileHeader({
  username,
  avatarSrc,
  displayName,
  postsCount,
  followersCount,
  followingCount,
  category,
  bioTitle,
  description,
  followHref,
  messageEmail,
}: ProfileHeaderProps) {
  return (
    <div className="px-6 py-8">
      <div className="flex items-start gap-12">
        <ProfilePicture src={avatarSrc} alt={displayName} size="xl" ring="plain" fit="contain" />

        <div className="flex flex-col min-w-0 pt-1">
          <div className="flex items-center gap-2">
            <span className="text-xl font-semibold">{username}</span>
            <MoreHorizontal size={20} className="text-text-primary" />
          </div>

          <span className="text-sm text-text-primary mt-1.5">{displayName}</span>

          <div className="flex items-center gap-6 text-sm mt-4">
            <span><span className="font-semibold">{postsCount.toLocaleString("en-US")}</span> <span className="text-text-muted">posts</span></span>
            <span><span className="font-semibold">{followersCount.toLocaleString("en-US")}</span> <span className="text-text-muted">followers</span></span>
            <span><span className="font-semibold">{followingCount.toLocaleString("en-US")}</span> <span className="text-text-muted">following</span></span>
          </div>

          <div className="text-sm leading-relaxed max-w-md mt-4">
            <span className="text-text-muted block">{category}</span>
            <span className="text-text-primary block">{bioTitle}</span>
            <span className="text-text-primary block">{description}</span>
          </div>

          <div className="flex items-center gap-2 mt-4">
            <a
              href={followHref}
              target="_blank"
              rel="noopener noreferrer"
              className="h-10 min-w-[150px] px-4 rounded-lg bg-surface hover:bg-surface-hover text-sm font-semibold text-text-primary flex items-center justify-center gap-1 transition-colors"
            >
              Following <ChevronDown size={14} />
            </a>
            <a
              href={`mailto:${messageEmail}`}
              className="h-10 min-w-[150px] px-4 rounded-lg bg-surface hover:bg-surface-hover text-sm font-semibold text-text-primary flex items-center justify-center transition-colors"
            >
              Message
            </a>
            <button
              aria-label="Add person"
              className="w-9 h-10 rounded-lg bg-surface hover:bg-surface-hover flex items-center justify-center transition-colors shrink-0"
            >
              <UserPlus size={16} className="text-text-primary" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
