// src/components/Projects.js
import React from 'react';
import { motion } from 'framer-motion';
import projectsData from '../data/projectsData';
import { FlagshipCard, ProjectCard, ProjectRow } from './ProjectCard';
import PageHeader, { fadeUp, stagger } from './PageHeader';
import PageFooter from './PageFooter';

const SectionTitle = ({ children, count }) => (
  <motion.div variants={fadeUp} className="mb-6 flex items-baseline justify-between gap-4">
    <h2 className="text-xl font-semibold tracking-tight">{children}</h2>
    {count !== undefined && <span className="font-mono text-xs text-muted">{String(count).padStart(2, '0')}</span>}
  </motion.div>
);

const Projects = () => {
  const flagshipProject = projectsData.find((p) => p.isFlagship);
  const highlightedProjects = projectsData.filter((p) => p.category === 'highlighted' && !p.isFlagship);
  const otherProjects = projectsData.filter((p) => p.category === 'other' && !p.isFlagship);

  return (
    <motion.div variants={stagger} initial="hidden" animate="visible">
      <PageHeader
        title="Things I've"
        accent="built"
        description="A selection of projects across backend systems, cloud deployment and full-stack products — from a personal flagship to team and course projects."
      />

      {/* FLAGSHIP PROJECT */}
      <section className="mb-20">
        <SectionTitle>Flagship project</SectionTitle>
        <motion.div variants={fadeUp}>
          {flagshipProject ? (
            <FlagshipCard project={flagshipProject} />
          ) : (
            <div className="rounded-2xl border-2 border-dashed border-line p-12 text-center text-muted">
              A new exciting project is under construction. Coming soon!
            </div>
          )}
        </motion.div>
      </section>

      {/* HIGHLIGHTED PROJECTS */}
      {highlightedProjects.length > 0 && (
        <section className="mb-20">
          <SectionTitle count={highlightedProjects.length}>Highlighted projects</SectionTitle>
          <motion.div variants={stagger} className="grid gap-6 md:grid-cols-2">
            {highlightedProjects.map((project, index) => {
              // An odd last card spans the full row instead of sitting alone.
              const wide = highlightedProjects.length % 2 === 1 && index === highlightedProjects.length - 1;
              return (
                <motion.div key={project.id} variants={fadeUp} className={wide ? 'md:col-span-2' : ''}>
                  <ProjectCard project={project} wide={wide} />
                </motion.div>
              );
            })}
          </motion.div>
        </section>
      )}

      {/* OTHER PROJECTS */}
      {otherProjects.length > 0 && (
        <section>
          <SectionTitle count={otherProjects.length}>Other projects</SectionTitle>
          <motion.div variants={fadeUp} className="card divide-y divide-line px-6">
            {otherProjects.map((project, index) => (
              <ProjectRow key={project.id} project={project} index={index} />
            ))}
          </motion.div>
        </section>
      )}

      <PageFooter />
    </motion.div>
  );
};

export default Projects;
