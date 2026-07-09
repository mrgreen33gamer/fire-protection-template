"use client";
import Breadcrumb from "#/PageComponents/Breadcrumb/Breadcrumb";
import styles from "./page.module.scss";
import SectionIntro from "#/PageComponents/SectionIntro/SectionIntro";
import TrustBar from "#/PageComponents/TrustBar/TrustBar";
import SectionIndustriesServed from "#/PageComponents/SectionIndustriesServed/SectionIndustriesServed";
import WhyChooseUs from "#/PageComponents/WhyChooseUs/WhyChooseUs";
import ImpactMetrics from "#/PageComponents/ImpactMetrics/ImpactMetrics";
import LocalServiceAreas from "#/PageComponents/LocalServiceAreas/LocalServiceAreas";
import ValueComparison from "#/PageComponents/ValueComparison/ValueComparison";
import FAQ from "#/PageComponents/FAQ/FAQ";
import CTABanner from "#/PageComponents/CTABanner/CTABanner";
import Variant4 from "#/PageComponents/ContactForms/Variant4/Form";

import {
  faTrophy, faChartLine, faClock,
  faHandshake, faShieldHalved, faFileInvoiceDollar,
} from "@fortawesome/free-solid-svg-icons";

export default function IndustriesPage() {
  const whyFeatures = [
    { icon: faHandshake, title: "We Learn Your Operation Before We Quote", description: "A restaurant, a clinic, and a multifamily portfolio all work differently. Before we quote, we learn access rules, hours, and compliance deadlines." },
    { icon: faShieldHalved, title: "Licensed Fire Alarm Contractor · Bonded & Insured", description: "Based in Waco, TX with full insurance and the documentation commercial projects require." },
    { icon: faFileInvoiceDollar, title: "Alarms, Sprinklers, Hoods & Inspections — One Vendor", description: "Life-safety systems under one roof so deficiencies do not bounce between contractors." },
  ];
  const metrics = [
    { icon: faTrophy, value: 3, label: "B2B industries actively served across Central Texas", suffix: "", duration: 2 },
    { icon: faChartLine, value: 4000, label: "Systems maintained for organizations", suffix: "+", duration: 3 },
    { icon: faClock, value: 25, label: "Years serving Central Texas organizations", suffix: "+", duration: 2 },
  ];
  const localAreas = [
    { town: "Waco", benefit: "Our home base — serving restaurants, healthcare, and multifamily.", badge: "Headquarters" },
    { town: "Temple", benefit: "Commercial and multifamily properties across Bell County.", badge: "" },
    { town: "Killeen", benefit: "Retail, apartments, and medical facilities.", badge: "" },
    { town: "Hewitt", benefit: "Suburban commercial and multifamily.", badge: "" },
    { town: "Woodway", benefit: "Professional offices and premium properties.", badge: "" },
    { town: "McGregor", benefit: "Industrial corridor and commercial sites.", badge: "" },
  ];
  const comparisonRows = [
    { feature: "Organization-specific scheduling", us: "✅ Built per project type", others: "❌ One-size-fits-all" },
    { feature: "Central Texas market knowledge", us: "✅ 25+ years in Waco", others: "❌ Out-of-area contractors" },
    { feature: "Licensed commercial crews", us: "✅ Always", others: "❌ Not always" },
    { feature: "Transparent, upfront pricing", us: "✅ Quote before work starts", others: "❌ Billable hours + surprises" },
    { feature: "Code-Compliant Installs · Inspection On-Time Guarantee", us: "✅ On every job", others: "❌ Limited or none" },
  ];
  const faq = [
    { question: "What types of organizations does Sentinel Fire Protection work with?", answer: "Restaurants & hospitality, healthcare facilities, and multifamily housing — in addition to general commercial fire protection." },
    { question: "Do you build a custom proposal for each organization?", answer: "Yes. Every proposal is built around hours, access rules, CapEx cycles, and compliance deadlines." },
    { question: "Do you serve organizations outside of Waco?", answer: "Yes — Temple, Killeen, Hewitt, Woodway, McGregor, China Spring, Bellmead, and most of Central Texas within about 60 miles of Waco." },
    { question: "Can you handle multi-property portfolios?", answer: "Yes — phased, portfolio-wide pricing and scheduling with a single dedicated point of contact." },
  ];

  return (
    <main className={styles.pageWrapper}>
      <Breadcrumb crumbs={[{ label: "Home", href: "/" }, { label: "Industries" }]} />
      <SectionIntro title="Fire Protection by Industry" subtitle="Life-safety programs built for how restaurants, healthcare, and multifamily actually operate — inspections, monitoring, and emergency response included." />
      <TrustBar headline="Organizations across Central Texas trust Sentinel Fire Protection" />
      <div className={styles.section}><SectionIndustriesServed /></div>
      <div className={styles.section}><WhyChooseUs cityName="Waco" features={whyFeatures} title="Why Organizations Choose Sentinel" /></div>
      <div className={styles.section}><ImpactMetrics metrics={metrics} cityName="Waco" /></div>
      <div className={styles.section}><ValueComparison rows={comparisonRows} /></div>
      <div className={styles.section}><LocalServiceAreas cityName="Waco" areas={localAreas} servicePath="industries" title="Industry Coverage Across Central Texas" /></div>
      <div className={styles.section}><FAQ cityName="Waco" faq={faq} title="Industry Fire Protection FAQs" /></div>
      <div className={styles.section}><Variant4 title="Request an Industry Quote" cityName="Waco" slug="industries" spot="industries-index-form" formVariant={2} /></div>
      <CTABanner headline="Need Fire Protection Built for Your Industry?" subline="Restaurants · Healthcare · Multifamily. Flat-rate pricing. Licensed & insured." primaryText="Call (254) 900-1111" primaryLink="tel:+12549001111" secondaryText="Contact Us" secondaryLink="/contact" />
    </main>
  );
}
