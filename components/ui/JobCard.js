/**
 * Job Card
 * Role, location, department, link.
 * Used on Careers page.
 */
export default function JobCard({
  title,
  department,
  location,
  href,
  className = '',
}) {
  return (
    <a
      href={href}
      className={`
        block rounded-lg p-6
        bg-neutral-900/50 border border-neutral-800
        transition-all duration-200 ease-smooth
        hover:border-neutral-700
        ${className}
      `}
    >
      <h3 className="text-h4 font-display text-neutral-100 mb-2">
        {title}
      </h3>
      <div className="flex flex-wrap gap-4 text-caption text-neutral-500 mb-4">
        {department && <span>{department}</span>}
        {location && <span>{location}</span>}
      </div>
      <span className="text-caption text-accent hover:text-accent-hover transition-colors">
        View role →
      </span>
    </a>
  );
}
