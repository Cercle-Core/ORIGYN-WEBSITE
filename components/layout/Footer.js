const footerColumns = [
  {
    heading: 'Platform',
    items: ['Capabilities', 'Architecture', 'Integrations']
  },
  {
    heading: 'Industries',
    items: ['Manufacturing', 'Mobility', 'Autonomous Systems']
  },
  {
    heading: 'Developers',
    items: ['Docs', 'API', 'CLI']
  },
  {
    heading: 'R&D',
    items: ['Research', 'Benchmarks', 'Validation']
  },
  {
    heading: 'Legal',
    items: ['Privacy', 'Security', 'Terms']
  }
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        {footerColumns.map((column) => (
          <div key={column.heading}>
            <h4>{column.heading}</h4>
            <ul>
              {column.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </footer>
  );
}
