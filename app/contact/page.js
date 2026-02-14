import { Section, Container, Grid } from '../../components/layout';
import { ContactForm, FadeIn } from '../../components/ui';

export const metadata = {
  title: 'Contact',
  description:
    'Get in touch with ORIGYN. Recruits, investors, partners. General inquiries, partnerships, and careers.',
  openGraph: {
    title: 'Contact | ORIGYN',
    description: 'Get in touch with ORIGYN. Recruits, investors, partners.',
  },
};

export default function ContactPage() {
  return (
    <main className="pt-16">
      {/* Hero */}
      <Section background="primary-800">
        <Container>
          <FadeIn>
            <div className="max-w-2xl">
              <h1 className="text-h1 font-display text-neutral-100 mb-6">
                Contact
              </h1>
              <p className="text-body-lg text-neutral-400 mb-8">
                Recruits, investors, partners. We&apos;d love to hear from you.
              </p>
            </div>
          </FadeIn>
        </Container>
      </Section>

      {/* Form + info */}
      <Section divider>
        <Container>
          <Grid>
            <div className="col-span-4 md:col-span-6 lg:col-span-7">
              <ContactForm />
            </div>
            <div className="col-span-4 md:col-span-6 lg:col-span-5">
              <div className="space-y-8">
                <div>
                  <h3 className="text-h4 font-display text-neutral-100 mb-4">
                    General inquiries
                  </h3>
                  <p className="text-body text-neutral-400">
                    hello@origyn.io
                  </p>
                </div>
                <div>
                  <h3 className="text-h4 font-display text-neutral-100 mb-4">
                    Partnerships
                  </h3>
                  <p className="text-body text-neutral-400">
                    partners@origyn.io
                  </p>
                </div>
                <div>
                  <h3 className="text-h4 font-display text-neutral-100 mb-4">
                    Careers
                  </h3>
                  <p className="text-body text-neutral-400">
                    <a href="/careers" className="text-accent hover:text-accent-hover">
                      View open roles →
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </Grid>
        </Container>
      </Section>
    </main>
  );
}
