// src/config/navigation.js
// Single source of truth for page order. Used by the sidebar, the page
// transitions (direction) and the prev/next links at the bottom of each page.
const navItems = [
  { path: '/about', name: 'About', label: 'About Me' },
  { path: '/projects', name: 'Projects', label: 'Projects' },
  { path: '/skills', name: 'Skills', label: 'Skills' },
  { path: '/blogs', name: 'Blogs', label: 'Writing' },
  { path: '/experience', name: 'Experience', label: 'Experience' },
];

export const normalizePath = (path) => (path === '/' ? '/about' : path);

export const socialLinks = {
  linkedin: 'https://linkedin.com/in/rikza-kurnia-almujtaba-lubis-058a12226',
  github: 'https://github.com/rikzakurnia',
  instagram: 'https://www.instagram.com/rikzakalmujtaba/',
  medium: 'https://medium.com/@rikza.kurnia',
};

export default navItems;
