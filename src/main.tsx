import React from 'react';
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
import './styles/global.css';

function App() {
  return (
    <div className="website">
      <Navbar />
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
    </div>
  );
}

createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
