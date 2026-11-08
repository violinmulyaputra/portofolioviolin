import { Hero } from "@/components/hero/Hero";
import { CertificatesSection } from "@/components/sections/CertificatesSection";
import { ExperiencesSection } from "@/components/sections/ExperiencesSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { PROJECTS } from "@/data/projects";

export default function HomePage() {
  const hasProjects = PROJECTS.length > 0;

  return (
    <main id="main-content" tabIndex={-1} className="flex-1 outline-none">
      <Hero />
      <ProjectsSection spacingBottom="pair" />
      <ExperiencesSection
        spacingTop={hasProjects ? "pair" : "section"}
        spacingBottom="pair"
      />
      <CertificatesSection spacingTop="pair" spacingBottom="footer" />
    </main>
  );
}
