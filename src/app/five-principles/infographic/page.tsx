export default function InfographicSlide() {
  const principles = [
    {
      number: 1,
      title: "Be Specific",
      summary: "Add detail about what, who, and format",
      bad: "Write me an email.",
      good: "Write a friendly email to Sarah thanking her for the demo...",
    },
    {
      number: 2,
      title: "Give Context & Role",
      summary: "Tell the AI who to be and what it needs to know",
      bad: "Explain retirement accounts.",
      good: "You are a financial educator speaking to a 25-year-old...",
    },
    {
      number: 3,
      title: "Show, Don\u2019t Just Tell",
      summary: "Provide examples of what good output looks like",
      bad: "Write in a professional tone.",
      good: "Here\u2019s an example of the tone I want: [example]...",
    },
    {
      number: 4,
      title: "Break Big Tasks into Steps",
      summary: "Chain prompts \u2014 outline first, then expand",
      bad: "Write me a blog post about productivity.",
      good: "Step 1: Outline \u2192 Step 2: Expand \u2192 Step 3: Refine",
    },
    {
      number: 5,
      title: "Iterate and Refine",
      summary: "Your first prompt is just the starting point",
      bad: "Accept the first response as final.",
      good: "Make it shorter \u2192 Add an analogy \u2192 Rewrite the opening",
    },
  ]

  const topRow = principles.slice(0, 3)
  const bottomRow = principles.slice(3)

  return (
    <div className="h-full flex flex-col">
      {/* Title */}
      <div className="text-center mb-[1vw]">
        <h1 className="text-[2vw] font-black tracking-[-0.5px] text-foreground">
          The 5 Principles of Great Prompts
        </h1>
        <p className="text-[0.8vw] text-muted mt-[0.3vw]">
          A framework you can apply to any AI tool, every time
        </p>
      </div>

      {/* Two rows of cards */}
      <div className="flex-1 flex flex-col justify-center gap-[0.8vw]">
        {/* Row 1: principles 1-3 */}
        <div className="flex items-stretch gap-[0.8vw] justify-center">
          {topRow.map((p, i) => (
            <div key={p.number} className="flex items-stretch" style={{ flex: "0 1 20%" }}>
              <PrincipleCard principle={p} />
              {i < topRow.length - 1 && <ConnectorArrow />}
            </div>
          ))}
        </div>

        {/* Connecting arrow between rows */}
        <div className="flex justify-center">
          <span
            className="text-[1.2vw] font-bold"
            style={{ color: "var(--accent)" }}
          >
            &#9663;
          </span>
        </div>

        {/* Row 2: principles 4-5 centered */}
        <div className="flex items-stretch gap-[0.8vw] justify-center">
          {bottomRow.map((p, i) => (
            <div key={p.number} className="flex items-stretch" style={{ flex: "0 1 20%" }}>
              <PrincipleCard principle={p} />
              {i < bottomRow.length - 1 && <ConnectorArrow />}
            </div>
          ))}
        </div>
      </div>

      {/* Bottom callout */}
      <div
        className="text-center py-[0.5vw] px-[1vw] mt-[0.8vw] border"
        style={{
          borderRadius: "var(--radius-chip)",
          background: "var(--chip-orange-bg)",
          borderColor: "var(--chip-orange-border)",
        }}
      >
        <p className="text-[0.7vw] font-semibold italic" style={{ color: "var(--accent-muted)" }}>
          &ldquo;You don&rsquo;t need to be technical. Prompt engineering is just learning how to communicate clearly.&rdquo;
        </p>
      </div>
    </div>
  )
}

interface PrincipleProps {
  principle: {
    number: number
    title: string
    summary: string
    bad: string
    good: string
  }
}

function PrincipleCard({ principle: p }: PrincipleProps) {
  return (
    <div
      className="flex-1 flex flex-col border relative overflow-hidden"
      style={{
        borderRadius: "var(--radius-card)",
        background: "var(--card-bg)",
        borderColor: "var(--card-border)",
        boxShadow: "var(--shadow-card)",
        aspectRatio: "1",
      }}
    >
      {/* Top accent bar */}
      <div
        className="h-[0.25vw] shrink-0"
        style={{ background: "var(--gradient-blue)" }}
      />

      {/* Number + title inline */}
      <div className="flex items-center gap-[0.4vw] px-[0.6vw] pt-[0.5vw]">
        <span
          className="
            shrink-0 w-[1.8vw] h-[1.8vw] text-[0.75vw] font-black text-white
            flex items-center justify-center
          "
          style={{
            borderRadius: "var(--radius-badge)",
            background: "var(--gradient-blue)",
          }}
        >
          {p.number}
        </span>
        <h2 className="text-[0.95vw] font-extrabold text-foreground">
          {p.title}
        </h2>
      </div>

      {/* Summary */}
      <p className="text-[0.7vw] text-muted px-[0.6vw] mt-[0.2vw] leading-snug">
        {p.summary}
      </p>

      {/* Bad/Good comparison */}
      <div className="mt-auto px-[0.6vw] pb-[0.5vw] pt-[0.4vw] space-y-[0.3vw]">
        {/* Bad */}
        <div
          className="relative pl-[0.5vw] py-[0.25vw] pr-[0.3vw] border overflow-hidden"
          style={{
            borderRadius: "var(--radius-chip)",
            background: "var(--red-bg)",
            borderColor: "var(--red-border)",
          }}
        >
          <div
            className="absolute left-0 top-[0.2vw] bottom-[0.2vw] w-[0.15vw]"
            style={{ background: "var(--red-accent)", borderRadius: "2px" }}
          />
          <p
            className="text-[0.6vw] font-extrabold uppercase tracking-[1px] mb-[0.05vw]"
            style={{ color: "var(--red-accent)" }}
          >
            Avoid
          </p>
          <p className="text-[0.7vw] text-foreground italic leading-snug">
            &ldquo;{p.bad}&rdquo;
          </p>
        </div>

        {/* Good */}
        <div
          className="relative pl-[0.5vw] py-[0.25vw] pr-[0.3vw] border overflow-hidden"
          style={{
            borderRadius: "var(--radius-chip)",
            background: "var(--green-bg)",
            borderColor: "var(--green-border)",
          }}
        >
          <div
            className="absolute left-0 top-[0.2vw] bottom-[0.2vw] w-[0.15vw]"
            style={{ background: "var(--green-accent)", borderRadius: "2px" }}
          />
          <p
            className="text-[0.6vw] font-extrabold uppercase tracking-[1px] mb-[0.05vw]"
            style={{ color: "var(--green-accent)" }}
          >
            Better
          </p>
          <p className="text-[0.7vw] text-foreground italic leading-snug">
            &ldquo;{p.good}&rdquo;
          </p>
        </div>
      </div>
    </div>
  )
}

function ConnectorArrow() {
  return (
    <div className="flex items-center px-[0.2vw] shrink-0">
      <span
        className="text-[1.2vw] font-bold"
        style={{ color: "var(--accent)" }}
      >
        &#8250;
      </span>
    </div>
  )
}
