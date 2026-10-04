// src/components/Experience.js
import React from 'react';
import { motion } from 'framer-motion';
import { FiBriefcase, FiAward } from 'react-icons/fi';
import ExperienceCard from './ExperienceCard';
import PageHeader, { fadeUp, stagger } from './PageHeader';
import PageFooter from './PageFooter';
import { workExperiences, programExperiences } from '../data/experienceData';

const Timeline = ({ title, icon: Icon, items }) => (
  <section className="mb-10">
    <motion.div variants={fadeUp} className="mb-6 flex items-center gap-3">
      <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-accent/10 text-accent">
        <Icon size={17} />
      </span>
      <h2 className="text-xl font-semibold tracking-tight">{title}</h2>
    </motion.div>
    <motion.div variants={stagger}>
      {items.map((exp, index) => (
        <motion.div key={exp.id} variants={fadeUp}>
          <ExperienceCard experience={exp} isLast={index === items.length - 1} />
        </motion.div>
      ))}
    </motion.div>
  </section>
);

const Experience = () => (
  <motion.div variants={stagger} initial="hidden" animate="visible">
    <PageHeader
      title="Where I've"
      accent="worked"
      description="Professional roles and programs that shaped how I build and ship software."
    />

    <Timeline title="Work experience" icon={FiBriefcase} items={workExperiences} />
    <Timeline title="Programs & training" icon={FiAward} items={programExperiences} />

    <PageFooter />
  </motion.div>
);

export default Experience;
