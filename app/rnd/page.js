import { Section, Container, Grid } from '../../components/layout';
import { Button, Card, TechnicalHighlight, FadeIn } from '../../components/ui';

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

export default function RndPage() {
  return (
    <main className="pt-16">
      {/* Hero */}
      <Section background="primary-800">
        <Container>
          <FadeIn>
            <div className="max-w-2xl">
              <h1 className="text-h1 font-display text-neutral-100 mb-6">
                R&D
              </h1>
              <p className="text-body-lg text-neutral-400 mb-8">
                Simulation-first research. Closed-loop experimentation. Industrial co-design.
              </p>
              <Button variant="primary">Request Access</Button>
            </div>
          </FadeIn>
        </Container>
      </Section>

      {/* Focus areas */}
      <Section divider>
        <Container>
          <h2 className="text-h2 font-display text-neutral-100 mb-12">
            Research focus
          </h2>
          <Grid>
            <div className="col-span-4 md:col-span-4 lg:col-span-4">
              <Card
                title="Simulation-first research"
                description="Validate in simulation before physical deployment. Reduce risk, accelerate iteration, and test edge cases safely."
              />
            </div>
            <div className="col-span-4 md:col-span-4 lg:col-span-4">
              <Card
                title="Closed-loop experimentation"
                description="Feedback from real systems into models. Continuous improvement with production data. No handoffs."
              />
            </div>
            <div className="col-span-4 md:col-span-4 lg:col-span-4">
              <Card
                title="Industrial co-design"
                description="Built with industry from day one. Domain experts, control engineers, and AI researchers in the loop."
              />
            </div>
          </Grid>
        </Container>
      </Section>

      {/* STEM impact */}
      <Section background="primary-900">
        <Container>
          <h2 className="text-h2 font-display text-neutral-100 mb-8">
            STEM impact
          </h2>
          <TechnicalHighlight title="Attracting serious engineers">
            <p>
              We partner with universities and research institutions to advance industrial AI.
              From internships to joint projects, we invest in the next generation of engineers
              who bridge AI and control systems.
            </p>
            <p className="mt-4">
              Open-source tooling, workshops, and collaborative research. Industrial AI that
              ships starts with talent that understands both domains.
            </p>
          </TechnicalHighlight>
        </Container>
      </Section>

      {/* CTA */}
      <Section background="primary-800">
        <Container>
          <div className="max-w-2xl mx-auto text-center py-12">
            <h2 className="text-h2 font-display text-neutral-100 mb-4">
              Partner with us
            </h2>
            <p className="text-body text-neutral-400 mb-8">
              Researchers, universities, and industry partners. Get in touch.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center justify-center h-10 px-6 text-body font-medium rounded-md bg-accent text-white hover:bg-accent-hover transition-all duration-200"
            >
              Contact us
            </a>
          </div>
        </Container>
      </Section>
    </main>
  );
}
