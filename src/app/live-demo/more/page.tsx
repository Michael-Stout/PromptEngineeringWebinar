import Link from "next/link"
import { SlideTitle, GoalBanner, PromptExample, Card } from "@/components/PageLayout"

const prompts = [
  {
    category: "HR",
    prompt: "Write interview questions for a mid-level project manager role. Include 3 behavioral, 3 situational, and 3 technical questions with ideal answers.",
    url: "https://chatgpt.com/?q=Write+interview+questions+for+a+mid-level+project+manager+role.+Include+3+behavioral%2C+3+situational%2C+and+3+technical+questions.+Add+what+a+strong+answer+looks+like+for+each.",
  },
  {
    category: "Education",
    prompt: "Create a 30-minute lesson plan for teaching 8th graders about the water cycle. Include a hands-on activity, discussion questions, and a quick assessment.",
    url: "https://chatgpt.com/?q=Create+a+30-minute+lesson+plan+for+teaching+8th+graders+about+the+water+cycle.+Include+a+hands-on+activity%2C+discussion+questions%2C+and+a+quick+assessment.",
  },
  {
    category: "Marketing",
    prompt: "Write 3 versions of a Google Ad headline and description for an online yoga studio targeting busy professionals. Keep headlines under 30 characters.",
    url: "https://chatgpt.com/?q=Write+3+versions+of+a+Google+Ad+headline+and+description+for+an+online+yoga+studio+targeting+busy+professionals.+Keep+headlines+under+30+characters.",
  },
  {
    category: "Travel",
    prompt: "Plan a 5-day trip to Tokyo for two people on a mid-range budget. Include daily itineraries, restaurant recommendations, transit tips, and estimated daily costs.",
    url: "https://chatgpt.com/?q=Plan+a+5-day+trip+to+Tokyo+for+two+people+on+a+mid-range+budget.+Include+daily+itineraries%2C+restaurant+recommendations%2C+transit+tips%2C+and+estimated+daily+costs.",
  },
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
]

export default function MoreExamplesSlide() {
  return (
    <div className="h-full flex flex-col">
      <div className="flex items-center justify-between mb-[0.3vw]">
        <SlideTitle>More Examples</SlideTitle>
        <Link
          href="/live-demo"
          className="text-[0.75vw] font-bold px-[0.8vw] py-[0.3vw] text-white hover:opacity-90 transition-opacity"
          style={{
            borderRadius: "var(--radius-pill)",
            background: "var(--gradient-blue)",
          }}
        >
          &larr; Back
        </Link>
      </div>
      <GoalBanner>
        More prompts to try — click any &ldquo;Try it&rdquo; button to open it in ChatGPT.
      </GoalBanner>

      <div className="flex-1 grid grid-cols-2 grid-rows-4 gap-[0.4vw] min-h-0">
        {prompts.map((p, i) => (
          <Card key={i} className="flex flex-col p-[0.4vw]">
            <span
              className="text-[0.45vw] font-bold uppercase tracking-[1.5px] mb-[0.2vw]"
              style={{ color: "var(--primary)" }}
            >
              {p.category}
            </span>
            <PromptExample
              label=""
              prompt={p.prompt}
              variant="good"
              tryUrl={p.url}
            />
          </Card>
        ))}
      </div>
    </div>
  )
}
