import { navigasi } from '../data/site';
import { FlowerDoodle } from './Doodles';

export function Footer() {
  return (
    <footer className="footer page-width">
      <a href="#home" className="brand">
        AKMAL*
      </a>
      <small>© 2026 Akmal Fadhlul Rohman. All rights reserved.</small>
      <div className="footer-links-wrap">
        <div className="footer-links">
          {navigasi
            .filter((item) => ['home', 'about', 'projects', 'contact'].includes(item.id))
            .map((item) => (
              <a key={item.id} href={`#${item.id}`}>
                {item.label}
              </a>
            ))}
        </div>
        <div className="footer-flower" aria-hidden="true">
          <FlowerDoodle width={24} height={24} color="#161615" />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
