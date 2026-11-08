import { Hero } from "@/components/hero/Hero";
import { ExperiencesSection } from "@/components/sections/ExperiencesSection";

export default function HomePage() {
  return (
    <main id="main-content" tabIndex={-1} className="flex-1 outline-none">
      <Hero />
      <ExperiencesSection />
    </main>
  );
}
