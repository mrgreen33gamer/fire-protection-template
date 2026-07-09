"use client";
import Breadcrumb from "#/PageComponents/Breadcrumb/Breadcrumb";
import styles from "../page.module.scss";
import SectionIntro from "#/PageComponents/SectionIntro/SectionIntro";
import TrustBar from "#/PageComponents/TrustBar/TrustBar";
import IndustryPainPoints from "#/PageComponents/IndustryPainPoints/IndustryPainPoints";
import WhyChooseUs from "#/PageComponents/WhyChooseUs/WhyChooseUs";
import ProcessTimeline from "#/PageComponents/ProcessTimeline/ProcessTimeline";
import ImpactMetrics from "#/PageComponents/ImpactMetrics/ImpactMetrics";
import ServiceCardComponent from "#/PageComponents/ServiceCardComponent/ServiceCardComponent";
import ValueComparison from "#/PageComponents/ValueComparison/ValueComparison";
import FAQ from "#/PageComponents/FAQ/FAQ";
import CTABanner from "#/PageComponents/CTABanner/CTABanner";
import LocalServiceAreas from "#/PageComponents/LocalServiceAreas/LocalServiceAreas";
import Variant4 from "#/PageComponents/ContactForms/Variant4/Form";

import {
  faCalendarAlt, faSearch, faFileInvoiceDollar, faUsers,
  faBuilding, faClipboardList, faHandshake,
  faRocket, faTrophy, faChartLine, faClock,
  faBell, faFire, faFireExtinguisher, faShieldHalved,
} from "@fortawesome/free-solid-svg-icons";

