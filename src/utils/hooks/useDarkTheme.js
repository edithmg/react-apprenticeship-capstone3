import { useState } from 'react';

const THEMES = {
  LIGHT: 'light',
  DARK: 'dark',
};

export const useDarkTheme = () => {
  const [theme, setTheme] = useState(THEMES.LIGHT);
  const themeToggler = () => {
    theme === THEMES.LIGHT ? setTheme(THEMES.DARK) : setTheme(THEMES.LIGHT);
  };
  return [theme, themeToggler];
};
