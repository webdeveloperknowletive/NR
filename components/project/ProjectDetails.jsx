export default function ProjectDetails({ project }) {
  if (!project) return null;

  const specifications = project.specifications || {};
  const specGroupsConfig = [
    { key: 'structure', label: 'Structure & Walls', items: specifications.structure },
    { key: 'flooring', label: 'Flooring & Tiling', items: specifications.flooring },
    { key: 'doorsWindows', label: 'Doors & Windows', items: specifications.doorsWindows },
    { key: 'kitchen', label: 'Kitchen & Plumbing', items: specifications.kitchen },
    { key: 'electrical', label: 'Electrical & Painting', items: specifications.electrical },
    { key: 'other', label: 'Utilities & General Infrastructure', items: specifications.other },
  ];

  const activeSpecGroups = specGroupsConfig.filter(
    (group) => Array.isArray(group.items) && group.items.length > 0
  );

  const consultants = Array.isArray(project.consultants) ? project.consultants : [];
  const reraDetails = project.rera?.details;
  const reraNumber = project.rera?.number;

  const hasContent = activeSpecGroups.length > 0 || consultants.length > 0 || reraDetails || reraNumber;
  if (!hasContent) {
    return null;
  }

  return (
    <section className="project-section project-details-section" id="details">
      <div className="section-index">04 — PROJECT DETAILS</div>

      <div className="details-header">
        <h2 className="details-main-title">Engineering & Project Credits</h2>
        <p className="details-sub">
          Full statutory transparency, structural engineering standards, and verified architectural partners.
        </p>
      </div>

      {/* Specifications Technical Grid */}
      {activeSpecGroups.length > 0 ? (
        <div className="details-specs-container">
          <h3 className="details-block-heading">Structural & Material Specifications</h3>
          <div className="details-specs-grid">
            {activeSpecGroups.map((group) => (
              <div key={group.key} className="details-spec-card">
                <h4 className="details-spec-group-title">{group.label}</h4>
                <ul className="details-spec-list">
                  {group.items.map((item, idx) => (
                    <li key={`${group.key}-${idx}`}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      ) : null}

      {/* Project Credits & Consultants */}
      {consultants.length > 0 ? (
        <div className="details-consultants-container">
          <h3 className="details-block-heading">Architectural & Engineering Credits</h3>
          <div className="details-consultants-grid">
            {consultants.map((credit, idx) => (
              <div key={`${credit.role}-${idx}`} className="details-consultant-card">
                <span className="consultant-role">{credit.role}</span>
                <strong className="consultant-name">{credit.name}</strong>
                {credit.contact ? (
                  <span className="consultant-contact">{credit.contact}</span>
                ) : null}
              </div>
            ))}
          </div>
        </div>
      ) : null}

      {/* MahaRERA Compliance Card */}
      {reraDetails || reraNumber ? (
        <div className="details-rera-box">
          <div className="details-rera-badge">STATUTORY DISCLOSURE</div>
          <h4>Maharashtra Real Estate Regulatory Authority (MahaRERA)</h4>
          {reraNumber ? (
            <div className="details-rera-num">
              Registration No: <strong>{reraNumber}</strong>
            </div>
          ) : null}
          {reraDetails ? <p className="details-rera-desc">{reraDetails}</p> : null}
        </div>
      ) : null}
    </section>
  );
}
