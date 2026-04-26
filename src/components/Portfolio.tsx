import { useEffect, useRef, useState } from 'react';
import { useInView } from '../hooks/useInView';
import styles from './Portfolio.module.css';

const GAP = 22;

interface Project {
  id: number;
  label: string;
  category: string;
  img: string;
  desc: string;
}

const projects: Project[] = [
  {
    id: 1,
    label: 'CBE Super App Central Portal',
    category: 'Fintech · Banking',
    img: '/projects/cbe-super-app.png',
    desc: 'Central admin portal for CBE\'s Digital Banking Super App — managing customers, mini-apps, and financial configurations at enterprise scale.',
  },
  {
    id: 2,
    label: 'CBE CPS Portal',
    category: 'Fintech · Banking',
    img: '/projects/cbe-cps-portal.png',
    desc: 'Branch-level CPS portal for Commercial Bank of Ethiopia — account management, user administration, and transaction oversight.',
  },
  {
    id: 3,
    label: 'Avanza Airport Taxi',
    category: 'Ride-Hailing · Real-Time',
    img: '/projects/avanza.png',
    desc: 'Real-time ride dispatch and live driver tracking dashboard — real-time locations, driver management, and trip analytics.',
  },
  {
    id: 4,
    label: 'FM Addis 97.1',
    category: 'Media · Broadcasting',
    img: '/projects/fm-addis.png',
    desc: 'Full media platform for FM Addis 97.1 — live radio, podcasts, news, and archive streaming for 10,000+ worldwide listeners.',
  },
  {
    id: 5,
    label: 'Gojo Casting Platform',
    category: 'Talent · Entertainment',
    img: '/projects/gojo-casting.png',
    desc: 'Talent discovery and job-matching platform connecting actors, filmmakers, and crew with 600+ active jobs and 100+ creators.',
  },
  {
    id: 6,
    label: 'TenaFirst Healthcare',
    category: 'Healthcare · Telemedicine',
    img: '/projects/tenafirst.png',
    desc: 'Doctor consultation platform connecting patients with 2,300+ online doctors — symptom search, lab tests, and clinic finder.',
  },
  {
    id: 7,
    label: 'ArifGojo Real Estate',
    category: 'Real Estate · PropTech',
    img: '/projects/arifgojo.png',
    desc: 'Property rental and sales platform for the Ethiopian market — listings, agency tools, and tenant management.',
  },
  {
    id: 8,
    label: 'Utopia EV Lease Platform',
    category: 'EV · FinLease',
    img: '/projects/utopia-ev.png',
    desc: 'EV leasing and fleet management platform with advance payment packages, equb schemes, and environmental impact tracking.',
  },
];

export default function Portfolio() {
  const [active, setActive] = useState(0);
  const [cardW, setCardW] = useState(0);
  const [visible, setVisible] = useState(3);
  const wrapRef = useRef<HTMLDivElement>(null);
  const { ref, inView } = useInView(0.1);

  const maxActive = Math.max(0, projects.length - visible);

  useEffect(() => {
    const update = () => {
      const w = window.innerWidth;
      const v = w < 640 ? 1 : w < 1024 ? 2 : 3;
      setVisible(v);
      if (wrapRef.current) {
        setCardW((wrapRef.current.offsetWidth - (v - 1) * GAP) / v);
      }
    };
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);

  useEffect(() => {
    setActive((a) => Math.min(a, maxActive));
  }, [maxActive]);

  const prev = () => setActive((a) => Math.max(0, a - 1));
  const next = () => setActive((a) => Math.min(maxActive, a + 1));

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      className={`${styles.section} reveal ${inView ? 'visible' : ''}`}
      id="portfolio"
    >
      <div className={styles.decoCircle} />

      <div className={styles.topRow}>
        <h2 className={styles.heading}>Selected Projects</h2>
        <div className={styles.navBtns}>
          <button
            className={`${styles.navBtn} ${active === 0 ? styles.navBtnDisabled : ''}`}
            onClick={prev}
            aria-label="Previous project"
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M13 4 L7 10 L13 16" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          <button
            className={`${styles.navBtn} ${active === maxActive ? styles.navBtnDisabled : ''}`}
            onClick={next}
            aria-label="Next project"
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M7 4 L13 10 L7 16" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      </div>

      <div ref={wrapRef} className={styles.sliderWrap}>
        <div
          className={styles.track}
          style={{ transform: `translateX(${-(active * (cardW + GAP))}px)` }}
        >
          {projects.map((p) => (
            <div key={p.id} className={styles.slide} style={{ width: cardW || undefined }}>
              <div className={styles.card}>
                <img src={p.img} alt={p.label} className={styles.cardImg} />
                <div className={styles.cardOverlay}>
                  <span className={styles.cardCategory}>{p.category}</span>
                  <span className={styles.cardLabel}>{p.label}</span>
                  <span className={styles.cardDesc}>{p.desc}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.dots}>
        {Array.from({ length: maxActive + 1 }).map((_, i) => (
          <button
            key={i}
            className={`${styles.dot} ${i === active ? styles.dotActive : ''}`}
            onClick={() => setActive(i)}
            aria-label={`Go to position ${i + 1}`}
          />
        ))}
      </div>

      <svg className={styles.decoZigzag} width="62" height="20" viewBox="0 0 62 20" fill="none">
        <path d="M0 10 L10 2 L21 18 L32 2 L43 18 L54 2 L62 10" stroke="rgba(255,255,255,0.25)" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </section>
  );
}
