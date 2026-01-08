import { Github, Linkedin, Twitter, Mail, Heart } from 'lucide-react';
import { siteConfig } from '@/config/site.config';

const socialIcons = {
  github: Github,
  linkedin: Linkedin,
  twitter: Twitter,
  email: Mail,
};

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-50 dark:bg-slate-800/50 border-t border-slate-200 dark:border-slate-700">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-6xl py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo & Copyright */}
          <div className="text-center md:text-left">
            <p className="text-xl font-bold text-slate-900 dark:text-white mb-2">
              {siteConfig.personal.name.split(' ')[0]}
              <span className="text-primary-600">.</span>
            </p>
            <p className="text-slate-600 dark:text-slate-400 text-sm">
              &copy; {currentYear} {siteConfig.personal.name}. All rights reserved.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {Object.entries(siteConfig.social).map(([key, url]) => {
              const Icon = socialIcons[key];
              if (!Icon || !url) return null;
              return (
                <a
                  key={key}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-slate-600 dark:text-slate-400 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-lg transition-colors"
                  aria-label={key}
                >
                  <Icon size={20} />
                </a>
              );
            })}
          </div>
        </div>

        {/* Built with */}
        <div className="mt-8 pt-8 border-t border-slate-200 dark:border-slate-700 text-center">
          <p className="text-sm text-slate-500 dark:text-slate-500 flex items-center justify-center gap-1">
            Built with <Heart size={14} className="text-red-500" fill="currentColor" /> using React & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
