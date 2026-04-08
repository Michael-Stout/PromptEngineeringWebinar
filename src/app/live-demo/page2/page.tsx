import Link from "next/link"
import { SlideTitle, GoalBanner, PromptExample, Card } from "@/components/PageLayout"

const prompts = [
  {
    category: "Coding",
    prompt: "Write a Python script that reads a CSV file, removes duplicate rows, sorts by date column, and exports to a new file. Add comments explaining each step.",
    url: "https://chatgpt.com/?q=Write+a+Python+script+that+reads+a+CSV+file%2C+removes+duplicate+rows%2C+sorts+by+date+column%2C+and+exports+to+a+new+file.+Add+comments+explaining+each+step.",
  },
  {
    category: "Strategy",
    prompt: "You are a business consultant. A local bakery wants to start selling online. Give a 5-step launch plan with timeline, estimated costs, and key risks.",
    url: "https://chatgpt.com/?q=You+are+a+business+consultant.+A+local+bakery+wants+to+start+selling+online.+Give+a+5-step+launch+plan+with+timeline%2C+estimated+costs%2C+and+key+risks.",
  },
  {
    category: "HR",
    prompt: "Write interview questions for a mid-level project manager role. Include 3 behavioral, 3 situational, and 3 technical questions with ideal answers.",
    url: "https://chatgpt.com/?q=Write+interview+questions+for+a+mid-level+project+manager+role.+Include+3+behavioral%2C+3+situational%2C+and+3+technical+questions+with+ideal+answers.",
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
]

export default function LiveDemoPage2() {
  return (
    <div className="h-full flex flex-col">
      <div className="flex items-center justify-between mb-[0.3vw]">
        <SlideTitle>Live Demo & Practice</SlideTitle>
        <div className="flex gap-[0.5vw]">
          <Link
            href="/live-demo"
            className="text-[0.75vw] font-bold px-[0.8vw] py-[0.3vw] text-white hover:opacity-90 transition-opacity"
            style={{ borderRadius: "var(--radius-pill)", background: "var(--gradient-blue)" }}
          >
            &larr; Back
          </Link>
          <Link
            href="/live-demo/page3"
            className="text-[0.75vw] font-bold px-[0.8vw] py-[0.3vw] text-white hover:opacity-90 transition-opacity"
            style={{ borderRadius: "var(--radius-pill)", background: "var(--gradient-blue)" }}
          >
            Next &rarr;
          </Link>
        </div>
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
