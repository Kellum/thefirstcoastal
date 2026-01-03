# The First Coastal

A website for The First Coastal - helping Northeast Florida businesses make better decisions about their online presence.

## Tech Stack

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **Framer Motion** for animations

## Features

- ✅ Responsive design (mobile-first)
- ✅ Clean hamburger navigation with slide-in mobile menu
- ✅ Custom ocean-inspired color palette
- ✅ 5 main pages: Home, About, Work, FAQ, Contact
- ✅ Interactive portfolio showcase
- ✅ Smooth animations and transitions
- ✅ SEO optimized
- ✅ Ready for future authentication/dashboard features

## Getting Started

### Install Dependencies

```bash
npm install
```

### Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
/app
  /(page).tsx       - Home page
  /about            - About page
  /work             - Portfolio showcase
  /faq              - FAQ with accordion
  /contact          - Contact form
  /layout.tsx       - Root layout
  /globals.css      - Global styles

/components
  /Navigation.tsx   - Header with hamburger menu
  /Footer.tsx       - Footer component
  /PortfolioCard.tsx - Portfolio card with hover effects

/public             - Static assets
```

## Color Palette

- **Primary**: Ocean Blue (#6B9AC4)
- **Background**: White (#FFFFFF)
- **Text**: Black (#000000)
- **Accents**: Various ocean blue shades (50-900)

## Pages

1. **Home** - Hero section, services overview, CTA
2. **About** - Company story, values, regional focus
3. **Work** - Portfolio grid with category filters
4. **FAQ** - Accordion-style frequently asked questions
5. **Contact** - Contact form and location info

## Future Enhancements

- Add customer login/authentication (NextAuth.js)
- Create admin dashboard for content management
- Integrate with CMS for portfolio items
- Add blog section
- Implement analytics tracking
- Set up email service for contact form
- Add real project images

## Deployment

This project is deployed on Railway with automatic deployments from GitHub.

### Railway Deployment

Railway automatically deploys when you push to the connected GitHub repository. See `RAILWAY_DEPLOYMENT.md` for detailed setup instructions.

## License

Private - The First Coastal © 2025
