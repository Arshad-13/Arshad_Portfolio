"use client";

import { useEffect, useRef } from "react";

const experiences = [
  {
    title: "Trendora — AI Social Commerce Platform",
    organization: "Winner · Web Wonders 2025 (NIT Surat)",
    date: "Jul – Aug 2025",
    description:
      "Led a cross-functional squad to launch Trendora, a generative fashion marketplace with live streams, 3D avatars, and ML-powered virtual try-ons. Integrated Razorpay + Shiprocket for end-to-end commerce and shipped LangChain + Gemini stylists inside production dashboards.",
    tech: ["Next.js", "Tailwind CSS", "Firebase", "LangChain", "Razorpay", "Gemini 2.5 Flash"],
    links: {
      github: "https://github.com/GAURAVSVNIT/Namaste.dev",
      external: "https://namaste-dev.vercel.app/",
    },
  },
  {
    title: "WaveGuard — AI-Powered Disaster Prediction",
    organization: "Finalist · HackOut 2025 (DAIICT)",
    date: "Aug 2025",
    description:
      "Engineered a full-stack early warning system that transforms raw USGS seismic data into real-time risk forecasts. Authored FastAPI services for model inference, built a Next.js world map dashboard, and secured access with Firebase Auth for rapid field deployments.",
    tech: ["Python", "FastAPI", "scikit-learn", "Next.js", "TypeScript", "Firebase"],
    links: {
      github: "https://github.com/aayush-decoder/WaveGuard",
      external: "https://wave-guard-2025.vercel.app/",
    },
  },
  {
    title: "Biodegradable Material Classification",
    organization: "Drishti Robotics Club · NIT Surat",
    date: "Aug – Sept 2025",
    description:
      "Directed a computer vision initiative that distinguishes biodegradable from non-biodegradable waste on-device. Designed the CNN pipeline in TensorFlow/Keras, ported it to Raspberry Pi with OpenCV, and delivered a deployable kit for campus sustainability efforts.",
    tech: ["TensorFlow", "Keras", "OpenCV", "Python", "Raspberry Pi"],
    links: {
      github: "https://github.com/Arshad-13/Makernova",
    //   external: "https://drishti-nit-surat.vercel.app",
    },
  },
];

