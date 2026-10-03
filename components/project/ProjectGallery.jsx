export default function ProjectGallery({ project }) {
  if (!project) return null;

  const rawGallery = project.media?.gallery;
  if (!Array.isArray(rawGallery) || rawGallery.length === 0) {
    return null;
  }

  // Deduplicate and filter out any empty strings
  const uniqueImages = Array.from(new Set(rawGallery.filter(Boolean)));

  if (uniqueImages.length === 0) {
    return null;
  }

  return (
    <section className="project-section project-gallery-section">
      <div className="section-index">02 — VISUAL GALLERY</div>
      <h2 className="section-title">Architectural Perspectives</h2>

      <div className="gallery-grid">
        {uniqueImages.map((imgSrc, idx) => (
          <div key={`${imgSrc}-${idx}`} className="gallery-card">
            <img
              src={imgSrc}
              alt={`${project.name || 'Project'} — Visual Perspective ${idx + 1}`}
              className="gallery-img"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
