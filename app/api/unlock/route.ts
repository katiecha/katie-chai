import { NextRequest, NextResponse } from "next/server"
import { unlockToken } from "@/app/lib/auth"

export async function POST(req: NextRequest) {
  const password = process.env.UIUX_PASSWORD

  let submitted = ""
  try {
    const body = await req.json()
    submitted = typeof body?.password === "string" ? body.password : ""
  } catch {
    submitted = ""
  }

  if (!password || submitted !== password) {
    return NextResponse.json({ ok: false }, { status: 401 })
  }

  const res = NextResponse.json({ ok: true })
  res.cookies.set("uiux_auth", await unlockToken(password), {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: 60 * 60 * 24 * 30,
  })
  return res
}
