import { useEffect, useState, useRef } from 'react';
import { siteConfig } from '@/config/site.config';
import { Section, SectionTitle, Card } from '@/components/common';

function SkillBar({ skill, isVisible }) {
  return (
    <div className="mb-4 last:mb-0">
      <div className="flex justify-between mb-2">
        <span className="text-slate-700 dark:text-slate-300 font-medium">
          {skill.name}
        </span>
        <span className="text-slate-500 dark:text-slate-400 text-sm">
          {skill.level}%
        </span>
      </div>
      <div className="h-2 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-primary-500 to-primary-600 rounded-full transition-all duration-1000 ease-out"
          style={{ width: isVisible ? `${skill.level}%` : '0%' }}
        />
      </div>
    </div>
  );
}

export default function Skills() {
  const { skills } = siteConfig;
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <Section id="skills">
      <div ref={sectionRef}>
        <SectionTitle
          title="Skills & Technologies"
          subtitle="Technologies I work with on a daily basis"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((category, index) => (
            <Card key={category.category} className="animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6">
                {category.category}
              </h3>
              {category.items.map((skill) => (
                <SkillBar key={skill.name} skill={skill} isVisible={isVisible} />
              ))}
            </Card>
          ))}
        </div>
      </div>
    </Section>
  );
}
