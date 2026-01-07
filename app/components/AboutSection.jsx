'use client';

import { toolkit, achievements, bio } from "../data/portfolio";

const AboutSection = () => {
  return (
    <section id="about" className="relative py-24 sm:py-32 overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mx-auto max-w-6xl">
          {/* Section Header */}
          <div className="mb-16 text-center">
            <span className="inline-block px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-mono uppercase tracking-widest mb-4">
              About Me
            </span>
            <h2 className="font-heading text-4xl sm:text-5xl text-white mb-4">
              <span className="text-primary">{'<'}</span>
              System Overview
              <span className="text-primary">{' />'}</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12">
            {/* Left Column - Bio */}
            <div className="order-2 flex flex-col gap-6 lg:order-1">
              <div className="tech-border p-6 bg-black/40">
                <h2 className="font-heading text-2xl text-white mb-4 flex items-center gap-2">
                  <span className="text-primary text-sm font-mono">01.</span>
                  {bio.heading}
                </h2>
                <div className="space-y-4 text-sm leading-relaxed text-muted-foreground">
                  <p>{bio.description1}</p>
                  <p>{bio.description2}</p>
                </div>
                <div className="mt-6 flex flex-col gap-2 border-t border-white/10 pt-4">
                  <div className="flex items-center gap-2 text-xs">
                    <span className="text-white/40 font-mono">LOCATION:</span>
                    <span className="text-white">{bio.location}</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs">
                    <span className="text-white/40 font-mono">STATUS:</span>
                    <span className="text-primary">{bio.status}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Skills & Achievements */}
            <div className="order-1 flex flex-col gap-8 lg:order-2">
              {/* Image Removed as per request */}

              <div className="glass-card p-6">
                <span className="font-mono text-xs uppercase tracking-[0.35em] text-primary/75 block mb-6">
                  {"// System_Modules"}
                </span>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {toolkit.map((group, idx) => (
                    <div
                      key={group.title}
                      className="group relative p-4 bg-white/5 border border-white/10 hover:border-primary/50 transition-all duration-300 overflow-hidden hover:shadow-[0_0_15px_rgba(0,243,255,0.1)] hover:-translate-y-1"
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <div className="absolute -right-8 -top-8 w-24 h-24 bg-primary/10 blur-3xl group-hover:bg-primary/20 transition-colors duration-300" />

                      {/* Inner Corners */}
                      <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-white/20 group-hover:border-primary/50 transition-colors" />
                      <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-white/20 group-hover:border-primary/50 transition-colors" />

                      <h3 className="font-heading text-lg text-white mb-3 relative z-10 flex items-center gap-2">
                        <span className="text-primary text-xs font-mono">0{idx + 1}.</span>
                        {group.title}
                      </h3>

                      <div className="flex flex-wrap gap-2 relative z-10">
                        {group.items.map((item) => (
                          <span
                            key={item}
                            className="text-[10px] font-mono px-2 py-1 text-white/70 bg-black/50 border border-white/10 rounded group-hover:border-primary/30 group-hover:text-white group-hover:bg-primary/10 transition-colors cursor-default"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Achievements Section */}
              <div className="tech-border p-6 bg-black/40">
                <span className="font-mono text-xs uppercase tracking-[0.35em] text-secondary/75 block mb-6">
                  {"// Achievements"}
                </span>
                <ul className="space-y-3">
                  {achievements.map((achievement, idx) => (
                    <li key={idx} className="flex items-start gap-3 group">
                      <span className="text-secondary mt-1 text-xs font-mono shrink-0 group-hover:scale-125 transition-transform">▹</span>
                      <span className="text-sm text-muted-foreground group-hover:text-white transition-colors">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
