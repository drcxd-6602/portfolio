import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

export default function MarkdownRenderer({ content }) {
  return (
    <div className="prose dark:prose-invert max-w-none">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          // Code blocks with syntax highlighting
          code({ node, inline, className, children, ...props }) {
            const match = /language-(\w+)/.exec(className || '');
            return !inline && match ? (
              <SyntaxHighlighter
                style={oneDark}
                language={match[1]}
                PreTag="div"
                className="rounded-lg !my-4"
                {...props}
              >
                {String(children).replace(/\n$/, '')}
              </SyntaxHighlighter>
            ) : (
              <code className={className} {...props}>
                {children}
              </code>
            );
          },

          // Images with styling
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

          // Headings with anchor links
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

          // Links open in new tab for external URLs
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

          // Blockquotes styling
          blockquote({ children }) {
            return (
              <blockquote className="border-l-4 border-primary-500 pl-4 italic text-slate-600 dark:text-slate-400">
                {children}
              </blockquote>
            );
          },

          // Tables styling
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
