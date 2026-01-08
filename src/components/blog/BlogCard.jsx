import { Link } from 'react-router-dom';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { Card, Badge } from '@/components/common';
import { formatDate, calculateReadTime } from '@/utils/blogUtils';

export default function BlogCard({ post }) {
  return (
    <Card className="group overflow-hidden" padding="p-0">
      {/* Cover Image */}
      {post.coverImage && (
        <Link to={`/blog/${post.slug}`} className="block">
          <div className="h-48 overflow-hidden bg-slate-100 dark:bg-slate-800">
            <img
              src={post.coverImage}
              alt={post.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              onError={(e) => {
                e.target.src = `https://placehold.co/600x400/a855f7/ffffff?text=${encodeURIComponent(post.title)}`;
              }}
            />
          </div>
        </Link>
      )}

      {/* Content */}
      <div className="p-6">
        {/* Tags */}
        {post.tags && post.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-3">
            {post.tags.slice(0, 3).map((tag) => (
              <Badge key={tag} variant="primary">
                {tag}
              </Badge>
            ))}
          </div>
        )}

        {/* Title */}
        <Link to={`/blog/${post.slug}`}>
          <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors line-clamp-2">
            {post.title}
          </h3>
        </Link>

        {/* Excerpt */}
        <p className="text-slate-600 dark:text-slate-400 mb-4 line-clamp-2">
          {post.excerpt}
        </p>

        {/* Meta */}
        <div className="flex items-center gap-4 text-sm text-slate-500 dark:text-slate-400 mb-4">
          <span className="flex items-center gap-1">
            <Calendar size={14} />
            {formatDate(post.date)}
          </span>
          <span className="flex items-center gap-1">
            <Clock size={14} />
            {post.readTime || calculateReadTime(post.body)}
          </span>
        </div>

        {/* Read More Link */}
        <Link
          to={`/blog/${post.slug}`}
          className="inline-flex items-center gap-2 text-primary-600 dark:text-primary-400 font-medium hover:gap-3 transition-all"
        >
          Read More
          <ArrowRight size={16} />
        </Link>
      </div>
    </Card>
  );
}
