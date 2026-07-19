import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { SectionHeading } from "@/app/components/atoms/section-heading"
import { DefinitionGrid } from "@/app/components/molecules/definition-grid"
import { ImagePlaceholder } from "@/app/components/molecules/image-placeholder"

export const metadata: Metadata = {
  title: "Jeni's Splendid Ice Creams - Katie Chai",
  description: "A self-directed UX case study on flavor discovery and gifting in a premium ice cream app.",
}

const PROBLEMS = [
  {
    name: "Choice overload in flavor selection",
    definition:
      "Jeni's rotates dozens of seasonal and regional flavors (Brambleberry Crisp, Salty Caramel, Brown Butter Almond Brittle, a revolving cast of sorbets), and that variety is the whole appeal. But the catalog shows them as one long, unsorted list with no way to filter or compare. Faced with forty options and no clear way in, I'd expect people to fall back on a flavor they already know, which quietly works against the discovery the brand is built on.",
  },
  {
    name: "Gift configuration friction",
    definition:
      "Building a ship-anywhere box means adding pints one at a time with no pairings, templates, or starting point. Some of that effort is a real constraint (cold-chain shipping needs a minimum number of pints to justify the dry ice and insulated packaging), but the rule is enforced silently, so gifters hit it as a mystery error instead of helpful guidance. I'd expect this to cost completed gift orders, though I don't have funnel data to confirm it.",
  },
  {
    name: "Low delivery confidence",
    definition:
      "Ice cream by mail carries one dominant worry: will it arrive melted. The flow surfaces little about delivery-day selection, dry-ice packaging, or tracking, so a high-stakes purchase asks for a leap of faith at exactly the moment reassurance matters most.",
  },
  {
    name: "Scoop shop ↔ app disconnect",
    definition:
      "Scoop shop flavor boards change daily and vary by location, and the app isn't synced to what's actually in the case. A flavor discovered at the counter often can't be found, saved, or reordered online later, so the strongest moment of discovery leaves no trail.",
  },
  {
    name: "No line for limited releases",
    definition:
      "Jeni's limited and seasonal flavors sell out fast, but the app offers no way to follow what's coming or get told when something drops. The fans who care most about novelty (the whole reason to keep checking back) often find out too late, so the brand's natural release rhythm never becomes a reason to reopen the app.",
  },
]

const PRINCIPLES = [
  {
    name: "Guide discovery without flattening the brand",
    definition:
      "Add filtering and comparison, but keep the editorial, story-driven flavor names that make browsing Jeni's feel like a specialty shop rather than a spreadsheet. It should be an easy way in, not a spec sheet.",
  },
  {
    name: "Make flavors comparable",
    definition:
      "Give every flavor a consistent, scannable profile (taste notes, texture, dietary flags, and where it's available) so someone can weigh Salty Caramel against a fruit sorbet at a glance instead of guessing from the name.",
  },
  {
    name: "Design for the cold chain",
    definition:
      "Treat delivery-day timing, dry-ice packaging, and pint minimums as part of the experience, surfaced early and framed as care, rather than as fine print discovered at checkout.",
  },
  {
    name: "Carry taste memory across channels",
    definition:
      "Let saved and recently tried flavors follow one account between the scoop shop counter and the app, so discovery in either place informs the next order.",
  },
]

const PERSONAS = [
  {
    name: "The Explorer",
    definition:
      "Treats the flavor list like a menu and comes for the limited drops and the strangest names. Primary need: fast discovery and easy comparison, so trying something unfamiliar feels low-risk.",
  },
  {
    name: "The Gift Buyer",
    definition:
      "Buying for someone else, often shipping across the country, with high intent but low confidence in what to pick. Primary need: curation, pairing help, and reassurance the box arrives intact.",
  },
  {
    name: "The Repeat Buyer",
    definition:
      "Has three or four standbys and reorders often, but rarely branches out. Primary need: less effort to reorder, and a nudge to keep exploring.",
  },
  {
    name: "The Dairy-Free Shopper",
    definition:
      "Eats dairy-free or vegan and has been let down by thin, icy alternatives elsewhere. Primary need: to filter straight to what they can eat and trust the texture before buying. Jeni's dairy-free line is a real draw.",
  },
]

