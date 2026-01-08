export default function Card({
  children,
  className = '',
  hover = true,
  padding = 'p-6',
}) {
  return (
    <div
      className={`
        bg-white dark:bg-slate-800
        rounded-xl
        border border-slate-200 dark:border-slate-700
        shadow-lg shadow-slate-200/50 dark:shadow-slate-900/50
        ${hover ? 'hover:shadow-xl hover:border-primary-200 dark:hover:border-primary-800 transition-all duration-300' : ''}
        ${padding}
        ${className}
      `}
    >
      {children}
    </div>
  );
}
