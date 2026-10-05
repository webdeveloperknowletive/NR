'use client';

import { useEffect, useRef, useState } from 'react';

const chapters = [
  {
    number: '01',
    title: 'Luxury Residential Towers',
    copy: 'Curated 2 BHK homes and high-rise living like The Quill and Beverly Hills, featuring earthquake-resistant AAC construction, branded lifestyle fittings, and panoramic rooftop leisure amenities.',
    link: '/projects/the-quill',
  },
  {
    number: '02',
    title: 'Sanctioned Plotted Communities',
    copy: 'Clear-title, government-approved N.A. bungalow and row house plots at High Street Park and Akshardham with 90m New Airport Road connectivity and complete utility infrastructure.',
    link: '/projects/high-street-park',
  },
  {
    number: '03',
    title: 'Commercial & Row Villa Enclaves',
    copy: 'High-visibility shopping destinations including Padmavati Arcade and Austin Tower, alongside private double-height architectural row villas at Sky Villas in Charholi.',
    link: '/projects',
  },
];

export default function Home() {
  const videoRef = useRef(null);
  const [scrolledNav, setScrolledNav] = useState(false);

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
    let isHeroInView = true;

    let isSeeking = false;
    let pendingSeekTime = null;

    const clamp01 = (value) => Math.min(1, Math.max(0, value));

    // Choose optimal video source: lightweight mobile video on small screens
    const isMobile = window.innerWidth <= 768;
    const desiredSrc = isMobile ? '/video/hero-scrub-mobile.mp4' : '/video/hero-scrub-1080p.mp4';
    
    // Fetch video as blob to prevent network stuttering during scrubbing
    if (video.dataset.blobSrc !== desiredSrc) {
      video.dataset.blobSrc = desiredSrc;
      
      // Cleanup previous blob URL if exists
      if (video.dataset.blobUrl) {
        URL.revokeObjectURL(video.dataset.blobUrl);
      }

      fetch(desiredSrc)
        .then(res => res.blob())
        .then(blob => {
          const objectUrl = URL.createObjectURL(blob);
          video.dataset.blobUrl = objectUrl;
          video.src = objectUrl;
          video.load();
        })
        .catch(err => {
          console.error('Failed to preload video blob', err);
          video.src = desiredSrc;
          video.load();
        });
    }

    const cacheGeometry = () => {
      const rect = hero.getBoundingClientRect();
      cachedHeroTop = window.scrollY + rect.top;
      cachedScrollDistance = Math.max(1, hero.offsetHeight - window.innerHeight);
    };

    const updateTarget = () => {
      const scrolled = window.scrollY;
      const traveled = Math.min(cachedScrollDistance, Math.max(0, scrolled - cachedHeroTop));
      targetProgress = clamp01(traveled / cachedScrollDistance);
    };

    // Hardware-accelerated seek queue: never abort in-flight seeks
    const performSeek = (targetTime) => {
      if (!ready || duration <= 0) return;
      const safeTime = Math.min(Math.max(0, targetTime), duration - 0.001);

      if (isSeeking) {
        pendingSeekTime = safeTime;
        return;
      }

      // Avoid redundant seeking if within 1 frame (~0.033s at 30fps)
      if (Math.abs(video.currentTime - safeTime) < 0.033) {
        return;
      }

      isSeeking = true;
      try {
        if ('fastSeek' in video) {
          video.fastSeek(safeTime);
        } else {
          video.currentTime = safeTime;
        }
      } catch {
        video.currentTime = safeTime;
      }
    };

    const onSeeked = () => {
      isSeeking = false;
      if (pendingSeekTime !== null) {
        const nextTime = pendingSeekTime;
        pendingSeekTime = null;
        performSeek(nextTime);
      }
    };

    video.addEventListener('seeked', onSeeked);

    // Pause heavy scrubbing when hero is out of screen viewport
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          isHeroInView = entry.isIntersecting;
        }
      },
      { rootMargin: '100px 0px' }
    );
    observer.observe(hero);

    const render = () => {
      if (!active) return;

      const diff = targetProgress - currentProgress;
      const absDiff = Math.abs(diff);

      if (isHeroInView || absDiff > 0.001) {
        if (targetProgress >= 0.995) {
          currentProgress = 1.0;
        } else if (targetProgress <= 0.005) {
          currentProgress = 0.0;
        } else if (absDiff > 0.0001) {
          currentProgress += diff * 0.16;
        } else {
          currentProgress = targetProgress;
        }

        document.documentElement.style.setProperty('--scroll-p', currentProgress.toFixed(5));

        if (ready && duration > 0) {
          performSeek(currentProgress * duration);
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

    const onScroll = () => {
      updateTarget();
      setScrolledNav(window.scrollY > 40);
    };

    const onResize = () => {
      cacheGeometry();
      updateTarget();
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onResize, { passive: true });

    // Initialize geometry immediately on mount so UI responds without waiting for video
    cacheGeometry();
    updateTarget();
    currentProgress = targetProgress;
    document.documentElement.style.setProperty('--scroll-p', currentProgress.toFixed(5));

    if (video.readyState >= 1) {
      onReady();
    }

    rafId = requestAnimationFrame(render);

    return () => {
      active = false;
      cancelAnimationFrame(rafId);
      observer.disconnect();
      video.pause();
      video.removeEventListener('loadedmetadata', onReady);
      video.removeEventListener('seeked', onSeeked);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onResize);
    };
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <main>
      <header className={`site-nav ${scrolledNav ? 'scrolled' : ''}`}>
        <button className="brand" onClick={() => scrollTo('top')} aria-label="Go to top">
          <img
            src="/image/builder-logo.png"
            alt="Builder Logo"
            style={{
              height: '32px',
              border: '1px solid rgba(255,255,255,0.4)',
              borderRadius: '6px',
              boxShadow: '0 0 10px rgba(255,255,255,0.2)',
            }}
          />
        </button>
        <nav>
          <button onClick={() => scrollTo('story')}>Vision</button>
          <button onClick={() => scrollTo('system')}>Portfolio</button>
          <a href="/projects" className="nav-link">Projects</a>
          <button className="nav-cta" onClick={() => scrollTo('contact')}>Book Visit <span>↗</span></button>
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
            {/* <h1>Built<br /><em>in motion.</em></h1> */}
            <h1>Foundation <br /><em> to future.</em></h1>
            <p className="hero-sub">Transforming traditional strengths into future successes</p>
            {/* <p className="hero-sub">A cinematic web experience where the camera, architecture and interface move as one continuous system.</p> */}
            <div className="scroll-cue"><span>SCROLL TO EXPLORE ARCHITECTURE</span><i /></div>
          </div>
        </div>
      </section>

      <section id="story" className="manifesto section-light">
        <div className="section-index">00 — THE VISION</div>
        <div className="manifesto-grid">
          <h2>Built on trust.<br /><span>Engineered for generations.</span><br />Crafting Pune&apos;s landmarks.</h2>
          <div className="manifesto-copy">
            <p>NR Real Estate is a premier real estate development firm in Pune &amp; PCMC, dedicated to building high-quality residential landmarks, luxury villas, and sanctioned plotted communities. With an unwavering commitment to earthquake-resistant AAC construction, architectural integrity, and clear titles, every square foot is crafted for enduring value.</p>
            <p className="small-note">From landmark 14-story residential towers in Wadmukhwadi to premium N.A. bungalow plots along Pune&apos;s 90m New Airport Road corridor, our developments turn aspirations into generational legacy.</p>
          </div>
        </div>
      </section>

      <section id="system" className="system section-dark">
        <div className="section-index">01 — PORTFOLIO PILLARS</div>
        <div className="system-header">
          <h2>Three realms.<br /><em>One standard.</em></h2>
          <p>A balanced portfolio spanning residential high-rises, sanctioned plotted land, and commercial landmarks across Pune&apos;s most promising growth corridors.</p>
        </div>
        <div className="chapter-list">
          {chapters.map((chapter) => (
            <a
              href={chapter.link || '/projects'}
              className="chapter"
              key={chapter.number}
              style={{ textDecoration: 'none', color: 'inherit' }}
            >
              <span>{chapter.number}</span>
              <div>
                <h3>{chapter.title}</h3>
                <p>{chapter.copy}</p>
              </div>
              <b>↗</b>
            </a>
          ))}
        </div>
      </section>

      <section className="statement section-light">
        <div className="statement-ring" aria-hidden="true" />
        <p className="eyebrow">THE TRACK RECORD</p>
        <h2>Delivering excellence across residential towers, commercial arcades, and plotted developments.</h2>
        <div className="stat-row">
          <span>10+ <b>LANDMARK PROJECTS</b></span>
          <span>100% <b>SANCTIONED TITLES</b></span>
          <span>500+ <b>DELIGHTED FAMILIES</b></span>
        </div>
      </section>

      <section id="contact" className="contact section-accent">
        <p className="eyebrow">CONNECT WITH NR REAL ESTATE</p>
        <h2>Find your dream home<br />or plotted investment.</h2>
        <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', marginTop: '12px', marginBottom: '32px' }}>
          <button
            className="contact-button"
            onClick={() => window.open('https://wa.me/918600333633?text=Hello%20NR%20Real%20Estate%2C%20I%20would%20like%20to%20schedule%20a%20site%20visit%20and%20enquire%20about%20your%20projects.', '_blank')}
          >
            Schedule Site Visit <span>↗</span>
          </button>
          <a
            href="/projects"
            className="contact-button"
            style={{ background: 'transparent', color: '#101010', border: '1.5px solid #101010', textDecoration: 'none', display: 'inline-flex', alignItems: 'center' }}
          >
            Explore All Projects <span>→</span>
          </a>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '24px', fontSize: '13.5px', lineHeight: 1.6, color: 'rgba(16, 16, 16, 0.78)', borderTop: '1px solid rgba(16, 16, 16, 0.15)', paddingTop: '28px', paddingBottom: '32px' }}>
          <div>
            <strong style={{ display: 'block', color: '#101010', marginBottom: '6px', fontFamily: "'DM Mono', monospace", fontSize: '10px', letterSpacing: '0.12em' }}>SALES &amp; CORPORATE OFFICE</strong>
            <span>Sr no 51/2, Tajnemala-chowisawadi road, Wadmukhwadi, Tal Haveli, Pune - 412105</span>
          </div>
          <div>
            <strong style={{ display: 'block', color: '#101010', marginBottom: '6px', fontFamily: "'DM Mono', monospace", fontSize: '10px', letterSpacing: '0.12em' }}>DIRECT ENQUIRY &amp; WHATSAPP</strong>
            <span>Phone: +91 86003 33633<br />Email: enquiry@thequill-pune.com</span>
          </div>
          <div>
            <strong style={{ display: 'block', color: '#101010', marginBottom: '6px', fontFamily: "'DM Mono', monospace", fontSize: '10px', letterSpacing: '0.12em' }}>MAHARERA REGISTRATION</strong>
            <span>Official MahaRERA filings &amp; verified title documentation available at sales office.</span>
          </div>
        </div>
        <footer>
          <div className="footer-line">
            <span>© 2026 NR Real Estate. All rights reserved.</span>
            <span>Powered by Knowletive Services</span>
          </div>
          <div className="footer-line footer-dpdp">
            <span>Digital Personal Data Protection (DPDP) Act, 2023 Compliant • User data is securely governed and processed solely with explicit consent.</span>
          </div>
        </footer>
      </section>
    </main>
  );
}
