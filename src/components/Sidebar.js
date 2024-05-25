// src/components/Sidebar.js
import React from 'react';

const Sidebar = ({ setSelectedSection, isSidebarVisible}) => {
  return (
    <div
      className={`fixed inset-y-0 left-0 transform ${
        isSidebarVisible ? 'translate-x-0' : '-translate-x-full'
      } transition-transform duration-300 ease-in-out md:relative md:translate-x-0 md:w-64  bg-gray-800 text-white flex flex-col p-4 px-5 h-1000 z-50`}
    >
      <div className="self-center mb-5 mt-10">
        <img
          className="rounded-full w-32 h-32 md:w-24 md:h-24"
          src="https://storage.googleapis.com/bucket-for-ppl-rikza/Profil-Rikza.jpeg"
          alt="profil_rikza"
        />
      </div>
      <h1 className="text-2xl font-bold mb-6 text-center">Rikza K</h1>
      <ul className="space-y-5 mx-5 h-screen mb-200">
        <li
          className="w-full cursor-pointer hover:bg-gray-700 p-2 rounded text-center"
          onClick={() => setSelectedSection('About')}
        >
          About Me
        </li>
        <li
          className="cursor-pointer hover:bg-gray-700 p-2 rounded text-center"
          onClick={() => setSelectedSection('Projects')}
        >
          Projects
        </li>
        <li
          className="cursor-pointer hover:bg-gray-700 p-2 rounded text-center"
          onClick={() => setSelectedSection('Skills')}
        >
          Skills
        </li>
        <li
          className="cursor-pointer hover:bg-gray-700 p-2 rounded text-center"
          onClick={() => setSelectedSection('Blogs')}
        >
          Blogs
        </li>
        <li
          className="cursor-pointer hover:bg-gray-700 p-2 rounded text-center"
          onClick={() => setSelectedSection('Contact')}
        >
          Contact
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
