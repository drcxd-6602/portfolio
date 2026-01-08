import { lazy, Suspense, useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

// Lazy load syntax highlighter with only common languages
const SyntaxHighlighter = lazy(() =>
  import('react-syntax-highlighter/dist/esm/prism-light').then((mod) => ({
    default: mod.default,
  }))
);

// Import only common languages to reduce bundle size
const languageImports = {
  javascript: () => import('react-syntax-highlighter/dist/esm/languages/prism/javascript'),
  typescript: () => import('react-syntax-highlighter/dist/esm/languages/prism/typescript'),
  jsx: () => import('react-syntax-highlighter/dist/esm/languages/prism/jsx'),
  tsx: () => import('react-syntax-highlighter/dist/esm/languages/prism/tsx'),
  css: () => import('react-syntax-highlighter/dist/esm/languages/prism/css'),
  python: () => import('react-syntax-highlighter/dist/esm/languages/prism/python'),
  bash: () => import('react-syntax-highlighter/dist/esm/languages/prism/bash'),
  json: () => import('react-syntax-highlighter/dist/esm/languages/prism/json'),
  markdown: () => import('react-syntax-highlighter/dist/esm/languages/prism/markdown'),
  sql: () => import('react-syntax-highlighter/dist/esm/languages/prism/sql'),
  java: () => import('react-syntax-highlighter/dist/esm/languages/prism/java'),
  go: () => import('react-syntax-highlighter/dist/esm/languages/prism/go'),
  rust: () => import('react-syntax-highlighter/dist/esm/languages/prism/rust'),
  yaml: () => import('react-syntax-highlighter/dist/esm/languages/prism/yaml'),
  docker: () => import('react-syntax-highlighter/dist/esm/languages/prism/docker'),
  html: () => import('react-syntax-highlighter/dist/esm/languages/prism/markup'),
  xml: () => import('react-syntax-highlighter/dist/esm/languages/prism/markup'),
};

const themePromise = import(
  'react-syntax-highlighter/dist/esm/styles/prism/one-dark'
).then((mod) => mod.default);

// Simple code block fallback
const CodeFallback = ({ children }) => (
  <pre className="bg-slate-800 text-slate-100 rounded-lg p-4 overflow-x-auto my-4 text-sm">
    <code>{children}</code>
  </pre>
);

function LazyCodeBlock({ language, children }) {
  const [theme, setTheme] = useState(null);
  const [SyntaxHL, setSyntaxHL] = useState(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    let mounted = true;

    Promise.all([
      themePromise,
      import('react-syntax-highlighter/dist/esm/prism-light'),
      languageImports[language]?.() || Promise.resolve(null),
    ]).then(([loadedTheme, syntaxMod, langMod]) => {
      if (!mounted) return;

      if (langMod) {
        syntaxMod.default.registerLanguage(language, langMod.default);
      }

      setTheme(loadedTheme);
      setSyntaxHL(() => syntaxMod.default);
      setReady(true);
    });

    return () => { mounted = false; };
  }, [language]);

  if (!ready || !SyntaxHL) {
    return <CodeFallback>{children}</CodeFallback>;
  }

  return (
    <SyntaxHL
      style={theme}
      language={language}
      PreTag="div"
      className="rounded-lg !my-4 text-sm"
    >
      {children}
    </SyntaxHL>
  );
}

function CodeBlock({ language, children }) {
  return (
    <Suspense fallback={<CodeFallback>{children}</CodeFallback>}>
      <LazyCodeBlock language={language}>{children}</LazyCodeBlock>
    </Suspense>
  );
}

export default function MarkdownRenderer({ content }) {
  return (
    <div className="prose dark:prose-invert max-w-none">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          code({ node, inline, className, children, ...props }) {
            const match = /language-(\w+)/.exec(className || '');
            return !inline && match ? (
              <CodeBlock language={match[1]}>
                {String(children).replace(/\n$/, '')}
              </CodeBlock>
            ) : (
              <code className={className} {...props}>
                {children}
              </code>
            );
          },

          img({ src, alt }) {
            return (
              <img
                src={src}
                alt={alt}
                className="rounded-lg shadow-md my-6 max-w-full h-auto"
                loading="lazy"
              />
            );
          },

          h1({ children }) {
            const id = children
              .toString()
              .toLowerCase()
              .replace(/\s+/g, '-')
              .replace(/[^\w-]/g, '');
            return (
              <h1 id={id} className="scroll-mt-24">
                {children}
              </h1>
            );
          },
          h2({ children }) {
            const id = children
              .toString()
              .toLowerCase()
              .replace(/\s+/g, '-')
              .replace(/[^\w-]/g, '');
            return (
              <h2 id={id} className="scroll-mt-24">
                {children}
              </h2>
            );
          },
          h3({ children }) {
            const id = children
              .toString()
              .toLowerCase()
              .replace(/\s+/g, '-')
              .replace(/[^\w-]/g, '');
            return (
              <h3 id={id} className="scroll-mt-24">
                {children}
              </h3>
            );
          },

          a({ href, children }) {
            const isExternal = href && href.startsWith('http');
            return (
              <a
                href={href}
                target={isExternal ? '_blank' : undefined}
                rel={isExternal ? 'noopener noreferrer' : undefined}
              >
                {children}
              </a>
            );
          },

          blockquote({ children }) {
            return (
              <blockquote className="border-l-4 border-primary-500 pl-4 italic text-slate-600 dark:text-slate-400">
                {children}
              </blockquote>
            );
          },

          table({ children }) {
            return (
              <div className="overflow-x-auto my-4">
                <table className="min-w-full">{children}</table>
              </div>
            );
          },
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
}
