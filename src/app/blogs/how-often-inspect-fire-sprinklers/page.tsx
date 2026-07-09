'use client';
import BlogHero from '#/BlogComponents/BlogHero/BlogHero';
import BlogBody, { BlogSection } from '#/BlogComponents/BlogBody/BlogBody';
import BlogCTA from '#/BlogComponents/BlogCTA/BlogCTA';
import NewsletterSignup from '#/BlogComponents/NewsletterSignup/NewsletterSignup';
import { faClipboardCheck, faFire, faShieldHalved, faWrench, faClock, faBuilding, faBan } from '@fortawesome/free-solid-svg-icons';

const sections: BlogSection[] = [
  {
    type: 'prose',
    body: "Fire sprinkler systems protect people and property only when they work. In Waco and across Central Texas, freezes, construction activity, and aging heads create silent failures until an inspection or an emergency reveals them. Here is how often you should inspect sprinklers — and what belongs on every facility calendar.",
  },
  {
    type: 'cards',
    heading: 'Sprinkler Inspection Essentials',
    cards: [
      { icon: faClipboardCheck, title: 'Annual is the baseline for most systems', body: 'Commercial wet systems typically need at least annual professional inspections, plus additional weekly/monthly checks by type.' },
      { icon: faFire, title: 'Dry and pre-action need extra attention', body: 'These systems often carry quarterly and other periodic requirements. Confirm the schedule your AHJ expects.' },
      { icon: faBan, title: 'Painted or blocked heads fail', body: 'Storage too close to heads and painted sprinklers are common deficiencies that leave coverage gaps.' },
      { icon: faShieldHalved, title: 'Impairments need a plan', body: 'When a system is offline for repair, proper tags, notifications, and restoration protect occupancy.' },
      { icon: faWrench, title: 'Deficiencies should close fast', body: 'A report without a repair path just delays the next failed inspection. Pair findings with a flat-rate fix plan.' },
      { icon: faClock, title: 'On-time scheduling matters', body: 'Sentinel Fire Protection offers an Inspection On-Time Guarantee so compliance stays planned.' },
      { icon: faBuilding, title: 'Bundle with other life-safety', body: 'Coordinate sprinkler dates with alarms, extinguishers, and hoods to reduce vendor traffic.' },
    ],
  },
  {
    type: 'table',
    heading: 'What To Put On Your Calendar',
    tableHeaders: ['Interval', 'Typical Focus', 'Owner Action'],
    tableRows: [
      ['Weekly / Monthly', 'Visual checks, gauges, valves', 'Train staff on simple walkthroughs'],
      ['Quarterly', 'Selected tests by system type', 'Schedule with your fire protection partner'],
      ['Annually', 'Full inspection & report', 'Book early — avoid AHJ deadline panic'],
      ['As needed', 'Impairments, freezes, construction damage', 'Call for same-day response'],
      ['After major work', 'Hydro / retest as required', 'Document restoration for records'],
    ],
  },
  {
    type: 'callout',
    calloutAccent: true,
    calloutText: "Pro Tip: If your last sprinkler report is more than a year old — or you cannot find it — call (254) 900-1111. Sentinel Fire Protection will put inspections back on a calendar you can keep.",
  },
  {
    type: 'tips',
    heading: 'What To Do Next',
    items: [
      'Locate your last sprinkler inspection report',
      'Confirm system type (wet, dry, pre-action) with your vendor',
      'Schedule annual inspection before your AHJ or insurance window',
      'Ask for a prioritized deficiency closeout plan',
      'Bundle alarms and extinguishers when possible',
    ],
  },
];

export default function Page() {
  return (
    <>
      <BlogHero
        title="How Often Should You Inspect Fire Sprinklers in Central Texas?"
        description="NFPA and local AHJ rules set minimum inspection intervals for wet, dry, and pre-action systems. Here is what Waco property owners and facility managers need on the calendar."
        imageSrc="/pages/blogs/heat-pump.jpg"
        imageAlt="Fire sprinkler inspection frequency guide for Waco TX facilities"
        category="Inspections"
        date="July 3, 2026"
        readTime={7}
      />
      <BlogBody sections={sections} />
      <BlogCTA
        title="Behind on Sprinkler Inspections?"
        body="Get on-time inspections from Sentinel Fire Protection — Licensed Fire Alarm Contractor · Bonded & Insured."
        buttonText="Schedule Inspection"
        buttonHref="/services/sprinkler-systems"
      />
      <NewsletterSignup variant={1} spot="how-often-inspect-fire-sprinklers-blog" />
    </>
  );
}