export default function JenisPage() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-16">
      <Link href="/work" className="text-sm text-text-subtle hover:text-black transition-colors inline-flex items-center gap-1 mb-8">
        ← Back to Work
      </Link>

      <h1 className="text-3xl font-semibold mb-2">Jeni&apos;s Splendid Ice Creams</h1>
      <p className="text-sm text-text-muted mb-1">A self-directed UX case study on flavor discovery and gifting.</p>
      <p className="text-xs text-text-subtle mb-10">Self-directed study · Mobile app · UX research + UI</p>

      <div className="relative w-full rounded-fillet overflow-hidden bg-surface-hover mb-16" style={{ aspectRatio: "16/9" }}>
        <Image src="/images/uiux-jenis.jpg" alt="Jeni's Splendid Ice Creams case study" fill sizes="(min-width: 896px) 896px, 100vw" className="object-cover" />
      </div>

      <div className="flex flex-col gap-14">

        {/* Overview */}
        <section>
          <SectionHeading>Overview</SectionHeading>
          <div className="flex flex-col gap-4 text-sm text-text-muted leading-relaxed">
            <p>
              Jeni&apos;s Splendid Ice Creams is a premium ice cream brand built on discovery: an inventive, seasonally rotating lineup sold through scoop shops and shipped nationwide as pints packed on dry ice. The catalog changes often and varies by place, which is part of the charm and part of the challenge.
            </p>
            <p>
              This is a <span className="font-medium text-black">self-directed case study</span>, done independently of the brand and without access to its users or data. I used it to work from a single hypothesis: that a more guided way to browse Jeni&apos;s ever-changing lineup, plus a gift flow that accounts for how frozen goods actually ship, would help people choose with more confidence, whether they&apos;re picking a pint for themselves or building a box for someone else.
            </p>
          </div>
        </section>

        {/* Problem definition */}
        <section>
          <SectionHeading>Problem Definition</SectionHeading>
          <p className="text-sm text-text-muted leading-relaxed mb-6">
            Working from the live app and site, I walked the core purchase paths (flavor browsing, gift-box building, and the handoff between scoop shop and app), noting where flavors were hard to compare, where constraints stayed hidden until checkout, and where context dropped between visits. Five recurring friction points stood out, each noted below with the effect I&apos;d expect it to have.
          </p>
          <DefinitionGrid items={PROBLEMS} />
        </section>

        {/* Design criteria */}
        <section>
          <SectionHeading>Design Criteria</SectionHeading>
          <p className="text-sm text-text-muted leading-relaxed mb-6">
            I turned each finding into a design criterion: a plain objective every proposed screen had to meet.
          </p>
          <DefinitionGrid items={PRINCIPLES} />
        </section>

        {/* Method */}
        <section>
          <SectionHeading>Method</SectionHeading>
          <div className="flex flex-col gap-10">

            <div>
              <h3 className="text-sm font-semibold mb-4">Working personas</h3>
              <p className="text-sm text-text-muted leading-relaxed mb-6">
                Without access to Jeni&apos;s own customer research, I sketched four personas from patterns common to premium DTC food shopping. They&apos;re working assumptions to keep the design grounded, not validated findings. Revisited in Limitations.
              </p>
              <DefinitionGrid items={PERSONAS} />
            </div>

            <div>
              <h3 className="text-sm font-semibold mb-2">Comparative scan</h3>
              <p className="text-sm text-text-muted leading-relaxed">
                I reviewed a small set of comparable premium food and DTC apps (Van Leeuwen, Salt &amp; Straw, and Graeter&apos;s among them) as a qualitative pattern scan rather than a quantitative benchmark. The recurring trait across the ones that felt easiest to browse: a filterable, attribute-rich catalog that still leads with photography and story, with checkout kept to the end rather than the front.
              </p>
            </div>

          </div>
        </section>

        {/* Proposed solutions */}
        <section>
          <SectionHeading>Proposed Solutions</SectionHeading>
          <p className="text-sm text-text-muted leading-relaxed mb-10">
            Each proposal maps to a problem above and sits along the core task flow: <span className="font-medium text-black">discover → evaluate → configure → reorder</span>. Screens are shown as placeholder frames pending high-fidelity mockups.
          </p>
          <div className="flex flex-col gap-12">

            <div>
              <h3 className="text-sm font-semibold mb-2">Guided flavor finder</h3>
              <p className="text-sm text-text-muted leading-relaxed mb-4">
                A short filter (flavor category, mix-ins, dietary need, and a toggle for limited or seasonal only) that narrows dozens of flavors to a handful worth a closer look. It surfaces the fun names and seasonal stories rather than hiding them behind a spec table.
              </p>
              <ImagePlaceholder label="Flavor finder: filter by category, mix-ins, dietary, seasonal" aspect="9/16" />
            </div>

            <div>
              <h3 className="text-sm font-semibold mb-2">Flavor detail that leads with taste</h3>
              <p className="text-sm text-text-muted leading-relaxed mb-4">
                Each flavor page opens with what it actually tastes like (<span className="font-medium text-black">brown butter, toasted almond, salted brittle</span>), then texture, dietary flags, and where it&apos;s available (scoop shop, pint, or online), with a save-and-tag action to shortlist it.
              </p>
              <ImagePlaceholder label="Flavor detail: taste notes, texture, availability, save with tags" aspect="9/16" />
            </div>

            <div>
              <h3 className="text-sm font-semibold mb-2">Assisted gift-box builder</h3>
              <p className="text-sm text-text-muted leading-relaxed mb-4">
                Starter templates and pairing suggestions replace one-at-a-time picking, with clear, encouraging progress toward the shipping minimum instead of a silent error, plus a gifting path for a note and a chosen delivery date.
              </p>
              <ImagePlaceholder label="Gift-box builder: templates, pairings, shipping-minimum progress, gifting" aspect="9/16" />
            </div>

            <div>
              <h3 className="text-sm font-semibold mb-2">Delivery confidence</h3>
              <p className="text-sm text-text-muted leading-relaxed mb-4">
                Delivery-day selection, a plain explanation of the dry-ice packaging, and tracking brought forward in the flow, so the melt-anxiety question gets answered before it&apos;s asked.
              </p>
              <ImagePlaceholder label="Delivery confidence: delivery-day picker, packaging explainer, tracking" aspect="9/16" />
            </div>

            <div>
              <h3 className="text-sm font-semibold mb-2">Scoop shop ↔ app sync</h3>
              <p className="text-sm text-text-muted leading-relaxed mb-4">
                An in-store QR code opens the exact flavor in the app and saves it to the account, and availability reflects what&apos;s live in nearby shops, so a flavor spotted at the counter turns up again in the app, ready to reorder.
              </p>
              <ImagePlaceholder label="Cross-channel: in-store QR → flavor detail → saved, live shop availability" aspect="9/16" />
            </div>

            <div>
              <h3 className="text-sm font-semibold mb-2">Flavor-drop waitlist</h3>
              <p className="text-sm text-text-muted leading-relaxed mb-4">
                Rather than a replenishment subscription (ice cream isn&apos;t really something you run out of on a schedule), a membership-style waitlist gives loyal customers early access and a heads-up when limited seasonal flavors drop.
              </p>
              <ImagePlaceholder label="Flavor-drop waitlist: early access and alerts for limited releases" aspect="9/16" />
            </div>

          </div>
        </section>

        {/* Limitations & next steps */}
        <section>
          <SectionHeading>Limitations &amp; Next Steps</SectionHeading>
          <div className="flex flex-col gap-4 text-sm text-text-muted leading-relaxed">
            <p>
              This is a conceptual, self-directed study without primary research or a shipped product, so its conclusions are hypotheses rather than validated outcomes: the personas are assumptions and the competitive read is qualitative. It also leaves one real tension open: filtering has to help without diluting the editorial, browse-for-fun quality that&apos;s core to how people enjoy Jeni&apos;s, and only testing would show where that line sits.
            </p>
            <p>
              If this were built, I&apos;d validate it with moderated usability tests on the flavor-selection and gift-box flows, watching task success, time on task, and a post-task confidence rating (<span className="font-medium text-black">&ldquo;I felt good about what I chose&rdquo;</span>), and, with real instrumentation, track gift-flow completion rate, average order value, and repeat-purchase rate against the current experience.
            </p>
          </div>
        </section>

      </div>
    </main>
  )
}
