// Sentinel Fire Protection — Fire Extinguishers Service Page
"use client";

import styles from "../page.module.scss";
import reviews from '&/local-db/reviews';

import Breadcrumb          from "#/PageComponents/Breadcrumb/Breadcrumb";
import SectionIntro        from "#/PageComponents/SectionIntro/SectionIntro";
import TrustBar            from "#/PageComponents/TrustBar/TrustBar";
import WhatToExpect        from "#/PageComponents/WhatToExpect/WhatToExpect";
import WhyChooseUs         from "#/PageComponents/WhyChooseUs/WhyChooseUs";
import ProcessTimeline     from "#/PageComponents/ProcessTimeline/ProcessTimeline";
import ImpactMetrics       from "#/PageComponents/ImpactMetrics/ImpactMetrics";
import Testimonials        from "#/PageComponents/Testimonials/Testimonials";
import GuaranteeSection    from "#/PageComponents/GuaranteeSection/GuaranteeSection";
import LocalServiceAreas   from "#/PageComponents/LocalServiceAreas/LocalServiceAreas";
import ValueComparison     from "#/PageComponents/ValueComparison/ValueComparison";
import FAQ                 from "#/PageComponents/FAQ/FAQ";
import CTABanner           from "#/PageComponents/CTABanner/CTABanner";
import ServiceCardComponent from "#/PageComponents/ServiceCardComponent/ServiceCardComponent";
import Variant4            from "#/PageComponents/ContactForms/Variant4/Form";

import {
  faWrench, faSearch, faCheckCircle, faClock, faShieldHalved,
  faHeadset, faFileContract, faBell, faFire, faFireExtinguisher,
  faSatelliteDish, faClipboardCheck, faTrophy, faChartLine,
} from "@fortawesome/free-solid-svg-icons";

