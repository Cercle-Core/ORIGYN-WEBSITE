import { Section, Container, Grid } from '../../components/layout';
import { Button, Card, TechnicalHighlight, FadeIn } from '../../components/ui';

export const metadata = {
  title: 'About',
  description:
    'ORIGYN exists to close the gap between AI research and industrial production. Mission, values, and team building industrial intelligence infrastructure.',
  openGraph: {
    title: 'About | ORIGYN',
    description:
      'ORIGYN exists to close the gap between AI research and industrial production.',
  },
};

function SectionHeader({ eyebrow, title, description, align = 'left' }) {
  const alignClass = align === 'center' ? 'text-center mx-auto' : '';

  return (
    <div className={`max-w-3xl mb-12 ${alignClass}`}>
      {eyebrow && (
        <p className="text-caption uppercase tracking-[0.14em] text-accent mb-4">
          {eyebrow}
        </p>
      )}
      <h2 className="text-h2 font-display text-neutral-100 mb-4">
        {title}
      </h2>
      {description && (
        <p className="text-body text-neutral-400">
          {description}
        </p>
      )}
    </div>
  );
}

export default function AboutPage() {
  return (
    <main className="pt-16">
      <Section background="primary-800" density="hero" divider>
        <Container>
          <FadeIn>
            <div className="grid lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-7">
                <p className="text-caption uppercase tracking-[0.14em] text-accent mb-4">
                  Company
                </p>
                <h1 className="text-h1 font-display text-neutral-100 mb-6">
                  Building industrial intelligence infrastructure
                </h1>
                <p className="text-body-lg text-neutral-300 mb-4 max-w-2xl">
                  ORIGYN bridges AI research and production control systems so engineering teams can ship reliable, high-impact automation.
                </p>
                <p className="text-body text-neutral-500 mb-8 max-w-xl">
                  We combine deep technical expertise in data, modeling, and control with a deployment-first approach built for industrial realities.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                  <Button variant="primary">Request Access</Button>
                  <a
                    href="/careers"
                    className="inline-flex items-center justify-center h-10 px-6 text-body font-medium rounded-md border border-neutral-600 bg-transparent text-neutral-100 hover:border-neutral-500 hover:bg-neutral-800/50 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-primary-900"
                  >
                    View careers
                  </a>
                </div>
                <div className="flex flex-wrap gap-6 text-caption text-neutral-400 border-t border-neutral-800 pt-5">
                  <span>AI + control systems expertise</span>
                  <span>Production-first mindset</span>
                  <span>Industry + research collaboration</span>
                </div>
              </div>

              <div className="lg:col-span-5">
                <div className="rounded-xl border border-accent/30 bg-gradient-to-b from-primary-700/70 to-primary-900 p-6 shadow-[0_0_45px_-24px_rgba(59,130,246,0.6)]">
                  <p className="text-caption uppercase tracking-[0.12em] text-accent mb-5">Company snapshot</p>
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="p-4 rounded-md border border-neutral-800 bg-neutral-900/70">
                        <p className="text-caption text-neutral-500 mb-2">Core disciplines</p>
                        <p className="text-h4 font-display text-neutral-100">Data · Models · Control</p>
                      </div>
                      <div className="p-4 rounded-md border border-neutral-800 bg-neutral-900/70">
                        <p className="text-caption text-neutral-500 mb-2">Operating focus</p>
                        <p className="text-h4 font-display text-neutral-100">Industrial systems</p>
                      </div>
                    </div>
                    <div className="p-4 rounded-md border border-neutral-800 bg-neutral-900/70">
                      <p className="text-caption text-neutral-500 mb-2">Engagement model</p>
                      <p className="text-body text-neutral-300">Collaborative architecture, pilot execution, and production rollout support.</p>
                    </div>
                    <p className="text-caption text-neutral-500">Focused on turning research-grade intelligence into production-grade outcomes.</p>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        </Container>
      </Section>

      <Section density="default" divider>
        <Container>
          <SectionHeader
            eyebrow="Purpose"
            title="Mission and values"
            description="Everything we build is shaped by one goal: making advanced AI usable in real industrial operations."
          />
          <Grid>
            <div className="col-span-4 md:col-span-8 lg:col-span-6">
              <Card
                variant="featured"
                title="Mission"
                description="ORIGYN closes the gap between AI research and industrial production by delivering a platform for end-to-end intelligence—from ingestion to real-time actuation."
              />
            </div>
            <div className="col-span-4 md:col-span-4 lg:col-span-6">
              <div className="grid gap-4 h-full">
                <Card
                  title="Ship first"
                  description="Production-ready beats perfect. We build for teams that deploy in real environments."
                />
                <Card
                  title="Domain depth"
                  description="Industrial AI demands control-system knowledge, safety awareness, and real-time constraints."
                />
                <Card
                  title="Open collaboration"
                  description="We partner with industry, research institutions, and the next generation of engineers."
                />
              </div>
            </div>
          </Grid>
        </Container>
      </Section>

      <Section background="primary-900" density="compact" divider>
        <Container>
          <SectionHeader
            eyebrow="People"
            title="Team and capability"
            description="Our team combines research depth with practical industrial deployment experience."
          />
          <Grid>
            <div className="col-span-4 md:col-span-4 lg:col-span-4">
              <TechnicalHighlight title="Control systems engineering">
                <p>
                  Expertise in deterministic execution, safety interlocks, and control-loop design for production environments.
                </p>
              </TechnicalHighlight>
            </div>
            <div className="col-span-4 md:col-span-4 lg:col-span-4">
              <TechnicalHighlight title="Applied AI and optimization">
                <p>
                  Practical model development pipelines that prioritize measurable operational improvements over prototype metrics.
                </p>
              </TechnicalHighlight>
            </div>
            <div className="col-span-4 md:col-span-8 lg:col-span-4">
              <TechnicalHighlight title="Industrial deployment execution">
                <p>
                  Experience shipping across manufacturing, energy, and aerospace with architecture patterns that scale.
                </p>
              </TechnicalHighlight>
            </div>
          </Grid>
          <div className="mt-8">
            <a
              href="/careers"
              className="inline-flex items-center gap-2 text-caption text-accent hover:text-accent-hover transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-primary-900 rounded"
            >
              Join our team <span aria-hidden="true">→</span>
            </a>
          </div>
        </Container>
      </Section>

      <Section background="primary-800" density="default">
        <Container>
          <div className="max-w-3xl mx-auto text-center py-8 rounded-xl border border-accent/25 bg-gradient-to-b from-primary-700/40 to-primary-900/50 px-6">
            <p className="text-caption uppercase tracking-[0.14em] text-accent mb-4">Connect</p>
            <h2 className="text-h2 font-display text-neutral-100 mb-4">
              Get in touch
            </h2>
            <p className="text-body text-neutral-400 mb-8">
              Investors, partners, press, and collaborators—let’s explore how to accelerate industrial intelligence together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center justify-center h-10 px-6 text-body font-medium rounded-md bg-accent text-white hover:bg-accent-hover transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-primary-900"
              >
                Contact us
              </a>
              <a
                href="/careers"
                className="inline-flex items-center justify-center h-10 px-6 text-body font-medium rounded-md border border-neutral-600 bg-transparent text-neutral-100 hover:border-neutral-500 hover:bg-neutral-800/50 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-primary-900"
              >
                View careers
              </a>
            </div>
          </div>
        </Container>
      </Section>
    </main>
  );
}
