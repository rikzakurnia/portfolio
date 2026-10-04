// src/components/BlogCard.js
import React from 'react';

function BlogCard({ imgSrc, title, description, link }) {
  return (
    <article className="grid gap-5 sm:grid-cols-3 sm:gap-8">
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        tabIndex={-1}
        aria-hidden="true"
        className="block self-start overflow-hidden rounded-md border-2 border-gray-200/60"
      >
        <img
          src={imgSrc}
          alt=""
          loading="lazy"
          className="aspect-video w-full object-cover transition-transform duration-500 hover:scale-[1.03]"
        />
      </a>
      <div className="sm:col-span-2">
        <h3 className="text-xl font-bold leading-7 tracking-tight">
          <a href={link} target="_blank" rel="noopener noreferrer" className="text-gray-900 hover:text-green-700">
            {title}
          </a>
        </h3>
        <p className="mt-2 leading-7 text-gray-500">{description}</p>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-3 inline-block font-medium text-green-600 hover:text-green-700"
          aria-label={`Read "${title}" on Medium`}
        >
          Read article &rarr;
        </a>
      </div>
    </article>
  );
}

export default BlogCard;
