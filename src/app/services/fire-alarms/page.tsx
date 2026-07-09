// Sentinel Fire Protection — Fire Alarm Systems Service Page
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

  const expectations = [{"title":"Same-Day Diagnosis","description":"We inspect the panel and devices and explain trouble conditions in plain English."},{"title":"Flat-Rate Quote Before We Touch Anything","description":"Written price before any work starts — it does not change mid-job."},{"title":"Code-Compliant Work","description":"Devices installed and programmed to meet applicable codes and local AHJ expectations."},{"title":"Documented & Tested","description":"Full function tests and documentation for your records and central station when applicable."}].map((e, i) => ({ ...e, icon: expIcons[i] }));
  const whyFeatures = [{"title":"Emergency Service — Any Time","description":"We answer 7 days a week for system troubles and impairments."},{"title":"All Major Panel Brands","description":"Notifier, Silent Knight, Simplex, Potter, System Sensor devices, and more."},{"title":"Licensed Fire Alarm Contractor","description":"Bonded & insured professionals — never unlicensed freelancers alone on your system."}].map((e, i) => ({ ...e, icon: whyIcons[i] }));
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
  const faq = [{"question":"How much does fire alarm service cost in Waco?","answer":"Repairs often range from a few hundred dollars depending on devices and labor. New systems vary by square footage and device counts. We quote flat-rate before starting."},{"question":"Can you fix a trouble signal the same day?","answer":"In most cases, yes — especially during business hours. Call before noon and same-day service is usually available."},{"question":"Do you install addressable systems?","answer":"Yes — design, permit support, install, programming, and final inspection."},{"question":"Will you work with our monitoring company?","answer":"Yes — we coordinate account setup, signal tests, and cutovers with major central stations."},{"question":"Do you service multifamily and commercial?","answer":"Yes — apartments, medical offices, restaurants, retail, and light industrial."},{"question":"Are you licensed?","answer":"Yes — Licensed Fire Alarm Contractor · Bonded & Insured."}];
  const crossServices = [{"title":"Sprinkler Systems","body":"Heads, risers, and impairment support.","link":"/services/sprinkler-systems"},{"title":"Monitoring","body":"24/7 central station monitoring and signal tests.","link":"/services/monitoring"},{"title":"Annual Inspections","body":"NFPA-aligned reports and re-inspections.","link":"/services/annual-inspections"},{"title":"Fire Extinguishers","body":"Annual tags and unit replacement.","link":"/services/fire-extinguishers"}].map((c, i) => ({ ...c, icon: crossIcons[i % 6] }));

  return (
    <main className={styles.pageWrapper}>
      <Breadcrumb crumbs={[{ label: "Home", href: "/" }, { label: "Services", href: "/services" }, { label: "Fire Alarm Systems" }]} />
      <SectionIntro title="Fire Alarm Systems in Waco, TX" subtitle={"Design, install, and service conventional and addressable fire alarm systems — detectors, NAC circuits, panels, and AHJ-ready documentation."} />
      <TrustBar headline="4,000+ Central Texas systems maintained by Sentinel Fire Protection" />
      <div className={styles.section}><WhatToExpect sectionTitle="What Happens When You Call for Fire Alarm Systems" expectations={expectations} /></div>
      <div className={styles.section}><WhyChooseUs cityName="Waco" features={whyFeatures} title="Why Waco Calls Sentinel Fire Protection First" /></div>
      <div className={styles.section}><ProcessTimeline steps={processSteps} /></div>
      <div className={styles.section}><ImpactMetrics metrics={metrics} cityName="Waco" /></div>
      <div className={styles.section}><ValueComparison rows={comparisonRows} /></div>
      <div className={styles.section}><Testimonials testimonials={reviews} /></div>
      <div className={styles.section}><GuaranteeSection /></div>
      <div className={styles.section}><LocalServiceAreas cityName="Waco" areas={localAreas} servicePath="services/fire-alarms" title="Fire Alarm Systems Across Central Texas" /></div>
      <div className={styles.section}><FAQ cityName="Waco" faq={faq} title="Fire Alarm Systems FAQs" /></div>
      <div className={styles.section}><ServiceCardComponent heading="Related Fire Protection Services" cards={crossServices} /></div>
      <div className={styles.section}><Variant4 title="Schedule Fire Alarm Systems" cityName="Waco" slug="services/fire-alarms" spot="fire-alarms-form" formVariant={2} /></div>
      <CTABanner headline="Need Fire Alarm Systems? We're Ready." subline="Flat-rate pricing. Licensed Fire Alarm Contractor · Bonded & Insured." primaryText="Call (254) 900-1111" primaryLink="tel:+12549001111" secondaryText="Contact Us" secondaryLink="/contact" />
    </main>
  );
}
