// Returns all of the DOM objects with .section
export function getSections(): NodeListOf<Element> {
  return document.querySelectorAll(".section");
}

// Returns a threshold based on breakpoint
export function getThreshold(breakpoint: number): string {
  return getCurrentBreakpointBoundries(breakpoint) ? "0.25" : "0.1";
}

// Returns a boolean as to whether a user has reduced motion on
export function getReducedMotion(): boolean {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

// Returns all of the DOM objects with .token-swatch in the provided section
export function getTokens(section: HTMLElement): NodeListOf<Element> {
  return section.querySelectorAll(".token-swatch");
}

// Returns a boolean based on whether we meet or are below a breakpoint
export function getCurrentBreakpointBoundries(breakpoint: number): boolean {
  return window.innerWidth >= breakpoint;
}
