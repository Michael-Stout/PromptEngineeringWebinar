"use client"

import { useState, type ReactNode } from "react"
import { SlideTitle, GoalBanner, NumberBadge, PromptExample, Callout } from "@/components/PageLayout"

interface Principle {
  number: number
  title: string
  content: ReactNode
}

const principles: Principle[] = [
  {
    number: 1,
    title: "Be Specific",
    content: (
      <>
        <p className="text-[0.75vw] text-muted mb-[0.6vw]">
          Vague questions get vague answers. Add detail about what you want, who it&rsquo;s for, and what format you need.
        </p>
        <div className="grid grid-cols-2 gap-[0.8vw]">
          <PromptExample label="Bad Prompt" prompt="Write me an email." variant="bad" tryUrl="https://chatgpt.com/?q=Write+me+an+email." />
          <PromptExample
            label="Good Prompt"
            prompt="Write a professional but friendly email to a client named Sarah, thanking her for attending our product demo and suggesting a follow-up call next Tuesday."
            variant="good"
            tryUrl="https://chatgpt.com/?q=Write+a+professional+but+friendly+email+to+a+client+named+Sarah%2C+thanking+her+for+attending+our+product+demo+and+suggesting+a+follow-up+call+next+Tuesday."
          />
        </div>
      </>
    ),
  },
  {
    number: 2,
    title: "Give Context & Role",
    content: (
      <>
        <p className="text-[0.75vw] text-muted mb-[0.6vw]">
          Tell the AI who it should &ldquo;be&rdquo; and what background information it needs. This frames the entire response.
        </p>
        <div className="grid grid-cols-2 gap-[0.8vw] mb-[0.6vw]">
          <PromptExample label="Without Role" prompt="Explain how to eat healthy." variant="bad" tryUrl="https://chatgpt.com/?q=Explain+how+to+eat+healthy." />
          <PromptExample
            label="With Role"
            prompt="You are a registered dietitian speaking to a busy parent who wants to meal prep on Sundays. Explain 3 simple strategies for eating healthier during the work week, using everyday grocery store ingredients."
            variant="good"
            tryUrl="https://chatgpt.com/?q=You+are+a+registered+dietitian+speaking+to+a+busy+parent+who+wants+to+meal+prep+on+Sundays.+Explain+3+simple+strategies+for+eating+healthier+during+the+work+week%2C+using+everyday+grocery+store+ingredients."
          />
        </div>
        <Callout>
          <p className="font-semibold" style={{ color: "var(--accent-muted)" }}>
            Tip: This works in ChatGPT, Claude, and CoPilot alike — the single most powerful upgrade to any prompt.
          </p>
        </Callout>
      </>
    ),
  },
  {
    number: 3,
    title: "Show, Don\u2019t Just Tell",
    content: (
      <>
        <p className="text-[0.75vw] text-muted mb-[0.6vw]">
          Give the AI an example of what you want. This is called &ldquo;few-shot prompting&rdquo; — just show it what good looks like.
        </p>
        <div className="mb-[0.6vw]">
          <PromptExample
            label="Example Prompt"
            prompt="Here's an example of the tone I want: [paste example]. Now write a similar paragraph about [new topic]."
            variant="good"
            tryUrl="https://chatgpt.com/?q=Here+is+an+example+of+the+tone+I+want%3A+%27We+don%27t+just+build+software%2C+we+solve+problems.%27+Now+write+a+similar+paragraph+about+AI+in+education."
          />
        </div>
        <Callout>
          <p className="font-semibold" style={{ color: "var(--accent-muted)" }}>
            CoPilot-specific: In Microsoft 365 CoPilot, you can reference existing documents as examples.
          </p>
        </Callout>
      </>
    ),
  },
  {
    number: 4,
    title: "Break Big Tasks into Steps",
    content: (
      <>
        <p className="text-[0.75vw] text-muted mb-[0.6vw]">
          Don&rsquo;t ask AI to do everything at once. Chain your prompts — ask for an outline first, then expand.
        </p>
        <div className="space-y-[0.5vw]">
          {[
            { step: "1", prompt: "Give me a 5-point outline for a blog post about remote work productivity." },
            { step: "2", prompt: "Now expand point #3 into two full paragraphs." },
            { step: "3", prompt: "Rewrite those paragraphs for a more casual, conversational tone." },
          ].map(({ step, prompt }) => (
            <div key={step} className="flex gap-[0.5vw] items-start">
              <span
                className="shrink-0 w-[1.4vw] h-[1.4vw] text-[0.6vw] font-black text-white flex items-center justify-center"
                style={{ borderRadius: "var(--radius-badge)", background: "var(--gradient-orange)" }}
              >
                {step}
              </span>
              <div className="flex-1">
                <PromptExample label={`Step ${step}`} prompt={prompt} variant="neutral" />
              </div>
            </div>
          ))}
        </div>
      </>
    ),
  },
  {
    number: 5,
    title: "Iterate and Refine",
    content: (
      <>
        <p className="text-[0.75vw] text-muted mb-[0.6vw]">
          Your first prompt is a starting point, not a final answer. The real power is in the follow-up.
        </p>
        <div className="space-y-[0.4vw] mb-[0.6vw]">
          <PromptExample label="Refinement" prompt="Make it shorter." variant="neutral" />
          <PromptExample label="Refinement" prompt="Add a real-world analogy." variant="neutral" />
          <PromptExample label="Refinement" prompt="Now rewrite the opening to be more attention-grabbing." variant="neutral" />
        </div>
        <Callout>
          <p className="italic">
            Think of AI as a collaborative draft partner, not a vending machine. The conversation IS the process.
          </p>
        </Callout>
      </>
    ),
  },
]

export default function FivePrinciplesSlide() {
  const [active, setActive] = useState<number | null>(null)

  return (
    <div className="h-full flex flex-col">
      <SlideTitle>The 5 Principles of Great Prompts</SlideTitle>
      <GoalBanner>
        These principles teach how to think about prompting — be specific, give context, show examples, break tasks down, iterate. Universal concepts anyone can grasp immediately.
      </GoalBanner>

      <div className="flex-1 flex gap-[1.5vw] min-h-0">
        {/* Left: principle list */}
        <div className="flex flex-col gap-[0.6vw] shrink-0" style={{ width: "30%" }}>
          {principles.map((p) => {
            const isActive = active === p.number
            return (
              <button
                key={p.number}
                type="button"
                onClick={() => setActive(isActive ? null : p.number)}
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
                <NumberBadge number={p.number} />
                <span className="text-[0.85vw] font-extrabold text-foreground">
                  {p.title}
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
                Click a principle to see examples &rarr;
              </p>
            </div>
          ) : (
            <div>
              <div className="flex items-center gap-[0.6vw] mb-[0.8vw]">
                <NumberBadge number={active} />
                <h2 className="text-[1.2vw] font-extrabold text-foreground">
                  {principles[active - 1].title}
                </h2>
              </div>
              {principles[active - 1].content}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
