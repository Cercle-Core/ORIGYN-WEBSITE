import { Hero } from '@/components/sections/hero';
import { FoundationChecklist } from '@/components/sections/foundation-checklist';

export default function Home() {
  return (
    <main className="container py-8 md:py-12">
      <Hero />
      <FoundationChecklist />
    </main>
  );
}
