// Custom Vercel Web Analytics events: https://vercel.com/docs/analytics/custom-events
//
// Custom events require a Pro plan. On Hobby, page views still track, but
// track() calls are silently dropped from the dashboard's Events panel —
// see https://vercel.com/docs/analytics/limits-and-pricing.
//
// Vercel caps custom event data at 2 properties per event on Pro (8 with the
// Web Analytics Plus add-on), and property values must be strings, numbers,
// booleans, or null — never nested objects. Keep each event at or under that
// limit and only call track() from event handlers, never during render.
export const ANALYTICS_EVENTS = {
  projectLinkClick: "project_link_click",
  projectPreviewClick: "project_preview_click",
  socialClick: "social_click",
  resumeClick: "resume_click",
  funFactClick: "fun_fact_click",
  contactClick: "contact_email_click",
  easterEggKonami: "easter_egg_konami",
} as const
