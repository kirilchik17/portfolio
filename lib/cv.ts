import { existsSync } from "node:fs";
import path from "node:path";

export const cvHref = "/cv.pdf";

// Dropping a cv.pdf into public/ is the only step needed to show the download link.
export function hasCv(): boolean {
  return existsSync(path.join(process.cwd(), "public", "cv.pdf"));
}
