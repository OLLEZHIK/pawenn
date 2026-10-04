import fs from "fs";
import path from "path";
import { CONTACT_EMAIL } from "./site";

export function readDocsMarkdown(relativePath: string): string {
  return fs
    .readFileSync(path.join(process.cwd(), "..", "docs", relativePath), "utf-8")
    .replaceAll("{EMAIL}", CONTACT_EMAIL);
}