export default function IndustryPage() {
  const painIcons = [faCalendarAlt, faFileInvoiceDollar, faUsers, faBuilding, faClipboardList, faHandshake];
  const painPoints = [{"problem":"Patient care cannot stop for noisy work","consequence":"Vendors who ignore clinical schedules create complaints and unsafe workarounds."},{"problem":"Life-safety deficiencies create regulatory risk","consequence":"Survey findings and insurance issues stack when reports are late or incomplete."},{"problem":"After-hours monitoring gaps","consequence":"Unmonitored or poorly programmed systems leave empty clinics unprotected overnight."},{"problem":"Multiple buildings, one compliance calendar","consequence":"Scattered clinics need coordinated inspections without missing a site."},{"problem":"Documentation chaos","consequence":"Facilities teams waste hours chasing tags, reports, and vendor COIs."},{"problem":"Unclear ownership of deficiencies","consequence":"Alarm vs. sprinkler vs. extinguisher issues get bounced between contractors."}].map((p, i) => ({ ...p, icon: painIcons[i] }));
  const whyIcons = [faCalendarAlt, faFileInvoiceDollar, faUsers];
  const whyFeatures = [{"title":"Clinical-Aware Scheduling","description":"We plan around patient hours and sensitive areas."},{"title":"Monitoring + Inspection Package","description":"Central station monitoring paired with on-time annual inspections."},{"title":"Clean Documentation","description":"Reports and certificates facilities and surveyors can actually use."}].map((w, i) => ({ ...w, icon: whyIcons[i] }));
  const processSteps = [
    { number: 1, title: "Site / Portfolio Assessment", description: "We walk systems, document condition, and prioritize risk.", icon: faSearch },
    { number: 2, title: "Plan & Quote", description: "Clear scope and pricing synced to your operations calendar.", icon: faCalendarAlt },
    { number: 3, title: "Execute Cleanly", description: "Crews complete work with minimal disruption and full documentation.", icon: faRocket },
    { number: 4, title: "Standing Service", description: "Optional ongoing inspections and monitoring so compliance stays planned.", icon: faClipboardList },
  ];
  const metrics = [
    { icon: faTrophy, value: 4000, label: "Systems maintained across Central Texas", suffix: "+", duration: 2 },
    { icon: faChartLine, value: 25, label: "Years serving Central Texas organizations", suffix: "+", duration: 2 },
    { icon: faClock, value: 98, label: "Customer satisfaction rating", suffix: "%", duration: 2 },
  ];
  const comparisonRows = [
    { feature: "Industry-specific scheduling", us: "✅ Built per operation type", others: "❌ One-size-fits-all" },
    { feature: "Central Texas market knowledge", us: "✅ 25+ years in Waco", others: "❌ Out-of-area contractors" },
    { feature: "Licensed Fire Alarm Contractor", us: "✅ Always", others: "❌ Not always" },
    { feature: "Transparent, upfront pricing", us: "✅ Quote before work starts", others: "❌ Billable hours + surprises" },
    { feature: "Code-Compliant Installs · Inspection On-Time Guarantee", us: "✅ On every job", others: "❌ Limited or none" },
  ];
  const faq = [{"question":"Do you work in occupied clinics?","answer":"Yes — we coordinate access, infection-control awareness, and quiet windows where needed."},{"question":"Can you monitor medical offices?","answer":"Yes — 24/7 central station fire monitoring with proper contacts and dispatch notes."},{"question":"Do you inspect multi-suite buildings?","answer":"Yes — common areas and suite-level devices as scoped with ownership or the PM."},{"question":"Are you insured for healthcare sites?","answer":"Yes — COIs available for facilities and ownership groups."},{"question":"How quickly can deficiencies be closed?","answer":"Many device issues resolve same-week; complex panel work is scheduled promptly with clear quotes."}];
  const services = [
    { icon: faBell, title: "Fire Alarm Systems", body: "Common-area and facility alarm service.", link: "/services/fire-alarms" },
    { icon: faFire, title: "Sprinkler Systems", body: "Heads, risers, and impairment support.", link: "/services/sprinkler-systems" },
    { icon: faFireExtinguisher, title: "Fire Extinguishers", body: "Tags, hydro, and inventory.", link: "/services/fire-extinguishers" },
    { icon: faShieldHalved, title: "Kitchen Hood Suppression", body: "Critical for food service sites.", link: "/services/kitchen-hood" },
  ];
  const localAreas = [
    { town: "Waco", benefit: "Home base for healthcare fire protection work.", badge: "Home Base" },
    { town: "Temple", benefit: "Regular coverage in Bell County.", badge: "" },
    { town: "Killeen", benefit: "Commercial and multifamily near Fort Cavazos.", badge: "" },
    { town: "Hewitt", benefit: "Suburban commercial and multifamily.", badge: "" },
    { town: "Woodway", benefit: "Professional offices and premium properties.", badge: "" },
    { town: "Bellmead", benefit: "Scattered-site and corridor properties.", badge: "" },
  ];

  return (
    <main className={styles.pageWrapper}>
      <Breadcrumb crumbs={[{ label: "Home", href: "/" }, { label: "Industries", href: "/industries" }, { label: "Healthcare Facilities" }]} />
      <SectionIntro title="Fire Protection for Healthcare Facilities" subtitle={"Fire protection for healthcare facilities in Waco TX — clinics, medical offices, and care environments needing reliable alarms, extinguishers, monitoring, and inspections."} />
      <TrustBar headline="Healthcare Facilities teams trust Sentinel Fire Protection for compliance and rapid response" />
      <div className={styles.section}><IndustryPainPoints industry="healthcare" painPoints={painPoints} /></div>
      <div className={styles.section}><WhyChooseUs cityName="Waco" features={whyFeatures} title="Built for Healthcare Facilities" /></div>
      <div className={styles.section}><ProcessTimeline steps={processSteps} /></div>
      <div className={styles.section}><ImpactMetrics metrics={metrics} cityName="Waco" /></div>
      <div className={styles.section}><ServiceCardComponent heading="Services Healthcare Facilities Use Most" cards={services} /></div>
      <div className={styles.section}><ValueComparison rows={comparisonRows} /></div>
      <div className={styles.section}><LocalServiceAreas cityName="Waco" areas={localAreas} servicePath="industries/healthcare" title="Healthcare Facilities Coverage Across Central Texas" /></div>
      <div className={styles.section}><FAQ cityName="Waco" faq={faq} title="Healthcare Facilities FAQs" /></div>
      <div className={styles.section}><Variant4 title="Request a Healthcare Facilities Quote" cityName="Waco" slug="industries/healthcare" spot="healthcare-industry-form" formVariant={2} /></div>
      <CTABanner headline="Need a Fire Protection Partner Who Understands Healthcare Facilities?" subline="COIs available. Flat-rate pricing. Single point of contact." primaryText="Call (254) 900-1111" primaryLink="tel:+12549001111" secondaryText="Contact Us" secondaryLink="/contact" />
    </main>
  );
}
