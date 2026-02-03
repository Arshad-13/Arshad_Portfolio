'use client';

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { IconArrowRight } from "@tabler/icons-react";

import { experiences } from "../data/portfolio";

const ExperienceSection = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);

  return (
    <section ref={sectionRef} id="experience" className="relative py-24 sm:py-32 overflow-hidden">
      {/* Background Grid with Parallax */}
      <motion.div
        style={{ y }}
        className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"
      />

      <div className="container mx-auto px-6 sm:px-10 lg:px-16 relative z-10">
        <div className="flex flex-col items-center mb-20">
          <span className="font-mono text-xs uppercase tracking-[0.35em] text-primary/80 mb-2">
            {"// Career_Log"}
          </span>
          <h2 className="font-heading text-3xl text-white sm:text-4xl lg:text-5xl text-center">
            Mission History
          </h2>
          <div className="mt-4 h-1 w-20 bg-gradient-to-r from-transparent via-primary to-transparent rounded-full" />
        </div>

        <div className="relative max-w-7xl mx-auto">
          {/* Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative h-full"
              >
                {/* Holographic Card */}
                <div className="holo-card rounded-lg group h-full flex flex-col">
                  {/* Scanline Effect */}
                  <div className="scan-line" />

                  {/* Corner Brackets */}
                  <div className="corner-brackets corner-top-left" />
                  <div className="corner-brackets corner-top-right" />
                  <div className="corner-brackets corner-bottom-left" />
                  <div className="corner-brackets corner-bottom-right" />

                  {/* Header Strip */}
                  <div className="flex items-center justify-between p-3 border-b border-primary/10 bg-primary/5">
                    <span className="font-mono text-[10px] text-primary/60 tracking-wider">
                      LOG_ENTRY_{index + 1}
                    </span>
                    <span className={`text-[10px] font-mono px-2 py-0.5 rounded border ${exp.status === 'PUBLISHED' ? 'bg-purple-500/10 text-purple-400 border-purple-500/20' :
                      exp.status === 'WINNER' ? 'bg-yellow-500/10 text-yellow-400 border-yellow-500/20' :
                        'bg-green-500/10 text-green-400 border-green-500/20'
                      }`}>
                      {exp.status}
                    </span>
                  </div>

                  <div className="p-6 flex-1 flex flex-col">
                    <div className="mb-4">
                      <span className="font-mono text-xs text-primary/70 mb-2 block flex items-center gap-2">
                        <span className="w-2 h-2 bg-primary/50 rounded-full" />
                        {exp.date}
                      </span>
                      <h3 className="font-heading text-xl text-white group-hover:text-primary transition-colors duration-300">
                        {exp.title}
                      </h3>
                      <p className="text-sm font-medium text-white/80 mt-1">
                        {exp.organization}
                      </p>
                    </div>

                    <p className="text-sm text-gray-400 leading-relaxed mb-6 font-light flex-1">
                      {exp.description}
                    </p>

                    <div className="mt-auto">
                      <Link
                        href={`/projects/${exp.slug}`}
                        className="inline-flex items-center gap-2 text-primary text-xs font-mono uppercase tracking-wider hover:underline mb-4 group-hover:translate-x-1 transition-transform"
                      >
                        Read Case Study <IconArrowRight className="w-4 h-4 ml-1" />
                      </Link>

                      <div className="flex flex-wrap gap-2 pt-4 border-t border-white/5">
                        {exp.tech.slice(0, 4).map(t => (
                          <span key={t} className="text-[10px] font-mono px-2 py-1 bg-white/5 text-white/60 border border-white/5 group-hover:border-primary/20 group-hover:text-primary/70 transition-colors">
                            {t}
                          </span>
                        ))}
                        {exp.tech.length > 4 && (
                          <span className="text-[10px] font-mono px-2 py-1 bg-white/5 text-white/60 border border-white/5">+{exp.tech.length - 4}</span>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Decorative Footer */}
                  <div className="h-1 w-full bg-gradient-to-r from-transparent via-primary/20 to-transparent group-hover:via-primary/50 transition-all duration-500" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
