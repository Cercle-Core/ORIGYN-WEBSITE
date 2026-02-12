/**
 * Code Snippet Block
 * Must support: syntax highlighting (basic), copy button, language tag, dark background
 * Used heavily on Developers page.
 *
 * When to use: CLI examples, architecture references, code snippets
 * When NOT to use: Inline code (use <code> with mono font)
 */
'use client';

import { useState } from 'react';

export default function CodeBlock({ code, language = 'bash', className = '' }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      className={`
        relative rounded-lg
        bg-primary-800 border border-neutral-700
        overflow-hidden
        ${className}
      `}
    >
      <div className="flex items-center justify-between px-4 py-2 bg-neutral-900/50 border-b border-neutral-800">
        <span className="text-caption text-neutral-500 font-mono uppercase tracking-wider">
          {language}
        </span>
        <button
          onClick={handleCopy}
          className="
            text-caption text-neutral-400 hover:text-neutral-100
            transition-colors duration-200
          "
        >
          {copied ? 'Copied!' : 'Copy'}
        </button>
      </div>
      <pre className="p-4 overflow-x-auto">
        <code className="text-code font-mono text-neutral-300">
          {code}
        </code>
      </pre>
    </div>
  );
}
