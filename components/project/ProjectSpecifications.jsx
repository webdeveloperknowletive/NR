export default function ProjectSpecifications({ project }) {
  if (!project || !project.specifications || typeof project.specifications !== 'object') {
    return null;
  }

  const specGroupsConfig = [
    { key: 'structure', label: 'Structure & Walls', items: project.specifications.structure },
    { key: 'flooring', label: 'Flooring & Tiling', items: project.specifications.flooring },
    { key: 'doorsWindows', label: 'Doors & Windows', items: project.specifications.doorsWindows },
    { key: 'kitchen', label: 'Kitchen & Plumbing', items: project.specifications.kitchen },
    { key: 'electrical', label: 'Electrical & Painting', items: project.specifications.electrical },
    { key: 'other', label: 'Utilities & Other Infrastructure', items: project.specifications.other }
  ];

  // Filter groups that strictly contain actual non-empty arrays
  const activeGroups = specGroupsConfig.filter(
    group => Array.isArray(group.items) && group.items.length > 0
  );

  if (activeGroups.length === 0) {
    return null;
  }

  return (
    <section className="project-section project-specs-section">
      <div className="section-index">05 — SPECIFICATIONS</div>
      <h2 className="section-title">Materials & Build Quality</h2>

      <div className="specs-grid">
        {activeGroups.map((group) => (
          <div key={group.key} className="spec-group-card">
            <h3 className="spec-group-title">{group.label}</h3>
            <ul className="spec-items-list">
              {group.items.map((item, idx) => (
                <li key={`${group.key}-${idx}`}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
