export default function SectionWrapper({ id, muted = false, children }) {
  return (
    <section id={id} className={`section ${muted ? 'section--muted' : ''}`.trim()}>
      <div className="container">{children}</div>
    </section>
  );
}
