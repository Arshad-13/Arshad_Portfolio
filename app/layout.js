import "./globals.css";
import { Inter, Space_Grotesk, Space_Mono } from "next/font/google";

const headingFont = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

const bodyFont = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const monoFont = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata = {
  title: "Arshad | AI/ML Engineer",
  description:
    "Personal portfolio highlighting AI/ML projects, full-stack work, and technical explorations.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${headingFont.variable} ${bodyFont.variable} ${monoFont.variable} font-body antialiased bg-[#0A0A0F] text-[#B0B0C0]`}
      >
        <div className="relative isolate min-h-screen overflow-hidden">
          <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(142,45,226,0.12),transparent_60%)]" />
          <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_bottom,rgba(0,255,255,0.06),transparent_70%)]" />
          {children}
        </div>
      </body>
    </html>
  );
}
