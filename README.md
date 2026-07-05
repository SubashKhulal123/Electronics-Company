# Auren — Premium Electronics Website

A production-ready, Apple-inspired e-commerce landing page for **Auren**, a fictional premium electronics brand. Built with React 19, Vite, Tailwind CSS, and Framer Motion.

## Tech Stack

- **React 19** (Vite)
- **Tailwind CSS** for styling
- **Framer Motion** for animations
- **React Icons** for iconography
- **React Router** (structured for multi-page growth, currently single page)

## Getting Started

```bash
npm install
npm run dev
```

Then open the URL shown in your terminal (usually `http://localhost:5173`).

### Build for production

```bash
npm run build
npm run preview
```

## Project Structure

```
src/
├── assets/                 # Static assets
├── components/
│   ├── Navbar/              # Fixed nav with blur-on-scroll + mobile menu
│   ├── Hero/                # Full-screen hero w/ floating device composition
│   ├── Categories/          # Featured category cards
│   ├── WhyChooseUs/         # Trust/feature cards
│   ├── Products/            # Featured products grid + ProductCard
│   ├── About/                # Story + animated stat counters
│   ├── Testimonials/         # Glassmorphism testimonial cards
│   ├── FAQ/                  # Accordion FAQ
│   ├── Newsletter/           # Email signup banner
│   ├── Contact/              # Contact info + form
│   ├── Footer/                # Site footer
│   └── common/                # Shared: AnimatedSection, SectionHeading, Logo
├── pages/
│   └── Home.jsx              # Assembles all sections
├── data/                    # Fictional content (products, testimonials, FAQs, etc.)
├── hooks/                   # useScrollPosition, useCountUp
├── App.jsx
└── main.jsx
```

## Customizing

- **Colors, fonts, shadows:** edit `tailwind.config.js` and the `@layer components` block in `src/index.css`.
- **Copy & data:** everything in `src/data/*.js` — swap in real product info, testimonials, FAQs, and contact details.
- **Images:** currently sourced from Unsplash (royalty-free) — replace the `image` URLs in `src/data/products.js` and the `<img>` sources in `Hero.jsx`/`About.jsx` with your own product photography.
- **Logo:** `src/components/common/Logo.jsx` — swap the placeholder "A" mark for a real logo/SVG.

## Notes

- All content (company name, product names, prices, reviews) is fictional placeholder content, ready to be replaced.
- No copyrighted Apple product imagery is used — hero and product visuals are generic royalty-free electronics photography from Unsplash.
- Fully responsive from mobile through desktop; navbar collapses to a hamburger menu below the `lg` breakpoint.
