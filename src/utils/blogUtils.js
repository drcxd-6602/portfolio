import matter from 'gray-matter';

/**
 * Get all blog posts from the content/blog directory
 * Uses Vite's import.meta.glob to dynamically import markdown files
 */
export function getAllPosts() {
  // Import all markdown files from the blog directory
  const posts = import.meta.glob('/src/content/blog/*.md', {
    query: '?raw',
    import: 'default',
    eager: true,
  });

  const allPosts = Object.entries(posts).map(([filepath, content]) => {
    // Parse frontmatter and content
    const { data, content: body } = matter(content);

    // Extract slug from filename
    const filename = filepath.split('/').pop();
    const slug = filename.replace('.md', '');

    return {
      ...data,
      slug,
      body,
      filepath,
    };
  });

  // Sort by date (newest first) and filter out unpublished posts
  return allPosts
    .filter((post) => post.published !== false)
    .sort((a, b) => new Date(b.date) - new Date(a.date));
}

/**
 * Get a single post by its slug
 */
export function getPostBySlug(slug) {
  const posts = getAllPosts();
  return posts.find((post) => post.slug === slug);
}

/**
 * Get all unique tags from all posts
 */
export function getAllTags() {
  const posts = getAllPosts();
  const tags = new Set();

  posts.forEach((post) => {
    if (post.tags) {
      post.tags.forEach((tag) => tags.add(tag));
    }
  });

  return Array.from(tags).sort();
}

/**
 * Get posts filtered by tag
 */
export function getPostsByTag(tag) {
  const posts = getAllPosts();
  return posts.filter((post) => post.tags && post.tags.includes(tag));
}

/**
 * Format date for display
 */
export function formatDate(dateString) {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

/**
 * Calculate estimated read time
 */
export function calculateReadTime(content) {
  const wordsPerMinute = 200;
  const words = content.trim().split(/\s+/).length;
  const minutes = Math.ceil(words / wordsPerMinute);
  return `${minutes} min read`;
}
