export default function ProjectAmenities({ project }) {
  if (!project) return null;

  const rawAmenities = project.amenities;
  if (!Array.isArray(rawAmenities) || rawAmenities.length === 0) {
    return null;
  }

  // Parse items into normalized objects
  const normalized = rawAmenities.map((item) => {
    if (typeof item === 'string') {
      return { title: item, category: 'General', description: null };
    }
    return {
      title: item.title || item.name || 'Amenity',
      category: item.category || 'General',
      description: item.description || item.desc || null,
    };
  });

  // Group into Rooftop vs Community / Infrastructure if multiple categories exist
  const rooftopAmenities = normalized.filter((a) => a.category.toLowerCase().includes('rooftop'));
  const otherAmenities = normalized.filter((a) => !a.category.toLowerCase().includes('rooftop'));

  return (
    <section className="project-section project-amenities-section" id="amenities">
      <div className="section-index">06 — AMENITIES & LIFESTYLE</div>

      <div className="amenities-header">
        <h2 className="amenities-main-title">Curated Spaces For Modern Living</h2>
        <p className="amenities-sub">
          Every amenity is architecturally planned to foster wellness, community celebration, and effortless daily comfort.
        </p>
      </div>

      {/* Rooftop Leisure Amenities */}
      {rooftopAmenities.length > 0 ? (
        <div className="amenities-category-block">
          <div className="amenities-cat-header">
            <span className="cat-pill-badge">EXCLUSIVE SKY DECK</span>
            <h3 className="cat-heading">Curated Rooftop Leisure Deck</h3>
          </div>

          <div className="amenities-editorial-list">
            {rooftopAmenities.map((item, idx) => (
              <div key={`${item.title}-${idx}`} className="amenity-editorial-row">
                <span className="amenity-num">{String(idx + 1).padStart(2, '0')}</span>
                <div className="amenity-info">
                  <h4 className="amenity-name">{item.title}</h4>
                  {item.description ? (
                    <p className="amenity-desc">{item.description}</p>
                  ) : null}
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : null}

      {/* Community & Infrastructure Amenities */}
      {otherAmenities.length > 0 ? (
        <div className="amenities-category-block">
          <div className="amenities-cat-header">
            <span className="cat-pill-badge">INFRASTRUCTURE & COMMUNITY</span>
            <h3 className="cat-heading">Essential Safety, Eco & Convenience Systems</h3>
          </div>

          <div className="amenities-editorial-grid">
            {otherAmenities.map((item, idx) => {
              const displayIndex = String(idx + 1 + rooftopAmenities.length).padStart(2, '0');
              return (
                <div key={`${item.title}-${idx}`} className="amenity-grid-item">
                  <div className="amenity-grid-top">
                    <span className="amenity-grid-num">{displayIndex}</span>
                    <span className="amenity-grid-cat">{item.category}</span>
                  </div>
                  <h4 className="amenity-grid-title">{item.title}</h4>
                  {item.description ? (
                    <p className="amenity-grid-desc">{item.description}</p>
                  ) : null}
                </div>
              );
            })}
          </div>
        </div>
      ) : null}
    </section>
  );
}
