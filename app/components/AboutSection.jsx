'use client';



import { toolkit, achievements, bio } from "../data/portfolio";

const AboutSection = () => {
  return (
    <section id="about" className="relative py-24 sm:py-32 overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 blur-[100px] rounded-full -z-10" />

      <div className="container mx-auto grid gap-12 px-6 sm:px-10 lg:grid-cols-[minmax(0,420px)_minmax(0,1fr)] lg:items-start lg:px-16">

        {/* Left Column - Bio */}
        <div className="relative order-2 lg:order-1 group">
          <div className="absolute -left-4 -top-4 z-10 hidden h-16 w-16 items-center justify-center border border-primary/30 bg-black/80 font-mono text-[10px] uppercase tracking-widest text-primary backdrop-blur-md lg:flex clip-path-polygon" style={{ clipPath: "polygon(0 0, 100% 0, 100% 70%, 70% 100%, 0 100%)" }}>
            BIO_DATA
          </div>

          <div className="hud-card p-8 rounded-none border-l-4 border-l-primary bg-black/40 backdrop-blur-sm">
            <div className="flex items-center justify-between mb-6">
              <span className="font-mono text-xs uppercase tracking-[0.35em] text-secondary">
                {"// About Me"}
              </span>
              <div className="flex gap-1">
                <div className="w-2 h-2 bg-primary/50 rounded-full animate-pulse" />
                <div className="w-2 h-2 bg-primary/30 rounded-full" />
                <div className="w-2 h-2 bg-primary/10 rounded-full" />
              </div>
            </div>

            <h2 className="font-heading text-3xl text-white sm:text-4xl lg:text-5xl mb-6 leading-tight">
              {bio.heading}
            </h2>

            <div className="space-y-4 text-muted-foreground font-light leading-relaxed">
              <p>{bio.description1}</p>
              <p>{bio.description2}</p>
            </div>

            <div className="mt-8 flex items-center gap-6 border-t border-white/5 pt-6">
              <div className="flex flex-col">
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-primary/60 mb-1">
                  Location
                </span>
                <span className="font-heading text-lg text-white">{bio.location}</span>
              </div>
              <div className="hidden h-8 w-px bg-white/10 sm:block" />
              <div className="flex flex-col">
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-primary/60 mb-1">
                  Status
                </span>
                <span className="font-heading text-lg text-green-400 flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                  {bio.status}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column - Image & Toolkit */}
        <div className="order-1 flex flex-col gap-8 lg:order-2">
          {/* Image Removed as per request */}

          <div className="tech-border p-6 bg-black/40">
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
              {achievements.map((item, index) => (
                <li key={index} className="flex items-start gap-3 text-sm text-muted-foreground">
                  <span className="text-secondary mt-1">►</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </section >
  );
};

export default AboutSection;
