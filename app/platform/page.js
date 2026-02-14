import { Section, Container, Grid } from '../../components/layout';
import {
  Button,
  ExpandableSection,
  SystemFlowDiagram,
  TechnicalHighlight,
  FadeIn,
} from '../../components/ui';

export const metadata = {
  title: 'Platform',
  description:
    'ORIGYN platform architecture. Data layer, model layer, control layer. From ingestion to actuation. Built for production.',
  openGraph: {
    title: 'Platform | ORIGYN',
    description:
      'ORIGYN platform architecture. Data to actuation. Built for production.',
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

export default function PlatformPage() {
  return (
    <main className="pt-16">
      <Section background="primary-800" density="hero" divider>
        <Container>
          <FadeIn>
            <div className="grid lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-7">
                <p className="text-caption uppercase tracking-[0.14em] text-accent mb-4">
                  Platform architecture
                </p>
                <h1 className="text-h1 font-display text-neutral-100 mb-6">
                  Production-grade intelligence from data to actuation
                </h1>
                <p className="text-body-lg text-neutral-300 mb-4 max-w-2xl">
                  A layered platform for industrial telemetry, model operations, and control execution.
                </p>
                <p className="text-body text-neutral-500 mb-8 max-w-xl">
                  Built for teams that need deterministic behavior, fast iteration, and deployment across edge and cloud environments.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                  <Button variant="primary">Request Access</Button>
                  <a
                    href="#system-flow"
                    className="inline-flex items-center justify-center h-10 px-6 text-body font-medium rounded-md border border-neutral-600 bg-transparent text-neutral-100 hover:border-neutral-500 hover:bg-neutral-800/50 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-primary-900"
                  >
                    See system flow
                  </a>
                </div>
                <div className="flex flex-wrap gap-6 text-caption text-neutral-400 border-t border-neutral-800 pt-5">
                  <span>OPC-UA, MQTT, REST</span>
                  <span>Sub-100ms inference path</span>
                  <span>Audit-ready control loops</span>
                </div>
              </div>

              <div className="lg:col-span-5">
                <div className="rounded-xl border border-accent/30 bg-gradient-to-b from-primary-700/70 to-primary-900 p-6 shadow-[0_0_45px_-24px_rgba(59,130,246,0.6)]">
                  <p className="text-caption uppercase tracking-[0.12em] text-accent mb-5">Platform at a glance</p>
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="p-4 rounded-md border border-neutral-800 bg-neutral-900/70">
                        <p className="text-caption text-neutral-500 mb-2">Latency target</p>
                        <p className="text-h4 font-display text-neutral-100">&lt;100ms</p>
                      </div>
                      <div className="p-4 rounded-md border border-neutral-800 bg-neutral-900/70">
                        <p className="text-caption text-neutral-500 mb-2">Deploy modes</p>
                        <p className="text-h4 font-display text-neutral-100">Edge + Cloud</p>
                      </div>
                    </div>
                    <div className="p-4 rounded-md border border-neutral-800 bg-neutral-900/70">
                      <p className="text-caption text-neutral-500 mb-2">Supported model stacks</p>
                      <p className="text-body text-neutral-300">PyTorch, TensorFlow, ONNX, custom runtime adapters</p>
                    </div>
                    <p className="text-caption text-neutral-500">Reference architecture metrics are representative and workload dependent.</p>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        </Container>
      </Section>

      <Section id="system-flow" density="default" divider>
        <Container>
          <SectionHeader
            eyebrow="Process"
            title="System flow"
            description="A deterministic sequence from ingestion to intervention, designed for high-observability operations."
          />
          <SystemFlowDiagram
            variant="detailed"
            steps={[
              { label: 'Data', desc: 'Ingest & validate', meta: 'OPC-UA, MQTT, REST' },
              { label: 'Model', desc: 'Inference orchestration', meta: 'A/B, versioning, rollback' },
              { label: 'Control', desc: 'Policy optimization', meta: 'Safety interlocks + limits' },
              { label: 'Actuation', desc: 'Real-time execution', meta: 'PLC, DCS, edge agents' },
            ]}
          />
        </Container>
      </Section>

      <Section background="primary-900" density="default" divider>
        <Container>
          <SectionHeader
            eyebrow="Capabilities"
            title="Layer breakdown"
            description="Inspect the responsibilities and guarantees of each platform layer."
          />
          <div className="space-y-4">
            <ExpandableSection
              id="data"
              title="Data layer"
              description="Industrial telemetry, sensor streams, and historical data."
              defaultOpen={true}
            >
              <p className="text-body text-neutral-400 mb-4">
                Unified ingestion pipeline with schema validation. Supports real-time and batch modes.
                Handles OPC-UA, MQTT, REST, and custom protocols. Data quality checks and anomaly
                detection at ingest.
              </p>
              <ul className="text-caption text-neutral-500 space-y-2 list-disc list-inside">
                <li>Schema validation and type coercion</li>
                <li>Time-series alignment and resampling</li>
                <li>Secure storage with audit trails</li>
              </ul>
            </ExpandableSection>

            <ExpandableSection
              id="models"
              title="Model layer"
              description="Optimization, prediction, and control models."
            >
              <p className="text-body text-neutral-400 mb-4">
                Models trained on domain-specific data. Deployed as inference endpoints with
                versioning and A/B support. ONNX, PyTorch, TensorFlow compatible.
              </p>
              <ul className="text-caption text-neutral-500 space-y-2 list-disc list-inside">
                <li>Model registry and versioning</li>
                <li>Sub-100ms inference latency</li>
                <li>Hot-swap deployments</li>
              </ul>
            </ExpandableSection>

            <ExpandableSection
              id="control"
              title="Control layer"
              description="Actuation, closed-loop optimization, system signals."
            >
              <p className="text-body text-neutral-400 mb-4">
                Sub-second latency. Fault-tolerant with graceful degradation. Full audit trails
                for compliance. Integrates with PLCs, DCS, and edge devices.
              </p>
              <ul className="text-caption text-neutral-500 space-y-2 list-disc list-inside">
                <li>Deterministic execution guarantees</li>
                <li>Safety interlocks and limits</li>
                <li>Edge and cloud deployment</li>
              </ul>
            </ExpandableSection>
          </div>
        </Container>
      </Section>

      <Section density="compact" divider>
        <Container>
          <SectionHeader
            eyebrow="Cross-cutting"
            title="Operational guarantees"
            description="Platform characteristics that apply across every layer in production environments."
          />
          <Grid>
            <div className="col-span-4 md:col-span-4 lg:col-span-4">
              <TechnicalHighlight title="Safety by default">
                <p>
                  Policy limits, hard interlocks, and constrained execution modes reduce operational risk during control updates.
                </p>
              </TechnicalHighlight>
            </div>
            <div className="col-span-4 md:col-span-4 lg:col-span-4">
              <TechnicalHighlight title="Observability first">
                <p>
                  Full telemetry traces, model lineage, and operator-visible event streams across ingest, inference, and actuation.
                </p>
              </TechnicalHighlight>
            </div>
            <div className="col-span-4 md:col-span-8 lg:col-span-4">
              <TechnicalHighlight title="Resilience and failover">
                <p>
                  Graceful degradation paths with edge fallback, deterministic retries, and auditable replay for incident resolution.
                </p>
              </TechnicalHighlight>
            </div>
          </Grid>
        </Container>
      </Section>

      <Section background="primary-800" density="default">
        <Container>
          <div className="max-w-3xl mx-auto text-center py-8 rounded-xl border border-accent/25 bg-gradient-to-b from-primary-700/40 to-primary-900/50 px-6">
            <p className="text-caption uppercase tracking-[0.14em] text-accent mb-4">Next step</p>
            <h2 className="text-h2 font-display text-neutral-100 mb-4">
              Build on ORIGYN
            </h2>
            <p className="text-body text-neutral-400 mb-8">
              Explore developer documentation or review your architecture with our engineering team.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/developers"
                className="inline-flex items-center justify-center h-10 px-6 text-body font-medium rounded-md bg-accent text-white hover:bg-accent-hover transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-primary-900"
              >
                View developer docs
              </a>
              <a
                href="/contact"
                className="inline-flex items-center justify-center h-10 px-6 text-body font-medium rounded-md border border-neutral-600 bg-transparent text-neutral-100 hover:border-neutral-500 hover:bg-neutral-800/50 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-primary-900"
              >
                Talk to engineering
              </a>
            </div>
          </div>
        </Container>
      </Section>
    </main>
  );
}
