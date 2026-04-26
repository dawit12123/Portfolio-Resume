import { useEffect, useState } from 'react';
import styles from './Navbar.module.css';

const links = [
  { label: 'Home',     href: '#hero'      },
  { label: 'About',    href: '#about'     },
  { label: 'Services', href: '#services'  },
  { label: 'Projects', href: '#portfolio' },
  { label: 'Contact',  href: '#contact'   },
] as const;

const sectionIds = ['hero', 'about', 'services', 'portfolio', 'contact'];

export default function Navbar() {
  const [active, setActive] = useState('hero');
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const observer = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActive(id); },
        { rootMargin: '-40% 0px -55% 0px', threshold: 0 }
      );
      observer.observe(el);
      observers.push(observer);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const close = () => setMenuOpen(false);
    window.addEventListener('scroll', close, { passive: true });
    return () => window.removeEventListener('scroll', close);
  }, [menuOpen]);

  const scrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMenuOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className={styles.nav}>
      <div className={styles.logo}>
        <div className={styles.logoIcon}>
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
            <circle cx="9" cy="9" r="3.5" fill="white"/>
            <path d="M9 2 V4 M9 14 V16 M2 9 H4 M14 9 H16" stroke="white" strokeWidth="1.8" strokeLinecap="round"/>
          </svg>
        </div>
        <span>Dawit<span className={styles.logoDot}>.</span></span>
      </div>

      <ul className={styles.links}>
        {links.map((link) => {
          const id = link.href.slice(1);
          return (
            <li key={link.label}>
              <a
                href={link.href}
                className={active === id ? styles.active : ''}
                onClick={(e) => scrollTo(e, link.href)}
              >
                {link.label}
              </a>
            </li>
          );
        })}
      </ul>

      <a href="#contact" className={styles.cta} onClick={(e) => scrollTo(e, '#contact')}>
        Hire Me
      </a>

      <button
        className={styles.hamburger}
        onClick={() => setMenuOpen((o) => !o)}
        aria-label="Toggle menu"
        aria-expanded={menuOpen}
      >
        <span className={`${styles.bar} ${menuOpen ? styles.bar1Open : ''}`} />
        <span className={`${styles.bar} ${menuOpen ? styles.bar2Open : ''}`} />
        <span className={`${styles.bar} ${menuOpen ? styles.bar3Open : ''}`} />
      </button>

      {menuOpen && (
        <div className={styles.mobileMenu}>
          {links.map((link) => {
            const id = link.href.slice(1);
            return (
              <a
                key={link.label}
                href={link.href}
                className={`${styles.mobileLink} ${active === id ? styles.mobileLinkActive : ''}`}
                onClick={(e) => scrollTo(e, link.href)}
              >
                {link.label}
              </a>
            );
          })}
          <a
            href="#contact"
            className={styles.mobileCta}
            onClick={(e) => scrollTo(e, '#contact')}
          >
            Hire Me ↗
          </a>
        </div>
      )}
    </nav>
  );
}
