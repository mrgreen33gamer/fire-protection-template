// PageComponents/AboutStory/AboutStory.tsx
import styles from './styles.module.scss';

interface AboutStoryProps {
  cityName: string;
}

const AboutStory: React.FC<AboutStoryProps> = ({ cityName }) => {
  return (
    <section className={styles.storySection}>
      <div className={styles.storyContainer}>

        <div className={styles.labelRow}>
          <span className={styles.label}>Our Story</span>
          <div className={styles.labelLine} aria-hidden="true" />
        </div>

        <h2 className={styles.storyTitle}>
          A Local Company Built on<br />
          <span className={styles.highlight}>Honest Work & Fair Prices</span>
        </h2>

        <div className={styles.storyBody}>
          <div className={styles.storyPull}>
            <p className={styles.pullQuote}>
              "We started Sentinel Fire Protection because life-safety systems deserve licensed professionals — not cut-rate contractors who disappear after the inspection sticker goes on."
            </p>
            <div className={styles.pullAttrib}>
              <span className={styles.pullName}>— Captain (ret.) Neil Briggs</span>
              <span className={styles.pullTitle}>Founder, Sentinel Fire Protection</span>
            </div>
          </div>

          <div className={styles.storyText}>
            <p className={styles.storyParagraph}>
              Founded in 2001 in Waco, TX, Sentinel Fire Protection started with one truck and one principle:
              give facility owners the straight story about their systems, charge a fair price, and back the
              work with code-compliant installs and on-time inspections. No hourly billing surprises, no upsell pressure.
            </p>
            <p className={styles.storyParagraph}>
              Today we proudly serve <strong>{cityName}</strong> and every surrounding community —
              from China Spring to Killeen — with a crew of licensed fire protection technicians
              who live and work right here in Central Texas.
            </p>

            <div className={styles.milestones}>
              {[
                { year: '2001', label: 'Founded in Waco' },
                { year: '2008', label: 'Expanded commercial crews' },
                { year: '2016', label: '1,000+ facilities served' },
                { year: '2024', label: '4,000+ systems maintained' },
              ].map((m, i) => (
                <div key={i} className={styles.milestone}>
                  <span className={styles.milestoneYear}>{m.year}</span>
                  <span className={styles.milestoneLabel}>{m.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutStory;
