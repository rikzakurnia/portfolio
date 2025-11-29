import React from 'react';

function BlogCard({ imgSrc, title, description, link }) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="group block w-full"
    >
      <div className="
        flex flex-col md:flex-row 
        bg-white rounded-xl shadow-lg 
        overflow-hidden transition-all duration-300 
        hover:shadow-2xl hover:-translate-y-1
      ">
        
        {/* IMAGE */}
        <div className="md:w-1/3 w-full h-56 md:h-auto overflow-hidden">
          <img
            src={imgSrc}
            alt={`Thumbnail for ${title}`}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>

        {/* TEXT CONTENT */}
        <div className="md:w-2/3 w-full p-6 flex flex-col">
          <h3 className="text-2xl font-bold text-slate-800 mb-2">
            {title}
          </h3>

          <p className="text-slate-600 leading-relaxed mb-4">
            {description}
          </p>

          <div className="mt-auto">
            <span className="
              inline-block rounded-full bg-gray-900 
              px-5 py-2 text-sm font-semibold text-white 
              transition-all duration-300 
              group-hover:bg-sky-600
            ">
              Read Article
            </span>
          </div>
        </div>

      </div>
    </a>
  );
}

export default BlogCard;
