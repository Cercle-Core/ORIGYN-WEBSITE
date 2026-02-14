import { Section, Container, Grid } from '../../components/layout';
import { Button, UseCaseCard, TechnicalHighlight, FadeIn } from '../../components/ui';

export const metadata = {
  title: 'Use Cases',
  description:
    'Industrial AI applications that ship. Predictive maintenance, smart factory, fleet intelligence, digital twin, autonomous systems.',
  openGraph: {
    title: 'Use Cases | ORIGYN',
    description:
      'Industrial AI applications that ship. From predictive maintenance to autonomous systems.',
  },
};

const useCases = [
  {
    id: 'predictive-maintenance',
    title: 'Predictive maintenance',
    description: 'Reduce unplanned downtime by predicting failures before they occur. Train on historical sensor data, deploy at the edge or cloud.',
    benefits: [
      '30%+ reduction in unplanned downtime',
      'Condition-based vs. time-based maintenance',
      'Fleet-wide and single-asset deployment',
    ],
    outcome: 'Best fit for uptime-critical operations and aging equipment portfolios.',
    href: '/industries#manufacturing',
  },
  {
    id: 'smart-factory',
    title: 'Smart factory',
    description: 'End-to-end optimization from raw material to finished product. Real-time quality control, yield optimization, and adaptive scheduling.',
    benefits: [
      'Real-time quality feedback loops',
      'Digital twin for what-if analysis',
      'Multi-line and plant-wide scaling',
    ],
    outcome: 'Ideal for high-throughput plants with strict throughput and quality targets.',
    href: '/industries#manufacturing',
  },
  {
    id: 'fleet-intelligence',
    title: 'Fleet intelligence',
    description: 'Optimize routing, maintenance, and utilization across vehicle and equipment fleets. From logistics to mining to aviation.',
    benefits: [
      'Predictive maintenance at scale',
      'Route and load optimization',
      'Unified telemetry across asset types',
    ],
    outcome: 'Combines performance optimization with operational reliability across distributed assets.',
    href: '/industries#automotive',
  },
  {
    id: 'digital-twin-optimization',
    title: 'Digital twin optimization',
    description: 'Run simulations before physical deployment. Validate control strategies, test edge cases, and accelerate R&D.',
    benefits: [
      'Simulation-first development',
      'Closed-loop experimentation',
      'Hardware-in-the-loop support',
    ],
    outcome: 'Accelerates validation cycles while reducing deployment risk.',
    href: '/rnd',
  },
  {
    id: 'autonomous-systems',
    title: 'Autonomous systems',
    description: 'From autonomous vehicles to robotic assembly. Train, validate, and deploy with safety and determinism built in.',
    benefits: [
      'Simulation-based validation',
      'Real-time perception and control',
      'Certification-ready audit trails',
    ],
    outcome: 'Designed for safety-constrained workflows where determinism matters.',
    href: '/industries#automotive',
  },
];

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

