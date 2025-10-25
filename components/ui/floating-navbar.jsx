"use client";
import React, { useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { cn } from "@/lib/utils";


export const FloatingNav = ({
  navItems,
  className
}) => {
  const { scrollYProgress } = useScroll();

  const [visible, setVisible] = useState(false);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    // Check if current is not undefined and is a number
    if (typeof current === "number") {
      let direction = current - scrollYProgress.getPrevious();

      if (scrollYProgress.get() < 0.05) {
        setVisible(false);
      } else {
        if (direction < 0) {
          setVisible(true);
        } else {
          setVisible(false);
        }
      }
    }
  });

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{
          opacity: 1,
          y: -100,
        }}
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0,
        }}
        transition={{
          duration: 0.2,
        }}
        className={cn(
          "flex max-w-fit fixed top-10 inset-x-0 mx-auto border border-white/10 rounded-full bg-[#0B0B11]/70 shadow-[0_20px_60px_rgba(8,8,15,0.45)] backdrop-blur-xl z-[5000] pr-2 pl-8 py-2 items-center justify-center space-x-4",
          className
        )}>
        {/* Logo */}
        <a href="/" className="flex items-center gap-2 mr-2">
          <span className="gradient-text text-lg font-semibold tracking-[0.22em] uppercase">
            Arshad<span className="text-slate-400 font-bold text-2xl">.</span>
          </span>
        </a>
        
        {/* Separator */}
        <div className="h-6 w-px bg-white/10" />
        
        {navItems.map((navItem, idx) => (
          <a
            key={`link=${idx}`}
            href={navItem.link}
            className={cn(
              "relative text-white/90 items-center flex space-x-1 hover:text-white transition-colors"
            )}>
            <span className="block sm:hidden">{navItem.icon}</span>
            <span className="hidden sm:block text-sm">{navItem.name}</span>
          </a>
        ))}
        <a
          href="#contact"
          className="border text-sm font-semibold relative border-white/15 bg-white/5 text-white/90 px-5 py-2 rounded-full uppercase tracking-[0.18em] transition hover:border-transparent hover:bg-[linear-gradient(90deg,#8E2DE2,#F948B7)] hover:text-white focus:outline-none focus:ring-2 focus:ring-[#F948B7]/60">
          <span>Contact Me</span>
          <span
            className="absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-[linear-gradient(90deg,rgba(142,45,226,0.3),rgba(249,72,183,0.5),rgba(0,255,255,0.25))] h-px" />
        </a>
      </motion.div>
    </AnimatePresence>
  );
};
