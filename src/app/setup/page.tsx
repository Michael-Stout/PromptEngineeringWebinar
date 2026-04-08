import Image from "next/image"
import { SlideTitle, Card } from "@/components/PageLayout"

export default function SystemSetupSlide() {
  return (
    <div className="h-full flex flex-col items-center justify-center">
      <SlideTitle>System Setup</SlideTitle>

      <Card className="max-w-[45vw] w-full text-center">
        <p
          className="text-[0.9vw] mb-[1.5vw]"
          style={{ color: "var(--foreground)" }}
        >
          You can try the demos yourself in ChatGPT by installing an Extension for one of these browsers.
        </p>

        <div className="flex items-center justify-center gap-[4vw]">
          <a
            href="https://chromewebstore.google.com/detail/prompt-chatgpt-via-url-pa/ebnjcbckimmadkpjkpkgfiobinjmmdjb"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-[0.5vw] hover:opacity-80 transition-opacity"
          >
            <Image src="/icon-chrome.webp" alt="Chrome" width={80} height={80} style={{ width: "3.5vw", height: "3.5vw" }} />
            <span className="text-[0.9vw] font-semibold" style={{ color: "var(--primary)" }}>Chrome</span>
          </a>

          <a
            href="https://chromewebstore.google.com/detail/prompt-chatgpt-via-url-pa/ebnjcbckimmadkpjkpkgfiobinjmmdjb"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-[0.5vw] hover:opacity-80 transition-opacity"
          >
            <Image src="/icon-edge.png" alt="Edge" width={80} height={80} style={{ width: "3.5vw", height: "3.5vw" }} />
            <span className="text-[0.9vw] font-semibold" style={{ color: "var(--primary)" }}>Edge</span>
          </a>

          <a
            href="https://chromewebstore.google.com/detail/prompt-chatgpt-via-url-pa/ebnjcbckimmadkpjkpkgfiobinjmmdjb"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-[0.5vw] hover:opacity-80 transition-opacity"
          >
            <Image src="/icon-opera.png" alt="Opera" width={80} height={80} style={{ width: "3.5vw", height: "3.5vw" }} />
            <span className="text-[0.9vw] font-semibold" style={{ color: "var(--primary)" }}>Opera</span>
          </a>
        </div>
      </Card>
    </div>
  )
}
