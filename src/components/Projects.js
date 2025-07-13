// src/components/Projects.js
import React from 'react';
import { motion } from 'framer-motion';
import projectsData from '../data/projectsData';
import ProjectCard from './ProjectCard';

const Projects = () => {
  // Logika untuk memfilter proyek
  const flagshipProject = projectsData.find(p => p.isFlagship);
  const highlightedProjects = projectsData.filter(p => p.category === 'highlighted' && !p.isFlagship);
  const otherProjects = projectsData.filter(p => p.category === 'other' && !p.isFlagship);

  // Varian animasi
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5, ease: 'easeOut' } },
  };

  return (
    <motion.div
      className="bg-slate-50 p-8"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.h1 className="mb-12 text-center text-4xl font-extrabold text-slate-900" variants={itemVariants}>
        My Projects
      </motion.h1>

      {/* Bagian Flagship Project (Placeholder) */}
      <motion.div className="mb-20 text-center" variants={itemVariants}>
        <h2 className="mb-4 text-3xl font-bold text-slate-800 border-b-2 border-green-500 pb-2 inline-block">
          Flagship Project
        </h2>
        {flagshipProject ? (
          // Nanti di sini Anda bisa membuat komponen khusus untuk flagship project
          <ProjectCard project={flagshipProject} />
        ) : (
          <div className="rounded-lg border-2 border-dashed border-slate-300 bg-white p-12">
            <p className="text-slate-500">🚀 A new exciting project is under construction. Coming soon!</p>
          </div>
        )}
      </motion.div>

      {/* Bagian Highlighted Projects */}
      {highlightedProjects.length > 0 && (
        <motion.div className="mb-20" variants={containerVariants}>
          <motion.h2 className="mb-8 text-3xl font-bold text-slate-800" variants={itemVariants}>
            Highlighted Projects
          </motion.h2>
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
            {highlightedProjects.map((project) => (
              <motion.div key={project.id} variants={itemVariants}>
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </div>
        </motion.div>
      )}

      {/* Bagian Other Projects */}
      {otherProjects.length > 0 && (
        <motion.div variants={containerVariants}>
          <motion.h2 className="mb-8 text-3xl font-bold text-slate-800" variants={itemVariants}>
            Other Projects
          </motion.h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {otherProjects.map((project) => (
              <motion.div key={project.id} variants={itemVariants}>
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </div>
        </motion.div>
      )}
    </motion.div>
  );
};

export default Projects;