import { SlideTitle, PromptExample, Callout, Card } from "@/components/PageLayout"

export default function IntroductionSlide() {
  return (
    <div className="h-full flex flex-col">
      <SlideTitle>Why Prompt Engineering Matters</SlideTitle>

      <div className="grid grid-cols-2 gap-[1.2vw] mb-[1vw]">
        <PromptExample
          label="Vague Prompt"
          prompt="Write me something about marketing."
          variant="bad"
        />
        <PromptExample
          label="Well-Crafted Prompt"
          prompt="Write a 200-word LinkedIn post for a B2B SaaS founder explaining 3 underrated content marketing strategies, with a conversational tone."
          variant="good"
        />
      </div>

      <div className="grid grid-cols-3 gap-[1vw] mb-[1vw] flex-1">
        <Card>
          <h2 className="text-[0.85vw] font-extrabold text-foreground mb-[0.4vw]">
            Garbage In, Garbage Out
          </h2>
          <p className="text-[0.7vw] text-muted leading-relaxed">
            AI is only as good as what you ask it. A vague prompt gets a generic answer.
            A specific prompt gets a specific, useful answer.
          </p>
        </Card>

        <Card>
          <h2 className="text-[0.85vw] font-extrabold text-foreground mb-[0.4vw]">
            The Skill Gap Is Real
          </h2>
          <p className="text-[0.7vw] text-muted leading-relaxed">
            Most people use AI like a Google search — typing keywords and hoping for the best.
            Prompt engineering is the difference between a C-minus and an A-plus answer.
          </p>
        </Card>

        <Card>
          <h2 className="text-[0.85vw] font-extrabold text-foreground mb-[0.4vw]">
            A Learnable Skill
          </h2>
          <p className="text-[0.7vw] text-muted leading-relaxed">
            You don&rsquo;t need to be technical. Prompt engineering is learning how to
            communicate clearly — something you already know how to do.
          </p>
        </Card>
      </div>

      <Callout>
        <p className="font-semibold italic text-[0.85vw]">
          &ldquo;By the end of this session, you&rsquo;ll know exactly how to write prompts
          that get useful, accurate, and surprisingly good results.&rdquo;
        </p>
      </Callout>
    </div>
  )
}
