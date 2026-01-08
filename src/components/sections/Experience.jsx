import { Briefcase } from 'lucide-react';
import { siteConfig } from '@/config/site.config';
import { Section, SectionTitle, Badge } from '@/components/common';

function ExperienceCard({ experience, isLast }) {
  return (
    <div className="relative pl-8 pb-12 last:pb-0">
      {/* Timeline line */}
      {!isLast && (
        <div className="absolute left-[11px] top-10 bottom-0 w-0.5 bg-slate-200 dark:bg-slate-700" />
      )}

      {/* Timeline dot */}
      <div className="absolute left-0 top-1 w-6 h-6 bg-primary-100 dark:bg-primary-900/30 rounded-full flex items-center justify-center">
        <div className="w-3 h-3 bg-primary-600 rounded-full" />
      </div>

      {/* Content */}
      <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-lg border border-slate-200 dark:border-slate-700 ml-4">
        <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
          <div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">
              {experience.position}
            </h3>
            <p className="text-primary-600 dark:text-primary-400 font-medium flex items-center gap-2">
              <Briefcase size={16} />
              {experience.company}
            </p>
          </div>
          <span className="px-3 py-1 bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 rounded-full text-sm font-medium">
            {experience.period}
          </span>
        </div>

        <p className="text-slate-600 dark:text-slate-400 mb-4">
          {experience.description}
        </p>

        <div className="flex flex-wrap gap-2">
          {experience.technologies.map((tech) => (
            <Badge key={tech}>{tech}</Badge>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Experience() {
  const { experience } = siteConfig;

  return (
    <Section id="experience">
      <SectionTitle
        title="Work Experience"
        subtitle="My professional journey"
      />

      <div className="max-w-3xl mx-auto">
        {experience.map((exp, index) => (
          <ExperienceCard
            key={`${exp.company}-${exp.period}`}
            experience={exp}
            isLast={index === experience.length - 1}
          />
        ))}
      </div>
    </Section>
  );
}
