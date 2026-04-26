import { useRef, useState } from 'react';
import { useInView } from '../hooks/useInView';
import styles from './WhySection.module.css';

// Free stock video from Pexels – "People Working in Office"
const VIDEO_SRC =
  'https://videos.pexels.com/video-files/3195394/3195394-hd_1920_1080_25fps.mp4';

export default function WhySection() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [muted, setMuted] = useState(true);
  const [started, setStarted] = useState(false);
  const { ref, inView } = useInView(0.15);

  const handlePlay = () => {
    const v = videoRef.current;
    if (!v) return;
    if (!started) {
      setStarted(true);
      v.muted = false;
      setMuted(false);
      v.play();
    } else {
      // toggle mute on subsequent clicks
      v.muted = !v.muted;
      setMuted(v.muted);
    }
  };

  return (
    <section ref={ref as React.RefObject<HTMLElement>} className={`${styles.section} reveal ${inView ? 'visible' : ''}`}>
      <div className={styles.header}>
        <h2 className={styles.heading}>Why Enver Is The<br />Best Choice?</h2>
        <p className={styles.subtext}>
          Watch this one minute video so you understand why you should use our services!
        </p>
      </div>

      <div className={styles.videoWrap}>
        <video
          ref={videoRef}
          className={styles.video}
          src={VIDEO_SRC}
          autoPlay
          muted
          loop
          playsInline
        />

        <div className={styles.overlay} />

        <button
          className={`${styles.playBtn} ${started && !muted ? styles.playBtnActive : ''}`}
          onClick={handlePlay}
          aria-label={started ? (muted ? 'Unmute video' : 'Mute video') : 'Play video'}
        >
          {started && !muted ? (
            /* speaker / unmuted icon */
            <svg width="26" height="26" viewBox="0 0 26 26" fill="white">
              <polygon points="3,9 9,9 16,4 16,22 9,17 3,17" />
              <path d="M19 9 Q23 13 19 17" stroke="white" strokeWidth="2" fill="none" strokeLinecap="round"/>
              <path d="M21 6 Q27 13 21 20" stroke="white" strokeWidth="2" fill="none" strokeLinecap="round"/>
            </svg>
          ) : (
            /* play icon */
            <svg width="26" height="26" viewBox="0 0 26 26" fill="white">
              <polygon points="5,2 21,13 5,24" />
            </svg>
          )}
        </button>
      </div>
    </section>
  );
}
