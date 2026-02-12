import Navbar from '../components/layout/Navbar';
import SectionWrapper from '../components/layout/SectionWrapper';
import FeatureCard from '../components/patterns/FeatureCard';
import IndustryTile from '../components/patterns/IndustryTile';
import Button from '../components/ui/Button';

const capabilities = [
  {
    title: 'Real-time Data Ingestion',
    description: 'Stream telemetry, events, and contextual metadata from operational systems without pipeline bottlenecks.'
  },
  {
    title: 'AI Model Development',
    description: 'Train and validate predictive models against production-grade constraints before rollout.'
  },
  {
    title: 'Digital Twins',
    description: 'Mirror physical assets with simulation environments that continuously improve decision quality.'
  },
  {
    title: 'Control Systems',
    description: 'Convert model outputs into reliable control logic with guardrails for safety and performance.'
  },
  {
    title: 'Edge Deployment',
    description: 'Ship inference and policy execution to plants, vehicles, and constrained industrial environments.'
  },
  {
    title: 'Operational Dashboards',
    description: 'Track system state, thresholds, and intervention points in one engineering-grade control view.'
  }
];

const industries = [
  {
    title: 'Manufacturing',
    description: 'Stabilize throughput and reduce downtime with adaptive control in live production lines.'
  },
  {
    title: 'Energy',
    description: 'Balance reliability, demand volatility, and asset efficiency across distributed infrastructure.'
  },
  {
    title: 'Automotive',
    description: 'Accelerate validation loops for autonomy, battery systems, and safety-critical control paths.'
  },
  {
    title: 'Aerospace',
    description: 'Improve mission readiness through high-fidelity simulation and predictive maintenance intelligence.'
  },
  {
    title: 'Semiconductors',
    description: 'Optimize yield and process consistency in tightly coupled, high-precision fabrication workflows.'
  },
  {
    title: 'Infrastructure',
    description: 'Modernize critical systems with predictive monitoring and resilient real-time control.'
  }
];

const diagramStages = ['Data', 'Models', 'Simulation', 'Control', 'Deployment'];

export const metadata = {
  title: 'ORIGYN Platform | Industrial AI Infrastructure',
  description:
    'ORIGYN transforms code into simulation-driven intelligence for predictive models, digital twins, and real-time control systems.'
};

function PlatformDiagram() {
  return (
    <div className="platform-diagram-wrap" role="img" aria-label="Platform flow from data to deployment">
      <svg className="platform-diagram" viewBox="0 0 1060 180" xmlns="http://www.w3.org/2000/svg">
        {diagramStages.map((stage, index) => {
          const x = index * 212;
          const isLast = index === diagramStages.length - 1;

          return (
            <g key={stage} className="platform-diagram__stage" style={{ '--stage-index': index }}>
              <rect x={x + 10} y="30" width="180" height="92" rx="12" className="platform-diagram__rect" />
              <text x={x + 100} y="84" textAnchor="middle" className="platform-diagram__label">
                {stage}
              </text>
              {!isLast && (
                <path
                  d={`M ${x + 194} 76 L ${x + 226} 76`}
                  className="platform-diagram__arrow"
                  markerEnd="url(#arrowHead)"
                />
              )}
            </g>
          );
        })}
        <defs>
          <marker id="arrowHead" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
            <path d="M0,0 L0,6 L6,3 z" className="platform-diagram__arrowhead" />
          </marker>
        </defs>
      </svg>
      <div className="diagram-descriptions">
        <p><strong>Data</strong> ingests telemetry and context from operational sources.</p>
        <p><strong>Models</strong> generate predictions and policies from validated pipelines.</p>
        <p><strong>Simulation</strong> pressure-tests outcomes before production execution.</p>
        <p><strong>Control</strong> applies governed decision logic to physical operations.</p>
        <p><strong>Deployment</strong> closes the loop across cloud, edge, and plant systems.</p>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <div className="page-shell">
      <Navbar
        variant="transparent"
        cta={null}
        links={[
          { href: '#platform-overview', label: 'Platform' },
          { href: '#capabilities', label: 'Capabilities' },
          { href: '#industries', label: 'Industries' },
          { href: '#why-it-matters', label: 'Why It Matters' }
        ]}
      />

      <main>
        <SectionWrapper id="top">
          <p className="eyebrow">Industrial AI Infrastructure</p>
          <h1 className="h1">Turn code into simulation-driven intelligence for real-world operations.</h1>
          <p className="body-lg">
            Build, test, deploy, and monitor predictive models, digital twins, and real-time control
            systems through a single engineering-grade platform.
          </p>
          <div className="btn-row">
            <Button as="a" href="#final-cta" variant="primary">
              Request Access
            </Button>
            <Button as="a" href="#platform-overview" variant="secondary">
              Explore Platform
            </Button>
          </div>
        </SectionWrapper>

        <SectionWrapper id="platform-overview" muted>
          <h2 className="h2">Platform Overview</h2>
          <p className="body-lg body-lg--tight">
            Data to deployment, with simulation as the proving layer between model intent and physical execution.
          </p>
          <PlatformDiagram />
        </SectionWrapper>

        <SectionWrapper id="capabilities">
          <h2 className="h2">Core Capabilities</h2>
          <div className="ds-grid ds-grid--3col">
            {capabilities.map((capability) => (
              <FeatureCard key={capability.title} title={capability.title} description={capability.description} />
            ))}
          </div>
        </SectionWrapper>

        <SectionWrapper id="industries" muted>
          <h2 className="h2">Industries Snapshot</h2>
          <div className="ds-grid ds-grid--3col">
            {industries.map((industry) => (
              <IndustryTile
                key={industry.title}
                title={industry.title}
                description={industry.description}
                href="#final-cta"
                showLink={false}
              />
            ))}
          </div>
        </SectionWrapper>

        <SectionWrapper id="why-it-matters">
          <h2 className="h2">Why This Matters</h2>
          <div className="why-grid">
            <p>
              Re-industrialization depends on systems that can adapt faster than operating conditions change.
              Software alone is insufficient without tight feedback loops to physical operations.
            </p>
            <p>
              Intelligence becomes leverage when teams can test decisions in simulation before they impact live
              infrastructure, safety, and throughput.
            </p>
            <p>
              STEM-driven economic value compounds when modeling, controls, and deployment live in a single,
              verifiable runtime that engineers can trust.
            </p>
          </div>
        </SectionWrapper>

        <SectionWrapper id="final-cta" muted>
          <div className="final-cta">
            <h2 className="h2">Build the next industrial intelligence stack with ORIGYN.</h2>
            <div className="btn-row btn-row--center">
              <Button as="a" href="#top" variant="primary">
                Request Access
              </Button>
              <Button as="a" href="mailto:team@origyn.ai" variant="ghost">
                Talk to Us
              </Button>
            </div>
          </div>
        </SectionWrapper>
      </main>
    </div>
  );
}
