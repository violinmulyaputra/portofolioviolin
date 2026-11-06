import { Hero } from "@/components/hero/Hero";

export default function HomePage() {
  return (
    <main id="main-content" tabIndex={-1} className="flex-1 outline-none">
      <Hero />
    </main>
  );
}
