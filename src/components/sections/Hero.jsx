import {
  Github,
  Linkedin,
  Twitter,
  Mail,
  Download,
  ArrowDown,
  Eye,
  MapPin,
} from "lucide-react";
import { siteConfig } from "@/config/site.config";
import { Button } from "@/components/common";

const socialLinks = [
  { key: "github", icon: Github, label: "GitHub" },
  { key: "linkedin", icon: Linkedin, label: "LinkedIn" },
  { key: "twitter", icon: Twitter, label: "Twitter" },
];

export default function Hero() {
  const { personal, social } = siteConfig;

  const scrollToSkills = () => {
    const element = document.querySelector("#skills");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center pt-20 pb-16 relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 -left-1/4 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-1/4 w-96 h-96 bg-primary-600/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-6xl">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="order-2 md:order-1 text-center md:text-left">
            <p className="text-primary-600 dark:text-primary-400 font-medium mb-4 animate-fade-in">
              Hello, I'm
            </p>
            <h1 className="heading-1 text-slate-900 dark:text-white mb-4 animate-slide-up whitespace-nowrap">
              {personal.name}
            </h1>
            <p
              className="text-2xl md:text-3xl text-slate-600 dark:text-slate-300 font-light mb-6 animate-slide-up"
              style={{ animationDelay: "0.1s" }}
            >
              {personal.title}
            </p>
            <p
              className="text-lg text-slate-600 dark:text-slate-400 mb-6 max-w-lg mx-auto md:mx-0 animate-slide-up"
              style={{ animationDelay: "0.2s" }}
            >
              {personal.bio}
            </p>

            {/* Location & Email Info */}
            <div
              className="flex flex-wrap gap-4 justify-center md:justify-start mb-6 animate-slide-up"
              style={{ animationDelay: "0.25s" }}
            >
              <div className="flex items-center gap-2 text-slate-600 dark:text-slate-400">
                <MapPin size={18} className="text-primary-600 dark:text-primary-400" />
                <span>{personal.location}</span>
              </div>
              <a
                href={`mailto:${personal.email}`}
                className="flex items-center gap-2 text-slate-600 dark:text-slate-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
              >
                <Mail size={18} className="text-primary-600 dark:text-primary-400" />
                <span>{personal.email}</span>
              </a>
            </div>

            {/* CTA Buttons */}
            <div
              className="flex flex-wrap gap-4 justify-center md:justify-start mb-6 animate-slide-up"
              style={{ animationDelay: "0.3s" }}
            >
              <Button href={`mailto:${personal.email}`}>
                <Mail size={18} />
                Email Me
              </Button>
              {personal.resumePreviewUrl ? (
                <Button
                  href={personal.resumePreviewUrl}
                  variant="outline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Eye size={18} />
                  View Resume
                </Button>
              ) : (
                <Button href={personal.resumeFile} variant="outline" download>
                  <Download size={18} />
                  Download Resume
                </Button>
              )}
            </div>

            {/* Social Links - Labeled Buttons */}
            <div
              className="flex flex-wrap gap-3 justify-center md:justify-start animate-slide-up"
              style={{ animationDelay: "0.4s" }}
            >
              {socialLinks.map(({ key, icon: Icon, label }) => {
                const url = social[key];
                if (!url) return null;
                return (
                  <a
                    key={key}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-primary-100 dark:hover:bg-primary-900/30 hover:text-primary-600 dark:hover:text-primary-400 rounded-full font-medium transition-all duration-200"
                  >
                    <Icon size={18} />
                    {label}
                  </a>
                );
              })}
            </div>
          </div>

          {/* Profile Image */}
          <div className="order-1 md:order-2 flex justify-center animate-fade-in">
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white dark:border-slate-800 shadow-2xl">
                <img
                  src={personal.profileImage}
                  alt={personal.name}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(
                      personal.name
                    )}&size=320&background=a855f7&color=fff`;
                  }}
                />
              </div>
              {/* Decorative ring */}
              <div className="absolute inset-0 rounded-full border-2 border-primary-500/30 scale-110" />
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce hidden md:block">
          <button
            onClick={scrollToSkills}
            className="p-2 text-slate-400 hover:text-primary-500 transition-colors"
            aria-label="Scroll to about section"
          >
            <ArrowDown size={24} />
          </button>
        </div>
      </div>
    </section>
  );
}
