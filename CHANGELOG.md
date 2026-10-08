# Changelog

All notable changes to this project will be documented in this file.

## [1.1.0] - 2026-10-07

### Added
- Decap CMS list ergonomics: added `summary`, `collapsed: true`, and `add_to_top: true` to the `blogs` list widget to prevent editor browser lockups and allow adding new blogs at the top of the collection.
- Netlify redirect rules in `public/_redirects` to explicitly direct `/admin` and `/admin/*` directly to `admin/index.html`.
- Safe date formatter and UTC timezone protection in `BlogPage.tsx` to handle date strings without day-shift or invalid date bugs.

### Improved
- **Hero Animation Polish**: Rebuilt the hero entrance sequence using pure GPU-accelerated hardware transforms (`transform`, `opacity`, `scale`). Removed laggy 4-second `clipPath` calculations and animated Gaussian blur filters. Added organic emerald ambient halo, poised logo entrance with luxury easing curve (`[0.16, 1, 0.3, 1]`), crisp staggered typography, hairline grounding accent, and gentle scroll prompt with `prefers-reduced-motion` compliance.

### Fixed
- Fixed footer attribution line to match dynamic business name and copyright formatting.

## [1.0.0] - 2026-08-05

### Added
- Initial release of Shade Tree Health & Wellness website.
- Responsive design using Tailwind CSS.
- React Router integration for client-side navigation.
- Framer Motion for page transitions and scroll animations.
- Decap CMS integration for content management (`src/content/data.json`).
- Custom serif ("Libertinus Serif") and sans-serif ("Varela") typography integration.
- Custom styled scrollbars.
- `_redirects` file for Netlify deployment compatibility.
- Accessibility improvements and semantic HTML structures.

### Fixed
- Fixed hero animation so that it only triggers on initial load, preventing replay on navigation.
- Removed unused dependencies and placeholder code.
- Cleaned up footer structure and copyright text format.
