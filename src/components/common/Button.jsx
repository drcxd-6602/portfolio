import { Link } from 'react-router-dom';

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  href,
  to,
  onClick,
  className = '',
  download,
  ...props
}) {
  const baseStyles =
    'inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 disabled:opacity-50 disabled:cursor-not-allowed';

  const variants = {
    primary:
      'bg-primary-600 text-white hover:bg-primary-700 active:bg-primary-800 shadow-lg shadow-primary-500/25 hover:shadow-xl hover:shadow-primary-500/30',
    secondary:
      'bg-slate-200 dark:bg-slate-700 text-slate-900 dark:text-white hover:bg-slate-300 dark:hover:bg-slate-600',
    outline:
      'border-2 border-primary-600 text-primary-600 dark:text-primary-400 dark:border-primary-400 hover:bg-primary-50 dark:hover:bg-primary-900/20',
    ghost:
      'text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800',
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm gap-1.5',
    md: 'px-6 py-3 text-base gap-2',
    lg: 'px-8 py-4 text-lg gap-2.5',
  };

  const classes = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

  // External link or download
  if (href) {
    return (
      <a href={href} className={classes} download={download} {...props}>
        {children}
      </a>
    );
  }

  // Internal route
  if (to) {
    return (
      <Link to={to} className={classes} {...props}>
        {children}
      </Link>
    );
  }

  // Button
  return (
    <button onClick={onClick} className={classes} {...props}>
      {children}
    </button>
  );
}
