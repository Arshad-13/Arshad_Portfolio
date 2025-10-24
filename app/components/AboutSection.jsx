import Image from "next/image";

const toolkit = [
  {
    title: "Languages & Scripting",
    items: ["Python", "C/C++", "TypeScript", "JavaScript", "SQL"],
  },
  {
    title: "AI Stack",
    items: ["TensorFlow", "PyTorch", "scikit-learn", "OpenCV", "LangChain", "Gemini 2.5 Flash"],
  },
  {
    title: "Product Stack",
    items: ["Next.js", "FastAPI", "Firebase", "Vercel", "Tailwind CSS", "Razorpay API"],
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="relative py-24 sm:py-32">
      <div className="container mx-auto grid gap-12 px-6 sm:px-10 lg:grid-cols-[minmax(0,420px)_minmax(0,1fr)] lg:items-center lg:px-16">
        <div className="relative order-2 lg:order-1">
          <div className="absolute -left-6 top-6 hidden h-24 w-24 rounded-3xl border border-white/10 bg-white/5 font-mono text-[10px] uppercase tracking-[0.35em] text-[#00FFFF]/80 shadow-[0_0_30px_rgba(0,255,255,0.25)] backdrop-blur-lg lg:flex lg:items-center lg:justify-center">
            Bio
          </div>
          <div className="shadow-[0_30px_70px_rgba(8,8,15,0.65)] glass-panel relative overflow-hidden rounded-[28px] border-white/10 p-8">
            <span className="font-mono text-xs uppercase tracking-[0.35em] text-[#F948B7]/80">
              About Me
            </span>
            <h2 className="mt-4 font-heading text-3xl text-white sm:text-4xl lg:text-5xl">
              Engineering AI products with measurable impact
            </h2>
            <p className="mt-6 text-base leading-relaxed text-[#B0B0C0] sm:text-lg">
              I’m Arshad Khatib, a B.Tech (AI) candidate at the National Institute of Technology, Surat. My work pairs human-centred design with production grade machine learning. I’m eager to contribute on Research and Development in the field of Deep Learning, Natural Language Processing and Computer Vision.
            </p>
            <p className="mt-4 text-base leading-relaxed text-[#B0B0C0] sm:text-lg">
              I’m passionate about creating tools that make life easier for people as well as building AI solutions that drive business value. I love crafting efficient algorithms that balance performance and scalability to solve real-world problems.
            </p>
            <div className="mt-8 flex items-center gap-6">
              <div className="flex flex-col">
                <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-[#00FFFF]/70">
                  Based In
                </span>
                <span className="font-heading text-xl text-white">Surat · Pune, India</span>
              </div>
              <div className="hidden h-12 w-px bg-white/10 sm:block" />
              <div className="flex flex-col">
                <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-[#00FFFF]/70">
                  Availability
                </span>
                <span className="font-heading text-xl text-white">Open for collaborations</span>
              </div>
            </div>
          </div>
        </div>
        <div className="order-1 flex flex-col gap-8 lg:order-2">
          <div className="relative flex justify-center lg:justify-start">
            <div className="relative w-[260px] overflow-hidden rounded-[32px] border border-white/10 bg-white/5 p-4 shadow-[0_25px_60px_rgba(8,8,15,0.55)] sm:w-[320px] lg:w-[360px]">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(142,45,226,0.2),transparent_70%)]" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(0,255,255,0.15),transparent_75%)]" />
              <Image
                src="/images/mypic.jpg"
                width={560}
                height={640}
                alt="Arshad portrait"
                className="relative z-10 w-full rounded-[24px] object-cover object-top"
              />
              <div className="pointer-events-none absolute inset-0 rounded-[28px] border border-white/10" />
            </div>
          </div>
          <div className="glass-panel border-white/10 p-8">
            <span className="font-mono text-xs uppercase tracking-[0.35em] text-[#00FFFF]/75">
              My Toolkit
            </span>
            <div className="mt-6 space-y-6">
              {toolkit.map((group) => (
                <div key={group.title}>
                  <h3 className="font-heading text-xl text-white/90">{group.title}</h3>
                  <div className="mt-3 flex flex-wrap gap-3">
                    {group.items.map((item) => (
                      <span
                        key={item}
                        className="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-sm text-white/85 transition duration-200 hover:border-[#00FFFF]/40 hover:text-white"
                      >
                        <span className="h-2 w-2 rounded-full bg-[#00FFFF]/70" />
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
