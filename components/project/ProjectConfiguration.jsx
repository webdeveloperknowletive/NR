export default function ProjectConfiguration({ project }) {
  if (!project) return null;

  const configs = project.configuration;
  if (!Array.isArray(configs) || configs.length === 0) {
    return null;
  }

  return (
    <section className="project-section project-config-section">
      <div className="section-index">03 — CONFIGURATION & UNITS</div>
      <h2 className="section-title">Unit Typologies & Layouts</h2>

      <div className="config-grid">
        {configs.map((configItem, idx) => {
          const type = configItem.type || 'Configuration';
          const unitsOrWings = configItem.wings || configItem.units;
          const features = configItem.features;
          const planImage = configItem.planImage;

          return (
            <div key={`${type}-${idx}`} className="config-card">
              <span className="config-badge">TYPOLOGY {idx + 1}</span>
              <h3 className="config-title">{type}</h3>

              {unitsOrWings ? (
                <div className="config-units">{unitsOrWings}</div>
              ) : null}

              {features ? (
                <p className="config-features">{features}</p>
              ) : null}

              {planImage ? (
                <div className="config-plan-img-wrap">
                  <img
                    src={planImage}
                    alt={`${project.name || 'Project'} — ${type} Plan`}
                    className="config-plan-img"
                    loading="lazy"
                  />
                </div>
              ) : null}
            </div>
          );
        })}
      </div>
    </section>
  );
}
