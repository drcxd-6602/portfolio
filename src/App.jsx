import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';

// Lazy load pages
const Home = lazy(() => import('./pages/Home'));
const Blog = lazy(() => import('./pages/Blog'));
const BlogPostPage = lazy(() => import('./pages/BlogPostPage'));
const NotFound = lazy(() => import('./pages/NotFound'));

// Loading fallback
const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center">
    <div className="w-8 h-8 border-4 border-primary-600 border-t-transparent rounded-full animate-spin" />
  </div>
);

function App() {
  return (
    <Suspense fallback={<PageLoader />}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="blog" element={<Blog />} />
          <Route path="blog/:slug" element={<BlogPostPage />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
