// src/components/Skills.js
import React from 'react';
import { motion } from 'framer-motion';
import {
  FaNodeJs, FaReact, FaPython, FaJava
} from 'react-icons/fa';
import {
  SiNextdotjs, SiNestjs, SiDjango, SiSpringboot, SiPostgresql,
  SiFirebase, SiMysql, SiFlask, SiJavascript, SiDocker,
  SiGo, SiAmazonaws, SiGooglecloud, SiVuedotjs, SiMongodb, SiRabbitmq
} from 'react-icons/si';
import { ReactComponent as QdrantIcon } from '../icon/qdrant.svg';
import PageHeader from './PageHeader';
import PageFooter from './PageFooter';

const skillsData = [
  {
    category: 'Programming Languages',
    skills: [
      { name: 'Python', icon: <FaPython size={20} />, description: 'Used for developing web application and to learn machine learning' },
      { name: 'Java', icon: <FaJava size={20} />, description: 'Used for developing web application.' },
      { name: 'JavaScript', icon: <SiJavascript size={20} />, description: 'Used for frontend and backend (Node.js) development.' },
      { name: 'Go (Golang)', icon: <SiGo size={20} />, description: 'Used for backend project' },
    ],
  },
  {
    category: 'Frameworks & Libraries',
    skills: [
      { name: 'Node.js', icon: <FaNodeJs size={20} />, description: 'Used for several projects including "Rempahpedia"' },
      { name: 'Next.js', icon: <SiNextdotjs size={20} />, description: 'Used for "Sekelas" Application' },
      { name: 'Nest.js', icon: <SiNestjs size={20} />, description: 'Used for "LaundryEase" Application' },
      { name: 'Django', icon: <SiDjango size={20} />, description: 'Used for "RSUMMI" Application.' },
      { name: 'Spring Boot', icon: <SiSpringboot size={20} />, description: 'Used for "Sekelas" Application.' },
      { name: 'Flask', icon: <SiFlask size={20} />, description: 'Used for a project in class.' },
      { name: 'React', icon: <FaReact size={20} />, description: 'Used for this website.' },
      { name: 'Vue.js', icon: <SiVuedotjs size={20} />, description: 'Used as the frontend for "Smart Photo Storage" project.' },
    ],
  },
  {
    category: 'Databases',
    skills: [
      { name: 'PostgreSQL', icon: <SiPostgresql size={20} />, description: 'Used in most of my project.' },
      { name: 'Firestore', icon: <SiFirebase size={20} />, description: 'Used in "Rempahpedia" project.' },
      { name: 'MySQL', icon: <SiMysql size={20} />, description: 'Used in some project.' },
      { name: 'MongoDB', icon: <SiMongodb size={20} />, description: 'Used to store metadata in "Smart Photo Storage" project.' },
      { name: 'Qdrant', icon: <QdrantIcon width={20} height={20} opacity={0.6} />, description: 'Used as the vector database in "Smart Photo Storage".' },
    ],
  },
  {
    category: 'Cloud & DevOps',
    skills: [
      { name: 'AWS (Amazon Web Services)', icon: <SiAmazonaws size={20} />, description: 'Experience with EC2, S3, and Lambda for deployments.' },
      { name: 'Google Cloud Platform (GCP)', icon: <SiGooglecloud size={20} />, description: 'Associate Cloud Engineer Certification' },
      { name: 'Docker', icon: <SiDocker size={20} />, description: 'Used in almost all of my project for easier deployment' },
      { name: 'RabbitMQ', icon: <SiRabbitmq size={20} />, description: 'Used for asynchronous task queue in photo embedding pipeline in "Smart Photo Storage".' },
    ],
  },
  {
    category: 'Tools & Scripting',
    skills: [
      { name: 'Bash Scripting', icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
            <path d="M20 4H4C2.89543 4 2 4.89543 2 6V18C2 19.1046 2.89543 20 4 20H20C21.1046 20 22 19.1046 22 18V6C22 4.89543 21.1046 4 20 4ZM4 6H20V18H4V6ZM6 10H8V12H6V10ZM9 10H17V12H9V10ZM6 14H8V16H6V14ZM9 14H17V16H9V14Z"/>
        </svg>
      ), description: 'Used in my thesis to automate deployment process' },
    ],
  },
];


const Skills = () => (
  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4 }}>
    <PageHeader title="Skills and Tech Stacks">
      The tools I work with, and where I have used each of them.
    </PageHeader>

    <div className="divide-y divide-gray-200">
      {skillsData.map((category) => (
        <section key={category.category} className="grid gap-6 py-10 md:grid-cols-4 md:gap-8">
          <h2 className="text-sm font-bold uppercase tracking-wider text-green-600">{category.category}</h2>
          <ul className="grid gap-x-8 gap-y-6 sm:grid-cols-2 md:col-span-3">
            {category.skills.map((skill) => (
              <li key={skill.name} className="flex gap-4">
                <span className="mt-0.5 shrink-0 text-gray-500">{skill.icon}</span>
                <div>
                  <h3 className="font-semibold text-gray-900">{skill.name}</h3>
                  <p className="mt-1 text-sm leading-6 text-gray-500">{skill.description}</p>
                </div>
              </li>
            ))}
          </ul>
        </section>
      ))}
    </div>

    <PageFooter />
  </motion.div>
);

export default Skills;
