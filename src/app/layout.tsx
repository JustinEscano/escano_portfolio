// app/layout.tsx
import type { Metadata, Viewport } from 'next';
import '../style/globals.css';
import Navbar from '../components/Navbar';
import CustomCursor from '../components/misc/CustomCursor';
import { NavbarThemeProvider } from '../contexts/NavbarThemeContext';

export const metadata: Metadata = {
  title: 'Justin Escano | Portfolio',
  description: 'Personal portfolio of Justin Escano',
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="overflow-x-hidden w-[100vw] max-w-[100vw]">
      <body className="overflow-x-hidden w-[100vw] max-w-[100vw] m-0 p-0">
        <NavbarThemeProvider>
          {/* Custom cursor + mouse particles — rendered above everything */}
          <CustomCursor />

          {/* Navbar is now completely separated – fixed positioning lives ONLY here */}
          <div className="fixed top-0 left-0 right-0 z-50">
            <Navbar />
          </div>

          {/* Children are wrapped in <main> with exact padding so they are ALWAYS underneath the navbar */}
          <main className="pt-2 md:pt-4">
            {children}
          </main>
        </NavbarThemeProvider>
      </body>
    </html>
  );
}