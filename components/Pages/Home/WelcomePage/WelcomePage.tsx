// _archetype-library/hero-f-blueprint/Component.tsx
//
// Hero F: Blueprint Schematic — self-drawing SVG line-art (house wireframe /
// abstract floor-plan). Stroke-dashoffset draw-in on mount.
'use client';
import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { PhoneIcon, ChevronIcon, CheckIcon } from './_shared/icons';
import styles from './styles.module.scss';

/** Path lengths are estimated; we measure real lengths on mount for accuracy. */
function BlueprintSchematic({ label }: { label: string }) {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const svg = svgRef.current;
    if (!svg) return;
    // data-draw marks stroke geometry; filled nodes are excluded
    const paths = Array.from(svg.querySelectorAll<SVGGeometryElement>('[data-draw]'));

    paths.forEach((el, i) => {
      const length = typeof el.getTotalLength === 'function' ? el.getTotalLength() : 400;
      el.style.strokeDasharray = `${length}`;
      el.style.strokeDashoffset = `${length}`;
      el.style.animation = `blueprintDraw 1.6s cubic-bezier(0.4, 0, 0.2, 1) forwards`;
      el.style.animationDelay = `${0.35 + i * 0.07}s`;
    });
  }, []);

  return (
    <div className={styles.schematicWrap} role="img" aria-label={label}>
      <div className={styles.schematicGrid} aria-hidden="true" />
      <svg
        ref={svgRef}
        className={styles.schematic}
        viewBox="0 0 360 320"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        {/* Outer plot boundary */}
        <rect data-draw x="24" y="48" width="312" height="240" rx="2" className={styles.traceDim} />

        {/* Main structure footprint */}
        <path
          data-draw
          d="M56 200 L56 120 L120 72 L184 120 L184 200 Z"
          className={styles.traceMain}
        />
        {/* Roof ridge detail */}
        <line data-draw x1="120" y1="72" x2="120" y2="200" className={styles.traceDim} />

        {/* Attached wing / garage volume */}
        <path
          data-draw
          d="M184 200 L184 140 L280 140 L280 200 Z"
          className={styles.traceMain}
        />
        {/* Wing roof slope */}
        <path data-draw d="M184 140 L232 108 L280 140" className={styles.traceAccent} />

        {/* Interior partition lines */}
        <line data-draw x1="56" y1="160" x2="184" y2="160" className={styles.traceDim} />
        <line data-draw x1="120" y1="160" x2="120" y2="200" className={styles.traceDim} />
        <line data-draw x1="232" y1="140" x2="232" y2="200" className={styles.traceDim} />

        {/* Door openings */}
        <path data-draw d="M100 200 L100 182 Q110 170 120 182 L120 200" className={styles.traceAccent} />
        <line data-draw x1="248" y1="200" x2="264" y2="200" className={styles.traceAccent} />

        {/* Window marks */}
        <rect data-draw x="72" y="128" width="28" height="20" className={styles.traceDim} />
        <rect data-draw x="140" y="128" width="28" height="20" className={styles.traceDim} />
        <rect data-draw x="244" y="156" width="24" height="18" className={styles.traceDim} />

        {/* Circuit-ish utility runs */}
        <polyline
          data-draw
          points="56,200 40,200 40,248 200,248 200,200"
          className={styles.traceAccent}
        />
        <polyline
          data-draw
          points="280,170 300,170 300,248 200,248"
          className={styles.traceDim}
        />

        {/* Junction nodes (no draw animation) */}
        <circle cx="40" cy="200" r="3.5" className={styles.node} />
        <circle cx="200" cy="248" r="3.5" className={styles.node} />
        <circle cx="300" cy="170" r="3.5" className={styles.node} />
        <circle cx="120" cy="72" r="4" className={styles.nodeAccent} />
        <circle cx="232" cy="108" r="3.5" className={styles.nodeAccent} />

        {/* Dimension tick marks */}
        <line data-draw x1="56" y1="216" x2="184" y2="216" className={styles.traceDim} />
        <line data-draw x1="56" y1="212" x2="56" y2="220" className={styles.traceDim} />
        <line data-draw x1="184" y1="212" x2="184" y2="220" className={styles.traceDim} />
        <line data-draw x1="296" y1="48" x2="336" y2="48" className={styles.traceDim} />
        <line data-draw x1="336" y1="48" x2="336" y2="288" className={styles.traceDim} />

        {/* Compass rose (abstract) */}
        <circle data-draw cx="308" cy="72" r="14" className={styles.traceDim} />
        <line data-draw x1="308" y1="58" x2="308" y2="86" className={styles.traceAccent} />
        <line data-draw x1="294" y1="72" x2="322" y2="72" className={styles.traceDim} />
      </svg>
      <div className={styles.schematicCaption} aria-hidden="true">
        <span className={styles.captionDot} />
        SCHEMATIC
      </div>
    </div>
  );
}

