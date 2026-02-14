import { Section, Container, Grid } from '../../components/layout';
import { Button, IndustryDetailCard, TechnicalHighlight, FadeIn } from '../../components/ui';

export const metadata = {
  title: 'Industries',
  description:
    'Industrial AI that ships. Manufacturing, automotive, energy, aerospace, mining, infrastructure. Solutions by industry.',
  openGraph: {
    title: 'Industries | ORIGYN',
    description: 'Industrial AI that ships. From manufacturing to infrastructure.',
  },
};

const industries = [
  {
    id: 'manufacturing',
    title: 'Manufacturing',
    problem: 'Yield optimization, unplanned downtime, quality variability, and supply chain disruption.',
    solution: 'Predictive maintenance, digital twin optimization, and real-time quality control. End-to-end pipeline from sensor data to production adjustments.',
    advantage: 'Reduce downtime by 30%+. Improve yield consistency. Scale from single line to plant-wide.',
    outcome: 'Best for high-throughput plants with tight quality tolerances.',
  },
  {
    id: 'automotive',
    title: 'Automotive',
    problem: 'Assembly complexity, supply chain volatility, and transition to electric/autonomous vehicles.',
    solution: 'Assembly line optimization, demand forecasting, and autonomous system validation. Simulation-first development with closed-loop testing.',
    advantage: 'Faster time-to-market. Lower defect rates. Seamless EV and AV integration.',
    outcome: 'Aligns engineering, production, and validation in one loop.',
  },
  {
    id: 'energy',
    title: 'Energy',
    problem: 'Grid balancing, demand forecasting, asset performance, and renewable integration.',
    solution: 'Real-time grid optimization, asset health monitoring, and demand response. Unified data layer for generation, transmission, and distribution.',
    advantage: 'Improve grid stability. Extend asset life. Accelerate renewable adoption.',
    outcome: 'Designed for mission-critical systems with real-time demand shifts.',
  },
  {
    id: 'aerospace',
    title: 'Aerospace',
    problem: 'Fleet health, mission planning, digital twin validation, and certification complexity.',
    solution: 'Fleet-wide health monitoring, mission optimization, and simulation-based certification. Closed-loop experimentation before physical deployment.',
    advantage: 'Reduce operational risk. Faster certification. Data-driven maintenance.',
    outcome: 'Supports simulation-heavy, safety-constrained decision pipelines.',
  },
  {
    id: 'mining',
    title: 'Mining',
    problem: 'Equipment optimization, safety, resource extraction efficiency, and remote operations.',
    solution: 'Predictive maintenance for heavy equipment, autonomous haulage optimization, and safety monitoring. Edge deployment for low-latency control.',
    advantage: 'Maximize equipment uptime. Improve safety metrics. Optimize extraction.',
    outcome: 'Optimized for harsh environments and remote site operations.',
  },
  {
    id: 'infrastructure',
    title: 'Infrastructure',
    problem: 'Smart grids, traffic management, structural monitoring, and aging asset maintenance.',
    solution: 'Real-time monitoring, predictive maintenance, and adaptive control. Integrate IoT, SCADA, and AI in a single platform.',
    advantage: 'Extend asset life. Reduce congestion. Enable smart city scale.',
    outcome: 'Suitable for long-lifecycle assets requiring continuous monitoring.',
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

export default function IndustriesPage() {
  const featuredIndustryIds = new Set(['manufacturing', 'energy']);

  return (
    <main className="pt-16">
      <Section background="primary-800" density="hero" divider>
        <Container>
          <FadeIn>
            <div className="grid lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-7">
                <p className="text-caption uppercase tracking-[0.14em] text-accent mb-4">
                  Industry solutions
                </p>
                <h1 className="text-h1 font-display text-neutral-100 mb-6">
                  Industrial AI adapted to domain-specific operations
                </h1>
                <p className="text-body-lg text-neutral-300 mb-4 max-w-2xl">
                  From manufacturing to critical infrastructure, deploy one platform tuned for each operational context.
                </p>
                <p className="text-body text-neutral-500 mb-8 max-w-xl">
                  Standardize your data-to-control stack while preserving the unique constraints, safety models, and KPIs of each industry.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                  <Button variant="primary">Request Access</Button>
                  <a
                    href="/use-cases"
                    className="inline-flex items-center justify-center h-10 px-6 text-body font-medium rounded-md border border-neutral-600 bg-transparent text-neutral-100 hover:border-neutral-500 hover:bg-neutral-800/50 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-primary-900"
                  >
                    Explore use cases
                  </a>
                </div>
                <div className="flex flex-wrap gap-6 text-caption text-neutral-400 border-t border-neutral-800 pt-5">
                  <span>6 operational domains</span>
                  <span>Edge + cloud deployment</span>
                  <span>Safety-conscious control workflows</span>
                </div>
              </div>

              <div className="lg:col-span-5">
                <div className="rounded-xl border border-accent/30 bg-gradient-to-b from-primary-700/70 to-primary-900 p-6 shadow-[0_0_45px_-24px_rgba(59,130,246,0.6)]">
                  <p className="text-caption uppercase tracking-[0.12em] text-accent mb-5">Coverage snapshot</p>
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="p-4 rounded-md border border-neutral-800 bg-neutral-900/70">
                        <p className="text-caption text-neutral-500 mb-2">Industries</p>
                        <p className="text-h4 font-display text-neutral-100">6</p>
                      </div>
                      <div className="p-4 rounded-md border border-neutral-800 bg-neutral-900/70">
                        <p className="text-caption text-neutral-500 mb-2">Core layers</p>
                        <p className="text-h4 font-display text-neutral-100">Data · Model · Control</p>
                      </div>
                    </div>
                    <div className="p-4 rounded-md border border-neutral-800 bg-neutral-900/70">
                      <p className="text-caption text-neutral-500 mb-2">Engagement model</p>
                      <p className="text-body text-neutral-300">Architecture alignment, pilot deployment, then production rollout.</p>
                    </div>
                    <p className="text-caption text-neutral-500">Every deployment is tuned to local constraints, safety requirements, and operating goals.</p>
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
            eyebrow="Portfolio"
            title="By industry"
            description="Choose a domain to see the operating challenge, platform approach, and strategic upside."
          />
          <Grid>
            {industries.map((ind) => (
              <div
                key={ind.id}
                className={`col-span-4 md:col-span-4 ${featuredIndustryIds.has(ind.id) ? 'lg:col-span-6' : 'lg:col-span-3'}`}
              >
                <IndustryDetailCard
                  id={ind.id}
                  title={ind.title}
                  problem={ind.problem}
                  solution={ind.solution}
                  advantage={ind.advantage}
                  outcome={ind.outcome}
                  href={`/use-cases#${ind.id}`}
                />
              </div>
            ))}
          </Grid>
        </Container>
      </Section>

      <Section background="primary-900" density="compact" divider>
        <Container>
          <SectionHeader
            eyebrow="Cross-industry"
            title="What stays consistent across every deployment"
            description="No matter the domain, each rollout is built around reliability, observability, and practical integration pathways."
          />
          <Grid>
            <div className="col-span-4 md:col-span-4 lg:col-span-4">
              <TechnicalHighlight title="Safety-aware operations">
                <p>
                  Hard limits, operator override paths, and staged rollouts protect production environments while models evolve.
                </p>
              </TechnicalHighlight>
            </div>
            <div className="col-span-4 md:col-span-4 lg:col-span-4">
              <TechnicalHighlight title="Observable by design">
                <p>
                  Unified telemetry, model lineage, and event traceability across ingestion, inference, and actuation workflows.
                </p>
              </TechnicalHighlight>
            </div>
            <div className="col-span-4 md:col-span-8 lg:col-span-4">
              <TechnicalHighlight title="Integration-ready architecture">
                <p>
                  Connect existing OT and IT systems incrementally without replacing core infrastructure in a single cutover.
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
              Find your use case
            </h2>
            <p className="text-body text-neutral-400 mb-8">
              Explore use-case blueprints or work with our team to map your domain constraints into a production plan.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/use-cases"
                className="inline-flex items-center justify-center h-10 px-6 text-body font-medium rounded-md bg-accent text-white hover:bg-accent-hover transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-primary-900"
              >
                View use cases
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
