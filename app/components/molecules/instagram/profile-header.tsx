import { ChevronDown, MoreHorizontal, UserPlus } from "lucide-react"
import { ICON_SIZE } from "@/app/components/atoms/icon-link"
import { ProfilePicture } from "@/app/components/molecules/instagram/profile-picture"

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
      <div className="flex flex-col items-center gap-4 text-center md:flex-row md:items-start md:gap-12 md:text-left">
        <ProfilePicture src={avatarSrc} alt={displayName} size="xl" ring="plain" fit="contain" />

        <div className="flex flex-col items-center min-w-0 pt-1 md:items-start">
          <div className="flex items-center gap-2">
            <span className="text-xl font-semibold">{username}</span>
            <MoreHorizontal size={ICON_SIZE.lg} className="text-text-primary" />
          </div>

          <span className="text-sm text-text-primary mt-1.5">{displayName}</span>

          <div className="flex items-center justify-center gap-6 text-sm mt-4 md:justify-start">
            <span><span className="font-semibold">{postsCount.toLocaleString("en-US")}</span> <span className="text-text-muted">posts</span></span>
            <span><span className="font-semibold">{followersCount.toLocaleString("en-US")}</span> <span className="text-text-muted">followers</span></span>
            <span><span className="font-semibold">{followingCount.toLocaleString("en-US")}</span> <span className="text-text-muted">following</span></span>
          </div>

          <div className="text-sm leading-relaxed max-w-md mt-4">
            <span className="text-text-muted block">{category}</span>
            <span className="text-text-primary block">{bioTitle}</span>
            <span className="text-text-primary block">{description}</span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-2 mt-4 md:justify-start">
            <a
              href={followHref}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Following"
              className="h-10 min-w-0 flex-1 px-4 rounded-md bg-surface hover:bg-surface-hover text-sm font-semibold text-text-primary flex items-center justify-center gap-1 transition-colors md:min-w-[150px] md:flex-none"
            >
              Following <ChevronDown size={ICON_SIZE.sm} />
            </a>
            <a
              href={`mailto:${messageEmail}`}
              className="h-10 min-w-0 flex-1 px-4 rounded-md bg-surface hover:bg-surface-hover text-sm font-semibold text-text-primary flex items-center justify-center transition-colors md:min-w-[150px] md:flex-none"
            >
              Message
            </a>
            <button
              aria-label="Add person"
              className="w-9 h-10 rounded-md bg-surface hover:bg-surface-hover flex items-center justify-center transition-colors shrink-0"
            >
              <UserPlus size={ICON_SIZE.md} className="text-text-primary" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
