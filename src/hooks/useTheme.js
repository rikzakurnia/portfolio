// src/hooks/useTheme.js
import { useCallback, useEffect, useState } from 'react';

const getInitialTheme = () =>
  document.documentElement.classList.contains('dark') ? 'dark' : 'light';

export default function useTheme() {
  const [theme, setTheme] = useState(getInitialTheme);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
    try {
      localStorage.setItem('theme', theme);
    } catch (e) {
      // Storage can be unavailable (private mode); the theme still applies.
    }
  }, [theme]);

  const toggleTheme = useCallback(
    () => setTheme((t) => (t === 'dark' ? 'light' : 'dark')),
    []
  );

  return { theme, toggleTheme };
}
