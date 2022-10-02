interface Post {
  layout: "string";
  date: "string";
  title: "string";
  desc: "string";
  hero: "string";
  draft: boolean;
}

// Return specified DOM elements
export function getDOMElements(DOMString, parent?): NodeListOf<Element> | null {
  return parent
    ? parent.querySelectorAll(DOMString)
    : document.querySelectorAll(DOMString);
}

// Returns a threshold based on breakpoint
export function getThreshold(breakpoint: number): number {
  return getCurrentBreakpointBoundries(breakpoint) ? 0.05 : 0.025;
}

// Returns a boolean as to whether a user has reduced motion on
export function getReducedMotion(): boolean {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

// Returns a boolean based on whether we meet or are below a breakpoint
export function getCurrentBreakpointBoundries(breakpoint: number): boolean {
  return window.innerWidth >= breakpoint;
}

// Returns true if post is not in draft
export function isPublished(post: Post) {
  return !post.draft;
}

// Sorts the posts by date newest first
export function sortPosts(a: Post, b: Post) {
  return new Date(a.date).getTime() - new Date(b.date).getTime();
}
