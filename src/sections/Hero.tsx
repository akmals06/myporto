import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ArrowRight } from 'lucide-react';
import { profil } from '../data/site';
import { Note } from '../components/Paper';
import {
  CrownDoodle,
  CurvedArrow,
  StarDoodle,
  FlowerDoodle,
  PaperAirplaneDoodle,
  SmileyDoodle,
  SparkleDoodle,
} from '../components/Doodles';

export function Hero() {
  const heroRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      tl.from('.hero-headline-span', {
        y: 35,
        opacity: 0,
        stagger: 0.1,
        duration: 0.7,
      })
        .from(
          '.hero-sticky-unt',
          {
            scale: 0.75,
            rotation: -14,
            opacity: 0,
            duration: 0.55,
            ease: 'back.out(1.5)',
          },
          '-=0.35'
        )
        .from(
          '.hero-cutout',
          {
            y: 40,
            opacity: 0,
            duration: 0.75,
            ease: 'power2.out',
          },
          '-=0.45'
        );

      // Subtle desktop pointer parallax for physical depth
      const isDesktop = window.matchMedia('(min-width: 1024px)').matches;
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

      if (isDesktop && !prefersReducedMotion && heroRef.current) {
        const handlePointerMove = (e: MouseEvent) => {
          const bounds = heroRef.current?.getBoundingClientRect();
          if (!bounds) return;
          const relX = (e.clientX - bounds.left) / bounds.width - 0.5;
          const relY = (e.clientY - bounds.top) / bounds.height - 0.5;

          gsap.to('.hero-cutout', {
            x: relX * 14,
            y: relY * 10,
            duration: 0.6,
            ease: 'power1.out',
            overwrite: 'auto',
          });
          gsap.to('.hero-sticky-unt', {
            x: relX * 6,
            y: relY * 5,
            duration: 0.5,
            ease: 'power1.out',
            overwrite: 'auto',
          });
          gsap.to('.hero-city-bg', {
            x: relX * -6,
            y: relY * -4,
            duration: 0.7,
            ease: 'power1.out',
            overwrite: 'auto',
          });
        };

        const heroEl = heroRef.current;
        heroEl.addEventListener('mousemove', handlePointerMove, { passive: true });
        return () => {
          heroEl.removeEventListener('mousemove', handlePointerMove);
        };
      }
    },
    { scope: heroRef }
  );

  return (
    <header id="home" ref={heroRef} className="hero relative">
      {/* Left Vertical Scrapbook Tape */}
      <div className="hero-vertical-tape" aria-hidden="true">
        <span>CODE IT, BUILD IDEAS, MAKE A BETTER TOMORROW</span>
      </div>

      <div className="hero-grid page-width">
        {/* Left Side: Typography, Annotations, Notes */}
        <div className="hero-copy">
          {/* Giant Anton Title */}
          <div className="hero-title-container relative">
            {/* Crown Doodle above AKMAL */}
            <div className="hero-crown-wrap" aria-hidden="true">
              <CrownDoodle className="w-10 h-8" color="#161615" />
            </div>

            {/* Lime Green Student Sticky Note */}
            <div className="headline-top hero-sticky-unt">
              <Note className="hero-label">
                Informatics Engineering<br />
                Student @ UNTAR
              </Note>
            </div>

            <h1>
              <span className="hero-headline-span">AKMAL</span>
              <span className="hero-headline-span flex items-center">
                FADHLUL
                <span className="inline-block ml-3 align-middle" aria-hidden="true">
                  <StarDoodle width={28} height={28} color="#161615" />
                </span>
              </span>
              <span className="hero-headline-span flex items-center">
                ROHMAN
                <span className="inline-block ml-3 align-middle" aria-hidden="true">
                  <SparkleDoodle width={22} height={22} color="#161615" />
                </span>
              </span>
            </h1>
          </div>

          {/* Desktop Summary Bio */}
          <p className="hero-summary">{profil.ringkasan}</p>

          {/* CTA Button & Pink Exploration Note */}
          <div className="hero-cta-wrap">
            <a href="#projects" className="button-solid">
              VIEW MY WORK <ArrowRight size={17} />
            </a>

            {/* Tilted Pink Keep Learning Note */}
            <div className="hero-learning-note-wrap" aria-hidden="true">
              <Note kind="pink" className="hero-learning-note">
                KEEP LEARNING<br />
                KEEP BUILDING<br />
                KEEP EXPLORING
              </Note>
              <div className="hero-learning-smiley">
                <SmileyDoodle className="w-7 h-7" color="#161615" />
              </div>
            </div>
          </div>

          {/* Hand-drawn Annotation */}
          <div className="hero-hand" aria-hidden="true">
            <div className="hero-hand-text">
              BUILDING<br />
              IDEAS INTO<br />
              REAL THINGS.
            </div>
            <CurvedArrow className="hero-hand-arrow" color="#161615" />
          </div>
        </div>

        {/* Right Side: Ripped Blue Paper, Monas Polaroid, Cutout Silhouette */}
        <div className="hero-art" aria-label="Physical scrapbook collage featuring rear-facing portrait, Jakarta skyline, and notes">
          {/* Blue Torn Paper Cardstock Layer with Clouds & City */}
          <div className="hero-blue-sheet">
            <img
              src="https://images.unsplash.com/photo-1555899434-94d1368aa7af?auto=format&fit=crop&w=1200&q=80"
              alt="Jakarta Skyline"
              className="hero-city-bg"
            />
          </div>

          {/* Paper Airplane Doodle */}
          <div className="hero-airplane-wrap" aria-hidden="true">
            <PaperAirplaneDoodle width={38} height={28} color="#161615" />
          </div>

          {/* UNTAR Pointer Annotation */}
          <div className="hero-untar-tag" aria-hidden="true">
            <CurvedArrow width={36} height={20} className="rotate-12" color="#161615" />
            <span>UNTAR</span>
          </div>

          {/* Crown doodle floating near Akmal's head */}
          <div className="hero-floating-crown" aria-hidden="true">
            <CrownDoodle width={36} height={28} color="#d5f738" />
          </div>

          {/* Formal Cutout of Akmal in UNTAR Blazer */}
          <div className="hero-cutout">
            <img
              src={`${import.meta.env.BASE_URL}assets/akmal-formal-cutout.png`}
              alt="Akmal Fadhlul Rohman — Informatics Engineering UNTAR"
              className="sticker-cutout"
            />
          </div>

          {/* White Flower Doodle */}
          <div className="hero-flower-wrap" aria-hidden="true">
            <FlowerDoodle width={46} height={46} color="#FFFFFF" centerColor="#161615" />
          </div>

          {/* Star Doodle */}
          <div className="hero-star-wrap" aria-hidden="true">
            <StarDoodle width={24} height={24} color="#d5f738" filled={true} />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Hero;
