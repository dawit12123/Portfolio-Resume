import { useEffect, useRef, useState } from 'react';
import { useInView } from '../hooks/useInView';
import styles from './Testimonials.module.css';

const GAP = 24;
const VISIBLE = 3;

interface Testimonial {
  id: number;
  name: string;
  role: string;
  text: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Selam Tadesse',
    role: 'CTO, Addis Digital Solutions',

    text: 'Dawit built our entire backend infrastructure from scratch with exceptional speed and quality. The APIs are rock-solid and the architecture scales beautifully under load.',
    rating: 5,
  },
  {
    id: 2,
    name: 'Biruk Alemu',
    role: 'Founder, Habesha Tech',

    text: 'Working with Dawit on our fintech platform was outstanding. He understood the requirements immediately and delivered a secure, high-performance system on time.',
    rating: 5,
  },
  {
    id: 3,
    name: 'Hiwot Bekele',
    role: 'Product Manager, EthioCloud',
    text: 'The real-time features Dawit implemented reduced our response latency by over 60%. His deep knowledge of WebSockets and distributed systems made all the difference.',
    rating: 5,
  },
  {
    id: 4,
    name: 'Yonas Haile',
    role: 'CEO, Zemen Startups',
    text: 'Dawit led our backend team with professionalism and technical depth. Code reviews, architecture decisions, mentoring — he raised the bar across the entire engineering org.',
    rating: 5,
  },
  {
    id: 5,
    name: 'Meron Getachew',
    role: 'Head of Engineering, Nile Systems',
    text: 'The microservices architecture Dawit designed for our platform handles thousands of concurrent users without breaking a sweat. Truly enterprise-grade backend engineering.',
    rating: 5,
  },
  {
    id: 6,
    name: 'Abebe Worku',
    role: 'Tech Lead, Rift Valley Software',
    text: 'Dawit\'s GraphQL API design transformed how our frontend team works. Clean schemas, efficient resolvers, and excellent documentation — an absolute pleasure to collaborate with.',
    rating: 5,
  },
];

function Stars({ count }: { count: number }) {
  return (
    <div className={styles.stars}>
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} width="15" height="15" viewBox="0 0 16 16" fill="#f59e0b">
          <path d="M8 1l1.8 3.6L14 5.3l-3 2.9.7 4.1L8 10.4l-3.7 1.9.7-4.1-3-2.9 4.2-.7z"/>
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  const [active, setActive] = useState(0);
  const [cardW, setCardW] = useState(0);
  const wrapRef = useRef<HTMLDivElement>(null);
  const { ref, inView } = useInView(0.15);

  const maxActive = testimonials.length - VISIBLE;

  useEffect(() => {
    const update = () => {
      if (wrapRef.current) {
        setCardW((wrapRef.current.offsetWidth - (VISIBLE - 1) * GAP) / VISIBLE);
      }
    };
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);

  const prev = () => setActive((a) => Math.max(0, a - 1));
  const next = () => setActive((a) => Math.min(maxActive, a + 1));

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      className={`${styles.section} reveal ${inView ? 'visible' : ''}`}
    >
      <div className={styles.topRow}>
        <div>
          <p className={styles.eyebrow}>Testimonials</p>
          <h2 className={styles.heading}>What Our Clients<br />Are Saying</h2>
        </div>
        <div className={styles.navBtns}>
          <button className={`${styles.navBtn} ${active === 0 ? styles.navBtnDisabled : ''}`} onClick={prev} aria-label="Previous">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path d="M11 4 L6 9 L11 14" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          <button className={`${styles.navBtn} ${active === maxActive ? styles.navBtnDisabled : ''}`} onClick={next} aria-label="Next">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path d="M7 4 L12 9 L7 14" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      </div>

      <div ref={wrapRef} className={styles.sliderWrap}>
        <div
          className={styles.track}
          style={{ transform: `translateX(${-(active * (cardW + GAP))}px)` }}
        >
          {testimonials.map((t) => (
            <div key={t.id} className={styles.slide} style={{ width: cardW || undefined }}>
              <div className={styles.card}>
                <Stars count={t.rating} />
                <p className={styles.text}>"{t.text}"</p>
                <div className={styles.author}>
                  <div className={styles.avatarInitials}>
                    {t.name.split(' ').map(w => w[0]).join('').slice(0, 2)}
                  </div>
                  <div>
                    <p className={styles.name}>{t.name}</p>
                    <p className={styles.role}>{t.role}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* One dot per position (maxActive + 1) */}
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
    </section>
  );
}
