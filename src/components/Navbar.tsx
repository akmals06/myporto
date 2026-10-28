import { useEffect, useState, useRef, useCallback } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { navigasi } from '../data/site';
import { useActiveSection } from '../hooks/useActiveSection';
import { ActiveNavIndicatorSvg } from './Doodles';

const navIds = navigasi.map((a) => a.id);

export function Navbar() {
  const [buka, set_buka] = useState(false);
  const [scrolled, set_scrolled] = useState(false);
  const { activeSection, setActiveSection } = useActiveSection(navIds);
  const navContainerRef = useRef<HTMLDivElement>(null);
  const indicatorRef = useRef<HTMLDivElement>(null);
  const navRootRef = useRef<HTMLElement>(null);

  // Track page scroll to add subtle sticky elevation
  useEffect(() => {
    const onScroll = () => {
      set_scrolled(window.scrollY > 15);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Recalculate hand-drawn blue oval indicator position
  const updateIndicator = useCallback(() => {
    if (!navContainerRef.current || !indicatorRef.current) return;
    const activeEl = navContainerRef.current.querySelector<HTMLElement>(`[data-nav="${activeSection}"]`);
    if (activeEl) {
      const activeRect = activeEl.getBoundingClientRect();
      const parentRect = navContainerRef.current.getBoundingClientRect();
      const left = activeRect.left - parentRect.left - 10;
      const top = activeRect.top - parentRect.top - 5;
      const width = activeRect.width + 20;
      const height = activeRect.height + 10;

      indicatorRef.current.style.transform = `translate3d(${left}px, ${top}px, 0) rotate(-1deg)`;
      indicatorRef.current.style.width = `${width}px`;
      indicatorRef.current.style.height = `${height}px`;
      indicatorRef.current.style.opacity = '1';
    } else {
      indicatorRef.current.style.opacity = '0';
    }
  }, [activeSection]);

  useEffect(() => {
    updateIndicator();
    window.addEventListener('resize', updateIndicator);
    return () => window.removeEventListener('resize', updateIndicator);
  }, [updateIndicator]);

  // Close mobile drawer on Escape key or outside click
  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === 'Escape') set_buka(false);
    }
    function handleClickOutside(e: MouseEvent) {
      if (navRootRef.current && !navRootRef.current.contains(e.target as Node)) {
        set_buka(false);
      }
    }
    window.addEventListener('keydown', handleKeyDown);
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setActiveSection(id);
    set_buka(false);
    const target = document.getElementById(id);
    if (target) {
      const yOffset = -74;
      const y = target.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: Math.max(0, y), behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        ref={navRootRef}
        className={`navbar-sticky-header ${scrolled ? 'navbar-scrolled' : ''}`}
      >
        <nav className="navbar" aria-label="Main navigation">
          {/* Brand Logo with Hand-Drawn Underline */}
          <a
            className="brand"
            href="#home"
            onClick={(e) => handleNavClick(e, 'home')}
          >
            <span>AKMAL</span>
            <sup className="brand-star">*</sup>
            <svg className="brand-underline" viewBox="0 0 100 15" fill="none" aria-hidden="true">
              <path d="M3 6 Q 50 2, 96 5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
              <path d="M8 11 Q 50 8, 88 11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </a>

          {/* Desktop Navigation Links with Animated Hand-Drawn Oval */}
          <div ref={navContainerRef} className="nav-links-wrap desktop-only">
            <div ref={indicatorRef} className="nav-active-oval" aria-hidden="true">
              <ActiveNavIndicatorSvg color="#58BCEB" />
            </div>
            <div className="nav-links" role="menubar">
              {navigasi.map((item) => (
                <a
                  href={`#${item.id}`}
                  key={item.id}
                  data-nav={item.id}
                  role="menuitem"
                  aria-current={activeSection === item.id ? 'page' : undefined}
                  className={`nav-item ${activeSection === item.id ? 'nav-active' : ''}`}
                  onClick={(e) => handleNavClick(e, item.id)}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>

          {/* Right Action: Let's Talk CTA & Hamburger Button */}
          <div className="nav-end">
            <a
              href="#contact"
              className="talk"
              onClick={(e) => handleNavClick(e, 'contact')}
            >
              LET'S TALK <ArrowUpRight size={14} aria-hidden="true" />
            </a>
            <button
              type="button"
              className="menu-toggle"
              onClick={() => set_buka(!buka)}
              aria-label={buka ? 'Close menu' : 'Open menu'}
              aria-expanded={buka}
              aria-controls="mobile-menu"
            >
              {buka ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu Dropdown */}
          {buka && (
            <div className="mobile-menu" id="mobile-menu" role="menu">
              {navigasi.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  role="menuitem"
                  onClick={(e) => handleNavClick(e, item.id)}
                  className={`mobile-nav-link ${activeSection === item.id ? 'mobile-nav-active' : ''}`}
                >
                  <span>{item.label}</span>
                  {activeSection === item.id && (
                    <span className="mobile-active-tag" aria-hidden="true">
                      ★
                    </span>
                  )}
                </a>
              ))}
            </div>
          )}
        </nav>
      </header>
      <div className="navbar-spacer" aria-hidden="true" />
    </>
  );
}

export default Navbar;
