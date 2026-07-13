// Every /work/* detail route is a UI/UX case study and is password-protected,
// except the work index (/work) and the unlock screen itself.
export function isProtectedPath(pathname: string) {
  if (!pathname.startsWith("/work/")) return false
  if (pathname === "/work/unlock" || pathname.startsWith("/work/unlock/")) return false
  return true
}
