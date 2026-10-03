import { BUILDER_DATA } from '@/data/projects-data';

export default function ProjectCTA({ project }) {
  if (!project) return null;

  const contact = BUILDER_DATA?.company?.contact || {};
  const phone = contact.phone;
  const whatsapp = contact.whatsapp;
  const email = contact.email;
  const address = contact.address;

  const actions = project.actions || {};
  const hasSiteVisit = Boolean(actions.siteVisit);
  const brochure = actions.brochure;
  const costSheet = actions.costSheet;

  const projectName = project.name || 'Project';

  // Direct WhatsApp links with prefilled intent
  const whatsappSiteVisitUrl = whatsapp
    ? `https://wa.me/${whatsapp}?text=${encodeURIComponent(
        `Hello NR Real Estate, I would like to schedule a private site visit for ${projectName}.`
      )}`
    : null;

  const whatsappGeneralUrl = whatsapp
    ? `https://wa.me/${whatsapp}?text=${encodeURIComponent(
        `Hello NR Real Estate, I am interested in ${projectName} and would like official details and pricing.`
      )}`
    : null;

  const telUrl = phone ? `tel:${phone.replace(/\s+/g, '')}` : null;
  const mailtoUrl = email ? `mailto:${email}?subject=${encodeURIComponent(`Enquiry for ${projectName} - NR Real Estate`)}` : null;

  return (
    <section className="project-section project-cta-section" id="contact">
      <div className="section-index">09 — CONCIERGE & SITE VISITS</div>

      <div className="cta-editorial-body">
        <h2 className="cta-headline">Experience {projectName} In Person.</h2>
        <p className="cta-lead">
          Schedule an accompanied site inspection with our senior architectural sales advisors. Review sanctioned layouts, construction progress, and tailored payment schedules.
        </p>

        <div className="cta-button-group">
          {/* Primary Action: Book Site Visit */}
          {hasSiteVisit && whatsappSiteVisitUrl ? (
            <a
              href={whatsappSiteVisitUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-cta-master"
            >
              BOOK A SITE VISIT <span>↗</span>
            </a>
          ) : null}

          {/* Secondary Action: WhatsApp Enquiry */}
          {whatsappGeneralUrl ? (
            <a
              href={whatsappGeneralUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-cta-secondary"
            >
              WhatsApp Desk <span>↗</span>
            </a>
          ) : null}

          {/* Secondary Action: Direct Telephone */}
          {telUrl ? (
            <a href={telUrl} className="btn-cta-secondary">
              Call {phone} <span>↗</span>
            </a>
          ) : null}

          {/* Email Enquiry */}
          {mailtoUrl ? (
            <a href={mailtoUrl} className="btn-cta-secondary">
              Email Developer <span>↗</span>
            </a>
          ) : null}

          {/* Brochure if available */}
          {brochure ? (
            <a
              href={brochure}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-cta-secondary"
            >
              Official Brochure <span>↓</span>
            </a>
          ) : null}

          {/* Cost Sheet if available */}
          {costSheet ? (
            <a
              href={costSheet}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-cta-secondary"
            >
              Official Cost Sheet <span>↓</span>
            </a>
          ) : null}
        </div>
      </div>

      <div className="cta-footer-strip">
        <div className="cta-footer-col">
          <span className="footer-tag">DEVELOPER</span>
          <strong>{BUILDER_DATA?.company?.name || 'NR Real Estate'}</strong>
        </div>
        {address ? (
          <div className="cta-footer-col">
            <span className="footer-tag">SALES HEADQUARTERS</span>
            <span>{address}</span>
          </div>
        ) : null}
        <div className="cta-footer-col">
          <span className="footer-tag">VERIFIED DESK</span>
          <span>Mon – Sun: 9:00 AM – 7:30 PM</span>
        </div>
      </div>
    </section>
  );
}
