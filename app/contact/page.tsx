import type { Metadata } from "next";
import { site } from "@/content/site";
import { ContactForm } from "./contact-form";

export const metadata: Metadata = {
  title: "Contact",
  description: "Reach out for collaborations or just a friendly chat.",
};

export default function ContactPage() {
  return (
    <div className="space-y-8">
      <section>
        <h1 className="text-3xl font-bold">Contact</h1>
        <p className="mt-4 text-muted-foreground">Feel free to reach out for collaborations or just a friendly chat.</p>
        <ul className="mt-4 flex gap-4">
          {site.socials.map((social) => (
            <li key={social.kind}>
              <a href={social.href} target="_blank" rel="noopener noreferrer" className="underline">
                {social.label}
              </a>
            </li>
          ))}
        </ul>
      </section>
      <ContactForm />
    </div>
  );
}
