export default function FeatureCard({ title, description, highlighted = false }) {
  return (
    <article className={`card ${highlighted ? 'card--highlight' : ''}`.trim()}>
      <h3>{title}</h3>
      <p>{description}</p>
    </article>
  );
}
