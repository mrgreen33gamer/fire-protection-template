// Sentinel Fire Protection — Homepage
"use client";

import styles from "./page.module.scss";
import reviews from "../../libs/local-db/reviews";

import WelcomePage        from "#/Pages/Home/WelcomePage/WelcomePage";
import TrustBar           from "#/PageComponents/TrustBar/TrustBar";
import ImpactMetrics      from "#/PageComponents/ImpactMetrics/ImpactMetrics";
import ServiceCardComponent from "#/PageComponents/ServiceCardComponent/ServiceCardComponent";
import WhyChooseUs        from "#/PageComponents/WhyChooseUs/WhyChooseUs";
import CTABanner          from "#/PageComponents/CTABanner/CTABanner";
import ProcessTimeline    from "#/PageComponents/ProcessTimeline/ProcessTimeline";
import Testimonials       from "#/PageComponents/Testimonials/Testimonials";
import GuaranteeSection   from "#/PageComponents/GuaranteeSection/GuaranteeSection";
import LocalServiceAreas  from "#/PageComponents/LocalServiceAreas/LocalServiceAreas";
import WhatToExpect       from "#/PageComponents/WhatToExpect/WhatToExpect";
import FAQ                from "#/PageComponents/FAQ/FAQ";
import BlogPreviewGrid    from "#/PageComponents/BlogPreviewGrid/BlogPreviewGrid";

