'use client';

import { useState } from 'react';

export default function ProjectDayNight({ project }) {
  if (!project) return null;

  const videoSrc = project.media?.videos?.dayToNight;

  // Day & Night images from project data or gallery inspection
  const gallery = project.media?.gallery || [];
  const dayImage =
    project.media?.dayImage ||
    gallery.find((img) => img.includes('day')) ||
    project.media?.hero ||
    (gallery.length > 0 ? gallery[0] : null);

  const rawNightImage =
    project.media?.nightImage ||
    gallery.find((img) => img.includes('night'));

  const hasDedicatedNight = Boolean(rawNightImage && rawNightImage.trim() !== '');
  const nightImage = hasDedicatedNight ? rawNightImage : dayImage;

  const [activeMode, setActiveMode] = useState(hasDedicatedNight ? 'night' : 'day');

  const hasVideo = Boolean(videoSrc && videoSrc.trim() !== '');
  const hasImages = Boolean(dayImage || nightImage);

  if (!hasVideo && !hasImages) {
    return null;
  }

  const projectName = project.name || 'Project';

  return (
    <section className="project-section project-daynight-section" id="daynight">
      <div className="section-index">07 — LIGHT & SHADOW</div>

      <div className="daynight-header">
        <h2 className="daynight-main-title">Day To Night Architectural Presence</h2>
        <p className="daynight-sub">
          Witness the tower transformation from radiant daylight to sculpted nocturnal illumination.
        </p>

        {/* Toggle switch between Day & Night when images are used */}
        {!hasVideo && (dayImage || nightImage) ? (
          <div className="daynight-toggle-group">
            <button
              type="button"
              onClick={() => setActiveMode('day')}
              className={`daynight-toggle-btn ${activeMode === 'day' ? 'active' : ''}`}
            >
              DAY PERSPECTIVE
            </button>
            <button
              type="button"
              onClick={() => setActiveMode('night')}
              className={`daynight-toggle-btn ${activeMode === 'night' ? 'active' : ''}`}
            >
              NIGHT ILLUMINATION
            </button>
          </div>
        ) : null}
      </div>

      <div className="daynight-stage">
        {hasVideo ? (
          /* When video is supplied, render the video element directly */
          <div className="daynight-video-wrapper">
            <video
              src={videoSrc}
              autoPlay
              muted
              loop
              playsInline
              className="daynight-video-player"
            />
          </div>
        ) : (
          /* Dynamic Image Comparison Stage */
          <div className="daynight-image-canvas">
            {dayImage ? (
              <img
                src={dayImage}
                alt={`${projectName} Day Elevation`}
                className={`daynight-layer daynight-day-layer ${
                  activeMode === 'day' ? 'visible' : 'hidden'
                }`}
                loading="lazy"
              />
            ) : null}

            {nightImage ? (
              <img
                src={nightImage}
                alt={`${projectName} Night Illumination`}
                className={`daynight-layer daynight-night-layer ${
                  activeMode === 'night' ? 'visible' : 'hidden'
                }`}
                style={
                  !hasDedicatedNight
                    ? { filter: 'brightness(0.48) contrast(1.2) saturate(1.2) hue-rotate(195deg)' }
                    : undefined
                }
                loading="lazy"
              />
            ) : null}

            {!hasDedicatedNight && activeMode === 'night' ? (
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  background:
                    'radial-gradient(circle at 50% 40%, rgba(30, 45, 85, 0.4) 0%, rgba(5, 10, 22, 0.75) 100%)',
                  mixBlendMode: 'multiply',
                  pointerEvents: 'none',
                  zIndex: 2,
                }}
              />
            ) : null}

            <div className="daynight-indicator-badge">
              <span className="indicator-pulse" />
              <span>
                {activeMode === 'day' ? 'NATURAL SUNLIGHT FACADE' : 'TWILIGHT & AMBIENT FACADE LIGHTING'}
              </span>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
