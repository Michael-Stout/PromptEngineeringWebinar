import type { ReactNode } from "react"

export function SlideTitle({ children }: { children: ReactNode }) {
  return (
    <h1 className="text-[2.4vw] font-black tracking-[-0.5px] leading-tight text-foreground mb-[1.5vw]">
      {children}
    </h1>
  )
}

export function SlideSubtitle({ children }: { children: ReactNode }) {
  return (
    <p className="text-[1vw] text-muted mb-[1vw]">{children}</p>
  )
}

export function PromptExample({
  label,
  prompt,
  variant = "neutral",
  tryUrl,
}: {
  label: string
  prompt: string
  variant?: "bad" | "good" | "neutral"
  tryUrl?: string
}) {
  const styles = {
    bad: {
      background: "var(--red-bg)",
      borderColor: "var(--red-border)",
      barColor: "var(--red-accent)",
      labelColor: "var(--red-accent)",
    },
    good: {
      background: "var(--green-bg)",
      borderColor: "var(--green-border)",
      barColor: "var(--green-accent)",
      labelColor: "var(--green-accent)",
    },
    neutral: {
      background: "var(--card-bg)",
      borderColor: "var(--card-border)",
      barColor: "var(--primary)",
      labelColor: "var(--primary)",
    },
  }

  const s = styles[variant]

  return (
    <div
      className="relative pl-[1.2vw] p-[1vw] border overflow-hidden"
      style={{
        borderRadius: "var(--radius-card)",
        background: s.background,
        borderColor: s.borderColor,
      }}
    >
      <div
        className="absolute left-0 top-[0.5vw] bottom-[0.5vw] w-[0.2vw]"
        style={{
          background: s.barColor,
          borderRadius: "var(--radius-edge-bar)",
        }}
      />
      {label && (
        <p
          className="text-[0.55vw] font-extrabold uppercase tracking-[1.2px] mb-[0.4vw]"
          style={{ color: s.labelColor }}
        >
          {label}
        </p>
      )}
      <div className="flex items-start justify-between gap-[0.5vw]">
        <p className="text-[0.85vw] text-foreground leading-snug">
          {prompt}
        </p>
        {tryUrl && (
          <a
            href={tryUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="
              shrink-0 text-[0.6vw] font-bold px-[0.5vw] py-[0.2vw]
              text-white hover:opacity-90 transition-opacity
            "
            style={{
              borderRadius: "var(--radius-pill)",
              background: "var(--gradient-blue)",
            }}
          >
            Try it &rarr;
          </a>
        )}
      </div>
    </div>
  )
}

export function Callout({ children }: { children: ReactNode }) {
  return (
    <div
      className="relative p-[1vw] border"
      style={{
        borderRadius: "var(--radius-chip)",
        background: "var(--chip-orange-bg)",
        borderColor: "var(--chip-orange-border)",
      }}
    >
      <span
        className="absolute top-0 left-[0.6vw] text-[1.8vw] font-black select-none"
        style={{ color: "rgba(232, 116, 12, 0.25)" }}
      >
        &ldquo;
      </span>
      <div className="pl-[1.2vw] text-[0.8vw] text-foreground leading-relaxed">
        {children}
      </div>
    </div>
  )
}

export function BulletList({ items }: { items: ReactNode[] }) {
  return (
    <ul className="space-y-[0.8vw]">
      {items.map((item, i) => (
        <li key={i} className="flex gap-[0.6vw] items-start">
          <span
            className="mt-[0.4vw] h-[0.5vw] w-[0.5vw] rounded-full shrink-0"
            style={{ background: "var(--accent)" }}
          />
          <span className="text-[0.85vw] text-foreground leading-snug">{item}</span>
        </li>
      ))}
    </ul>
  )
}

export function Card({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <div
      className={`p-[1.2vw] border ${className}`}
      style={{
        borderRadius: "var(--radius-card)",
        background: "var(--card-bg)",
        borderColor: "var(--card-border)",
        boxShadow: "var(--shadow-card)",
      }}
    >
      {children}
    </div>
  )
}

export function GoalBanner({ children }: { children: ReactNode }) {
  return (
    <div
      className="p-[0.8vw] border mb-[1.5vw]"
      style={{
        borderRadius: "var(--radius-card)",
        background: "var(--goal-bg)",
        borderColor: "var(--goal-border)",
      }}
    >
      <span className="text-[0.9vw] text-foreground">{children}</span>
    </div>
  )
}

export function NumberBadge({ number }: { number: string | number }) {
  return (
    <span
      className="
        shrink-0 w-[2vw] h-[2vw] text-[0.85vw] font-black text-white
        flex items-center justify-center
      "
      style={{
        borderRadius: "var(--radius-badge)",
        background: "var(--gradient-orange)",
        boxShadow: "var(--shadow-badge)",
      }}
    >
      {number}
    </span>
  )
}
