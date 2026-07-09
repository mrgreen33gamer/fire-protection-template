// Sentinel Fire Protection — About Page
"use client";

import styles from "./page.module.scss";
import reviews from '&/local-db/reviews';

import SectionIntro from "#/PageComponents/SectionIntro/SectionIntro";
import TrustBar from "#/PageComponents/TrustBar/TrustBar";
import WhyChooseUs from "#/PageComponents/WhyChooseUs/WhyChooseUs";
import ImpactMetrics from "#/PageComponents/ImpactMetrics/ImpactMetrics";
import Testimonials from "#/PageComponents/Testimonials/Testimonials";
import GuaranteeSection from "#/PageComponents/GuaranteeSection/GuaranteeSection";
import CTABanner from "#/PageComponents/CTABanner/CTABanner";
import ProcessTimeline from "#/PageComponents/ProcessTimeline/ProcessTimeline";

import {
  faTrophy, faChartLine, faClock,
  faHouseUser, faUsers, faLeaf,
  faClipboardCheck, faShieldHalved, faBolt, faCircleCheck,
} from "@fortawesome/free-solid-svg-icons";

export default function AboutPage() {
  const whyFeatures = [
    { icon: faHouseUser, title: "Locally Owned Since 2001", description: "Sentinel Fire Protection was founded in Waco by Captain (ret.) Neil Briggs. We're not a franchise — every decision is made locally, every call is answered by someone who lives here." },
    { icon: faUsers, title: "A Crew You Can Trust on Your Property", description: "Every technician is background-checked and part of a Licensed Fire Alarm Contractor · Bonded & Insured team. We treat every facility with respect." },
    { icon: faLeaf, title: "Honest From the First Call", description: "We won't upsell a full system replacement when a device repair will do. Our reputation is built on straight talk and code-compliant work." },
  ];
  const metrics = [
    { icon: faTrophy, value: 4000, label: "Systems maintained across Central Texas", suffix: "+", duration: 3 },
    { icon: faChartLine, value: 98, label: "Customer satisfaction rate", suffix: "%", duration: 2 },
    { icon: faClock, value: 25, label: "Years serving Central Texas facilities", suffix: "+", duration: 2 },
  ];
  const processSteps = [
    { number: 1, title: "Call or Book Online", description: "Phone, text, or form — we'll confirm a same-day or next-day slot.", icon: faClipboardCheck },
    { number: 2, title: "Diagnose Honestly", description: "A licensed tech inspects the system and explains options in plain English.", icon: faShieldHalved },
    { number: 3, title: "Flat-Rate Quote", description: "Written price before any work starts. You decide — zero pressure.", icon: faBolt },
    { number: 4, title: "Done Right, Documented", description: "Code-compliant workmanship and Inspection On-Time Guarantee on scheduled service.", icon: faCircleCheck },
  ];

  return (
    <main className={styles.pageWrapper}>
      <SectionIntro title="About Sentinel Fire Protection" subtitle="Waco-owned, Waco-operated, and Waco-proud since 2001. Alarms · Sprinklers · Inspections · Monitoring — honest work at fair prices for the facilities we've protected for 25 years." />
      <TrustBar headline="4,000+ Central Texas systems maintained — and we've earned every one" />
      <div className={styles.section}><WhyChooseUs cityName="Waco" features={whyFeatures} title="Who We Are" /></div>
      <div className={styles.section}><ImpactMetrics title="25 Years, By the Numbers" metrics={metrics} cityName="Waco" /></div>
      <div className={styles.section}><ProcessTimeline steps={processSteps} /></div>
      <div className={styles.section}><Testimonials testimonials={reviews} /></div>
      <div className={styles.section}><GuaranteeSection /></div>
      <CTABanner headline="Waco's Fire Protection Company — Ready When You Need Us" subline="Same-day and emergency service. Flat-rate pricing. Code-Compliant Installs · Inspection On-Time Guarantee." primaryText="Call Us Now" primaryLink="tel:+12549001111" secondaryText="Request Service Online" secondaryLink="/contact" />
    </main>
  );
}
