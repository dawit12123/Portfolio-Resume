import { useEffect, useRef, useState } from 'react';
import { useInView } from '../hooks/useInView';
import styles from './Stats.module.css';

interface Stat { value: number; suffix: string; label: string; }

const stats: Stat[] = [
  { value: 5,  suffix: '+', label: 'Years of Experience'   },
  { value: 20, suffix: '+', label: 'Projects Delivered'    },
  { value: 4,  suffix: '',  label: 'Industry Domains'      },
  { value: 10, suffix: '+', label: 'Technologies Mastered' },
];

function Counter({ value, suffix, running }: { value: number; suffix: string; running: boolean }) {
  const [count, setCount] = useState(0);
  const raf = useRef<number>(0);

  useEffect(() => {
    if (!running) return;
    const duration = 1600;
    const start = performance.now();
    const tick = (now: number) => {
      const p = Math.min((now - start) / duration, 1);
      const ease = 1 - Math.pow(1 - p, 3);
      setCount(Math.round(ease * value));
      if (p < 1) raf.current = requestAnimationFrame(tick);
    };
    raf.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf.current);
  }, [running, value]);

  return <>{count}{suffix}</>;
}

export default function Stats() {
  const { ref, inView } = useInView(0.2);

  return (
    <section ref={ref as React.RefObject<HTMLElement>} className={`${styles.section} reveal ${inView ? 'visible' : ''}`}>
      <div className={`${styles.grid} stagger`}>
        {stats.map((s) => (
          <div key={s.label} className={`${styles.item} reveal ${inView ? 'visible' : ''}`}>
            <span className={styles.value}>
              <Counter value={s.value} suffix={s.suffix} running={inView} />
            </span>
            <span className={styles.label}>{s.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
