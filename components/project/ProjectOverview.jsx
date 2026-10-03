export default function ProjectOverview({ project }) {
  if (!project) return null;

  const tagline = project.content?.tagline;
  const shortDescription = project.content?.shortDescription;
  const overview = project.content?.overview;

  // If no content exists at all, do not render an empty section
  if (!tagline && !shortDescription && !overview) {
    return null;
  }

  const category = project.classification?.category || project.classification?.type;
  const status = project.classification?.status;
  const address = project.location?.address;

  return (
    <section className="project-section project-overview">
      <div className="section-index">01 — OVERVIEW</div>

      <div className="project-overview-grid">
        <div className="overview-content-col">
          {tagline ? <h2 className="section-title">{tagline}</h2> : null}
          {shortDescription ? (
            <p className="overview-lead">{shortDescription}</p>
          ) : null}
          {overview ? <p className="overview-body">{overview}</p> : null}
        </div>

        <div className="overview-sidebar-col">
          <div className="overview-meta-card">
            <h4>Quick Facts</h4>
            <div className="overview-meta-list">
              <div className="overview-meta-row">
                <span>Project Name</span>
                <span>{project.name}</span>
              </div>
              {category ? (
                <div className="overview-meta-row">
                  <span>Classification</span>
                  <span>{category}</span>
                </div>
              ) : null}
              {status ? (
                <div className="overview-meta-row">
                  <span>Current Status</span>
                  <span>{status}</span>
                </div>
              ) : null}
              {address ? (
                <div className="overview-meta-row">
                  <span>Site Address</span>
                  <span>{address}</span>
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
