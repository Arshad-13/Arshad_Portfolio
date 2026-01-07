'use client';

import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { AnimatePresence } from "framer-motion";

import HeroSection from "./components/HeroSection";
import GameDock from "./components/GameDock";
import Loader from "./components/ui/loader";
import ScrollProgress from "./components/ui/ScrollProgress";
import SectionDivider from "./components/ui/SectionDivider";

// Lazy load heavy sections
const AboutSection = dynamic(() => import("./components/AboutSection"), {
  loading: () => <div className="h-96 w-full bg-black/5 animate-pulse" />,
});
const ExperienceSection = dynamic(() => import("./components/ExperienceSection"), {
  loading: () => <div className="h-96 w-full bg-black/5 animate-pulse" />,
});
const ContactSection = dynamic(() => import("./components/ContactSection"), {
  loading: () => <div className="h-96 w-full bg-black/5 animate-pulse" />,
});

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && (
          <Loader key="loader" onLoadingComplete={() => setIsLoading(false)} />
        )}
      </AnimatePresence>

      <ScrollProgress />

      <main className="flex min-h-screen flex-col bg-transparent relative">
        {!isLoading && (
          <>
            <GameDock />
            <div className="flex-1">
              <HeroSection />
              <SectionDivider />
              <AboutSection />
              <SectionDivider />
              <ExperienceSection />
              <SectionDivider />
              <ContactSection />
            </div>
          </>
        )}
      </main>
    </>
  );
}
