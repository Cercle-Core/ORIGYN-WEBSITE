import { Section, Container, Grid } from '../../components/layout';
import { Button, IndustryDetailCard, FadeIn } from '../../components/ui';

const industries = [
  {
    id: 'manufacturing',
    title: 'Manufacturing',
    problem: 'Yield optimization, unplanned downtime, quality variability, and supply chain disruption.',
    solution: 'Predictive maintenance, digital twin optimization, and real-time quality control. End-to-end pipeline from sensor data to production adjustments.',
    advantage: 'Reduce downtime by 30%+. Improve yield consistency. Scale from single line to plant-wide.',
  },
  {
    id: 'automotive',
    title: 'Automotive',
    problem: 'Assembly complexity, supply chain volatility, and transition to electric/autonomous vehicles.',
    solution: 'Assembly line optimization, demand forecasting, and autonomous system validation. Simulation-first development with closed-loop testing.',
    advantage: 'Faster time-to-market. Lower defect rates. Seamless EV and AV integration.',
  },
  {
    id: 'energy',
    title: 'Energy',
    problem: 'Grid balancing, demand forecasting, asset performance, and renewable integration.',
    solution: 'Real-time grid optimization, asset health monitoring, and demand response. Unified data layer for generation, transmission, and distribution.',
    advantage: 'Improve grid stability. Extend asset life. Accelerate renewable adoption.',
  },
  {
    id: 'aerospace',
    title: 'Aerospace',
    problem: 'Fleet health, mission planning, digital twin validation, and certification complexity.',
    solution: 'Fleet-wide health monitoring, mission optimization, and simulation-based certification. Closed-loop experimentation before physical deployment.',
    advantage: 'Reduce operational risk. Faster certification. Data-driven maintenance.',
  },
  {
    id: 'mining',
    title: 'Mining',
    problem: 'Equipment optimization, safety, resource extraction efficiency, and remote operations.',
    solution: 'Predictive maintenance for heavy equipment, autonomous haulage optimization, and safety monitoring. Edge deployment for low-latency control.',
    advantage: 'Maximize equipment uptime. Improve safety metrics. Optimize extraction.',
  },
  {
    id: 'infrastructure',
    title: 'Infrastructure',
    problem: 'Smart grids, traffic management, structural monitoring, and aging asset maintenance.',
    solution: 'Real-time monitoring, predictive maintenance, and adaptive control. Integrate IoT, SCADA, and AI in a single platform.',
    advantage: 'Extend asset life. Reduce congestion. Enable smart city scale.',
  },
];

export default function IndustriesPage() {
  return (
    <main className="pt-16">
      {/* Hero */}
      <Section background="primary-800">
        <Container>
          <FadeIn>
            <div className="max-w-2xl">
              <h1 className="text-h1 font-display text-neutral-100 mb-6">
                Industries
              </h1>
              <p className="text-body-lg text-neutral-400 mb-8">
                Industrial AI that ships. From manufacturing to infrastructure.
              </p>
              <Button variant="primary">Request Access</Button>
            </div>
          </FadeIn>
        </Container>
      </Section>

      {/* Industry cards */}
      <Section divider>
        <Container>
          <h2 className="text-h2 font-display text-neutral-100 mb-12">
            By industry
          </h2>
          <Grid>
            {industries.map((ind) => (
              <div
                key={ind.id}
                className="col-span-4 md:col-span-6 lg:col-span-4"
              >
                <IndustryDetailCard
                  id={ind.id}
                  title={ind.title}
                  problem={ind.problem}
                  solution={ind.solution}
                  advantage={ind.advantage}
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
              Find your use case
            </h2>
            <p className="text-body text-neutral-400 mb-8">
              Explore specific applications across predictive maintenance, smart factory, and more.
            </p>
            <a
              href="/use-cases"
              className="inline-flex items-center justify-center h-10 px-6 text-body font-medium rounded-md bg-accent text-white hover:bg-accent-hover transition-all duration-200"
            >
              View use cases
            </a>
          </div>
        </Container>
      </Section>
    </main>
  );
}
