import { FileText } from 'lucide-react';
import { Paper, Note, Polaroid } from '../components/Paper';
import { profil } from '../data/site';
import {
  FlowerDoodle,
  SmileyDoodle,
  CrownDoodle,
} from '../components/Doodles';

export function About() {
  return (
    <Paper id="about" warna="#f4efe6" above="#f4efe6" seed={22}>
      <div className="about-grid page-width">
        {/* Left Column: Pink Patch + Real Portrait Polaroid */}
        <div className="about-portrait">
          <div className="pink-patch" />
          <Polaroid
            src="/assets/akmal-profile.jpg"
            alt="Akmal Fadhlul Rohman Profile"
            caption="AKMAL F. R. // JAKARTA 2026"
            className="portrait-polaroid"
          />
          <span className="about-scribble" aria-hidden="true">
            <svg width="45" height="70" viewBox="0 0 45 70" fill="none">
              <path d="M20 5 C5 15, 35 25, 12 38 C2 48, 40 55, 15 65" stroke="#161615" strokeWidth="2.5" strokeLinecap="round" />
            </svg>
          </span>
          <div className="about-smiley-wrap" aria-hidden="true">
            <SmileyDoodle width={28} height={28} color="#161615" />
          </div>
          <Note kind="pink" hasTape={false} className="about-bit">
            A BIT<br />ABOUT ME
          </Note>
        </div>

        {/* Center / Right Content: Editorial Biography & Traits Note */}
        <div className="about-content-wrap">
          <div className="about-copy">
            <span className="eyebrow">
              01. ABOUT ME <span className="green-arrow">⟶</span>
            </span>
            <div className="about-heading-wrap relative">
              <h2>
                MORE THAN<br />JUST A DEVELOPER.
              </h2>
              <div className="about-heading-crown" aria-hidden="true">
                <CrownDoodle width={28} height={22} color="#161615" />
              </div>
            </div>
            <p>{profil.bio_utama}</p>
            <p>{profil.bio_lanjutan}</p>
            <div className="about-cta-row">
              <a
                className="button-solid"
                href={profil.resume}
                target="_blank"
                rel="noopener noreferrer"
              >
                VIEW RESUME <span className="text-sm font-bold">⟶</span>
              </a>
              <a
                className="button-icon-bordered"
                href={profil.resume}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Download or View Resume PDF"
                title="Download Resume"
              >
                <FileText size={18} />
              </a>
            </div>
          </div>

          {/* Clean Traits Sticky Note */}
          <div className="about-traits-container relative" aria-label="Personal Traits">
            <Note className="about-traits-clean" tapePosition="top-left">
              - STUDENT<br />
              - DEVELOPER<br />
              - PROBLEM SOLVER<br />
              - TECH ENTHUSIAST
            </Note>
            <div className="about-flower-tag" aria-hidden="true">
              <FlowerDoodle width={34} height={34} color="#cff24d" centerColor="#161615" />
            </div>
          </div>
        </div>
      </div>
    </Paper>
  );
}

export default About;
