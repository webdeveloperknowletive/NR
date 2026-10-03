export default function ProjectHero({ project }) {
  if (!project) return null;

  const heroImage = project.media?.hero;
  const logo = project.media?.logo;
  const name = project.name || 'Project';
  const category = project.classification?.category || project.classification?.type;
  const status = project.classification?.status;
  const tagline = project.content?.tagline;

  const locationText = [
    project.location?.area,
    project.location?.city
  ].filter(Boolean).join(', ');

  return (
    <section className="project-hero" id="top">
      {heroImage ? (
        <div className="project-hero-bg">
          <img
            src={heroImage}
            alt={`${name} Architectural Elevation`}
            className="project-hero-img"
            fetchPriority="high"
          />
          <div className="project-hero-overlay" />
        </div>
      ) : (
        <div className="project-hero-bg">
          <div className="project-hero-overlay" />
        </div>
      )}

      <div className="project-hero-container">
        <div className="project-hero-meta-top">
          {category ? <span className="hero-pill-badge">{category}</span> : null}
          {status ? <span className="hero-pill-badge hero-pill-status">{status}</span> : null}
          {locationText ? <span className="hero-pill-badge hero-pill-loc">{locationText}</span> : null}
        </div>

        {logo ? (
          <div className="project-hero-brand-wrap">
            <img
              src={logo}
              alt={`${name} Logo`}
              className="project-hero-logo"
            />
          </div>
        ) : null}

        <h1 className="project-hero-title">{name}</h1>

        {tagline ? <p className="project-hero-tagline">{tagline}</p> : null}

        <div className="project-hero-action-bar">
          <a href="#introduction" className="btn-hero-explore">
            <span>EXPLORE PROJECT</span>
            <span className="hero-explore-arrow">↓</span>
          </a>
        </div>
      </div>
    </section>
  );
}