import {
  faBell, faFireExtinguisher, faShieldHalved, faFire, faSatelliteDish, faClipboardCheck,
  faTrophy, faChartLine, faClock,
  faUsers,
  faHeadset, faSearch, faFileContract, faCheckCircle,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import Variant4 from "#/PageComponents/ContactForms/Variant4/Form";

export default function HomePage() {

  const services = [
    {
      icon: faBell,
      title: "Fire Alarm Systems",
      body: "Design, install, service, and expand conventional and addressable fire alarm systems — detectors, NAC circuits, panels, and AHJ documentation.",
      link: "/services/fire-alarms",
      image: "/pages/home/services/service-1.jpg",
    },
    {
      icon: faFire,
      title: "Sprinkler Systems",
      body: "Wet, dry, and pre-action sprinkler service — head replacement, riser work, hydro tests, and impairment procedures coordinated with your facility.",
      link: "/services/sprinkler-systems",
      image: "/pages/home/services/service-2.jpg",
    },
    {
      icon: faFireExtinguisher,
      title: "Fire Extinguishers",
      body: "Annual extinguisher service, hydro testing, new units, and tagged inventory for offices, restaurants, multifamily, and industrial sites.",
      link: "/services/fire-extinguishers",
      image: "/pages/home/services/service-3.jpg",
    },
    {
      icon: faShieldHalved,
      title: "Kitchen Hood Suppression",
      body: "Ansul and kitchen hood system inspection, link replacement, cylinder service, and semi-annual certification for restaurants and food service.",
      link: "/services/kitchen-hood",
      image: "/pages/home/services/service-4.jpg",
    },
    {
      icon: faSatelliteDish,
      title: "Monitoring",
      body: "24/7 central station fire alarm monitoring with signal testing, account setup, and clear communication with your AHJ and insurance carrier.",
      link: "/services/monitoring",
      image: "/pages/home/welcome/before.jpg",
    },
    {
      icon: faClipboardCheck,
      title: "Annual Inspections",
      body: "NFPA-aligned annual and periodic inspections with deficiency reports, re-inspections, and inspection-on-time scheduling you can count on.",
      link: "/services/annual-inspections",
      image: "/pages/home/welcome/after.jpg",
    },
  ];

  const metrics = [
    { icon: faTrophy,    value: 4000, label: "Systems maintained across Central Texas", suffix: "+", duration: 3 },
    { icon: faClock,     value: 25,   label: "Years of local fire protection experience", suffix: "+", duration: 2 },
    { icon: faChartLine, value: 98,   label: "Customer satisfaction rating",          suffix: "%", duration: 2 },
  ];

  const whyFeatures = [
    {
      icon: faClipboardCheck,
      title: "Code-Compliant Installs",
      description: "Every install is designed and documented to meet applicable codes and local AHJ expectations — not just 'good enough' until the next inspection.",
    },
    {
      icon: faShieldHalved,
      title: "Licensed Fire Alarm Contractor",
      description: "Bonded & insured fire protection professionals. No unlicensed freelancers working alone on your life-safety systems.",
    },
    {
      icon: faUsers,
      title: "Locally Owned Since 2001",
      description: "Founded in Waco by Captain (ret.) Neil Briggs. Every decision is made locally — by people who live and work here.",
    },
  ];

  const processSteps = [
    {
      number: 1,
      title: "Call or Book Online",
      description: "Phone, text, or the form below — your choice. We'll confirm a same-day or next-day slot that fits your schedule.",
      icon: faHeadset,
    },
    {
      number: 2,
      title: "We Assess On-Site",
      description: "A licensed tech inspects the system, explains deficiencies in plain English, and shows options — not just the most expensive one.",
      icon: faSearch,
    },
    {
      number: 3,
      title: "You Get a Flat-Rate Quote",
      description: "Written price before any work starts. You decide — zero pressure to proceed. The quote never changes mid-job.",
      icon: faFileContract,
    },
    {
      number: 4,
      title: "Done Right, Documented",
      description: "Code-compliant workmanship, clean documentation, and Inspection On-Time Guarantee on scheduled service.",
      icon: faCheckCircle,
    },
  ];

  const expectations = [
    {
      icon: faSearch,
      title: "Honest System Assessment",
      description: "We diagnose what's actually deficient — not what's most profitable to sell. You see the findings before we quote anything.",
    },
    {
      icon: faShieldHalved,
      title: "Clean, Professional Work",
      description: "Impairment tags when required, work areas protected, devices tested and restored. Your facility left ready for occupancy.",
    },
    {
      icon: faCheckCircle,
      title: "Upfront Flat-Rate Price",
      description: "Written quote before any work begins. The number doesn't change when the job runs long — that's our problem, not yours.",
    },
    {
      icon: faStar,
      title: "Inspection-Ready Documentation",
      description: "Reports, tags, and certificates your AHJ and insurance carrier expect — delivered without the chase.",
    },
  ];

  const localAreas = [
    { town: "Waco",         benefit: "Home base — fastest scheduling and most available techs in the city.", badge: "Home Base" },
    { town: "Hewitt",       benefit: "Full commercial and multifamily coverage. On our regular route.",      badge: "" },
    { town: "Woodway",      benefit: "Regular availability for Woodway businesses and facilities.",          badge: "" },
    { town: "Temple",       benefit: "Regular service area — quick turnaround guaranteed.",                  badge: "" },
    { town: "China Spring", benefit: "Rural coverage, no trip charge for most China Spring addresses.",      badge: "" },
    { town: "Killeen",      benefit: "Full coverage for Killeen and Fort Cavazos area customers.",           badge: "" },
  ];

  const faq = [
    {
      question: "How much does fire protection service cost in Waco?",
      answer: "Annual inspections and extinguisher service often start in the low hundreds depending on device counts. Alarm repairs and sprinkler work vary by scope. We always provide a flat-rate written quote before any work begins.",
    },
    {
      question: "Do you offer same-day or emergency service?",
      answer: "Yes — same-day and emergency fire protection service is available 7 days a week including evenings for system troubles and impairments. Call us at (254) 900-1111 anytime.",
    },
    {
      question: "How quickly can you schedule an inspection?",
      answer: "Most inspections are scheduled within 1–2 weeks. We also offer Inspection On-Time Guarantee so you can plan around AHJ and insurance deadlines.",
    },
    {
      question: "What fire protection services do you offer?",
      answer: "Fire alarm systems, sprinkler systems, fire extinguishers, kitchen hood suppression, monitoring, and annual inspections.",
    },
    {
      question: "Are you bonded and insured?",
      answer: "Yes — Sentinel Fire Protection is a Licensed Fire Alarm Contractor · Bonded & Insured. Credentials available on request.",
    },
    {
      question: "What is your guarantee?",
      answer: "Code-Compliant Installs · Inspection On-Time Guarantee — we stand behind workmanship and keep scheduled inspections on the calendar.",
    },
  ];

  return (
    <main className={styles.pageWrapper}>
      <WelcomePage />
      <TrustBar
        headline="Waco's trusted fire protection company — licensed, insured, and code-compliant on every job"
      />
      <div className={styles.section}>
        <ImpactMetrics
          title="Numbers That Speak for Us"
          metrics={metrics}
          cityName="Waco"
        />
      </div>
      <div className={styles.section}>
        <WhyChooseUs
          cityName="Waco"
          features={whyFeatures}
          title="What Makes Sentinel Fire Protection Different"
        />
      </div>
      <div className={styles.section}>
        <ServiceCardComponent
          heading="Complete Fire Protection Services for Your Facility"
          cards={services}
        />
      </div>
      <div className={styles.section}>
        <GuaranteeSection />
      </div>
      <div className={styles.section}>
        <ProcessTimeline steps={processSteps} />
      </div>
      <div className={styles.section}>
        <Testimonials testimonials={reviews} />
      </div>
      <CTABanner
        headline="Inspection-Ready Fire Protection."
        subline="Sprinklers, extinguishers, and alarm-related protection work with documentation your AHJ expects."
        primaryText="Call (254) 900-1111"
        primaryLink="tel:+12549001111"
        secondaryText="Schedule Inspection"
        secondaryLink="/contact"
        imageSrc="/pages/home/welcome/hero-main.jpg"
      />
      <div className={styles.section}>
        <LocalServiceAreas
          cityName="Waco"
          areas={localAreas}
          servicePath=""
          title="Serving All of Central Texas"
        />
      </div>
      <div className={styles.section}>
        <WhatToExpect
          sectionTitle="Every Service Call, Every Time"
          expectations={expectations}
        />
      </div>
      <div className={styles.section}>
        <FAQ
          cityName="Waco"
          faq={faq}
          title="Fire Protection Questions — Answered Straight"
        />
      </div>
      <div className={styles.section}>
        <BlogPreviewGrid />
      </div>
      <div className={styles.section}>
        <Variant4
          title="Request Service or a Free Quote"
          cityName="Waco"
          slug="/"
          spot="homepage-contact-form"
          formVariant={2}
        />
      </div>
    </main>
  );
}
