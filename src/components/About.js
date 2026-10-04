// src/components/About.js
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaMedium, FaInstagram } from 'react-icons/fa';
import PageFooter from './PageFooter';
import { socialLinks } from '../config/navigation';
import { workExperiences } from '../data/experienceData';
import projectsData from '../data/projectsData';

const socialIcons = {
  GitHub: FaGithub,
  LinkedIn: FaLinkedin,
  Medium: FaMedium,
  Instagram: FaInstagram,
};

const Section = ({ title, children }) => (
  <section className="grid gap-4 border-t border-gray-200 py-10 md:grid-cols-4 md:gap-8">
    <h2 className="text-sm font-bold uppercase tracking-wider text-green-600">{title}</h2>
    <div className="md:col-span-3">{children}</div>
  </section>
);

const About = () => {
  const currentJob = workExperiences[0];
  const flagship = projectsData.find((p) => p.isFlagship);

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4 }}>
      <section className="flex flex-col-reverse items-start gap-8 pb-12 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="font-semibold text-green-600">Hello everyone, my name is</p>
          <h1 className="mt-2 text-4xl font-extrabold tracking-tight text-gray-900 md:text-5xl md:leading-tight">
            Rikza Kurnia Almujtaba Lubis
          </h1>
          <p className="mt-3 text-xl text-gray-600">Software Engineer · Computer Science Graduate</p>
        </div>
        <img
          src="https://storage.googleapis.com/bucket-for-ppl-rikza/Rikza-Profile-Pict.jpg"
          alt="Rikza Kurnia Almujtaba Lubis"
          className="h-32 w-32 shrink-0 rounded-full object-cover ring-4 ring-gray-100 md:h-44 md:w-44"
        />
      </section>

      <Section title="About Me">
        <div className="space-y-5 leading-7 text-gray-600">
          <p>
            I am a Software Engineer with experience in building applications end-to-end. My work covers the full
            development lifecycle, including backend API development, frontend implementation, and managing cloud
            components such as S3-compatible storage and email services. I also utilize automation tools like n8n to
            streamline internal workflows and have experience integrating machine learning models, including
            early-phase fine-tuning for client-specific projects.
          </p>
          <p>
            I approach engineering challenges with technical curiosity and a strong sense of ownership. Beyond writing
            code, I am focused on improving my understanding of cloud architecture, security best practices, and
            performance optimization. I enjoy the process of building scalable systems and am always looking for ways
            to grow, whether working independently or as part of a team.
          </p>
        </div>
      </Section>

      <Section title="Now">
        <dl className="space-y-4 text-gray-600">
          {currentJob && (
            <div className="sm:flex sm:gap-6">
              <dt className="w-32 shrink-0 font-medium text-gray-900">Working</dt>
              <dd>
                {currentJob.jobTitle} at{' '}
                <Link to="/experience" className="font-medium text-green-600 hover:text-green-700">
                  {currentJob.company}
                </Link>{' '}
                <span className="text-gray-400">({currentJob.duration})</span>
              </dd>
            </div>
          )}
          {flagship && (
            <div className="sm:flex sm:gap-6">
              <dt className="w-32 shrink-0 font-medium text-gray-900">Building</dt>
              <dd>
                <Link to="/projects" className="font-medium text-green-600 hover:text-green-700">
                  {flagship.title.replace(/\s*\(.*\)$/, '')}
                </Link>
                , a photo library you can search with natural language
              </dd>
            </div>
          )}
          <div className="sm:flex sm:gap-6">
            <dt className="w-32 shrink-0 font-medium text-gray-900">Learning</dt>
            <dd>Cloud architecture, security best practices and performance optimization</dd>
          </div>
        </dl>
      </Section>

      <Section title="Let's connect">
        <ul className="flex flex-wrap gap-x-8 gap-y-3">
          {socialLinks.map(({ label, href }) => {
            const Icon = socialIcons[label];
            return (
              <li key={label}>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 font-medium text-gray-700 hover:text-green-600"
                >
                  <Icon size={18} className="text-gray-400" />
                  {label}
                </a>
              </li>
            );
          })}
        </ul>
      </Section>

      <PageFooter />
    </motion.div>
  );
};

export default About;
