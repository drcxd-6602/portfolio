/**
 * Site Configuration
 *
 * Edit this file to customize your portfolio content.
 * All personal information, skills, projects, and experience are configured here.
 */

export const siteConfig = {
  // Personal Information
  personal: {
    name: "Darshan Chaudhari",
    title: "Software Developer",
    email: "darshan.chaudhari.6602@gmail.com",
    location: "Pune, India",
    bio: "Software Developer with 2+ years of experience building scalable backend systems with C#, .NET, and ASP.NET Core. Full-stack proficient in React, TypeScript, Node.js, and Golang, with expertise in PostgreSQL, MySQL, and MongoDB. Passionate about system design, clean architecture, and leveraging AI tools to deliver production-ready solutions.",
    profileImage: "/images/profile.jpeg",
    resumeFile: "/resume.pdf",
    resumePreviewUrl:
      "https://drive.google.com/file/d/1OfIP2oV3EDx0VKE8PMgDbXLFqcQawn2B/view?usp=drive_link", // Google Drive public link (e.g., "https://drive.google.com/file/d/YOUR_FILE_ID/view")
  },

  // Social Links
  social: {
    github: "https://github.com/drcxd-6602",
    linkedin: "https://linkedin.com/in/darshan-chaudhari-drcxd6602",
    twitter: "https://x.com/Darshan6602",
    email: "mailto:darshan.chaudhari.6602@gmail.com",
  },

  // Skills & Technologies
  skills: [
    {
      category: "Frontend",
      items: [
        { name: "React", level: 90 },
        { name: "Javascript", level: 85 },
        { name: "TypeScript", level: 85 },
        { name: "Blazor", level: 85 },
        { name: "Tailwind CSS", level: 90 },
      ],
    },
    {
      category: "Backend",
      items: [
        { name: "C#", level: 80 },
        { name: ".Net Core", level: 80 },
        { name: "Golang", level: 70 },
        { name: "Node", level: 85 },
        { name: "SQL", level: 90 },
        { name: "PostgreSQL", level: 75 },
        { name: "MongoDB", level: 70 },
        { name: "Redis", level: 85 },
        { name: "MCP servers", level: 70 },
      ],
    },
    {
      category: "Tools & DevOps",
      items: [
        { name: "Git", level: 90 },
        { name: "Docker", level: 75 },
        { name: "CI/CD", level: 75 },
        { name: "Linux", level: 80 },
      ],
    },
  ],

  // Projects
  projects: [
    {
      id: "project-1",
      title: "Sniplynx",
      description:
        "A mordern URL shortner with rich analytics and buisness insights",
      image: "/images/projects/weather.jpg",
      technologies: ["React", "Golang", "Gin", "PostgreSQL", "Docker", "Redis"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/yourusername/weather",
      featured: true,
      underDevelopment: true,
    },
    {
      id: "project-2",
      title: "Portfolio",
      description:
        "A modern, responsive portfolio website built with React and Tailwind CSS.",
      image: "/images/projects/portfolio.jpg",
      technologies: ["React", "Tailwind CSS", "Vite"],
      liveUrl: "/",
      githubUrl: "https://github.com/yourusername/portfolio",
      featured: true,
    },
  ],

  // Work Experience
  experience: [
    {
      company: "Sarvaha Systems Pvt. Ltd.",
      position: "Software Engineer",
      period: "Jun 2024 - Present",
      description: `Working as a Software Engineer on a large-scale Device Control and Monitoring system, building high-performance, concurrent backend services using C#, .NET 8, and ASP.NET Core utilizing SOLID principles and Design Patterns.

        Utilizing frontend frameworks like Blazor and React to design data driven UI dashboards.
        Contributing to system design and architectural decisions, with a focus on scalability and long-term maintainability.`,
      technologies: [
        "C#",
        "ASP.NET Core",
        "Blazor",
        "React",
        "TypeScript",
        "EF Core",
        "LINQ",
        "NUnit / xUnit",
        "SQL",
      ],
    },
    {
      company: "Sarvaha Systems Pvt. Ltd.",
      position: "Software Engineer Intern",
      period: "Jan 2024 - Jun 2024",
      description: `
        Developed a Node.js + TypeScript microservice for master data management, enabling faster and more reliable cross-service data synchronization.
        Built automated, resilient data migration pipelines and optimized MongoDB aggregations/indexing, reducing API latency by ~40% under load.
        Designed SQL-based data normalization and quality pipelines, cutting processing time by 25% and storage usage by 50%.
        `,
      technologies: [
        "Node.js",
        "TypeScript",
        "MongoDB",
        "SQL",
        "dbt",
        "GCP / BigQuery",
      ],
    },
  ],

  seo: {
    title: "Darshan Chaudhari | Software Engineer",
    description:
      "Portfolio of Darshan Chaudhari - A Full Stack Developer specializing in C#, .Net, React, Node.js, and modern web technologies.",
    keywords: [
      "developer",
      "portfolio",
      "react",
      "full stack",
      "web development",
    ],
  },
};
