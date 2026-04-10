'use client';
import React, { createContext, useContext, useState, useEffect } from 'react';
import { themes, ThemeKey } from '../styles/theme';

const ThemeContext = createContext({
  colors: themes.classic,
  setTheme: (key: ThemeKey) => {},
  currentTheme: 'classic' as ThemeKey
});

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [currentTheme, setCurrentTheme] = useState<ThemeKey>('classic');

  // ESTA ES LA MAGIA: Inyecta las variables en el HTML cada vez que cambia el tema
  useEffect(() => {
    const root = document.documentElement;
    const theme = themes[currentTheme];
    root.style.setProperty('--cream', theme.cream);
    root.style.setProperty('--lavender', theme.lavender);
    root.style.setProperty('--olive', theme.olive);
    root.style.setProperty('--purple', theme.purple);
  }, [currentTheme]);

  return (
    <ThemeContext.Provider value={{ colors: themes[currentTheme], setTheme: setCurrentTheme, currentTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useThemeCustom = () => useContext(ThemeContext);