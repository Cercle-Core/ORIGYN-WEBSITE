import { Section, Container, Grid } from '../../components/layout';
import {
  Button,
  Card,
  TechnicalHighlight,
  SystemFlowDiagram,
  FadeIn,
} from '../../components/ui';

export const metadata = {
  title: 'R&D',
  description:
    'Simulation-first research. Closed-loop experimentation. Industrial co-design. Partner with ORIGYN on industrial AI research.',
  openGraph: {
    title: 'R&D | ORIGYN',
    description:
      'Simulation-first research. Closed-loop experimentation. Industrial co-design.',
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

export default function RndPage() {
  return (
    <main className="pt-16">
      <Section background="primary-800" density="hero" divider>
        <Container>
          <FadeIn>
            <div className="grid lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-7">
                <p className="text-caption uppercase tracking-[0.14em] text-accent mb-4">
                  Research and development
                </p>
                <h1 className="text-h1 font-display text-neutral-100 mb-6">
                  Simulation-first industrial AI research with real deployment outcomes
                </h1>
                <p className="text-body-lg text-neutral-300 mb-4 max-w-2xl">
                  Build and validate advanced control intelligence with a workflow that links research experiments to production systems.
                </p>
                <p className="text-body text-neutral-500 mb-8 max-w-xl">
                  We partner with researchers, universities, and industry teams to co-design models, test safely in simulation, and scale proven approaches into the field.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                  <Button variant="primary">Partner with us</Button>
                  <a
                    href="#research-flow"
                    className="inline-flex items-center justify-center h-10 px-6 text-body font-medium rounded-md border border-neutral-600 bg-transparent text-neutral-100 hover:border-neutral-500 hover:bg-neutral-800/50 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-primary-900"
                  >
                    View research flow
                  </a>
                </div>
                <div className="flex flex-wrap gap-6 text-caption text-neutral-400 border-t border-neutral-800 pt-5">
                  <span>Simulation-first validation</span>
                  <span>Closed-loop experimentation</span>
                  <span>Industry co-design model</span>
                </div>
              </div>

              <div className="lg:col-span-5">
                <div className="rounded-xl border border-accent/30 bg-gradient-to-b from-primary-700/70 to-primary-900 p-6 shadow-[0_0_45px_-24px_rgba(59,130,246,0.6)]">
                  <p className="text-caption uppercase tracking-[0.12em] text-accent mb-5">Research snapshot</p>
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="p-4 rounded-md border border-neutral-800 bg-neutral-900/70">
                        <p className="text-caption text-neutral-500 mb-2">Research modes</p>
                        <p className="text-h4 font-display text-neutral-100">Lab + Field</p>
                      </div>
                      <div className="p-4 rounded-md border border-neutral-800 bg-neutral-900/70">
                        <p className="text-caption text-neutral-500 mb-2">Collaboration types</p>
                        <p className="text-h4 font-display text-neutral-100">Academic + Industrial</p>
                      </div>
                    </div>
                    <div className="p-4 rounded-md border border-neutral-800 bg-neutral-900/70">
                      <p className="text-caption text-neutral-500 mb-2">Output profile</p>
                      <p className="text-body text-neutral-300">Validated methods, reproducible pipelines, and deployment-ready controls.</p>
                    </div>
                    <p className="text-caption text-neutral-500">Designed to bridge novel research and operationally reliable implementation.</p>
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
            eyebrow="Research themes"
            title="Research focus"
            description="Priority domains where we combine simulation rigor with production-driven constraints."
          />
          <Grid>
            <div className="col-span-4 md:col-span-8 lg:col-span-6">
              <Card
                variant="featured"
                title="Simulation-first research"
                description="Validate in simulation before physical deployment. Reduce operational risk, accelerate iteration, and systematically test edge cases."
              />
            </div>
            <div className="col-span-4 md:col-span-4 lg:col-span-3">
              <Card
                title="Closed-loop experimentation"
                description="Feed observations from real systems back into models for continuous learning and measurable improvement."
              />
            </div>
            <div className="col-span-4 md:col-span-4 lg:col-span-3">
              <Card
                title="Industrial co-design"
                description="Researchers, control engineers, and domain experts collaborate from day one to shape usable outcomes."
              />
            </div>
          </Grid>
        </Container>
      </Section>

      <Section id="research-flow" background="primary-900" density="default" divider>
        <Container>
          <SectionHeader
            eyebrow="Method"
            title="Research lifecycle"
            description="A repeatable path from hypothesis to deployment validation with explicit safety and observability checkpoints."
          />
          <SystemFlowDiagram
            variant="detailed"
            steps={[
              { label: 'Hypothesis', desc: 'Define target behavior', meta: 'Problem framing + constraints' },
              { label: 'Simulation', desc: 'Validate control strategy', meta: 'Stress tests + edge cases' },
              { label: 'Pilot', desc: 'Run controlled deployment', meta: 'Monitored real-world trials' },
              { label: 'Scale', desc: 'Operational rollout', meta: 'Auditable production pathways' },
            ]}
          />
        </Container>
      </Section>

      <Section background="primary-800" density="compact" divider>
        <Container>
          <SectionHeader
            eyebrow="Talent and ecosystem"
            title="STEM impact"
            description="We invest in people and institutions that can bridge modern AI methods with industrial control realities."
          />
          <Grid>
            <div className="col-span-4 md:col-span-4 lg:col-span-4">
              <TechnicalHighlight title="University partnerships">
                <p>
                  Joint research agendas, co-supervised projects, and shared testbeds for applied industrial AI.
                </p>
              </TechnicalHighlight>
            </div>
            <div className="col-span-4 md:col-span-4 lg:col-span-4">
              <TechnicalHighlight title="Engineer pipeline">
                <p>
                  Internships, workshops, and mentorship tracks for engineers at the intersection of AI and control systems.
                </p>
              </TechnicalHighlight>
            </div>
            <div className="col-span-4 md:col-span-8 lg:col-span-4">
              <TechnicalHighlight title="Open collaboration">
                <p>
                  Tooling, reproducible workflows, and knowledge-sharing formats that help serious teams move faster together.
                </p>
              </TechnicalHighlight>
            </div>
          </Grid>
        </Container>
      </Section>

      <Section background="primary-900" density="default">
        <Container>
          <div className="max-w-3xl mx-auto text-center py-8 rounded-xl border border-accent/25 bg-gradient-to-b from-primary-700/40 to-primary-900/50 px-6">
            <p className="text-caption uppercase tracking-[0.14em] text-accent mb-4">Collaboration</p>
            <h2 className="text-h2 font-display text-neutral-100 mb-4">
              Partner with us
            </h2>
            <p className="text-body text-neutral-400 mb-8">
              Align on a research objective, validate in controlled environments, and scale successful methods into real operations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center justify-center h-10 px-6 text-body font-medium rounded-md bg-accent text-white hover:bg-accent-hover transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-primary-900"
              >
                Contact research team
              </a>
              <a
                href="/platform"
                className="inline-flex items-center justify-center h-10 px-6 text-body font-medium rounded-md border border-neutral-600 bg-transparent text-neutral-100 hover:border-neutral-500 hover:bg-neutral-800/50 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-primary-900"
              >
                Explore platform
              </a>
            </div>
          </div>
        </Container>
      </Section>
    </main>
  );
}
