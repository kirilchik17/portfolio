import { currentPosition } from "@/content/experience";
import { site } from "@/content/site";

export function SiteFooter() {
  return (
    <footer className="relative z-10 print:hidden mx-auto flex w-full max-w-[1240px] flex-wrap items-center justify-between gap-3 px-6 pt-6 pb-12 text-[13px] text-faint">
      <p>
        © {new Date().getFullYear()} {site.name}
      </p>
      <ul className="flex gap-4">
        {site.socials.map((social) => (
          <li key={social.kind}>
            <a href={social.href} target="_blank" rel="noopener noreferrer" className="hover:text-ink">
              {social.label}
            </a>
          </li>
        ))}
      </ul>
      {currentPosition?.companyUrl && (
        <p className="font-mono">
          Currently building at{" "}
          <a
            href={currentPosition.companyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-ink hover:underline"
          >
            {new URL(currentPosition.companyUrl).host}
          </a>
        </p>
      )}
    </footer>
  );
}
