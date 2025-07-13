import React from 'react';

function BlogCard({ imgSrc, title, description, link }) {
  return (
    <div className="group overflow-hidden rounded-xl bg-white shadow-lg transition-all duration-300 ease-in-out h-full flex flex-col hover:shadow-2xl hover:-translate-y-2">
      <a href={link} target="_blank" rel="noopener noreferrer">
        {/* Gambar Blog */}
        <div className="relative h-56">
          <img
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
            src={imgSrc}
            alt={`Gambar thumbnail untuk artikel ${title}`}
          />
        </div>

        {/* Konten Teks */}
        <div className="flex flex-col p-6">
          <h3 className="text-xl font-bold text-slate-800 mb-2">
            {title}
          </h3>
          <p className="text-slate-600 text-base leading-relaxed mb-4">
            {description}
          </p>
          
          {/* Link dibuat lebih menonjol dan berada di bawah */}
          <div className="mt-auto">
            <span className="inline-block rounded-full bg-gray-900 px-5 py-2 text-sm font-semibold text-white transition-colors duration-300 group-hover:bg-sky-600">
              Read Article
            </span>
          </div>
        </div>
      </a>
    </div>
  );
}

export default BlogCard;