// app/components/Navbar.tsx
"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useNavbarTheme } from '../contexts/NavbarThemeContext';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const { theme: navTheme } = useNavbarTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isMobileMenuOpen]);

  const scrollToSection = (sectionId: string) => {
    setIsMobileMenuOpen(false);

    if (pathname !== '/' && pathname !== '/home') {
      router.push(`/home#${sectionId}`);
      return;
    }

    if (sectionId === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  const navItems = [
    { label: 'Home', id: 'home' },
    { label: 'About', id: 'about' },
    { label: 'Projects', id: 'projects' },
    { label: 'Contact', id: 'contact' },
  ];

  const isProjectPage = pathname?.startsWith('/project/');

  // On home/other non-project pages when scrolled: white bg, dark text
  // On project pages with dark hero: project-themed bg, white text
  // On project pages with light hero: transparent, dark text
  const darkHeroProjects = ['/project/orbit', '/project/student-information-system'];
  const isLightHero = isProjectPage && !darkHeroProjects.includes(pathname ?? '');
  const isHomePage = !isProjectPage;

  // Text colors
  const useDarkText = (isScrolled && isHomePage) || (!isScrolled && isLightHero);
  const logoClass = useDarkText ? 'text-slate-900' : 'text-white';
  const linkClass = useDarkText ? 'text-slate-700 hover:text-slate-900' : '';
  const underlineClass = useDarkText ? '!bg-slate-700' : '';
  const hamburgerClass = useDarkText ? 'bg-slate-800' : 'bg-heading';

  return (
    <>
      <nav
        className={`transition-all duration-500 w-full z-50 fixed top-0 left-0 animate-slideDown ${
          isScrolled ? 'shadow-lg' : 'bg-transparent shadow-none'
        }`}
        style={
          isScrolled && navTheme.scrolledBg
            ? { backgroundColor: navTheme.scrolledBg }
            : isScrolled && isHomePage
            ? { backgroundColor: '#ffffff' }
            : isScrolled
            ? { backgroundColor: 'var(--color-primary)' }
            : {}
        }
      >
        <div className="container mx-auto">
          <div className="flex items-center justify-between h-16 md:h-20">

            {/* Mobile Logo */}
            <Link href="/" className="flex items-center gap-2 group md:hidden pl-4">
              <span
                className={`logo-text text-xl font-bold transition-colors duration-300 ${logoClass}`}
                style={navTheme.accent
                  ? { '--accent': navTheme.accent, WebkitTextFillColor: navTheme.accent, backgroundImage: 'none' } as React.CSSProperties
                  : {}}
              >
                Justin Escano
              </span>
            </Link>

            {/* Desktop Logo */}
            <Link href="/" className="hidden md:flex items-center gap-2 group">
              <span
                className={`logo-text text-2xl font-bold transition-colors duration-300 ${logoClass}`}
                style={navTheme.accent
                  ? { '--accent': navTheme.accent, WebkitTextFillColor: navTheme.accent, backgroundImage: 'none' } as React.CSSProperties
                  : {}}
              >
                Justin Escano
              </span>
            </Link>

            {/* Desktop Nav Items */}
            <div className="hidden md:flex flex-1 justify-end">
              <div className="flex items-center gap-8 lg:gap-12">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`nav-link relative px-4 py-2 font-medium text-base group transition-colors duration-300 ${linkClass}`}
                    style={navTheme.accent ? { color: navTheme.accent } : {}}
                  >
                    {item.label}
                    <span
                      className={`nav-underline absolute bottom-0 left-1/2 w-0 h-0.5 group-hover:w-full group-hover:left-0 transition-all duration-300 ${underlineClass}`}
                      style={navTheme.accent ? { backgroundColor: navTheme.accent } : {}}
                    ></span>
                  </button>
                ))}
              </div>
            </div>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden relative w-10 h-10 flex items-center justify-center rounded-lg hover:bg-gray-100 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 pr-4"
              aria-label="Toggle menu"
            >
              <div className="w-6 h-5 flex flex-col justify-between">
                <span className={`w-full h-0.5 rounded-full transition-all duration-300 ${hamburgerClass} ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
                <span className={`w-full h-0.5 rounded-full transition-all duration-300 ${hamburgerClass} ${isMobileMenuOpen ? 'opacity-0' : ''}`} />
                <span className={`w-full h-0.5 rounded-full transition-all duration-300 ${hamburgerClass} ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
        >
          <div className="mobile-menu border-t border-gray-100 shadow-lg">
            <div className="max-w-7xl mx-auto px-6 sm:px-8 py-6 space-y-2">
              {navItems.map((item, index) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="nav-link w-full text-left px-4 py-3 font-medium text-base hover:bg-secondary rounded-lg transition-all duration-300 transform hover:translate-x-2"
                  style={{
                    animationDelay: `${index * 100}ms`,
                    animation: isMobileMenuOpen ? 'slideIn 0.3s ease-out forwards' : 'none',
                  }}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;