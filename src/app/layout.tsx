import type { ReactNode } from "react";
import type { Metadata } from "next";
import { SlideLayout } from "@/components/SlideLayout";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Prompt Engineering",
    template: "%s | Prompt Engineering",
  },
  description:
    "Get better results from ChatGPT, Claude & CoPilot. A 1-hour educational webinar for beginners.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en" className="antialiased">
      <body>
        <SlideLayout>{children}</SlideLayout>
      </body>
    </html>
  );
}
