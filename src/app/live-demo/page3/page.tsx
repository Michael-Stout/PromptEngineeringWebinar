import Link from "next/link"
import { SlideTitle, GoalBanner, PromptExample, Card } from "@/components/PageLayout"

const prompts = [
  {
    category: "Sales",
    prompt: "Write a cold outreach email to a VP of Marketing at a mid-size SaaS company. Pitch our AI content tool, mention a specific pain point, and include a clear CTA.",
    url: "https://chatgpt.com/?q=Write+a+cold+outreach+email+to+a+VP+of+Marketing+at+a+mid-size+SaaS+company.+Pitch+our+AI+content+tool%2C+mention+a+specific+pain+point%2C+and+include+a+clear+CTA.",
  },
  {
    category: "Health",
    prompt: "Create a beginner-friendly 4-week workout plan for someone who can exercise 3 days a week with no gym equipment. Include warm-ups, exercises, sets, and reps.",
    url: "https://chatgpt.com/?q=Create+a+beginner-friendly+4-week+workout+plan+for+someone+who+can+exercise+3+days+a+week+with+no+gym+equipment.+Include+warm-ups%2C+exercises%2C+sets%2C+reps%2C+and+rest+days.",
  },
  {
    category: "Creative",
    prompt: "Write a short bedtime story for a 5-year-old about a dog who learns to fly. Make it exactly 200 words, include dialogue, and end with a gentle moral.",
    url: "https://chatgpt.com/?q=Write+a+short+bedtime+story+for+a+5-year-old+about+a+dog+who+learns+to+fly.+Make+it+exactly+200+words%2C+include+dialogue%2C+and+end+with+a+gentle+moral+about+trying+new+things.",
  },
  {
    category: "Presentation",
    prompt: "Create a 10-slide outline for a presentation on why companies should adopt AI tools. Include slide titles, 3 bullet points each, and speaker notes.",
    url: "https://chatgpt.com/?q=Create+a+10-slide+outline+for+a+presentation+on+why+companies+should+adopt+AI+tools.+Include+slide+titles%2C+3+bullet+points+each%2C+and+speaker+notes+for+the+opening+and+closing.",
  },
  {
    category: "Legal",
    prompt: "Summarize the key differences between an LLC and an S-Corp for a freelance graphic designer earning $120k/year. Include tax implications and liability protection.",
    url: "https://chatgpt.com/?q=Summarize+the+key+differences+between+an+LLC+and+an+S-Corp+for+a+freelance+graphic+designer+earning+%24120k%2Fyear.+Include+tax+implications+and+liability+protection.",
  },
  {
    category: "Productivity",
    prompt: "I have 6 hours of free time on Saturday. Help me create a time-blocked schedule to clean the house, meal prep for the week, exercise, and read for 30 minutes.",
    url: "https://chatgpt.com/?q=I+have+6+hours+of+free+time+on+Saturday.+Help+me+create+a+time-blocked+schedule+to+clean+the+house%2C+meal+prep+for+the+week%2C+exercise%2C+and+read+for+30+minutes.",
  },
]

export default function LiveDemoPage3() {
  return (
    <div className="h-full flex flex-col">
      <div className="flex items-center justify-between mb-[0.3vw]">
        <SlideTitle>Live Demo & Practice</SlideTitle>
        <Link
          href="/live-demo/page2"
          className="text-[0.75vw] font-bold px-[0.8vw] py-[0.3vw] text-white hover:opacity-90 transition-opacity"
          style={{ borderRadius: "var(--radius-pill)", background: "var(--gradient-blue)" }}
        >
          &larr; Back
        </Link>
      </div>
      <GoalBanner>
        Try these prompts live — click any &ldquo;Try it&rdquo; button to open it in ChatGPT.
      </GoalBanner>

      <div className="flex-1 grid grid-cols-2 grid-rows-3 gap-[0.5vw] min-h-0">
        {prompts.map((p, i) => (
          <Card key={i} className="flex flex-col p-[0.5vw]">
            <span
              className="text-[0.5vw] font-bold uppercase tracking-[1.5px] mb-[0.3vw]"
              style={{ color: "var(--primary)" }}
            >
              {p.category}
            </span>
            <PromptExample label="" prompt={p.prompt} variant="good" tryUrl={p.url} />
          </Card>
        ))}
      </div>
    </div>
  )
}
