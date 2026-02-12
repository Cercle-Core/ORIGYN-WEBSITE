import { Section, Container, Grid } from '../components/layout';
import {
  Button,
  Card,
  CodeBlock,
  ArchitectureDiagram,
  IndustryTile,
  TechnicalHighlight,
  FadeIn,
} from '../components/ui';

export default function Home() {
  return (
    <main className="pt-16">
      {/* Hero */}
      <Section background="primary-800">
        <Container>
          <FadeIn>
            <div className="max-w-2xl">
              <h1 className="text-h1 font-display text-neutral-100 mb-6">
                Industrial intelligence infrastructure
              </h1>
              <p className="text-body-lg text-neutral-400 mb-8">
                AI + control systems layer. R&D acceleration engine.
              </p>
              <Button variant="primary">Request Access</Button>
            </div>
          </FadeIn>
        </Container>
      </Section>

      {/* Features */}
      <Section divider>
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

      {/* Architecture */}
      <Section background="primary-900">
        <Container>
          <h2 className="text-h2 font-display text-neutral-100 mb-12">
            Platform architecture
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
        </Container>
      </Section>

      {/* Industries */}
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
                title="Energy"
                problem="Grid balancing, demand forecasting, asset performance."
                href="/industries#energy"
              />
            </div>
            <div className="col-span-4 md:col-span-4 lg:col-span-4">
              <IndustryTile
                title="Logistics"
                problem="Routing, inventory, supply chain optimization."
                href="/industries#logistics"
              />
            </div>
          </Grid>
        </Container>
      </Section>

      {/* Technical highlight */}
      <Section background="primary-800">
        <Container>
          <TechnicalHighlight
            title="End-to-end pipeline orchestration"
          >
            <p>
              From raw telemetry to actuation. Single platform. No handoffs between data engineering and control systems.
            </p>
          </TechnicalHighlight>
        </Container>
      </Section>

      {/* Code example */}
      <Section background="primary-900">
        <Container>
          <h2 className="text-h2 font-display text-neutral-100 mb-8">
            Quick start
          </h2>
          <CodeBlock
            language="bash"
            code={`# Install ORIGYN CLI
npm install -g @origyn/cli

# Authenticate
origyn login

# Deploy your first pipeline
origyn deploy pipeline.yaml`}
          />
        </Container>
      </Section>
    </main>
  );
}
