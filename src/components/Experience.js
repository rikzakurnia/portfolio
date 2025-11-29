// src/components/Experience.js

import React from 'react';
import { motion } from 'framer-motion';
import ExperienceCard from './ExperienceCard';
import { workExperiences, programExperiences } from '../data/experienceData';

const Experience = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, ease: 'easeOut' }
    }
  };

  return (
    <motion.div
      className="p-8"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.h1
        className="text-3xl font-bold mb-8 text-center md:text-left"
        variants={itemVariants}
      >
        Experience
      </motion.h1>

      {/* WORK EXPERIENCE */}
      <motion.h2
        className="text-2xl font-semibold mb-6 mt-4"
        variants={itemVariants}
      >
        Work Experience
      </motion.h2>

      <div>
        {workExperiences.map((exp, index) => (
          <motion.div key={exp.id} variants={itemVariants}>
            <ExperienceCard
              experience={exp}
              isLast={index === workExperiences.length - 1}
            />
          </motion.div>
        ))}
      </div>

      {/* PROGRAMS & TRAINING */}
      <motion.h2
        className="text-2xl font-semibold mb-6 mt-12"
        variants={itemVariants}
      >
        Programs & Training
      </motion.h2>

      <div>
        {programExperiences.map((exp, index) => (
          <motion.div key={exp.id} variants={itemVariants}>
            <ExperienceCard
              experience={exp}
              isLast={index === programExperiences.length - 1}
            />
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Experience;
