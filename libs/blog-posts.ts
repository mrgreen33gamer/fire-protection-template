// libs/blog-posts.ts
export interface BlogPost {
  slug:      string;
  title:     string;
  excerpt:   string;
  category:  string;
  date:      string;
  readTime:  number;
  imageSrc:  string;
  imageAlt:  string;
  featured?: boolean;
}

const ALL_POSTS: BlogPost[] = [
  {
    slug:     'how-often-inspect-fire-sprinklers',
    title:    'How Often Should You Inspect Fire Sprinklers in Central Texas?',
    excerpt:  'NFPA and local AHJ rules set minimum inspection intervals for wet, dry, and pre-action systems. Here is what Waco property owners and facility managers need on the calendar.',
    category: 'Inspections',
    date:     'July 3, 2026',
    readTime: 7,
    imageSrc: '/pages/blogs/heat-pump.jpg',
    imageAlt: 'Fire sprinkler inspection frequency guide for Waco TX facilities',
    featured: true,
  },
  {
    slug:     'restaurant-hood-suppression-requirements',
    title:    'Restaurant Hood Suppression Requirements in Texas',
    excerpt:  'Ansul/kitchen hood systems, semi-annual inspections, link replacement, and what health and fire inspectors look for — a practical guide for Central Texas restaurants.',
    category: 'Kitchen Hood',
    date:     'June 24, 2026',
    readTime: 6,
    imageSrc: '/pages/blogs/energy-savings.jpg',
    imageAlt: 'Restaurant kitchen hood suppression requirements for Texas',
  },
  {
    slug:     'fire-alarm-monitoring-worth-it',
    title:    'Is Fire Alarm Monitoring Worth It for Your Building?',
    excerpt:  'Central station monitoring vs. local-only alarms: response time, insurance, AHJ expectations, and when Waco businesses should upgrade.',
    category: 'Monitoring',
    date:     'June 15, 2026',
    readTime: 8,
    imageSrc: '/pages/blogs/ac-replacement.jpg',
    imageAlt: 'Fire alarm monitoring value guide for Central Texas buildings',
  },
];

export function getAllPosts(): BlogPost[] { return ALL_POSTS; }
export function getRecentPosts(count: number = 3): BlogPost[] { return ALL_POSTS.slice(0, count); }
export function getFeaturedPost(): BlogPost { return ALL_POSTS.find((p) => p.featured) ?? ALL_POSTS[0]; }
export function getPostsByCategory(category: string): BlogPost[] { return ALL_POSTS.filter((p) => p.category.toLowerCase() === category.toLowerCase()); }
export function getPostBySlug(slug: string): BlogPost | undefined { return ALL_POSTS.find((p) => p.slug === slug); }
export function getAllCategories(): string[] { return Array.from(new Set(ALL_POSTS.map((p) => p.category))); }
export function getAllSlugs(): string[] { return ALL_POSTS.map((p) => p.slug); }
