# Shade Tree Health & Wellness

This project is a React-based single-page application built with Vite and Tailwind CSS. It serves as the primary website for Shade Tree Health & Wellness, offering functional medicine, holistic coaching, and faith-based support.

## Project Structure

- `src/`: Main source code directory.
  - `components/`: Reusable React components (Header, Footer, Hero, Services, etc.).
  - `pages/`: Route-level page components (Home, ServicesPage, ResourcesPage, etc.).
  - `content/`: Holds static content, including `data.json` managed by Decap CMS.
- `public/`: Static assets, uploads, and CMS configurations.
  - `admin/`: Decap CMS configuration (`config.yml`).

## Features

- **Responsive Design**: Built with Tailwind CSS to ensure a great experience on desktop, tablet, and mobile.
- **Decap CMS**: Content management integration allows non-technical users to update the site's copy and images directly via `/admin`.
- **Framer Motion**: Smooth, polished animations on page load and scroll.
- **Routing**: Client-side routing managed by `react-router-dom`.

## Development

```bash
# Install dependencies
npm install

# Run the development server
npm run dev

# Build for production
npm run build
```

## Deployment

This site is configured for deployment on Netlify. 
- It requires `public/_redirects` to handle React Router client-side routing correctly.
- Decap CMS requires the `git-gateway` to be enabled on Netlify for authentication.
