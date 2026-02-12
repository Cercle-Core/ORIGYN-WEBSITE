export default function IndustryTile({ title, description, href = '#', showLink = true }) {
  return (
    <article className="tile">
      <h3>{title}</h3>
      <p>{description}</p>
      {showLink ? (
        <a className="eyebrow" href={href}>
          Learn more →
        </a>
      ) : null}
    </article>
  );
}
