// src/config/navigation.js
// Page order used by the sidebar, the page transitions and the "next page" link.
const navItems = [
  { path: '/about', label: 'About Me' },
  { path: '/projects', label: 'Projects' },
  { path: '/skills', label: 'Skills' },
  { path: '/blogs', label: 'Blogs' },
  { path: '/experience', label: 'Experience' },
];

export const normalizePath = (path) => (path === '/' ? '/about' : path);

export const socialLinks = [
  { label: 'GitHub', href: 'https://github.com/rikzakurnia' },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/rikza-kurnia-almujtaba-lubis-058a12226' },
  { label: 'Medium', href: 'https://medium.com/@rikza.kurnia' },
  { label: 'Instagram', href: 'https://www.instagram.com/rikzakalmujtaba/' },
];

export default navItems;
