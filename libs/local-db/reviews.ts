// libs/local-db/reviews.ts
// ─────────────────────────────────────────────────────────────────────────────
// Static testimonials for Sentinel Fire Protection — used by Testimonials component,
// schema markup, and aggregate rating in layout.tsx.
// ─────────────────────────────────────────────────────────────────────────────

export interface Review {
  name:     string;
  location: string;
  rating:   number;
  date:     string;
  text:     string;
  service?: string;
}

const reviews: Review[] = [
  {
    name:     'Marcus T.',
    location: 'Waco, TX',
    rating:   5,
    date:     'March 2026',
    service:  'Fire Alarm Systems',
    text:     "Our panel went into constant trouble after a remodel. Sentinel Fire Protection diagnosed the zone wiring the same day, replaced a bad smoke detector, and got us back online with central station monitoring. Clear pricing and professional techs.",
  },
  {
    name:     'Sandra K.',
    location: 'Hewitt, TX',
    rating:   5,
    date:     'February 2026',
    service:  'Annual Inspections',
    text:     'We needed our annual fire inspection before the AHJ visit. Sentinel showed up on time, tested everything thoroughly, and left a clean report. No last-minute scramble — exactly what we needed.',
  },
  {
    name:     'James R.',
    location: 'Woodway, TX',
    rating:   5,
    date:     'January 2026',
    service:  'Kitchen Hood Suppression',
    text:     'Restaurant hood inspection was due and our old vendor ghosted us. Sentinel recertified the Ansul system, replaced fusible links, and walked our kitchen manager through reset procedures. Highly recommend for food service.',
  },
  {
    name:     'Patricia L.',
    location: 'Temple, TX',
    rating:   5,
    date:     'December 2025',
    service:  'Sprinkler Systems',
    text:     'They replaced a frozen/broken sprinkler head after a cold snap and hydro-tested the riser. The crew was careful, documented everything, and coordinated with our property manager. Worth every penny.',
  },
  {
    name:     'David M.',
    location: 'Killeen, TX',
    rating:   5,
    date:     'November 2025',
    service:  'Monitoring',
    text:     'We hired Sentinel for 24/7 central station monitoring on our medical office. Install was clean, signals tested clean, and their team handles AHJ paperwork without drama. Professional from start to finish.',
  },
  {
    name:     'Angela W.',
    location: 'China Spring, TX',
    rating:   5,
    date:     'October 2025',
    service:  'Fire Extinguishers',
    text:     'Annual extinguisher service across our campus. Tags updated, a few units hydro-tested and replaced, inventory sheet emailed the same day. Our go-to fire protection company for life.',
  },
  {
    name:     'Robert H.',
    location: 'Bellmead, TX',
    rating:   5,
    date:     'September 2025',
    service:  'Fire Alarm Systems',
    text:     'New addressable fire alarm for our multifamily common areas. Design, permit support, install, and final inspection all handled. Fair pricing, no after-hours gouge. Highly recommend.',
  },
  {
    name:     'Cheryl B.',
    location: 'McGregor, TX',
    rating:   5,
    date:     'August 2025',
    service:  'Annual Inspections',
    text:     'Called about a failed quarterly inspection report. They treated it like it mattered, fixed the deficiencies, and re-inspected on schedule. Thank you, Captain Briggs and team.',
  },
];

export default reviews;
