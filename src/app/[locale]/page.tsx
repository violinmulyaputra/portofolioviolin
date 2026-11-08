import { Hero } from "@/components/hero/Hero";
import { CertificatesSection } from "@/components/sections/CertificatesSection";
import { ExperiencesSection } from "@/components/sections/ExperiencesSection";

export default function HomePage() {
  return (
    <main id="main-content" tabIndex={-1} className="flex-1 outline-none">
      <Hero />
      <ExperiencesSection spacingBottom="pair" />
      <CertificatesSection spacingTop="pair" spacingBottom="footer" />
    </main>
  );
}
