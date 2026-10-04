// src/components/BlogCard.js
import React from 'react';
import { FiArrowUpRight } from 'react-icons/fi';

export const FeaturedBlogCard = ({ blog }) => (
  <a
    href={blog.link}
    target="_blank"
    rel="noopener noreferrer"
    className="group card flex h-full flex-col overflow-hidden transition duration-300 hover:-translate-y-1 hover:shadow-lift"
  >
    <div className="aspect-[16/10] overflow-hidden border-b border-line bg-bg">
      <img
        src={blog.imgSrc}
        alt=""
        loading="lazy"
        className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.04]"
      />
    </div>
    <div className="flex flex-1 flex-col p-5">
      <h3 className="font-semibold leading-snug tracking-tight">{blog.title}</h3>
      <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-muted">{blog.description}</p>
      <span className="mt-auto flex items-center gap-1 pt-5 text-sm font-medium text-accent">
        <span className="link-underline">Read on Medium</span>
        <FiArrowUpRight className="transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
      </span>
    </div>
  </a>
);

const BlogCard = ({ blog }) => (
  <a
    href={blog.link}
    target="_blank"
    rel="noopener noreferrer"
    className="group flex items-center gap-4 py-4 sm:gap-5"
  >
    <div className="h-16 w-24 shrink-0 overflow-hidden rounded-lg border border-line bg-bg sm:h-[4.5rem] sm:w-28">
      <img
        src={blog.imgSrc}
        alt=""
        loading="lazy"
        className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
      />
    </div>
    <div className="min-w-0 flex-1">
      <h3 className="font-medium leading-snug transition group-hover:text-accent">{blog.title}</h3>
      <p className="mt-1 line-clamp-1 text-sm text-muted">{blog.description}</p>
    </div>
    <FiArrowUpRight className="hidden shrink-0 text-muted transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent sm:block" />
  </a>
);

export default BlogCard;
