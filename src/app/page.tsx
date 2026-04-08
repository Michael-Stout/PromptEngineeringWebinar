import Image from "next/image"

export default function TitleSlide() {
  return (
    <div className="h-full flex flex-col items-center justify-center text-center">
      <h1 className="text-[4vw] font-black tracking-[-1px] leading-tight text-foreground mb-[1vw]">
        Prompt Engineering
      </h1>
      <p className="text-[1.4vw] text-muted mb-[2.5vw]">
        Get Better Results from Large Language Models
      </p>

      <Image
        src="/techskills-logo.png"
        alt="TechSkills"
        width={400}
        height={100}
        style={{ width: "16vw", height: "auto" }}
        priority
      />
      <p className="text-[1.3vw] font-bold mt-[0.4vw]" style={{ color: "var(--primary)" }}>
        Michael Stout
      </p>
    </div>
  )
}
