import { useInView } from '../hooks/useInView';
import styles from './Services.module.css';

interface Service {
  icon: React.ReactNode;
  bg: string;
  title: string;
  desc: string;
  tags: string[];
}

const services: Service[] = [
  {
    icon: (
      <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
        <rect x="2" y="2" width="10" height="10" rx="2" stroke="#4f7ef7" strokeWidth="2"/>
        <rect x="14" y="2" width="10" height="10" rx="2" stroke="#4f7ef7" strokeWidth="2"/>
        <rect x="2" y="14" width="10" height="10" rx="2" stroke="#4f7ef7" strokeWidth="2"/>
        <path d="M14 19 H24 M19 14 V24" stroke="#4f7ef7" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
    bg: 'rgba(79,126,247,0.12)',
    title: 'Backend Engineering',
    desc: 'Scalable APIs and microservices built with Node.js and Go — optimised for high concurrency, real-time workloads, and production reliability.',
    tags: ['Node.js', 'Go', 'REST', 'Microservices'],
  },
  {
    icon: (
      <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
        <circle cx="13" cy="13" r="10" stroke="#a855f7" strokeWidth="2"/>
        <path d="M9 13 L12 16 L17 10" stroke="#a855f7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    bg: 'rgba(168,85,247,0.12)',
    title: 'Team Leadership',
    desc: 'Leading engineering teams end-to-end — architecture decisions, code reviews, delivery management, and best-practice mentorship.',
    tags: ['Team Lead', 'Agile', 'Architecture', 'Mentoring'],
  },
  {
    icon: (
      <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
        <rect x="2" y="6" width="22" height="15" rx="2.5" stroke="#eab308" strokeWidth="2"/>
        <path d="M7 11 H19 M7 15 H14" stroke="#eab308" strokeWidth="1.8" strokeLinecap="round"/>
        <circle cx="20" cy="4" r="3" fill="#eab308"/>
      </svg>
    ),
    bg: 'rgba(234,179,8,0.12)',
    title: 'Fintech Systems',
    desc: 'Mission-critical digital banking solutions with high availability, strict security, and high-volume transaction handling.',
    tags: ['CBE', 'Digital Banking', 'Security', 'High Availability'],
  },
  {
    icon: (
      <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
        <path d="M3 13 C3 13 6 6 13 6 C20 6 23 13 23 13 C23 13 20 20 13 20 C6 20 3 13 3 13Z" stroke="#22c55e" strokeWidth="2"/>
        <circle cx="13" cy="13" r="3.5" stroke="#22c55e" strokeWidth="2"/>
        <path d="M13 2 V5 M13 21 V24 M2 13 H5 M21 13 H24" stroke="#22c55e" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    bg: 'rgba(34,197,94,0.12)',
    title: 'Real-Time Systems',
    desc: 'Live data pipelines and event-driven systems using WebSockets, Redis Pub/Sub, and distributed messaging patterns.',
    tags: ['WebSockets', 'Redis', 'Pub/Sub', 'Real-Time'],
  },
  {
    icon: (
      <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
        <rect x="1" y="5" width="24" height="16" rx="2.5" stroke="#ef4444" strokeWidth="2"/>
        <path d="M8 11 L13 15 L18 11" stroke="#ef4444" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    bg: 'rgba(239,68,68,0.12)',
    title: 'GraphQL & APIs',
    desc: 'Schema-first API design with Apollo GraphQL — type-safe, self-documenting, and optimised for frontend collaboration.',
    tags: ['Apollo', 'GraphQL', 'REST', 'API Design'],
  },
  {
    icon: (
      <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
        <rect x="2" y="4" width="22" height="14" rx="2" stroke="#f97316" strokeWidth="2"/>
        <line x1="8" y1="22" x2="18" y2="22" stroke="#f97316" strokeWidth="2" strokeLinecap="round"/>
        <line x1="13" y1="18" x2="13" y2="22" stroke="#f97316" strokeWidth="2"/>
        <path d="M7 10 H11 M13 10 H19" stroke="#f97316" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    bg: 'rgba(249,115,22,0.12)',
    title: 'Full-Stack Development',
    desc: 'End-to-end application delivery from database to UI — Vue.js, MERN Stack, and Laravel for web and enterprise systems.',
    tags: ['React JS', 'Vue.js', 'MERN', 'Laravel'],
  },
];

export default function Services() {
  const { ref, inView } = useInView(0.1);
  return (
    <section ref={ref as React.RefObject<HTMLElement>} className={`${styles.section} reveal ${inView ? 'visible' : ''}`} id="services">
      <div className={styles.titleRow}>
        <svg width="38" height="38" viewBox="0 0 38 38" fill="none" className={styles.playIcon}>
          <polygon points="8,4 30,19 8,34" stroke="white" strokeWidth="2.5" fill="none" strokeLinejoin="round"/>
        </svg>
        <h2 className={styles.heading}>
          What I Do<br />For You
        </h2>
        <span className={styles.xMark}>✕</span>
      </div>

      <div className={`${styles.grid} stagger`}>
        {services.map((s) => (
          <div key={s.title} className={`${styles.card} reveal ${inView ? 'visible' : ''}`}>
            <div className={styles.iconWrap} style={{ background: s.bg }}>
              {s.icon}
            </div>
            <h3 className={styles.cardTitle}>{s.title}</h3>
            <p className={styles.cardDesc}>{s.desc}</p>
            <div className={styles.cardTags}>
              {s.tags.map((t) => <span key={t} className={styles.cardTag}>{t}</span>)}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
