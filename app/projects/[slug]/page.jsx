import { notFound } from 'next/navigation';
import { getAllProjects, getProjectBySlug } from '@/data/projects-data';

import '@/components/project/project.css';
import ProjectNav from '@/components/project/ProjectNav';
import ProjectHero from '@/components/project/ProjectHero';
import ProjectIntroduction from '@/components/project/ProjectIntroduction';
import ProjectArchitecturalStory from '@/components/project/ProjectArchitecturalStory';
import ProjectDetails from '@/components/project/ProjectDetails';
import ProjectFloorPlan from '@/components/project/ProjectFloorPlan';
import ProjectAmenities from '@/components/project/ProjectAmenities';
import ProjectDayNight from '@/components/project/ProjectDayNight';
import ProjectLocation from '@/components/project/ProjectLocation';
import ProjectCTA from '@/components/project/ProjectCTA';

/**
 * Generate static paths for all valid project slugs
 */
export async function generateStaticParams() {
  const projects = getAllProjects();
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

/**
 * Generate dynamic metadata for the project
 */
export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const slug = resolvedParams?.slug;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {
      title: 'Project Not Found | NR Real Estate',
    };
  }

  return {
    title: `${project.name} | NR Real Estate Pune`,
    description:
      project.content?.shortDescription ||
      project.content?.tagline ||
      `${project.name} - Verified residential & plotted community in Pune by NR Real Estate`,
  };
}

/**
 * Master dynamic project detail page component
 * Renders the exact visual flow:
 * 01 — PROJECT HERO
 * 02 — PROJECT INTRODUCTION
 * 03 — ARCHITECTURAL STORY
 * 04 — PROJECT DETAILS
 * 05 — CONFIGURATION / FLOOR PLAN
 * 06 — AMENITIES
 * 07 — DAY / NIGHT CINEMATIC SECTION
 * 08 — LOCATION / CONNECTIVITY
 * 09 — CONTACT / BOOK SITE VISIT
 */
export default async function ProjectDetailPage({ params }) {
  const resolvedParams = await params;
  const slug = resolvedParams?.slug;

  if (!slug) {
    notFound();
  }

  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="project-page">
      <ProjectNav projectName={project.name} />

      {/* 01 — PROJECT HERO */}
      <ProjectHero project={project} />

      {/* 02 — PROJECT INTRODUCTION */}
      <ProjectIntroduction project={project} />

      {/* 03 — ARCHITECTURAL STORY */}
      <ProjectArchitecturalStory project={project} />

      {/* 04 — PROJECT DETAILS */}
      <ProjectDetails project={project} />

      {/* 05 — CONFIGURATION / FLOOR PLAN */}
      <ProjectFloorPlan project={project} />

      {/* 06 — AMENITIES */}
      <ProjectAmenities project={project} />

      {/* 07 — DAY / NIGHT CINEMATIC SECTION */}
      <ProjectDayNight project={project} />

      {/* 08 — LOCATION / CONNECTIVITY */}
      <ProjectLocation project={project} />

      {/* 09 — CONTACT / BOOK SITE VISIT */}
      <ProjectCTA project={project} />
    </main>
  );
}
