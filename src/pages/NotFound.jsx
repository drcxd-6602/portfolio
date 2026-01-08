import { Link } from 'react-router-dom';
import { Home, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/common';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="text-center">
        <h1 className="text-9xl font-bold text-primary-600 dark:text-primary-400 mb-4">
          404
        </h1>
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
          Page Not Found
        </h2>
        <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 max-w-md mx-auto">
          Sorry, the page you're looking for doesn't exist or has been moved.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Button to="/">
            <Home size={18} />
            Go Home
          </Button>
          <Button onClick={() => window.history.back()} variant="outline">
            <ArrowLeft size={18} />
            Go Back
          </Button>
        </div>
      </div>
    </div>
  );
}
