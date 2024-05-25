// src/App.js
import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Blogs from './components/Blogs';
import Contact from './components/Contact';
import './index.css';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

function App() {
  const [selectedSection, setSelectedSection] = useState('About');
  const [isSidebarVisible, setSidebarVisible] = useState(false);

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
      default:
        return <About />;
    }
  };

  return (
    <div className="flex">
      <Sidebar
        setSelectedSection={setSelectedSection}
        isSidebarVisible={isSidebarVisible}
      />
      <div className="flex-1 p-4 lg:ml-20">
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
        className="fixed bottom-4 right-4 bg-blue-500 text-white px-4 py-2 rounded-full shadow-lg z-50 md:hidden"
        onClick={() => setSidebarVisible(!isSidebarVisible)}
      >
        {isSidebarVisible ? 'Hide' : 'Show'}
      </button>
    </div>
  );
}

export default App;
