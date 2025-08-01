import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FaNodeJs, FaReact, FaPython, FaJava
} from 'react-icons/fa';
import {
  SiNextdotjs, SiNestjs, SiDjango, SiSpringboot, SiPostgresql,
  SiFirebase, SiMysql, SiFlask, SiJavascript, SiDocker,
  SiGo, SiAmazonaws, SiGooglecloud, SiVuedotjs, SiMongodb, SiRabbitmq
} from 'react-icons/si';
import { ReactComponent as QdrantIcon } from '../icon/qdrant.svg';

const skillsData = [
  {
    category: 'Programming Languages',
    skills: [
      { name: 'Python', icon: <FaPython size={32} />, description: 'Used for developing web application and to learn machine learning' },
      { name: 'Java', icon: <FaJava size={32} />, description: 'Used for developing web application.' },
      { name: 'JavaScript', icon: <SiJavascript size={32} />, description: 'Used for frontend and backend (Node.js) development.' },
      { name: 'Go (Golang)', icon: <SiGo size={32} />, description: 'Used for backend project' },
    ],
  },
  {
    category: 'Frameworks & Libraries',
    skills: [
      { name: 'Node.js', icon: <FaNodeJs size={32} />, description: 'Used for several projects including "Rempahpedia"' },
      { name: 'Next.js', icon: <SiNextdotjs size={32} />, description: 'Used for "Sekelas" Application' },
      { name: 'Nest.js', icon: <SiNestjs size={32} />, description: 'Used for "LaundryEase" Application' },
      { name: 'Django', icon: <SiDjango size={32} />, description: 'Used for "RSUMMI" Application.' },
      { name: 'Spring Boot', icon: <SiSpringboot size={32} />, description: 'Used for "Sekelas" Application.' },
      { name: 'Flask', icon: <SiFlask size={32} />, description: 'Used for a project in class.' },
      { name: 'React', icon: <FaReact size={32} />, description: 'Used for this website.' },
      { name: 'Vue.js', icon: <SiVuedotjs size={32} />, description: 'Used as the frontend for "Smart Photo Storage" project.' },
    ],
  },
  {
    category: 'Databases',
    skills: [
      { name: 'PostgreSQL', icon: <SiPostgresql size={32} />, description: 'Used in most of my project.' },
      { name: 'Firestore', icon: <SiFirebase size={32} />, description: 'Used in "Rempahpedia" project.' },
      { name: 'MySQL', icon: <SiMysql size={32} />, description: 'Used in some project.' },
      { name: 'MongoDB', icon: <SiMongodb size={32} />, description: 'Used to store metadata in "Smart Photo Storage" project.' },
      { name: 'Qdrant', icon: <QdrantIcon width={32} height={32} opacity={0.7} />, description: 'Used as the vector database in "Smart Photo Storage".' },
    ],
  },
  {
    category: 'Cloud & DevOps',
    skills: [
      { name: 'AWS (Amazon Web Services)', icon: <SiAmazonaws size={32} />, description: 'Experience with EC2, S3, and Lambda for deployments.' },
      { name: 'Google Cloud Platform (GCP)', icon: <SiGooglecloud size={32} />, description: 'Associate Cloud Engineer Certification' },
      { name: 'Docker', icon: <SiDocker size={32} />, description: 'Used in almost all of my project for easier deployment' },
      { name: 'RabbitMQ', icon: <SiRabbitmq size={32} />, description: 'Used for asynchronous task queue in photo embedding pipeline in "Smart Photo Storage".' },
    ],
  },
  {
    category: 'Tools & Scripting',
    skills: [
      { name: 'Bash Scripting', icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="32" height="32" fill="currentColor">
            <path d="M20 4H4C2.89543 4 2 4.89543 2 6V18C2 19.1046 2.89543 20 4 20H20C21.1046 20 22 19.1046 22 18V6C22 4.89543 21.1046 4 20 4ZM4 6H20V18H4V6ZM6 10H8V12H6V10ZM9 10H17V12H9V10ZM6 14H8V16H6V14ZM9 14H17V16H9V14Z"/>
        </svg>
      ), description: 'Used in my thesis to automate deployment process' },
    ],
  },
];


const SkillItem = ({ skill, variants }) => {
  const [isHovered, setIsHovered] = useState(false);

  const tooltipVariants = {
    hidden: { opacity: 0, y: -10, scale: 0.9 },
    visible: { opacity: 1, y: 0, scale: 1 },
    exit: { opacity: 0, y: -10, scale: 0.9, transition: { duration: 0.15 } },
  };

  return (
    <motion.div
      className="relative flex items-center bg-gray-100 border border-gray-300 p-4 m-2 rounded-lg shadow-md transition-transform duration-200 hover:scale-105 hover:shadow-lg text-gray-800 cursor-pointer"
      variants={variants} 
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="text-gray-600">{skill.icon}</div>
      <span className="ml-3 text-lg font-medium">{skill.name}</span>

      <AnimatePresence>
        {isHovered && skill.description && (
          <motion.div
            className="absolute bottom-full mb-2 w-max max-w-xs p-2 text-sm text-white bg-gray-700 rounded-md shadow-lg z-50"
            variants={tooltipVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            {skill.description}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const Skills = () => {
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
      className="p-8"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.h1
        className="text-3xl font-bold mb-8"
        variants={itemVariants} 
      >
        Skills and Tech Stacks
      </motion.h1>

      {skillsData.map((category) => (
        <React.Fragment key={category.category}>
          <motion.h2
            className="text-2xl font-semibold mb-4 text-gray-800"
            variants={itemVariants} 
          >
            {category.category}
          </motion.h2>
          <motion.div
            className="flex flex-wrap mb-8"
            variants={containerVariants} 
          >
            {category.skills.map((skill) => (
              <SkillItem key={skill.name} skill={skill} variants={itemVariants} />
            ))}
          </motion.div>
        </React.Fragment>
      ))}
    </motion.div>
  );
};

export default Skills;