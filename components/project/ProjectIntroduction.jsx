export default function ProjectIntroduction({ project }) {
  if (!project) return null;

  const tagline = project.content?.tagline;
  const shortDescription = project.content?.shortDescription;
  const overview = project.content?.overview;

  if (!tagline && !shortDescription && !overview) {
    return null;
  }

  // Verified facts only
  const facts = [
    { label: 'PROJECT TYPE', value: project.classification?.type },
    { label: 'CATEGORY', value: project.classification?.category },
    { label: 'LOCATION', value: [project.location?.area, project.location?.city].filter(Boolean).join(', ') },
    { label: 'STRUCTURE', value: project.classification?.structure },
    { label: 'STATUS', value: project.classification?.status },
  ].filter(f => Boolean(f.value));

  return (
    <section className="project-section project-intro-section" id="introduction">
      <div className="section-index">02 — PROJECT INTRODUCTION</div>

      <div className="intro-editorial-container">
        <div className="intro-headline-block">
          {tagline ? <h2 className="intro-tagline-lead">{tagline}</h2> : null}
          {shortDescription ? (
            <p className="intro-short-description">{shortDescription}</p>
          ) : null}
        </div>

        {overview ? (
          <div className="intro-overview-narrative">
            <p>{overview}</p>
          </div>
        ) : null}

        {facts.length > 0 ? (
          <div className="intro-facts-strip">
            {facts.map((fact, idx) => (
              <div key={`${fact.label}-${idx}`} className="intro-fact-col">
                <span className="fact-label">{fact.label}</span>
                <span className="fact-value">{fact.value}</span>
              </div>
            ))}
          </div>
        ) : null}
      </div>
    </section>
  );
}
