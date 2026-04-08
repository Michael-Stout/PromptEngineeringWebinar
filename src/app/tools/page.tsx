"use client"

import { useState, type ReactNode } from "react"
import { SlideTitle, GoalBanner, BulletList, PromptExample, Callout } from "@/components/PageLayout"

interface Tool {
  number: number
  name: string
  maker: string
  color: string
  url: string
  content: ReactNode
}

function ModelTable({ models }: { models: { name: string; strength: string; url: string }[] }) {
  return (
    <div className="mt-[0.6vw]">
      <p
        className="text-[0.8vw] font-extrabold uppercase tracking-[1.5px] mb-[0.3vw]"
        style={{ color: "var(--primary)" }}
      >
        Available Models
      </p>
      <div className="space-y-[0.2vw]">
        {models.map((m) => (
          <div
            key={m.name}
            className="flex items-start gap-[0.5vw] py-[0.2vw] px-[0.4vw] border"
            style={{
              borderRadius: "var(--radius-chip)",
              background: "var(--goal-bg)",
              borderColor: "var(--goal-border)",
            }}
          >
            <a
              href={m.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[0.85vw] font-bold shrink-0 hover:underline"
              style={{ minWidth: "8vw", color: "var(--primary)" }}
            >
              {m.name}
            </a>
            <span className="text-[0.8vw] text-muted">{m.strength}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

const tools: Tool[] = [
  {
    number: 1,
    name: "ChatGPT",
    maker: "OpenAI",
    color: "var(--tool-chatgpt)",
    url: "chat.openai.com",
    content: (
      <>
        <p className="text-[0.75vw] text-muted mb-[0.6vw]">
          The most widely known AI assistant. Great for general conversation, writing, brainstorming, and code generation.
        </p>
        <BulletList
          items={[
            <>
              <strong>Custom Instructions:</strong> Set your preferences once so every conversation starts smarter.
            </>,
            <>
              <strong>Use GPTs (custom bots):</strong> Pre-built assistants for resume writing, coding, meal planning, and more.
            </>,
            <>
              <strong>Canvas / Code Interpreter:</strong> Upload a spreadsheet and ask it to find trends.
            </>,
          ]}
        />
        <ModelTable models={[
          { name: "GPT-5.4 Thinking", strength: "Flagship. Best at coding, math, document understanding, and long reasoning.", url: "https://openai.com/index/introducing-gpt-5-4/" },
          { name: "GPT-5.3 Instant", strength: "Fast workhorse for everyday tasks — writing, how-tos, translation.", url: "https://help.openai.com/en/articles/11909943-gpt-53-and-gpt-54-in-chatgpt" },
          { name: "GPT-5.4 mini", strength: "2x faster than full 5.4. Strong coding and reasoning at lower cost.", url: "https://openai.com/index/introducing-gpt-5-4-mini-and-nano/" },
          { name: "GPT-5.3-Codex", strength: "Most capable agentic coding model. Best-in-class code generation.", url: "https://openai.com/index/introducing-gpt-5-3-codex/" },
        ]} />
        <div className="mt-[0.6vw]">
          <PromptExample
            label="Sample Prompt"
            prompt="I'm going to give you a CSV of my monthly expenses. Categorize each expense, total each category, and tell me where I'm overspending."
            variant="good"
          />
        </div>
      </>
    ),
  },
  {
    number: 2,
    name: "Claude",
    maker: "Anthropic",
    color: "var(--tool-claude)",
    url: "claude.ai",
    content: (
      <>
        <p className="text-[0.75vw] text-muted mb-[0.6vw]">
          Known for nuance, long-document handling, and careful reasoning. Excels at analysis and detailed instructions.
        </p>
        <BulletList
          items={[
            <>
              <strong>Long documents:</strong> Upload a 50-page PDF and ask Claude to summarize, extract takeaways, or answer questions.
            </>,
            <>
              <strong>Projects feature:</strong> Add reference materials and custom instructions that persist across conversations.
            </>,
            <>
              <strong>Step-by-step thinking:</strong> Claude responds especially well to &ldquo;Think through this step by step.&rdquo;
            </>,
          ]}
        />
        <ModelTable models={[
          { name: "Claude Opus 4.6", strength: "Most capable. Deep reasoning, long-horizon tasks, 14+ hour task completion.", url: "https://www.anthropic.com/claude/opus" },
          { name: "Claude Sonnet 4.6", strength: "Near-Opus performance. Default for most users. Strong coding and computer use.", url: "https://www.anthropic.com/claude/sonnet" },
          { name: "Claude Haiku 4.5", strength: "Fastest and most affordable. Real-time responses and automation at scale.", url: "https://www.anthropic.com/claude/haiku" },
        ]} />
        <div className="mt-[0.6vw]">
          <PromptExample
            label="Sample Prompt"
            prompt="I'm uploading my company's employee handbook. List the top 10 policies a new hire should know on day one, with the page number for each."
            variant="good"
          />
        </div>
      </>
    ),
  },
  {
    number: 3,
    name: "Microsoft Copilot",
    maker: "Microsoft",
    color: "var(--tool-copilot)",
    url: "copilot.microsoft.com",
    content: (
      <>
        <p className="text-[0.75vw] text-muted mb-[0.6vw]">
          Integrated into Microsoft 365 and Edge. Most powerful when it has your own work data to draw from.
        </p>
        <BulletList
          items={[
            <>
              <strong>In Word:</strong> Highlight a section and ask to rewrite, expand, or summarize — works inline.
            </>,
            <>
              <strong>In Excel:</strong> &ldquo;Add a column that calculates year-over-year percentage change in revenue.&rdquo;
            </>,
            <>
              <strong>In Outlook:</strong> Summarize long threads or draft replies instantly.
            </>,
            <>
              <strong>In Teams:</strong> &ldquo;What were the action items from today&rsquo;s meeting?&rdquo;
            </>,
          ]}
        />
        <ModelTable models={[
          { name: "GPT-5.2 (default)", strength: "Better instruction following, math, coding. Powers Word, Excel, Outlook, Teams.", url: "https://copilot.microsoft.com" },
          { name: "Quick Response", strength: "Fast mode for immediate answers to simple questions.", url: "https://copilot.microsoft.com" },
          { name: "Think Deeper", strength: "Extended reasoning mode for complex problems and thorough analysis.", url: "https://copilot.microsoft.com" },
        ]} />
        <Callout>
          <p className="font-semibold" style={{ color: "var(--accent-muted)" }}>
            Key difference: Copilot draws from your documents, emails, and calendars.
          </p>
        </Callout>
      </>
    ),
  },
  {
    number: 4,
    name: "Gemini",
    maker: "Google",
    color: "#4285F4",
    url: "gemini.google.com",
    content: (
      <>
        <p className="text-[0.75vw] text-muted mb-[0.6vw]">
          Google&rsquo;s AI assistant with deep integration into Search, Gmail, Docs, and the broader Google ecosystem.
        </p>
        <BulletList
          items={[
            <>
              <strong>Multimodal:</strong> Understands text, images, audio, and video in a single conversation.
            </>,
            <>
              <strong>Google integration:</strong> Works with Gmail, Drive, Docs, and Maps for context-aware answers.
            </>,
            <>
              <strong>Real-time search:</strong> Can pull in current information from the web.
            </>,
          ]}
        />
        <ModelTable models={[
          { name: "Gemini 3.1 Pro", strength: "Current flagship. 2x predecessor on reasoning benchmarks. Deep analysis.", url: "https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-3-1-pro/" },
          { name: "Gemini 3 Flash", strength: "Default model in Gemini app. Fast, intelligent, next-gen speed.", url: "https://deepmind.google/models/gemini/" },
          { name: "Gemini 3.1 Flash Lite", strength: "Lightweight and cost-efficient. Best for high-volume and real-time use.", url: "https://ai.google.dev/gemini-api/docs/models" },
          { name: "Gemini 3.1 Flash Live", strength: "Highest-quality voice and audio model for natural real-time dialogue.", url: "https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-3-1-flash-live/" },
        ]} />
      </>
    ),
  },
  {
    number: 5,
    name: "Grok",
    maker: "xAI",
    color: "#E84D39",
    url: "grok.com",
    content: (
      <>
        <p className="text-[0.75vw] text-muted mb-[0.6vw]">
          Built by xAI with real-time access to X (Twitter) data and a direct, unfiltered communication style.
        </p>
        <BulletList
          items={[
            <>
              <strong>Real-time information:</strong> Access to current events and trending topics via X integration.
            </>,
            <>
              <strong>Direct style:</strong> Known for candid, less filtered responses compared to other LLMs.
            </>,
            <>
              <strong>DeepSearch:</strong> Can perform extended research across multiple sources.
            </>,
          ]}
        />
        <ModelTable models={[
          { name: "Grok 4.20", strength: "Flagship. Multi-agent system with 4 specialized agents working in parallel.", url: "https://x.ai/news" },
          { name: "Grok 4.1", strength: "Strong emotional intelligence, creative tasks, 65% fewer hallucinations.", url: "https://x.ai/news" },
        ]} />
      </>
    ),
  },
  {
    number: 6,
    name: "Perplexity",
    maker: "Perplexity AI",
    color: "#20B2AA",
    url: "perplexity.ai",
    content: (
      <>
        <p className="text-[0.75vw] text-muted mb-[0.6vw]">
          An AI-powered research tool that provides cited, sourced answers by searching the web in real time.
        </p>
        <BulletList
          items={[
            <>
              <strong>Cited answers:</strong> Every response includes numbered source links so you can verify claims.
            </>,
            <>
              <strong>Focus modes:</strong> Target your search to academic papers, Reddit, YouTube, or the full web.
            </>,
            <>
              <strong>Follow-up threads:</strong> Ask clarifying questions to drill deeper into any topic.
            </>,
          ]}
        />
        <ModelTable models={[
          { name: "Default (Sonar)", strength: "Auto-selects best model. Fast cited answers from 200B+ indexed pages.", url: "https://perplexity.ai" },
          { name: "Deep Research", strength: "State-of-the-art multi-step research. Outputs reports, slides, dashboards.", url: "https://www.perplexity.ai/changelog/what-we-shipped---february-6th-2026" },
          { name: "Model Council", strength: "Compare outputs from GPT-5.4, Claude 4.6, and Gemini 3.1 Pro side by side.", url: "https://perplexity.ai" },
        ]} />
      </>
    ),
  },
]

export default function ToolsSlide() {
  const [active, setActive] = useState<number | null>(null)

  return (
    <div className="h-full flex flex-col">
      <SlideTitle>The Large Language Models</SlideTitle>
      <GoalBanner>
        Platform-specific tips so you can apply what you learn to whichever tool you use.
      </GoalBanner>

      <div className="flex-1 flex gap-[1.5vw] min-h-0">
        {/* Left: tool list */}
        <div className="flex flex-col gap-[0.5vw] shrink-0" style={{ width: "30%" }}>
          {tools.map((t) => {
            const isActive = active === t.number
            return (
              <button
                key={t.number}
                type="button"
                onClick={() => setActive(isActive ? null : t.number)}
                className="
                  flex items-center gap-[0.5vw] p-[0.5vw] border
                  text-left transition-all cursor-pointer
                "
                style={{
                  borderRadius: "var(--radius-card)",
                  background: isActive ? "var(--chip-orange-bg)" : "var(--card-bg)",
                  borderColor: isActive ? "var(--chip-orange-border)" : "var(--card-border)",
                  boxShadow: isActive ? "var(--shadow-badge)" : "var(--shadow-card)",
                }}
              >
                <span
                  className="shrink-0 h-[0.7vw] w-[0.7vw] rounded-full"
                  style={{ background: t.color }}
                />
                <div className="flex-1 min-w-0">
                  <span className="text-[0.8vw] font-extrabold text-foreground block truncate">
                    {t.name}
                  </span>
                  <a
                    href={`https://${t.url}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[0.5vw] font-semibold hover:underline block truncate"
                    style={{ color: "var(--primary)" }}
                    onClick={(e) => e.stopPropagation()}
                  >
                    {t.url}
                  </a>
                </div>
                <span
                  className="text-[0.7vw] transition-transform shrink-0"
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
                Click a tool to see tips & details &rarr;
              </p>
            </div>
          ) : (
            <div>
              <div className="flex items-center gap-[0.5vw] mb-[0.8vw]">
                <span
                  className="h-[1vw] w-[1vw] rounded-full shrink-0"
                  style={{ background: tools[active - 1].color }}
                />
                <h2 className="text-[1.2vw] font-extrabold text-foreground">
                  {tools[active - 1].name}
                </h2>
                <span
                  className="text-[0.6vw] font-bold ml-auto"
                  style={{ color: "var(--primary)" }}
                >
                  {tools[active - 1].url}
                </span>
                <span
                  className="text-[0.5vw] font-semibold px-[0.4vw] py-[0.1vw]"
                  style={{
                    borderRadius: "var(--radius-pill)",
                    background: "var(--green-bg)",
                    color: "var(--green-accent)",
                    border: "1px solid var(--green-border)",
                  }}
                >
                  Free tier
                </span>
              </div>
              {tools[active - 1].content}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
