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
    bio: "Results-driven Software Developer with 2+ years of experience delivering high-performance, scalable backend systems using C#, .NET 8, ASP.NET Core, gRPC, GraphQL, and actor-based architectures. Proven expertise building real-time device monitoring platforms, multi-threaded microservices, Blazor dashboards, and high-throughput REST/GraphQL APIs. Strong command of Dapper, Entity Framework Core, clean architecture, SOLID principles, and performance optimization. Additional hands-on experience with Node.js/TypeScript microservices and Go for data pipelines.",
    profileImage: "/images/profile.jpeg",
    resumeFile: "/resume.pdf",
    resumePreviewUrl:
      "https://drive.google.com/drive/folders/1sUlGrZtL_ex5DqKSKv4IRRRM5nc4kIht", // Google Drive public link (e.g., "https://drive.google.com/file/d/YOUR_FILE_ID/view")
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
      category: "Languages",
      items: [
        { name: "C#", level: 85 },
        { name: "Go", level: 70 },
        { name: "TypeScript", level: 85 },
        { name: "JavaScript", level: 85 },
        { name: "SQL", level: 90 },
        { name: "Bash", level: 75 },
        { name: "C++", level: 70 },
      ],
    },
    {
      category: "Web Frameworks",
      items: [
        { name: ".NET Core", level: 85 },
        { name: "ASP.NET Core", level: 85 },
        { name: "EF Core", level: 80 },
        { name: "LINQ", level: 85 },
        { name: "Blazor", level: 85 },
        { name: "Node.js", level: 85 },
        { name: "Express.js", level: 80 },
      ],
    },
    {
      category: "Databases",
      items: [
        { name: "MS SQL Server", level: 90 },
        { name: "PostgreSQL", level: 75 },
        { name: "MySQL", level: 75 },
        { name: "MongoDB", level: 75 },
        { name: "Redis", level: 80 },
        { name: "Google BigQuery", level: 65 },
      ],
    },
    {
      category: "Design & Systems",
      items: [
        { name: "SOLID Principles", level: 90 },
        { name: "Design Patterns", level: 85 },
        { name: "Microservices", level: 85 },
        { name: "LLD", level: 80 },
        { name: "HLD", level: 80 },
      ],
    },
    {
      category: "Tools & Platforms",
      items: [
        { name: "Docker", level: 75 },
        { name: "Git", level: 90 },
        { name: "GitHub", level: 90 },
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
        "A modern URL shortener with rich analytics and business insights.",
      image: "/images/projects/sniplynx.jpg",
      technologies: ["React", "Go", "Gin", "PostgreSQL", "Docker", "Redis"],
      featured: true,
      underDevelopment: true,
    },
    {
      id: "project-2",
      title: "MDM Service",
      description:
        "Master Data Platform exposing scalable REST APIs to manage and synchronize high-volume product master data across systems. Optimized MongoDB queries via indexing and tuning, cutting response time by 35%. Built automated data transformation pipelines with Slack webhook alerts for job monitoring.",
      image: "/images/projects/mdm.jpg",
      technologies: ["Node.js", "TypeScript", "MongoDB", "PostgreSQL"],
      featured: true,
    },
    {
      id: "project-3",
      title: "Portfolio",
      description:
        "A modern, responsive portfolio website built with React and Tailwind CSS.",
      image: "/images/projects/portfolio.jpg",
      technologies: ["React", "Tailwind CSS", "Vite"],
      liveUrl: "/",
      githubUrl: "https://github.com/drcxd-6602/portfolio",
      featured: true,
    },
  ],

  // Work Experience
  experience: [
    {
      company: "Sarvaha Systems Pvt. Ltd.",
      position: "Software Developer",
      period: "Jul 2024 - Present",
      description: `Designed and developed a high-performance Device Control and Monitoring System using C#, .NET Core for real-time device communication and simulation.
        Developed multi-threaded device plugins using async/await, concurrency patterns, and plugin architecture.
        Implemented actor-based communication over gRPC for scalable distributed systems.
        Built GraphQL and REST APIs using ASP.NET Core, and real-time dashboards using Blazor Server.
        Implemented high-performance data access using Dapper and Entity Framework Core with MS SQL Server.
        Delivered NUnit unit tests (80%+ coverage), applied SOLID principles and clean architecture, and contributed to system design and performance optimization.`,
      technologies: [
        "C#",
        ".NET Core",
        "ASP.NET Core",
        "Blazor",
        "gRPC",
        "GraphQL",
        "Dapper",
        "EF Core",
        "MS SQL",
        "NUnit",
      ],
    },
    {
      company: "Sarvaha Systems Pvt. Ltd.",
      position: "Software Engineer Intern",
      period: "Jan 2024 - Jun 2024",
      description: `Developed a Node.js + TypeScript microservice for master data management and built automated scheduler pipelines for distributed data synchronization.
        Optimized MongoDB queries and indexing, reducing API latency by 40% and improving query performance.
        Designed and implemented SQL data pipelines for large-scale data processing, normalization, and data-quality validation.`,
      technologies: [
        "Node.js",
        "TypeScript",
        "MongoDB",
        "SQL",
        "GCP BigQuery",
      ],
    },
  ],

  seo: {
    title: "Darshan Chaudhari | Software Developer",
    description:
      "Portfolio of Darshan Chaudhari - Software Developer specializing in C#, .NET 8, ASP.NET Core, gRPC, GraphQL, Blazor, Node.js, and Go.",
    keywords: [
      "Darshan Chaudhari",
      "software developer",
      "C#",
      ".NET",
      "ASP.NET Core",
      "Blazor",
      "gRPC",
      "GraphQL",
      "React",
      "Node.js",
      "portfolio",
    ],
  },
};
