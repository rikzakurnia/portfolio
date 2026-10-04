// src/App.js
import React, { useState, useEffect, useRef } from 'react';
import { BrowserRouter as Router, useLocation, useNavigate } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { FiMenu } from 'react-icons/fi';

import Sidebar, { PROFILE_PICTURE } from './components/Sidebar';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Blogs from './components/Blogs';
import Experience from './components/Experience';
import navItems, { normalizePath } from './config/navigation';
import useTheme from './hooks/useTheme';

import './index.css';

const pageComponents = {
  '/about': About,
  '/projects': Projects,
  '/skills': Skills,
  '/blogs': Blogs,
  '/experience': Experience,
};

// Subtle vertical drift that follows the order of the sidebar.
const pageVariants = {
  initial: (direction) => ({ opacity: 0, y: direction === 'next' ? 24 : -24 }),
  in: { opacity: 1, y: 0 },
  out: (direction) => ({ opacity: 0, y: direction === 'next' ? -24 : 24 }),
};

const pageTransition = { duration: 0.28, ease: [0.22, 1, 0.36, 1] };

const indexOf = (path) => navItems.findIndex((r) => r.path === path);

function App() {
  const [isMobile, setIsMobile] = useState(false);
  const [isSidebarVisible, setSidebarVisible] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();
  const navigate = useNavigate();

  const currentPath = normalizePath(location.pathname);
  const prevPath = useRef(currentPath);
  const direction = useRef('next');

  // Work out the transition direction during render so the entering page
  // receives the right value on its very first frame.
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
    document.title = page ? `${page.label} · Rikza Kurnia` : "Rikza's Portfolio";
  }, [currentPath]);

  // Number keys 1–5 jump between pages, Escape closes the mobile menu.
  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.metaKey || e.ctrlKey || e.altKey) return;
      if (['INPUT', 'TEXTAREA'].includes(e.target.tagName) || e.target.isContentEditable) return;
      if (e.key === 'Escape') setSidebarVisible(false);
      const item = navItems[Number(e.key) - 1];
      if (item) navigate(item.path);
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [navigate]);

  // Prevent the page behind the open mobile drawer from scrolling.
  useEffect(() => {
    document.body.style.overflow = isMobile && isSidebarVisible ? 'hidden' : '';
  }, [isMobile, isSidebarVisible]);

  const CurrentPage = pageComponents[currentPath] || About;
  const currentItem = navItems[indexOf(currentPath)];

  return (
    <div className="min-h-screen">
      <Sidebar
        isMobile={isMobile}
        isSidebarVisible={isSidebarVisible}
        closeSidebar={() => setSidebarVisible(false)}
        theme={theme}
        toggleTheme={toggleTheme}
      />

      {/* Mobile top bar */}
      <header className="sticky top-0 z-30 flex items-center justify-between border-b border-line bg-bg/80 px-4 py-3 backdrop-blur-md md:hidden">
        <div className="flex items-center gap-3">
          <img src={PROFILE_PICTURE} alt="" className="h-8 w-8 rounded-full object-cover" />
          <div className="leading-tight">
            <p className="text-sm font-semibold">Rikza Lubis</p>
            <p className="font-mono text-[11px] text-muted">
              {String(indexOf(currentPath) + 1).padStart(2, '0')} · {currentItem?.label}
            </p>
          </div>
        </div>
        <button
          onClick={() => setSidebarVisible(true)}
          className="rounded-full border border-line bg-surface p-2.5 text-ink shadow-card"
          aria-label="Open menu"
          aria-expanded={isSidebarVisible}
        >
          <FiMenu size={18} />
        </button>
      </header>

      {/* Mobile backdrop */}
      <AnimatePresence>
        {isMobile && isSidebarVisible && (
          <motion.div
            className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSidebarVisible(false)}
          />
        )}
      </AnimatePresence>

      <main className="dot-grid relative min-h-screen md:ml-72">
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
            className="mx-auto w-full max-w-5xl px-5 py-12 sm:px-8 md:px-12 md:py-20"
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
