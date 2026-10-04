// src/components/PageFooter.js
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi';
import navItems, { normalizePath } from '../config/navigation';

const PageFooter = () => {
  const { pathname } = useLocation();
  const index = navItems.findIndex((i) => i.path === normalizePath(pathname));
  const prev = navItems[index - 1];
  const next = navItems[index + 1];

  return (
    <footer className="mt-20 border-t border-line pt-8">
      <div className="grid gap-4 sm:grid-cols-2">
        {prev ? (
          <Link
            to={prev.path}
            className="group card flex items-center gap-4 p-5 transition hover:-translate-y-0.5 hover:shadow-lift"
          >
            <FiArrowLeft className="text-muted transition group-hover:-translate-x-1 group-hover:text-accent" />
            <div>
              <p className="eyebrow">Previous</p>
              <p className="font-medium">{prev.label}</p>
            </div>
          </Link>
        ) : (
          <span className="hidden sm:block" />
        )}
        {next && (
          <Link
            to={next.path}
            className="group card flex items-center justify-end gap-4 p-5 text-right transition hover:-translate-y-0.5 hover:shadow-lift"
          >
            <div>
              <p className="eyebrow">Next</p>
              <p className="font-medium">{next.label}</p>
            </div>
            <FiArrowRight className="text-muted transition group-hover:translate-x-1 group-hover:text-accent" />
          </Link>
        )}
      </div>
      <p className="mt-10 text-center font-mono text-[11px] text-muted">
        © {new Date().getFullYear()} Rikza Kurnia Almujtaba Lubis · Built with React & Tailwind
      </p>
    </footer>
  );
};

export default PageFooter;
