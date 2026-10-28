import { useState } from 'react';
import { Paper, Note } from '../components/Paper';
import { TechIcon } from '../components/TechIcon';
import { HandDrawnOval, CurvedArrow, CrownDoodle, StarDoodle, ScribbleLine } from '../components/Doodles';

export interface SkillCategoryGroup {
  id: string;
  name: string;
  shortTitle: string;
  ovalColor: string;
  skills: { name: string }[];
}

export const SKILL_GROUPS: SkillCategoryGroup[] = [
  {
    id: 'frontend',
    name: 'FRONTEND & WEB',
    shortTitle: 'FRONTEND',
    ovalColor: '#54bee8', // signature sky blue
    skills: [
      { name: 'React' },
      { name: 'Next.js' },
      { name: 'TypeScript' },
      { name: 'JavaScript' },
      { name: 'HTML5' },
      { name: 'CSS3' },
      { name: 'Tailwind CSS' },
      { name: 'Vite' },
      { name: 'Flutter' },
      { name: 'Python' },
      { name: 'C++' },
      { name: 'PHP' },
    ],
  },
  {
    id: 'backend',
    name: 'BACKEND & DATA',
    shortTitle: 'BACKEND',
    ovalColor: '#ec82b6', // signature pink
    skills: [
      { name: 'Node.js' },
      { name: 'Express.js' },
      { name: 'NestJS' },
      { name: 'REST APIs' },
      { name: 'PostgreSQL' },
      { name: 'MySQL' },
      { name: 'Prisma ORM' },
      { name: 'Redis' },
      { name: 'Supabase' },
      { name: 'JWT Auth' },
      { name: 'bcrypt' },
      { name: 'Database Design' },
    ],
  },
  {
    id: 'security-tools',
    name: 'SECURITY & TOOLS',
    shortTitle: 'SECURITY & TOOLS',
    ovalColor: '#c4ec42', // signature lime green
    skills: [
      { name: 'Kali Linux' },
      { name: 'VirtualBox' },
      { name: 'Wireshark' },
      { name: 'Nmap' },
      { name: 'Burp Suite' },
      { name: 'Web Security' },
      { name: 'SOC Fundamentals' },
      { name: 'Linux' },
      { name: 'Git & GitHub' },
      { name: 'Docker' },
      { name: 'Black-Box Testing' },
      { name: 'UML & ERD' },
    ],
  },
];

export function Skills() {
  const [activeMobileTab, setActiveMobileTab] = useState<number>(0);

  return (
    <Paper id="skills" warna="#f4efe6" above="#f4efe6" seed={85} className="paper-grid-section">
      <div className="skills-grid page-width">
        {/* Left Column: Pink Scrapbook Card with 'TOOLS I USE' & Sticky Note */}
        <div className="skills-intro">
          <div className="skills-pink-card relative">
            <span className="eyebrow">02. SKILLS ⟶</span>
            <div className="skills-title-wrap relative">
              <h2>
                TOOLS<br className="desktop-break" />
                {' '}I USE
              </h2>
              {/* Crown doodle top left */}
              <div className="skills-crown-doodle absolute -top-3 right-2" aria-hidden="true">
                <CrownDoodle width={28} height={22} className="rotate-12" color="#161615" />
              </div>
              {/* Star doodle right */}
              <div className="skills-star-doodle absolute top-1/2 -right-3" aria-hidden="true">
                <StarDoodle width={18} height={18} color="#161615" />
              </div>
            </div>
            <div className="skills-arrow-wrap" aria-hidden="true">
              <CurvedArrow width={42} height={22} className="rotate-12" color="#161615" />
            </div>
            <Note kind="cream" className="skills-note">
              <span className="skills-note-desktop">
                STILL<br />
                LEARNING,<br />
                ALWAYS<br />
                CURIOUS.
              </span>
              <span className="skills-note-mobile">
                STILL LEARNING, ALWAYS CURIOUS ✦
              </span>
            </Note>
            <div className="skills-card-scribble" aria-hidden="true">
              <ScribbleLine width={80} height={12} color="#161615" />
            </div>
          </div>
        </div>

        {/* Right Area: Symmetrical 3-Column Scrapbook Grid */}
        <div className="skills-content">
          {/* DESKTOP (3 balanced columns side-by-side, 12 skills each) */}
          <div className="skills-columns-desktop">
            {SKILL_GROUPS.map((group) => (
              <div key={group.id} className="skill-column-card">
                <div className="skill-column-header">
                  <HandDrawnOval color={group.ovalColor}>
                    {group.name}
                  </HandDrawnOval>
                </div>

                <div className="skill-column-tiles">
                  {group.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="skill-polaroid-tile"
                      tabIndex={0}
                      role="article"
                      title={skill.name}
                    >
                      <span className="tape skill-tape" aria-hidden="true" />
                      <div className="skill-icon-wrap">
                        <TechIcon name={skill.name} className="w-6 h-6" />
                      </div>
                      <span className="skill-name">{skill.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* MOBILE ONLY (Clean 3-Tab Switcher + Symmetrical 12-Card Grid) */}
          <div className="skills-mobile-view">
            <div className="skills-mobile-tabs" role="tablist" aria-label="Skill categories">
              {SKILL_GROUPS.map((group, idx) => {
                const isActive = activeMobileTab === idx;
                return (
                  <button
                    key={group.id}
                    role="tab"
                    aria-selected={isActive}
                    onClick={() => setActiveMobileTab(idx)}
                    className={`skills-mobile-tab-btn ${isActive ? 'active' : ''}`}
                    style={isActive ? { borderColor: group.ovalColor } : {}}
                  >
                    {group.shortTitle}
                  </button>
                );
              })}
            </div>

            <div className="skill-column-card mobile-card">
              <div className="skill-column-header">
                <HandDrawnOval color={SKILL_GROUPS[activeMobileTab].ovalColor}>
                  {SKILL_GROUPS[activeMobileTab].name}
                </HandDrawnOval>
              </div>

              <div className="skill-column-tiles">
                {SKILL_GROUPS[activeMobileTab].skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="skill-polaroid-tile"
                    tabIndex={0}
                    role="article"
                    title={skill.name}
                  >
                    <span className="tape skill-tape" aria-hidden="true" />
                    <div className="skill-icon-wrap">
                      <TechIcon name={skill.name} className="w-6 h-6" />
                    </div>
                    <span className="skill-name">{skill.name}</span>
                  </div>
                ))}
              </div>

              {/* Dot Indicators */}
              <div className="skills-mobile-dots" aria-hidden="true">
                {SKILL_GROUPS.map((group, idx) => (
                  <button
                    key={group.id}
                    onClick={() => setActiveMobileTab(idx)}
                    className={`skills-dot ${activeMobileTab === idx ? 'active' : ''}`}
                    aria-label={`Go to ${group.name}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Paper>
  );
}

export default Skills;
