"use client";

import Link from "next/link";
import { TypeAnimation } from "react-type-animation";

const roles = [
  "AI Engineer",
  "Full-Stack Developer",
  "Competitive Programmer",
];

const focusAreas = [
  { label: "Deep Learning", accent: "bg-[#8E2DE2]" },
  { label: "Full-Stack Systems", accent: "bg-[#F948B7]" },
  { label: "Competitive Coding", accent: "bg-[#00FFFF]" },
];

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden pt-0 pb-24 sm:pb-32 lg:pb-40 min-h-screen flex items-center">
      <div className="absolute inset-0 -z-10 opacity-75">
        <div className="pointer-events-none absolute -top-44 right-[-8%] h-80 w-80 rounded-full bg-[radial-gradient(circle,rgba(142,45,226,0.28),transparent_75%)] blur-3xl" />
        <div className="pointer-events-none absolute bottom-0 left-[-10%] h-96 w-96 rounded-full bg-[radial-gradient(circle,rgba(0,255,255,0.2),transparent_80%)] blur-3xl" />
      </div>

      <div className="container mx-auto px-6 sm:px-10 lg:px-16">
        <div className="mx-auto flex max-w-4xl flex-col items-center gap-10 text-center lg:items-start lg:text-left">
          <div className="flex flex-col gap-4">
            <span className="font-mono text-xs uppercase tracking-[0.35em] text-[#00FFFF]/80">
              B.Tech AI · NIT Surat
            </span>
            <h1 className="font-heading text-4xl leading-tight text-white sm:text-5xl lg:text-6xl">
              Hi, I'm <span className="gradient-text">Arshad</span>
            </h1>
            <div className="flex flex-col items-center gap-2 text-[#B0B0C0] lg:flex-row lg:items-end lg:gap-3">
              <span className="font-heading text-lg text-white/70">I’m a</span>
              <TypeAnimation
                preRenderFirstString
                sequence={roles.flatMap((role) => [role, 2000])}
                wrapper="span"
                speed={60}
                deletionSpeed={45}
                className="font-heading text-2xl text-white sm:text-3xl"
                repeat={Infinity}
              />
            </div>
            <p className="mx-auto max-w-2xl text-base leading-relaxed text-[#B0B0C0] sm:text-lg">
              From pixel to prediction, I build complete intelligent systems. I merge intuitive full-stack UIs with robust deep learning, optimized for speed and scale. My craft is engineering elegance from complexity.
            </p>
          </div>

          <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
            <Link
              href="#contact"
              className="group inline-flex items-center justify-center rounded-full bg-linear-to-r from-[#8E2DE2] to-[#F948B7] px-8 py-3 font-semibold text-white shadow-[0_0_20px_rgba(249,72,183,0.45)] transition duration-300 hover:shadow-[0_0_32px_rgba(249,72,183,0.7)] focus:outline-none focus:ring-2 focus:ring-[#F948B7]/60 focus:ring-offset-2 focus:ring-offset-[#0A0A0F]"
            >
              <span className="flex items-center gap-2">
                Let’s Talk
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M5 12h14m0 0-6-6m6 6-6 6"
                  />
                </svg>
              </span>
            </Link>
            <a
              href="/Arshad_Khatib_Resume.pdf"
              className="inline-flex items-center justify-center rounded-full border border-white/25 px-8 py-3 font-semibold text-white transition duration-300 hover:border-transparent hover:bg-white/10 hover:text-white focus:outline-none focus:ring-2 focus:ring-[#8E2DE2]/60 focus:ring-offset-2 focus:ring-offset-[#0A0A0F]"
            >
              Download CV
            </a>
          </div>

          <div className="flex flex-col items-center gap-3 text-sm text-[#B0B0C0]/80 lg:flex-row lg:flex-wrap lg:justify-start">
            <span className="font-mono text-xs uppercase tracking-[0.3em] text-[#00FFFF]/70">
              Focus Areas
            </span>
            <div className="flex flex-col items-center gap-3 sm:flex-row sm:flex-wrap sm:justify-center lg:justify-start">
              {focusAreas.map(({ label, accent }) => (
                <span
                  key={label}
                  className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm text-white/90"
                >
                  <span className={`h-2 w-2 rounded-full ${accent}`} />
                  {label}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
