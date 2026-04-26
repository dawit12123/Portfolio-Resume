import { useInView } from '../hooks/useInView';
import styles from './Hero.module.css';

const tags = ['Go (Golang)', 'Node.js', 'React JS', 'GraphQL', 'PostgreSQL', 'Redis', 'Microservices', 'Fintech'];

export default function Hero() {
  const { ref: refContent, inView: inViewContent } = useInView(0.1);
  const { ref: refImage,   inView: inViewImage   } = useInView(0.1);

  return (
    <section className={styles.hero} id="hero">
      <div className={styles.glowRight} />

      <svg className={styles.decoZigzag} width="70" height="22" viewBox="0 0 70 22" fill="none">
        <path d="M0 11 L11 2 L22 20 L33 2 L44 20 L55 2 L66 11" stroke="rgba(255,255,255,0.35)" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
      <div className={styles.decoCircle} />
      <svg className={styles.decoPlay} width="38" height="38" viewBox="0 0 38 38" fill="none">
        <polygon points="8,4 30,19 8,34" stroke="rgba(255,255,255,0.35)" strokeWidth="2" fill="none"/>
      </svg>
      <span className={styles.decoPlus}>+</span>

      <div ref={refContent as React.RefObject<HTMLDivElement>} className={`${styles.content} reveal-left ${inViewContent ? 'visible' : ''}`}>
        <p className={styles.eyebrow}>👋 Hello, I'm Dawit</p>
        <h1 className={styles.heading}>
          Backend<br />Engineer &<br />Team Lead
        </h1>
        <p className={styles.subtext}>
          I design and build <span className={styles.highlight}>high-performance, mission-critical systems</span> —
          real-time fintech platforms, distributed microservices, and high-concurrency APIs.
          Currently developing the{' '}
          <span className={styles.highlight}>CBE Digital Banking SuperApp</span>{' '}
          as Senior Backend Engineer & Team Lead.
        </p>
        <div className={styles.tags}>
          {tags.map((t) => <span key={t} className={styles.tag}>{t}</span>)}
        </div>
        <div className={styles.btns}>
          <a href="#portfolio" className={styles.btnPrimary} onClick={(e) => { e.preventDefault(); document.querySelector('#portfolio')?.scrollIntoView({ behavior: 'smooth' }); }}>
            View Projects ↗
          </a>
          <a href="#contact" className={styles.btnSecondary} onClick={(e) => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }); }}>
            Hire Me
          </a>
        </div>
      </div>

      <div ref={refImage as React.RefObject<HTMLDivElement>} className={`${styles.imageArea} reveal-right ${inViewImage ? 'visible' : ''}`}>
        <div className={styles.card}>
          <img
            src="/profile.jpg"
            alt="Dawit Girma – Backend Engineer & Team Lead"
            className={styles.heroImg}
          />
        </div>
        {/* Floating badge */}
        <div className={styles.badge}>
          <span className={styles.badgeDot} />
          Available for hire
        </div>
      </div>
    </section>
  );
}
