import "./globals.css";
import { Rajdhani, Exo_2, Space_Mono } from "next/font/google";

const headingFont = Rajdhani({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-heading",
  display: "swap",
});

const bodyFont = Exo_2({
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
    <html lang="en" className="dark">
      <body
        className={`${headingFont.variable} ${bodyFont.variable} ${monoFont.variable} font-body antialiased bg-background text-foreground selection:bg-primary selection:text-primary-foreground`}
      >
        <div className="relative isolate min-h-screen overflow-hidden">
          {/* Futuristic Grid Background */}
          <div className="fixed inset-0 -z-20 h-full w-full bg-[#030305] bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
          
          {/* Ambient Glows */}
          <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(142,45,226,0.15),transparent_50%)]" />
          <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_bottom_right,rgba(0,255,255,0.1),transparent_50%)]" />
          
          {children}
        </div>
      </body>
    </html>
  );
}