export default function UseCasesPage() {
  const featuredUseCases = new Set(['predictive-maintenance', 'digital-twin-optimization']);

  return (
    <main className="pt-16">
      <Section background="primary-800" density="hero" divider>
        <Container>
          <FadeIn>
            <div className="grid lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-7">
                <p className="text-caption uppercase tracking-[0.14em] text-accent mb-4">
                  Applied intelligence
                </p>
                <h1 className="text-h1 font-display text-neutral-100 mb-6">
                  Use cases designed for real-world industrial constraints
                </h1>
                <p className="text-body-lg text-neutral-300 mb-4 max-w-2xl">
                  From predictive maintenance to autonomous systems, deploy AI workflows that survive production conditions.
                </p>
                <p className="text-body text-neutral-500 mb-8 max-w-xl">
                  Each use case combines data ingestion, model execution, and deterministic control pathways aligned to domain-specific risk profiles.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                  <Button variant="primary">Request Access</Button>
                  <a
                    href="/industries"
                    className="inline-flex items-center justify-center h-10 px-6 text-body font-medium rounded-md border border-neutral-600 bg-transparent text-neutral-100 hover:border-neutral-500 hover:bg-neutral-800/50 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-primary-900"
                  >
                    View industries
                  </a>
                </div>
                <div className="flex flex-wrap gap-6 text-caption text-neutral-400 border-t border-neutral-800 pt-5">
                  <span>Edge + cloud ready</span>
                  <span>Simulation-first validation</span>
                  <span>Closed-loop control support</span>
                </div>
              </div>

              <div className="lg:col-span-5">
                <div className="rounded-xl border border-accent/30 bg-gradient-to-b from-primary-700/70 to-primary-900 p-6 shadow-[0_0_45px_-24px_rgba(59,130,246,0.6)]">
                  <p className="text-caption uppercase tracking-[0.12em] text-accent mb-5">Use case impact</p>
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="p-4 rounded-md border border-neutral-800 bg-neutral-900/70">
                        <p className="text-caption text-neutral-500 mb-2">Core applications</p>
                        <p className="text-h4 font-display text-neutral-100">5</p>
                      </div>
                      <div className="p-4 rounded-md border border-neutral-800 bg-neutral-900/70">
                        <p className="text-caption text-neutral-500 mb-2">Typical outcome</p>
                        <p className="text-h4 font-display text-neutral-100">Lower risk + faster rollout</p>
                      </div>
                    </div>
                    <div className="p-4 rounded-md border border-neutral-800 bg-neutral-900/70">
                      <p className="text-caption text-neutral-500 mb-2">Delivery pattern</p>
                      <p className="text-body text-neutral-300">Architecture review, pilot execution, phased production scale-up.</p>
                    </div>
                    <p className="text-caption text-neutral-500">Prioritized for measurable operational gains, not prototype-only experimentation.</p>
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
            eyebrow="Applications"
            title="Use-case library"
            description="Explore common deployment patterns and the measurable outcomes they unlock."
          />
          <Grid>
            {useCases.map((uc) => (
              <div
                key={uc.id}
                className={`col-span-4 md:col-span-4 ${featuredUseCases.has(uc.id) ? 'lg:col-span-6' : 'lg:col-span-3'}`}
              >
                <UseCaseCard
                  title={uc.title}
                  description={uc.description}
                  benefits={uc.benefits}
                  outcome={uc.outcome}
                  href={uc.href}
                />
              </div>
            ))}
          </Grid>
        </Container>
      </Section>

      <Section background="primary-900" density="compact" divider>
        <Container>
          <SectionHeader
            eyebrow="Delivery model"
            title="How use cases move from concept to production"
            description="Each workflow follows the same production path with safeguards for reliability and operational continuity."
          />
          <Grid>
            <div className="col-span-4 md:col-span-4 lg:col-span-4">
              <TechnicalHighlight title="Safety and control guardrails">
                <p>
                  Define constraints and fallback policies before deployment so model updates stay within operational limits.
                </p>
              </TechnicalHighlight>
            </div>
            <div className="col-span-4 md:col-span-4 lg:col-span-4">
              <TechnicalHighlight title="Observable execution">
                <p>
                  Monitor data quality, inference performance, and actuation decisions with unified traceability.
                </p>
              </TechnicalHighlight>
            </div>
            <div className="col-span-4 md:col-span-8 lg:col-span-4">
              <TechnicalHighlight title="Incremental rollout strategy">
                <p>
                  Start with contained pilots, validate outcomes, then scale safely across lines, sites, and assets.
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
              Find your fit
            </h2>
            <p className="text-body text-neutral-400 mb-8">
              Map your operational priorities to the right use case and deployment pathway.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/industries"
                className="inline-flex items-center justify-center h-10 px-6 text-body font-medium rounded-md bg-accent text-white hover:bg-accent-hover transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-primary-900"
              >
                View industries
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
