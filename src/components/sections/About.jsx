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

      <div className="max-w-4xl mx-auto">
        <Card>
          <div className="prose dark:prose-invert max-w-none">
            {personal.longBio.split('\n\n').map((paragraph, index) => (
              <p key={index} className="text-slate-600 dark:text-slate-300 mb-4 last:mb-0 leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>
        </Card>
      </div>
    </Section>
  );
}
