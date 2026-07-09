// Sentinel Fire Protection — Annual Inspections Service Page
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

  const expectations = [{"title":"Scheduled On Time","description":"We put inspections on a calendar and keep them there — Inspection On-Time Guarantee."},{"title":"Thorough Testing","description":"Alarms, sprinklers, extinguishers, and hood systems inspected to the required standard."},{"title":"Clear Deficiency Reports","description":"Prioritized fixes so ownership knows what is critical vs. routine."},{"title":"Re-Inspection Support","description":"We close findings and return for re-inspection without the runaround."}].map((e, i) => ({ ...e, icon: expIcons[i] }));
  const whyFeatures = [{"title":"One Vendor, Full Package","description":"Alarms, sprinklers, extinguishers, and hoods under one report set."},{"title":"Portfolio Scheduling","description":"Multi-site calendars for restaurants, healthcare, and multifamily."},{"title":"Local & Responsive","description":"Based in Waco since 2001 — not a call-center-only national chain."}].map((e, i) => ({ ...e, icon: whyIcons[i] }));
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
  const faq = [{"question":"What does an annual fire inspection include?","answer":"System-appropriate testing and written reports for alarms, sprinklers, extinguishers, and hoods as applicable."},{"question":"What is the Inspection On-Time Guarantee?","answer":"We keep scheduled inspections on the calendar so you are not scrambling before AHJ or insurance deadlines."},{"question":"Do you fix deficiencies too?","answer":"Yes — we can quote and complete repairs, then re-inspect."},{"question":"Can you inspect multiple buildings?","answer":"Yes — portfolio scheduling with a single point of contact."},{"question":"How far in advance should we book?","answer":"2–4 weeks is ideal; we also handle urgent compliance windows when needed."},{"question":"Are you licensed?","answer":"Yes — Licensed Fire Alarm Contractor · Bonded & Insured."}];
  const crossServices = [{"title":"Fire Alarm Systems","body":"Close alarm deficiencies fast.","link":"/services/fire-alarms"},{"title":"Sprinkler Systems","body":"Repair heads and risers after findings.","link":"/services/sprinkler-systems"},{"title":"Fire Extinguishers","body":"Tags and hydro service on the same visit.","link":"/services/fire-extinguishers"},{"title":"Monitoring","body":"Verify signals as part of readiness.","link":"/services/monitoring"}].map((c, i) => ({ ...c, icon: crossIcons[i % 6] }));

  return (
    <main className={styles.pageWrapper}>
      <Breadcrumb crumbs={[{ label: "Home", href: "/" }, { label: "Services", href: "/services" }, { label: "Annual Inspections" }]} />
      <SectionIntro title="Annual Inspections in Waco, TX" subtitle={"NFPA-aligned annual and periodic inspections with deficiency reports, re-inspections, and Inspection On-Time Guarantee you can plan around."} />
      <TrustBar headline="4,000+ Central Texas systems maintained by Sentinel Fire Protection" />
      <div className={styles.section}><WhatToExpect sectionTitle="What Happens When You Call for Annual Inspections" expectations={expectations} /></div>
      <div className={styles.section}><WhyChooseUs cityName="Waco" features={whyFeatures} title="Why Waco Calls Sentinel Fire Protection First" /></div>
      <div className={styles.section}><ProcessTimeline steps={processSteps} /></div>
      <div className={styles.section}><ImpactMetrics metrics={metrics} cityName="Waco" /></div>
      <div className={styles.section}><ValueComparison rows={comparisonRows} /></div>
      <div className={styles.section}><Testimonials testimonials={reviews} /></div>
      <div className={styles.section}><GuaranteeSection /></div>
      <div className={styles.section}><LocalServiceAreas cityName="Waco" areas={localAreas} servicePath="services/annual-inspections" title="Annual Inspections Across Central Texas" /></div>
      <div className={styles.section}><FAQ cityName="Waco" faq={faq} title="Annual Inspections FAQs" /></div>
      <div className={styles.section}><ServiceCardComponent heading="Related Fire Protection Services" cards={crossServices} /></div>
      <div className={styles.section}><Variant4 title="Schedule Annual Inspections" cityName="Waco" slug="services/annual-inspections" spot="annual-inspections-form" formVariant={2} /></div>
      <CTABanner headline="Need Annual Inspections? We're Ready." subline="Flat-rate pricing. Licensed Fire Alarm Contractor · Bonded & Insured." primaryText="Call (254) 900-1111" primaryLink="tel:+12549001111" secondaryText="Contact Us" secondaryLink="/contact" />
    </main>
  );
}
