import Footer from '../components/layout/Footer';
import Navbar from '../components/layout/Navbar';
import SectionWrapper from '../components/layout/SectionWrapper';
import ArchitectureLayerBlock from '../components/patterns/ArchitectureLayerBlock';
import CodeSnippetBlock from '../components/patterns/CodeSnippetBlock';
import FeatureCard from '../components/patterns/FeatureCard';
import IndustryTile from '../components/patterns/IndustryTile';
import TechnicalHighlightPanel from '../components/patterns/TechnicalHighlightPanel';
import Button from '../components/ui/Button';

const featureCards = [
  {
    title: 'Model-to-Operations Pipeline',
    description:
      'Build and validate predictive models against simulation environments before deployment into live operational systems.'
  },
  {
    title: 'Digital Twin Runtime',
    description:
      'Mirror physical assets with high-fidelity digital twins and continuously optimize control logic using incoming telemetry.'
  },
  {
    title: 'Real-time Governance',
    description:
      'Monitor thresholds, issue alerts, and orchestrate system responses with a single engineering-grade control interface.'
  }
];

const architectureLayers = [
  {
    title: 'Data Layer',
    description: 'Telemetry ingestion, historian systems, and contextual metadata streams.'
  },
  {
    title: 'Intelligence Layer',
    description: 'Simulation execution, model training, and policy optimization workflows.'
  },
  {
    title: 'Control Layer',
    description: 'Decision APIs, real-time monitoring, threshold alerts, and orchestration.'
  }
];

const industryTiles = [
  {
    title: 'Manufacturing',
    description: 'Reduce production variance and increase throughput via simulation-informed control loops.'
  },
  {
    title: 'Mobility',
    description: 'Validate autonomy and routing strategies under constrained, real-world operating conditions.'
  }
];

const sampleCode = `from origyn import Runtime

runtime = Runtime(project="factory-line-a")
policy = runtime.models.load("predictive_control_v4")
runtime.deploy(policy, target="live-control")`;

export default function Home() {
  return (
    <div className="page-shell">
      <Navbar variant="sticky" />

      <main>
        <SectionWrapper>
          <p className="eyebrow">Phase 2 · Design System Foundation</p>
          <h1 className="h1">Simulation-Driven Intelligence for Industrial Systems</h1>
          <p className="body-lg">
            A technical identity built for high-trust operations: engineered visual language,
            reusable components, and governance-ready UI primitives for predictive models,
            digital twins, and autonomous control infrastructure.
          </p>
          <div className="btn-row">
            <Button as="a" href="#platform" variant="primary">
              Explore Platform
            </Button>
            <Button as="a" href="#developers" variant="secondary">
              Read API Docs
            </Button>
            <Button as="a" href="#architecture" variant="ghost">
              View Architecture
            </Button>
            <Button variant="danger" disabled>
              Safety Override Locked
            </Button>
          </div>
        </SectionWrapper>

        <SectionWrapper id="platform" muted>
          <h2 className="h2">Core Capability Components</h2>
          <div className="ds-grid ds-grid--3col">
            {featureCards.map((card, index) => (
              <FeatureCard
                key={card.title}
                title={card.title}
                description={card.description}
                highlighted={index === 0}
              />
            ))}
          </div>
        </SectionWrapper>

        <SectionWrapper id="architecture">
          <h2 className="h2">Architecture Diagram Blocks</h2>
          <div className="arch-grid">
            {architectureLayers.map((layer) => (
              <ArchitectureLayerBlock key={layer.title} title={layer.title} description={layer.description} />
            ))}
          </div>
          <TechnicalHighlightPanel title="Technical Highlight">
            Every production action can be traced to validated model behavior under simulated and
            live operating conditions.
          </TechnicalHighlightPanel>
        </SectionWrapper>

        <SectionWrapper id="industries" muted>
          <h2 className="h2">Industry Tiles</h2>
          <div className="ds-grid ds-grid--2col">
            {industryTiles.map((tile) => (
              <IndustryTile key={tile.title} title={tile.title} description={tile.description} />
            ))}
          </div>
        </SectionWrapper>

        <SectionWrapper id="developers">
          <h2 className="h2">Code Snippet Block</h2>
          <CodeSnippetBlock language="Python" title="Control Policy Deployment" code={sampleCode} />
        </SectionWrapper>
      </main>

      <Footer />
    </div>
  );
}
