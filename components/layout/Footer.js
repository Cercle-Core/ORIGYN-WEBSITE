/**
 * Footer
 * Dark, structured, dense.
 * Platform links, Industries, Developers, R&D, Legal, Social (minimal)
 *
 * When to use: All pages
 * When NOT to use: N/A - global component
 */
export default function Footer() {
  const links = {
    platform: [
      { label: 'Architecture', href: '/platform' },
      { label: 'Developers', href: '/developers' },
    ],
    industries: [
      { label: 'Manufacturing', href: '/industries#manufacturing' },
      { label: 'Automotive', href: '/industries#automotive' },
      { label: 'Energy', href: '/industries#energy' },
      { label: 'Aerospace', href: '/industries#aerospace' },
      { label: 'Mining', href: '/industries#mining' },
      { label: 'Infrastructure', href: '/industries#infrastructure' },
    ],
    company: [
      { label: 'About', href: '/about' },
      { label: 'Careers', href: '/careers' },
      { label: 'Contact', href: '/contact' },
    ],
    legal: [
      { label: 'Privacy', href: '/privacy' },
      { label: 'Terms', href: '/terms' },
    ],
  };

  const social = [
    { label: 'LinkedIn', href: 'https://linkedin.com', icon: 'linkedin' },
    { label: 'GitHub', href: 'https://github.com', icon: 'github' },
  ];

  return (
    <footer className="bg-primary-900 border-t border-neutral-800">
      <div className="max-w-[var(--max-content-wide)] mx-auto px-4 md:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
          <div>
            <h4 className="text-caption font-display text-neutral-400 uppercase tracking-wider mb-4">
              Platform
            </h4>
            <ul className="space-y-2">
              {links.platform.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="text-body text-neutral-500 hover:text-neutral-300 transition-colors">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-caption font-display text-neutral-400 uppercase tracking-wider mb-4">
              Industries
            </h4>
            <ul className="space-y-2">
              {links.industries.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="text-body text-neutral-500 hover:text-neutral-300 transition-colors">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-caption font-display text-neutral-400 uppercase tracking-wider mb-4">
              Company
            </h4>
            <ul className="space-y-2">
              {links.company.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="text-body text-neutral-500 hover:text-neutral-300 transition-colors">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-caption font-display text-neutral-400 uppercase tracking-wider mb-4">
              Legal
            </h4>
            <ul className="space-y-2">
              {links.legal.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="text-body text-neutral-500 hover:text-neutral-300 transition-colors">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-caption font-display text-neutral-400 uppercase tracking-wider mb-4">
              Social
            </h4>
            <ul className="flex gap-4">
              {social.map((s) => (
                <li key={s.href}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-body text-neutral-500 hover:text-neutral-300 transition-colors"
                    aria-label={s.label}
                  >
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-neutral-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <span className="text-caption text-neutral-600">© ORIGYN. Industrial intelligence.</span>
        </div>
      </div>
    </footer>
  );
}
