// src/App.js
import React, { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Blogs from './components/Blogs';
import Contact from './components/Contact';
import Experience from './components/Experience';
import './index.css';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

function App() {
  const [selectedSection, setSelectedSection] = useState('About');
  const [isMobile, setIsMobile] = useState(false);
  const [isSidebarVisible, setSidebarVisible] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const isMobile = window.matchMedia('(max-width: 767px)').matches;
      setIsMobile(isMobile);
    };

    window.addEventListener('resize', handleResize);

    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  function changePages() {
    setSidebarVisible(!isSidebarVisible)
  }

  const renderSection = () => {
    switch (selectedSection) {
      case 'About':
        return <About />;
      case 'Projects':
        return <Projects />;
      case 'Skills':
        return <Skills />;
      case 'Blogs':
        return <Blogs />;
      case 'Contact':
        return <Contact />;
      case 'Experience':
        return <Experience />;
      default:
        return <About />;
    }
  };

  return (
    <div className="flex flex-column">
      <Sidebar
        setSelectedSection={setSelectedSection}
        isMobile={isMobile}
        changePages={changePages}
        isSidebarVisible={isSidebarVisible}
      />
      <div className="flex-1 overflow-y-auto p-4 md:ml-80">
        <TransitionGroup>
          <CSSTransition
            key={selectedSection}
            classNames="fade"
            timeout={300}
          >
            {renderSection()}
          </CSSTransition>
        </TransitionGroup>
      </div>
      {/* Floating Button */}
      <button
        className="fixed bottom-4 right-4 bg-gray-800 text-white px-4 py-2 rounded-full shadow-lg z-50 md:hidden"
        onClick={() => setSidebarVisible(!isSidebarVisible)}
      >
        {isSidebarVisible? 'Hide' : 'Show'} Sidebar
      </button>
    </div>
  );
}

export default App;
