'use client';

import { useState } from 'react';

export default function ProjectFloorPlan({ project }) {
  if (!project) return null;

  const configurations = Array.isArray(project.configuration) ? project.configuration : [];
  const floorPlans = Array.isArray(project.media?.floorPlans) ? project.media.floorPlans : [];
  const layouts = Array.isArray(project.media?.layouts) ? project.media.layouts : [];

  // Combine architectural plan assets
  const allPlans = [
    ...floorPlans.map((fp) => ({
      title: fp.title || 'Unit Cut-Section Plan',
      image: typeof fp === 'string' ? fp : fp.image,
      description: fp.description || '',
      type: 'Unit Plan',
    })),
    ...layouts.map((ly) => ({
      title: ly.title || 'Layout Scheme Plan',
      image: typeof ly === 'string' ? ly : ly.image,
      description: ly.description || '',
      type: 'Layout Plan',
    })),
  ].filter((p) => Boolean(p.image));

  const [activePlanIndex, setActivePlanIndex] = useState(0);

  const hasConfig = configurations.length > 0;
  const hasPlans = allPlans.length > 0;

  if (!hasConfig && !hasPlans) {
    return null;
  }

  const currentPlan = allPlans[activePlanIndex] || allPlans[0];

  return (
    <section className="project-section project-floorplan-section" id="configuration">
      <div className="section-index">05 — CONFIGURATION & FLOOR PLANS</div>

      <div className="floorplan-header">
        <h2 className="floorplan-main-title">Spatial Planning & Layouts</h2>
        <p className="floorplan-sub">
          Engineered for optimal cross-ventilation, expansive natural daylight, and zero space wastage.
        </p>
      </div>

      {/* Configuration Typologies Grid */}
      {hasConfig ? (
        <div className="floorplan-configs-grid">
          {configurations.map((cfg, idx) => (
            <div key={`${cfg.type}-${idx}`} className="floorplan-config-card">
              <span className="cfg-type-pill">TYPOLOGY {idx + 1}</span>
              <h3 className="cfg-name">{cfg.type}</h3>
              {cfg.wings || cfg.units ? (
                <div className="cfg-wings-badge">{cfg.wings || cfg.units}</div>
              ) : null}
              {cfg.features ? <p className="cfg-features-text">{cfg.features}</p> : null}
            </div>
          ))}
        </div>
      ) : null}

      {/* Architectural Plan Presentation Area */}
      {hasPlans ? (
        <div className="floorplan-viewer-container">
          <div className="floorplan-nav-row">
            <span className="floorplan-nav-label">ARCHITECTURAL SCHEMATICS:</span>
            <div className="floorplan-tab-buttons">
              {allPlans.map((plan, idx) => (
                <button
                  type="button"
                  key={`${plan.title}-${idx}`}
                  onClick={() => setActivePlanIndex(idx)}
                  className={`floorplan-tab-btn ${idx === activePlanIndex ? 'active' : ''}`}
                >
                  {plan.title}
                </button>
              ))}
            </div>
          </div>

          <div className="floorplan-canvas-frame">
            <img
              src={currentPlan.image}
              alt={currentPlan.title}
              className="floorplan-canvas-img"
              loading="lazy"
            />
          </div>

          {currentPlan.description ? (
            <div className="floorplan-caption-bar">
              <span className="caption-dot" />
              <p className="floorplan-caption-text">{currentPlan.description}</p>
            </div>
          ) : null}
        </div>
      ) : null}
    </section>
  );
}
