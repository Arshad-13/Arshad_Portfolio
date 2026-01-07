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

        <div className="flex flex-col items-center mb-16">
          <span className="font-mono text-xs uppercase tracking-[0.35em] text-primary/80 mb-2">
            {"// Career_Log"}
          </span>
          <h2 className="font-heading text-3xl text-white sm:text-4xl lg:text-5xl text-center">
            Mission History
          </h2>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Central Timeline Line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-primary/50 to-transparent -translate-x-1/2 hidden md:block" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative pl-8 md:pl-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12 md:ml-auto md:text-left'}`}
              >
                {/* Timeline Node */}
                <div className="absolute left-0 md:left-1/2 top-0 w-4 h-4 -translate-x-[5px] md:-translate-x-1/2 z-10">
                  <div className="w-full h-full bg-black border border-primary rounded-full shadow-[0_0_10px_var(--primary)]" />
                  <div className="absolute inset-0 bg-primary/50 animate-ping rounded-full" />
                </div>

                {/* Content Card */}
                <div className="flex-1 ml-6 md:ml-0">
                  <div className="tech-border p-6 bg-black/60 group hover:bg-black/80 transition-colors">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <span className="font-mono text-xs text-primary/70 mb-1 block">{exp.date}</span>
                        <h3 className="font-heading text-xl text-white group-hover:text-primary transition-colors">{exp.title}</h3>
                        <p className="text-sm text-muted-foreground mt-1">{exp.organization}</p>
                      </div>
                      <span className={`text-[10px] font-mono px-2 py-0.5 rounded border ${exp.status === 'PUBLISHED' ? 'bg-purple-500/10 text-purple-400 border-purple-500/20' :
                        exp.status === 'WINNER' ? 'bg-yellow-500/10 text-yellow-400 border-yellow-500/20' :
                          'bg-green-500/10 text-green-400 border-green-500/20'
                        }`}>
                        {exp.status}
                      </span>
                    </div>

                    <p className="text-sm text-gray-400 leading-relaxed mb-6">
                      {exp.description}
                    </p>

                    <Link
                      href={`/projects/${exp.slug}`}
                      className="inline-flex items-center gap-2 text-primary text-xs font-mono uppercase tracking-wider hover:underline mb-6 group-hover:translate-x-1 transition-transform"
                    >
                      Read Case Study <IconArrowRight className="w-4 h-4" />
                    </Link>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {exp.tech.map(t => (
                        <span key={t} className="text-[10px] px-2 py-1 bg-white/5 text-white/70 rounded border border-white/10">
                          {t}
                        </span>
                      ))}
                    </div>

                    <div className="flex gap-4 border-t border-white/5 pt-4">
                      {exp.links.github && (
                        <a href={exp.links.github} target="_blank" rel="noopener noreferrer" className="text-xs flex items-center gap-2 text-white/60 hover:text-primary transition-colors">
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" /></svg>
                          Source Code
                        </a>
                      )}
                      {exp.links.external && (
                        <a href={exp.links.external} target="_blank" rel="noopener noreferrer" className="text-xs flex items-center gap-2 text-white/60 hover:text-primary transition-colors">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>
                          Live Demo
                        </a>
                      )}
                    </div>
                  </div>
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
