import { Section, Container, Grid } from '../../components/layout';
import {
  Button,
  CodeBlock,
  TechStackGrid,
  FrameworkCard,
  TechnicalHighlight,
  FadeIn,
} from '../../components/ui';

export default function DevelopersPage() {
  return (
    <main className="pt-16">
      {/* Hero */}
      <Section background="primary-800">
        <Container>
          <FadeIn>
            <div className="max-w-2xl">
              <h1 className="text-h1 font-display text-neutral-100 mb-6">
                Developers
              </h1>
              <p className="text-body-lg text-neutral-400 mb-8">
                Build industrial AI with the tools you know. Production-ready from day one.
              </p>
              <Button variant="primary">Request Access</Button>
            </div>
          </FadeIn>
        </Container>
      </Section>

      {/* Supported languages */}
      <Section divider>
        <Container>
          <TechStackGrid
            title="Supported languages"
            items={[
              { label: 'Python', icon: 'py' },
              { label: 'C++', icon: 'cpp' },
              { label: 'Rust', icon: 'rs' },
              { label: 'TypeScript', icon: 'ts' },
              { label: 'Julia', icon: 'jl' },
            ]}
          />
        </Container>
      </Section>

      {/* AI frameworks */}
      <Section background="primary-900">
        <Container>
          <h2 className="text-h2 font-display text-neutral-100 mb-12">
            AI frameworks
          </h2>
          <Grid>
            <div className="col-span-4 md:col-span-4 lg:col-span-4">
              <FrameworkCard
                name="PyTorch"
                useCase="Training and inference. Native support for dynamic graphs and production export."
              />
            </div>
            <div className="col-span-4 md:col-span-4 lg:col-span-4">
              <FrameworkCard
                name="TensorFlow"
                useCase="SavedModel and TF Lite. Optimized for edge and embedded deployment."
              />
            </div>
            <div className="col-span-4 md:col-span-4 lg:col-span-4">
              <FrameworkCard
                name="ONNX"
                useCase="Framework-agnostic export. Run models from any training stack."
              />
            </div>
          </Grid>
        </Container>
      </Section>

      {/* Deployment stack */}
      <Section divider>
        <Container>
          <h2 className="text-h2 font-display text-neutral-100 mb-8">
            Deployment stack
          </h2>
          <TechStackGrid
            items={[
              { label: 'Docker', icon: '🐳' },
              { label: 'Kubernetes', icon: 'k8s' },
              { label: 'Edge (ARM/x86)', icon: 'edge' },
              { label: 'Cloud (AWS, GCP, Azure)', icon: '☁' },
              { label: 'Bare metal', icon: '⚙' },
            ]}
          />
          <p className="text-body text-neutral-400 mt-6 max-w-2xl">
            Deploy to cloud, edge, or on-prem. Same pipeline, same API. Scale from single device to fleet.
          </p>
        </Container>
      </Section>

      {/* Control & embedded */}
      <Section background="primary-800">
        <Container>
          <h2 className="text-h2 font-display text-neutral-100 mb-8">
            Control & embedded capabilities
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <TechnicalHighlight title="Real-time control">
              <p>
                Sub-100ms inference. Deterministic execution. Safety interlocks and graceful degradation.
              </p>
            </TechnicalHighlight>
            <TechnicalHighlight title="Embedded deployment">
              <p>
                ARM, x86, and custom hardware. Minimal footprint. Run inference at the edge.
              </p>
            </TechnicalHighlight>
          </div>
        </Container>
      </Section>

      {/* Quick start */}
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

      {/* CTA */}
      <Section divider>
        <Container>
          <div className="max-w-2xl mx-auto text-center py-12">
            <h2 className="text-h2 font-display text-neutral-100 mb-4">
              Start building
            </h2>
            <p className="text-body text-neutral-400 mb-8">
              Request access to the developer portal and API.
            </p>
            <Button variant="primary">Request Access</Button>
          </div>
        </Container>
      </Section>
    </main>
  );
}