export default function ServicePage() {
  const expIcons = [faSearch, faFileContract, faCheckCircle, faShieldHalved];
  const whyIcons = [faClock, faWrench, faShieldHalved];
  const crossIcons = [faBell, faFire, faFireExtinguisher, faSatelliteDish, faClipboardCheck, faShieldHalved];

  const expectations = [{"title":"Site Inventory","description":"We walk your facility and document every unit type, size, and location."},{"title":"Clear Pricing","description":"Per-unit and package pricing before service begins."},{"title":"Tags & Certificates","description":"Updated tags and reports ready for AHJ and insurance review."},{"title":"Replacement Ready","description":"We stock common ABC and kitchen units for same-visit swaps."}].map((e, i) => ({ ...e, icon: expIcons[i] }));
  const whyFeatures = [{"title":"Campus & Multi-Building Ready","description":"One vendor for scattered sites and portfolios."},{"title":"Hydro & 6-Year Service","description":"Full lifecycle — not just annual tags."},{"title":"On-Time Scheduling","description":"Inspection On-Time Guarantee so tags never expire unnoticed."}].map((e, i) => ({ ...e, icon: whyIcons[i] }));
  const processSteps = [
    { number: 1, title: "Call or Book", description: "Contact us by phone, text, or online. We'll schedule you in — usually same-day during business hours.", icon: faHeadset },
    { number: 2, title: "Tech Arrives", description: "On time, in uniform, with the tools to diagnose life-safety systems.", icon: faSearch },
    { number: 3, title: "Flat-Rate Quote", description: "Exact price before any work begins. You decide — zero pressure.", icon: faFileContract },
    { number: 4, title: "Service & Document", description: "Work completed to code, tested, and documented for your records.", icon: faCheckCircle },
  ];
  const metrics = [
    { icon: faTrophy, value: 4000, label: "Systems maintained across Central Texas", suffix: "+", duration: 3 },
    { icon: faChartLine, value: 98, label: "First-visit resolution rate", suffix: "%", duration: 2 },
    { icon: faClock, value: 25, label: "Years serving Waco-area facilities", suffix: "+", duration: 2 },
  ];
  const localAreas = [
    { town: "Waco", benefit: "Home base — fastest dispatch, most available techs.", badge: "Fastest Response" },
    { town: "Hewitt", benefit: "Full coverage throughout Hewitt.", badge: "" },
    { town: "Woodway", benefit: "Same-day service for Woodway facilities.", badge: "" },
    { town: "Bellmead", benefit: "On our regular route — quick turnaround.", badge: "" },
    { town: "China Spring", benefit: "Rural coverage — call ahead for same-day.", badge: "" },
    { town: "Temple", benefit: "Full coverage for Bell County facilities.", badge: "" },
  ];
  const comparisonRows = [
    { feature: "Flat-rate price before work starts", us: "✅ Always written", others: "❌ Hourly + estimate only" },
    { feature: "Code-Compliant Installs · Inspection On-Time Guarantee", us: "✅ Every job", others: "❌ Rare or none" },
    { feature: "Licensed Fire Alarm Contractor", us: "✅ Always", others: "❌ Not always" },
    { feature: "Emergency service 7 days/week", us: "✅ Always available", others: "❌ M–F business hours" },
    { feature: "AHJ-ready documentation", us: "✅ Included", others: "❌ Often delayed" },
  ];
  const faq = [{"question":"How often do extinguishers need service?","answer":"Most units need monthly visual checks by staff and a professional annual inspection. Hydro intervals depend on cylinder type."},{"question":"Do you sell new extinguishers?","answer":"Yes — new units, brackets, and cabinets available for same-visit install."},{"question":"Can you service kitchen Class K units?","answer":"Yes — including restaurants that also need hood suppression service."},{"question":"Do you provide inventory lists?","answer":"Yes — digital inventory sheets with locations and next due dates."},{"question":"What areas do you cover?","answer":"Waco, Temple, Killeen, Hewitt, Woodway, McGregor, China Spring, Bellmead."},{"question":"How fast can you schedule?","answer":"Most annual routes book within 1–2 weeks; urgent replacements often same-day."}];
  const crossServices = [{"title":"Kitchen Hood Suppression","body":"Pair extinguishers with hood recertification.","link":"/services/kitchen-hood"},{"title":"Annual Inspections","body":"Bundle extinguishers with facility-wide inspections.","link":"/services/annual-inspections"},{"title":"Fire Alarm Systems","body":"Complete life-safety coverage.","link":"/services/fire-alarms"},{"title":"Monitoring","body":"Central station for alarms and waterflow.","link":"/services/monitoring"}].map((c, i) => ({ ...c, icon: crossIcons[i % 6] }));

  return (
    <main className={styles.pageWrapper}>
      <Breadcrumb crumbs={[{ label: "Home", href: "/" }, { label: "Services", href: "/services" }, { label: "Fire Extinguishers" }]} />
      <SectionIntro title="Fire Extinguishers in Waco, TX" subtitle={"Annual extinguisher service, hydro testing, new units, and tagged inventory for offices, restaurants, multifamily, and industrial sites."} />
      <TrustBar headline="4,000+ Central Texas systems maintained by Sentinel Fire Protection" />
      <div className={styles.section}><WhatToExpect sectionTitle="What Happens When You Call for Fire Extinguishers" expectations={expectations} /></div>
      <div className={styles.section}><WhyChooseUs cityName="Waco" features={whyFeatures} title="Why Waco Calls Sentinel Fire Protection First" /></div>
      <div className={styles.section}><ProcessTimeline steps={processSteps} /></div>
      <div className={styles.section}><ImpactMetrics metrics={metrics} cityName="Waco" /></div>
      <div className={styles.section}><ValueComparison rows={comparisonRows} /></div>
      <div className={styles.section}><Testimonials testimonials={reviews} /></div>
      <div className={styles.section}><GuaranteeSection /></div>
      <div className={styles.section}><LocalServiceAreas cityName="Waco" areas={localAreas} servicePath="services/fire-extinguishers" title="Fire Extinguishers Across Central Texas" /></div>
      <div className={styles.section}><FAQ cityName="Waco" faq={faq} title="Fire Extinguishers FAQs" /></div>
      <div className={styles.section}><ServiceCardComponent heading="Related Fire Protection Services" cards={crossServices} /></div>
      <div className={styles.section}><Variant4 title="Schedule Fire Extinguishers" cityName="Waco" slug="services/fire-extinguishers" spot="fire-extinguishers-form" formVariant={2} /></div>
      <CTABanner headline="Need Fire Extinguishers? We're Ready." subline="Flat-rate pricing. Licensed Fire Alarm Contractor · Bonded & Insured." primaryText="Call (254) 900-1111" primaryLink="tel:+12549001111" secondaryText="Contact Us" secondaryLink="/contact" />
    </main>
  );
}
