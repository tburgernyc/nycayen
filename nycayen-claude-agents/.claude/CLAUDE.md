# Nycayen.com Neomorphism Redesign Project

## 🎯 Project Overview
Redesigning the Nycayen Hair Salon website (nycayen.com) with a modern **neomorphism UI style** and new color palette.

**Current Stack:**
- Framework: Next.js 15.3.5 (App Router)
- Language: TypeScript 5.7.2
- Styling: Tailwind CSS 3.4.13
- Animations: Framer Motion 11.14.4
- Icons: Lucide React 0.462.0

**Business:** Nycayen Hair Salon  
**Mission:** Empower Through Beauty—Boosting Confidence via Personalized Hair Styling  
**Tagline:** The Art of Hair

---

## 🎨 New Neomorphism Design System

### Color Palette
```css
/* Neomorphism Color Palette */
--neo-dark: #21221F;        /* Primary background - Dark charcoal */
--neo-cyan: #72BDC2;        /* Accent - Soft cyan */
--neo-blue: #388B9E;        /* Accent - Ocean blue */
--neo-gray: #5C7572;        /* Neutral - Slate gray */
--neo-tan: #988C7F;         /* Warm - Soft tan */

/* Shadow System for Neomorphism */
--neo-shadow-light: rgba(114, 189, 194, 0.15);
--neo-shadow-dark: rgba(33, 34, 31, 0.7);
--neo-inset-light: rgba(255, 255, 255, 0.05);
--neo-inset-dark: rgba(0, 0, 0, 0.3);
```

### Neomorphism Principles
1. **Soft Shadows**: Use dual shadows (light + dark) for depth
2. **Subtle Elevation**: Elements appear to float or be pressed
3. **Monochromatic Palette**: Stay within the 5-color system
4. **Rounded Corners**: 12-24px border radius for soft feel
5. **Low Contrast**: Gentle visual hierarchy
6. **Tactile Feel**: Buttons and cards feel physical

### Neomorphic Component Classes
```css
/* Elevated (raised) elements */
.neo-elevated {
  background: linear-gradient(145deg, #242621, #1f201d);
  box-shadow: 
    8px 8px 16px var(--neo-shadow-dark),
    -8px -8px 16px var(--neo-inset-light);
  border-radius: 16px;
}

/* Pressed (inset) elements */
.neo-pressed {
  background: linear-gradient(145deg, #1f201d, #242621);
  box-shadow: 
    inset 8px 8px 16px var(--neo-inset-dark),
    inset -8px -8px 16px var(--neo-inset-light);
  border-radius: 16px;
}

/* Flat with subtle border */
.neo-flat {
  background: #21221F;
  border: 1px solid rgba(114, 189, 194, 0.1);
  box-shadow: 
    4px 4px 8px var(--neo-shadow-dark),
    -4px -4px 8px var(--neo-inset-light);
  border-radius: 12px;
}

/* Buttons */
.neo-button {
  background: linear-gradient(145deg, #242621, #1f201d);
  box-shadow: 
    6px 6px 12px var(--neo-shadow-dark),
    -6px -6px 12px var(--neo-inset-light);
  transition: all 0.3s ease;
}

.neo-button:hover {
  box-shadow: 
    8px 8px 16px var(--neo-shadow-dark),
    -8px -8px 16px var(--neo-inset-light);
}

.neo-button:active {
  box-shadow: 
    inset 4px 4px 8px var(--neo-inset-dark),
    inset -4px -4px 8px var(--neo-inset-light);
}
```

---

## 📁 Project Structure
```
nycayenmoore.com/
├── app/
│   ├── about/              # About page
│   ├── api/                # API routes
│   ├── blog/               # Blog page
│   ├── booking/            # Booking page
│   ├── contact/            # Contact page
│   ├── portfolio/          # Portfolio page
│   ├── privacy-policy/     # Privacy policy
│   ├── services/           # Services page
│   ├── shop/               # Shop page
│   ├── globals.css         # Global styles (UPDATE with neomorphism)
│   ├── layout.tsx          # Root layout
│   ├── not-found.tsx       # 404 page
│   └── page.tsx            # Home page
│
├── components/             # React components (ALL need redesign)
│   ├── Navbar.tsx          # Navigation (redesign with neomorphism)
│   ├── Footer.tsx          # Footer (redesign)
│   ├── HeroSection.tsx     # Hero (redesign)
│   ├── InstagramCarousel.tsx
│   ├── Testimonials.tsx
│   ├── ServicesList.tsx
│   ├── BookingWidget.tsx
│   ├── PortfolioGrid.tsx
│   ├── BlogPreview.tsx
│   ├── CookieBanner.tsx
│   └── Chatbot.tsx
│
├── utils/                  # Utility functions
│   ├── analytics.ts
│   ├── sendgrid.ts
│   ├── shopify.ts
│   └── stripe.ts
│
├── public/images/          # Static assets
├── tailwind.config.js      # UPDATE with neomorphism theme
└── next.config.js
```

