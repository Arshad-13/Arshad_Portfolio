import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import ExperienceSection from "./components/ExperienceSection";
import ContactSection from "./components/ContactSection";
import GameDock from "./components/GameDock";

export default function Home() {
  return (
  <main className="flex min-h-screen flex-col bg-transparent relative">
        <GameDock />
        <div className="flex-1">
          <HeroSection />  
          <AboutSection />
          <ExperienceSection />
          <ContactSection />
        </div>
      </main>
  );
}
