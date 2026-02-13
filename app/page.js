import { Section, Container, Grid } from '../components/layout';
import {
  Button,
  Card,
  ArchitectureDiagram,
  IndustryTile,
  TechnicalHighlight,
  FadeIn,
} from '../components/ui';

export default function Home() {
  return (
    <main className="pt-16">
      {/* Hero — mission-driven */}
      <Section background="primary-800">
        <Container>
          <FadeIn>
            <div className="max-w-2xl">
              <h1 className="text-h1 font-display text-neutral-100 mb-6">
                Industrial intelligence infrastructure
              </h1>
              <p className="text-body-lg text-neutral-400 mb-4">
                Bridge the gap between AI research and production control systems.
              </p>
              <p className="text-body text-neutral-500 mb-8">
                One platform. Data to actuation. Built for engineers who ship.
              </p>
              <Button variant="primary">Request Access</Button>
            </div>
          </FadeIn>
        </Container>
      </Section>

      {/* Platform overview diagram */}
      <Section divider>
        <Container>
          <h2 className="text-h2 font-display text-neutral-100 mb-12">
            Platform overview
          </h2>
          <ArchitectureDiagram
            layers={[
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
            ]}
          />
          <div className="mt-8 text-center">
            <a
              href="/platform"
              className="text-caption text-accent hover:text-accent-hover transition-colors"
            >
              Explore full architecture →
            </a>
          </div>
        </Container>
      </Section>

      {/* Capabilities grid */}
      <Section background="primary-900">
        <Container>
          <h2 className="text-h2 font-display text-neutral-100 mb-12">
            Platform capabilities
          </h2>
          <Grid>
            <div className="col-span-4 md:col-span-4 lg:col-span-4">
              <Card
                title="Data pipeline"
                description="Ingest, transform, and validate industrial data at scale."
                href="/platform#data"
              />
            </div>
            <div className="col-span-4 md:col-span-4 lg:col-span-4">
              <Card
                title="Model layer"
                description="Optimization and control models. Production-ready."
                href="/platform#models"
              />
            </div>
            <div className="col-span-4 md:col-span-4 lg:col-span-4">
              <Card
                title="Control systems"
                description="Real-time actuation. Closed-loop optimization."
                href="/platform#control"
              />
            </div>
          </Grid>
        </Container>
      </Section>

      {/* Industries snapshot */}
      <Section divider>
        <Container>
          <h2 className="text-h2 font-display text-neutral-100 mb-12">
            Industries
          </h2>
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
          <div className="mt-8 text-center">
            <a
              href="/industries"
              className="text-caption text-accent hover:text-accent-hover transition-colors"
            >
              View all industries →
            </a>
          </div>
        </Container>
      </Section>

      {/* Why This Matters */}
      <Section background="primary-800">
        <Container>
          <h2 className="text-h2 font-display text-neutral-100 mb-12">
            Why this matters
          </h2>
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

      {/* Final CTA */}
      <Section background="primary-900">
        <Container>
          <div className="max-w-2xl mx-auto text-center py-12">
            <h2 className="text-h2 font-display text-neutral-100 mb-4">
              Ready to build?
            </h2>
            <p className="text-body text-neutral-400 mb-8">
              Join engineers and researchers shipping industrial AI at scale.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="primary">Request Access</Button>
              <a
                href="/contact"
                className="inline-flex items-center justify-center h-10 px-6 text-body font-medium rounded-md border border-neutral-600 bg-transparent text-neutral-100 hover:border-neutral-500 hover:bg-neutral-800/50 transition-all duration-200"
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
