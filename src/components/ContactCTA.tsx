import { useInView } from '../hooks/useInView';
import styles from './ContactCTA.module.css';

export default function ContactCTA() {
  const { ref, inView } = useInView(0.2);
  return (
    <section ref={ref as React.RefObject<HTMLElement>} className={`${styles.section} reveal ${inView ? 'visible' : ''}`} id="contact">
      <div className={styles.decoCircle} />
      <div className={styles.text}>
        <p className={styles.eyebrow}>Let's Work Together</p>
        <h2 className={styles.heading}>
          Available for remote roles,<br />consulting &amp; freelance
        </h2>
        <p className={styles.sub}>Backend · Fintech · System Architecture · Team Leadership</p>
      </div>
      <a href="mailto:dawitgirma71@gmail.com" className={styles.btn}>Get In Touch ↗</a>
    </section>
  );
}
