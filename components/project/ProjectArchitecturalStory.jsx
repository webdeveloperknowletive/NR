export default function ProjectArchitecturalStory({ project }) {
  if (!project) return null;

  const rawGallery = project.media?.gallery || [];
  const uniqueImages = Array.from(new Set(rawGallery.filter(Boolean)));

  if (uniqueImages.length === 0) {
    return null;
  }

  const projectName = project.name || 'Project';
  const primaryImage = uniqueImages[0];
  const secondaryImages = uniqueImages.slice(1);

  return (
    <section className="project-section project-arch-story-section" id="architecture">
      <div className="section-index">03 — ARCHITECTURAL STORY</div>

      <div className="arch-story-header">
        <h2 className="arch-story-title">Crafted In Concrete & Light.</h2>
        <p className="arch-story-subtitle">
          Designed with geometric clarity and structural discipline. Every angle reflects earthquake-resistant engineering, optimal natural illumination, and elevated spatial proportion.
        </p>
      </div>

      {/* Featured Primary Panoramic Canvas */}
      <div className="arch-story-featured-wrap">
        <div className="arch-story-frame">
          <img
            src={primaryImage}
            alt={`${projectName} — Architectural Primary Elevation`}
            className="arch-story-img"
            loading="lazy"
          />
        </div>
        <div className="arch-story-caption-bar">
          <span className="caption-tag">PRIMARY PERSPECTIVE</span>
          <span className="caption-desc">{projectName} — Day Elevation & Landscaped Entry</span>
        </div>
      </div>

      {/* Sequential Editorial Angle Cards */}
      {secondaryImages.length > 0 ? (
        <div className="arch-story-sequence-grid">
          {secondaryImages.map((imgSrc, idx) => {
            const angleNum = String(idx + 2).padStart(2, '0');
            return (
              <div key={`${imgSrc}-${idx}`} className="arch-story-card">
                <div className="arch-card-frame">
                  <img
                    src={imgSrc}
                    alt={`${projectName} — Architectural Angle ${angleNum}`}
                    className="arch-card-img"
                    loading="lazy"
                  />
                </div>
                <div className="arch-card-meta">
                  <span className="arch-card-num">{angleNum}</span>
                  <span className="arch-card-label">PERSPECTIVE ANGLE</span>
                </div>
              </div>
            );
          })}
        </div>
      ) : null}
    </section>
  );
}
