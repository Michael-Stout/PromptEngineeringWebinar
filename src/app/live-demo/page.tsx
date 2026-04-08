import { SlideTitle, GoalBanner, BulletList, PromptExample, Card } from "@/components/PageLayout"

export default function LiveDemoSlide() {
  return (
    <div className="h-full flex flex-col">
      <SlideTitle>Live Demo & Audience Practice</SlideTitle>
      <GoalBanner>
        Make it interactive and give attendees confidence to try it themselves.
      </GoalBanner>

      <div className="grid grid-cols-2 gap-[1.5vw] flex-1">
        <Card>
          <h2 className="text-[1vw] font-extrabold text-foreground mb-[0.8vw]">
            Live Demo
            <span className="text-[0.6vw] font-semibold text-muted ml-[0.5vw]">3 min</span>
          </h2>
          <BulletList
            items={[
              "Take an audience-submitted prompt from the chat.",
              "Improve it on screen using the 5 Principles.",
              "Run it through one of the tools.",
              "Show the before-and-after output.",
            ]}
          />
        </Card>

        <Card className="flex flex-col">
          <h2 className="text-[1vw] font-extrabold text-foreground mb-[0.8vw]">
            Audience Mini-Challenge
            <span className="text-[0.6vw] font-semibold text-muted ml-[0.5vw]">4 min</span>
          </h2>
          <p className="text-[0.8vw] text-muted mb-[1vw]">
            Give attendees a &ldquo;bad prompt&rdquo; and ask them to rewrite it using what they&rsquo;ve learned.
          </p>
          <PromptExample
            label="Bad Prompt to Fix"
            prompt="Tell me about marketing."
            variant="bad"
          />
          <div
            className="mt-[1vw] p-[0.6vw] border"
            style={{
              borderRadius: "var(--radius-chip)",
              background: "var(--goal-bg)",
              borderColor: "var(--goal-border)",
            }}
          >
            <p className="text-[0.7vw] text-foreground">
              See who can add <strong>specificity</strong>, <strong>role</strong>,{" "}
              <strong>context</strong>, and <strong>format</strong>.
            </p>
          </div>
        </Card>
      </div>
    </div>
  )
}
