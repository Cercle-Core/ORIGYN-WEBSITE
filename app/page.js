import { Section, Container, Grid } from '../components/layout';
import {
  Button,
  Card,
  ArchitectureDiagram,
  IndustryTile,
  TechnicalHighlight,
  FadeIn,
} from '../components/ui';

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

export default function Home() {
  return (
    <main className="pt-16">
      <Section background="primary-800" density="hero" divider>
        <Container>
          <FadeIn>
            <div className="grid lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-7">
                <p className="text-caption uppercase tracking-[0.14em] text-accent mb-4">
                  Industrial AI platform
                </p>
                <h1 className="text-h1 font-display text-neutral-100 mb-6">
                  Industrial intelligence infrastructure
                </h1>
                <p className="text-body-lg text-neutral-300 mb-4 max-w-2xl">
                  Bridge the gap between AI research and production control systems.
                </p>
                <p className="text-body text-neutral-500 mb-8 max-w-xl">
                  One platform for ingestion, model orchestration, and low-latency actuation—built for engineers shipping real-world systems.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                  <Button variant="primary">Request Access</Button>
                  <a
                    href="/platform"
                    className="inline-flex items-center justify-center h-10 px-6 text-body font-medium rounded-md border border-neutral-600 bg-transparent text-neutral-100 hover:border-neutral-500 hover:bg-neutral-800/50 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-primary-900"
                  >
                    See architecture
                  </a>
                </div>
                <div className="flex flex-wrap gap-6 text-caption text-neutral-400 border-t border-neutral-800 pt-5">
                  <span>Real-time + batch pipelines</span>
                  <span>Sub-second inference</span>
                  <span>Audit-ready control loops</span>
                </div>
              </div>

              <div className="lg:col-span-5">
                <div className="rounded-xl border border-accent/30 bg-gradient-to-b from-primary-700/70 to-primary-900 p-6 shadow-[0_0_45px_-24px_rgba(59,130,246,0.6)]">
                  <p className="text-caption uppercase tracking-[0.12em] text-accent mb-5">Platform telemetry</p>
                  <div className="space-y-4">
                    <div className="p-4 rounded-md border border-neutral-800 bg-neutral-900/70">
                      <p className="text-caption text-neutral-500 mb-2">Active facilities</p>
                      <p className="text-h3 font-display text-neutral-100">24</p>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="p-4 rounded-md border border-neutral-800 bg-neutral-900/70">
                        <p className="text-caption text-neutral-500 mb-2">Model cycles/day</p>
                        <p className="text-h4 font-display text-neutral-100">1.8K</p>
                      </div>
                      <div className="p-4 rounded-md border border-neutral-800 bg-neutral-900/70">
                        <p className="text-caption text-neutral-500 mb-2">Median latency</p>
                        <p className="text-h4 font-display text-neutral-100">84ms</p>
                      </div>
                    </div>
                    <p className="text-caption text-neutral-500">Representative benchmark figures for industrial deployments.</p>
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
            eyebrow="System design"
            title="Platform overview"
            description="A layered architecture that keeps modeling and control tightly coupled without introducing brittle handoffs."
          />
          <ArchitectureDiagram
            layers=[
              {
                title: 'Data layer',
                description: 'Industrial telemetry, sensor streams, and historical data.',
                detail: 'Unified ingestion pipeline. Schema validation. Real-time and batch modes.',
              },
              {
                title: 'Model layer',
                description: 'Optimization, prediction, and control models.',
                detail: 'Trained on domain-specific data. Deployed as inference endpoints.',
              },
              {
                title: 'Control layer',
                description: 'Actuation, closed-loop optimization, system signals.',
                detail: 'Sub-second latency. Fault-tolerant. Audit trails.',
              },
            ]
          />
          <div className="mt-8">
            <a
              href="/platform"
              className="inline-flex items-center gap-2 text-caption text-accent hover:text-accent-hover transition-colors"
            >
              Explore full architecture <span aria-hidden="true">→</span>
            </a>
          </div>
        </Container>
      </Section>

      <Section background="primary-900" density="default">
        <Container>
          <SectionHeader
            eyebrow="Core capabilities"
            title="Built to move from insight to actuation"
            description="Purpose-built services for industrial data systems where reliability, observability, and responsiveness all matter."
          />
          <Grid>
            <div className="col-span-4 md:col-span-8 lg:col-span-6">
              <Card
                variant="featured"
                title="Control-aware data pipeline"
                description="Ingest, validate, and route machine data with deterministic processing paths designed for closed-loop automation."
                href="/platform#data"
                linkLabel="Explore data layer"
                className="h-full"
              />
            </div>
            <div className="col-span-4 md:col-span-4 lg:col-span-3">
              <Card
                title="Model layer"
                description="Optimization and control models promoted from simulation to production with guardrails."
                href="/platform#models"
                linkLabel="View model system"
                className="h-full"
              />
            </div>
            <div className="col-span-4 md:col-span-4 lg:col-span-3">
              <Card
                title="Control systems"
                description="Low-latency actuation and policy enforcement with complete auditability."
                href="/platform#control"
                linkLabel="See control stack"
                className="h-full"
              />
            </div>
          </Grid>
        </Container>
      </Section>

      <Section divider density="compact">
        <Container>
          <SectionHeader
            eyebrow="Applications"
            title="Industries"
            description="Composable platform primitives adapted to each operational domain."
          />
          <Grid>
            <div className="col-span-4 md:col-span-4 lg:col-span-4">
              <IndustryTile
                title="Manufacturing"
                problem="Yield optimization, predictive maintenance, quality control."
                href="/industries#manufacturing"
              />
            </div>
            <div className="col-span-4 md:col-span-4 lg:col-span-4">
              <IndustryTile
                title="Automotive"
                problem="Assembly optimization, supply chain, autonomous systems."
                href="/industries#automotive"
              />
            </div>
            <div className="col-span-4 md:col-span-4 lg:col-span-4">
              <IndustryTile
                title="Energy"
                problem="Grid balancing, demand forecasting, asset performance."
                href="/industries#energy"
              />
            </div>
            <div className="col-span-4 md:col-span-4 lg:col-span-4">
              <IndustryTile
                title="Aerospace"
                problem="Fleet health, mission planning, digital twin validation."
                href="/industries#aerospace"
              />
            </div>
            <div className="col-span-4 md:col-span-4 lg:col-span-4">
              <IndustryTile
                title="Mining"
                problem="Equipment optimization, safety, resource extraction."
                href="/industries#mining"
              />
            </div>
            <div className="col-span-4 md:col-span-4 lg:col-span-4">
              <IndustryTile
                title="Infrastructure"
                problem="Smart grids, traffic, structural monitoring."
                href="/industries#infrastructure"
              />
            </div>
          </Grid>
          <div className="mt-8">
            <a
              href="/industries"
              className="inline-flex items-center gap-2 text-caption text-accent hover:text-accent-hover transition-colors"
            >
              View all industries <span aria-hidden="true">→</span>
            </a>
          </div>
        </Container>
      </Section>

      <Section background="primary-800" density="default">
        <Container>
          <SectionHeader
            eyebrow="Credibility"
            title="Why this matters"
            description="A production-grade stack that combines research agility with operational reliability."
          />
          <div className="grid md:grid-cols-3 gap-8">
            <TechnicalHighlight title="No handoffs">
              <p>
                From raw telemetry to actuation. Single platform. No silos between data engineering and control systems.
              </p>
            </TechnicalHighlight>
            <TechnicalHighlight title="Production-ready">
              <p>
                Models trained on domain data. Deployed as inference endpoints. Sub-second latency, fault-tolerant.
              </p>
            </TechnicalHighlight>
            <TechnicalHighlight title="R&D acceleration">
              <p>
                Simulation-first research. Closed-loop experimentation. Industrial co-design from day one.
              </p>
            </TechnicalHighlight>
          </div>
        </Container>
      </Section>

      <Section background="primary-900" density="default">
        <Container>
          <div className="max-w-3xl mx-auto text-center py-8">
            <p className="text-caption uppercase tracking-[0.14em] text-accent mb-4">Deployment</p>
            <h2 className="text-h2 font-display text-neutral-100 mb-4">
              Ready to operationalize industrial AI?
            </h2>
            <p className="text-body text-neutral-400 mb-8">
              Start with an architecture session, evaluate your system constraints, and build the right path to production.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="primary">Talk to engineering</Button>
              <a
                href="/contact"
                className="inline-flex items-center justify-center h-10 px-6 text-body font-medium rounded-md border border-neutral-600 bg-transparent text-neutral-100 hover:border-neutral-500 hover:bg-neutral-800/50 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-primary-900"
              >
                Get in touch
              </a>
            </div>
          </div>
        </Container>
      </Section>
    </main>
  );
}
