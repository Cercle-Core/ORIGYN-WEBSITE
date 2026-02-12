export default function ArchitectureLayerBlock({ title, description }) {
  return (
    <div className="arch-layer">
      <strong>{title}</strong>
      <br />
      <small>{description}</small>
    </div>
  );
}
