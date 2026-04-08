
export default function ResourcesSlide() {
  return (
    <div className="h-full flex flex-col items-center justify-center text-center">
      {/* TechSkills logo */}
      <img
        src="/techskills-logo.png"
        alt="TechSkills — Future-Proofing Your Workforce"
        style={{ width: "20vw", height: "auto" }}
      />

      {/* Divider */}
      <div
        className="w-[4vw] h-[0.2vw] my-[1.2vw]"
        style={{ background: "var(--gradient-orange)", borderRadius: "2px" }}
      />

      {/* Name */}
      <p className="text-[1.6vw] font-black text-foreground">
        Michael Stout
      </p>

      {/* Divider */}
      <div
        className="w-[3vw] h-[1px] my-[1vw]"
        style={{ background: "var(--divider)" }}
      />

      {/* Links */}
      <div className="space-y-[0.6vw]">
        <a
          href="https://techskills.com"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-[0.4vw] text-[0.9vw] font-semibold hover:underline"
          style={{ color: "var(--primary)" }}
        >
          <svg className="w-[1vw] h-[1vw]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10" />
            <line x1="2" y1="12" x2="22" y2="12" />
            <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
          </svg>
          techskills.com
        </a>
        <a
          href="https://linkedin.com/in/mwstout"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-[0.4vw] text-[0.9vw] font-semibold hover:underline"
          style={{ color: "var(--primary)" }}
        >
          <svg className="w-[1vw] h-[1vw]" viewBox="0 0 24 24" fill="currentColor">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
          </svg>
          linkedin.com/in/mwstout
        </a>
      </div>

      {/* Closing quote */}
      <div
        className="mt-[1.5vw] p-[0.8vw] px-[2vw] border"
        style={{
          borderRadius: "var(--radius-chip)",
          background: "var(--chip-orange-bg)",
          borderColor: "var(--chip-orange-border)",
        }}
      >
        <p className="text-[0.9vw] font-semibold italic" style={{ color: "#000000" }}>
          In the Future there will be two types of People<br />
          Those who use AI to do their jobs<br />
          And those who do their jobs with AI<br />
          <span className="mt-[0.5vw] block">Which one will you be?</span>
        </p>
      </div>
    </div>
  )
}
