"use client"

import { useState, type ReactNode } from "react"
import { SlideTitle, GoalBanner, NumberBadge, PromptExample } from "@/components/PageLayout"

interface Reason {
  number: number
  title: string
  content: ReactNode
}

const reasons: Reason[] = [
  {
    number: 1,
    title: "Garbage In, Garbage Out",
    content: (
      <>
        <p className="text-[0.75vw] text-muted mb-[0.6vw]">
          AI is only as good as what you ask it. A vague prompt gets a generic answer.
          A specific prompt gets a specific, useful answer. The difference is dramatic.
        </p>
        <div className="grid grid-cols-2 gap-[0.8vw]">
          <PromptExample
            label="Vague Prompt"
            prompt="Write me something about marketing."
            variant="bad"
          />
          <PromptExample
            label="Well-Crafted Prompt"
            prompt="Write a 200-word LinkedIn post for a B2B SaaS founder explaining 3 underrated content marketing strategies, with a conversational tone."
            variant="good"
            tryUrl="https://chatgpt.com/?q=Write+a+200-word+LinkedIn+post+for+a+B2B+SaaS+founder+explaining+3+underrated+content+marketing+strategies%2C+with+a+conversational+tone."
          />
        </div>
      </>
    ),
  },
  {
    number: 2,
    title: "The Skill Gap Is Real",
    content: (
      <>
        <p className="text-[0.75vw] text-muted mb-[0.6vw]">
          Most people use AI the way they use a Google search — typing a few keywords and hoping
          for the best. Prompt engineering is the difference between a C-minus and an A-plus answer.
        </p>
        <div className="grid grid-cols-2 gap-[0.8vw]">
          <PromptExample
            label="Keyword Style"
            prompt="AI marketing tips"
            variant="bad"
          />
          <PromptExample
            label="Engineered Prompt"
            prompt="You are a digital marketing strategist. Give me 5 specific ways a small e-commerce business can use AI to increase email open rates, with real tool recommendations."
            variant="good"
            tryUrl="https://chatgpt.com/?q=You+are+a+digital+marketing+strategist.+Give+me+5+specific+ways+a+small+e-commerce+business+can+use+AI+to+increase+email+open+rates%2C+with+real+tool+recommendations."
          />
        </div>
      </>
    ),
  },
  {
    number: 3,
    title: "A Learnable Skill",
    content: (
      <>
        <p className="text-[0.75vw] text-muted mb-[0.6vw]">
          You don't need to be technical. Prompt engineering is really just learning how to
          communicate clearly — something every one of you already knows how to do.
          It's about being specific, giving context, and iterating.
        </p>
        <PromptExample
          label="Anyone Can Do This"
          prompt="I'm a teacher with 25 students in 3rd grade. Create a fun 15-minute classroom activity that teaches fractions using pizza slices as a visual. Include step-by-step instructions."
          variant="good"
          tryUrl="https://chatgpt.com/?q=I%27m+a+teacher+with+25+students+in+3rd+grade.+Create+a+fun+15-minute+classroom+activity+that+teaches+fractions+using+pizza+slices+as+a+visual.+Include+step-by-step+instructions."
        />
      </>
    ),
  },
  {
    number: 4,
    title: "AI Is Everywhere Now",
    content: (
      <>
        <p className="text-[0.75vw] text-muted mb-[0.6vw]">
          ChatGPT, Claude, Gemini, Copilot, Grok, Perplexity — these tools are already in your
          browser, your inbox, and your office suite. The people who learn to prompt well will
          get 10x more value from tools everyone else finds frustrating.
        </p>
        <PromptExample
          label="Real Workplace Example"
          prompt="Summarize this 45-minute meeting transcript into 5 bullet-point action items, each with an owner and a deadline. Flag anything that was left unresolved."
          variant="good"
          tryUrl="https://chatgpt.com/?q=Summarize+this+45-minute+meeting+transcript+into+5+bullet-point+action+items%2C+each+with+an+owner+and+a+deadline.+Flag+anything+that+was+left+unresolved."
        />
      </>
    ),
  },
  {
    number: 5,
    title: "The Conversation IS the Process",
    content: (
      <>
        <p className="text-[0.75vw] text-muted mb-[0.6vw]">
          Think of AI as a collaborative draft partner, not a vending machine. Your first prompt
          is a starting point. The real power comes from follow-ups — refining, redirecting,
          and building on each response until you get exactly what you need.
        </p>
        <div className="grid grid-cols-3 gap-[0.6vw]">
          <PromptExample label="Start" prompt="Write a project proposal for migrating our database to the cloud." variant="neutral" />
          <PromptExample label="Refine" prompt="Add a risk assessment section and estimated timeline." variant="neutral" />
          <PromptExample label="Polish" prompt="Make the executive summary punchier and cut the total length by 30%." variant="neutral" />
        </div>
      </>
    ),
  },
]

export default function IntroductionSlide() {
  const [active, setActive] = useState<number | null>(null)

  return (
    <div className="h-full flex flex-col">
      <SlideTitle>Why Prompt Engineering Matters</SlideTitle>
      <GoalBanner>
        The quality of AI output is almost entirely determined by the quality of the input — and this is a learnable skill.
      </GoalBanner>

      <div className="flex-1 flex gap-[1.5vw] min-h-0">
        {/* Left: reason list */}
        <div className="flex flex-col gap-[0.6vw] shrink-0" style={{ width: "30%" }}>
          {reasons.map((r) => {
            const isActive = active === r.number
            return (
              <button
                key={r.number}
                type="button"
                onClick={() => setActive(isActive ? null : r.number)}
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
                <NumberBadge number={r.number} />
                <span className="text-[0.85vw] font-extrabold text-foreground">
                  {r.title}
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
                Click a topic to see why it matters &rarr;
              </p>
            </div>
          ) : (
            <div>
              <div className="flex items-center gap-[0.6vw] mb-[0.8vw]">
                <NumberBadge number={active} />
                <h2 className="text-[1.2vw] font-extrabold text-foreground">
                  {reasons[active - 1].title}
                </h2>
              </div>
              {reasons[active - 1].content}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
