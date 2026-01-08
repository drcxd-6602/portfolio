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
    bio: "Passionate developer with expertise in building modern web applications. I love creating elegant solutions to complex problems.",
    longBio: `Software Developer with 2+ years of experience specializing in C# and .NET (ASP.NET Core), building scalable, high-performance backend systems and APIs. 
    Strong hands-on experience across the full stack, including React, JavaScript, TypeScript, Node.js, and Golang, with a solid foundation in system design and distributed application concepts. 
    Proficient in working with relational databases such as PostgreSQL and MySQL, as well as MongoDB for NoSQL use cases. Leverage modern AI tools to accelerate development, improve code quality, and maintain production-ready standards. Open to impactful engineering opportunities.`,
    profileImage: "/images/profile.jpeg",
    resumeFile: "/resume.pdf",
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
        { name: ".Net MVC", level: 75 },
        { name: "Golang", level: 70 },
        { name: "Node/Typescript", level: 85 },
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
        "A weather application with location-based forecasts and interactive maps.",
      image: "/images/projects/weather.jpg",
      technologies: ["React", "OpenWeather API", "Mapbox"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/yourusername/weather",
      featured: true,
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
      technologies: ["React", "TypeScript", "Node.js", "AWS"],
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
        "C#",
        ".Net core",
        "ASP.Net core MVC",
        "React",
        "Typescript",
        "SQL",
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
