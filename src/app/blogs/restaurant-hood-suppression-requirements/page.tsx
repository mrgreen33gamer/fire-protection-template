'use client';
import BlogHero from '#/BlogComponents/BlogHero/BlogHero';
import BlogBody, { BlogSection } from '#/BlogComponents/BlogBody/BlogBody';
import BlogCTA from '#/BlogComponents/BlogCTA/BlogCTA';
import NewsletterSignup from '#/BlogComponents/NewsletterSignup/NewsletterSignup';
import { faUtensils, faClipboardCheck, faExclamationTriangle, faWrench, faClock, faFireExtinguisher, faShieldHalved } from '@fortawesome/free-solid-svg-icons';

const sections: BlogSection[] = [
  {
    type: 'prose',
    body: "Commercial kitchens in Waco and Central Texas live or die by compliance. Hood suppression systems protect against grease fires — but only if links, nozzles, and cylinders stay in service. Here is what restaurant operators need to know about hood requirements and semi-annual inspections.",
  },
  {
    type: 'cards',
    heading: 'Kitchen Hood Requirements Snapshot',
    cards: [
      { icon: faUtensils, title: 'Built for cooking hazards', body: 'Wet chemical systems target grease fires under hoods — not the same as building sprinklers alone.' },
      { icon: faClipboardCheck, title: 'Semi-annual inspections are standard', body: 'Most restaurants need professional hood system service twice a year. Missing a cycle risks failed inspections.' },
      { icon: faExclamationTriangle, title: 'Links and nozzles fail first', body: 'Expired fusible links and grease-clogged nozzles are the most common deficiency findings.' },
      { icon: faWrench, title: 'Fuel shutoff interlocks matter', body: 'Gas valve interlocks and manual pulls must function correctly during inspection.' },
      { icon: faFireExtinguisher, title: 'Pair with Class K extinguishers', body: 'Kitchen extinguishers should be tagged on the same compliance calendar as the hood system.' },
      { icon: faClock, title: 'Schedule around service hours', body: 'Good vendors work around prep and close so you stay open during peak revenue times.' },
      { icon: faShieldHalved, title: 'Documentation for health & fire', body: 'Keep certificates ready for inspectors, landlords, and insurance audits.' },
    ],
  },
  {
    type: 'table',
    heading: 'Inspection Day Checklist',
    tableHeaders: ['Item', 'Why It Matters', 'Owner Tip'],
    tableRows: [
      ['Fusible links', 'Age out and must be replaced on schedule', 'Ask for link date documentation'],
      ['Nozzles & caps', 'Grease blockage reduces coverage', 'Keep hood cleaning schedule tight'],
      ['Cylinder condition', 'Pressure and service life requirements', 'Plan CapEx before failure'],
      ['Manual pull & interlocks', 'Must shut fuel sources correctly', 'Train staff on reset procedures'],
      ['Reports & tags', 'Proof for AHJ / health / landlord', 'Store PDFs in a shared folder'],
    ],
  },
  {
    type: 'callout',
    calloutAccent: true,
    calloutText: "Pro Tip: If your semi-annual hood date is within 30 days and you have no vendor booked, call (254) 900-1111. Sentinel Fire Protection schedules kitchen-friendly windows across Central Texas.",
  },
  {
    type: 'tips',
    heading: 'What To Do Next',
    items: [
      'Find your last hood inspection certificate',
      'Confirm both semi-annual dates for the year',
      'Bundle Class K extinguisher service on the same visit',
      'Train managers on post-discharge reset steps',
      'Ask for a deficiency closeout timeline before inspection day',
    ],
  },
];

export default function Page() {
  return (
    <>
      <BlogHero
        title="Restaurant Hood Suppression Requirements in Texas"
        description="Ansul/kitchen hood systems, semi-annual inspections, link replacement, and what health and fire inspectors look for — a practical guide for Central Texas restaurants."
        imageSrc="/pages/blogs/energy-savings.jpg"
        imageAlt="Restaurant kitchen hood suppression requirements for Texas"
        category="Kitchen Hood"
        date="June 24, 2026"
        readTime={6}
      />
      <BlogBody sections={sections} />
      <BlogCTA
        title="Need Kitchen Hood Certification?"
        body="Sentinel Fire Protection services Ansul-style systems with kitchen-aware scheduling and clear documentation."
        buttonText="Schedule Hood Service"
        buttonHref="/services/kitchen-hood"
      />
      <NewsletterSignup variant={1} spot="restaurant-hood-suppression-requirements-blog" />
    </>
  );
}
