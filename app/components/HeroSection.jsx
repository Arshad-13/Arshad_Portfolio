"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { TypeAnimation } from "react-type-animation";

const roles = [
  "AI/ML Developer",
  "Full-Stack Innovator",
  "Competitive Programmer",
];

const HeroSection = () => {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const frameRef = useRef();

  useEffect(() => {
    return () => {
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current);
      }
    };
  }, []);

  const handleTilt = (event) => {
    const card = event.currentTarget;
    const rect = card.getBoundingClientRect();
    const offsetX = event.clientX - rect.left;
    const offsetY = event.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateY = ((offsetX - centerX) / centerX) * 10;
    const rotateX = ((offsetY - centerY) / centerY) * -10;

    if (frameRef.current) {
      cancelAnimationFrame(frameRef.current);
    }

    frameRef.current = requestAnimationFrame(() => {
      setTilt({ x: rotateX, y: rotateY });
    });
  };

  const resetTilt = () => {
    if (frameRef.current) {
      cancelAnimationFrame(frameRef.current);
    }
    setTilt({ x: 0, y: 0 });
  };

  return (
    <section className="relative overflow-hidden py-24 sm:py-32 lg:py-40">
      <div className="absolute inset-0 -z-10 opacity-75">
        <div className="pointer-events-none absolute -top-44 right-[-8%] h-80 w-80 rounded-full bg-[radial-gradient(circle,rgba(142,45,226,0.28),transparent_75%)] blur-3xl" />
        <div className="pointer-events-none absolute bottom-0 left-[-10%] h-96 w-96 rounded-full bg-[radial-gradient(circle,rgba(0,255,255,0.2),transparent_80%)] blur-3xl" />
      </div>

      <div className="container mx-auto px-6 sm:px-10 lg:px-16">
        <div className="grid items-center gap-16 lg:grid-cols-[minmax(0,1fr)_minmax(0,420px)]">
          <div className="order-2 flex flex-col gap-10 text-center lg:order-1 lg:text-left">
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
                href="/resume.pdf"
                className="inline-flex items-center justify-center rounded-full border border-white/25 px-8 py-3 font-semibold text-white transition duration-300 hover:border-transparent hover:bg-white/10 hover:text-white focus:outline-none focus:ring-2 focus:ring-[#8E2DE2]/60 focus:ring-offset-2 focus:ring-offset-[#0A0A0F]"
              >
                Download CV
              </a>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-3 text-sm text-[#B0B0C0]/80 lg:justify-start">
              <span className="font-mono text-xs uppercase tracking-[0.3em] text-[#00FFFF]/70">
                Focus Areas
              </span>
              <span className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm text-white/90">
                <span className="h-2 w-2 rounded-full bg-[#8E2DE2]" />
                Deep Learning
              </span>
              <span className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm text-white/90">
                <span className="h-2 w-2 rounded-full bg-[#F948B7]" />
                Full-Stack Systems
              </span>
              <span className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm text-white/90">
                <span className="h-2 w-2 rounded-full bg-[#00FFFF]" />
                Competitive Coding
              </span>
            </div>

            <div className="mt-6 flex flex-wrap items-center justify-center gap-4 lg:justify-start">
              {[
                {
                  label: "GitHub",
                  href: "https://github.com/Arshad-13",
                  icon: (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="h-5 w-5"
                    >
                      <path d="M12 .5C5.648.5.5 5.648.5 12c0 5.088 3.292 9.39 7.868 10.915.575.102.785-.252.785-.56 0-.276-.01-1.007-.016-1.978-3.201.695-3.876-1.543-3.876-1.543-.523-1.33-1.276-1.684-1.276-1.684-1.043-.713.079-.699.079-.699 1.152.081 1.76 1.183 1.76 1.183 1.026 1.757 2.693 1.25 3.35.956.103-.743.402-1.25.732-1.538-2.554-.291-5.238-1.277-5.238-5.683 0-1.256.45-2.283 1.186-3.087-.119-.292-.515-1.467.112-3.059 0 0 .965-.309 3.163 1.18a10.93 10.93 0 0 1 2.88-.388c.977.005 1.963.132 2.88.388 2.197-1.489 3.16-1.18 3.16-1.18.63 1.592.234 2.767.115 3.06.738.804 1.184 1.83 1.184 3.086 0 4.418-2.69 5.388-5.253 5.673.41.355.776 1.056.776 2.128 0 1.537-.014 2.776-.014 3.155 0 .31.206.67.79.557C20.212 21.386 23.5 17.086 23.5 12 23.5 5.648 18.352.5 12 .5Z" />
                    </svg>
                  ),
                },
                {
                  label: "LinkedIn",
                  href: "https://www.linkedin.com/in/arshad-khatib-408637270/",
                  icon: (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="h-5 w-5"
                    >
                      <path d="M20.452 20.452H16.9v-4.778c0-1.14-.023-2.605-1.588-2.605-1.59 0-1.834 1.24-1.834 2.522v4.861H9.926V9h3.405v1.561h.05c.475-.9 1.637-1.848 3.37-1.848 3.604 0 4.27 2.371 4.27 5.454v6.285ZM5.337 7.433a1.98 1.98 0 1 1 0-3.96 1.98 1.98 0 0 1 0 3.96Zm-1.77 13.02h3.54V9h-3.54v11.453Z" />
                    </svg>
                  ),
                },
                {
                  label: "X",
                  href: "https://x.com/rationalist_13",
                  icon: (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      className="h-5 w-5"
                    >
                      <path d="M13.908 10.697 20.223 3h-1.495L13.2 9.352 8.86 3H3.003l6.64 9.59L3 21h1.495l6.8-8.1L15.14 21h5.858l-7.09-10.303Zm-2.406 2.87-.788-1.125-6.271-8.952H8.02l5.063 7.232.788 1.124L20.11 21h-3.577l-5.031-7.433Z" />
                    </svg>
                  ),
                },
                {
                  label: "LeetCode",
                  href: "https://leetcode.com/rationalist_13/",
                  icon: (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="h-5 w-5"
                    >
                      <path d="m13.585 2.59 1.414 1.414-6.293 6.293a2 2 0 0 0 0 2.828l6.278 6.278-1.414 1.414-6.278-6.278a4 4 0 0 1 0-5.656l6.293-6.293Zm4.243 3.536 3.536 3.536-1.414 1.414-3.536-3.536 1.414-1.414Zm-1.414 7.07 3.536 3.535-1.414 1.415-3.536-3.536 1.414-1.414Z" />
                    </svg>
                  ),
                },
                {
                  label: "Codeforces",
                  href: "https://codeforces.com/profile/arshadkhatib.2006",
                  icon: (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="h-5 w-5"
                    >
                      <path d="M5 3h4v18H5V3Zm5 6h4v12h-4V9Zm5-4h4v16h-4V5Z" />
                    </svg>
                  ),
                },
              ].map((platform) => (
                <a
                  key={platform.label}
                  href={platform.href}
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-flex h-12 w-12 items-center justify-center rounded-full border border-[#8E2DE2]/40 text-white/80 transition duration-300 hover:border-[#8E2DE2] hover:bg-[#8E2DE2]/10 hover:text-white"
                >
                  {platform.icon}
                </a>
              ))}
            </div>
          </div>

          <div className="order-1 flex justify-center lg:order-2">
            <div className="relative" style={{ perspective: "1400px" }}>
              <div
                className="group relative flex aspect-square w-[260px] items-center justify-center rounded-[32px] border border-white/10 bg-white/5 p-6 shadow-[0_25px_60px_rgba(8,8,15,0.55)] transition duration-300 sm:w-[320px] lg:w-[400px]"
                onMouseMove={handleTilt}
                onMouseLeave={resetTilt}
              >
                <div className="pointer-events-none absolute inset-0 -z-10 rounded-[32px] bg-[conic-gradient(from_180deg_at_50%_50%,rgba(142,45,226,0.45),rgba(249,72,183,0.15),rgba(0,255,255,0.25),rgba(142,45,226,0.45))] opacity-0 blur-2xl transition duration-500 group-hover:opacity-100" />
                <div
                  className="relative h-full w-full overflow-hidden rounded-[26px] border border-white/10 bg-[#090910]/85"
                  style={{
                    transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
                    transition: "transform 180ms ease-out",
                  }}
                >
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(142,45,226,0.35),transparent_65%)]" />
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,rgba(0,255,255,0.18),transparent_75%)]" />
                  <Image
                    src="/images/mypic.jpg"
                    alt="Portrait of Arshad"
                    width={420}
                    height={420}
                    className="relative z-10 mx-auto h-auto w-4/5 rounded-[22px] object-cover object-top saturate-[1.15]"
                    priority
                  />
                  <div className="pointer-events-none absolute inset-0 rounded-[26px] border border-white/10" />
                </div>
              </div>

              {/* <div className="pointer-events-none absolute -right-14 top-12 hidden h-20 w-20 items-center justify-center rounded-3xl border border-white/10 bg-white/5 font-mono text-[10px] uppercase tracking-[0.3em] text-[#00FFFF]/80 shadow-[0_0_24px_rgba(0,255,255,0.28)] backdrop-blur-lg lg:flex">
                ML
              </div>
              <div className="pointer-events-none absolute -left-12 bottom-10 hidden flex-col items-center justify-center gap-1 rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-white/85 shadow-[0_0_24px_rgba(249,72,183,0.35)] backdrop-blur-lg lg:flex">
                <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#F948B7]/80">
                  Impact
                </span>
                <span className="font-heading text-lg">20+ Projects</span>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
