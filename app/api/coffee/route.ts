export function GET() {
  return new Response(
    "cannot brew coffee. try a Celsius or a matcha with coconut water instead. 🍵",
    { status: 418 }
  )
}
