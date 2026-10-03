'use client';

import { useEffect, useRef } from 'react';

const chapters = [
  { number: '01', title: 'Scale', copy: 'Let the city establish the first impression. The film is the atmosphere, not decoration.' },
  { number: '02', title: 'Depth', copy: 'Typography and UI move at different rates so the interface feels layered against the footage.' },
  { number: '03', title: 'Momentum', copy: 'Scroll becomes the camera: the narrative progresses without hard cuts or repeated hero imagery.' },
];

export default function Home() {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    const hero = document.getElementById('top');
    if (!video || !hero) return;

    let rafId = 0;
    let ready = false;
    let duration = 0;
    let active = true;

    let currentProgress = 0;
    let targetProgress = 0;

    let cachedScrollDistance = 1;
    let cachedHeroTop = 0;

    const clamp01 = (value) => Math.min(1, Math.max(0, value));

    const cacheGeometry = () => {
      const rect = hero.getBoundingClientRect();
      cachedHeroTop = window.scrollY + rect.top;
      cachedScrollDistance = Math.max(1, hero.offsetHeight - window.innerHeight);
    };

    const updateTarget = () => {
      if (!ready || duration <= 0) return;
      const scrolled = window.scrollY;
      const traveled = Math.min(cachedScrollDistance, Math.max(0, scrolled - cachedHeroTop));
      targetProgress = clamp01(traveled / cachedScrollDistance);
    };

    const render = () => {
      if (!active) return;

      if (ready && duration > 0) {
        const diff = targetProgress - currentProgress;
        const absDiff = Math.abs(diff);

        if (absDiff > 0.0001) {
          // Fast, responsive tracking that doesn't feel disconnected
          currentProgress += diff * 0.2;
        } else {
          currentProgress = targetProgress;
        }

        // Synchronize CSS variable for hero typography, depth orbits, progress line
        document.documentElement.style.setProperty('--scroll-p', currentProgress.toFixed(5));

        // Scrub video timeline in exact lockstep
        const targetTime = currentProgress * duration;
        const safeTime = Math.min(Math.max(0, targetTime), duration - 0.001);

        // CRITICAL: Only update the video time if the change is at least half a frame (1/60 / 2 = 0.008s)
        // Updating currentTime by microscopic amounts (e.g. 0.001s) forces the browser to constantly flush
        // its decoder queue without changing the visual frame, causing severe stuttering and lag.
        if (Math.abs(video.currentTime - safeTime) >= 0.008) {
          video.currentTime = safeTime;
        }
      }

      rafId = requestAnimationFrame(render);
    };

    const onReady = () => {
      if (!Number.isFinite(video.duration) || video.duration <= 0) return;
      duration = video.duration;
      ready = true;
      video.pause();

      cacheGeometry();
      updateTarget();
      currentProgress = targetProgress;

      const initialTime = Math.min(Math.max(0, targetProgress * duration), duration - 0.001);
      try {
        video.currentTime = initialTime;
      } catch { }
      document.documentElement.style.setProperty('--scroll-p', currentProgress.toFixed(5));
    };

    video.addEventListener('loadedmetadata', onReady);
    video.addEventListener('canplay', () => {
      if (!ready) onReady();
    });

    const onScroll = () => updateTarget();
    const onResize = () => {
      cacheGeometry();
      updateTarget();
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onResize, { passive: true });

    if (video.readyState >= 1) {
      onReady();
    }

    rafId = requestAnimationFrame(render);

    return () => {
      active = false;
      cancelAnimationFrame(rafId);
      video.pause();
      video.removeEventListener('loadedmetadata', onReady);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onResize);
    };
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <main>
      <header className="site-nav">
        <button className="brand" onClick={() => scrollTo('top')} aria-label="Go to top">
          <img src="/image/builder-logo.png" alt="Builder Logo" style={{ height: '32px', border: '1px solid rgba(255,255,255,0.4)', borderRadius: '6px', boxShadow: '0 0 10px rgba(255,255,255,0.2)' }} />
        </button>
        <nav>
          <button onClick={() => scrollTo('story')}>Story</button>
          <button onClick={() => scrollTo('system')}>System</button>
          <button className="nav-cta" onClick={() => scrollTo('contact')}>Start a project <span>↗</span></button>
        </nav>
      </header>

      <section id="top" className="hero">
        <div className="hero-sticky">
          <video
            ref={videoRef}
            className="videoLayer hero-video"
            src="/video/hero-scrub-1080p.mp4"
            muted
            playsInline
            preload="auto"
            aria-label="Aerial city footage"
          />
          <div className="hero-vignette" />
          <div className="hero-grid" />

          <div className="hero-copy">
            <h1>Built<br /><em>in motion.</em></h1>
            <p className="hero-sub">A cinematic web experience where the camera, architecture and interface move as one continuous system.</p>
            <div className="scroll-cue"><span>SCROLL TO MOVE THE CAMERA</span><i /></div>
          </div>
        </div>
      </section>

      <section id="story" className="manifesto section-light">
        <div className="section-index">00 — THE IDEA</div>
        <div className="manifesto-grid">
          <h2>Don&apos;t put the film<br /><span>behind the website.</span><br />Make it the website.</h2>
          <div className="manifesto-copy">
            <p>One source video. One uninterrupted camera journey. The interface is layered over it with restrained motion so every transition feels intentional.</p>
            <p className="small-note">The template avoids repeating the hero footage in cards or galleries. That keeps the visual language premium and prevents the same shot from becoming wallpaper.</p>
          </div>
        </div>
      </section>

      <section id="system" className="system section-dark">
        <div className="section-index">01 — MOTION SYSTEM</div>
        <div className="system-header">
          <h2>Three planes.<br /><em>One story.</em></h2>
          <p>Use the footage as a spatial anchor and let typography, labels and UI travel through different depth rates.</p>
        </div>
        <div className="chapter-list">
          {chapters.map((chapter) => (
            <article className="chapter" key={chapter.number}>
              <span>{chapter.number}</span>
              <div>
                <h3>{chapter.title}</h3>
                <p>{chapter.copy}</p>
              </div>
              <b>↗</b>
            </article>
          ))}
        </div>
      </section>

      <section className="statement section-light">
        <div className="statement-ring" aria-hidden="true" />
        <p className="eyebrow">THE RESULT</p>
        <h2>A landing page that feels like a camera move, not a slideshow.</h2>
        <div className="stat-row">
          <span>01 <b>VIDEO</b></span>
          <span>03 <b>DEPTH RATES</b></span>
          <span>00 <b>REPEATED IMAGES</b></span>
        </div>
      </section>

      <section id="contact" className="contact section-accent">
        <p className="eyebrow">NEXT FRAME</p>
        <h2>Turn your footage<br />into the interface.</h2>
        <button className="contact-button">Let&apos;s build it <span>↗</span></button>
        <footer>
          <span>CITYMOTION © 2026</span>
          <span>DESIGNED FOR CINEMATIC WEB</span>
        </footer>
      </section>
    </main>
  );
}
