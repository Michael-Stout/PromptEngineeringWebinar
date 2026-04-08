import Link from "next/link"

export default function NotFound() {
  return (
    <div className="h-full flex flex-col items-center justify-center text-center">
      <h1 className="text-[3vw] font-black text-foreground mb-[1vw]">
        Page Not Found
      </h1>
      <p className="text-[1vw] text-muted mb-[2vw]">
        This slide doesn&rsquo;t exist.
      </p>
      <Link
        href="/"
        className="text-[0.9vw] font-bold px-[1vw] py-[0.4vw] text-white hover:opacity-90 transition-opacity"
        style={{
          borderRadius: "var(--radius-pill)",
          background: "var(--gradient-blue)",
        }}
      >
        Back to Welcome
      </Link>
    </div>
  )
}
