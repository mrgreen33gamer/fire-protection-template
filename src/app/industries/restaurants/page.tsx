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
  const painPoints = [{"problem":"Semi-annual hood inspections slip off the calendar","consequence":"Failed health/fire visits, forced closures, and last-minute vendor scrambles during peak service weeks."},{"problem":"Kitchen downtime kills revenue","consequence":"Vendors who only work 9–5 force you to close seating or cancel catering to complete required service."},{"problem":"Multiple life-safety vendors","consequence":"Hood company, extinguisher company, and alarm company never coordinate — deficiencies bounce between reports."},{"problem":"Staff do not know reset procedures","consequence":"After a discharge or false trip, kitchens stay dark longer than necessary."},{"problem":"Insurance and landlord requirements stack up","consequence":"Certificates and inspection reports are requested with short deadlines you cannot miss."},{"problem":"Outdated equipment fails inspection","consequence":"Links, nozzles, and cylinders that should have been planned CapEx become emergency spend."}].map((p, i) => ({ ...p, icon: painIcons[i] }));
  const whyIcons = [faCalendarAlt, faFileInvoiceDollar, faUsers];
  const whyFeatures = [{"title":"Built for Food Service Hours","description":"We schedule around prep and service windows whenever possible."},{"title":"Hood + Extinguishers + Alarms","description":"One licensed team for kitchen suppression, Class K units, and fire alarms."},{"title":"Inspection On-Time Guarantee","description":"Semi-annual and annual dates stay on the calendar so compliance is planned, not panicked."}].map((w, i) => ({ ...w, icon: whyIcons[i] }));
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
  const faq = [{"question":"Do you service Ansul kitchen systems?","answer":"Yes — Ansul-style wet chemical systems, links, cylinders, and semi-annual certifications."},{"question":"Can you work after close?","answer":"Often yes — ask when you book and we will match a kitchen-friendly window."},{"question":"Do you tag extinguishers on the same visit?","answer":"Yes — most restaurants bundle Class K and ABC extinguishers with hood service."},{"question":"What about bars and hotels?","answer":"Yes — hospitality properties with kitchens, assembly areas, and guest floors are within scope."},{"question":"Do you provide certificates for landlords?","answer":"Yes — inspection reports and certificates available on request."}];
  const services = [
    { icon: faBell, title: "Fire Alarm Systems", body: "Common-area and facility alarm service.", link: "/services/fire-alarms" },
    { icon: faFire, title: "Sprinkler Systems", body: "Heads, risers, and impairment support.", link: "/services/sprinkler-systems" },
    { icon: faFireExtinguisher, title: "Fire Extinguishers", body: "Tags, hydro, and inventory.", link: "/services/fire-extinguishers" },
    { icon: faShieldHalved, title: "Kitchen Hood Suppression", body: "Critical for food service sites.", link: "/services/kitchen-hood" },
  ];
  const localAreas = [
    { town: "Waco", benefit: "Home base for restaurants fire protection work.", badge: "Home Base" },
    { town: "Temple", benefit: "Regular coverage in Bell County.", badge: "" },
    { town: "Killeen", benefit: "Commercial and multifamily near Fort Cavazos.", badge: "" },
    { town: "Hewitt", benefit: "Suburban commercial and multifamily.", badge: "" },
    { town: "Woodway", benefit: "Professional offices and premium properties.", badge: "" },
    { town: "Bellmead", benefit: "Scattered-site and corridor properties.", badge: "" },
  ];

  return (
    <main className={styles.pageWrapper}>
      <Breadcrumb crumbs={[{ label: "Home", href: "/" }, { label: "Industries", href: "/industries" }, { label: "Restaurants & Hospitality" }]} />
      <SectionIntro title="Fire Protection for Restaurants & Hospitality" subtitle={"Fire protection for restaurants and hospitality in Waco TX — kitchen hood suppression, extinguishers, alarms, and inspections that keep you open and compliant."} />
      <TrustBar headline="Restaurants & Hospitality teams trust Sentinel Fire Protection for compliance and rapid response" />
      <div className={styles.section}><IndustryPainPoints industry="restaurants" painPoints={painPoints} /></div>
      <div className={styles.section}><WhyChooseUs cityName="Waco" features={whyFeatures} title="Built for Restaurants & Hospitality" /></div>
      <div className={styles.section}><ProcessTimeline steps={processSteps} /></div>
      <div className={styles.section}><ImpactMetrics metrics={metrics} cityName="Waco" /></div>
      <div className={styles.section}><ServiceCardComponent heading="Services Restaurants & Hospitality Use Most" cards={services} /></div>
      <div className={styles.section}><ValueComparison rows={comparisonRows} /></div>
      <div className={styles.section}><LocalServiceAreas cityName="Waco" areas={localAreas} servicePath="industries/restaurants" title="Restaurants & Hospitality Coverage Across Central Texas" /></div>
      <div className={styles.section}><FAQ cityName="Waco" faq={faq} title="Restaurants & Hospitality FAQs" /></div>
      <div className={styles.section}><Variant4 title="Request a Restaurants & Hospitality Quote" cityName="Waco" slug="industries/restaurants" spot="restaurants-industry-form" formVariant={2} /></div>
      <CTABanner headline="Need a Fire Protection Partner Who Understands Restaurants & Hospitality?" subline="COIs available. Flat-rate pricing. Single point of contact." primaryText="Call (254) 900-1111" primaryLink="tel:+12549001111" secondaryText="Contact Us" secondaryLink="/contact" />
    </main>
  );
}
