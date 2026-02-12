import Footer from '../../components/layout/Footer';
import Navbar from '../../components/layout/Navbar';
import SectionWrapper from '../../components/layout/SectionWrapper';
import Button from '../../components/ui/Button';
import PlatformAccordion from '../../components/patterns/PlatformAccordion';

const architectureLayers = [
  {
    title: 'Data Layer',
    paragraph:
      'The data layer ingests telemetry, logs, events, and contextual metadata from plant systems, enterprise services, and edge devices into a governed operational backbone.',
    capabilities: [
      'High-throughput ingestion pipelines',
      'Schema validation and data lineage tracking',
      'Historical and streaming data unification'
    ]
  },
  {
    title: 'Model & Simulation Layer',
    paragraph:
      'The model and simulation layer develops, validates, and stress-tests predictive intelligence before policies and decisions are permitted to affect live operations.',
    capabilities: [
      'Model training and version governance',
      'Digital twin simulation scenarios',
      'Performance and safety boundary validation'
    ]
  },
  {
    title: 'Deployment Layer',
    paragraph:
      'The deployment layer manages rollout strategies across cloud and edge targets with controlled promotion paths, observability, and rapid rollback safeguards.',
    capabilities: [
      'Policy release orchestration',
      'Canary and staged deployment controls',
      'Automated rollback and incident hooks'
    ]
  },
  {
    title: 'Visualization Layer',
    paragraph:
      'The visualization layer translates system behavior into engineering-grade views that expose state, drift, thresholds, and intervention opportunities.',
    capabilities: [
      'Operational health and alert dashboards',
      'Cross-layer traceability views',
      'Decision and performance timeline replay'
    ]
  },
  {
    title: 'Control Systems Layer',
    paragraph:
      'The control systems layer applies validated decisions to physical processes through governed interfaces designed for safety-critical, real-time execution.',
    capabilities: [
      'Closed-loop control policy execution',
      'Constraint-aware actuation pathways',
      'Human-in-the-loop override mechanisms'
    ]
  }
];

const accordionItems = [
  {
    id: 'apis',
    title: 'APIs',
    details: [
      'REST and event-driven interfaces for data, model, and control workflows',
      'Policy execution endpoints with auditable request tracing',
      'SDK-compatible authentication and token management'
    ]
  },
  {
    id: 'integrations',
    title: 'Integration points',
    details: [
      'Industrial connectors for historians, PLC gateways, and MES systems',
      'Cloud and data-platform interoperability for hybrid architectures',
      'Webhook and queue-based orchestration between enterprise services'
    ]
  },
  {
    id: 'standards',
    title: 'Supported standards',
    details: [
      'Interoperable data exchange formats for telemetry and metadata',
      'Versioned contracts for model and policy lifecycle management',
      'Security-aligned controls for regulated operational environments'
    ]
  },
  {
    id: 'scalability',
    title: 'Scalability notes',
    details: [
      'Horizontal scaling for ingestion and simulation workloads',
      'Partitioned runtime design for multi-site deployments',
      'Deterministic failover strategies for control-plane resilience'
    ]
  }
];

const deploymentModes = [
  {
    title: 'Cloud',
    description: 'Centralized model lifecycle management with globally visible operational intelligence.'
  },
  {
    title: 'Hybrid',
    description: 'Cloud coordination with site-local execution for latency and compliance constraints.'
  },
  {
    title: 'Edge',
    description: 'Near-machine inference and policy runtime for low-latency autonomous control loops.'
  },
  {
    title: 'Embedded',
    description: 'Resource-aware deployment directly into constrained hardware and controller environments.'
  }
];

const systemFlow = ['Sensor', 'Data', 'Model', 'Control', 'Actuator', 'Feedback'];

export const metadata = {
  title: 'ORIGYN Platform | Architecture and Deployment',
  description:
    'Technical architecture, system flow, and deployment modes for ORIGYN simulation-driven intelligence infrastructure.'
};

function SystemFlowVisual() {
  return (
    <div className="system-flow" role="img" aria-label="Sensor to feedback closed-loop system flow">
      <svg className="system-flow-svg" viewBox="0 0 1240 160" xmlns="http://www.w3.org/2000/svg">
        {systemFlow.map((step, index) => {
          const x = index * 204;
          const isLast = index === systemFlow.length - 1;
          return (
            <g key={step} className="system-flow-stage">
              <rect x={x + 8} y="28" width="184" height="84" rx="10" className="system-flow-rect" />
              <text x={x + 100} y="78" textAnchor="middle" className="system-flow-label">
                {step}
              </text>
              {!isLast && (
                <path d={`M ${x + 194} 70 L ${x + 220} 70`} className="system-flow-arrow" markerEnd="url(#flowArrow)" />
              )}
            </g>
          );
        })}
        <defs>
          <marker id="flowArrow" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
            <path d="M0,0 L0,6 L6,3 z" className="system-flow-arrowhead" />
          </marker>
        </defs>
      </svg>
    </div>
  );
}

export default function PlatformPage() {
  return (
    <div className="page-shell">
      <Navbar
        variant="sticky"
        links={[
          { href: '#architecture-overview', label: 'Architecture' },
          { href: '#architecture-details', label: 'Details' },
          { href: '#system-flow', label: 'System Flow' },
          { href: '#deployment-modes', label: 'Deployment' }
        ]}
      />

      <main>
        <SectionWrapper id="architecture-overview">
          <p className="eyebrow">Platform Page · Credibility</p>
          <h1 className="h1">System architecture built for simulation-backed operational control.</h1>
          <div className="layer-stack">
            {architectureLayers.map((layer, index) => (
              <article key={layer.title} className="layer-card">
                <div className="layer-card__visual" aria-hidden>
                  <span>{String(index + 1).padStart(2, '0')}</span>
                </div>
                <div>
                  <h2 className="h3">{layer.title}</h2>
                  <p>{layer.paragraph}</p>
                  <ul>
                    {layer.capabilities.map((capability) => (
                      <li key={capability}>{capability}</li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </SectionWrapper>

        <SectionWrapper id="architecture-details" muted>
          <h2 className="h2">Expandable Architecture Sections</h2>
          <p className="body-lg body-lg--tight">
            Open each section for implementation detail across APIs, integrations, standards, and scaling behavior.
          </p>
          <PlatformAccordion items={accordionItems} />
        </SectionWrapper>

        <SectionWrapper id="system-flow">
          <h2 className="h2">System Flow Visual</h2>
          <p className="body-lg body-lg--tight">
            Closed-loop execution path from sensing to feedback, designed for deterministic control behavior.
          </p>
          <SystemFlowVisual />
        </SectionWrapper>

        <SectionWrapper id="deployment-modes" muted>
          <h2 className="h2">Deployment Modes</h2>
          <div className="ds-grid ds-grid--2col">
            {deploymentModes.map((mode) => (
              <article key={mode.title} className="card">
                <h3>{mode.title}</h3>
                <p>{mode.description}</p>
              </article>
            ))}
          </div>
        </SectionWrapper>

        <SectionWrapper id="access">
          <div className="final-cta">
            <h2 className="h2">Take the next step into the platform architecture.</h2>
            <div className="btn-row btn-row--center">
              <Button as="a" href="/developers" variant="secondary">
                Explore Developers
              </Button>
              <Button as="a" href="mailto:team@origyn.ai" variant="primary">
                Request Access
              </Button>
            </div>
          </div>
        </SectionWrapper>
      </main>

      <Footer />
    </div>
  );
}
