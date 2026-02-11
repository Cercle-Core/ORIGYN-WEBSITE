import { Hero } from '@/components/sections/hero';
import { FoundationChecklist } from '@/components/sections/foundation-checklist';

export default function Home() {
  return (
    <main className="container" style={{ paddingBlock: '2rem 3rem' }}>
      <Hero />
      <FoundationChecklist />
    </main>
  );
}