export default function WelcomePage() {
const badgeText = 'Waco\'s Most Trusted Fire Protection Pros — Since 2001';
const headlineLines = [
  'Systems Protected.',
  'Code Right.',
];
const headlineAccent = 'Sentinel Fire Protection.';
const subheadline = 'Alarms · Sprinklers · Inspections · Monitoring. Flat-rate pricing. Same-day service. Code-Compliant Installs · Inspection On-Time Guarantee. Serving Waco and Central Texas with licensed fire protection technicians.';
const primaryCta = { label: 'Call (254) 900-1111', href: 'tel:+12549001111' };
const secondaryCta = { label: 'Free Estimate', href: '/contact' };
const chips = [
  'Same-Day Service',
  'No Contracts',
  'Licensed Fire Alarm Contractor',
  '25+ Yrs Local',
  'Code-Compliant Installs',
];
const stats = [
  {
    "value": "500+",
    "label": "Jobs Done"
  },
  {
    "value": "4.9 ★",
    "label": "Rating"
  },
  {
    "value": "15+",
    "label": "Years Local"
  },
  {
    "value": "1-Yr",
    "label": "Warranty"
  }
];
const meterTarget = 72;
const meterTopLabel = "Alert";
const meterMidLabel = "Monitor";
const meterBotLabel = "Secure";
const particleColor = '#dc2626';
const beforeImageSrc = '/pages/home/welcome/before.jpg';
const afterImageSrc = '/pages/home/welcome/after.jpg';
const beforeLabel = "Failed inspection";
const afterLabel = "Compliant";
const mapCenterLabel = 'Service HQ';
const mapPins = [
  { label: 'Waco', x: 42, y: 48 },
  { label: 'Temple', x: 68, y: 62 },
  { label: 'Killeen', x: 58, y: 72 },
];
const coverageLabel = 'Central Texas coverage';
const materials = [
  { name: "Sprinkler", swatch: "#dc2626", imageSrc: "/pages/home/welcome/mat-1.jpg" },
  { name: "Extinguisher", swatch: "#ef4444", imageSrc: "/pages/home/welcome/mat-2.jpg" },
  { name: "Kitchen Hood", swatch: "#b91c1c", imageSrc: "/pages/home/welcome/mat-3.jpg" },
  { name: "Backflow", swatch: "#f87171", imageSrc: "/pages/home/welcome/mat-1.jpg" },
  { name: "Monitoring", swatch: "#991b1b", imageSrc: "/pages/home/welcome/mat-2.jpg" },
  { name: "Impairment", swatch: "#7f1d1d", imageSrc: "/pages/home/welcome/mat-3.jpg" }
];
const quote = "We needed a clean inspection window. Sentinel handled impairments and paper trail — passed first time.";
const authorName = "Facilities Lead";
const authorMeta = "Multi-tenant · Waco";
const rating = 5;
const schematicLabel = "Sentinel schematic";
const gauges = [
  { label: "Sites", value: "900+" },
  { label: "Rating", value: "4.8 ★" },
  { label: "Docs", value: "Same day" },
  { label: "Emergency", value: "Yes" }
];
const toggles = [
  { label: "Licensed crew", on: true },
  { label: "Same-week", on: true },
  { label: "Warrantied", on: true }
];
const textureSrc = '/pages/home/welcome/hero-main.jpg';
const textureAlt = 'Texture';
const accentWord = "Sentinel";

  return (
    <section className={styles.hero} aria-label="Hero">
      <div className={styles.shard} aria-hidden="true" />

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
              <React.Fragment key={i}>{line}<br /></React.Fragment>
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

        <motion.div
          className={styles.visual}
          initial={{ opacity: 0, x: 28 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.25, ease: 'easeOut' }}
        >
          <BlueprintSchematic label={schematicLabel} />
        </motion.div>
      </div>
    </section>
  );
}
