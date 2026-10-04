// src/components/Blogs.js
import React from 'react';
import { motion } from 'framer-motion';
import blogData from '../data/blogData';
import BlogCard from './BlogCard';
import PageHeader from './PageHeader';
import PageFooter from './PageFooter';
import SectionHeading from './SectionHeading';

const ArticleList = ({ articles }) => (
  <ul className="divide-y divide-gray-200">
    {articles.map((blog) => (
      <li key={blog.id} className="py-10">
        <BlogCard imgSrc={blog.imgSrc} title={blog.title} description={blog.description} link={blog.link} />
      </li>
    ))}
  </ul>
);

function Blogs() {
  const highlightedArticles = blogData.filter((blog) => blog.isHighlighted);
  const regularArticles = blogData.filter((blog) => !blog.isHighlighted);

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4 }}>
      <PageHeader title="Blogs">
        Articles about the tools and concepts I have applied in software development. New posts go up on{' '}
        <a
          href="https://medium.com/@rikza.kurnia"
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium text-green-600 hover:text-green-700"
        >
          Medium
        </a>
        .
      </PageHeader>

      {highlightedArticles.length > 0 && (
        <>
          <SectionHeading>Highlighted Articles</SectionHeading>
          <ArticleList articles={highlightedArticles} />
        </>
      )}

      {regularArticles.length > 0 && (
        <>
          <SectionHeading>Other Articles</SectionHeading>
          <ArticleList articles={regularArticles} />
        </>
      )}

      <PageFooter />
    </motion.div>
  );
}

export default Blogs;
