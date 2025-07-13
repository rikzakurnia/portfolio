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

import './index.css';

const routeConfig = [
  { path: '/', name: 'About', component: About }, // rute default
  { path: '/about', name: 'About', component: About },
  { path: '/projects', name: 'Projects', component: Projects },
  { path: '/skills', name: 'Skills', component: Skills },
  { path: '/blogs', name: 'Blogs', component: Blogs },
  { path: '/experience', name: 'Experience', component: Experience },
];

const pageVariants = {
  initial: (direction) => ({
    opacity: 0,
    y: direction === 'next' ? '100%' : '-100%',
  }),
  in: {
    opacity: 1,
    y: 0,
  },
  out: (direction) => ({
    opacity: 0,
    y: direction === 'next' ? '-100%' : '100%',
  }),
};

const pageTransition = {
  type: "tween",
  ease: "easeOut",
  duration: 0.14,
};

function App() {
  const [isMobile, setIsMobile] = useState(false);
  const [isSidebarVisible, setSidebarVisible] = useState(false);
  const [transitionDirection, setTransitionDirection] = useState('next');
  const location = useLocation();

  const prevNormalizedPath = useRef(location.pathname === '/' ? '/about' : location.pathname);


  useEffect(() => {
    const handleResize = () => {
      const isMobile = window.matchMedia('(max-width: 767px)').matches;
      setIsMobile(isMobile);
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const normalizePath = (path) => (path === '/' ? '/about' : path);

    const currentPath = normalizePath(location.pathname);
    const previousPath = prevNormalizedPath.current; 

    const currentPathIndex = routeConfig.findIndex(r => r.path === currentPath);
    const prevPathIndex = routeConfig.findIndex(r => r.path === previousPath);

    let newDirection = 'next';

    if (currentPathIndex !== -1 && prevPathIndex !== -1) {
      if (currentPathIndex > prevPathIndex) {
        newDirection = 'next'; 
      } else if (currentPathIndex < prevPathIndex) {
        newDirection = 'prev'; 
      } else {

        newDirection = transitionDirection; 
      }
    }

    setTransitionDirection(newDirection);

    prevNormalizedPath.current = currentPath;


  }, [location.pathname, location.key, transitionDirection]); 

  function toggleSidebar() {
    setSidebarVisible(!isSidebarVisible);
  }

  const CurrentPage = routeConfig.find(r => r.path === location.pathname)?.component || About;

  return (
    <div className="flex flex-column min-h-screen">
      <Sidebar
        isMobile={isMobile}
        changePages={toggleSidebar}
        isSidebarVisible={isSidebarVisible}
      />
      <div className="flex-grow overflow-hidden p-4 md:ml-80 relative">
        <AnimatePresence mode='wait' initial={true}>
          <motion.div
            key={location.key} 
            custom={transitionDirection} 
            variants={pageVariants}
            initial="initial"
            animate="in"
            exit="out"
            transition={pageTransition}
            className="absolute top-0 left-0 w-full h-full overflow-y-auto"
          >
            <CurrentPage />
          </motion.div>
        </AnimatePresence>
      </div>
      <button
        className="fixed bottom-4 right-4 bg-gray-800 text-white px-4 py-2 rounded-full shadow-lg z-50 md:hidden"
        onClick={toggleSidebar}
      >
        {isSidebarVisible ? 'Hide' : 'Show'} Sidebar
      </button>
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