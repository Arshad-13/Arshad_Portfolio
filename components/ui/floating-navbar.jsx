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
          "flex max-w-fit fixed top-10 inset-x-0 mx-auto border border-[rgba(0,243,255,0.3)] rounded-none bg-[#030305]/90 shadow-[0_0_20px_rgba(0,243,255,0.15)] backdrop-blur-md z-[5000] pr-4 pl-6 py-3 items-center justify-center space-x-6 clip-path-polygon",
          className
        )}
        style={{
          clipPath: "polygon(10% 0, 100% 0, 100% 70%, 90% 100%, 0 100%, 0 30%)"
        }}
      >
        {/* Logo */}
        <a href="/" className="flex items-center gap-2 mr-2 group">
          <span className="text-primary text-xl font-bold tracking-widest uppercase font-heading group-hover:text-secondary transition-colors duration-300">
            Arshad<span className="text-white animate-pulse">_</span>
          </span>
        </a>
        
        {/* Separator */}
        <div className="h-6 w-px bg-primary/30" />
        
        {navItems.map((navItem, idx) => (
          <a
            key={`link=${idx}`}
            href={navItem.link}
            className={cn(
              "relative text-gray-300 items-center flex space-x-1 hover:text-primary transition-colors font-mono text-sm uppercase tracking-wider",
            )}>
            <span className="block sm:hidden">{navItem.icon}</span>
            <span className="hidden sm:block">{navItem.name}</span>
          </a>
        ))}
        <a
          href="#contact"
          className="relative px-6 py-2 bg-primary/10 border border-primary/50 text-primary font-bold uppercase tracking-widest text-xs hover:bg-primary hover:text-black transition-all duration-300 clip-path-button"
          style={{
             clipPath: "polygon(10% 0, 100% 0, 100% 70%, 90% 100%, 0 100%, 0 30%)"
          }}
        >
          <span>Initialize</span>
        </a>
      </motion.div>
    </AnimatePresence>
  );
};
