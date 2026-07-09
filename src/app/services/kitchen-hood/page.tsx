// Sentinel Fire Protection — Kitchen Hood Suppression Service Page
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

  const expectations = [{"title":"Kitchen-Aware Scheduling","description":"We work around prep and service windows so you stay open."},{"title":"Full System Check","description":"Links, nozzles, cylinders, manual pulls, and gas valve interlocks inspected thoroughly."},{"title":"Clear Deficiency List","description":"Plain-English list of what failed and what must be fixed before sign-off."},{"title":"Certification Docs","description":"Reports and tags ready for health and fire inspectors."}].map((e, i) => ({ ...e, icon: expIcons[i] }));
  const whyFeatures = [{"title":"Restaurant Specialists","description":"We know health, fire, and insurance expectations for food service."},{"title":"Semi-Annual Discipline","description":"Both inspections on a calendar so nothing slips."},{"title":"Same-Week Fixes","description":"Common links and parts stocked for rapid deficiency closeout."}].map((e, i) => ({ ...e, icon: whyIcons[i] }));
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
  const faq = [{"question":"How often must kitchen hood systems be inspected?","answer":"Most commercial cooking suppression systems require semi-annual inspections."},{"question":"Do you service Ansul systems?","answer":"Yes — Ansul-style and similar wet chemical kitchen systems are core work for us."},{"question":"Can you replace fusible links?","answer":"Yes — link replacement and nozzle cleaning are standard service items."},{"question":"Will this disrupt service?","answer":"We schedule around your kitchen hours whenever possible."},{"question":"Do you also tag extinguishers?","answer":"Yes — many restaurants bundle Class K and ABC units with hood service."},{"question":"What cities do you cover?","answer":"Waco and Central Texas including Temple, Killeen, Hewitt, and Woodway."}];
  const crossServices = [{"title":"Fire Extinguishers","body":"Class K and ABC service for kitchens.","link":"/services/fire-extinguishers"},{"title":"Annual Inspections","body":"Full facility life-safety packages.","link":"/services/annual-inspections"},{"title":"Fire Alarm Systems","body":"Pull stations and kitchen-area detection.","link":"/services/fire-alarms"},{"title":"Monitoring","body":"Alarm monitoring for restaurants.","link":"/services/monitoring"}].map((c, i) => ({ ...c, icon: crossIcons[i % 6] }));

  return (
    <main className={styles.pageWrapper}>
      <Breadcrumb crumbs={[{ label: "Home", href: "/" }, { label: "Services", href: "/services" }, { label: "Kitchen Hood Suppression" }]} />
      <SectionIntro title="Kitchen Hood Suppression in Waco, TX" subtitle={"Ansul and kitchen hood system inspection, fusible link replacement, cylinder service, and semi-annual certification for restaurants and food service."} />
      <TrustBar headline="4,000+ Central Texas systems maintained by Sentinel Fire Protection" />
      <div className={styles.section}><WhatToExpect sectionTitle="What Happens When You Call for Kitchen Hood Suppression" expectations={expectations} /></div>
      <div className={styles.section}><WhyChooseUs cityName="Waco" features={whyFeatures} title="Why Waco Calls Sentinel Fire Protection First" /></div>
      <div className={styles.section}><ProcessTimeline steps={processSteps} /></div>
      <div className={styles.section}><ImpactMetrics metrics={metrics} cityName="Waco" /></div>
      <div className={styles.section}><ValueComparison rows={comparisonRows} /></div>
      <div className={styles.section}><Testimonials testimonials={reviews} /></div>
      <div className={styles.section}><GuaranteeSection /></div>
      <div className={styles.section}><LocalServiceAreas cityName="Waco" areas={localAreas} servicePath="services/kitchen-hood" title="Kitchen Hood Suppression Across Central Texas" /></div>
      <div className={styles.section}><FAQ cityName="Waco" faq={faq} title="Kitchen Hood Suppression FAQs" /></div>
      <div className={styles.section}><ServiceCardComponent heading="Related Fire Protection Services" cards={crossServices} /></div>
      <div className={styles.section}><Variant4 title="Schedule Kitchen Hood Suppression" cityName="Waco" slug="services/kitchen-hood" spot="kitchen-hood-form" formVariant={2} /></div>
      <CTABanner headline="Need Kitchen Hood Suppression? We're Ready." subline="Flat-rate pricing. Licensed Fire Alarm Contractor · Bonded & Insured." primaryText="Call (254) 900-1111" primaryLink="tel:+12549001111" secondaryText="Contact Us" secondaryLink="/contact" />
    </main>
  );
}
