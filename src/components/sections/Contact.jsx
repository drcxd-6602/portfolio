import { Mail, MapPin, Github, Linkedin, Twitter } from "lucide-react";
import { siteConfig } from "@/config/site.config";
import { Section, SectionTitle } from "@/components/common";

const socialIcons = {
  github: Github,
  linkedin: Linkedin,
  twitter: Twitter,
};

export default function Contact() {
  const { personal, social } = siteConfig;

  return (
    <Section id="contact" background="alternate">
      <SectionTitle title="Get In Touch" subtitle="I'd love to hear from you" />

      <div className="max-w-4xl mx-auto text-center">
        <p className="text-lg text-slate-600 dark:text-slate-400 mb-10 max-w-2xl mx-auto">
          Feel free to reach out if you have any questions, want to collaborate,
          or just want to say hello!
        </p>

        {/* Contact Cards */}
        <div className="grid sm:grid-cols-2 gap-6 mb-10">
          <a
            href={`mailto:${personal.email}`}
            className="flex items-center gap-4 p-6 rounded-xl bg-white dark:bg-slate-800 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
          >
            <div className="p-3 bg-primary-100 dark:bg-primary-900/30 rounded-xl">
              <Mail
                className="text-primary-600 dark:text-primary-400"
                size={24}
              />
            </div>
            <div className="text-left min-w-0 flex-1">
              <p className="text-sm text-slate-500 dark:text-slate-400">
                Email
              </p>
              <p className="font-semibold text-slate-900 dark:text-white break-all">
                {personal.email}
              </p>
            </div>
          </a>

          <div className="flex items-center gap-4 p-6 rounded-xl bg-white dark:bg-slate-800 shadow-lg">
            <div className="p-3 bg-primary-100 dark:bg-primary-900/30 rounded-xl">
              <MapPin
                className="text-primary-600 dark:text-primary-400"
                size={24}
              />
            </div>
            <div className="text-left">
              <p className="text-sm text-slate-500 dark:text-slate-400">
                Location
              </p>
              <p className="font-semibold text-slate-900 dark:text-white">
                {personal.location}
              </p>
            </div>
          </div>
        </div>

        {/* Social Links */}
        <div>
          <p className="text-sm text-slate-500 dark:text-slate-400 mb-4">
            Find me on
          </p>
          <div className="flex gap-4 justify-center">
            {Object.entries(social).map(([key, url]) => {
              const Icon = socialIcons[key];
              if (!Icon || !url) return null;
              return (
                <a
                  key={key}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:text-primary-600 dark:hover:text-primary-400 shadow-lg hover:shadow-xl hover:-translate-y-1 rounded-xl transition-all duration-300"
                  aria-label={key}
                >
                  <Icon size={24} />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </Section>
  );
}
