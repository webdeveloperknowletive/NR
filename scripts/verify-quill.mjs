async function verifyHierarchy() {
  const res = await fetch('http://localhost:3005/projects/the-quill');
  console.log('HTTP Status:', res.status);
  const html = await res.text();
  const indexes = [...html.matchAll(/section-index[^>]*>([^<]+)</g)].map(m => m[1]);
  console.log('Detected Sections in Order:');
  indexes.forEach((name, i) => console.log(`  ${i + 1}. ${name}`));

  console.log('\nKey Component Assertions:');
  console.log('- Has Hero section #top:', html.includes('id="top"'));
  console.log('- Has Hero Title "The Quill":', html.includes('The Quill'));
  console.log('- Has verified logo path:', html.includes('/projects/the-quill/images/the-quill-logo.png'));
  console.log('- Has verified hero image:', html.includes('/projects/the-quill/images/the-quill-day-hero.jpg'));
  console.log('- Has explore CTA (#introduction):', html.includes('href="#introduction"'));
  console.log('- Has Intro section #introduction:', html.includes('id="introduction"'));
  console.log('- Has Architectural Story section #architecture:', html.includes('id="architecture"'));
  console.log('- Has Details section #details:', html.includes('id="details"'));
  console.log('- Has Floor Plan section #configuration:', html.includes('id="configuration"'));
  console.log('- Has Amenities section #amenities:', html.includes('id="amenities"'));
  console.log('- Has Day/Night section #daynight:', html.includes('id="daynight"'));
  console.log('- Has Location section #location:', html.includes('id="location"'));
  console.log('- Has Contact section #contact:', html.includes('id="contact"'));
  console.log('- Has Primary "BOOK A SITE VISIT" CTA:', html.includes('BOOK A SITE VISIT'));
  console.log('- Has verified WhatsApp URL:', html.includes('wa.me/918600333633'));
}
verifyHierarchy();
