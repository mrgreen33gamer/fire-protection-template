// src/app/service-areas/page.tsx
// Sentinel Fire Protection — Service Areas Page
'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import styles from './page.module.scss';
import CTABanner from '#/PageComponents/CTABanner/CTABanner';
import FAQ from '#/PageComponents/FAQ/FAQ';

const SERVICE_AREAS = [
  {
    city:        'Waco',
    slug:        'waco-tx',
    county:      'McLennan County',
    badge:       'Home Base',
    description: 'Our headquarters. Fastest response times, same-day service available 7 days a week. Full fire alarms, sprinklers, extinguishers, kitchen hoods, monitoring, and annual inspections across all of Waco.',
    highlights:  ['Same-day service', 'Emergency dispatch', 'All services available'],
  },
  {
    city:        'Hewitt',
    slug:        'hewitt-tx',
    county:      'McLennan County',
    badge:       'Primary Area',
    description: 'Full fire protection coverage for Hewitt businesses and multifamily properties. Fast dispatch from our Waco base — typically under 45 minutes.',
    highlights:  ['45-min dispatch', 'Commercial & multifamily', 'Inspection scheduling'],
  },
  {
    city:        'Woodway',
    slug:        'woodway-tx',
    county:      'McLennan County',
    badge:       'Primary Area',
    description: "Serving Woodway facilities with the same flat-rate pricing and Code-Compliant Installs · Inspection On-Time Guarantee as every other area we cover.",
    highlights:  ['Flat-rate pricing', 'Code-compliant installs', 'Licensed technicians'],
  },
  {
    city:        'Bellmead',
    slug:        'bellmead-tx',
    county:      'McLennan County',
    badge:       '',
    description: 'Reliable fire protection service for Bellmead businesses and properties. Alarms, extinguishers, and inspections — same-day when available.',
    highlights:  ['Commercial & multifamily', 'Licensed fire protection technicians', 'No contracts'],
  },
  {
    city:        'China Spring',
    slug:        'china-spring-tx',
    county:      'McLennan County',
    badge:       '',
    description: 'Rural and commercial fire protection service for the China Spring area. We make the drive — flat-rate pricing applies just the same.',
    highlights:  ['Rural coverage', 'Flat-rate pricing', 'Emergency available'],
  },
  {
    city:        'McGregor',
    slug:        'mcgregor-tx',
    county:      'McLennan County',
    badge:       '',
    description: 'Fire alarm, sprinkler, and inspection service for McGregor commercial and light industrial properties.',
    highlights:  ['Shop & commercial', 'Annual inspections', 'Same-day when available'],
  },
  {
    city:        'Killeen',
    slug:        'killeen-tx',
    county:      'Bell County',
    badge:       '',
    description: 'Fire protection service for Killeen and Fort Cavazos area businesses and multifamily. Military-friendly scheduling.',
    highlights:  ['Military-friendly', 'Commercial & multifamily', 'Same-day when available'],
  },
  {
    city:        'Temple',
    slug:        'temple-tx',
    county:      'Bell County',
    badge:       '',
    description: 'Full-service fire protection coverage for Temple. Medical district, restaurants, and multifamily served.',
    highlights:  ['Full service coverage', 'Healthcare & restaurants', 'Commercial & multifamily'],
  },
];

const faq = [
  {
    question: 'What areas do you service?',
    answer: 'Waco, Hewitt, Woodway, Bellmead, China Spring, McGregor, Temple, Killeen, and most of Central Texas within about 60 miles of Waco. Call (254) 900-1111 to confirm your address.',
  },
  {
    question: 'Do you charge trip fees for outlying towns?',
    answer: 'Most addresses in our primary coverage area have no separate trip charge. For edge-of-area locations we will confirm any travel fee before scheduling.',
  },
  {
    question: 'Is same-day service available outside Waco?',
    answer: 'Yes — same-day service is often available in Hewitt, Woodway, and nearby towns. Temple and Killeen depend on schedule load; we give honest ETAs when you call.',
  },
  {
    question: 'Do you inspect multi-site portfolios across cities?',
    answer: 'Yes — we build portfolio inspection calendars across McLennan and Bell County properties with a single point of contact.',
  },
];

export default function ServiceAreasPage() {
  return (
    <main className={styles.pageWrapper}>
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <motion.span
            className={styles.eyebrow}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Central Texas Coverage
          </motion.span>
          <motion.h1
            className={styles.title}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05 }}
          >
            Fire Protection Service Areas
          </motion.h1>
          <motion.p
            className={styles.sub}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.12 }}
          >
            Based in Waco — serving restaurants, healthcare, multifamily, and commercial facilities across Central Texas with licensed crews and flat-rate pricing.
          </motion.p>
        </div>
      </section>

      <section className={styles.gridSection}>
        <div className={styles.grid}>
          {SERVICE_AREAS.map((area, i) => (
            <motion.article
              key={area.city}
              className={styles.card}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.04 }}
            >
              <div className={styles.cardTop}>
                <h2 className={styles.city}>{area.city}</h2>
                {area.badge && <span className={styles.badge}>{area.badge}</span>}
              </div>
              <p className={styles.county}>{area.county}</p>
              <p className={styles.desc}>{area.description}</p>
              <ul className={styles.highlights}>
                {area.highlights.map((h) => (
                  <li key={h}>{h}</li>
                ))}
              </ul>
              <Link href="/contact" className={styles.cardLink}>
                Request Service in {area.city} →
              </Link>
            </motion.article>
          ))}
        </div>
      </section>

      <div className={styles.faqWrap}>
        <FAQ cityName="Waco" faq={faq} title="Service Area FAQs" />
      </div>

      <CTABanner
        headline="Not Sure If We Cover Your Address?"
        subline="Call (254) 900-1111 — we will confirm coverage in under a minute."
        primaryText="Call (254) 900-1111"
        primaryLink="tel:+12549001111"
        secondaryText="Contact Online"
        secondaryLink="/contact"
      />
    </main>
  );
}
