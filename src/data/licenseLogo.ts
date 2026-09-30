import type { LicenseItem } from "./types";

/** CRA `homepage` basename, e.g. `/personal-portfolio` (no trailing slash). */
const PUBLIC_URL = (process.env.PUBLIC_URL || "").replace(/\/$/, "");

/** Grey generic certificate mark when issuer has no brand asset. */
export const LICENSE_LOGO_FALLBACK = `${PUBLIC_URL}/licenses/default.svg`;

/**
 * Ensure public-asset paths work under CRA homepage / GitHub Pages.
 * Accepts `licenses/foo.png`, `/licenses/foo.png`, or absolute https URLs.
 */
function toPublicUrl(path: string): string {
  if (/^https?:\/\//i.test(path)) {
    return path;
  }
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${PUBLIC_URL}${normalized}`;
}

/**
 * Resolve the logo URL for a license (or any item with optional logoSrc).
 * Uses `logoSrc` when set; otherwise the grey default.
 */
export function resolveLicenseLogoSrc(
  item: Pick<LicenseItem, "logoSrc">
): string {
  return item.logoSrc ? toPublicUrl(item.logoSrc) : LICENSE_LOGO_FALLBACK;
}

/**
 * img onError handler: swap to the grey default once.
 * Usage: <img src={...} onError={handleLicenseLogoError} />
 */
export function handleLicenseLogoError(event: {
  currentTarget: HTMLImageElement;
}): void {
  const img = event.currentTarget;
  if (img.dataset.fallbackApplied === "1") return;
  img.dataset.fallbackApplied = "1";
  img.src = LICENSE_LOGO_FALLBACK;
}
