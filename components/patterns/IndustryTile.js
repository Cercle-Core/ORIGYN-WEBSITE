export default function IndustryTile({ title, description, href = '#' }) {
  return (
    <article className="tile">
      <h3>{title}</h3>
      <p>{description}</p>
      <a className="eyebrow" href={href}>
        Learn more →
      </a>
    </article>
  );
}
