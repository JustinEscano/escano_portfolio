"use client";

import React, { createContext, useContext, useState, useEffect } from 'react';

interface NavbarTheme {
  /** Background color of the navbar when scrolled (hex, e.g. "#0b1e4f") */
  scrolledBg: string;
  /** Accent color used for the logo and underline/hover states (hex) */
  accent: string;
  /** Optional: override the hover accent color separately (hex) */
  hoverAccent?: string;
}

const defaultTheme: NavbarTheme = {
  scrolledBg: '',   // empty = use the CSS variable bg-primary
  accent: '',       // empty = use the default nav-link colour
};

const NavbarThemeContext = createContext<{
  theme: NavbarTheme;
  setTheme: (t: NavbarTheme) => void;
}>({ theme: defaultTheme, setTheme: () => {} });

export function NavbarThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<NavbarTheme>(defaultTheme);
  return (
    <NavbarThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </NavbarThemeContext.Provider>
  );
}

export function useNavbarTheme() {
  return useContext(NavbarThemeContext);
}

/**
 * Drop this inside any project page to declare the navbar theme for that page.
 * It also overrides --accent and --accent-hover CSS variables so that all
 * bg-accent / text-accent elements on the page automatically pick up the project's color.
 * Everything resets automatically when the user navigates away.
 */
export function ProjectNavbarTheme({ scrolledBg, accent, hoverAccent }: NavbarTheme) {
  const { setTheme } = useNavbarTheme();
  useEffect(() => {
    setTheme({ scrolledBg, accent, hoverAccent });

    // Override page-wide CSS accent variables
    if (accent) {
      const root = document.documentElement;
      const prevAccent = root.style.getPropertyValue('--accent');
      const prevAccentHover = root.style.getPropertyValue('--accent-hover');
      root.style.setProperty('--accent', accent);
      root.style.setProperty('--accent-hover', hoverAccent ?? accent + 'cc');
      return () => {
        setTheme(defaultTheme);
        root.style.setProperty('--accent', prevAccent);
        root.style.setProperty('--accent-hover', prevAccentHover);
      };
    }

    return () => setTheme(defaultTheme);
  }, [scrolledBg, accent, hoverAccent, setTheme]);
  return null;
}

/**
 * ProjectDetailsNavbarTheme allows sub-navigation within a project page
 * to define its own background and accent color separately from the main Navbar.
 * It manages CSS variables specifically for the project menu.
 */
export function ProjectDetailsNavbarTheme({ scrolledBg, accent }: { scrolledBg: string; accent: string; }) {
  useEffect(() => {
    if (scrolledBg || accent) {
      const root = document.documentElement;
      const prevBg = root.style.getPropertyValue('--project-nav-bg');
      const prevAccent = root.style.getPropertyValue('--project-nav-accent');
      if (scrolledBg) root.style.setProperty('--project-nav-bg', scrolledBg);
      if (accent) root.style.setProperty('--project-nav-accent', accent);
      return () => {
        root.style.setProperty('--project-nav-bg', prevBg);
        root.style.setProperty('--project-nav-accent', prevAccent);
      };
    }
  }, [scrolledBg, accent]);
  return null;
}
