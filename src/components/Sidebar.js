// src/components/Sidebar.js
import React from 'react';
import { NavLink } from 'react-router-dom';

const Sidebar = ({ isMobile, changePages, isSidebarVisible }) => {
  const navItems = [
    { name: 'About Me', path: '/about' },
    { name: 'Projects', path: '/projects' },
    { name: 'Skills', path: '/skills' },
    { name: 'Blogs', path: '/blogs' },
    { name: 'Experience', path: '/experience' },
  ];

  return (
    <div
      className={`
        fixed top-0 left-0 h-full bg-gray-900 text-white w-80 p-3 z-40
        flex flex-col 
        items-center 
        justify-center 
        transition-transform duration-300
        ${isMobile && !isSidebarVisible ? '-translate-x-full' : 'translate-x-0'}
        md:translate-x-0
      `}
    >
      {/* Tombol Close (hanya di mobile) */}
      {isMobile && (
        <button
          onClick={changePages}
          className="absolute top-4 right-4 text-white p-2 z-50 focus:outline-none" 
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2.5} 
            stroke="currentColor" 
            className="w-7 h-7 stroke-white" 
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      )}

      {/* Konten Sidebar */}
      <div className="flex flex-col items-center text-center w-full">
        <h1 className="text-2xl font-bold mb-8">Rikza's Portfolio</h1>

        <nav className="w-full"> 
          <ul className="space-y-4"> 
            {navItems.map((item) => (
              <li key={item.name}>
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    `
                      block text-lg py-2 px-4 rounded-md // Tambah padding pada link itu sendiri
                      hover:text-blue-400 hover:bg-gray-800 // Hover background
                      transition-colors duration-200
                      ${isActive ? 'text-blue-400 font-bold bg-gray-800' : ''}
                    `
                  }
                  onClick={isMobile ? changePages : undefined}
                >
                  {item.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;