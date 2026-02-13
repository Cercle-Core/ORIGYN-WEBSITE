import { Section, Container } from '../../components/layout';
import { Button, FadeIn } from '../../components/ui';

export default function AboutPage() {
  return (
    <main className="pt-16">
      {/* Hero */}
      <Section background="primary-800">
        <Container>
          <FadeIn>
            <div className="max-w-2xl">
              <h1 className="text-h1 font-display text-neutral-100 mb-6">
                About ORIGYN
              </h1>
              <p className="text-body-lg text-neutral-400 mb-8">
                Industrial intelligence infrastructure. We bridge AI research and production control systems.
              </p>
              <Button variant="primary">Request Access</Button>
            </div>
          </FadeIn>
        </Container>
      </Section>

      {/* Mission */}
      <Section divider>
        <Container>
          <h2 className="text-h2 font-display text-neutral-100 mb-8">
            Mission
          </h2>
          <p className="text-body-lg text-neutral-400 max-w-2xl mb-8">
            ORIGYN exists to close the gap between AI research and industrial production.
            We build the platform that lets engineers ship AI-powered control systems at scale—
            from data ingestion to real-time actuation.
          </p>
          <h3 className="text-h4 font-display text-neutral-100 mb-4">
            Values
          </h3>
          <ul className="space-y-3 text-body text-neutral-400 max-w-2xl">
            <li className="flex gap-3">
              <span className="text-accent shrink-0">•</span>
              <span><strong className="text-neutral-300">Ship first.</strong> Production-ready beats perfect. We build for engineers who deploy.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-accent shrink-0">•</span>
              <span><strong className="text-neutral-300">Domain depth.</strong> Industrial AI requires understanding control systems, safety, and real-time constraints.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-accent shrink-0">•</span>
              <span><strong className="text-neutral-300">Open collaboration.</strong> We partner with industry, research, and the next generation of engineers.</span>
            </li>
          </ul>
        </Container>
      </Section>

      {/* Team snapshot */}
      <Section background="primary-900">
        <Container>
          <h2 className="text-h2 font-display text-neutral-100 mb-8">
            Team
          </h2>
          <p className="text-body text-neutral-400 max-w-2xl mb-8">
            Engineers and researchers from control systems, AI, and industrial automation.
            We&apos;ve shipped at scale in manufacturing, energy, and aerospace.
          </p>
          <p className="text-body text-neutral-400 max-w-2xl">
            Join us. We&apos;re hiring.
          </p>
          <a
            href="/careers"
            className="inline-flex items-center justify-center h-10 px-6 mt-6 text-body font-medium rounded-md bg-accent text-white hover:bg-accent-hover transition-all duration-200"
          >
            View careers
          </a>
        </Container>
      </Section>

      {/* CTA */}
      <Section background="primary-800">
        <Container>
          <div className="max-w-2xl mx-auto text-center py-12">
            <h2 className="text-h2 font-display text-neutral-100 mb-4">
              Get in touch
            </h2>
            <p className="text-body text-neutral-400 mb-8">
              Investors, partners, press. We&apos;d love to hear from you.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center justify-center h-10 px-6 text-body font-medium rounded-md border border-neutral-600 bg-transparent text-neutral-100 hover:border-neutral-500 hover:bg-neutral-800/50 transition-all duration-200"
            >
              Contact us
            </a>
          </div>
        </Container>
      </Section>
    </main>
  );
}
