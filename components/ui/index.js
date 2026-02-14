import dynamic from 'next/dynamic';

export { default as Button } from './Button';
export { default as Card } from './Card';
export const CodeBlock = dynamic(() => import('./CodeBlock'), {
  ssr: false,
  loading: () => (
    <div className="rounded-lg bg-primary-800 border border-neutral-700 overflow-hidden animate-pulse">
      <div className="h-10 bg-neutral-900/50 border-b border-neutral-800" />
      <div className="p-4 space-y-2">
        <div className="h-3 bg-neutral-700 rounded w-full" />
        <div className="h-3 bg-neutral-700 rounded w-4/5" />
        <div className="h-3 bg-neutral-700 rounded w-3/5" />
      </div>
    </div>
  ),
});
export { default as ArchitectureDiagram } from './ArchitectureDiagram';
export { default as IndustryTile } from './IndustryTile';
export { default as IndustryDetailCard } from './IndustryDetailCard';
export { default as TechnicalHighlight } from './TechnicalHighlight';
export { default as FadeIn } from './FadeIn';
export { default as ExpandableSection } from './ExpandableSection';
export { default as SystemFlowDiagram } from './SystemFlowDiagram';
export { default as TechStackGrid } from './TechStackGrid';
export { default as FrameworkCard } from './FrameworkCard';
export { default as UseCaseCard } from './UseCaseCard';
export { default as ContactForm } from './ContactForm';
export { default as JobCard } from './JobCard';
