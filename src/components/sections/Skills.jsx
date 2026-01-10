import { siteConfig } from "@/config/site.config";
import { Section, SectionTitle, Card } from "@/components/common";

// Skill to Devicon mapping
const skillIcons = {
  React: "react/react-original",
  Javascript: "javascript/javascript-original",
  TypeScript: "typescript/typescript-original",
  Blazor: "blazor/blazor-original",
  "Tailwind CSS": "tailwindcss/tailwindcss-original",
  "C#": "csharp/csharp-original",
  ".Net Core": "dotnetcore/dotnetcore-original",
  Golang: "go/go-original-wordmark",
  Node: "nodejs/nodejs-original",
  SQL: "azuresqldatabase/azuresqldatabase-original",
  PostgreSQL: "postgresql/postgresql-original",
  MongoDB: "mongodb/mongodb-original",
  Redis: "redis/redis-original",
  "MCP servers": "python/python-original", // placeholder
  Git: "git/git-original",
  Docker: "docker/docker-original",
  "CI/CD": "githubactions/githubactions-original",
  Linux: "linux/linux-original",
};

const getIconUrl = (skillName) => {
  const iconPath = skillIcons[skillName];
  if (!iconPath) return null;
  return `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${iconPath}.svg`;
};

export default function Skills() {
  const { skills } = siteConfig;

  return (
    <Section id="skills">
      <SectionTitle
        title="Skills & Technologies"
        subtitle="Technologies I work with on a daily basis"
      />

      <div className="grid md:grid-cols-3 gap-6">
        {skills.map((category, index) => (
          <Card
            key={category.category}
            className="animate-slide-up"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4">
              {category.category}
            </h3>
            <div className="grid grid-cols-2 gap-2">
              {category.items.map((skill) => {
                const iconUrl = getIconUrl(skill.name);
                return (
                  <span
                    key={skill.name}
                    className="inline-flex items-center gap-2 px-3 py-1.5 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 rounded-full text-sm font-medium"
                  >
                    {iconUrl && (
                      <img
                        src={iconUrl}
                        alt={skill.name}
                        className="w-4 h-4"
                        onError={(e) => {
                          e.target.style.display = "none";
                        }}
                      />
                    )}
                    {skill.name}
                  </span>
                );
              })}
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
}
