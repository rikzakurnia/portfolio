import React from 'react';
import { motion } from 'framer-motion'; 
import blogData from '../data/blogData';
import BlogCard from './BlogCard';

function Blogs() {
  const highlightedArticles = blogData.filter(blog => blog.isHighlighted);
  const regularArticles = blogData.filter(blog => !blog.isHighlighted);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (

    <motion.div
      className="bg-slate-50"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="container mx-auto px-4 py-24 sm:px-6 lg:px-8">
        

        <motion.div className="text-center mb-20" variants={containerVariants}>
          <motion.h1
            className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl"
            variants={itemVariants}
          >
            My Articles
          </motion.h1>
          <motion.p
            className="mt-6 max-w-2xl mx-auto text-lg leading-8 text-slate-600"
            variants={itemVariants}
          >
            Collection of Articles about the implementation of a concept or tools in the IT field that i write . Follow my latest article on medium{" "}
            <a
              href="https://medium.com/@rikza.kurnia"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-sky-600 hover:text-sky-500 transition-colors duration-200"
            >
              here
            </a>.
          </motion.p>
        </motion.div>


        {highlightedArticles.length > 0 && (
          <motion.div className="mb-20" variants={containerVariants}>
            <motion.h2
              className="text-3xl font-bold text-slate-800 mb-8 border-l-4 border-green-500 pl-4"
              variants={itemVariants}
            >
              Highlighted Article
            </motion.h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {highlightedArticles.map((blog) => (
                // 4. Bungkus setiap kartu dengan motion.div
                <motion.div key={blog.id} variants={itemVariants}>
                  <BlogCard
                    imgSrc={blog.imgSrc}
                    title={blog.title}
                    description={blog.description}
                    link={blog.link}
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {regularArticles.length > 0 && (
           <motion.div variants={containerVariants}>
            <motion.h2
              className="text-3xl font-bold text-slate-800 mb-8 border-l-4 border-green-400 pl-4"
              variants={itemVariants}
            >
              Other Articles
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {regularArticles.map((blog) => (

                <motion.div key={blog.id} variants={itemVariants}>
                  <BlogCard
                    imgSrc={blog.imgSrc}
                    title={blog.title}
                    description={blog.description}
                    link={blog.link}
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
        
      </div>
    </motion.div>
  );
}

export default Blogs;