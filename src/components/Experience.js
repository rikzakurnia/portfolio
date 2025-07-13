// src/components/Experience.js
import React from 'react';
import { motion } from 'framer-motion';
import ExperienceCard from './ExperienceCard';
import experiences from '../data/experienceData'; 

const Experience = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15, 
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 }, 
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
      },
    },
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
      
      <div>
        {experiences.map((experience, index) => (
          <motion.div key={experience.id || index} variants={itemVariants}>
            <ExperienceCard
              experience={experience}

              isLast={index === experiences.length - 1}
            />
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Experience;