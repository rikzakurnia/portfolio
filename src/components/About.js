// src/components/About.js
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedinIn, FaInstagram, FaMediumM, FaGraduationCap } from 'react-icons/fa';
import { FiArrowRight, FiArrowUpRight } from 'react-icons/fi';
import { PROFILE_PICTURE } from './Sidebar';
import PageFooter from './PageFooter';
import { fadeUp, stagger } from './PageHeader';
import { socialLinks } from '../config/navigation';
import projectsData from '../data/projectsData';

const highlights = [
  { label: 'Currently', value: 'Software Engineer', sub: 'Aether AI · Remote' },
  { label: 'Certified', value: 'GCP Associate', sub: 'Cloud Engineer' },
  { label: 'Bangkit Academy', value: 'Top 10%', sub: 'Cloud Computing cohort' },
];

const focusAreas = ['Backend APIs', 'Frontend', 'Cloud & DevOps', 'Automation (n8n)', 'ML integration'];

const socials = [
  { label: 'LinkedIn', href: socialLinks.linkedin, icon: FaLinkedinIn },
  { label: 'GitHub', href: socialLinks.github, icon: FaGithub },
  { label: 'Medium', href: socialLinks.medium, icon: FaMediumM },
  { label: 'Instagram', href: socialLinks.instagram, icon: FaInstagram },
];

const About = () => {
  const flagship = projectsData.find((p) => p.isFlagship);

  return (
    <motion.div variants={stagger} initial="hidden" animate="visible">
      {/* HERO */}
      <section className="grid items-center gap-10 md:grid-cols-[1fr_auto] md:gap-14">
        <div>
          <motion.p variants={fadeUp} className="eyebrow mb-5 flex items-center gap-3">
            <span className="text-accent">01</span>
            <span className="h-px w-8 bg-line" />
            Hello, my name is
          </motion.p>

          <motion.h1
            variants={fadeUp}
            className="text-[2.6rem] font-semibold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl"
          >
            Rikza Kurnia
            <br />
            <span className="font-serif text-[1.12em] font-normal italic text-accent">Almujtaba Lubis</span>
          </motion.h1>

          <motion.p variants={fadeUp} className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
            A software engineer who builds applications <span className="text-ink">end-to-end</span> — from
            backend APIs and interfaces to the cloud pieces that keep them running.
          </motion.p>

          <motion.div variants={fadeUp} className="mt-5 flex items-center gap-2 text-sm text-muted">
            <FaGraduationCap size={15} />
            Computer Science Graduate
          </motion.div>

          <motion.div variants={fadeUp} className="mt-8 flex flex-wrap items-center gap-3">
            <Link to="/projects" className="btn-primary group">
              See my work
              <FiArrowRight className="transition group-hover:translate-x-0.5" />
            </Link>
            <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="btn-ghost">
              Let's connect
            </a>
          </motion.div>
        </div>

        {/* Portrait */}
        <motion.div variants={fadeUp} className="relative mx-auto w-56 sm:w-64 md:w-72">
          <div aria-hidden className="absolute inset-0 translate-x-3 translate-y-3 rounded-[2rem] border border-accent/40" />
          <div aria-hidden className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-accent/20 blur-2xl" />
          <img
            src={PROFILE_PICTURE}
            alt="Portrait of Rikza Kurnia Almujtaba Lubis"
            className="relative aspect-[4/5] w-full rounded-[2rem] object-cover shadow-lift"
          />
          <div className="absolute -bottom-4 -left-4 flex items-center gap-2 rounded-full border border-line bg-surface px-3 py-1.5 text-xs font-medium shadow-card">
            <span className="h-2 w-2 rounded-full bg-accent" />
            Based in Indonesia
          </div>
        </motion.div>
      </section>

      {/* QUICK FACTS */}
      <motion.section variants={fadeUp} className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-3">
        {highlights.map((h) => (
          <div key={h.label} className="bg-surface p-5">
            <p className="eyebrow">{h.label}</p>
            <p className="mt-2 text-xl font-semibold tracking-tight">{h.value}</p>
            <p className="text-sm text-muted">{h.sub}</p>
          </div>
        ))}
      </motion.section>

      {/* ABOUT + SIDE COLUMN */}
      <section className="mt-16 grid gap-10 lg:grid-cols-[1.4fr_1fr]">
        <motion.div variants={fadeUp}>
          <h2 className="eyebrow mb-4">About me</h2>
          <div className="space-y-4 text-[1.05rem] leading-relaxed text-muted">
            <p>
              I am a Software Engineer with experience in building applications end-to-end. My work covers the full
              development lifecycle, including <span className="text-ink">backend API development</span>,{' '}
              <span className="text-ink">frontend implementation</span>, and managing cloud components such as
              S3-compatible storage and email services. I also utilize automation tools like n8n to streamline
              internal workflows and have experience integrating machine learning models, including early-phase
              fine-tuning for client-specific projects.
            </p>
            <p>
              I approach engineering challenges with technical curiosity and a strong sense of ownership. Beyond
              writing code, I am focused on improving my understanding of{' '}
              <span className="text-ink">cloud architecture, security best practices, and performance
              optimization</span>. I enjoy the process of building scalable systems and am always looking for ways
              to grow, whether working independently or as part of a team.
            </p>
          </div>

          <div className="mt-6 flex flex-wrap gap-2">
            {focusAreas.map((f) => (
              <span key={f} className="tag">{f}</span>
            ))}
          </div>
        </motion.div>

        <motion.div variants={fadeUp} className="space-y-4">
          {flagship && (
            <Link
              to="/projects"
              className="group card block overflow-hidden transition hover:-translate-y-0.5 hover:shadow-lift"
            >
              {flagship.image && (
                <div className="aspect-[16/9] overflow-hidden border-b border-line">
                  <img
                    src={flagship.image}
                    alt=""
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>
              )}
              <div className="p-5">
                <p className="eyebrow flex items-center gap-2">
                  <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-accent" />
                  Currently building
                </p>
                <p className="mt-2 flex items-center justify-between gap-2 font-semibold">
                  {flagship.title.replace(/\s*\(.*\)$/, '')}
                  <FiArrowUpRight className="shrink-0 text-muted transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent" />
                </p>
                <p className="mt-1 line-clamp-2 text-sm text-muted">{flagship.description}</p>
              </div>
            </Link>
          )}

          <div className="card p-5">
            <p className="eyebrow mb-3">Let's connect</p>
            <div className="grid grid-cols-2 gap-2">
              {socials.map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-2 rounded-xl border border-line px-3 py-2.5 text-sm font-medium transition hover:border-accent/50 hover:bg-accent/5"
                >
                  <Icon className="text-muted transition group-hover:text-accent" />
                  {label}
                </a>
              ))}
            </div>
          </div>
        </motion.div>
      </section>

      <PageFooter />
    </motion.div>
  );
};

export default About;
