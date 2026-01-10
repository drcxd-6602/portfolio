import { useState } from "react";
import { ExternalLink, Github, Construction } from "lucide-react";
import { siteConfig } from "@/config/site.config";
import {
  Section,
  SectionTitle,
  Card,
  Badge,
  Button,
} from "@/components/common";

function ProjectCard({ project }) {
  return (
    <Card className="group overflow-hidden" padding="p-0">
      {/* Project Image */}
      <div className="relative h-48 overflow-hidden bg-slate-100 dark:bg-slate-800">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          onError={(e) => {
            e.target.src = `https://placehold.co/600x400/a855f7/ffffff?text=${encodeURIComponent(
              project.title
            )}`;
          }}
        />
        {/* Overlay - always visible for underDevelopment, hover for others */}
        <div
          className={`absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent transition-opacity duration-300 flex flex-col items-center justify-center ${
            project.underDevelopment
              ? "opacity-100"
              : "opacity-0 group-hover:opacity-100"
          }`}
        >
          {project.underDevelopment && (
            <div className="flex items-center gap-2 text-white font-medium mb-4">
              <Construction size={20} />
              Under Development
            </div>
          )}
          <div className="flex gap-3">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-white/20 backdrop-blur-sm text-white rounded-lg hover:bg-white/30 transition-colors"
                aria-label="View live site"
              >
                <ExternalLink size={20} />
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-white/20 backdrop-blur-sm text-white rounded-lg hover:bg-white/30 transition-colors"
                aria-label="View source code"
              >
                <Github size={20} />
              </a>
            )}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
          {project.title}
        </h3>
        <p className="text-slate-600 dark:text-slate-400 mb-4 line-clamp-2">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <Badge key={tech} variant="primary">
              {tech}
            </Badge>
          ))}
        </div>
      </div>
    </Card>
  );
}

export default function Projects() {
  const { projects } = siteConfig;
  const [showAll, setShowAll] = useState(false);

  const displayedProjects = showAll
    ? projects
    : projects.filter((p) => p.featured);
  const hasMoreProjects =
    projects.length > projects.filter((p) => p.featured).length;

  return (
    <Section id="projects" background="alternate">
      <SectionTitle
        title="Featured Projects"
        subtitle="A selection of my recent work"
      />

      <div className="grid md:grid-cols-2 gap-8">
        {displayedProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>

      {hasMoreProjects && (
        <div className="text-center mt-12">
          <Button variant="outline" onClick={() => setShowAll(!showAll)}>
            {showAll ? "Show Less" : "View All Projects"}
          </Button>
        </div>
      )}
    </Section>
  );
}
