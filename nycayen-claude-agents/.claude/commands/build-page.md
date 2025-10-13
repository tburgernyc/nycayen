# Build Page

Build or redesign a page with neomorphism styling for the Nycayen website.

Usage: `/build-page [page-name]`

## Available Pages
- `home` - Homepage with hero, services, testimonials
- `about` - About page with mission, vision, team
- `services` - Services listing with filtering and booking
- `portfolio` - Portfolio gallery with categories
- `shop` - E-commerce shop with products
- `blog` - Blog listing with search and categories
- `contact` - Contact form with map and FAQ
- `booking` - Multi-step booking flow

## Examples
```bash
/build-page home
/build-page services
/build-page portfolio
/build-page contact
```

## Workflow

### 1. Analysis Phase (2-3 minutes)
- Read existing page structure
- Identify components to redesign
- Plan neomorphic elements
- Determine animation strategy

### 2. Component Design (10-15 minutes)
- Design page-specific components
- Apply neomorphism styling
- Create responsive layouts
- Add smooth animations

### 3. Implementation (15-20 minutes)
- Update page file (`app/[page]/page.tsx`)
- Redesign components
- Apply color palette
- Integrate animations

### 4. Testing (5 minutes)
- Test responsiveness
- Verify accessibility
- Check performance
- Test all interactions

## Page-Specific Guidelines

### Home Page
**Components:**
- `HeroSection` - Neomorphic hero with floating CTAs
- `ServicesPreview` - Card grid with elevated shadows
- `TestimonialsCarousel` - Rotating testimonials
- `InstagramFeed` - Social proof section
- `CTASection` - Final booking prompt

**Key Features:**
- Smooth scroll animations
- Staggered component appearance
- Floating action button (Book Now)
- Neomorphic card layouts

### Services Page
**Components:**
- `ServiceFilter` - Neomorphic filter buttons
- `ServiceCard` - Elevated cards with pricing
- `ServiceDetail` - Modal with full information
- `BookingCTA` - Sticky booking button

**Key Features:**
- Filterable service list
- Expandable service details
- Price comparison
- Booking integration

### Portfolio Page
**Components:**
- `PortfolioFilter` - Category selection
- `PortfolioGrid` - Masonry layout
- `PortfolioModal` - Full-screen image viewer
- `BeforeAfter` - Before/after slider

**Key Features:**
- Category filtering
- Image optimization
- Lightbox gallery
- Social sharing

### Shop Page
**Components:**
- `ProductGrid` - Product cards
- `ProductCard` - Neomorphic product display
- `ShoppingCart` - Cart sidebar
- `CheckoutFlow` - Multi-step checkout

**Key Features:**
- Shopify integration
- Cart management
- Product filtering
- Stripe checkout

### Blog Page
**Components:**
- `BlogGrid` - Article cards
- `BlogCard` - Neomorphic article preview
- `BlogFilters` - Category and search
- `Pagination` - Page navigation

**Key Features:**
- Article search
- Category filtering
- Read time estimates
- Social sharing

### Contact Page
**Components:**
- `ContactForm` - Neomorphic form
- `ContactInfo` - Business details
- `MapEmbed` - Location map
- `FAQ` - Accordion FAQ section

**Key Features:**
- Form validation
- Email integration
- Map integration
- FAQ accordion

### Booking Page
**Components:**
- `BookingSteps` - Multi-step progress
- `ServiceSelection` - Choose services
- `DateTimePicker` - Select appointment
- `BookingConfirmation` - Confirmation screen

**Key Features:**
- Multi-step form
- Calendly integration
- Email confirmation
- Booking management

### About Page
**Components:**
- `MissionVision` - Company values
- `TeamSection` - Team members
- `Timeline` - Company history
- `AwardsSection` - Achievements

**Key Features:**
- Team bios
- Company story
- Awards showcase
- Social proof

## Design Standards for All Pages

### Layout
- Container max-width: 1280px
- Section padding: 80px (desktop), 40px (mobile)
- Component spacing: 60px vertical
- Grid gaps: 24px

### Typography
- Headings: Playfair Display
- Body: Poppins
- H1: 48-56px (desktop), 32-40px (mobile)
- H2: 36-40px (desktop), 28-32px (mobile)
- Body: 16-18px

### Colors
- Background: neo-dark (#21221F)
- Primary text: neo-tan (#988C7F)
- Accents: neo-cyan (#72BDC2), neo-blue (#388B9E)
- Borders: neo-gray (#5C7572) with opacity

### Shadows
- Cards: shadow-neo-card
- Buttons: shadow-neo-button
- Inputs: shadow-neo-input
- Elevated: shadow-neo-elevated

### Animations
- Duration: 300-500ms
- Easing: ease-out
- Stagger delay: 100-150ms
- Hover scale: 1.02
- Active scale: 0.98

## Page Template Structure

```typescript
// app/[page]/page.tsx
import type { Metadata } from 'next';
import { Component1 } from '@/components/Component1';
import { Component2 } from '@/components/Component2';

export const metadata: Metadata = {
  title: 'Page Title | Nycayen',
  description: 'Page description for SEO',
  openGraph: {
    title: 'Page Title',
    description: 'Page description',
    images: ['/images/og-image.jpg'],
  },
};

export default function PageName() {
  return (
    <main className="min-h-screen bg-neo-dark">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20">
        <Component1 />
      </section>

      {/* Content Section */}
      <section className="container mx-auto px-4 py-16">
        <Component2 />
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-20">
        <CTASection />
      </section>
    </main>
  );
}
```

## Quality Checklist

Before marking a page complete:

- [ ] All sections use neomorphism design
- [ ] Responsive on mobile, tablet, desktop
- [ ] Images optimized and lazy-loaded
- [ ] Animations smooth and performant
- [ ] Accessibility (ARIA labels, focus states)
- [ ] SEO metadata complete
- [ ] Forms validated properly
- [ ] Loading states implemented
- [ ] Error states handled
- [ ] TypeScript types defined
- [ ] No console errors
- [ ] Lighthouse score > 90

## Performance Targets

- **First Contentful Paint**: < 1.5s
- **Largest Contentful Paint**: < 2.5s
- **Time to Interactive**: < 3.5s
- **Cumulative Layout Shift**: < 0.1
- **Total Blocking Time**: < 300ms

## Agent Coordination

This command will use:
1. **page-builder** - Builds page structure
2. **neomorph-designer** - Designs components
3. **component-builder** - Creates components
4. **frontend-developer** - Implements features
5. **style-manager** - Applies styling

## Output

The agent will:
1. Create/update page file
2. Design necessary components
3. Implement responsive layouts
4. Add animations
5. Test functionality
6. Provide preview link

Start with: "📄 Building [page-name] page with neomorphism..."
