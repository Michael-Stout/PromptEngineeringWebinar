import Image from "next/image"
import { SlideTitle, GoalBanner, Card } from "@/components/PageLayout"
import type { ReactNode } from "react"

const chromeIcon = <Image src="/icon-chrome.webp" alt="Chrome" width={40} height={40} style={{ width: "1.6vw", height: "1.6vw" }} />
const edgeIcon = <Image src="/icon-edge.png" alt="Edge" width={40} height={40} style={{ width: "1.6vw", height: "1.6vw" }} />
const operaIcon = <Image src="/icon-opera.png" alt="Opera" width={40} height={40} style={{ width: "1.6vw", height: "1.6vw" }} />

function BrowserLinks({ links }: { links: { label: string; url: string; icon: ReactNode }[] }) {
  return (
    <div className="flex items-center justify-center gap-[1.5vw]">
      {links.map((l) => (
        <a
          key={l.label}
          href={l.url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center gap-[0.3vw] text-[0.75vw] font-semibold hover:underline"
          style={{ color: "var(--primary)" }}
        >
          {l.icon}
          {l.label}
        </a>
      ))}
    </div>
  )
}

export default function SystemSetupSlide() {
  return (
    <div className="h-full flex flex-col">
      <SlideTitle>System Setup</SlideTitle>
      <GoalBanner>
        Install these browser extensions to follow along and try prompts live during the presentation.
      </GoalBanner>

      <div className="flex-1 grid grid-cols-3 gap-[1vw]">
        {/* ChatGPT */}
        <Card className="flex flex-col items-center text-center">
          <div className="flex items-center gap-[0.4vw] mb-[0.5vw]">
            <span
              className="h-[0.7vw] w-[0.7vw] rounded-full"
              style={{ background: "var(--tool-chatgpt)" }}
            />
            <h2 className="text-[1vw] font-extrabold text-foreground">ChatGPT</h2>
          </div>
          <p className="text-[0.7vw] text-muted mb-[0.8vw]">
            Click any &ldquo;Try it&rdquo; button to open ChatGPT with the prompt pre-filled and ready to go.
          </p>
          <BrowserLinks links={[
            { label: "Chrome", url: "https://chromewebstore.google.com/detail/prompt-chatgpt-via-url-pa/ebnjcbckimmadkpjkpkgfiobinjmmdjb", icon: chromeIcon },
            { label: "Edge", url: "https://chromewebstore.google.com/detail/prompt-chatgpt-via-url-pa/ebnjcbckimmadkpjkpkgfiobinjmmdjb", icon: edgeIcon },
            { label: "Opera", url: "https://chromewebstore.google.com/detail/prompt-chatgpt-via-url-pa/ebnjcbckimmadkpjkpkgfiobinjmmdjb", icon: operaIcon },
          ]} />
        </Card>

        {/* Claude */}
        <Card className="flex flex-col items-center text-center">
          <div className="flex items-center gap-[0.4vw] mb-[0.5vw]">
            <span
              className="h-[0.7vw] w-[0.7vw] rounded-full"
              style={{ background: "var(--tool-claude)" }}
            />
            <h2 className="text-[1vw] font-extrabold text-foreground">Claude</h2>
          </div>
          <p className="text-[0.7vw] text-muted mb-[0.8vw]">
            Claude in Chrome lets Claude read, click, and navigate websites alongside you in a side panel.
          </p>
          <BrowserLinks links={[
            { label: "Chrome", url: "https://chromewebstore.google.com/detail/claude/fcoeoabgfenejglbffodgkkbkcdhcgfn", icon: chromeIcon },
            { label: "Edge", url: "https://chromewebstore.google.com/detail/claude/fcoeoabgfenejglbffodgkkbkcdhcgfn", icon: edgeIcon },
            { label: "Opera", url: "https://chromewebstore.google.com/detail/claude/fcoeoabgfenejglbffodgkkbkcdhcgfn", icon: operaIcon },
          ]} />
        </Card>

        {/* Copilot */}
        <Card className="flex flex-col items-center text-center">
          <div className="flex items-center gap-[0.4vw] mb-[0.5vw]">
            <span
              className="h-[0.7vw] w-[0.7vw] rounded-full"
              style={{ background: "var(--tool-copilot)" }}
            />
            <h2 className="text-[1vw] font-extrabold text-foreground">Microsoft Copilot</h2>
          </div>
          <p className="text-[0.7vw] text-muted mb-[0.8vw]">
            Access Copilot&rsquo;s AI-powered search, content summarization, and chat directly in your browser sidebar.
          </p>
          <BrowserLinks links={[
            { label: "Chrome", url: "https://chromewebstore.google.com/detail/microsoft-365-copilot/nkbihfbeogaeaoehlefnkodbefgpgknn", icon: chromeIcon },
            { label: "Edge", url: "https://www.microsoft.com/en-us/edge/features/copilot", icon: edgeIcon },
            { label: "Opera", url: "https://chromewebstore.google.com/detail/microsoft-365-copilot/nkbihfbeogaeaoehlefnkodbefgpgknn", icon: operaIcon },
          ]} />
        </Card>
      </div>

      <p className="text-[0.6vw] text-muted text-center mt-[0.5vw]">
        Edge and Opera support Chrome Web Store extensions. You must be logged in to each service for the extensions to work.
      </p>
    </div>
  )
}
