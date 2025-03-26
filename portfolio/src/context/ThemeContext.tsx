import React, { createContext, useContext, useState, useEffect } from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';

export const lightTheme = {
  colors: {
    primary: '#2563EB', // Modern blue
    secondary: '#3B82F6', // Lighter blue
    background: '#F8FAFC',
    backgroundGradient: 'linear-gradient(135deg, #F8FAFC 0%, #F1F5F9 100%)',
    text: '#1E293B',
    textLight: '#64748B',
    accent: '#3B82F6',
    white: '#FFFFFF',
    border: '#E2E8F0',
    navbar: '#FFFFFF',
    navbarText: '#1E293B',
    cardBackground: '#FFFFFF',
    shadow: 'rgba(0, 0, 0, 0.1)',
    overlay: 'rgba(0, 0, 0, 0.05)',
  },
  fonts: {
    primary: "'Playfair Display', serif",
    secondary: "'Inter', sans-serif",
  },
  spacing: {
    xs: '0.5rem',
    sm: '1rem',
    md: '2rem',
    lg: '4rem',
    xl: '8rem',
  },
  breakpoints: {
    mobile: '320px',
    tablet: '768px',
    desktop: '1024px',
  },
  motion: {
    spring: {
      type: "spring",
      stiffness: 100,
      damping: 10
    },
    ease: {
      type: "tween",
      ease: "easeInOut"
    },
    stagger: {
      staggerChildren: 0.1
    }
  }
};

export const darkTheme = {
  ...lightTheme,
  colors: {
    primary: '#60A5FA', // Bright blue
    secondary: '#3B82F6', // Medium blue
    background: '#0F172A', // Deep blue-black
    backgroundGradient: 'linear-gradient(135deg, #0F172A 0%, #1E293B 100%)',
    text: '#F8FAFC',
    textLight: '#CBD5E1',
    accent: '#60A5FA',
    white: '#1E293B',
    border: '#334155',
    navbar: '#1E293B',
    navbarText: '#F8FAFC',
    cardBackground: '#1E293B',
    shadow: 'rgba(0, 0, 0, 0.3)',
    overlay: 'rgba(0, 0, 0, 0.2)',
  },
};

// type Theme = typeof lightTheme;

interface ThemeContextType {
  isDark: boolean;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType>({
  isDark: false,
  toggleTheme: () => {},
});

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isDark, setIsDark] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme === 'dark';
  });

  useEffect(() => {
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      <StyledThemeProvider theme={isDark ? darkTheme : lightTheme}>
        {children}
      </StyledThemeProvider>
    </ThemeContext.Provider>
  );
}; 