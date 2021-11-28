// Return specified DOM elements
export function getDOMElements(DOMString, parent?): NodeListOf<Element> | null {
  return parent
    ? parent.querySelectorAll(DOMString)
    : document.querySelectorAll(DOMString);
}

// Returns a threshold based on breakpoint
export function getThreshold(breakpoint: number): number {
  return getCurrentBreakpointBoundries(breakpoint) ? 0.25 : 0.1;
}

// Returns a boolean as to whether a user has reduced motion on
export function getReducedMotion(): boolean {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

// Returns a boolean based on whether we meet or are below a breakpoint
export function getCurrentBreakpointBoundries(breakpoint: number): boolean {
  return window.innerWidth >= breakpoint;
}
