// src/components/PageFooter.js
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import navItems, { normalizePath } from '../config/navigation';

const PageFooter = () => {
  const { pathname } = useLocation();
  const index = navItems.findIndex((item) => item.path === normalizePath(pathname));
  const next = navItems[index + 1];

  return (
    <footer className="mt-16 flex flex-col-reverse gap-4 border-t border-gray-200 pt-8 text-sm text-gray-500 sm:flex-row sm:items-center sm:justify-between">
      <p>© {new Date().getFullYear()} Rikza Kurnia Almujtaba Lubis</p>
      {next && (
        <Link to={next.path} className="font-medium text-green-600 hover:text-green-700">
          Next: {next.label} &rarr;
        </Link>
      )}
    </footer>
  );
};

export default PageFooter;
