'useclient';

import Link from 'next/link';
import { BUILDER_DATA } from '@/data/projects-data';

export default function ProjectNav({ projectName }) {
  const logo = BUILDER_DATA?.company?.logo || '/brand/nr-real-estate-logo.png';
  const brandName = BUILDER_DATA?.company?.name || 'NR Real Estate';

  return (
    <header className="project-nav-bar">
      <div className="project-nav-left">
        <Link href="/" className="project-nav-brand" aria-label="NR Real Estate Home">
          <img
            src={logo}
            alt={brandName}
            className="project-nav-logo"
          />
        </Link>
        {projectName ? (
          <div className="project-nav-breadcrumb" aria-hidden="true">
            <span className="crumb-sep">/</span>
            <span className="crumb-name">{projectName}</span>
          </div>
        ) : null}
      </div>

      <nav className="project-nav-links">
        <Link href="/">Home</Link>
        <Link href="/projects">Projects</Link>
        <a href="#contact" className="project-nav-cta">
          Book Visit <span>↓</span>
        </a>
      </nav>
    </header>
  );
}
