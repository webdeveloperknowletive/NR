import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import {
  BUILDER_DATA,
  getAllProjects,
  getProjectBySlug,
  getFeaturedProject,
  getProjectsByCategory,
  validateProjectsData
} from '../data/projects-data.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const publicDir = path.resolve(__dirname, '../public');

console.log('--- 1. VALIDATION ROUTINE CHECK ---');
const validationResult = validateProjectsData();
console.log('Projects count:', validationResult.projectCount);
console.log('Is valid:', validationResult.valid);
if (validationResult.errors.length > 0) {
  console.error('Validation Errors:', validationResult.errors);
} else {
  console.log('No validation errors found!');
}

console.log('\n--- 2. DATA HELPERS CHECK ---');
const allProjects = getAllProjects();
console.log('getAllProjects() count:', allProjects.length);

const featured = getFeaturedProject();
console.log('getFeaturedProject():', featured?.name, `(slug: ${featured?.slug})`);

const quill = getProjectBySlug('the-quill');
console.log('getProjectBySlug("the-quill"):', quill?.name);

const plotted = getProjectsByCategory('PLOTTED');
console.log('getProjectsByCategory("PLOTTED"):', plotted.map(p => p.name));

const residential = getProjectsByCategory('RESIDENTIAL');
console.log('getProjectsByCategory("RESIDENTIAL"):', residential.map(p => p.name));

console.log('\n--- 3. ASSET EXISTENCE AUDIT ---');
let missingAssets = [];
let existingAssetsCount = 0;

function checkAsset(relPath, projectContext, assetType) {
  if (!relPath) return;
  const fullPath = path.join(publicDir, relPath.replace(/^\//, ''));
  if (!fs.existsSync(fullPath)) {
    missingAssets.push({ project: projectContext, type: assetType, path: relPath });
  } else {
    existingAssetsCount++;
  }
}

// Check company logo
checkAsset(BUILDER_DATA.company?.logo, 'Company', 'logo');

// Check project assets
allProjects.forEach(project => {
  if (project.media?.logo) checkAsset(project.media.logo, project.name, 'logo');
  if (project.media?.hero) checkAsset(project.media.hero, project.name, 'hero');
  
  (project.media?.gallery || []).forEach(img => {
    checkAsset(img, project.name, 'gallery');
  });

  (project.media?.floorPlans || []).forEach(fp => {
    if (typeof fp === 'string') checkAsset(fp, project.name, 'floorPlan');
    else if (fp?.image) checkAsset(fp.image, project.name, 'floorPlan');
  });

  (project.media?.layouts || []).forEach(ly => {
    if (typeof ly === 'string') checkAsset(ly, project.name, 'layout');
    else if (ly?.image) checkAsset(ly.image, project.name, 'layout');
  });
});

console.log(`Assets checked on disk: ${existingAssetsCount} exist.`);
if (missingAssets.length === 0) {
  console.log('All referenced assets exist on disk in Project B public folder!');
} else {
  console.warn('Missing referenced assets:', missingAssets);
}

console.log('\n--- 4. PROJECTS SUMMARY ---');
allProjects.forEach((p, idx) => {
  console.log(`${idx + 1}. [${p.id}] ${p.name} (${p.classification?.category || p.classification?.type}) - Hero: ${p.media?.hero ? 'YES' : 'NO'}`);
});
