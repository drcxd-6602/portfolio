import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock, User } from 'lucide-react';
import { Section, Badge, Button } from '@/components/common';
import { MarkdownRenderer } from '@/components/blog';
import { getPostBySlug, formatDate, calculateReadTime } from '@/utils/blogUtils';
import { siteConfig } from '@/config/site.config';

export default function BlogPostPage() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const post = getPostBySlug(slug);

  if (!post) {
    return (
      <div className="pt-20 min-h-screen">
        <Section>
          <div className="text-center py-16">
            <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">
              Post Not Found
            </h1>
            <p className="text-slate-600 dark:text-slate-400 mb-8">
              The blog post you're looking for doesn't exist.
            </p>
            <Button to="/blog">
              <ArrowLeft size={18} />
              Back to Blog
            </Button>
          </div>
        </Section>
      </div>
    );
  }

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <div className="bg-slate-50 dark:bg-slate-800/50 py-12 md:py-16">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-4xl">
          {/* Back Button */}
          <button
            onClick={() => navigate('/blog')}
            className="inline-flex items-center gap-2 text-slate-600 dark:text-slate-400 hover:text-primary-600 dark:hover:text-primary-400 mb-8 transition-colors"
          >
            <ArrowLeft size={18} />
            Back to Blog
          </button>

          {/* Tags */}
          {post.tags && post.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-4">
              {post.tags.map((tag) => (
                <Badge key={tag} variant="primary">
                  {tag}
                </Badge>
              ))}
            </div>
          )}

          {/* Title */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-6">
            {post.title}
          </h1>

          {/* Meta */}
          <div className="flex flex-wrap items-center gap-6 text-slate-600 dark:text-slate-400">
            <span className="flex items-center gap-2">
              <User size={18} />
              {post.author || siteConfig.personal.name}
            </span>
            <span className="flex items-center gap-2">
              <Calendar size={18} />
              {formatDate(post.date)}
            </span>
            <span className="flex items-center gap-2">
              <Clock size={18} />
              {post.readTime || calculateReadTime(post.body)}
            </span>
          </div>
        </div>
      </div>

      {/* Cover Image */}
      {post.coverImage && (
        <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-4xl -mt-8 relative z-10">
          <img
            src={post.coverImage}
            alt={post.title}
            className="w-full h-64 md:h-96 object-cover rounded-xl shadow-xl"
            onError={(e) => {
              e.target.style.display = 'none';
            }}
          />
        </div>
      )}

      {/* Content */}
      <Section>
        <div className="max-w-3xl mx-auto">
          <MarkdownRenderer content={post.body} />

          {/* Post Footer */}
          <div className="mt-12 pt-8 border-t border-slate-200 dark:border-slate-700">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div>
                <p className="text-sm text-slate-500 dark:text-slate-400">
                  Written by
                </p>
                <p className="font-medium text-slate-900 dark:text-white">
                  {post.author || siteConfig.personal.name}
                </p>
              </div>
              <Button to="/blog" variant="outline">
                <ArrowLeft size={18} />
                More Articles
              </Button>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}
