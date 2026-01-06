'use client';

import { use } from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { motion } from 'framer-motion';
import { IconArrowLeft, IconBrandGithub, IconExternalLink, IconCheck } from '@tabler/icons-react';
import { experiences } from '@/app/data/portfolio';

export default function ProjectPage({ params }) {
    // Unwrap params using React.use()
    const unwrappedParams = use(params);
    const slug = unwrappedParams.slug;

    const project = experiences.find(p => p.slug === slug);

    if (!project) {
        notFound();
    }

    return (
        <main className="min-h-screen bg-black text-white selection:bg-primary/30">
            {/* Background Effects */}
            <div className="fixed inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none z-0" />
            <div className="fixed top-0 left-0 w-full h-full bg-gradient-to-b from-black via-transparent to-black pointer-events-none z-0" />

            <article className="relative z-10 pt-24 pb-20 container mx-auto px-6 lg:px-20 max-w-5xl">
                {/* Back Link */}
                <Link
                    href="/#experience"
                    className="inline-flex items-center gap-2 text-primary/60 hover:text-primary transition-colors mb-8 group"
                >
                    <IconArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                    <span className="font-mono text-xs uppercase tracking-widest">Return to Base</span>
                </Link>

                {/* Header Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="mb-16"
                >
                    <div className="flex items-center gap-4 mb-4">
                        <span className="px-3 py-1 rounded-full border border-primary/30 bg-primary/5 text-primary text-xs font-mono uppercase tracking-wider">
                            {project.status.replace('_', ' ')}
                        </span>
                        <span className="text-muted-foreground font-mono text-xs uppercase tracking-widest">
                            {project.date}
                        </span>
                    </div>

                    <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl text-white mb-6 leading-tight">
                        {project.title}
                    </h1>

                    <p className="text-xl text-gray-400 font-light leading-relaxed max-w-3xl border-l-4 border-primary/50 pl-6">
                        {project.description}
                    </p>

                    {/* Links */}
                    <div className="flex flex-wrap gap-4 mt-8">
                        {project.links.github && (
                            <a
                                href={project.links.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 px-6 py-3 bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/30 text-white rounded-lg transition-all"
                            >
                                <IconBrandGithub className="w-5 h-5" />
                                <span className="font-mono text-sm uppercase tracking-wide">Source Code</span>
                            </a>
                        )}
                        {project.links.external && (
                            <a
                                href={project.links.external}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 px-6 py-3 bg-primary text-black font-bold rounded-lg hover:bg-white hover:text-black transition-all shadow-[0_0_20px_rgba(0,243,255,0.2)]"
                            >
                                <IconExternalLink className="w-5 h-5" />
                                <span className="font-mono text-sm uppercase tracking-wide">Live Demo</span>
                            </a>
                        )}
                    </div>
                </motion.div>

                {/* Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    {/* Main Content */}
                    <div className="lg:col-span-2 space-y-12">
                        {/* Problem & Solution */}
                        <section className="space-y-8">
                            <div className="group">
                                <h2 className="flex items-center gap-3 font-heading text-2xl text-white mb-4">
                                    <span className="text-primary opacity-50 text-base font-mono">01.</span>
                                    The Challenge
                                </h2>
                                <p className="text-gray-400 leading-relaxed pl-8 border-l border-white/10 group-hover:border-primary/50 transition-colors">
                                    {project.details?.problem || "Problem statement under compilation..."}
                                </p>
                            </div>

                            <div className="group">
                                <h2 className="flex items-center gap-3 font-heading text-2xl text-white mb-4">
                                    <span className="text-secondary opacity-50 text-base font-mono">02.</span>
                                    The Solution
                                </h2>
                                <p className="text-gray-400 leading-relaxed pl-8 border-l border-white/10 group-hover:border-secondary/50 transition-colors">
                                    {project.details?.solution || "Solution architecture under compilation..."}
                                </p>
                            </div>
                        </section>

                        {/* Impact Stats */}
                        {project.details?.impact && (
                            <section className="bg-gradient-to-br from-primary/10 to-transparent p-8 rounded-2xl border border-primary/20">
                                <h3 className="font-heading text-xl text-white mb-2">Project Impact</h3>
                                <p className="text-primary/80 font-mono text-sm leading-relaxed">
                                    {project.details.impact}
                                </p>
                            </section>
                        )}
                    </div>

                    {/* Sidebar */}
                    <aside className="space-y-8">
                        {/* Tech Stack */}
                        <div className="p-6 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm">
                            <h3 className="font-mono text-xs uppercase tracking-widest text-gray-500 mb-6 border-b border-white/10 pb-2">
                                System Architecture
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                {project.tech.map(t => (
                                    <span key={t} className="px-3 py-1 bg-black/50 border border-white/10 rounded text-xs text-primary font-mono whitespace-nowrap">
                                        {t}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Key Features */}
                        {project.details?.features && (
                            <div className="p-6 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm">
                                <h3 className="font-mono text-xs uppercase tracking-widest text-gray-500 mb-6 border-b border-white/10 pb-2">
                                    Core Modules
                                </h3>
                                <ul className="space-y-3">
                                    {project.details.features.map((feature, i) => (
                                        <li key={i} className="flex items-start gap-3">
                                            <IconCheck className="w-4 h-4 text-green-400 mt-1 shrink-0" />
                                            <span className="text-sm text-gray-300">{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </aside>
                </div>

            </article>
        </main>
    );
}

export async function generateStaticParams() {
    return experiences.map((project) => ({
        slug: project.slug,
    }));
}
