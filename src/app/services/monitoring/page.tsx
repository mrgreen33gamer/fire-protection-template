// Sentinel Fire Protection — Monitoring Service Page
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

  const expectations = [{"title":"Account Setup Done Right","description":"Zones, contacts, and dispatch instructions configured correctly from day one."},{"title":"Clean Signal Tests","description":"We test alarm, trouble, supervisory, and restore signals before we leave."},{"title":"Transparent Pricing","description":"Clear monthly monitoring rates with no hidden mid-contract surprises."},{"title":"AHJ Coordination","description":"Documentation your fire marshal and insurance partner expect."}].map((e, i) => ({ ...e, icon: expIcons[i] }));
  const whyFeatures = [{"title":"24/7 Central Station","description":"Professional dispatch when seconds matter."},{"title":"Multi-Site Accounts","description":"Portfolio-friendly monitoring for restaurants, healthcare, and multifamily."},{"title":"Local Service Backup","description":"When a signal means a real problem, our techs can respond on-site."}].map((e, i) => ({ ...e, icon: whyIcons[i] }));
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
  const faq = [{"question":"Is fire alarm monitoring required?","answer":"Many occupancies and insurance policies require central station monitoring. We help confirm AHJ and carrier expectations."},{"question":"How much does monitoring cost?","answer":"Monthly rates vary by communicator type and account size. We quote clearly before activation."},{"question":"Can you take over an existing account?","answer":"Yes — takeovers, reprogramming, and clean cutovers from prior vendors."},{"question":"Do you monitor waterflow and tamper?","answer":"Yes — sprinkler supervisory and waterflow points are routinely monitored."},{"question":"What if we only need local alarms?","answer":"We give an honest recommendation — monitoring is not always mandatory, but often the smarter risk choice."},{"question":"How fast is setup?","answer":"Most takeovers and new accounts activate within days after programming and testing."}];
  const crossServices = [{"title":"Fire Alarm Systems","body":"Panels ready for reliable signaling.","link":"/services/fire-alarms"},{"title":"Sprinkler Systems","body":"Waterflow and tamper devices.","link":"/services/sprinkler-systems"},{"title":"Annual Inspections","body":"Keep monitored systems inspection-ready.","link":"/services/annual-inspections"},{"title":"Kitchen Hood Suppression","body":"Restaurant life-safety packages.","link":"/services/kitchen-hood"}].map((c, i) => ({ ...c, icon: crossIcons[i % 6] }));

  return (
    <main className={styles.pageWrapper}>
      <Breadcrumb crumbs={[{ label: "Home", href: "/" }, { label: "Services", href: "/services" }, { label: "Monitoring" }]} />
      <SectionIntro title="Monitoring in Waco, TX" subtitle={"24/7 central station fire alarm monitoring with signal testing, account setup, and clear communication with your AHJ and insurance carrier."} />
      <TrustBar headline="4,000+ Central Texas systems maintained by Sentinel Fire Protection" />
      <div className={styles.section}><WhatToExpect sectionTitle="What Happens When You Call for Monitoring" expectations={expectations} /></div>
      <div className={styles.section}><WhyChooseUs cityName="Waco" features={whyFeatures} title="Why Waco Calls Sentinel Fire Protection First" /></div>
      <div className={styles.section}><ProcessTimeline steps={processSteps} /></div>
      <div className={styles.section}><ImpactMetrics metrics={metrics} cityName="Waco" /></div>
      <div className={styles.section}><ValueComparison rows={comparisonRows} /></div>
      <div className={styles.section}><Testimonials testimonials={reviews} /></div>
      <div className={styles.section}><GuaranteeSection /></div>
      <div className={styles.section}><LocalServiceAreas cityName="Waco" areas={localAreas} servicePath="services/monitoring" title="Monitoring Across Central Texas" /></div>
      <div className={styles.section}><FAQ cityName="Waco" faq={faq} title="Monitoring FAQs" /></div>
      <div className={styles.section}><ServiceCardComponent heading="Related Fire Protection Services" cards={crossServices} /></div>
      <div className={styles.section}><Variant4 title="Schedule Monitoring" cityName="Waco" slug="services/monitoring" spot="monitoring-form" formVariant={2} /></div>
      <CTABanner headline="Need Monitoring? We're Ready." subline="Flat-rate pricing. Licensed Fire Alarm Contractor · Bonded & Insured." primaryText="Call (254) 900-1111" primaryLink="tel:+12549001111" secondaryText="Contact Us" secondaryLink="/contact" />
    </main>
  );
}
