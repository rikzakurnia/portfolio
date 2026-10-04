// src/App.js
import React, { useState, useEffect, useRef } from 'react';
import { BrowserRouter as Router, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';

import Sidebar from './components/Sidebar';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Blogs from './components/Blogs';
import Experience from './components/Experience';
import navItems, { normalizePath } from './config/navigation';

import './index.css';

const pageComponents = {
  '/about': About,
  '/projects': Projects,
  '/skills': Skills,
  '/blogs': Blogs,
  '/experience': Experience,
};

const pageVariants = {
  initial: (direction) => ({ opacity: 0, y: direction === 'next' ? 16 : -16 }),
  in: { opacity: 1, y: 0 },
  out: (direction) => ({ opacity: 0, y: direction === 'next' ? -16 : 16 }),
};

const pageTransition = { duration: 0.2, ease: 'easeOut' };

const indexOf = (path) => navItems.findIndex((item) => item.path === path);

function App() {
  const [isMobile, setIsMobile] = useState(false);
  const [isSidebarVisible, setSidebarVisible] = useState(false);
  const location = useLocation();

  const currentPath = normalizePath(location.pathname);
  const prevPath = useRef(currentPath);
  const direction = useRef('next');

  // Pages further down the sidebar slide up, earlier ones slide down.
  if (prevPath.current !== currentPath) {
    direction.current = indexOf(currentPath) >= indexOf(prevPath.current) ? 'next' : 'prev';
    prevPath.current = currentPath;
  }

  useEffect(() => {
    const query = window.matchMedia('(max-width: 767px)');
    const handleChange = () => setIsMobile(query.matches);
    handleChange();
    query.addEventListener('change', handleChange);
    return () => query.removeEventListener('change', handleChange);
  }, []);

  useEffect(() => {
    const page = navItems[indexOf(currentPath)];
    document.title = page ? `${page.label} | Rikza Kurnia` : "Rikza's Portfolio";
  }, [currentPath]);

  useEffect(() => {
    document.body.style.overflow = isMobile && isSidebarVisible ? 'hidden' : '';
  }, [isMobile, isSidebarVisible]);

  const CurrentPage = pageComponents[currentPath] || About;

  return (
    <div className="min-h-screen">
      <Sidebar
        isMobile={isMobile}
        isSidebarVisible={isSidebarVisible}
        closeSidebar={() => setSidebarVisible(false)}
      />

      {/* Mobile header */}
      <header className="sticky top-0 z-30 flex items-center justify-between bg-gray-900 px-5 py-4 text-white md:hidden">
        <span className="font-bold tracking-tight">Rikza Kurnia</span>
        <button
          onClick={() => setSidebarVisible(true)}
          className="-mr-2 p-2 text-gray-300 hover:text-white"
          aria-label="Open menu"
          aria-expanded={isSidebarVisible}
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="h-6 w-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </header>

      <AnimatePresence>
        {isMobile && isSidebarVisible && (
          <motion.div
            className="fixed inset-0 z-40 bg-gray-900/60"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSidebarVisible(false)}
          />
        )}
      </AnimatePresence>

      <main className="md:ml-80">
        <AnimatePresence
          mode="wait"
          initial={false}
          custom={direction.current}
          onExitComplete={() => window.scrollTo({ top: 0 })}
        >
          <motion.div
            key={currentPath}
            custom={direction.current}
            variants={pageVariants}
            initial="initial"
            animate="in"
            exit="out"
            transition={pageTransition}
            className="mx-auto max-w-4xl px-6 py-12 sm:px-10 md:py-16 lg:px-16"
          >
            <CurrentPage />
          </motion.div>
        </AnimatePresence>
      </main>
    </div>
  );
}

function AppWrapper() {
  return (
    <Router>
      <App />
    </Router>
  );
}

export default AppWrapper;
