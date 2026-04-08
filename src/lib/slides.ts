export interface SlideInfo {
  path: string
  segment: string
  title: string
  slideNumber: number
}

export interface SegmentGroup {
  label: string
  slides: SlideInfo[]
}

export const slides: SlideInfo[] = [
  { path: "/", segment: "Outline", title: "Prompt Engineering", slideNumber: 1 },
  { path: "/welcome", segment: "Outline", title: "Why It Matters", slideNumber: 2 },
  { path: "/five-principles", segment: "The 5 Principles", title: "The 5 Principles", slideNumber: 3 },
  { path: "/five-principles/prompt-types", segment: "The 5 Principles", title: "Types of Prompts", slideNumber: 4 },
  { path: "/tools", segment: "The Large Language Models", title: "The Large Language Models", slideNumber: 5 },
  { path: "/live-demo", segment: "Live Demo", title: "Live Demo & Practice", slideNumber: 6 },
  { path: "/five-principles/infographic", segment: "Wrap-Up", title: "Summary", slideNumber: 7 },
  { path: "/wrap-up/resources", segment: "Wrap-Up", title: "Thank You", slideNumber: 8 },
]

export const totalSlides = slides.length

export function getSlideByPath(path: string): SlideInfo | undefined {
  return slides.find((s) => s.path === path)
}

export function getAdjacentSlides(path: string) {
  const index = slides.findIndex((s) => s.path === path)
  return {
    prev: index > 0 ? slides[index - 1] : null,
    next: index < slides.length - 1 ? slides[index + 1] : null,
    current: slides[index] ?? null,
  }
}

export function getSegmentGroups(): SegmentGroup[] {
  const groups: SegmentGroup[] = []
  for (const slide of slides) {
    const last = groups[groups.length - 1]
    if (last && last.label === slide.segment) {
      last.slides.push(slide)
    } else {
      groups.push({ label: slide.segment, slides: [slide] })
    }
  }
  return groups
}
