'use client';

import Image from "next/image";

const toolkit = [
  {
    title: "Languages & Scripting",
    items: ["Python", "C/C++", "SQL", "JavaScript", "HTML/CSS"],
  },
  {
    title: "AI Stack",
    items: ["TensorFlow", "PyTorch", "scikit-learn", "Keras", "OpenCV", "LangChain", "Gemini 2.5 Flash"],
  },
  {
    title: "Product & Cloud",
    items: ["Next.js", "ReactJS", "FastAPI", "Tailwind", "Firebase", "Docker", "AWS", "GCP"],
  },
];

const achievements = [
  "Top 5 in TRACS @ WASP 2025 (4th Rank on Kaggle Leaderboard)",
  "Winner, Web Wonders 2025 (1st Rank in Fashion Theme)",
  "Finalist, ACM Summer Challenge 2025"
];

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
                // About Me
                </span>
                <div className="flex gap-1">
                    <div className="w-2 h-2 bg-primary/50 rounded-full animate-pulse" />
                    <div className="w-2 h-2 bg-primary/30 rounded-full" />
                    <div className="w-2 h-2 bg-primary/10 rounded-full" />
                </div>
            </div>
            
            <h2 className="font-heading text-3xl text-white sm:text-4xl lg:text-5xl mb-6 leading-tight">
              Engineering <span className="text-primary">AI products</span> with measurable impact
            </h2>
            
            <div className="space-y-4 text-muted-foreground font-light leading-relaxed">
                <p>
                I’m Arshad Khatib, a B.Tech (AI) candidate at the National Institute of Technology, Surat. My work pairs human-centred design with production grade machine learning. I’m eager to contribute on Research and Development in the field of Deep Learning, Natural Language Processing and Computer Vision.
                </p>
                <p>
                I’m passionate about creating tools that make life easier for people as well as building AI solutions that drive business value. I love crafting efficient algorithms that balance performance and scalability to solve real-world problems.
                </p>
            </div>

            <div className="mt-8 flex items-center gap-6 border-t border-white/5 pt-6">
              <div className="flex flex-col">
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-primary/60 mb-1">
                  Location
                </span>
                <span className="font-heading text-lg text-white">Surat · Pune, India</span>
              </div>
              <div className="hidden h-8 w-px bg-white/10 sm:block" />
              <div className="flex flex-col">
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-primary/60 mb-1">
                  Status
                </span>
                <span className="font-heading text-lg text-green-400 flex items-center gap-2">
                    <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                    Open for collaborations
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column - Image & Toolkit */}
        <div className="order-1 flex flex-col gap-8 lg:order-2">
          <div className="relative flex justify-center lg:justify-start">
            <div className="relative w-[260px] sm:w-[320px] lg:w-[360px] group">
              {/* Tech Frame around Image */}
              <div className="absolute -inset-2 border border-primary/30 opacity-50 group-hover:opacity-100 transition-opacity duration-500" 
                   style={{ clipPath: "polygon(0 0, 100% 0, 100% 85%, 85% 100%, 0 100%)" }} />
              <div className="absolute -inset-2 border border-secondary/30 opacity-30 group-hover:opacity-80 transition-opacity duration-500 translate-x-1 translate-y-1" 
                   style={{ clipPath: "polygon(0 0, 100% 0, 100% 85%, 85% 100%, 0 100%)" }} />
              
              <div className="relative overflow-hidden bg-black/50" style={{ clipPath: "polygon(0 0, 100% 0, 100% 85%, 85% 100%, 0 100%)" }}>
                  <Image
                    src="/images/mypic.jpg"
                    width={560}
                    height={640}
                    alt="Arshad portrait"
                    className="relative z-10 w-full object-cover object-top grayscale group-hover:grayscale-0 transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-20" />
                  <div className="absolute bottom-4 left-4 z-30 font-mono text-xs text-primary">
                    ID: ARSHAD_K
                  </div>
              </div>
            </div>
          </div>

          <div className="tech-border p-6 bg-black/40">
            <span className="font-mono text-xs uppercase tracking-[0.35em] text-primary/75 block mb-6">
              // System_Modules
            </span>
            <div className="space-y-8">
              {toolkit.map((group) => (
                <div key={group.title}>
                  <h3 className="font-heading text-lg text-white/90 mb-3 border-b border-white/5 pb-2 inline-block">{group.title}</h3>
                  <div className="flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <span
                        key={item}
                        className="inline-flex items-center gap-2 px-3 py-1 text-xs font-mono text-primary bg-primary/5 border border-primary/20 hover:bg-primary/20 transition-colors cursor-default"
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
              // Achievements
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
    </section>
  );
};

export default AboutSection;
