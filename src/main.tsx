import React, { useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import { Navbar } from './components/Navbar';
import { Hero } from './sections/Hero';
import { About } from './sections/About';
import { Skills } from './sections/Skills';
import { Projects } from './sections/Projects';
import { Publication } from './sections/Publication';
import { Certificates } from './sections/Certificates';
import { Contact } from './sections/Contact';
import { Footer } from './components/Footer';
import { SearchModal } from './components/SearchModal';
import './styles/global.css';

function App() {
  const [searchOpen, setSearchOpen] = useState(false);

  // Global keyboard shortcuts (Cmd+K / Ctrl+K and '/' to activate search)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Don't trigger if already inside an active form control
      const target = e.target as HTMLElement | null;
      const isInput =
        target &&
        (target.tagName === 'INPUT' ||
          target.tagName === 'TEXTAREA' ||
          target.isContentEditable);

      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setSearchOpen((prev) => !prev);
      } else if (e.key === '/' && !isInput) {
        e.preventDefault();
        setSearchOpen(true);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="website">
      <Navbar onOpenSearch={() => setSearchOpen(true)} />
      <Hero />
      <main>
        <About />
        <Skills />
        <Projects />
        <Publication />
        <Certificates />
        <Contact />
      </main>
      <Footer />
      <SearchModal isOpen={searchOpen} onClose={() => setSearchOpen(false)} />
    </div>
  );
}

createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
