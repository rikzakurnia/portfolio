// src/components/PageHeader.js
import React from 'react';
import { motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import navItems, { normalizePath } from '../config/navigation';

export const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
};

export const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07 } },
};

const PageHeader = ({ title, accent, description }) => {
  const { pathname } = useLocation();
  const index = navItems.findIndex((i) => i.path === normalizePath(pathname));
  const number = String(index + 1).padStart(2, '0');

  return (
    <motion.header variants={fadeUp} className="mb-12 md:mb-16">
      <p className="eyebrow mb-4 flex items-center gap-3">
        <span className="text-accent">{number}</span>
        <span className="h-px w-8 bg-line" />
        <span>{navItems[index]?.label}</span>
      </p>
      <h1 className="text-4xl font-semibold tracking-tight md:text-5xl">
        {title}{' '}
        {accent && <span className="font-serif text-[1.15em] font-normal italic text-accent">{accent}</span>}
      </h1>
      {description && (
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted md:text-lg">{description}</p>
      )}
    </motion.header>
  );
};

export default PageHeader;
