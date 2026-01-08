export default function Badge({ children, variant = 'default', className = '' }) {
  const variants = {
    default:
      'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300',
    primary:
      'bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300',
    success:
      'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300',
  };

  return (
    <span
      className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${variants[variant]} ${className}`}
    >
      {children}
    </span>
  );
}
