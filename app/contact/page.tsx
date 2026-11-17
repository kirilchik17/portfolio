import { ArrowUpRight } from "lucide-react";
import type { Metadata } from "next";
import { ContactTile } from "@/components/contact-tile";
import { SocialIcon } from "@/components/icons";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Reach out for collaborations or just a friendly chat.",
};

export default function ContactPage() {
  return (
    <div className="grid grid-cols-12 gap-3.5 sm:pt-6">
      <ContactTile as="h1" className="lg:p-12!">
        <ul className="mt-8 flex flex-wrap gap-2">
          {site.socials.map((social) => (
            <li key={social.kind}>
              <a href={social.href} target="_blank" rel="noopener noreferrer" className="btn btn-ghost">
                <SocialIcon kind={social.kind} className="size-4" />
                {social.label}
                <ArrowUpRight aria-hidden className="size-4" />
              </a>
            </li>
          ))}
        </ul>
      </ContactTile>
    </div>
  );
}
