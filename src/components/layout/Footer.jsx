import { Heart } from "lucide-react";
import { siteConfig } from "@/config/site.config";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-50 dark:bg-slate-800/50 border-t border-slate-200 dark:border-slate-700">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-6xl py-8">
        <div className="flex flex-col items-center gap-4">
          {/* Logo & Copyright */}
          <div className="text-center">
            <p className="text-xl font-bold text-slate-900 dark:text-white mb-2">
              {siteConfig.personal.name.split(" ")[0]}
              <span className="text-primary-600">.</span>
            </p>
            <p className="text-slate-600 dark:text-slate-400 text-sm">
              &copy; {currentYear} {siteConfig.personal.name}. All rights
              reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
