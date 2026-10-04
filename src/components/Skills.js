// src/components/Skills.js
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaNodeJs, FaReact, FaPython, FaJava } from 'react-icons/fa';
import {
  SiNextdotjs, SiNestjs, SiDjango, SiSpringboot, SiPostgresql,
  SiFirebase, SiMysql, SiFlask, SiJavascript, SiDocker,
  SiGo, SiAmazonaws, SiGooglecloud, SiVuedotjs, SiMongodb, SiRabbitmq, SiGnubash,
} from 'react-icons/si';
import { FiCode, FiLayers, FiDatabase, FiCloud, FiTerminal } from 'react-icons/fi';
import { ReactComponent as QdrantIcon } from '../icon/qdrant.svg';
import PageHeader, { fadeUp, stagger } from './PageHeader';
import PageFooter from './PageFooter';

const skillsData = [
  {
    category: 'Programming Languages',
    icon: FiCode,
    skills: [
      { name: 'Python', icon: FaPython, description: 'Used for developing web application and to learn machine learning' },
      { name: 'Java', icon: FaJava, description: 'Used for developing web application.' },
      { name: 'JavaScript', icon: SiJavascript, description: 'Used for frontend and backend (Node.js) development.' },
      { name: 'Go (Golang)', icon: SiGo, description: 'Used for backend project' },
    ],
  },
  {
    category: 'Frameworks & Libraries',
    icon: FiLayers,
    wide: true,
    skills: [
      { name: 'Node.js', icon: FaNodeJs, description: 'Used for several projects including "Rempahpedia"' },
      { name: 'Next.js', icon: SiNextdotjs, description: 'Used for "Sekelas" Application' },
      { name: 'Nest.js', icon: SiNestjs, description: 'Used for "LaundryEase" Application' },
      { name: 'Django', icon: SiDjango, description: 'Used for "RSUMMI" Application.' },
      { name: 'Spring Boot', icon: SiSpringboot, description: 'Used for "Sekelas" Application.' },
      { name: 'Flask', icon: SiFlask, description: 'Used for a project in class.' },
      { name: 'React', icon: FaReact, description: 'Used for this website.' },
      { name: 'Vue.js', icon: SiVuedotjs, description: 'Used as the frontend for "Smart Photo Storage" project.' },
    ],
  },
  {
    category: 'Databases',
    icon: FiDatabase,
    skills: [
      { name: 'PostgreSQL', icon: SiPostgresql, description: 'Used in most of my project.' },
      { name: 'Firestore', icon: SiFirebase, description: 'Used in "Rempahpedia" project.' },
      { name: 'MySQL', icon: SiMysql, description: 'Used in some project.' },
      { name: 'MongoDB', icon: SiMongodb, description: 'Used to store metadata in "Smart Photo Storage" project.' },
      {
        name: 'Qdrant',
        icon: (props) => <QdrantIcon width={props.size} height={props.size} className={props.className} />,
        description: 'Used as the vector database in "Smart Photo Storage".',
      },
    ],
  },
  {
    category: 'Cloud & DevOps',
    icon: FiCloud,
    skills: [
      { name: 'AWS', icon: SiAmazonaws, description: 'Experience with EC2, S3, and Lambda for deployments.' },
      { name: 'Google Cloud', icon: SiGooglecloud, description: 'Associate Cloud Engineer Certification' },
      { name: 'Docker', icon: SiDocker, description: 'Used in almost all of my project for easier deployment' },
      { name: 'RabbitMQ', icon: SiRabbitmq, description: 'Used for asynchronous task queue in photo embedding pipeline in "Smart Photo Storage".' },
    ],
  },
  {
    category: 'Tools & Scripting',
    icon: FiTerminal,
    skills: [
      { name: 'Bash Scripting', icon: SiGnubash, description: 'Used in my thesis to automate deployment process' },
    ],
  },
];

const SkillCategory = ({ category }) => {
  const [active, setActive] = useState(null);
  const CategoryIcon = category.icon;

  return (
    <motion.section
      variants={fadeUp}
      className={`card flex flex-col p-6 ${category.wide ? 'md:col-span-2' : ''}`}
      onMouseLeave={() => setActive(null)}
    >
      <div className="mb-5 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-accent/10 text-accent">
            <CategoryIcon size={17} />
          </span>
          <h2 className="font-semibold tracking-tight">{category.category}</h2>
        </div>
        <span className="font-mono text-xs text-muted">{String(category.skills.length).padStart(2, '0')}</span>
      </div>

      <div className={`grid gap-2 ${category.wide ? 'grid-cols-2 sm:grid-cols-4' : 'grid-cols-2'}`}>
        {category.skills.map((skill) => {
          const Icon = skill.icon;
          const isActive = active?.name === skill.name;
          return (
            <button
              key={skill.name}
              type="button"
              onMouseEnter={() => setActive(skill)}
              onFocus={() => setActive(skill)}
              onClick={() => setActive(isActive ? null : skill)}
              aria-pressed={isActive}
              className={`group flex items-center gap-3 rounded-xl border px-3 py-2.5 text-left text-sm font-medium transition ${
                isActive
                  ? 'border-accent/50 bg-accent/10 text-ink'
                  : 'border-line bg-bg/50 text-ink/80 hover:border-ink/20'
              }`}
            >
              <Icon
                size={18}
                className={`shrink-0 transition ${isActive ? 'text-accent' : 'text-muted group-hover:text-ink'}`}
              />
              <span className="truncate">{skill.name}</span>
            </button>
          );
        })}
      </div>

      {/* Context line: where the skill was used */}
      <div className="mt-auto pt-5">
        <div className="relative min-h-[2.75rem] border-t border-dashed border-line pt-3 text-sm">
          <AnimatePresence mode="wait" initial={false}>
            <motion.p
              key={active?.name || 'placeholder'}
              initial={{ opacity: 0, y: 4 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -4 }}
              transition={{ duration: 0.15 }}
              className={active ? 'text-ink' : 'text-muted/70'}
            >
              {active ? (
                <>
                  <span className="font-mono text-xs text-accent">{active.name} → </span>
                  {active.description}
                </>
              ) : (
                <span className="font-mono text-xs">Hover or tap a skill to see where I've used it</span>
              )}
            </motion.p>
          </AnimatePresence>
        </div>
      </div>
    </motion.section>
  );
};

const Skills = () => (
  <motion.div variants={stagger} initial="hidden" animate="visible">
    <PageHeader
      title="Skills &"
      accent="tech stack"
      description="The languages, frameworks and infrastructure I reach for — each one tied to a real project I've shipped or contributed to."
    />

    <motion.div variants={stagger} className="grid gap-5 md:grid-flow-row-dense md:grid-cols-2">
      {skillsData.map((category) => (
        <SkillCategory key={category.category} category={category} />
      ))}
    </motion.div>

    <PageFooter />
  </motion.div>
);

export default Skills;
