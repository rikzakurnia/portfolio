// src/components/Blogs.js
import React from 'react';
import { motion } from 'framer-motion';
import { FaMediumM } from 'react-icons/fa';
import { FiArrowUpRight } from 'react-icons/fi';
import blogData from '../data/blogData';
import BlogCard, { FeaturedBlogCard } from './BlogCard';
import PageHeader, { fadeUp, stagger } from './PageHeader';
import PageFooter from './PageFooter';
import { socialLinks } from '../config/navigation';

function Blogs() {
  const highlightedArticles = blogData.filter((blog) => blog.isHighlighted);
  const regularArticles = blogData.filter((blog) => !blog.isHighlighted);

  return (
    <motion.div variants={stagger} initial="hidden" animate="visible">
      <PageHeader
        title="Notes &"
        accent="writing"
        description="Articles about the tools and practices I've applied in real projects — testing, profiling, CI/CD and clean architecture."
      />

      {/* HIGHLIGHTED ARTICLES */}
      {highlightedArticles.length > 0 && (
        <section className="mb-16">
          <motion.h2 variants={fadeUp} className="mb-6 text-xl font-semibold tracking-tight">
            Highlighted articles
          </motion.h2>
          <motion.div variants={stagger} className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {highlightedArticles.map((blog) => (
              <motion.div key={blog.id} variants={fadeUp}>
                <FeaturedBlogCard blog={blog} />
              </motion.div>
            ))}
          </motion.div>
        </section>
      )}

      {/* OTHER ARTICLES */}
      {regularArticles.length > 0 && (
        <section>
          <motion.h2 variants={fadeUp} className="mb-4 text-xl font-semibold tracking-tight">
            More articles
          </motion.h2>
          <motion.div variants={fadeUp} className="card divide-y divide-line px-5">
            {regularArticles.map((blog) => (
              <BlogCard key={blog.id} blog={blog} />
            ))}
          </motion.div>
        </section>
      )}

      {/* MEDIUM CTA */}
      <motion.a
        variants={fadeUp}
        href={socialLinks.medium}
        target="_blank"
        rel="noopener noreferrer"
        className="group mt-8 flex items-center justify-between gap-4 rounded-2xl border border-dashed border-line p-5 transition hover:border-accent/50 hover:bg-accent/5"
      >
        <div className="flex items-center gap-4">
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-ink text-bg">
            <FaMediumM />
          </span>
          <div>
            <p className="font-medium">Follow along on Medium</p>
            <p className="text-sm text-muted">New posts land there first.</p>
          </div>
        </div>
        <FiArrowUpRight className="text-muted transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent" />
      </motion.a>

      <PageFooter />
    </motion.div>
  );
}

export default Blogs;
