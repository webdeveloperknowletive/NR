export default function ProjectRera({ project }) {
  if (!project || !project.rera) return null;

  const reraNumber = project.rera.number;
  const reraDetails = project.rera.details;

  // If both number and details are empty, hide the section
  if (!reraNumber && !reraDetails) {
    return null;
  }

  return (
    <section className="project-section project-rera-section">
      <div className="section-index">07 — REGULATORY DISCLOSURE</div>
      <div className="rera-container">
        <h3 className="rera-title">MahaRERA Statutory Compliance</h3>
        
        {reraNumber ? (
          <div className="rera-number-pill">
            Registration No: <strong>{reraNumber}</strong>
          </div>
        ) : null}

        {reraDetails ? (
          <p className="rera-text">{reraDetails}</p>
        ) : null}
      </div>
    </section>
  );
}
