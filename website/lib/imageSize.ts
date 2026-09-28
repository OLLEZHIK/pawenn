import fs from "fs";

/** Pixel size of a PNG, WebP or JPEG file from its header; null for SVG
 *  (scales freely) or anything unreadable. */
export function imageSize(file: string): { width: number; height: number } | null {
  let b: Buffer;
  try {
    b = fs.readFileSync(file);
  } catch {
    return null;
  }
  if (b.length > 24 && b.readUInt32BE(0) === 0x89504e47) return { width: b.readUInt32BE(16), height: b.readUInt32BE(20) };
  if (b.length > 30 && b.toString("ascii", 0, 4) === "RIFF" && b.toString("ascii", 8, 12) === "WEBP") {
    const chunk = b.toString("ascii", 12, 16);
    if (chunk === "VP8X") return { width: b.readUIntLE(24, 3) + 1, height: b.readUIntLE(27, 3) + 1 };
    if (chunk === "VP8 ") return { width: b.readUInt16LE(26) & 0x3fff, height: b.readUInt16LE(28) & 0x3fff };
    if (chunk === "VP8L") {
      const v = b.readUInt32LE(21);
      return { width: (v & 0x3fff) + 1, height: ((v >> 14) & 0x3fff) + 1 };
    }
  }
  if (b[0] === 0xff && b[1] === 0xd8) {
    let i = 2;
    while (i + 9 < b.length && b[i] === 0xff) {
      const marker = b[i + 1];
      if (marker >= 0xc0 && marker <= 0xc3) return { width: b.readUInt16BE(i + 7), height: b.readUInt16BE(i + 5) };
      i += 2 + b.readUInt16BE(i + 2);
    }
  }
  return null;
}

// A logo shown in the ~64 px card tile: a site icon (16-72 px) or a thin
// strip is blurry or unreadable there (docs/playbooks/add-city.md, section 5).
export const MIN_LOGO_LONG_SIDE = 128;
export const MIN_LOGO_SHORT_SIDE = 64;

export function logoTooSmall(file: string): { width: number; height: number } | null {
  const size = imageSize(file);
  if (!size) return null;
  const long = Math.max(size.width, size.height);
  const short = Math.min(size.width, size.height);
  return long < MIN_LOGO_LONG_SIDE || short < MIN_LOGO_SHORT_SIDE ? size : null;
}
