# Fire Protection Template — Design Spec

## Context

Scott Apps trade template reskin: fork of `hvac-template` into `fire-protection-template`, sibling-cloned patterns from `garage-door-template`. Per-city SEO subpages deleted. `/projects` route deleted.

## Business Identity (locked)

| Field | Value |
|-------|--------|
| **Business name** | Sentinel Fire Protection |
| **Tagline** | Alarms · Sprinklers · Inspections · Monitoring |
| **Location** | Waco, TX |
| **Service cities** | Waco, Temple, Killeen, Hewitt, Woodway, McGregor, China Spring, Bellmead |
| **Founded** | 2001 |
| **Owner** | Captain (ret.) Neil Briggs |
| **License** | Licensed Fire Alarm Contractor · Bonded & Insured |
| **Guarantee** | Code-Compliant Installs · Inspection On-Time Guarantee |
| **Social proof** | 4.9★, 650+ reviews, 4,000+ systems maintained |
| **Accent hex** | `#dc2626` (fire red) — `$orange` token |
| **Phone** | (254) 900-1111 / `tel:+12549001111` |
| **Email** | hello@sentinelfiretx.com |
| **Domain** | sentinelfiretx.com |
| **Address** | 1100 S 5th St, Waco, TX 76706 |

## Services (6)

| Old HVAC | Slug | Title |
|----------|------|--------|
| ac-repair | `fire-alarms` | Fire Alarm Systems |
| heating | `sprinkler-systems` | Sprinkler Systems |
| installation | `fire-extinguishers` | Fire Extinguishers |
| duct-cleaning | `kitchen-hood` | Kitchen Hood Suppression |
| indoor-air-quality | `monitoring` | Monitoring |
| maintenance | `annual-inspections` | Annual Inspections |

## Industries (3)

| Old HVAC | Slug | Title |
|----------|------|--------|
| automotive | `restaurants` | Restaurants & Hospitality |
| manufacturing | `healthcare` | Healthcare Facilities |
| oil-gas | `multifamily` | Multifamily Housing |

## Blogs (3)

1. `how-often-inspect-fire-sprinklers`
2. `restaurant-hood-suppression-requirements`
3. `fire-alarm-monitoring-worth-it`

## Pages

Home, Services (index + 6), Industries (index + 3), About, Contact, Service Areas, Blog (index + 3 posts), Privacy. No projects gallery. No per-city SEO.

## Accent

- SCSS: `$orange: #dc2626`, `$lightorange: #ef4444`, `$darkorange: #991b1b`
- Hardcoded: NextTopLoader, PulseLoader, WelcomePage particles → `#dc2626`

## Done criteria

- `npm run typecheck` passes
- Grep clean of HVAC/Arctic Air/old phone/Mapbox pk tokens
- Identity consistent: Sentinel Fire Protection throughout
