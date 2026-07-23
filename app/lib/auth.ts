// Opaque unlock-cookie value derived from the password, so the shared
// secret itself is never stored in the browser. Web Crypto only — this
// runs in both the Node API route and the Edge proxy.
export async function unlockToken(password: string): Promise<string> {
  const digest = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(`uiux:${password}`))
  return Array.from(new Uint8Array(digest), (b) => b.toString(16).padStart(2, "0")).join("")
}
