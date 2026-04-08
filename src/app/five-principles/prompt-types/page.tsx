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
          tryUrl="https://chatgpt.com/?q=Translate+this+sentence+to+French%3A+%27Good+morning%2C+how+are+you+today%3F%27"
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
          tryUrl="https://chatgpt.com/?q=Positive%3A+%27I+love+this%21%27+%E2%86%92+Happy+%7C+Negative%3A+%27This+is+terrible%27+%E2%86%92+Angry+%7C+Now+classify%3A+%27What+a+wonderful+day%21%27"
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
          tryUrl="https://chatgpt.com/?q=A+store+has+3+shirts+at+%2425+each+and+2+pants+at+%2440+each%2C+with+a+15%25+discount.+Think+through+this+step+by+step%2C+then+tell+me+the+total."
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
            prompt="You are a senior HR manager at a tech company. Review this job description and suggest improvements to attract more diverse candidates."
            variant="good"
            tryUrl="https://chatgpt.com/?q=You+are+a+senior+HR+manager+at+a+tech+company.+Review+this+job+description+and+suggest+improvements+to+attract+more+diverse+candidates."
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
          tryUrl="https://chatgpt.com/?q=Write+a+LinkedIn+post+about+AI+in+healthcare+for+hospital+administrators+in+a+professional+but+approachable+style."
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
          <PromptExample label="Start" prompt="Write a blog intro about remote work." variant="neutral" tryUrl="https://chatgpt.com/?q=Write+a+blog+intro+about+remote+work." />
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

          {/* Browser extension links */}
          <div
            className="p-[0.5vw] border mt-[0.2vw]"
            style={{
              borderRadius: "var(--radius-chip)",
              background: "var(--goal-bg)",
              borderColor: "var(--goal-border)",
            }}
          >
            <p
              className="text-[0.5vw] font-bold uppercase tracking-[1.5px] mb-[0.3vw]"
              style={{ color: "var(--primary)" }}
            >
              Try prompts instantly — install extension
            </p>
            <div className="space-y-[0.2vw]">
              <a
                href="https://chromewebstore.google.com/detail/prompt-chatgpt-via-url-pa/ebnjcbckimmadkpjkpkgfiobinjmmdjb"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-[0.3vw] text-[0.55vw] font-semibold hover:underline"
                style={{ color: "var(--primary)" }}
              >
                <svg className="w-[0.7vw] h-[0.7vw]" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C8.21 0 4.831 1.757 2.632 4.501l3.953 6.848A5.454 5.454 0 0 1 12 6.545h10.691A12 12 0 0 0 12 0zM1.931 5.47A11.943 11.943 0 0 0 0 12c0 6.012 4.42 10.991 10.189 11.864l3.953-6.847a5.45 5.45 0 0 1-6.865-2.29zm13.342 2.166a5.446 5.446 0 0 1 1.45 7.09l.002.001-3.952 6.848c.404.037.813.06 1.227.06 6.627 0 12-5.373 12-12 0-1.163-.166-2.286-.475-3.348z"/></svg>
                Chrome
              </a>
              <a
                href="https://chromewebstore.google.com/detail/prompt-chatgpt-via-url-pa/ebnjcbckimmadkpjkpkgfiobinjmmdjb"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-[0.3vw] text-[0.55vw] font-semibold hover:underline"
                style={{ color: "var(--primary)" }}
              >
                <svg className="w-[0.7vw] h-[0.7vw]" viewBox="0 0 24 24" fill="currentColor"><path d="M21.86 17.86q.14 0 .25.12.1.13.1.25t-.11.33l-.32.46-.43.53-.44.5q-.21.25-.38.42l-.22.23q-.58.53-1.34 1.04-.76.51-1.6.91-.86.4-1.74.64t-1.67.24q-1.13 0-2.27-.34-1.14-.34-2.17-.94-1.03-.6-1.88-1.44-.85-.83-1.45-1.85l-.07-.07-.07-.14-.14-.14q-.07-.14-.21-.42t-.22-.47q-.14-.28-.25-.49-.11-.21-.14-.28-.14-.28-.25-.56-.11-.28-.21-.56v-.07q-.07-.14-.11-.28-.04-.14-.11-.28V15h-.07q-.21-.56-.31-1.09-.1-.54-.17-1.12-.07-.58-.07-1.19 0-.85.17-1.69.17-.83.49-1.58.32-.76.77-1.45.45-.69 1.01-1.24.56-.55 1.24-1.01.68-.45 1.43-.77.75-.32 1.56-.49.81-.17 1.67-.17.57 0 1.12.07.55.07 1.05.17.5.11.95.27.45.17.84.34l.58.28.44.25q.21.14.35.21.14.07.21.07 1.2.56 2.29 1.43 1.09.87 1.92 2.01.83 1.14 1.32 2.53.49 1.39.49 2.93 0 .92-.18 1.79-.18.87-.5 1.66-.31.79-.77 1.48-.46.69-1.04 1.24 0 .07-.07.14l-.14.14-.07.07q0 .07-.07.07l-.42.35-.35.28q-.28.21-.42.28 0 .07-.07.07t-.07 0h-.07q-.07 0-.14-.07H21.86z"/></svg>
                Edge
              </a>
              <a
                href="https://chromewebstore.google.com/detail/prompt-chatgpt-via-url-pa/ebnjcbckimmadkpjkpkgfiobinjmmdjb"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-[0.3vw] text-[0.55vw] font-semibold hover:underline"
                style={{ color: "var(--primary)" }}
              >
                <svg className="w-[0.7vw] h-[0.7vw]" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.372 0 0 5.372 0 12s5.372 12 12 12 12-5.372 12-12S18.628 0 12 0zm5.823 6.178c.993.993 1.737 2.173 2.192 3.468H14.73l-2.73-2.73V1.63c1.294.454 2.474 1.199 3.468 2.192zM12 1.035V6.32L6.32 12H1.035A10.953 10.953 0 0 1 12 1.035zM1.035 12h5.286L12 17.68v5.285A10.953 10.953 0 0 1 1.035 12zM12 22.965V17.68l5.68-5.68h5.285A10.953 10.953 0 0 1 12 22.965zm5.823-5.143L12 12l5.823-5.822c2.72 2.72 2.72 8.924 0 11.644z"/></svg>
                Opera
              </a>
            </div>
          </div>
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
