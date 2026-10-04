// src/components/Experience.js
import React from 'react';
import { motion } from 'framer-motion';
import ExperienceCard from './ExperienceCard';
import PageHeader from './PageHeader';
import PageFooter from './PageFooter';
import SectionHeading from './SectionHeading';
import { workExperiences, programExperiences } from '../data/experienceData';

const ExperienceList = ({ items }) => (
  <ul className="divide-y divide-gray-200">
    {items.map((exp) => (
      <li key={exp.id} className="py-10">
        <ExperienceCard experience={exp} />
      </li>
    ))}
  </ul>
);

const Experience = () => (
  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4 }}>
    <PageHeader title="Experience">Where I have worked and the programs I have taken part in.</PageHeader>

    <SectionHeading>Work Experience</SectionHeading>
    <ExperienceList items={workExperiences} />

    <SectionHeading>Programs &amp; Training</SectionHeading>
    <ExperienceList items={programExperiences} />

    <PageFooter />
  </motion.div>
);

export default Experience;
