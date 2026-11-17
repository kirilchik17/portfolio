import { ContactForm } from "@/app/contact/contact-form";
import { Kicker } from "@/components/kicker";
import { currentPosition } from "@/content/experience";

export function ContactTile({ as: Heading = "h2", className = "" }: { as?: "h1" | "h2"; className?: string }) {
  const company = currentPosition ? `${currentPosition.company}, ` : "";

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      data-spotlight
      className={`tile col-span-12 grid gap-7 bg-linear-160 from-tile from-40% to-[color-mix(in_srgb,var(--tile)_88%,var(--accent))] p-5.5! rise sm:p-8! md:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] ${className}`}
    >
      <div>
        <Kicker>Contact</Kicker>
        <Heading id="contact-heading" className="mt-4 text-[clamp(52px,4.8vw,72px)] type-display">
          Let&apos;s build <span className="block text-faint">something.</span>
        </Heading>
        <p className="mt-4 max-w-[340px] text-muted">
          Questions about {company}a project, or a CTF team that needs a guitarist? Drop me a line.
        </p>
      </div>
      <ContactForm />
    </section>
  );
}
