import fs from "fs";
import path from "path";

// Width / height of a logo in public/logos, read from the file header (PNG,
// JPEG, WebP, SVG). A third of the logos are wide wordmarks (2:1 and wider):
// in a square tile they shrank to a thin line and the cards looked as if
// they had no logo (owner, 2026-10-07). The card gives those a wide tile.
// Server only; read once per file and kept in memory.

const cache = new Map<string, number | null>();

function readHead(file: string): Buffer | null {
  try {
    const fd = fs.openSync(file, "r");
    const buf = Buffer.alloc(64 * 1024);
    const n = fs.readSync(fd, buf, 0, buf.length, 0);
    fs.closeSync(fd);
    return buf.subarray(0, n);
  } catch {
    return null;
  }
}

function dims(b: Buffer, ext: string): [number, number] | null {
  if (b.length > 24 && b.readUInt32BE(0) === 0x89504e47) return [b.readUInt32BE(16), b.readUInt32BE(20)];
  if (b.length > 30 && b.toString("ascii", 0, 4) === "RIFF" && b.toString("ascii", 8, 12) === "WEBP") {
    const kind = b.toString("ascii", 12, 16);
    if (kind === "VP8X") return [1 + b.readUIntLE(24, 3), 1 + b.readUIntLE(27, 3)];
    if (kind === "VP8L") {
      const v = b.readUInt32LE(21);
      return [1 + (v & 0x3fff), 1 + ((v >> 14) & 0x3fff)];
    }
    if (kind === "VP8 ") return [b.readUInt16LE(26) & 0x3fff, b.readUInt16LE(28) & 0x3fff];
  }
  if (b.length > 4 && b[0] === 0xff && b[1] === 0xd8) {
    let i = 2;
    while (i + 9 < b.length) {
      if (b[i] !== 0xff) return null;
      const marker = b[i + 1];
      const len = b.readUInt16BE(i + 2);
      if (marker >= 0xc0 && marker <= 0xcf && marker !== 0xc4 && marker !== 0xc8 && marker !== 0xcc) {
        return [b.readUInt16BE(i + 7), b.readUInt16BE(i + 5)];
      }
      i += 2 + len;
    }
    return null;
  }
  if (ext === ".svg") {
    const t = b.toString("utf8");
    const vb = t.match(/viewBox\s*=\s*["']\s*[-\d.]+[\s,]+[-\d.]+[\s,]+([\d.]+)[\s,]+([\d.]+)/i);
    if (vb) return [Number(vb[1]), Number(vb[2])];
    const w = t.match(/<svg[^>]*\swidth\s*=\s*["']([\d.]+)/i);
    const h = t.match(/<svg[^>]*\sheight\s*=\s*["']([\d.]+)/i);
    if (w && h) return [Number(w[1]), Number(h[1])];
  }
  return null;
}

/** Width / height of the logo, or null when it cannot be read. */
export function logoAspect(logoFile: string | null | undefined): number | null {
  const name = (logoFile ?? "").trim();
  if (!name) return null;
  if (cache.has(name)) return cache.get(name)!;
  const file = path.join(process.cwd(), "public", "logos", name);
  const head = readHead(file);
  const d = head ? dims(head, path.extname(name).toLowerCase()) : null;
  const aspect = d && d[0] > 0 && d[1] > 0 ? d[0] / d[1] : null;
  cache.set(name, aspect);
  return aspect;
}
