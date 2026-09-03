/**
 * Shared smooth-scroll helper for in-page section navigation.
 *
 * Section links render as real anchors (`<a href="#about">`) whose `onClick`
 * calls `preventDefault()` and then this function, or as `<button type="button">`.
 */

const REDUCED_MOTION_QUERY = "(prefers-reduced-motion: reduce)";

function prefersReducedMotion(): boolean {
  if (typeof window === "undefined" || typeof window.matchMedia !== "function") {
    return false;
  }
  return window.matchMedia(REDUCED_MOTION_QUERY).matches;
}

/**
 * Scrolls the element with the given id into view, aligned to the top of the
 * viewport. Uses an instant jump when the user prefers reduced motion and is a
 * no-op when the element (or the DOM) is unavailable, so it is safe in jsdom.
 */
export function scrollToId(id: string): void {
  if (typeof document === "undefined") {
    return;
  }

  const target = document.getElementById(id);
  if (!target) {
    return;
  }

  target.scrollIntoView({
    behavior: prefersReducedMotion() ? "auto" : "smooth",
    block: "start",
  });

  // Move keyboard focus to the destination so it is not lost when a collapsing
  // mobile menu hides the activated link. The section is not natively focusable,
  // so give it a scoped, non-tab-stop tabindex; the :focus-visible-only ring in
  // global.css means pointer users see no persistent outline.
  if (!target.hasAttribute("tabindex")) {
    target.setAttribute("tabindex", "-1");
  }
  target.focus({ preventScroll: true });
}
