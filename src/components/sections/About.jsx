import { MapPin, Mail, Briefcase } from 'lucide-react';
import { siteConfig } from '@/config/site.config';
import { Section, SectionTitle, Card } from '@/components/common';

export default function About() {
  const { personal } = siteConfig;

  return (
    <Section id="about" background="alternate">
      <SectionTitle
        title="About Me"
        subtitle="Get to know me better"
      />

      <div className="grid md:grid-cols-5 gap-8 items-stretch">
        {/* Main Content */}
        <div className="md:col-span-3 flex">
          <Card className="flex-1">
            <div className="prose dark:prose-invert max-w-none">
              {personal.longBio.split('\n\n').map((paragraph, index) => (
                <p key={index} className="text-slate-600 dark:text-slate-300 mb-4 last:mb-0">
                  {paragraph}
                </p>
              ))}
            </div>
          </Card>
        </div>

        {/* Info Cards */}
        <div className="md:col-span-2 flex flex-col gap-4">
          <Card padding="p-4" className="flex-1">
            <div className="flex items-center gap-4 h-full">
              <div className="p-3 bg-primary-100 dark:bg-primary-900/30 rounded-lg shrink-0">
                <MapPin className="text-primary-600 dark:text-primary-400" size={24} />
              </div>
              <div>
                <p className="text-sm text-slate-500 dark:text-slate-400">Location</p>
                <p className="font-medium text-slate-900 dark:text-white">
                  {personal.location}
                </p>
              </div>
            </div>
          </Card>

          <Card padding="p-4" className="flex-1">
            <div className="flex items-center gap-4 h-full">
              <div className="p-3 bg-primary-100 dark:bg-primary-900/30 rounded-lg shrink-0">
                <Mail className="text-primary-600 dark:text-primary-400" size={24} />
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-sm text-slate-500 dark:text-slate-400">Email</p>
                <a
                  href={`mailto:${personal.email}`}
                  className="font-medium text-slate-900 dark:text-white hover:text-primary-600 dark:hover:text-primary-400 transition-colors truncate block"
                >
                  {personal.email}
                </a>
              </div>
            </div>
          </Card>

          <Card padding="p-4" className="flex-1">
            <div className="flex items-center gap-4 h-full">
              <div className="p-3 bg-primary-100 dark:bg-primary-900/30 rounded-lg shrink-0">
                <Briefcase className="text-primary-600 dark:text-primary-400" size={24} />
              </div>
              <div>
                <p className="text-sm text-slate-500 dark:text-slate-400">Status</p>
                <p className="font-medium text-green-600 dark:text-green-400">
                  Open to opportunities
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </Section>
  );
}
