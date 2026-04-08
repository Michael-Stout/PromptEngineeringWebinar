"use client"

import { useState, type ReactNode } from "react"
import { SlideTitle, GoalBanner, NumberBadge, PromptExample } from "@/components/PageLayout"

interface PromptType {
  number: number
  title: string
  content: ReactNode
}

const promptTypes: PromptType[] = [
  {
    number: 1,
    title: "Zero-Shot",
    content: (
      <>
        <p className="text-[0.75vw] text-muted mb-[0.6vw]">
          Ask directly with no examples. Best for simple, well-defined tasks where the AI already understands the format.
        </p>
        <PromptExample
          label="Example"
          prompt="Translate this sentence to French: 'Good morning, how are you today?'"
          variant="good"
        />
      </>
    ),
  },
  {
    number: 2,
    title: "Few-Shot",
    content: (
      <>
        <p className="text-[0.75vw] text-muted mb-[0.6vw]">
          Provide 2-3 examples so the AI learns the pattern you want. Great for consistent formatting and style.
        </p>
        <PromptExample
          label="Example"
          prompt="Positive: 'I love this!' → Happy | Negative: 'This is terrible' → Angry | Now classify: 'What a wonderful day!'"
          variant="good"
        />
      </>
    ),
  },
  {
    number: 3,
    title: "Chain-of-Thought",
    content: (
      <>
        <p className="text-[0.75vw] text-muted mb-[0.6vw]">
          Ask the AI to reason step by step before answering. Improves accuracy on complex or multi-step problems.
        </p>
        <PromptExample
          label="Example"
          prompt="A store has 3 shirts at $25 each and 2 pants at $40 each, with a 15% discount. Think through this step by step, then tell me the total."
          variant="good"
        />
      </>
    ),
  },
  {
    number: 4,
    title: "Role-Based",
    content: (
      <>
        <p className="text-[0.75vw] text-muted mb-[0.6vw]">
          Assign a persona to shape tone, depth, and perspective. The AI adapts its expertise and language accordingly.
        </p>
        <div className="grid grid-cols-2 gap-[0.8vw]">
          <PromptExample
            label="Without Role"
            prompt="What should I invest in?"
            variant="bad"
          />
          <PromptExample
            label="With Role"
            prompt="You are a certified financial planner advising a 30-year-old with $10k to invest. What do you recommend and why?"
            variant="good"
          />
        </div>
      </>
    ),
  },
  {
    number: 5,
    title: "Template / Fill-in",
    content: (
      <>
        <p className="text-[0.75vw] text-muted mb-[0.6vw]">
          Give a structure with blanks for the AI to complete. Perfect for repeatable tasks like emails, reports, or social posts.
        </p>
        <PromptExample
          label="Example"
          prompt="Write a [format: LinkedIn post] about [topic: AI in healthcare] for [audience: hospital administrators] in a [tone: professional but approachable] style."
          variant="good"
        />
      </>
    ),
  },
  {
    number: 6,
    title: "Iterative Refinement",
    content: (
      <>
        <p className="text-[0.75vw] text-muted mb-[0.6vw]">
          Start broad, then narrow with follow-up prompts. Treat it as a conversation, not a single command.
        </p>
        <div className="space-y-[0.4vw]">
          <PromptExample label="Start" prompt="Write a blog intro about remote work." variant="neutral" />
          <PromptExample label="Refine" prompt="Make it more conversational and add a statistic." variant="neutral" />
          <PromptExample label="Polish" prompt="Now cut it to 3 sentences and make the opening a question." variant="neutral" />
        </div>
      </>
    ),
  },
]

export default function PromptTypesSlide() {
  const [active, setActive] = useState<number | null>(null)

  return (
    <div className="h-full flex flex-col">
      <SlideTitle>Types of Prompts</SlideTitle>
      <GoalBanner>
        Named techniques that build on the 5 Principles. Once you understand &ldquo;give the AI an example&rdquo; (Principle 3), the term &ldquo;Few-Shot prompting&rdquo; clicks instantly. Without that foundation, the terminology feels abstract.
      </GoalBanner>

      <div className="flex-1 flex gap-[1.5vw] min-h-0">
        {/* Left: prompt type list */}
        <div className="flex flex-col gap-[0.6vw] shrink-0" style={{ width: "30%" }}>
          {promptTypes.map((pt) => {
            const isActive = active === pt.number
            return (
              <button
                key={pt.number}
                type="button"
                onClick={() => setActive(isActive ? null : pt.number)}
                className="
                  flex items-center gap-[0.6vw] p-[0.6vw] border
                  text-left transition-all cursor-pointer
                "
                style={{
                  borderRadius: "var(--radius-card)",
                  background: isActive ? "var(--chip-orange-bg)" : "var(--card-bg)",
                  borderColor: isActive ? "var(--chip-orange-border)" : "var(--card-border)",
                  boxShadow: isActive ? "var(--shadow-badge)" : "var(--shadow-card)",
                }}
              >
                <NumberBadge number={pt.number} />
                <span className="text-[0.85vw] font-extrabold text-foreground">
                  {pt.title}
                </span>
                <span
                  className="ml-auto text-[0.7vw] transition-transform"
                  style={{
                    color: isActive ? "var(--accent)" : "var(--muted)",
                    transform: isActive ? "rotate(90deg)" : "rotate(0deg)",
                  }}
                >
                  &#9656;
                </span>
              </button>
            )
          })}
        </div>

        {/* Right: detail panel */}
        <div
          className="flex-1 overflow-y-auto border p-[1.2vw]"
          style={{
            borderRadius: "var(--radius-card)",
            background: "var(--card-bg)",
            borderColor: "var(--card-border)",
            boxShadow: "var(--shadow-card)",
          }}
        >
          {active === null ? (
            <div className="h-full flex items-center justify-center">
              <p className="text-[0.9vw] text-muted italic">
                Click a prompt type to see examples &rarr;
              </p>
            </div>
          ) : (
            <div>
              <div className="flex items-center gap-[0.6vw] mb-[0.8vw]">
                <NumberBadge number={active} />
                <h2 className="text-[1.2vw] font-extrabold text-foreground">
                  {promptTypes[active - 1].title}
                </h2>
              </div>
              {promptTypes[active - 1].content}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
