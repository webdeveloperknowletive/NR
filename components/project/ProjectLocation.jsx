export default function ProjectLocation({ project }) {
  if (!project) return null;

  const city = project.location?.city;
  const area = project.location?.area;
  const address = project.location?.address;
  const connectivity = Array.isArray(project.connectivity) ? project.connectivity : [];

  const hasLocation = city || area || address;
  const hasConnectivity = connectivity.length > 0;

  if (!hasLocation && !hasConnectivity) {
    return null;
  }

  return (
    <section className="project-section project-location-section" id="location">
      <div className="section-index">08 — LOCATION & STRATEGIC CONNECTIVITY</div>

      <div className="location-header">
        <h2 className="location-main-title">Connected To Pune&apos;s Growth Corridor</h2>
        <p className="location-sub">
          Strategically positioned with seamless access to Pune International Airport, major IT clusters, and premier schools.
        </p>
      </div>

      <div className="location-editorial-layout">
        {/* Address Card */}
        {hasLocation ? (
          <div className="location-address-panel">
            <span className="location-panel-label">OFFICIAL SITE ADDRESS</span>
            {area ? <h3 className="location-area-name">{area}{city ? `, ${city}` : ''}</h3> : null}
            {address ? <p className="location-exact-address">{address}</p> : null}
          </div>
        ) : null}

        {/* Connectivity Distance Groups */}
        {hasConnectivity ? (
          <div className="location-connectivity-groups">
            {connectivity.map((group, idx) => (
              <div key={`${group.category}-${idx}`} className="connectivity-group-box">
                <h4 className="connectivity-category-label">{group.category}</h4>
                <div className="connectivity-items-grid">
                  {(group.points || []).map((point, pIdx) => (
                    <div key={`${point.place}-${pIdx}`} className="connectivity-item-row">
                      <span className="point-name">{point.place}</span>
                      {point.dist ? <span className="point-distance">{point.dist}</span> : null}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        ) : null}
      </div>
    </section>
  );
}
