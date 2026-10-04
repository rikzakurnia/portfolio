// src/components/PageHeader.js
import React from 'react';

const PageHeader = ({ title, children }) => (
  <header className="space-y-3 border-b border-gray-200 pb-8">
    <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl md:text-5xl">{title}</h1>
    {children && <p className="max-w-2xl text-lg leading-7 text-gray-500">{children}</p>}
  </header>
);

export default PageHeader;