---

## 🎯 Redesign Objectives

### Phase 1: Foundation (Current)
- [x] Update Tailwind config with neomorphism color palette
- [x] Create neomorphic utility classes
- [x] Update globals.css with new design system
- [ ] Create base neomorphic components library

### Phase 2: Core Components
- [ ] Redesign Navbar with neomorphism
- [ ] Redesign Footer with neomorphism
- [ ] Redesign HeroSection with neomorphism
- [ ] Redesign all 11 components

### Phase 3: Pages
- [ ] Redesign Home page
- [ ] Redesign About page
- [ ] Redesign Services page
- [ ] Redesign Portfolio page
- [ ] Redesign Shop page
- [ ] Redesign Blog page
- [ ] Redesign Contact page
- [ ] Redesign Booking page

### Phase 4: Polish & Deploy
- [ ] Optimize images for new design
- [ ] Add neomorphic animations
- [ ] Test responsiveness
- [ ] Deploy to staging
- [ ] QA testing
- [ ] Deploy to production

---

## 🔧 Development Workflow

1. **Design Components**: Use `/design-component` command
2. **Apply Theme**: Use `/apply-neomorph-theme` command
3. **Build Pages**: Use `/build-page [page-name]` command
4. **Test Changes**: Use `/run-tests` command
5. **Deploy Staging**: Use `/deploy-staging` command
6. **Deploy Production**: Use `/deploy-production` command

---

## 📝 Component Design Guidelines

### Navbar
- **Style**: Floating bar with neomorphic elevation
- **Background**: Semi-transparent neo-dark with blur
- **Links**: Subtle pressed effect on active
- **CTA Buttons**: Elevated with cyan accent

### Cards
- **Background**: Neo-elevated or neo-flat
- **Padding**: 24-32px
- **Radius**: 16-20px
- **Hover**: Increase shadow for lift effect

### Buttons
- **Primary**: Neo-button with cyan accent
- **Secondary**: Neo-button with blue accent
- **Outline**: Neo-flat with border
- **States**: Hover (elevate), Active (press)

### Forms
- **Inputs**: Neo-pressed background
- **Focus**: Cyan border glow
- **Labels**: Neo-tan color
- **Submit**: Neo-button primary

### Images
- **Container**: Neo-elevated frame
- **Border Radius**: 12-16px
- **Overlay**: Subtle gradient on hover

---

## 🚀 Key Commands

### Development
```bash
npm run dev          # Start dev server
npm run build        # Build for production
npm run lint         # Run linting
npm run type-check   # TypeScript check
```

### Claude Code Commands
```bash
/design-component [name]      # Create neomorphic component
/apply-neomorph-theme         # Apply color palette globally
/build-page [name]            # Build page with neomorphism
/optimize-assets              # Optimize images
/deploy-staging               # Deploy to staging
/deploy-production            # Deploy to production
/run-tests                    # Run all tests
```

---

## 🎨 Design Resources

### Inspiration
- Neomorphism.io for component examples
- Dribbble "neomorphism" tag
- Behance neomorphic UI designs

### Tools
- Figma with neomorphism plugins
- CSS generator for shadows
- Color contrast checker

---

## 📞 Project Contacts
- **Business Owner**: Nycayen Moore
- **Website**: nycayen.com
- **Developer Support**: developer@nycayen.com

---

## 🔒 Important Notes
- Maintain accessibility (WCAG compliance)
- Test on multiple devices
- Keep animations performant (60fps)
- Optimize for Core Web Vitals
- Maintain existing functionality
- All integrations must continue working (Shopify, Stripe, SendGrid, etc.)

---

**Last Updated**: October 2025  
**AI Agent**: Claude Code  
**Project Type**: Website Redesign - Neomorphism Style
