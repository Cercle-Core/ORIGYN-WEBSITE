export default function TechnicalHighlightPanel({ title, children }) {
  return (
    <aside className="highlight-panel">
      <strong>{title}</strong>
      <p>{children}</p>
    </aside>
  );
}
