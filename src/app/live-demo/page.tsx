import Link from "next/link"
import { SlideTitle, GoalBanner, PromptExample, Card } from "@/components/PageLayout"

const prompts = [
  {
    category: "Writing",
    prompt: "Write a 3-paragraph company bio for a 10-person marketing agency that specializes in helping healthcare startups. Make it professional but warm.",
    url: "https://chatgpt.com/?q=Write+a+3-paragraph+company+bio+for+a+10-person+marketing+agency+that+specializes+in+helping+healthcare+startups.+Make+it+professional+but+warm.",
  },
  {
    category: "Analysis",
    prompt: "I'm pasting a product review below. Identify the 3 main complaints, suggest a fix for each, and rate the overall sentiment from 1-10.",
    url: "https://chatgpt.com/?q=I%27m+pasting+a+product+review+below.+Identify+the+3+main+complaints%2C+suggest+a+fix+for+each%2C+and+rate+the+overall+sentiment+from+1-10.",
  },
  {
    category: "Email",
    prompt: "Draft a polite follow-up email to a client who hasn't responded in 2 weeks. Reference our last meeting about the Q2 campaign and suggest 3 available times next week.",
    url: "https://chatgpt.com/?q=Draft+a+polite+follow-up+email+to+a+client+who+hasn%27t+responded+in+2+weeks.+Reference+our+last+meeting+about+the+Q2+campaign+and+suggest+3+available+times+next+week.",
  },
  {
    category: "Brainstorm",
    prompt: "Give me 10 creative team-building activity ideas for a remote team of 20 people. Include estimated time, cost, and difficulty level for each.",
    url: "https://chatgpt.com/?q=Give+me+10+creative+team-building+activity+ideas+for+a+remote+team+of+20+people.+Include+estimated+time%2C+cost%2C+and+difficulty+level+for+each.",
  },
  {
    category: "Learning",
    prompt: "Explain how a neural network works to someone who only understands spreadsheets. Use a spreadsheet analogy throughout the explanation.",
    url: "https://chatgpt.com/?q=Explain+how+a+neural+network+works+to+someone+who+only+understands+spreadsheets.+Use+a+spreadsheet+analogy+throughout+the+explanation.",
  },
  {
    category: "Social Media",
    prompt: "Write 5 LinkedIn post hooks about AI in the workplace. Each should be under 15 words, use a different angle, and start with a bold claim or question.",
    url: "https://chatgpt.com/?q=Write+5+LinkedIn+post+hooks+about+AI+in+the+workplace.+Each+should+be+under+15+words%2C+use+a+different+angle%2C+and+start+with+a+bold+claim+or+question.",
  },
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
]

export default function LiveDemoSlide() {
  return (
    <div className="h-full flex flex-col">
      <div className="flex items-center justify-between mb-[0.3vw]">
        <SlideTitle>Live Demo & Practice</SlideTitle>
        <Link
          href="/live-demo/more"
          className="text-[0.75vw] font-bold px-[0.8vw] py-[0.3vw] text-white hover:opacity-90 transition-opacity"
          style={{
            borderRadius: "var(--radius-pill)",
            background: "var(--gradient-blue)",
          }}
        >
          More &rarr;
        </Link>
      </div>
      <GoalBanner>
        Try these prompts live — click any &ldquo;Try it&rdquo; button to open it in ChatGPT.
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
