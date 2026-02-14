import { Section, Container } from '../../components/layout';
import {
  Button,
  ArchitectureDiagram,
  ExpandableSection,
  SystemFlowDiagram,
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

export default function PlatformPage() {
  return (
    <main className="pt-16">
      {/* Hero */}
      <Section background="primary-800">
        <Container>
          <FadeIn>
            <div className="max-w-2xl">
              <h1 className="text-h1 font-display text-neutral-100 mb-6">
                Platform architecture
              </h1>
              <p className="text-body-lg text-neutral-400 mb-8">
                Layer-by-layer. Data to actuation. Built for production.
              </p>
              <Button variant="primary">Request Access</Button>
            </div>
          </FadeIn>
        </Container>
      </Section>

      {/* Visual system flow */}
      <Section divider>
        <Container>
          <h2 className="text-h2 font-display text-neutral-100 mb-8">
            System flow
          </h2>
          <SystemFlowDiagram
            steps={[
              { label: 'Data', desc: 'Ingest & validate' },
              { label: 'Model', desc: 'Inference' },
              { label: 'Control', desc: 'Optimization' },
              { label: 'Actuation', desc: 'Real-time' },
            ]}
          />
        </Container>
      </Section>

      {/* Layer-by-layer breakdown — expandable */}
      <Section background="primary-900">
        <Container>
          <h2 className="text-h2 font-display text-neutral-100 mb-12">
            Layer breakdown
          </h2>
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

      {/* Architecture diagram (compact) */}
      <Section divider>
        <Container>
          <h2 className="text-h2 font-display text-neutral-100 mb-12">
            Full stack view
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

      {/* CTA */}
      <Section background="primary-800">
        <Container>
          <div className="max-w-2xl mx-auto text-center py-12">
            <h2 className="text-h2 font-display text-neutral-100 mb-4">
              Build on ORIGYN
            </h2>
            <p className="text-body text-neutral-400 mb-8">
              Explore the developer docs and deploy your first pipeline.
            </p>
            <a
              href="/developers"
              className="inline-flex items-center justify-center h-10 px-6 text-body font-medium rounded-md bg-accent text-white hover:bg-accent-hover transition-all duration-200"
            >
              View developer docs
            </a>
          </div>
        </Container>
      </Section>
    </main>
  );
}
