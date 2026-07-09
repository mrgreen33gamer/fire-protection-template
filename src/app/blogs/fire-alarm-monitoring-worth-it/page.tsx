'use client';
import BlogHero from '#/BlogComponents/BlogHero/BlogHero';
import BlogBody, { BlogSection } from '#/BlogComponents/BlogBody/BlogBody';
import BlogCTA from '#/BlogComponents/BlogCTA/BlogCTA';
import NewsletterSignup from '#/BlogComponents/NewsletterSignup/NewsletterSignup';
import { faSatelliteDish, faBuilding, faShieldHalved, faClock, faFileContract, faBell, faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const sections: BlogSection[] = [
  {
    type: 'prose',
    body: "A fire alarm that only sounds on-site helps when people are present. After hours, local-only systems can ring into empty buildings. Central station monitoring closes that gap — and for many Waco businesses, it is required by code, insurance, or lease. Here is how to decide if monitoring is worth it.",
  },
  {
    type: 'cards',
    heading: 'Monitoring Decision Factors',
    cards: [
      { icon: faSatelliteDish, title: 'Someone is always listening', body: 'Central station operators receive signals 24/7 and dispatch according to your instructions.' },
      { icon: faBuilding, title: 'Occupancy and risk profile', body: 'Restaurants, multifamily common areas, medical offices, and warehouses often benefit most.' },
      { icon: faShieldHalved, title: 'Insurance and AHJ drivers', body: 'Carriers and fire marshals frequently require monitoring — confirm before you assume local-only is enough.' },
      { icon: faClock, title: 'Minutes vs. morning discovery', body: 'Unmonitored after-hours events are found late — when damage and liability are worse.' },
      { icon: faFileContract, title: 'Clean account setup matters', body: 'Wrong contacts, stale zone labels, and failed signal tests make monitoring less useful.' },
      { icon: faBell, title: 'Waterflow and tamper too', body: 'Sprinkler supervisory signals should be monitored when the system includes them.' },
      { icon: faCheckCircle, title: 'Local service backup', body: 'When a signal means a real device failure, you need a tech who can respond on-site.' },
    ],
  },
  {
    type: 'table',
    heading: 'Local-Only vs. Central Station',
    tableHeaders: ['Factor', 'Local-Only', 'Monitored'],
    tableRows: [
      ['After-hours response', 'Depends on someone hearing horns', 'Dispatch from central station'],
      ['Insurance acceptance', 'Often limited', 'Frequently required or preferred'],
      ['AHJ expectations', 'Varies by occupancy', 'Common for many commercial uses'],
      ['False alarm handling', 'Staff only', 'Verified contacts + procedures'],
      ['Documentation', 'Minimal', 'Account records and signal history'],
    ],
  },
  {
    type: 'callout',
    calloutAccent: true,
    calloutText: "Pro Tip: Already monitored with a prior vendor? Sentinel Fire Protection can take over accounts, retest signals, and clean up stale contacts. Call (254) 900-1111.",
  },
  {
    type: 'tips',
    heading: 'What To Do Next',
    items: [
      'Ask your insurance agent if monitoring is required',
      'Confirm AHJ expectations for your occupancy',
      'Review who is listed as emergency contacts today',
      'Schedule a signal test if you already monitor',
      'Get a flat-rate quote for takeover or new monitoring',
    ],
  },
];

export default function Page() {
  return (
    <>
      <BlogHero
        title="Is Fire Alarm Monitoring Worth It for Your Building?"
        description="Central station monitoring vs. local-only alarms: response time, insurance, AHJ expectations, and when Waco businesses should upgrade."
        imageSrc="/pages/blogs/ac-replacement.jpg"
        imageAlt="Fire alarm monitoring value guide for Central Texas buildings"
        category="Monitoring"
        date="June 15, 2026"
        readTime={8}
      />
      <BlogBody sections={sections} />
      <BlogCTA
        title="Ready for 24/7 Fire Monitoring?"
        body="Sentinel Fire Protection sets up central station accounts, tests signals, and backs you with local service."
        buttonText="Get Monitoring Quote"
        buttonHref="/services/monitoring"
      />
      <NewsletterSignup variant={1} spot="fire-alarm-monitoring-worth-it-blog" />
    </>
  );
}
