import { Section, Container, Grid } from '../../components/layout';
import { Button, JobCard, FadeIn } from '../../components/ui';

const jobs = [
  {
    title: 'Senior Control Systems Engineer',
    department: 'Engineering',
    location: 'Remote',
    href: '#',
  },
  {
    title: 'ML Engineer — Industrial AI',
    department: 'Engineering',
    location: 'Remote',
    href: '#',
  },
  {
    title: 'Solutions Architect',
    department: 'Solutions',
    location: 'Remote',
    href: '#',
  },
];

export default function CareersPage() {
  return (
    <main className="pt-16">
      {/* Hero */}
      <Section background="primary-800">
        <Container>
          <FadeIn>
            <div className="max-w-2xl">
              <h1 className="text-h1 font-display text-neutral-100 mb-6">
                Careers
              </h1>
              <p className="text-body-lg text-neutral-400 mb-8">
                Build industrial AI that ships. Join engineers who bridge research and production.
              </p>
              <a
                href="#open-roles"
                className="inline-flex items-center justify-center h-10 px-6 text-body font-medium rounded-md bg-accent text-white hover:bg-accent-hover transition-all duration-200"
              >
                View open roles
              </a>
            </div>
          </FadeIn>
        </Container>
      </Section>

      {/* Culture */}
      <Section divider>
        <Container>
          <h2 className="text-h2 font-display text-neutral-100 mb-8">
            Why join us
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-3xl">
            <div>
              <h4 className="text-h4 font-display text-neutral-100 mb-2">
                Ship at scale
              </h4>
              <p className="text-body text-neutral-400">
                Work on systems that run in production. Manufacturing, energy, aerospace.
              </p>
            </div>
            <div>
              <h4 className="text-h4 font-display text-neutral-100 mb-2">
                Deep technical work
              </h4>
              <p className="text-body text-neutral-400">
                Control systems, real-time, AI. No shallow features. Serious engineering.
              </p>
            </div>
            <div>
              <h4 className="text-h4 font-display text-neutral-100 mb-2">
                Remote-first
              </h4>
              <p className="text-body text-neutral-400">
                Work from anywhere. Async-friendly. We focus on output, not hours.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* Open roles */}
      <Section background="primary-900" id="open-roles">
        <Container>
          <h2 className="text-h2 font-display text-neutral-100 mb-12">
            Open roles
          </h2>
          <Grid>
            {jobs.map((job, i) => (
              <div key={i} className="col-span-4 md:col-span-6 lg:col-span-4">
                <JobCard
                  title={job.title}
                  department={job.department}
                  location={job.location}
                  href={job.href}
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
              Don&apos;t see a fit?
            </h2>
            <p className="text-body text-neutral-400 mb-8">
              We&apos;re always looking for exceptional engineers. Get in touch.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center justify-center h-10 px-6 text-body font-medium rounded-md border border-neutral-600 bg-transparent text-neutral-100 hover:border-neutral-500 hover:bg-neutral-800/50 transition-all duration-200"
            >
              Contact us
            </a>
          </div>
        </Container>
      </Section>
    </main>
  );
}
