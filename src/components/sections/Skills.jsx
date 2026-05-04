import { siteConfig } from "@/config/site.config";
import { Section, SectionTitle, Card } from "@/components/common";

// Skill to Devicon mapping
const skillIcons = {
  // Languages
  "C#": "csharp/csharp-original",
  Go: "go/go-original-wordmark",
  TypeScript: "typescript/typescript-original",
  JavaScript: "javascript/javascript-original",
  SQL: "azuresqldatabase/azuresqldatabase-original",
  Bash: "bash/bash-original",
  "C++": "cplusplus/cplusplus-original",

  // Web Frameworks
  ".NET Core": "dotnetcore/dotnetcore-original",
  "ASP.NET Core": "dotnetcore/dotnetcore-original",
  "EF Core": "dot-net/dot-net-original",
  LINQ: "dot-net/dot-net-original",
  Blazor: "blazor/blazor-original",
  "Node.js": "nodejs/nodejs-original",
  "Express.js": "express/express-original",

  // Databases
  "MS SQL Server": "microsoftsqlserver/microsoftsqlserver-plain",
  PostgreSQL: "postgresql/postgresql-original",
  MySQL: "mysql/mysql-original",
  MongoDB: "mongodb/mongodb-original",
  Redis: "redis/redis-original",
  "Google BigQuery": "googlecloud/googlecloud-original",

  // Tools & Platforms
  Docker: "docker/docker-original",
  Git: "git/git-original",
  GitHub: "github/github-original",
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
