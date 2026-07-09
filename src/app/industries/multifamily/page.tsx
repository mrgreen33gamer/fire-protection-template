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
  const painPoints = [{"problem":"Common-area troubles after hours","consequence":"Residents complain and property staff are stuck waiting on slow vendors."},{"problem":"Portfolio inspection calendars fall apart","consequence":"Some buildings pass while others fail — ownership sees inconsistent risk."},{"problem":"Turnover and construction damage devices","consequence":"Remodels and make-readies leave detectors missing, painted, or disconnected — creating survey findings."},{"problem":"Sprinkler impairments during freezes","consequence":"Broken heads and emergency water damage without a fast response plan."},{"problem":"No single point of contact","consequence":"PMs juggle separate alarm, sprinkler, and extinguisher vendors for every ticket."},{"problem":"Resident communication gaps","consequence":"Poor notice and no-shows create bad reviews and office call volume."}].map((p, i) => ({ ...p, icon: painIcons[i] }));
  const whyIcons = [faCalendarAlt, faFileInvoiceDollar, faUsers];
  const whyFeatures = [{"title":"Portfolio-Wide Planning","description":"Phased inspections and repairs across buildings with one project lead."},{"title":"Make-Ready Friendly","description":"We coordinate access windows so units and common areas stay on schedule."},{"title":"Emergency Response","description":"Troubles, impairments, and broken heads get same-day attention when needed."}].map((w, i) => ({ ...w, icon: whyIcons[i] }));
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
  const faq = [{"question":"Do you work with property managers?","answer":"Yes — apartments, townhomes, and mixed-use multifamily portfolios are core B2B work."},{"question":"Can you standardize devices across a complex?","answer":"Yes — consistent detectors, extinguishers, and documentation across buildings."},{"question":"Do you provide COIs?","answer":"Yes — insurance certificates for ownership and PM groups on request."},{"question":"Can you handle after-hours emergencies?","answer":"Yes — emergency service is available 7 days a week including evenings."},{"question":"What areas for multifamily?","answer":"Waco, Temple, Killeen, Hewitt, Woodway, Bellmead, McGregor, China Spring."}];
  const services = [
    { icon: faBell, title: "Fire Alarm Systems", body: "Common-area and facility alarm service.", link: "/services/fire-alarms" },
    { icon: faFire, title: "Sprinkler Systems", body: "Heads, risers, and impairment support.", link: "/services/sprinkler-systems" },
    { icon: faFireExtinguisher, title: "Fire Extinguishers", body: "Tags, hydro, and inventory.", link: "/services/fire-extinguishers" },
    { icon: faShieldHalved, title: "Kitchen Hood Suppression", body: "Critical for food service sites.", link: "/services/kitchen-hood" },
  ];
  const localAreas = [
    { town: "Waco", benefit: "Home base for multifamily fire protection work.", badge: "Home Base" },
    { town: "Temple", benefit: "Regular coverage in Bell County.", badge: "" },
    { town: "Killeen", benefit: "Commercial and multifamily near Fort Cavazos.", badge: "" },
    { town: "Hewitt", benefit: "Suburban commercial and multifamily.", badge: "" },
    { town: "Woodway", benefit: "Professional offices and premium properties.", badge: "" },
    { town: "Bellmead", benefit: "Scattered-site and corridor properties.", badge: "" },
  ];

  return (
    <main className={styles.pageWrapper}>
      <Breadcrumb crumbs={[{ label: "Home", href: "/" }, { label: "Industries", href: "/industries" }, { label: "Multifamily Housing" }]} />
      <SectionIntro title="Fire Protection for Multifamily Housing" subtitle={"Fire protection for multifamily housing in Waco TX — common-area alarms, extinguishers, sprinklers, monitoring, and portfolio inspections for apartments and mixed-use."} />
      <TrustBar headline="Multifamily Housing teams trust Sentinel Fire Protection for compliance and rapid response" />
      <div className={styles.section}><IndustryPainPoints industry="multifamily" painPoints={painPoints} /></div>
      <div className={styles.section}><WhyChooseUs cityName="Waco" features={whyFeatures} title="Built for Multifamily Housing" /></div>
      <div className={styles.section}><ProcessTimeline steps={processSteps} /></div>
      <div className={styles.section}><ImpactMetrics metrics={metrics} cityName="Waco" /></div>
      <div className={styles.section}><ServiceCardComponent heading="Services Multifamily Housing Use Most" cards={services} /></div>
      <div className={styles.section}><ValueComparison rows={comparisonRows} /></div>
      <div className={styles.section}><LocalServiceAreas cityName="Waco" areas={localAreas} servicePath="industries/multifamily" title="Multifamily Housing Coverage Across Central Texas" /></div>
      <div className={styles.section}><FAQ cityName="Waco" faq={faq} title="Multifamily Housing FAQs" /></div>
      <div className={styles.section}><Variant4 title="Request a Multifamily Housing Quote" cityName="Waco" slug="industries/multifamily" spot="multifamily-industry-form" formVariant={2} /></div>
      <CTABanner headline="Need a Fire Protection Partner Who Understands Multifamily Housing?" subline="COIs available. Flat-rate pricing. Single point of contact." primaryText="Call (254) 900-1111" primaryLink="tel:+12549001111" secondaryText="Contact Us" secondaryLink="/contact" />
    </main>
  );
}
