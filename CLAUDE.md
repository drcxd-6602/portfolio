# Portfolio Website - Project Documentation

## Overview

A modern, configurable React portfolio website with Tailwind CSS, featuring a blog system using local markdown files, dark/light mode, and GitHub Pages deployment.

## Tech Stack

- **React 19** - UI library
- **Vite** - Build tool and dev server
- **Tailwind CSS 3.4** - Utility-first CSS framework
- **React Router 7** - Client-side routing
- **react-markdown** - Markdown rendering for blog
- **gray-matter** - Frontmatter parsing
- **Lucide React** - Icon library
- **gh-pages** - GitHub Pages deployment

## Project Structure

```
portfolio/
├── public/
│   ├── CNAME                 # Custom domain (edit with your domain)
│   ├── favicon.svg           # Site favicon
│   ├── resume.pdf            # Your resume (add your file)
│   └── images/
│       ├── profile.jpg       # Your profile image
│       ├── projects/         # Project screenshots
│       └── blog/             # Blog post images
├── src/
│   ├── components/
│   │   ├── common/           # Reusable UI components
│   │   │   ├── Button.jsx
│   │   │   ├── Card.jsx
│   │   │   ├── Section.jsx
│   │   │   ├── SectionTitle.jsx
│   │   │   └── Badge.jsx
│   │   ├── layout/           # Layout components
│   │   │   ├── Layout.jsx
│   │   │   ├── Navbar.jsx
│   │   │   ├── Footer.jsx
│   │   │   └── ThemeToggle.jsx
│   │   ├── sections/         # Home page sections
│   │   │   ├── Hero.jsx
│   │   │   ├── About.jsx
│   │   │   ├── Skills.jsx
│   │   │   ├── Projects.jsx
│   │   │   ├── Experience.jsx
│   │   │   └── Contact.jsx
│   │   └── blog/             # Blog components
│   │       ├── BlogCard.jsx
│   │       └── MarkdownRenderer.jsx
│   ├── config/
│   │   ├── site.config.js    # ⭐ MAIN CONFIG - Edit this!
│   │   └── navigation.config.js
│   ├── content/
│   │   └── blog/             # 📝 Your blog posts (markdown)
│   ├── context/
│   │   └── ThemeContext.jsx  # Dark/light mode
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Blog.jsx
│   │   ├── BlogPostPage.jsx
│   │   └── NotFound.jsx
│   ├── utils/
│   │   └── blogUtils.js      # Blog utility functions
│   ├── styles/
│   │   └── index.css         # Tailwind imports + custom CSS
│   ├── App.jsx
│   └── main.jsx
├── .github/
│   └── workflows/
│       └── deploy.yml        # Auto-deploy to GitHub Pages
├── tailwind.config.js
├── vite.config.js
├── package.json
└── CLAUDE.md                 # This file
```

## Quick Start

### Development

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

### Deployment

```bash
# Manual deploy to GitHub Pages
npm run deploy
```

Or push to `main` branch - GitHub Actions will auto-deploy.

## Configuration

### 1. Personal Information (`src/config/site.config.js`)

Edit this file to customize ALL your portfolio content:

```javascript
export const siteConfig = {
  personal: {
    name: "Your Name",
    title: "Your Title",
    email: "your@email.com",
    location: "Your City",
    bio: "Short bio...",
    longBio: "Detailed bio...",
    profileImage: "/images/profile.jpg",
    resumeFile: "/resume.pdf",
  },
  social: {
    github: "https://github.com/yourusername",
    linkedin: "https://linkedin.com/in/yourusername",
    twitter: "https://twitter.com/yourusername",
    email: "mailto:your@email.com",
  },
  skills: [...],
  projects: [...],
  experience: [...],
};
```

### 2. Navigation (`src/config/navigation.config.js`)

Customize navigation links and CTA button.

### 3. Theme Colors (`tailwind.config.js`)

The default theme uses purple. To change colors, edit the `primary` colors in `tailwind.config.js`.

### 4. Custom Domain (`public/CNAME`)

Replace `yourdomain.com` with your actual domain.

## Adding Blog Posts

1. Create a new `.md` file in `src/content/blog/`:

```markdown
---
title: "Your Post Title"
date: "2026-01-08"
excerpt: "A brief description of your post"
tags: ["tag1", "tag2"]
coverImage: "/images/blog/your-image.jpg"
published: true
---

# Your Post Title

Your markdown content here...

## Code Example

\`\`\`javascript
const hello = "world";
\`\`\`
```

2. Add any images to `public/images/blog/`
3. Push to GitHub - post will appear automatically

## Adding Images

### Profile Image
- Place at `public/images/profile.jpg`
- Recommended: Square image, at least 320x320px

### Project Images
- Place in `public/images/projects/`
- Reference in `site.config.js` as `/images/projects/filename.jpg`
- Recommended: 600x400px or similar aspect ratio

### Blog Images
- Place in `public/images/blog/`
- Reference in blog frontmatter as `/images/blog/filename.jpg`

### Resume
- Place your PDF at `public/resume.pdf`

## GitHub Pages Setup

### Option 1: Automatic (Recommended)

1. Push code to GitHub
2. Go to repo Settings → Pages
3. Source: "GitHub Actions"
4. The workflow will auto-deploy on every push to `main`

### Option 2: Manual

```bash
npm run deploy
```

Then in repo Settings → Pages, set source to `gh-pages` branch.

### Custom Domain

1. Edit `public/CNAME` with your domain
2. In GitHub repo Settings → Pages → Custom domain, enter your domain
3. Configure DNS at your domain provider:

**For apex domain (yourdomain.com):**
| Type | Name | Value |
|------|------|-------|
| A | @ | 185.199.108.153 |
| A | @ | 185.199.109.153 |
| A | @ | 185.199.110.153 |
| A | @ | 185.199.111.153 |

**For www subdomain:**
| Type | Name | Value |
|------|------|-------|
| CNAME | www | yourusername.github.io |

## Dark Mode

Dark mode is enabled by default and:
- Respects system preference
- Can be toggled via the sun/moon button
- Persists choice in localStorage

## Key Files to Customize

| File | Purpose |
|------|---------|
| `src/config/site.config.js` | All portfolio content |
| `public/CNAME` | Your custom domain |
| `public/images/profile.jpg` | Your photo |
| `public/resume.pdf` | Your resume |
| `tailwind.config.js` | Theme colors |

## Commands Reference

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run deploy` | Deploy to GitHub Pages |

## Troubleshooting

### Images not loading
- Ensure images are in `public/` folder
- Use paths starting with `/` (e.g., `/images/profile.jpg`)

### Blog posts not showing
- Check `published: true` in frontmatter
- Ensure date format is correct (YYYY-MM-DD)

### Styles not applying
- Run `npm run dev` to regenerate Tailwind
- Clear browser cache

### GitHub Pages 404
- Ensure CNAME file exists in `public/`
- Check GitHub Pages settings for correct source
