import { ArrowRight, Github, Instagram, Linkedin, Mail } from 'lucide-react';
import { Paper, Note } from '../components/Paper';
import { profil } from '../data/site';
import { SmileyDoodle, StarDoodle } from '../components/Doodles';

export function Contact() {
  return (
    <Paper id="contact" warna="#f2a0bd" above="#cff24d" seed={208}>
      <div className="contact-grid page-width">
        {/* Left Column: Heading & Smiley */}
        <div className="contact-heading">
          <span className="eyebrow">06. CONTACT ⟶</span>
          <h2>
            LET'S<br />
            CONNECT
          </h2>
          <div className="contact-smile" aria-hidden="true">
            <SmileyDoodle width={36} height={36} className="rotate-12" color="#161615" bg="#f4efe6" />
          </div>
        </div>

        {/* Center / Right Column: Message, Send Email CTA, Socials & Sticky Note */}
        <div className="contact-links">
          <p>
            Feel free to reach out for collaboration, opportunities, or just a tech talk!
          </p>
          <div className="contact-email-pill mb-3">
            <Mail size={16} className="inline mr-2 text-ink/70" />
            <a href={`mailto:${profil.email}`} className="font-mono text-xs sm:text-sm hover:underline font-bold">
              {profil.email}
            </a>
          </div>
          <div className="social-links">
            <a className="button-solid" href={`mailto:${profil.email}`}>
              Send Email <ArrowRight size={16} />
            </a>
            <a
              href={profil.linkedin}
              aria-label="LinkedIn Profile"
              target="_blank"
              rel="noreferrer"
              className="social-tile"
            >
              <Linkedin size={20} />
            </a>
            <a
              href={profil.github}
              aria-label="GitHub Profile"
              target="_blank"
              rel="noreferrer"
              className="social-tile"
            >
              <Github size={20} />
            </a>
            <a
              href={profil.instagram}
              aria-label="Instagram Profile"
              target="_blank"
              rel="noreferrer"
              className="social-tile"
            >
              <Instagram size={20} />
            </a>
          </div>
        </div>

        {/* Right Column: Warm Sticky Note without any image */}
        <div className="contact-art-clean">
          <Note kind="cream" className="contact-note-clean">
            GOOD PEOPLE<br />
            GREAT<br />
            OPPORTUNITIES. ☺
          </Note>
          <div className="absolute -bottom-3 -right-2" aria-hidden="true">
            <StarDoodle width={24} height={24} color="#161615" filled={true} />
          </div>
        </div>
      </div>
    </Paper>
  );
}

export default Contact;
