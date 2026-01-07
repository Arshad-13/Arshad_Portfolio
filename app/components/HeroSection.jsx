'use client';

import Link from "next/link";
import { TypeAnimation } from "react-type-animation";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import Tilt from 'react-parallax-tilt';
import ParticleBackground from "./ui/ParticleBackground";

import { roles, focusAreas } from "../data/portfolio";

const HeroSection = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);
  const y = useTransform(scrollYProgress, [0, 0.5], [0, 100]);

  const [stats, setStats] = useState({ level: 0, exp: 0 });
  const [targetStats, setTargetStats] = useState({ level: 19, exp: 0 });

  useEffect(() => {
    const birthDate = new Date("2006-05-13");
    const now = new Date();

    let age = now.getFullYear() - birthDate.getFullYear();
    const m = now.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && now.getDate() < birthDate.getDate())) {
      age--;
    }

    // Calculate EXP (progress to next birthday)
    const lastBirthday = new Date(now.getFullYear(), birthDate.getMonth(), birthDate.getDate());
    if (now < lastBirthday) {
      lastBirthday.setFullYear(lastBirthday.getFullYear() - 1);
    }
    const nextBirthday = new Date(lastBirthday);
    nextBirthday.setFullYear(nextBirthday.getFullYear() + 1);

    const totalTime = nextBirthday - lastBirthday;
    const timePassed = now - lastBirthday;
    const percentage = (timePassed / totalTime) * 100;

    setTargetStats({
      level: age,
      exp: parseFloat(percentage.toFixed(1))
    });
  }, []);

  // Count-up animation
  useEffect(() => {
    const duration = 2000; // 2 seconds
    const steps = 60;
    const stepDuration = duration / steps;
    let currentStep = 0;

    const interval = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;

      setStats({
        level: Math.floor(targetStats.level * progress),
        exp: parseFloat((targetStats.exp * progress).toFixed(1))
      });

      if (currentStep >= steps) {
        setStats(targetStats);
        clearInterval(interval);
      }
    }, stepDuration);

    return () => clearInterval(interval);
  }, [targetStats]);

  return (
    <section ref={targetRef} className="relative overflow-hidden min-h-screen flex items-center justify-center perspective-1000">
      {/* HUD Overlay - Fixed to viewport */}
      <div className="absolute inset-0 pointer-events-none z-50 select-none">
        {/* Corners */}
        <div className="absolute top-8 left-8 w-16 h-16 border-l-2 border-t-2 border-primary/50 rounded-tl-lg" />
        <div className="absolute top-8 right-8 w-16 h-16 border-r-2 border-t-2 border-primary/50 rounded-tr-lg" />
        <div className="absolute bottom-8 left-8 w-16 h-16 border-l-2 border-b-2 border-primary/50 rounded-bl-lg" />
        <div className="absolute bottom-8 right-8 w-16 h-16 border-r-2 border-b-2 border-primary/50 rounded-br-lg" />

        {/* Crosshairs */}
        <div className="absolute top-1/2 left-8 w-4 h-[1px] bg-primary/30" />
        <div className="absolute top-1/2 right-8 w-4 h-[1px] bg-primary/30" />
        <div className="absolute top-8 left-1/2 w-[1px] h-4 bg-primary/30" />
        <div className="absolute bottom-8 left-1/2 w-[1px] h-4 bg-primary/30" />

        {/* Scanline */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent h-[20%] animate-scanline opacity-20" />
      </div>

      {/* Background Grid & Effects */}
      <div className="absolute inset-0 -z-10">
        <ParticleBackground />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
        <div className="absolute top-0 left-0 right-0 h-[500px] bg-primary/5 blur-[120px] rounded-full mix-blend-screen" />
        <div className="absolute bottom-0 right-0 h-[500px] w-[500px] bg-secondary/5 blur-[120px] rounded-full mix-blend-screen" />

        {/* Moving Grid Floor */}
        <div className="absolute bottom-0 left-0 right-0 h-[30vh] bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [transform:perspective(500px)_rotateX(60deg)] origin-bottom animate-grid-flow opacity-30" />
      </div>

      <motion.div
        style={{ opacity, scale, y }}
        className="container mx-auto px-6 sm:px-10 lg:px-16 relative z-10"
      >
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-12 text-center lg:items-center lg:text-left lg:flex-row lg:justify-between">

          {/* Left Content */}
          <div className="flex flex-col gap-6 flex-1 relative">
            {/* Decorative Line */}
            <div className="absolute -left-8 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-primary/30 to-transparent hidden lg:block" />

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/30 bg-primary/5 w-fit mx-auto lg:mx-0 backdrop-blur-sm"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              <span className="font-mono text-xs uppercase tracking-widest text-primary">
                System Online
              </span>
            </motion.div>

            <h1 className="font-heading text-5xl leading-none text-white sm:text-7xl lg:text-8xl tracking-tighter relative">
              <span className="absolute -left-4 -top-4 text-xs font-mono text-white/20 hidden lg:block">01</span>
              HI, I'M <br />
              <span className="glitch-effect chromatic-text text-transparent bg-clip-text bg-gradient-to-r from-primary via-white to-secondary" data-text="ARSHAD">
                ARSHAD
              </span>
            </h1>

            <div className="flex flex-col items-center gap-2 text-muted-foreground lg:flex-row lg:items-end lg:gap-3">
              <span className="font-mono text-lg text-primary/80">{'>'}_ I am a</span>
              <TypeAnimation
                preRenderFirstString
                sequence={roles.flatMap((role) => [role, 2000])}
                wrapper="span"
                speed={60}
                deletionSpeed={45}
                className="font-heading text-2xl text-white sm:text-3xl uppercase tracking-wide"
                repeat={Infinity}
              />
            </div>

            <p className="mx-auto max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg font-light lg:mx-0 border-l-2 border-primary/20 pl-4 bg-gradient-to-r from-primary/5 to-transparent">
              Architecting intelligence from chaos. I fuse <span className="text-white font-medium">neural networks</span> with <span className="text-white font-medium">immersive interfaces</span> to build the next generation of digital experiences.
            </p>

            <div className="flex flex-col gap-4 sm:flex-row sm:items-center justify-center lg:justify-start mt-4">
              <Link
                href="#contact"
                className="group relative inline-flex items-center justify-center px-8 py-3 font-bold text-black transition-all duration-200 bg-[#00f3ff] font-heading uppercase tracking-widest hover:bg-white hover:scale-105 clip-path-button shadow-[0_0_20px_rgba(0,243,255,0.3)] hover:shadow-[0_0_30px_rgba(0,243,255,0.6)]"
                style={{ clipPath: "polygon(10% 0, 100% 0, 100% 70%, 90% 100%, 0 100%, 0 30%)" }}
              >
                <span>Initialize Protocol</span>
                <div className="absolute inset-0 -z-10 bg-[#00f3ff]/50 blur-lg group-hover:opacity-100 opacity-0 transition-opacity duration-200" />
              </Link>

              <a
                href="/Arshad_Khatib_Resume.pdf"
                className="group relative inline-flex items-center justify-center px-8 py-3 font-bold text-[#00f3ff] transition-all duration-200 border border-[#00f3ff]/30 bg-transparent font-heading uppercase tracking-widest hover:bg-[#00f3ff]/10 hover:border-[#00f3ff] clip-path-button"
                style={{ clipPath: "polygon(10% 0, 100% 0, 100% 70%, 90% 100%, 0 100%, 0 30%)" }}
              >
                <span>Access Data (CV)</span>
              </a>
            </div>
          </div>

          {/* Right Content - Holographic/Tech Visual */}
          <div className="relative hidden lg:block w-[500px] h-[500px] perspective-1000">
            {/* Rotating Rings */}
            <div className="absolute inset-0 border border-primary/20 rounded-full animate-[spin_10s_linear_infinite] border-t-transparent border-l-transparent" />
            <div className="absolute inset-8 border border-dashed border-secondary/20 rounded-full animate-[spin_15s_linear_infinite_reverse]" />
            <div className="absolute inset-16 border-2 border-white/5 rounded-full animate-pulse" />

            {/* Central Core */}
            <div className="absolute inset-0 flex items-center justify-center">
              <Tilt
                tiltMaxAngleX={15}
                tiltMaxAngleY={15}
                perspective={1000}
                scale={1.05}
                transitionSpeed={2000}
                gyroscope={true}
              >
                <motion.div
                  animate={{
                    rotateY: [0, 10, 0, -10, 0],
                    rotateX: [0, 5, 0, -5, 0]
                  }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                  className="w-72 h-72 bg-gradient-to-tr from-primary/10 to-secondary/10 rounded-full backdrop-blur-md border border-white/10 flex items-center justify-center relative overflow-hidden shadow-[0_0_50px_rgba(0,243,255,0.2)]"
                >
                  <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20 animate-grid-scroll" />

                  {/* Central Data */}
                  <div className="text-center z-10 relative">
                    <div className="absolute -top-8 left-1/2 -translate-x-1/2 text-[10px] font-mono text-white/40">SYS_ID: 0X2A</div>
                    <div className="text-5xl font-bold text-white font-heading tracking-tighter glitch-effect" data-text={`LVL. ${stats.level}`}>LVL. {stats.level}</div>
                    <div className="text-xs text-primary font-mono mt-2 border-t border-primary/30 pt-1">EXP: {stats.exp}%</div>

                    {/* Progress Bar */}
                    <div className="w-32 h-1 bg-white/10 mt-2 rounded-full overflow-hidden mx-auto">
                      <div className="h-full bg-primary transition-all duration-1000" style={{ width: `${stats.exp}%` }} />
                    </div>
                  </div>
                </motion.div>
              </Tilt>
            </div>

            {/* Floating Stats Cards - Orbiting */}
            {focusAreas.map((area, index) => (
              <motion.div
                key={area.label}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 + index * 0.2 }}
                className={`absolute 
                        ${index === 0 ? '-right-4 top-32' : index === 1 ? '-left-4 bottom-40' : 'right-10 bottom-10'} 
                        bg-black/90 backdrop-blur-xl border border-white/10 p-4 rounded-lg flex items-center gap-3 shadow-[0_0_20px_rgba(0,0,0,0.5)] max-w-[220px] group hover:border-primary/50 transition-colors cursor-default`}
              >
                <div className="absolute -top-1 -left-1 w-2 h-2 border-t border-l border-white/50" />
                <div className="absolute -bottom-1 -right-1 w-2 h-2 border-b border-r border-white/50" />

                <div className={`w-2 h-2 rounded-full ${area.accent} shadow-[0_0_10px_currentColor] group-hover:scale-125 transition-transform`} />
                <div className="flex flex-col">
                  <span className="text-[10px] font-mono text-white/40 leading-none mb-1">MODULE_0{index + 1}</span>
                  <span className="text-xs font-bold font-exo text-white uppercase tracking-wider">{area.label}</span>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
