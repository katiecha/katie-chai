import { NextRequest, NextResponse } from "next/server"
import { isProtectedPath } from "@/app/lib/protected"

export function proxy(req: NextRequest) {
  const { pathname } = req.nextUrl
  if (!isProtectedPath(pathname)) return NextResponse.next()

  const token = req.cookies.get("uiux_auth")?.value
  const password = process.env.UIUX_PASSWORD

  if (password && token === password) return NextResponse.next()

  const url = req.nextUrl.clone()
  url.pathname = "/work/unlock"
  url.search = ""
  url.searchParams.set("next", pathname)
  return NextResponse.redirect(url)
}

export const config = {
  matcher: ["/work/:path*"],
}
