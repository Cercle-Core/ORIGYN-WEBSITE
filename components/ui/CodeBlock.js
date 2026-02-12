/**
 * Code Snippet Block
 * Must support: syntax highlighting, copy button, language tag, dark background
 * Used heavily on Developers page.
 *
 * When to use: CLI examples, architecture references, code snippets
 * When NOT to use: Inline code (use <code> with mono font)
 */
'use client';

import { useState } from 'react';
import { Highlight, themes } from 'prism-react-renderer';

const languageMap = {
  bash: 'bash',
  sh: 'bash',
  js: 'javascript',
  javascript: 'javascript',
  ts: 'typescript',
  typescript: 'typescript',
  json: 'json',
  python: 'python',
  py: 'python',
};

export default function CodeBlock({ code, language = 'bash', className = '' }) {
  const [copied, setCopied] = useState(false);
  const prismLang = languageMap[language] || language;

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
      <Highlight theme={themes.nightOwl} code={code} language={prismLang}>
        {({ className: preClassName, style, tokens, getLineProps, getTokenProps }) => (
          <pre className={`${preClassName} p-4 overflow-x-auto text-code font-mono`} style={style}>
            {tokens.map((line, i) => (
              <div key={i} {...getLineProps({ line })}>
                {line.map((token, key) => (
                  <span key={key} {...getTokenProps({ token })} />
                ))}
              </div>
            ))}
          </pre>
        )}
      </Highlight>
    </div>
  );
}
