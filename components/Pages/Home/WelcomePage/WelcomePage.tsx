// Fire Protection Hero — Sprinkler Riser + Head Layout Schematic
// Trade-specific blueprint (not generic house). Draw-in + setTimeout safety.
'use client';
import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { PhoneIcon, ChevronIcon, CheckIcon } from './_shared/icons';
import styles from './styles.module.scss';

function BlueprintSchematic({ label }: { label: string }) {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const svg = svgRef.current;
    if (!svg) return;
    const paths = Array.from(svg.querySelectorAll<SVGGeometryElement>('[data-draw]'));

    paths.forEach((el, i) => {
      const length = typeof el.getTotalLength === 'function' ? el.getTotalLength() : 400;
      el.style.strokeDasharray = `${length}`;
      el.style.strokeDashoffset = `${length}`;
      el.style.animation = `blueprintDraw 1.55s cubic-bezier(0.4, 0, 0.2, 1) forwards`;
      el.style.animationDelay = `${0.28 + i * 0.055}s`;
      // Safety: force lines visible even if keyframes fail in CSS modules
      window.setTimeout(() => {
        el.style.strokeDashoffset = '0';
      }, 2200 + i * 40);
    });
  }, []);

  return (
    <div className={styles.schematicWrap} role="img" aria-label={label}>
      <div className={styles.schematicGrid} aria-hidden="true" />
      <div className={styles.rBadge} aria-hidden="true">
        NFPA LAYOUT
      </div>
      <svg
        ref={svgRef}
        className={styles.schematic}
        viewBox="0 0 360 320"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        {/* Floor plate boundary */}
        <rect data-draw x="28" y="36" width="304" height="250" rx="2" className={styles.traceDim} />

        {/* Main riser column (left) */}
        <rect data-draw x="44" y="56" width="28" height="210" className={styles.traceMain} />
        <line data-draw x1="44" y1="90" x2="72" y2="90" className={styles.traceAccent} />
        <line data-draw x1="44" y1="130" x2="72" y2="130" className={styles.traceAccent} />
        <line data-draw x1="44" y1="170" x2="72" y2="170" className={styles.traceDim} />
        <line data-draw x1="44" y1="210" x2="72" y2="210" className={styles.traceDim} />

        {/* OS&Y / control valve callout on riser */}
        <circle data-draw cx="58" cy="110" r="10" className={styles.traceAccent} />
        <line data-draw x1="58" y1="100" x2="58" y2="120" className={styles.traceAccent} />
        <line data-draw x1="48" y1="110" x2="68" y2="110" className={styles.traceAccent} />

        {/* Horizontal feed main from riser */}
        <line data-draw x1="72" y1="110" x2="310" y2="110" className={styles.traceMain} />

        {/* Branch lines (grid) */}
        <line data-draw x1="110" y1="110" x2="110" y2="250" className={styles.traceMain} />
        <line data-draw x1="160" y1="110" x2="160" y2="250" className={styles.traceMain} />
        <line data-draw x1="210" y1="110" x2="210" y2="250" className={styles.traceMain} />
        <line data-draw x1="260" y1="110" x2="260" y2="250" className={styles.traceMain} />
        <line data-draw x1="310" y1="110" x2="310" y2="200" className={styles.traceDim} />

        {/* Cross mains */}
        <line data-draw x1="110" y1="160" x2="310" y2="160" className={styles.traceDim} />
        <line data-draw x1="110" y1="210" x2="260" y2="210" className={styles.traceDim} />
        <line data-draw x1="110" y1="250" x2="260" y2="250" className={styles.traceDim} />

        {/* Sprinkler head deflector marks (T-junction + head) */}
        <path data-draw d="M110 135 L110 128 M104 128 L116 128" className={styles.traceAccent} />
        <path data-draw d="M160 135 L160 128 M154 128 L166 128" className={styles.traceAccent} />
        <path data-draw d="M210 135 L210 128 M204 128 L216 128" className={styles.traceAccent} />
        <path data-draw d="M260 135 L260 128 M254 128 L266 128" className={styles.traceAccent} />

        <path data-draw d="M110 185 L110 178 M104 178 L116 178" className={styles.traceAccent} />
        <path data-draw d="M160 185 L160 178 M154 178 L166 178" className={styles.traceAccent} />
        <path data-draw d="M210 185 L210 178 M204 178 L216 178" className={styles.traceAccent} />
        <path data-draw d="M260 185 L260 178 M254 178 L266 178" className={styles.traceAccent} />

        <path data-draw d="M110 235 L110 228 M104 228 L116 228" className={styles.traceAccent} />
        <path data-draw d="M160 235 L160 228 M154 228 L166 228" className={styles.traceAccent} />
        <path data-draw d="M210 235 L210 228 M204 228 L216 228" className={styles.traceAccent} />
        <path data-draw d="M260 235 L260 228 M254 228 L266 228" className={styles.traceAccent} />

        {/* Spray radius arcs on select heads */}
        <path data-draw d="M96 128 Q110 112 124 128" className={styles.traceDim} />
        <path data-draw d="M196 178 Q210 162 224 178" className={styles.traceDim} />
        <path data-draw d="M146 228 Q160 212 174 228" className={styles.traceDim} />

        {/* Fire department connection (FDC) stub */}
        <path data-draw d="M58 266 L58 280 L88 280" className={styles.traceAccent} />
        <rect data-draw x="88" y="272" width="18" height="16" className={styles.traceAccent} />

        {/* Alarm bell / flow switch */}
        <circle data-draw cx="58" cy="70" r="8" className={styles.traceDim} />
        <path data-draw d="M54 70 L62 70 M58 66 L58 74" className={styles.traceDim} />

        {/* Dimension ticks */}
        <line data-draw x1="110" y1="268" x2="260" y2="268" className={styles.traceDim} />
        <line data-draw x1="110" y1="264" x2="110" y2="272" className={styles.traceDim} />
        <line data-draw x1="260" y1="264" x2="260" y2="272" className={styles.traceDim} />

        {/* Nodes — heads + valves (filled, no draw) */}
        <circle cx="58" cy="110" r="3.5" className={styles.nodeAccent} />
        <circle cx="110" cy="128" r="2.8" className={styles.node} />
        <circle cx="160" cy="128" r="2.8" className={styles.node} />
        <circle cx="210" cy="128" r="2.8" className={styles.nodeAccent} />
        <circle cx="260" cy="128" r="2.8" className={styles.node} />
        <circle cx="110" cy="178" r="2.8" className={styles.node} />
        <circle cx="160" cy="178" r="2.8" className={styles.nodeAccent} />
        <circle cx="210" cy="178" r="2.8" className={styles.node} />
        <circle cx="260" cy="178" r="2.8" className={styles.node} />
        <circle cx="110" cy="228" r="2.8" className={styles.node} />
        <circle cx="160" cy="228" r="2.8" className={styles.node} />
        <circle cx="210" cy="228" r="2.8" className={styles.nodeAccent} />
        <circle cx="260" cy="228" r="2.8" className={styles.node} />
        <circle cx="97" cy="280" r="3" className={styles.nodeAccent} />
      </svg>
      <div className={styles.schematicCaption} aria-hidden="true">
        <span className={styles.captionDot} />
        SPRINKLER RISER
      </div>
      <div className={styles.layerLegend} aria-hidden="true">
        <span>
          <i className={styles.legBatt} /> Riser / main
        </span>
        <span>
          <i className={styles.legFoam} /> Branch line
        </span>
        <span>
          <i className={styles.legAir} /> Head / FDC
        </span>
      </div>
    </div>
  );
}

export default function WelcomePage() {
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
  const schematicLabel = 'Sentinel schematic';

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
