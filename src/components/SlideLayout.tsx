"use client"

import type { ReactNode } from "react"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { useEffect } from "react"
import {
  getAdjacentSlides,
  getSegmentGroups,
  totalSlides,
  type SegmentGroup,
} from "@/lib/slides"

interface SlideLayoutProps {
  children: ReactNode
}

function NavGroup({
  group,
  pathname,
}: {
  group: SegmentGroup
  pathname: string
}) {
  return (
    <div>
      {group.slides.map((slide) => {
        const isActive = pathname === slide.path
        return (
          <Link
            key={slide.path}
            href={slide.path}
            className="
              flex items-center gap-[0.3vw]
              px-[0.4vw] py-[0.3vw]
              transition-colors
            "
            style={{
              borderRadius: "var(--radius-chip)",
              background: isActive ? "var(--gradient-orange)" : "transparent",
              color: isActive ? "#fff" : "var(--foreground)",
            }}
          >
            <span
              className="text-[0.7vw] font-semibold shrink-0"
              style={{ opacity: isActive ? 0.7 : 0.4 }}
            >
              {slide.slideNumber}
            </span>
            <span className="text-[0.8vw] font-semibold truncate">
              {slide.title}
            </span>
          </Link>
        )
      })}
    </div>
  )
}

export function SlideLayout({ children }: SlideLayoutProps) {
  const pathname = usePathname()
  const router = useRouter()
  const { prev, next, current } = getAdjacentSlides(pathname)
  const segmentGroups = getSegmentGroups()

  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "ArrowRight" || e.key === " ") {
        if (next) {
          e.preventDefault()
          router.push(next.path)
        }
      }
      if (e.key === "ArrowLeft") {
        if (prev) {
          e.preventDefault()
          router.push(prev.path)
        }
      }
    }
    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [prev, next, router])

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-[#0a0a0a]">
      {/* 16:9 slide frame */}
      <div
        className="
          relative w-full h-full max-h-[56.25vw] max-w-[177.78vh]
          overflow-hidden flex flex-col
        "
        style={{ background: "var(--background)" }}
      >
        {/* Unified top header bar */}
        <div
          className="
            shrink-0 flex items-center justify-between
            px-[1.2vw]
          "
          style={{
            background: "var(--gradient-header)",
            height: "4vw",
          }}
        >
          {/* Left: logo */}
          <div className="flex items-center">
            <img
              src="/techskills-logo-white.png"
              alt="TechSkills"
              style={{ height: "2.1vw", width: "auto" }}
            />
          </div>

          {/* Right: System Setup link */}
          <Link
            href="/setup"
            className="
              text-[0.65vw] font-semibold text-white
              px-[0.7vw] py-[0.25vw]
              hover:opacity-80 transition-opacity
            "
            style={{
              borderRadius: "var(--radius-pill)",
              background: "var(--overlay-lighter)",
            }}
          >
            System Setup
          </Link>
        </div>

        {/* Body: sidebar + content */}
        <div className="flex flex-1 min-h-0">
          {/* Left sidebar menu */}
          <aside
            className="shrink-0 flex flex-col h-full overflow-hidden"
            style={{
              width: "17%",
              background: "var(--card-bg)",
              borderRight: "1px solid var(--card-border)",
            }}
          >
            {/* Slide navigation */}
            <nav className="flex-1 overflow-y-auto px-[0.4vw] py-[0.5vw]">
              <p
                className="text-[0.7vw] font-bold uppercase tracking-[1.5px] px-[0.4vw] mb-[0.3vw]"
                style={{ color: "var(--primary)" }}
              >
                Prompt Engineering Webinar
              </p>
              {segmentGroups.map((group, i) => (
                <NavGroup
                  key={i}
                  group={group}
                  pathname={pathname}
                />
              ))}
            </nav>

            {/* Footer quote */}
            <div
              className="shrink-0 px-[0.8vw] py-[0.8vw] border-t"
              style={{ borderColor: "var(--divider)" }}
            >
              <p className="text-[1vw] font-bold text-foreground">Michael Stout</p>
              <p className="text-[0.8vw] text-muted italic leading-snug mt-[0.2vw]">
                If AI is the <em>New Electricity</em>,
                isn&rsquo;t it time to <em>SuperCharge</em>?
              </p>
            </div>
          </aside>

          {/* Main slide area */}
          <div className="flex-1 flex flex-col relative overflow-hidden">
            {/* Dot pattern background */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                backgroundImage: "radial-gradient(circle, var(--dot-pattern) 0.7px, transparent 0.7px)",
                backgroundSize: "30px 30px",
                opacity: 0.5,
              }}
            />

            {/* Slide content */}
            <div className="relative flex-1 min-h-0 px-[4%] py-[2.5%] overflow-hidden">
              {children}
            </div>

            {/* Bottom navigation */}
            <div
              className="
                relative shrink-0 flex items-center justify-between
                px-[3%] py-[1%]
                border-t
              "
              style={{
                borderColor: "var(--divider)",
                background: "var(--card-bg)",
              }}
            >
              <div className="flex-1">
                {prev && (
                  <Link
                    href={prev.path}
                    className="
                      inline-flex items-center gap-[0.4vw]
                      text-[0.8vw] font-semibold text-muted
                      hover:text-primary transition-colors
                    "
                  >
                    <span>&larr;</span>
                    <span>{prev.title}</span>
                  </Link>
                )}
              </div>
              <span className="text-[0.7vw] font-semibold text-muted">
                {current?.slideNumber} / {totalSlides}
              </span>
              <div className="flex-1 text-right">
                {next && (
                  <Link
                    href={next.path}
                    className="
                      inline-flex items-center gap-[0.4vw]
                      text-[0.8vw] font-semibold text-muted
                      hover:text-primary transition-colors
                    "
                  >
                    <span>{next.title}</span>
                    <span>&rarr;</span>
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
