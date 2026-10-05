import { BUILDER_DATA } from '@/data/projects-data';
import Link from 'next/link';

export default function Projects() {
  const companyLogo = BUILDER_DATA.company?.logo || '/brand/nr-real-estate-logo.png';

  return (
    <main className="projects-page section-light" style={{ minHeight: '100vh', paddingTop: '120px' }}>
      <header className="site-nav scrolled">
        <Link href="/" className="brand" aria-label="Go to top">
          <img src={companyLogo} alt={BUILDER_DATA.company?.name || 'NR Real Estate Logo'} style={{ height: '32px', border: '1px solid rgba(255,255,255,0.4)', borderRadius: '6px', boxShadow: '0 0 10px rgba(255,255,255,0.2)' }} />
        </Link>
        <nav>
          <Link href="/">Home</Link>
          <Link href="/projects">Projects</Link>
          <Link href="#contact" className="nav-cta">Contact <span>↗</span></Link>
        </nav>
      </header>
      
      <div className="projects-header">
        <p className="eyebrow">OUR PORTFOLIO</p>
        <h2>Featured Projects</h2>
      </div>

      <div className="projects-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 280px), 1fr))', gap: '30px', marginTop: '40px' }}>
        {BUILDER_DATA.projects.map(project => {
          const projectType = project.classification?.category || project.classification?.type || project.type || '';
          const projectLocation = typeof project.location === 'object' && project.location !== null
            ? [project.location.area, project.location.city].filter(Boolean).join(', ')
            : (project.location || '');

          return (
            <article key={project.id} className="project-card" style={{ display: 'flex', flexDirection: 'column' }}>
              <div style={{ background: '#eee', height: '250px', marginBottom: '20px', overflow: 'hidden', borderRadius: '8px' }}>
                {project.media?.hero ? (
                  <img
                    src={project.media.hero}
                    alt={project.name}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                ) : null}
              </div>
              <h3 style={{ fontSize: '24px', margin: '0 0 10px 0' }}>{project.name}</h3>
              <p style={{ margin: '0 0 5px 0', color: '#666' }}>{projectType}</p>
              <p style={{ margin: '0 0 20px 0', color: '#666' }}>{projectLocation}</p>
              <Link href={`/projects/${project.slug}`} style={{ display: 'inline-block', border: '1px solid #111', padding: '10px 20px', borderRadius: '30px', textDecoration: 'none', color: '#111', alignSelf: 'flex-start' }}>Explore Project <span>↗</span></Link>
            </article>
          );
        })}
      </div>

      <footer style={{ marginTop: '90px', paddingTop: '28px', borderTop: '1px solid rgba(16, 16, 16, 0.15)', display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '11px', color: '#555', fontFamily: "'DM Mono', monospace", letterSpacing: '0.08em' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '12px' }}>
          <span>© 2026 NR REAL ESTATE. ALL RIGHTS RESERVED.</span>
          <span>POWERED BY KNOWLETIVE SERVICES</span>
        </div>
        <div style={{ opacity: 0.72, fontSize: '9px' }}>
          DIGITAL PERSONAL DATA PROTECTION (DPDP) ACT, 2023 COMPLIANT • SECURE DATA GOVERNANCE &amp; USER PRIVACY ASSURED
        </div>
      </footer>
    </main>
  );
}
