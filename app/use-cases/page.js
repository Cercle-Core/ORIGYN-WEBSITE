import { Section, Container, Grid } from '../../components/layout';
import { Button, UseCaseCard, FadeIn } from '../../components/ui';

const useCases = [
  {
    title: 'Predictive maintenance',
    description: 'Reduce unplanned downtime by predicting failures before they occur. Train on historical sensor data, deploy at the edge or cloud.',
    benefits: [
      '30%+ reduction in unplanned downtime',
      'Condition-based vs. time-based maintenance',
      'Fleet-wide and single-asset deployment',
    ],
    href: '/industries#manufacturing',
  },
  {
    title: 'Smart factory',
    description: 'End-to-end optimization from raw material to finished product. Real-time quality control, yield optimization, and adaptive scheduling.',
    benefits: [
      'Real-time quality feedback loops',
      'Digital twin for what-if analysis',
      'Multi-line and plant-wide scaling',
    ],
    href: '/industries#manufacturing',
  },
  {
    title: 'Fleet intelligence',
    description: 'Optimize routing, maintenance, and utilization across vehicle and equipment fleets. From logistics to mining to aviation.',
    benefits: [
      'Predictive maintenance at scale',
      'Route and load optimization',
      'Unified telemetry across asset types',
    ],
    href: '/industries#automotive',
  },
  {
    title: 'Digital twin optimization',
    description: 'Run simulations before physical deployment. Validate control strategies, test edge cases, and accelerate R&D.',
    benefits: [
      'Simulation-first development',
      'Closed-loop experimentation',
      'Hardware-in-the-loop support',
    ],
    href: '/rnd',
  },
  {
    title: 'Autonomous systems',
    description: 'From autonomous vehicles to robotic assembly. Train, validate, and deploy with safety and determinism built in.',
    benefits: [
      'Simulation-based validation',
      'Real-time perception and control',
      'Certification-ready audit trails',
    ],
    href: '/industries#automotive',
  },
];

export default function UseCasesPage() {
  return (
    <main className="pt-16">
      {/* Hero */}
      <Section background="primary-800">
        <Container>
          <FadeIn>
            <div className="max-w-2xl">
              <h1 className="text-h1 font-display text-neutral-100 mb-6">
                Use cases
              </h1>
              <p className="text-body-lg text-neutral-400 mb-8">
                Industrial AI applications that ship. From predictive maintenance to autonomous systems.
              </p>
              <Button variant="primary">Request Access</Button>
            </div>
          </FadeIn>
        </Container>
      </Section>

      {/* Use case cards */}
      <Section divider>
        <Container>
          <h2 className="text-h2 font-display text-neutral-100 mb-12">
            Applications
          </h2>
          <Grid>
            {useCases.map((uc, i) => (
              <div
                key={i}
                className="col-span-4 md:col-span-6 lg:col-span-4"
              >
                <UseCaseCard
                  title={uc.title}
                  description={uc.description}
                  benefits={uc.benefits}
                  href={uc.href}
                />
              </div>
            ))}
          </Grid>
        </Container>
      </Section>

      {/* CTA */}
      <Section background="primary-800">
        <Container>
          <div className="max-w-2xl mx-auto text-center py-12">
            <h2 className="text-h2 font-display text-neutral-100 mb-4">
              Find your fit
            </h2>
            <p className="text-body text-neutral-400 mb-8">
              Explore industries and platform capabilities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/industries"
                className="inline-flex items-center justify-center h-10 px-6 text-body font-medium rounded-md bg-accent text-white hover:bg-accent-hover transition-all duration-200"
              >
                View industries
              </a>
              <a
                href="/platform"
                className="inline-flex items-center justify-center h-10 px-6 text-body font-medium rounded-md border border-neutral-600 bg-transparent text-neutral-100 hover:border-neutral-500 hover:bg-neutral-800/50 transition-all duration-200"
              >
                Platform overview
              </a>
            </div>
          </div>
        </Container>
      </Section>
    </main>
  );
}
