// Sentinel Fire Protection — Services Index
"use client";

import styles from "./page.module.scss";
import reviews from '&/local-db/reviews';

import SectionIntro         from "#/PageComponents/SectionIntro/SectionIntro";
import TrustBar             from "#/PageComponents/TrustBar/TrustBar";
import ServiceCardComponent from "#/PageComponents/ServiceCardComponent/ServiceCardComponent";
import WhyChooseUs          from "#/PageComponents/WhyChooseUs/WhyChooseUs";
import ProcessTimeline      from "#/PageComponents/ProcessTimeline/ProcessTimeline";
import ImpactMetrics        from "#/PageComponents/ImpactMetrics/ImpactMetrics";
import Testimonials         from "#/PageComponents/Testimonials/Testimonials";
import GuaranteeSection     from "#/PageComponents/GuaranteeSection/GuaranteeSection";
import FAQ                  from "#/PageComponents/FAQ/FAQ";
import CTABanner            from "#/PageComponents/CTABanner/CTABanner";
import Variant4             from "#/PageComponents/ContactForms/Variant4/Form";

import {
  faBell, faFire, faFireExtinguisher, faShieldHalved, faSatelliteDish, faClipboardCheck,
  faTrophy, faChartLine, faClock, faUsers, faHeadset, faSearch, faFileContract, faCheckCircle,
} from "@fortawesome/free-solid-svg-icons";

export default function ServicesPage() {
  const services = [
    { icon: faBell, title: "Fire Alarm Systems", body: "Design, install, and service conventional and addressable systems — detectors, panels, and AHJ documentation.", link: "/services/fire-alarms" },
    { icon: faFire, title: "Sprinkler Systems", body: "Wet, dry, and pre-action service — heads, risers, hydro tests, and impairment procedures.", link: "/services/sprinkler-systems" },
    { icon: faFireExtinguisher, title: "Fire Extinguishers", body: "Annual tags, hydro testing, new units, and inventory for commercial and multifamily sites.", link: "/services/fire-extinguishers" },
    { icon: faShieldHalved, title: "Kitchen Hood Suppression", body: "Ansul/kitchen hood inspections, links, cylinders, and semi-annual certification for restaurants.", link: "/services/kitchen-hood" },
    { icon: faSatelliteDish, title: "Monitoring", body: "24/7 central station monitoring with signal testing and account setup.", link: "/services/monitoring" },
    { icon: faClipboardCheck, title: "Annual Inspections", body: "NFPA-aligned inspections with deficiency reports and Inspection On-Time Guarantee.", link: "/services/annual-inspections" },
  ];
  const whyFeatures = [
    { icon: faClipboardCheck, title: "Code-Compliant Installs", description: "Documented work that meets applicable codes and local AHJ expectations." },
    { icon: faShieldHalved, title: "Licensed Fire Alarm Contractor", description: "Bonded & insured professionals — not unlicensed freelancers." },
    { icon: faUsers, title: "Locally Owned Since 2001", description: "Founded in Waco by Captain (ret.) Neil Briggs. Every decision is made locally." },
  ];
  const processSteps = [
    { number: 1, title: "Call or Book Online", description: "Phone, text, or form — we'll confirm a same-day or next-day slot.", icon: faHeadset },
    { number: 2, title: "We Assess On-Site", description: "A licensed tech inspects the system and explains options in plain English.", icon: faSearch },
    { number: 3, title: "Flat-Rate Quote", description: "Written price before any work starts. Zero pressure to proceed.", icon: faFileContract },
    { number: 4, title: "Done Right, Documented", description: "Code-compliant workmanship and clean documentation.", icon: faCheckCircle },
  ];
  const metrics = [
    { icon: faTrophy, value: 4000, label: "Systems maintained across Central Texas", suffix: "+", duration: 3 },
    { icon: faChartLine, value: 98, label: "Customer satisfaction rating", suffix: "%", duration: 2 },
    { icon: faClock, value: 25, label: "Years of local fire protection experience", suffix: "+", duration: 2 },
  ];
  const faq = [
    { question: "How much does fire protection service cost in Waco?", answer: "Inspections and extinguisher service often start in the low hundreds depending on device counts. Repairs and installs vary by scope. We always provide a flat-rate written quote before any work begins." },
    { question: "Do you work on all major system brands?", answer: "Yes — major fire alarm panels, sprinkler components, extinguishers, and kitchen hood systems including Ansul-style systems." },
    { question: "What does annual inspection include?", answer: "System-appropriate testing and written reports for alarms, sprinklers, extinguishers, and hoods as applicable." },
    { question: "Do you offer emergency service?", answer: "Yes — same-day and emergency service 7 days a week including evenings. Call (254) 900-1111 anytime." },
    { question: "Are you bonded and insured?", answer: "Yes — Licensed Fire Alarm Contractor · Bonded & Insured." },
    { question: "What is your guarantee?", answer: "Code-Compliant Installs · Inspection On-Time Guarantee." },
  ];

  return (
    <main className={styles.pageWrapper}>
      <SectionIntro title="Fire Protection Services for Waco & Central Texas" subtitle="Alarms · Sprinklers · Inspections · Monitoring — done right, priced upfront, backed by Code-Compliant Installs · Inspection On-Time Guarantee." />
      <TrustBar headline="4,000+ Central Texas systems maintained by Sentinel Fire Protection" />
      <div className={styles.section}><ServiceCardComponent heading="All Our Services" cards={services} /></div>
      <div className={styles.section}><WhyChooseUs cityName="Waco" features={whyFeatures} title="Why Facilities Choose Sentinel" /></div>
      <div className={styles.section}><ProcessTimeline steps={processSteps} /></div>
      <div className={styles.section}><ImpactMetrics metrics={metrics} cityName="Waco" /></div>
      <div className={styles.section}><Testimonials testimonials={reviews} /></div>
      <div className={styles.section}><GuaranteeSection /></div>
      <div className={styles.section}><FAQ cityName="Waco" faq={faq} title="Fire Protection Service FAQs" /></div>
      <div className={styles.section}><Variant4 title="Request Service or a Free Quote" cityName="Waco" slug="services" spot="services-index-form" formVariant={2} /></div>
      <CTABanner headline="Need Fire Protection Service? Call Sentinel." subline="Same-day appointments. Flat-rate pricing. Licensed Fire Alarm Contractor · Bonded & Insured." primaryText="Call (254) 900-1111" primaryLink="tel:+12549001111" secondaryText="Contact Us" secondaryLink="/contact" />
    </main>
  );
}
