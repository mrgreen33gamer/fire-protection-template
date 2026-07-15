// Fire Protection Hero — Sentinel (safety-critical red)
// Photographic parallax stage + an authentic fire-sprinkler card replaces the
// abstract riser blueprint schematic. Real imagery, brand red, Black Ops One
// headline. Photos live in /public/pages/home/welcome and are wired into the hero.
'use client';
import React, { useRef } from 'react';
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { PhoneIcon, ChevronIcon, CheckIcon } from './_shared/icons';
import styles from './styles.module.scss';

export default function WelcomePage() {
  const reduceMotion = useReducedMotion();
  const heroRef = useRef<HTMLElement>(null);

  // Scroll-linked parallax on the background photo. Disabled under reduced-motion.
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', reduceMotion ? '0%' : '16%']);
  const bgScale = useTransform(scrollYProgress, [0, 1], [1.08, reduceMotion ? 1.08 : 1.16]);

  const badgeText = "Waco's Most Trusted Fire Protection Pros — Since 2001";
  const headlineLines = ['Systems Protected.', 'Code Right.'];
  const headlineAccent = 'Sentinel Fire Protection.';
  const subheadline =
    'Alarms · Sprinklers · Inspections · Monitoring. Flat-rate pricing. Same-day service. Code-Compliant Installs · Inspection On-Time Guarantee. Serving Waco and Central Texas with licensed fire protection technicians.';
  const primaryCta = { label: 'Call (254) 900-1111', href: 'tel:+12549001111' };
  const secondaryCta = { label: 'Free Estimate', href: '/contact' };
  const chips = [
    'Same-Day Service',
    'No Contracts',
    'Licensed Fire Alarm Contractor',
    '25+ Yrs Local',
    'Code-Compliant Installs',
  ];

  return (
    <section ref={heroRef} className={styles.hero} aria-label="Hero">
      {/* Photographic parallax background — a real fire-sprinkler riser bank */}
      <motion.div
        className={styles.bgLayer}
        style={{ y: bgY, scale: bgScale }}
        aria-hidden="true"
      >
        <Image
          src="/pages/home/welcome/hero-sprinkler-risers.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className={styles.bgImage}
        />
      </motion.div>
      {/* Safety-red scrim keeps the headline legible and on-brand */}
      <div className={styles.scrim} aria-hidden="true" />

      <div className={styles.layout}>
        <div className={styles.content}>
          <motion.div
            className={styles.badge}
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className={styles.badgeDot} />
            {badgeText}
          </motion.div>

          <motion.h1
            className={styles.headline}
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            {headlineLines.map((line, i) => (
              <React.Fragment key={i}>
                {line}
                <br />
              </React.Fragment>
            ))}
            <span className={styles.accentLine}>{headlineAccent}</span>
          </motion.h1>

          <motion.p
            className={styles.sub}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.22 }}
          >
            {subheadline}
          </motion.p>

          <motion.div
            className={styles.ctaRow}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.34 }}
          >
            <a href={primaryCta.href} className={styles.ctaPrimary}>
              <PhoneIcon size={15} /> {primaryCta.label}
            </a>
            <Link href={secondaryCta.href} className={styles.ctaSecondary}>
              {secondaryCta.label} <ChevronIcon size={12} />
            </Link>
          </motion.div>

          <motion.div
            className={styles.chips}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.48 }}
          >
            {chips.map((c) => (
              <span key={c} className={styles.chip}>
                <CheckIcon size={9} /> {c}
              </span>
            ))}
          </motion.div>
        </div>

        {/* Authentic fire-sprinkler control valve — the ownable image, framed as a spec card */}
        <motion.div
          className={styles.visual}
          initial={{ opacity: 0, x: 28 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.25, ease: 'easeOut' }}
        >
          <div className={styles.photoCard}>
            <Image
              src="/pages/home/welcome/hero-sprinkler-valve.jpg"
              alt="Red fire-sprinkler post-indicator control valve on a commercial building riser, tagged and locked for shut-off"
              fill
              priority
              sizes="(max-width: 960px) 88vw, 460px"
              className={styles.photo}
            />
            <div className={styles.photoGlaze} aria-hidden="true" />

            <div className={styles.photoBadge}>
              <span className={styles.photoBadgeDot} />
              NFPA-Compliant · Waco, TX
            </div>

            <div className={styles.specCard}>
              <span className={styles.specRow}>
                <CheckIcon size={10} /> Code-compliant installs
              </span>
              <span className={styles.specRow}>
                <CheckIcon size={10} /> Inspection on-time guarantee
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
