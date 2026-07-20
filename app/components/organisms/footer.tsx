import { IconLink, ICON_SIZE } from "@/app/components/molecules/icon-link"
import { ANALYTICS_EVENTS } from "@/app/lib/analytics"
import { SOCIAL_LINKS } from "@/app/work/data"

export function Footer() {
  return (
    <footer className="max-w-4xl mx-auto px-6 py-10 mt-16 border-t border-border">
      <p className="text-xs text-text-subtle text-center">Made with ❤️ by Katie Chai</p>
      <div className="flex items-center justify-center gap-4 mt-4">
        <IconLink href={SOCIAL_LINKS.github} label="GitHub" size={ICON_SIZE.sm} eventName={ANALYTICS_EVENTS.socialClick} eventData={{ platform: "GitHub", location: "footer" }} />
        <IconLink href={SOCIAL_LINKS.linkedin} label="LinkedIn" size={ICON_SIZE.sm} eventName={ANALYTICS_EVENTS.socialClick} eventData={{ platform: "LinkedIn", location: "footer" }} />
        <IconLink href={SOCIAL_LINKS.x} label="X" size={ICON_SIZE.sm} eventName={ANALYTICS_EVENTS.socialClick} eventData={{ platform: "X", location: "footer" }} />
        <IconLink href={SOCIAL_LINKS.resume} label="Resume" type="resume" size={ICON_SIZE.sm} eventName={ANALYTICS_EVENTS.resumeClick} eventData={{ location: "footer" }} />
        <IconLink href={`mailto:${SOCIAL_LINKS.email}`} label="Email" type="mail" size={ICON_SIZE.sm} eventName={ANALYTICS_EVENTS.contactClick} eventData={{ location: "footer" }} />
      </div>
    </footer>
  )
}
