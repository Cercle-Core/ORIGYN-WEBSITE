'use client';

import { useMemo, useState } from 'react';

function highlightLine(line) {
  const tokens = [];
  const regex = /(from|import|Runtime|runtime|models|load|deploy|project|target)|("[^"]*")|(=)|(\.)/g;
  let lastIndex = 0;
  let match;

  while ((match = regex.exec(line)) !== null) {
    if (match.index > lastIndex) {
      tokens.push({ type: 'plain', value: line.slice(lastIndex, match.index) });
    }

    let type = 'plain';
    if (match[1]) type = 'kw';
    if (match[2]) type = 'str';
    if (match[3]) type = 'op';
    if (match[4]) type = 'dot';

    tokens.push({ type, value: match[0] });
    lastIndex = regex.lastIndex;
  }

  if (lastIndex < line.length) {
    tokens.push({ type: 'plain', value: line.slice(lastIndex) });
  }

  return tokens;
}

export default function CodeSnippetBlock({ language = 'Python', title, code }) {
  const [copyLabel, setCopyLabel] = useState('Copy');
  const lines = useMemo(() => code.split('\n').map((line) => highlightLine(line)), [code]);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(code);
      setCopyLabel('Copied');
      setTimeout(() => setCopyLabel('Copy'), 1400);
    } catch {
      setCopyLabel('Failed');
      setTimeout(() => setCopyLabel('Copy'), 1400);
    }
  }

  return (
    <div className="code-block">
      <div className="code-head">
        <span>{language} · {title}</span>
        <button className="copy-btn" type="button" aria-label="Copy code snippet" onClick={handleCopy}>
          {copyLabel}
        </button>
      </div>
      <pre>
        <code>
          {lines.map((line, lineIndex) => (
            <span key={`line-${lineIndex}`} className="code-line">
              {line.map((token, tokenIndex) => (
                <span key={`token-${lineIndex}-${tokenIndex}`} className={`tok-${token.type}`}>
                  {token.value}
                </span>
              ))}
              {'\n'}
            </span>
          ))}
        </code>
      </pre>
    </div>
  );
}
