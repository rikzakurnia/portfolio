// src/components/Sidebar.js
import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaGithub, FaLinkedin, FaMedium, FaInstagram } from 'react-icons/fa';
import navItems, { socialLinks } from '../config/navigation';

const socialIcons = {
  GitHub: FaGithub,
  LinkedIn: FaLinkedin,
  Medium: FaMedium,
  Instagram: FaInstagram,
};

const Sidebar = ({ isMobile, isSidebarVisible, closeSidebar }) => {
  const hidden = isMobile && !isSidebarVisible;

  return (
    <aside
      className={`
        fixed inset-y-0 left-0 z-50 flex w-80 flex-col justify-between overflow-y-auto
        bg-gray-900 px-10 py-16 text-white
        transition-[transform,visibility] duration-300
        ${hidden ? 'invisible -translate-x-full' : 'visible translate-x-0'}
      `}
    >
      {isMobile && (
        <button
          onClick={closeSidebar}
          className="absolute right-4 top-4 p-2 text-gray-400 hover:text-white"
          aria-label="Close menu"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="h-6 w-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      )}

      <div>
        <NavLink to="/about" onClick={isMobile ? closeSidebar : undefined}>
          <h1 className="text-3xl font-bold tracking-tight">Rikza Kurnia</h1>
        </NavLink>
        <p className="mt-2 text-lg font-medium text-gray-200">Software Engineer</p>
        <p className="mt-4 max-w-[15rem] leading-normal text-gray-400">
          I build web applications end-to-end, from backend APIs to the cloud they run on.
        </p>

        <nav className="mt-14" aria-label="Pages">
          <ul>
            {navItems.map((item) => (
              <li key={item.path}>
                <NavLink
                  to={item.path}
                  onClick={isMobile ? closeSidebar : undefined}
                  className="group flex items-center py-3"
                >
                  {({ isActive }) => (
                    <>
                      <span
                        className={`mr-4 h-px transition-all duration-200 ${
                          isActive
                            ? 'w-16 bg-blue-400'
                            : 'w-8 bg-gray-600 group-hover:w-16 group-hover:bg-gray-200'
                        }`}
                      />
                      <span
                        className={`text-xs font-bold uppercase tracking-widest transition-colors ${
                          isActive ? 'text-blue-400' : 'text-gray-500 group-hover:text-gray-200'
                        }`}
                      >
                        {item.label}
                      </span>
                    </>
                  )}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <ul className="mt-12 flex items-center gap-5" aria-label="Social media">
        {socialLinks.map(({ label, href }) => {
          const Icon = socialIcons[label];
          return (
            <li key={label}>
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                title={label}
                className="block text-gray-400 transition-colors hover:text-white"
              >
                <Icon size={22} />
              </a>
            </li>
          );
        })}
      </ul>
    </aside>
  );
};

export default Sidebar;
