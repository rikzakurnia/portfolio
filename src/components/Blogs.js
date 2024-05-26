import React from 'react'
import blogData from '../data/blogData'

function Blogs() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h2 className="text-3xl text-center font-bold mb-6">Blogs</h2>
      <h2 className="text-xl text-center mb-2">
      Dive into my collection of articles where I share insights on software development's best practices and offer tips and tutorials regarding that topics. To keep up with my latest article, follow me on medium{" "}
        <a class="text-blue underline" href="https://medium.com/@rikza.kurnia">
          here
        </a>
      </h2>
      <h1 className="text-xl text-green-500 text-center mb-6">Latest Articles:</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {blogData.map(blog => (
          <div key={blog.id} className="bg-white rounded-lg shadow-md border-opacity-20 border-2 border-gray-800  p-5 mx-2 my-2 overflow-hidden hover:scale-105">
            <img className="w-full h-48 object-cover" src={blog.imgSrc} alt="{blog.title} - Blog post" />
            <div className="p-4">
              <h3 className="text-lg font-medium mb-2">{blog.title}</h3>
              <p className="text-gray-700 mb-4">
                {blog.description}
              </p>
              <a href={blog.link} className="rounded-lg self-end bg-gray-500 py-2 px-4 text-sm font-medium text-white align-end hover:opacity-80">View article</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Blogs
