import Image from "next/image"
import { X } from "lucide-react"
import { ICON_SIZE } from "@/app/components/molecules/icon-link"
import { ProfilePicture } from "@/app/components/atoms/instagram/profile-picture"
import type { Highlight } from "@/app/play/data"

type StoryViewerProps = {
  highlight: Highlight
  activeFrame: number
  progress: number
  username: string
  avatarSrc: string
  onClose: () => void
  onPrev: () => void
  onNext: () => void
}

export function StoryViewer({ highlight, activeFrame, progress, username, avatarSrc, onClose, onPrev, onNext }: StoryViewerProps) {
  const frameSrc = highlight.frames[activeFrame]

  return (
    <div className="fixed inset-x-0 bottom-0 top-14 z-modal bg-overlay-dark flex items-center justify-between">
      <button className="flex-1 h-full cursor-pointer" onClick={onPrev} aria-label="Previous story" />

      <div className="relative h-[90vh] rounded-2xl overflow-hidden bg-black shrink-0" style={{ aspectRatio: "9/16" }}>
        <Image src={frameSrc} alt={`${highlight.label} ${activeFrame + 1}`} fill sizes="(min-width: 768px) 500px, 100vw" className="object-cover" priority />

        <div className="absolute top-3 left-3 right-3 z-10 flex gap-1">
          {highlight.frames.map((frame, i) => (
            <div key={frame} className="flex-1 h-0.5 rounded-full bg-white/30 overflow-hidden">
              <div
                className="h-full bg-white rounded-full"
                style={{
                  width:
                    i < activeFrame ? "100%"
                    : i === activeFrame ? `${progress}%`
                    : "0%",
                }}
              />
            </div>
          ))}
        </div>

        <div className="absolute top-7 left-3 z-10 flex items-center gap-2">
          <ProfilePicture src={avatarSrc} alt={username} size="sm" ring="plain" fit="contain" />
          <span className="text-white text-xs font-semibold drop-shadow">{username}</span>
        </div>

        <button className="absolute left-0 top-0 bottom-0 w-1/3 z-20 cursor-pointer" onClick={onPrev} aria-label="Previous story" />
        <button className="absolute right-0 top-0 bottom-0 w-2/3 z-20 cursor-pointer" onClick={onNext} aria-label="Next story" />
      </div>

      <button className="flex-1 h-full cursor-pointer" onClick={onNext} aria-label="Next story" />

      <button onClick={onClose} className="absolute top-5 right-5 z-10 text-white/80 hover:text-white transition-colors p-3 cursor-pointer" aria-label="Close">
        <X size={ICON_SIZE.lg} strokeWidth={2.5} />
      </button>
    </div>
  )
}
