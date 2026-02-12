const featureCards = [
  {
    title: 'Model-to-Operations Pipeline',
    body: 'Build and validate predictive models against simulation environments before deployment into live operational systems.'
  },
  {
    title: 'Digital Twin Runtime',
    body: 'Mirror physical assets with high-fidelity digital twins and continuously optimize control logic using incoming telemetry.'
  },
  {
    title: 'Real-time Governance',
    body: 'Monitor thresholds, issue alerts, and orchestrate system responses with a single engineering-grade control interface.'
  }
];

const industryTiles = [
  {
    title: 'Manufacturing',
    body: 'Reduce production variance and increase throughput via simulation-informed control loops.'
  },
  {
    title: 'Mobility',
    body: 'Validate autonomy and routing strategies under constrained, real-world operating conditions.'
  }
];

export default function Home() {
  return (
    <div className="page-shell">
      <header className="top-nav">
        <div className="container top-nav__inner">
          <strong className="logo">ORIGYN</strong>
          <nav className="nav-links" aria-label="Primary">
            <a href="#platform">Platform</a>
            <a href="#architecture">Architecture</a>
            <a href="#industries">Industries</a>
            <a href="#developers">Developers</a>
          </nav>
          <a className="btn btn--primary" href="#access">
            Request Access
          </a>
        </div>
      </header>

      <main>
        <section className="section">
          <div className="container">
            <p className="eyebrow">Phase 2 · Design System Foundation</p>
            <h1 className="h1">Simulation-Driven Intelligence for Industrial Systems</h1>
            <p className="body-lg">
              A technical identity built for high-trust operations: engineered visual language,
              reusable components, and governance-ready UI primitives for predictive models,
              digital twins, and autonomous control infrastructure.
            </p>
            <div className="btn-row">
              <a className="btn btn--primary" href="#platform">
                Explore Platform
              </a>
              <a className="btn btn--secondary" href="#developers">
                Read API Docs
              </a>
              <a className="btn btn--ghost" href="#architecture">
                View Architecture
              </a>
            </div>
          </div>
        </section>

        <section id="platform" className="section section--muted">
          <div className="container">
            <h2 className="h2">Core Capability Components</h2>
            <div className="grid-3">
              {featureCards.map((card, index) => (
                <article
                  className={`card ${index === 0 ? 'card--highlight' : ''}`}
                  key={card.title}
                >
                  <h3>{card.title}</h3>
                  <p>{card.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="architecture" className="section">
          <div className="container">
            <h2 className="h2">Architecture Diagram Blocks</h2>
            <div className="arch-grid">
              <div className="arch-layer">
                <strong>Data Layer</strong>
                <br />
                <small>Telemetry ingestion, historian systems, and contextual metadata streams.</small>
              </div>
              <div className="arch-layer">
                <strong>Intelligence Layer</strong>
                <br />
                <small>Simulation execution, model training, and policy optimization workflows.</small>
              </div>
              <div className="arch-layer">
                <strong>Control Layer</strong>
                <br />
                <small>Decision APIs, real-time monitoring, threshold alerts, and orchestration.</small>
              </div>
            </div>
            <aside className="highlight-panel">
              <strong>Technical Highlight</strong>
              <p>
                Every production action can be traced to validated model behavior under simulated
                and live operating conditions.
              </p>
            </aside>
          </div>
        </section>

        <section id="industries" className="section section--muted">
          <div className="container">
            <h2 className="h2">Industry Tiles</h2>
            <div className="tiles">
              {industryTiles.map((tile) => (
                <article className="tile" key={tile.title}>
                  <h3>{tile.title}</h3>
                  <p>{tile.body}</p>
                  <a className="eyebrow" href="#">
                    Learn more →
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="developers" className="section">
          <div className="container">
            <h2 className="h2">Code Snippet Block</h2>
            <div className="code-block">
              <div className="code-head">
                <span>Python · Control Policy Deployment</span>
                <button className="copy-btn" type="button" aria-label="Copy code snippet">
                  Copy
                </button>
              </div>
              <pre>{`from origyn import Runtime

runtime = Runtime(project="factory-line-a")
policy = runtime.models.load("predictive_control_v4")
runtime.deploy(policy, target="live-control")`}</pre>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer-grid">
          <div>
            <h4>Platform</h4>
            <ul>
              <li>Capabilities</li>
              <li>Architecture</li>
              <li>Integrations</li>
            </ul>
          </div>
          <div>
            <h4>Industries</h4>
            <ul>
              <li>Manufacturing</li>
              <li>Mobility</li>
              <li>Autonomous Systems</li>
            </ul>
          </div>
          <div>
            <h4>Developers</h4>
            <ul>
              <li>Docs</li>
              <li>API</li>
              <li>CLI</li>
            </ul>
          </div>
          <div>
            <h4>R&amp;D</h4>
            <ul>
              <li>Research</li>
              <li>Benchmarks</li>
              <li>Validation</li>
            </ul>
          </div>
          <div>
            <h4>Legal</h4>
            <ul>
              <li>Privacy</li>
              <li>Security</li>
              <li>Terms</li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}
