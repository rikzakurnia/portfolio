// src/components/Sidebar.js
import React, { useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedinIn, FaInstagram, FaMediumM } from 'react-icons/fa';
import { FiMoon, FiSun, FiX } from 'react-icons/fi';
import navItems, { normalizePath, socialLinks } from '../config/navigation';

export const PROFILE_PICTURE =
  'https://storage.googleapis.com/bucket-for-ppl-rikza/Rikza-Profile-Pict.jpg';

const socials = [
  { label: 'GitHub', href: socialLinks.github, icon: FaGithub },
  { label: 'LinkedIn', href: socialLinks.linkedin, icon: FaLinkedinIn },
  { label: 'Medium', href: socialLinks.medium, icon: FaMediumM },
  { label: 'Instagram', href: socialLinks.instagram, icon: FaInstagram },
];

// Live local time (WIB) — a small human touch at the bottom of the sidebar.
const useJakartaTime = () => {
  const format = () =>
    new Intl.DateTimeFormat('en-GB', {
      hour: '2-digit',
      minute: '2-digit',
      timeZone: 'Asia/Jakarta',
    }).format(new Date());
  const [time, setTime] = useState(format);

  useEffect(() => {
    const id = setInterval(() => setTime(format()), 15000);
    return () => clearInterval(id);
  }, []);

  return time;
};

const Sidebar = ({ isMobile, isSidebarVisible, closeSidebar, theme, toggleTheme }) => {
  const { pathname } = useLocation();
  const activePath = normalizePath(pathname);
  const time = useJakartaTime();
  const hidden = isMobile && !isSidebarVisible;

  return (
    <aside
      aria-label="Main navigation"
      className={`
        fixed inset-y-0 left-0 z-50 flex w-72 flex-col overflow-y-auto
        border-r border-side-line bg-side text-side-ink
        transition-[transform,visibility] duration-300 ease-out
        ${hidden ? 'invisible -translate-x-full' : 'visible translate-x-0'}
      `}
    >
      {/* Soft accent glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute -left-24 -top-24 h-64 w-64 rounded-full bg-accent/20 blur-3xl"
      />

      {isMobile && (
        <button
          onClick={closeSidebar}
          className="absolute right-4 top-4 rounded-full p-2 text-side-muted transition hover:bg-white/5 hover:text-side-ink"
          aria-label="Close menu"
        >
          <FiX size={20} />
        </button>
      )}

      {/* Identity */}
      <div className="relative px-7 pt-10">
        <div className="flex items-center gap-3">
          <img
            src={PROFILE_PICTURE}
            alt=""
            className="h-11 w-11 rounded-full object-cover ring-2 ring-side-line"
          />
          <div className="leading-tight">
            <p className="font-semibold">Rikza Lubis</p>
            <p className="text-sm text-side-muted">Software Engineer</p>
          </div>
        </div>

        <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-side-line bg-white/[0.03] px-3 py-1.5 text-xs text-side-muted">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping2 rounded-full bg-accent" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
          </span>
          Building at Aether AI
        </div>
      </div>

      {/* Navigation */}
      <nav className="relative mt-10 flex-1 px-4">
        <p className="eyebrow mb-3 px-3 !text-side-muted/70">Menu</p>
        <ul className="space-y-1">
          {navItems.map((item, index) => {
            const isActive = activePath === item.path;
            return (
              <li key={item.path}>
                <NavLink
                  to={item.path}
                  onClick={isMobile ? closeSidebar : undefined}
                  className={`group relative flex items-center gap-4 rounded-xl px-3 py-2.5 transition-colors ${
                    isActive ? 'text-side-ink' : 'text-side-muted hover:text-side-ink'
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="nav-active"
                      className="absolute inset-0 rounded-xl border border-side-line bg-white/[0.06]"
                      transition={{ type: 'spring', stiffness: 400, damping: 34 }}
                    />
                  )}
                  <span
                    className={`relative font-mono text-[11px] transition-colors ${
                      isActive ? 'text-accent' : 'text-side-muted/60 group-hover:text-side-muted'
                    }`}
                  >
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <span className="relative flex-1 font-medium">{item.label}</span>
                  {!isMobile && (
                    <kbd className="relative hidden rounded border border-side-line px-1.5 font-mono text-[10px] text-side-muted/70 opacity-0 transition group-hover:opacity-100 md:inline">
                      {index + 1}
                    </kbd>
                  )}
                </NavLink>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Footer */}
      <div className="relative space-y-5 px-7 pb-8 pt-6">
        <div className="flex items-center gap-1">
          {socials.map(({ label, href, icon: Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="rounded-lg p-2 text-side-muted transition hover:bg-white/5 hover:text-side-ink"
            >
              <Icon size={16} />
            </a>
          ))}
        </div>

        <div className="flex items-center justify-between border-t border-side-line pt-5 text-xs text-side-muted">
          <span className="font-mono">{time} WIB</span>
          <button
            onClick={toggleTheme}
            className="flex items-center gap-2 rounded-full border border-side-line px-3 py-1.5 transition hover:border-side-muted/50 hover:text-side-ink"
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
          >
            {theme === 'dark' ? <FiSun size={13} /> : <FiMoon size={13} />}
            {theme === 'dark' ? 'Light' : 'Dark'}
          </button>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
