import { Section, Container, Grid } from '../../components/layout';
import {
  Button,
  CodeBlock,
  TechStackGrid,
  FrameworkCard,
  TechnicalHighlight,
  FadeIn,
} from '../../components/ui';

export const metadata = {
  title: 'Developers',
  description:
    'Build industrial AI with the tools you know. Python, C++, Rust, TypeScript. PyTorch, TensorFlow, ONNX. Production-ready from day one.',
  openGraph: {
    title: 'Developers | ORIGYN',
    description: 'Build industrial AI with the tools you know. Production-ready from day one.',
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

export default function DevelopersPage() {
  return (
    <main className="pt-16">
      <Section background="primary-800" density="hero" divider>
        <Container>
          <FadeIn>
            <div className="grid lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-7">
                <p className="text-caption uppercase tracking-[0.14em] text-accent mb-4">
                  Developer platform
                </p>
                <h1 className="text-h1 font-display text-neutral-100 mb-6">
                  Build and ship industrial AI with your existing toolchain
                </h1>
                <p className="text-body-lg text-neutral-300 mb-4 max-w-2xl">
                  Train, validate, and deploy production-grade pipelines using familiar frameworks and language stacks.
                </p>
                <p className="text-body text-neutral-500 mb-8 max-w-xl">
                  Move from prototype to deterministic deployment across cloud, edge, and embedded targets without rebuilding your architecture.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                  <Button variant="primary">Request Access</Button>
                  <a
                    href="#quick-start"
                    className="inline-flex items-center justify-center h-10 px-6 text-body font-medium rounded-md border border-neutral-600 bg-transparent text-neutral-100 hover:border-neutral-500 hover:bg-neutral-800/50 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-primary-900"
                  >
                    View quick start
                  </a>
                </div>
                <div className="flex flex-wrap gap-6 text-caption text-neutral-400 border-t border-neutral-800 pt-5">
                  <span>Python · C++ · Rust · TypeScript</span>
                  <span>Edge + cloud runtimes</span>
                  <span>Safety-aware control execution</span>
                </div>
              </div>

              <div className="lg:col-span-5">
                <div className="rounded-xl border border-accent/30 bg-gradient-to-b from-primary-700/70 to-primary-900 p-6 shadow-[0_0_45px_-24px_rgba(59,130,246,0.6)]">
                  <p className="text-caption uppercase tracking-[0.12em] text-accent mb-5">Developer quick facts</p>
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="p-4 rounded-md border border-neutral-800 bg-neutral-900/70">
                        <p className="text-caption text-neutral-500 mb-2">Inference target</p>
                        <p className="text-h4 font-display text-neutral-100">&lt;100ms</p>
                      </div>
                      <div className="p-4 rounded-md border border-neutral-800 bg-neutral-900/70">
                        <p className="text-caption text-neutral-500 mb-2">Deploy modes</p>
                        <p className="text-h4 font-display text-neutral-100">Edge + Cloud</p>
                      </div>
                    </div>
                    <div className="p-4 rounded-md border border-neutral-800 bg-neutral-900/70">
                      <p className="text-caption text-neutral-500 mb-2">Framework compatibility</p>
                      <p className="text-body text-neutral-300">PyTorch, TensorFlow, ONNX with deterministic rollout controls.</p>
                    </div>
                    <p className="text-caption text-neutral-500">Designed for production operations, not notebook-only experimentation.</p>
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
            eyebrow="Tooling"
            title="Supported languages"
            description="Use your preferred language stack while targeting the same unified deployment model."
          />
          <TechStackGrid
            variant="cards"
            items={[
              { label: 'Python', icon: 'py', featured: true },
              { label: 'C++', icon: 'cpp' },
              { label: 'Rust', icon: 'rs', featured: true },
              { label: 'TypeScript', icon: 'ts' },
              { label: 'Julia', icon: 'jl' },
            ]}
          />
        </Container>
      </Section>

      <Section background="primary-900" density="default" divider>
        <Container>
          <SectionHeader
            eyebrow="Model stack"
            title="AI frameworks"
            description="Bring your existing training workflows and deploy with a consistent runtime contract."
          />
          <Grid>
            <div className="col-span-4 md:col-span-4 lg:col-span-6">
              <FrameworkCard
                name="PyTorch"
                useCase="Training and inference with dynamic graph workflows and production export paths."
                href="/platform"
              />
            </div>
            <div className="col-span-4 md:col-span-4 lg:col-span-3">
              <FrameworkCard
                name="TensorFlow"
                useCase="SavedModel and TF Lite support optimized for edge and embedded deployment."
                href="/platform"
              />
            </div>
            <div className="col-span-4 md:col-span-8 lg:col-span-3">
              <FrameworkCard
                name="ONNX"
                useCase="Framework-agnostic export to run models from heterogeneous training stacks."
                href="/platform"
              />
            </div>
          </Grid>
        </Container>
      </Section>

      <Section density="compact" divider>
        <Container>
          <SectionHeader
            eyebrow="Runtime"
            title="Deployment stack"
            description="Run identical pipelines on cloud, edge, and on-prem environments with repeatable operational behavior."
          />
          <TechStackGrid
            items={[
              { label: 'Docker', icon: '🐳', featured: true },
              { label: 'Kubernetes', icon: 'k8s' },
              { label: 'Edge (ARM/x86)', icon: 'edge', featured: true },
              { label: 'Cloud (AWS, GCP, Azure)', icon: '☁' },
              { label: 'Bare metal', icon: '⚙' },
            ]}
          />
        </Container>
      </Section>

      <Section background="primary-800" density="compact" divider>
        <Container>
          <SectionHeader
            eyebrow="Guarantees"
            title="Control and embedded capabilities"
            description="Operational constraints are built into the execution model from day one."
          />
          <div className="grid md:grid-cols-2 gap-8">
            <TechnicalHighlight title="Real-time control">
              <p>
                Sub-100ms inference with deterministic execution, safety interlocks, and graceful degradation.
              </p>
            </TechnicalHighlight>
            <TechnicalHighlight title="Embedded deployment">
              <p>
                ARM, x86, and custom hardware targets with minimal runtime footprint for edge inference.
              </p>
            </TechnicalHighlight>
          </div>
        </Container>
      </Section>

      <Section id="quick-start" background="primary-900" density="default" divider>
        <Container>
          <SectionHeader
            eyebrow="Onboarding"
            title="Quick start"
            description="Install the CLI, authenticate your workspace, and deploy a first pipeline in minutes."
          />
          <div className="rounded-xl border border-neutral-800 bg-neutral-900/40 p-6 md:p-8">
            <div className="grid md:grid-cols-3 gap-4 mb-6">
              <div className="rounded-md border border-neutral-800 bg-primary-800/50 p-4">
                <p className="text-caption text-neutral-500 mb-1">Step 01</p>
                <p className="text-body text-neutral-200">Install the CLI</p>
              </div>
              <div className="rounded-md border border-neutral-800 bg-primary-800/50 p-4">
                <p className="text-caption text-neutral-500 mb-1">Step 02</p>
                <p className="text-body text-neutral-200">Authenticate your workspace</p>
              </div>
              <div className="rounded-md border border-neutral-800 bg-primary-800/50 p-4">
                <p className="text-caption text-neutral-500 mb-1">Step 03</p>
                <p className="text-body text-neutral-200">Deploy a pipeline</p>
              </div>
            </div>
            <CodeBlock
              language="bash"
              code={`# Install ORIGYN CLI\nnpm install -g @origyn/cli\n\n# Authenticate\norigyn login\n\n# Deploy your first pipeline\norigyn deploy pipeline.yaml`}
            />
            <div className="mt-6">
              <a
                href="/platform"
                className="inline-flex items-center gap-2 text-caption text-accent hover:text-accent-hover transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-primary-900 rounded"
              >
                See architecture requirements <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </Container>
      </Section>

      <Section density="default">
        <Container>
          <div className="max-w-3xl mx-auto text-center py-8 rounded-xl border border-accent/25 bg-gradient-to-b from-primary-700/40 to-primary-900/50 px-6">
            <p className="text-caption uppercase tracking-[0.14em] text-accent mb-4">Next step</p>
            <h2 className="text-h2 font-display text-neutral-100 mb-4">
              Start building
            </h2>
            <p className="text-body text-neutral-400 mb-8">
              Request access to the developer portal, generate API credentials, and launch your first production workflow.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="primary">Request Access</Button>
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
