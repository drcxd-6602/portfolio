export default function Section({
  id,
  children,
  className = '',
  background = 'default',
}) {
  const backgrounds = {
    default: 'bg-white dark:bg-slate-900',
    alternate: 'bg-slate-50 dark:bg-slate-800/50',
    primary: 'bg-primary-50 dark:bg-primary-900/10',
  };

  return (
    <section
      id={id}
      className={`py-16 md:py-24 ${backgrounds[background]} ${className}`}
    >
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-6xl">
        {children}
      </div>
    </section>
  );
}
