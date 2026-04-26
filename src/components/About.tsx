import { useInView } from '../hooks/useInView';
import styles from './About.module.css';

const fullStackProjects = [
  {
    icon: '🏛️',
    name: 'Central Statistics Agency',
    role: 'Jan 2020 – Sep 2020',
    desc: 'Database administration and system management — maintaining national data infrastructure.',
  },
  {
    icon: '🏢',
    name: 'Gobeze Consult',
    role: 'Mar 2021 – Feb 2023',
    desc: 'Built enterprise web platforms: Birhan Insurance site, B2B portals, government-facing web systems.',
  },
  {
    icon: '💻',
    name: 'Ahaduweb',
    role: 'Jun 2022 – Nov 2023 · Team Lead',
    desc: 'Led full-stack delivery: FM Addis 97.1 media platform, e-commerce systems, and procurement tools.',
  },
];

const backendProjects = [
  {
    icon: '🚕',
    name: 'Ashewa Technology',
    role: 'Dec 2023 – May 2025',
    desc: 'Senior Software Engineer on Avanza Airport Taxi — real-time ride matching, live tracking, and payment flows.',
  },
  {
    icon: '🖤',
    name: 'Purpose Black',
    role: 'Apr 2024 – Nov 2024 · Part-time',
    desc: 'Senior Backend Developer — distributed systems and API development for fintech products.',
  },
  {
    icon: '🌐',
    name: 'Taxiye',
    role: 'Mar 2025 – Aug 2025 · Remote',
    desc: 'Senior Backend Developer — scalable ride-share platform backend, microservices architecture.',
  },
  {
    icon: '💳',
    name: 'EagleUnionSystems Technology',
    tag: 'Current · Team Lead',
    role: 'May 2025 – Present',
    desc: 'Senior Backend Developer & Team Lead building the CBE Digital Banking SuperApp — high-volume transactions, security, and enterprise-scale fintech.',
  },
];

const skillGroups = [
  { label: 'Backend',     skills: ['Node.js', 'Go (Golang)', 'Apollo GraphQL', 'Laravel'] },
  { label: 'Frontend',    skills: ['Vue.js', 'React JS', 'MERN Stack'] },
  { label: 'Databases',   skills: ['PostgreSQL', 'MongoDB', 'Oracle', 'Redis'] },
  { label: 'Cloud & Tools', skills: ['AWS', 'Google Cloud', 'Firebase', 'WebSockets', 'Microservices'] },
];

export default function About() {
  const { ref, inView } = useInView(0.05);

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      className={`${styles.section} reveal ${inView ? 'visible' : ''}`}
      id="about"
    >
      {/* ── Bio + skills ── */}
      <div className={styles.header}>
        <div className={`${styles.headerLeft} reveal-left ${inView ? 'visible' : ''}`}>
          <p className={styles.eyebrow}>About Me</p>
          <h2 className={styles.heading}>Backend Engineer<br />&amp; Team Lead</h2>
          <p className={styles.bio}>
            I have <strong>5+ years of experience</strong> building scalable, secure, and
            high-performance applications across fintech, healthcare, transportation, and media.
          </p>
          <p className={styles.bio}>
            I began my career as a <span className={styles.highlight}>Full Stack Developer</span>,
            delivering complete web platforms across multiple industries. Over time, I gravitated
            toward the complexity of backend systems — distributed architectures, real-time
            processing, and high-concurrency APIs — and made it my focus.
          </p>
          <p className={styles.bio}>
            Today I specialize in <span className={styles.highlight}>backend engineering</span>,
            developing the{' '}
            <span className={styles.highlight}>CBE Digital Banking SuperApp</span>{' '}
            as Senior Backend Developer & Team Lead, contracted through EagleUnionSystems Technology.
          </p>
          <p className={styles.availability}>
            <span className={styles.availDot} />
            Open to remote roles, consulting &amp; freelance opportunities
          </p>
        </div>

        <div className={`${styles.skillsPanel} reveal-right ${inView ? 'visible' : ''}`}>
          <p className={styles.skillsTitle}>⚙️ Technical Skills</p>
          {skillGroups.map((g) => (
            <div key={g.label} className={styles.skillGroup}>
              <p className={styles.skillLabel}>{g.label}</p>
              <div className={styles.skillTags}>
                {g.skills.map((s) => <span key={s} className={styles.skillTag}>{s}</span>)}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Career journey timeline ── */}
      <div className={`${styles.journey} reveal ${inView ? 'visible' : ''}`}>
        <h3 className={styles.journeyTitle}>Career Journey</h3>

        {/* Phase 1 – Full Stack */}
        <div className={styles.phase}>
          <div className={styles.phaseLabel}>
            <span className={styles.phaseBadge} style={{ background: 'rgba(234,179,8,0.12)', color: '#eab308', borderColor: 'rgba(234,179,8,0.3)' }}>
              Phase 1 · Full Stack Developer
            </span>
            <p className={styles.phaseDesc}>
              Built full-product web platforms across media, insurance, e-commerce, and enterprise verticals —
              owning frontend, backend, and database layers end to end.
            </p>
          </div>
          <div className={`${styles.phaseProjects} ${styles.phaseProjects3}`}>
            {fullStackProjects.map((p) => (
              <div key={p.name} className={styles.projectCard}>
                <span className={styles.projectIcon}>{p.icon}</span>
                <div>
                  <p className={styles.projectName}>{p.name}</p>
                  <p className={styles.projectRole}>{p.role}</p>
                  <p className={styles.projectDesc}>{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Transition arrow */}
        <div className={styles.transition}>
          <div className={styles.transitionLine} />
          <span className={styles.transitionLabel}>Specialized to Backend Engineering</span>
          <div className={styles.transitionLine} />
        </div>

        {/* Phase 2 – Backend */}
        <div className={styles.phase}>
          <div className={styles.phaseLabel}>
            <span className={styles.phaseBadge} style={{ background: 'rgba(79,126,247,0.12)', color: '#4f7ef7', borderColor: 'rgba(79,126,247,0.3)' }}>
              Phase 2 · Backend Engineer &amp; Team Lead
            </span>
            <p className={styles.phaseDesc}>
              Focused exclusively on backend systems — distributed architectures, real-time APIs,
              fintech platforms, and leading engineering teams.
            </p>
          </div>
          <div className={styles.phaseProjects}>
            {backendProjects.map((p) => (
              <div key={p.name} className={`${styles.projectCard} ${p.tag ? styles.projectCardCurrent : ''}`}>
                <span className={styles.projectIcon}>{p.icon}</span>
                <div>
                  <div className={styles.projectNameRow}>
                    <p className={styles.projectName}>{p.name}</p>
                    {p.tag && <span className={styles.currentTag}>{p.tag}</span>}
                  </div>
                  <p className={styles.projectRole}>{p.role}</p>
                  <p className={styles.projectDesc}>{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
