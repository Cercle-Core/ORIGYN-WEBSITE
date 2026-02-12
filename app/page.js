import styles from './page.module.css';

const platformLayers = [
  {
    title: 'Data',
    description: 'Ingest live operational, sensor, and process data from critical systems.',
  },
  {
    title: 'Models',
    description: 'Train and validate industrial AI models with engineering-grade accuracy.',
  },
  {
    title: 'Simulation',
    description: 'Run digital twin scenarios to test outcomes before field execution.',
  },
  {
    title: 'Control',
    description: 'Apply model-guided control logic to optimize operations in real time.',
  },
  {
    title: 'Deployment',
    description: 'Deploy intelligence at the edge and across enterprise infrastructure.',
  },
];

const capabilities = [
  {
    title: 'Real-time Data Ingestion',
    description: 'Unify high-frequency telemetry and operational data from distributed assets.',
  },
  {
    title: 'AI Model Development',
    description: 'Build industrial AI workflows with transparent validation and retraining cycles.',
  },
  {
    title: 'Digital Twins',
    description: 'Model real-world systems to evaluate performance, risk, and optimization paths.',
  },
  {
    title: 'Control Systems',
    description: 'Close the loop between prediction and action with adaptive control strategies.',
  },
  {
    title: 'Edge Deployment',
    description: 'Deliver low-latency intelligence directly where equipment and operators run.',
  },
  {
    title: 'Operational Dashboards',
    description: 'Give teams a single decision interface for health, alerts, and interventions.',
  },
];

const industries = [
  {
    name: 'Manufacturing',
    problem: 'Reduce downtime while increasing throughput and process consistency.',
  },
  {
    name: 'Energy',
    problem: 'Balance reliability, efficiency, and demand volatility across critical assets.',
  },
  {
    name: 'Automotive',
    problem: 'Improve production quality and resilience across connected supply networks.',
  },
  {
    name: 'Aerospace',
    problem: 'Enhance safety and mission readiness in high-complexity operations.',
  },
  {
    name: 'Semiconductors',
    problem: 'Optimize precision process control in yield-sensitive fabrication lines.',
  },
  {
    name: 'Infrastructure',
    problem: 'Modernize aging systems with predictive intelligence and adaptive operations.',
  },
];

export default function Home() {
  return (
    <main className={styles.homePage}>
      <section className={`${styles.hero} ${styles.sectionSpacing}`}>
        <p className={styles.eyebrow}>Industrial Intelligence Infrastructure</p>
        <h1>Build adaptive industrial systems that think, simulate, and execute.</h1>
        <p className={styles.sectionIntro}>
          ORIGYN provides the platform foundation for engineering teams that need real-time
          intelligence in critical operations. Move from fragmented tools to integrated,
          production-grade decision infrastructure.
        </p>
        <div className={styles.ctaGroup}>
          <a className={`${styles.btn} ${styles.btnPrimary}`} href="#final-cta">
            Request Access
          </a>
          <a className={`${styles.btn} ${styles.btnSecondary}`} href="#platform-overview">
            Explore Platform
          </a>
        </div>
      </section>

      <section id="platform-overview" className={styles.sectionSpacing}>
        <h2>Platform Overview</h2>
        <p className={styles.sectionIntro}>
          A unified flow from operational data to deployed intelligence.
        </p>
        <figure className={styles.diagram} role="group" aria-label="Platform architecture flow diagram">
          <svg viewBox="0 0 980 120" aria-hidden="true" focusable="false" className={styles.svg}>
            {platformLayers.map((layer, index) => {
              const width = 180;
              const x = index * 195;

              return (
                <g className={styles.layer} key={layer.title}>
                  <rect x={x} y="24" rx="10" width={width} height="70" />
                  <text x={x + width / 2} y="66" textAnchor="middle">
                    {layer.title}
                  </text>
                </g>
              );
            })}
          </svg>
          <figcaption className={styles.layerDescriptionGrid}>
            {platformLayers.map((layer) => (
              <article key={layer.title} className={styles.layerDescription}>
                <h3>{layer.title}</h3>
                <p>{layer.description}</p>
              </article>
            ))}
          </figcaption>
        </figure>
      </section>

      <section className={styles.sectionSpacing}>
        <h2>Core Capabilities</h2>
        <p className={styles.sectionIntro}>Purpose-built components for industrial intelligence lifecycle delivery.</p>
        <div className={styles.cardGrid}>
          {capabilities.map((capability) => (
            <article key={capability.title} className={styles.card}>
              <h3>{capability.title}</h3>
              <p>{capability.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.sectionSpacing}>
        <h2>Industries We Serve</h2>
        <p className={styles.sectionIntro}>Designed for sectors where performance, safety, and resilience are non-negotiable.</p>
        <div className={styles.tileGrid}>
          {industries.map((industry) => (
            <article key={industry.name} className={styles.tile}>
              <h3>{industry.name}</h3>
              <p>{industry.problem}</p>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.sectionSpacing}>
        <h2>Why This Matters</h2>
        <p>
          Re-industrialization demands systems that are faster to learn, faster to adapt, and
          grounded in physical reality. Static operations cannot keep pace with modern production
          pressure.
        </p>
        <p>
          Intelligence is leverage. Teams that connect data, models, and control in one operating
          layer can convert uncertainty into measurable advantage.
        </p>
        <p>
          This is how STEM-driven organizations create durable economic value: by deploying
          engineering rigor at machine speed where decisions are made.
        </p>
      </section>

      <section id="final-cta" className={`${styles.sectionSpacing} ${styles.finalCta}`}>
        <h2>Build the next operating layer for industry.</h2>
        <div className={styles.ctaGroup}>
          <a className={`${styles.btn} ${styles.btnPrimary}`} href="mailto:team@origyn.io?subject=Request%20Access">
            Request Access
          </a>
          <a className={`${styles.btn} ${styles.btnSecondary}`} href="mailto:team@origyn.io?subject=Talk%20to%20ORIGYN">
            Talk to Us
          </a>
        </div>
      </section>
    </main>
  );
}