const ExperienceSection = () => {
  const sectionRef = useRef(null);
  const trackRef = useRef(null);

  useEffect(() => {
    const sectionEl = sectionRef.current;
    if (!sectionEl) return;

    const cards = sectionEl.querySelectorAll("[data-timeline-card]");
    const lines = sectionEl.querySelectorAll("[data-timeline-line]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
          }
        });
      },
      {
        threshold: 0.25,
        rootMargin: "0px 0px -80px",
      }
    );

    cards.forEach((card) => observer.observe(card));
    lines.forEach((line) => observer.observe(line));

    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    const trackEl = trackRef.current;
    if (!trackEl) return;

    let ticking = false;
    let listenersAttached = false;

    const updateProgress = () => {
      const rect = trackEl.getBoundingClientRect();
      const totalHeight = trackEl.offsetHeight;
      const viewportHeight = window.innerHeight;
      const focusLine = viewportHeight * 0.35;
      const rawProgress = (focusLine - rect.top) / totalHeight;
      const clamped = Math.max(0, Math.min(1, rawProgress));
      trackEl.style.setProperty(
        "--timeline-progress",
        `${(clamped * 100).toFixed(2)}%`
      );
      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        ticking = true;
        window.requestAnimationFrame(updateProgress);
      }
    };

    const attachListeners = () => {
      if (listenersAttached) return;
      handleScroll();
      window.addEventListener("scroll", handleScroll, { passive: true });
      window.addEventListener("resize", handleScroll);
      listenersAttached = true;
    };

    const detachListeners = () => {
      if (!listenersAttached) return;
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
      listenersAttached = false;
    };

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    );

    const handleMotionChange = (event) => {
      if (event.matches) {
        detachListeners();
        trackEl.style.setProperty("--timeline-progress", "100%");
      } else {
        attachListeners();
      }
    };

    if (prefersReducedMotion.matches) {
      trackEl.style.setProperty("--timeline-progress", "100%");
    } else {
      attachListeners();
    }

    prefersReducedMotion.addEventListener("change", handleMotionChange);

    return () => {
      detachListeners();
      prefersReducedMotion.removeEventListener("change", handleMotionChange);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="experience"
      className="relative py-24 sm:py-32"
    >
      <div className="container mx-auto px-6 sm:px-10 lg:px-24">
        <div className="mx-auto max-w-3xl text-center">
          <span className="font-mono text-xs uppercase tracking-[0.35em] text-[#F948B7]/80">
            Timeline
          </span>
          <h2 className="mt-4 font-heading text-3xl text-white sm:text-4xl lg:text-5xl">
            Projects & Internships
          </h2>
          <p className="mt-4 text-base text-[#B0B0C0] sm:text-lg">
            A curated path of experiments, deployments, and collaborations that refined my engineering instincts.
          </p>
        </div>

        <ol
          ref={trackRef}
          className="timeline-track relative mt-16 flex flex-col gap-14 before:absolute before:left-[18px] before:top-0 before:h-full before:w-px before:-translate-x-1/2 before:rounded-full before:bg-white/10 before:content-[''] lg:gap-16 lg:before:left-1/2"
        >
          {experiences.map((item, index) => {
            const isEven = index % 2 === 0;
            const isLast = index === experiences.length - 1;
            return (
              <li
                key={`${item.title}-${item.date}`}
                className={`relative pl-14 lg:grid lg:items-stretch lg:gap-12 lg:pl-0 lg:grid-cols-[minmax(0,1fr)_110px_minmax(0,1fr)] ${
                  isEven ? "lg:text-right" : "lg:text-left"
                }`}
              >
                <span className="timeline-node absolute left-[18px] top-6 z-10 block h-4 w-4 -translate-x-1/2 rounded-full bg-linear-to-r from-[#8E2DE2] to-[#F948B7] shadow-[0_0_20px_rgba(249,72,183,0.45)] lg:hidden" />

                <div
                  className={`order-2 space-y-5 lg:order-[initial] lg:self-center ${
                    isEven ? "lg:col-start-1" : "lg:col-start-3"
                  }`}
                >
                  <div
                    data-timeline-card
                    className="reveal-up glass-panel group border-white/10 p-8 transition duration-500 hover:border-[#8E2DE2]/50 hover:shadow-[0_32px_65px_rgba(8,8,15,0.55)]"
                  >
                    <header className={`flex flex-col gap-2 ${isEven ? "lg:items-end" : "lg:items-start"}`}>
                      <span className="font-mono text-xs uppercase tracking-[0.35em] text-[#00FFFF]/70">
                        {item.date}
                      </span>
                      <h3 className="font-heading text-2xl text-white sm:text-3xl">
                        {item.title}
                      </h3>
                      <span className="gradient-text text-lg font-semibold">
                        {item.organization}
                      </span>
                    </header>
                    <p className="mt-5 text-sm leading-relaxed text-[#B0B0C0]/90 sm:text-base">
                      {item.description}
                    </p>
                    <div className={`mt-6 flex flex-wrap gap-3 ${isEven ? "lg:justify-end" : "lg:justify-start"}`}>
                      {item.tech.map((tech) => (
                        <span
                          key={`${item.title}-${tech}`}
                          className="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-white/85 transition duration-200 hover:border-[#00FFFF]/50 hover:text-white"
                        >
                          <span className="h-2 w-2 rounded-full bg-[#00FFFF]" />
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className={`mt-6 flex flex-wrap items-center gap-4 ${isEven ? "lg:justify-end" : "lg:justify-start"}`}>
                      {item.links.github && (
                        <a
                          href={item.links.github}
                          target="_blank"
                          rel="noreferrer"
                          className="group inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-sm font-semibold text-white/80 transition hover:border-[#00FFFF]/60 hover:text-white"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="h-5 w-5 text-white/60 transition group-hover:text-[#00FFFF]"
                          >
                            <path d="M12 .5C5.648.5.5 5.648.5 12c0 5.088 3.292 9.39 7.868 10.915.575.102.785-.252.785-.56 0-.276-.01-1.007-.016-1.978-3.201.695-3.876-1.543-3.876-1.543-.523-1.33-1.276-1.684-1.276-1.684-1.043-.713.079-.699.079-.699 1.152.081 1.76 1.183 1.76 1.183 1.026 1.757 2.693 1.25 3.35.956.103-.743.402-1.25.732-1.538-2.554-.291-5.238-1.277-5.238-5.683 0-1.256.45-2.283 1.186-3.087-.119-.292-.515-1.467.112-3.059 0 0 .965-.309 3.163 1.18a10.93 10.93 0 0 1 2.88-.388c.977.005 1.963.132 2.88.388 2.197-1.489 3.16-1.18 3.16-1.18.63 1.592.234 2.767.115 3.06.738.804 1.184 1.83 1.184 3.086 0 4.418-2.69 5.388-5.253 5.673.41.355.776 1.056.776 2.128 0 1.537-.014 2.776-.014 3.155 0 .31.206.67.79.557C20.212 21.386 23.5 17.086 23.5 12 23.5 5.648 18.352.5 12 .5Z" />
                          </svg>
                          View Code
                        </a>
                      )}
                      {item.links.external && (
                        <a
                          href={item.links.external}
                          target="_blank"
                          rel="noreferrer"
                          className="group inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-sm font-semibold text-white/80 transition hover:border-[#F948B7]/60 hover:text-white"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            className="h-5 w-5 text-white/60 transition group-hover:text-[#F948B7]"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 3.75H6.75A2.25 2.25 0 0 0 4.5 6v10.5A2.25 2.25 0 0 0 6.75 18.75H17.25A2.25 2.25 0 0 0 19.5 16.5V9.75m-6 6 6-6m0 0h-3.75m3.75 0V12" />
                          </svg>
                          Live Demo
                        </a>
                      )}
                    </div>
                  </div>
                </div>

                <div className="relative hidden h-full w-full items-center justify-center lg:flex lg:col-start-2">
                  {index !== 0 && (
                    <span
                      data-timeline-line
                      className="reveal-line absolute left-1/2 top-0 h-1/2 w-px -translate-x-1/2 bg-white/10"
                    />
                  )}
                  {!isLast && (
                    <span
                      data-timeline-line
                      className="reveal-line absolute left-1/2 top-1/2 h-1/2 w-px -translate-x-1/2 bg-white/10"
                    />
                  )}
                  <span className="timeline-node absolute left-1/2 top-1/2 z-10 block h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full bg-linear-to-r from-[#8E2DE2] to-[#F948B7] shadow-[0_0_20px_rgba(249,72,183,0.45)]" />
                  <span className="absolute left-1/2 top-1/2 block h-12 w-12 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/15" />
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
};

export default ExperienceSection;
