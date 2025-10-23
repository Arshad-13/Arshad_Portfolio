import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import AboutSection from "./components/AboutSection";
import ExperienceSection from "./components/ExperienceSection";
import ContactSection from "./components/ContactSection";

export default function Home() {
  return (
  <main className="flex min-h-screen flex-col bg-transparent">
        <Navbar />
        <div className="mt-24 flex-1">
          <HeroSection />  
          <AboutSection />
          <ExperienceSection />
          <ContactSection />
        </div>
      </main>
  );
}
