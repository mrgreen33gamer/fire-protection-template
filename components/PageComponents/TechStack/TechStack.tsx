'use client';
import { motion } from 'framer-motion';
import styles from './styles.module.scss';

interface BrandItem {
  name:     string;
  type:     string; // 'brand' | 'cert' | 'tool'
  icon?:    string; // emoji or short abbreviation for display
}

interface BrandGroup {
  label: string;
  items: BrandItem[];
}

interface TechStackProps {
  title?:    string;
  subtitle?: string;
  groups?:   BrandGroup[];
}

const DEFAULT_GROUPS: BrandGroup[] = [
  {
    label: 'Brands & Equipment We Service',
    items: [
      { name: 'Notifier',       type: 'brand', icon: '🔔' },
      { name: 'Silent Knight',  type: 'brand', icon: '🔔' },
      { name: 'Simplex',        type: 'brand', icon: '🔔' },
      { name: 'Potter',         type: 'brand', icon: '💧' },
      { name: 'System Sensor',  type: 'brand', icon: '🔔' },
      { name: 'Kidde',          type: 'brand', icon: '🧯' },
      { name: 'Ansul',          type: 'brand', icon: '🍳' },
      { name: 'Viking',         type: 'brand', icon: '💧' },
    ],
  },
  {
    label: 'Certifications & Licenses',
    items: [
      { name: 'Licensed Fire Alarm Contractor', type: 'cert', icon: '✓' },
      { name: 'Bonded & Insured',               type: 'cert', icon: '✓' },
      { name: 'Code-Compliant Installs',        type: 'cert', icon: '✓' },
      { name: 'Inspection On-Time Guarantee',   type: 'cert', icon: '✓' },
    ],
  },
  {
    label: 'Service Types',
    items: [
      { name: 'Fire Alarms',           type: 'tool', icon: '🔔' },
      { name: 'Sprinkler Systems',     type: 'tool', icon: '💧' },
      { name: 'Extinguishers',         type: 'tool', icon: '🧯' },
      { name: 'Kitchen Hoods',         type: 'tool', icon: '🍳' },
      { name: 'Monitoring',            type: 'tool', icon: '📡' },
      { name: 'Annual Inspections',    type: 'tool', icon: '📋' },
    ],
  },
];

const TechStack: React.FC<TechStackProps> = ({
  title    = 'Licensed Work, Quality Equipment',
  subtitle = 'We install and service major fire protection brands — licensed crews, no shortcuts on code or materials.',
  groups   = DEFAULT_GROUPS,
}) => {
  return (
    <section className={styles.section} aria-label="Equipment and certifications">
      <div className={styles.container}>
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className={styles.title}>{title}</h2>
          <p className={styles.subtitle}>{subtitle}</p>
        </motion.div>

        <div className={styles.groups}>
          {groups.map((group, gi) => (
            <motion.div
              key={group.label}
              className={styles.group}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: gi * 0.08 }}
            >
              <h3 className={styles.groupLabel}>{group.label}</h3>
              <div className={styles.itemGrid}>
                {group.items.map((item) => (
                  <div key={item.name} className={styles.item}>
                    <span className={styles.itemIcon} aria-hidden="true">{item.icon}</span>
                    <span className={styles.itemName}>{item.name}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
