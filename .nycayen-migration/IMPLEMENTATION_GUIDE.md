# Step-by-Step Implementation Guide

Detailed walkthrough for migrating content from nycayen.com to your repository using Claude Code.

---

## 🚀 Quick Start

### For Claude Code Users
```bash
# 1. Open Claude Code in your project
code .

# 2. In Claude Code, say:
"Please execute the content migration from CLAUDE_CODE_PROMPT.md. 
Use CONTENT_REFERENCE.md for all copy. 
Follow the implementation steps in IMPLEMENTATION_GUIDE.md.
Preserve all styling and layout - only update text content."

# 3. Claude Code will handle the rest!
```

---

## 📖 Detailed Implementation Steps

### Step 1: Pre-Migration Setup (5 minutes)

#### 1.1 Create Backup
```bash
# Create a backup branch
git checkout -b backup-before-content-migration
git push origin backup-before-content-migration

# Return to main branch
git checkout main
git checkout -b content-migration
```

#### 1.2 Verify Current State
```bash
# Ensure project builds
npm run build

# Check for errors
npm run type-check
npm run lint

# If any errors, fix them first before proceeding
```

#### 1.3 Document Current State
```bash
# Take screenshots of current pages
# - Home page
# - Services page (if exists)
# - About page (if exists)
```

---

### Step 2: Home Page Migration (30 minutes)

#### 2.1 Update Hero Section

**File**: `components/HeroSection.tsx` or `app/page.tsx`

**Find current hero headline and replace with:**
```typescript
// Current: "Your Current Headline"
// New:
const headline = "Expert Hair Styling Services for Men and Women";
const subheadline = "Get the perfect look with our expert hair styling services anywhere in the US";
```

**Implementation:**
```typescript
<h1 className="[KEEP EXISTING CLASSES]">
  Expert Hair Styling Services for Men and Women
</h1>
<p className="[KEEP EXISTING CLASSES]">
  Get the perfect look with our expert hair styling services anywhere in the US
</p>
```

#### 2.2 Update Value Propositions

**Location**: Home page, after hero section

**Replace 4 value prop cards with:**
```typescript
const valueProps = [
  {
    title: "Trendy Styles",
    description: "Stay up-to-date with the latest trendy hairstyles.",
    icon: "[KEEP EXISTING ICON]"
  },
  {
    title: "Customized Looks",
    description: "Get a customized look tailored to your individual preferences and features.",
    icon: "[KEEP EXISTING ICON]"
  },
  {
    title: "Attention to Detail",
    description: "Experience meticulous attention to detail in every aspect of our services.",
    icon: "[KEEP EXISTING ICON]"
  },
  {
    title: "Celebrity Treatment",
    description: "Receive the same VIP treatment enjoyed by celebrities and influencers.",
    icon: "[KEEP EXISTING ICON]"
  }
];
```

#### 2.3 Update Brand Promise Section

**Find the "about us" or "mission" section and replace with:**
```typescript
<section className="[KEEP EXISTING CLASSES]">
  <h2 className="[KEEP EXISTING CLASSES]">
    Nycayen Moore
  </h2>
  <h3 className="[KEEP EXISTING CLASSES]">
    Radiate Confidence
  </h3>
  <p className="[KEEP EXISTING CLASSES]">
    Nycayen believe that great hair can transform your life. Our personalized 
    hair styling services are designed to enhance your natural beauty and boost 
    your confidence. Whether it's a chic cut or a glamorous updo, we ensure you 
    leave our care feeling empowered and ready to take on the world.
  </p>
</section>
```

#### 2.4 Update Services Overview

```typescript
<section className="[KEEP EXISTING CLASSES]">
  <h2 className="[KEEP EXISTING CLASSES]">
    Professional Hair Styling
  </h2>
  <h3 className="[KEEP EXISTING CLASSES]">
    Discover our range of hair services for all occasions
  </h3>
  <p className="[KEEP EXISTING CLASSES]">
    We offer a variety of hair services to cater to your individual needs. 
    Our team of expert stylists specializes in professional hair styling and 
    is committed to providing personalized service with exceptional attention 
    to detail. Whether you're a groom-to-be, a bride-to-be, a celebrity, a 
    trendsetter, or a model, we have the expertise and techniques to create 
    the perfect look for you.
  </p>
</section>
```

#### 2.5 Update Experience Section

```typescript
<section className="[KEEP EXISTING CLASSES]">
  <h2 className="[KEEP EXISTING CLASSES]">
    Unmatched Hair Salon Experience
  </h2>
  <h3 className="[KEEP EXISTING CLASSES]">
    Elevate your style with our exceptional salon services
  </h3>
  <p className="[KEEP EXISTING CLASSES]">
    With decades of experience and a commitment to perfection, we provide 
    personalized services that set us apart from the competition.
  </p>
</section>
```

#### 2.6 Update Features (3 items)

```typescript
const features = [
  {
    title: "Skillful Styling",
    description: "Trust in our stylists' expertise to transform your hair into a work of art.",
    icon: "[KEEP EXISTING]"
  },
  {
    title: "Precision Perfectionists",
    description: "We believe that even the smallest details can make or break a hairstyle. That's why we take pride in our precision and ensure every element is flawlessly executed. From start to finish, we go above and beyond for flawless results.",
    icon: "[KEEP EXISTING]"
  },
  {
    title: "Tailored Treatments",
    description: "We understand that every individual is unique and deserves a customized experience. Our stylists take the time to listen to your preferences and tailor our services to meet your specific needs. From consultation to completion, we ensure you receive exceptional service every step of the way.",
    icon: "[KEEP EXISTING]"
  }
];
```

#### 2.7 Update Specializations

```typescript
const specializations = [
  {
    title: "Wedding & Special Events",
    description: "From romantic updos to elegant braids, our expert stylists will make sure you look stunning on your wedding day.",
    image: "[KEEP EXISTING]"
  },
  {
    title: "Latest Trends",
    description: "Our creative team is always experimenting with new styles to bring you the latest trends in hair fashion.",
    image: "[KEEP EXISTING]"
  },
  {
    title: "Versatile Looks",
    description: "Our stylists excel in creating versatile looks that can be easily transformed to match any event or mood.",
    image: "[KEEP EXISTING]"
  },
  {
    title: "Expert Knowledge",
    description: "With their expert knowledge and skills, our team brings out the best in your hair, leaving you feeling confident and beautiful.",
    image: "[KEEP EXISTING]"
  },
  {
    title: "Special Occasions",
    description: "Whether it's a red carpet event or a romantic date night, we will create a stunning hairstyle that suits the occasion.",
    image: "[KEEP EXISTING]"
  },
  {
    title: "Quality Care",
    description: "Our commitment to quality ensures that your hair receives optimal care and stays healthy and vibrant.",
    image: "[KEEP EXISTING]"
  }
];
```

#### 2.8 Update FAQ Section

```typescript
const faqs = [
  {
    question: "What services does Nycayen Moore specialize in?",
    answer: "Nycayen Moore specializes in men's grooming, bridal hair styling, and personalized hair styling for any occasion."
  },
  {
    question: "Can Nycayen Moore handle all hair types?",
    answer: "Yes, our expert hairstylists at Nycayen Moore have experience handling all hair types and textures."
  },
  {
    question: "Does Nycayen Moore offer services outside of their location?",
    answer: "Absolutely! Nycayen Moore offers its professional services anywhere in the United States."
  },
  {
    question: "What makes Nycayen Moore different from other salons?",
    answer: "Nycayen Moore stands out with its focus on expert techniques, attention to detail, and personalized service for each client."
  },
  {
    question: "Does Nycayen Moore offer makeup services?",
    answer: "No, Nycayen Moore specializes in hair services only. We do not offer makeup services."
  }
];
```

#### 2.9 Update Final CTA

```typescript
<section className="[KEEP EXISTING CLASSES]">
  <h2 className="[KEEP EXISTING CLASSES]">
    Schedule Your Appointment Today
  </h2>
  <p className="[KEEP EXISTING CLASSES]">
    Ready to transform your hair and experience the difference? Fill out the 
    form below to schedule your appointment and take the first step towards 
    your new look. We can't wait to meet you!
  </p>
  <button className="[KEEP EXISTING CLASSES]">
    Book Now
  </button>
</section>
```

---

### Step 3: Update ServicesList Component (15 minutes)

**File**: `components/ServicesList.tsx`

#### 3.1 Update Service Categories

```typescript
const services = [
  {
    category: "Men's Grooming",
    title: "Professional Men's Hair Services",
    description: "Specialized men's grooming and styling services with precision and attention to detail.",
    features: [
      "Professional styling",
      "Contemporary looks",
      "All hair types"
    ],
    icon: "[KEEP EXISTING]"
  },
  {
    category: "Bridal Hair",
    title: "Wedding & Bridal Styling",
    description: "Make your special day unforgettable with romantic updos, elegant braids, and customized bridal hair styling.",
    features: [
      "Wedding day styling",
      "Romantic updos",
      "Elegant braids",
      "Trial sessions available"
    ],
    icon: "[KEEP EXISTING]"
  },
  {
    category: "Custom Styling",
    title: "Personalized Hair Styling",
    description: "Custom looks tailored to your individual preferences for any occasion - from red carpet events to date nights.",
    features: [
      "Trendsetting styles",
      "Versatile transformations",
      "Special occasion styling",
      "All hair types and textures"
    ],
    icon: "[KEEP EXISTING]"
  },
  {
    category: "Hair Care",
    title: "Premium Hair Care & Treatments",
    description: "Quality hair care that keeps your hair healthy, vibrant, and looking its best.",
    features: [
      "Hair health focused",
      "Quality products",
      "Expert consultation",
      "Ongoing care recommendations"
    ],
    icon: "[KEEP EXISTING]"
  }
];
```

---

### Step 4: Update Testimonials Component (5 minutes)

**File**: `components/Testimonials.tsx`

#### 4.1 Update Section Heading

```typescript
<section className="[KEEP EXISTING CLASSES]">
  <h2 className="[KEEP EXISTING CLASSES]">
    Impressive
  </h2>
  <h3 className="[KEEP EXISTING CLASSES]">
    Exceptional Testimonials from Satisfied Clients
  </h3>
  {/* KEEP EXISTING TESTIMONIALS COMPONENT */}
</section>
```

---

### Step 5: Update BookingWidget Component (5 minutes)

**File**: `components/BookingWidget.tsx`

#### 5.1 Update CTA Text

```typescript
<div className="[KEEP EXISTING CLASSES]">
  <h2 className="[KEEP EXISTING CLASSES]">
    Schedule Your Appointment Today
  </h2>
  <p className="[KEEP EXISTING CLASSES]">
    Ready to transform your hair and experience the difference?
  </p>
  <button className="[KEEP EXISTING CLASSES]">
    Book Your Appointment
  </button>
</div>
```

---

### Step 6: Update Footer Component (5 minutes)

**File**: `components/Footer.tsx`

#### 6.1 Update Business Description

```typescript
<div className="[KEEP EXISTING CLASSES]">
  <h3 className="[KEEP EXISTING CLASSES]">Nycayen Moore</h3>
  <p className="[KEEP EXISTING CLASSES]">
    Expert hair styling services for men and women. Get the perfect look with 
    our personalized hair styling services anywhere in the US.
  </p>
</div>
```

---

### Step 7: Update Metadata (10 minutes)

#### 7.1 Update Home Page Metadata

**File**: `app/page.tsx` or `app/layout.tsx`

```typescript
export const metadata: Metadata = {
  title: 'Expert Hair Styling Services | Nycayen Moore',
  description: 'Get the perfect look with expert hair styling services for men and women anywhere in the US. Specializing in bridal hair, men\'s grooming, and personalized styling.',
  keywords: 'hair styling, expert hairstylist, bridal hair, men\'s grooming, personalized styling, hair salon',
  openGraph: {
    title: 'Expert Hair Styling Services | Nycayen Moore',
    description: 'Transform your hair with expert styling services anywhere in the US.',
    // KEEP OTHER OG PROPERTIES
  }
};
```

#### 7.2 Create/Update About Page Metadata

**File**: `app/about/page.tsx`

```typescript
export const metadata: Metadata = {
  title: 'About Nycayen Moore | Expert Hair Stylist',
  description: 'Learn about Nycayen Moore\'s commitment to transforming lives through expert hair styling with personalized service and attention to detail.',
};
```

#### 7.3 Create/Update Services Page Metadata

**File**: `app/services/page.tsx`

```typescript
export const metadata: Metadata = {
  title: 'Hair Services | Nycayen Moore',
  description: 'Professional hair styling services including men\'s grooming, bridal hair, custom styling, and premium hair care. Services available anywhere in the US.',
};
```

---

### Step 8: Create Missing Pages (20 minutes)

#### 8.1 About Page

**File**: `app/about/page.tsx` (if doesn't exist)

```typescript
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Nycayen Moore | Expert Hair Stylist',
  description: 'Learn about Nycayen Moore\'s commitment to transforming lives through expert hair styling.',
};

export default function AboutPage() {
  return (
    <main className="[USE EXISTING LAYOUT CLASSES]">
      <section className="[HERO SECTION CLASSES]">
        <h1>About Nycayen Moore</h1>
        <p className="[SUBHEADING CLASSES]">
          Radiate Confidence
        </p>
      </section>

      <section className="[CONTENT SECTION CLASSES]">
        <p>
          Nycayen believe that great hair can transform your life. Our 
          personalized hair styling services are designed to enhance your 
          natural beauty and boost your confidence. Whether it's a chic cut 
          or a glamorous updo, we ensure you leave our care feeling empowered 
          and ready to take on the world.
        </p>
      </section>

      <section className="[CONTENT SECTION CLASSES]">
        <h2>Our Approach</h2>
        <div className="[GRID CLASSES]">
          <div>
            <h3>Expertise</h3>
            <p>
              With decades of experience and a commitment to perfection, we 
              provide personalized services that set us apart from the competition.
            </p>
          </div>
          <div>
            <h3>Attention to Detail</h3>
            <p>
              We believe that even the smallest details can make or break a 
              hairstyle. From start to finish, we go above and beyond for 
              flawless results.
            </p>
          </div>
          <div>
            <h3>Personalization</h3>
            <p>
              Every individual is unique and deserves a customized experience. 
              We take the time to listen to your preferences and tailor our 
              services to meet your specific needs.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
```

#### 8.2 Services Page

**File**: `app/services/page.tsx` (if needs major updates)

```typescript
import type { Metadata } from 'next';
import { ServicesList } from '@/components/ServicesList';
import { BookingWidget } from '@/components/BookingWidget';

export const metadata: Metadata = {
  title: 'Hair Services | Nycayen Moore',
  description: 'Professional hair styling services including men\'s grooming, bridal hair, and custom styling.',
};

export default function ServicesPage() {
  return (
    <main className="[USE EXISTING LAYOUT CLASSES]">
      <section className="[HERO SECTION CLASSES]">
        <h1>Professional Hair Styling</h1>
        <p className="[SUBHEADING CLASSES]">
          Discover our range of hair services for all occasions
        </p>
      </section>

      <section className="[CONTENT SECTION CLASSES]">
        <p>
          We offer a variety of hair services to cater to your individual needs. 
          Our team of expert stylists specializes in professional hair styling 
          and is committed to providing personalized service with exceptional 
          attention to detail.
        </p>
      </section>

      <ServicesList />

      <section className="[CONTENT SECTION CLASSES]">
        <h2>Service Areas</h2>
        <p>
          Nycayen Moore offers professional services anywhere in the United States. 
          Whether you're in New York or across the country, we bring expert hair 
          styling to you.
        </p>
      </section>

      <BookingWidget />
    </main>
  );
}
```

---

### Step 9: Verification (15 minutes)

#### 9.1 TypeScript Check
```bash
npm run type-check
# Fix any type errors
```

#### 9.2 Lint Check
```bash
npm run lint
# Fix any linting issues
```

#### 9.3 Build Test
```bash
npm run build
# Ensure build succeeds
```

#### 9.4 Visual Verification
```bash
npm run dev
# Open http://localhost:3000
```

**Check:**
- [ ] Home page loads
- [ ] All new content displays
- [ ] No layout breaks
- [ ] Fonts unchanged
- [ ] Colors unchanged
- [ ] Animations work
- [ ] Mobile responsive
- [ ] All links work
- [ ] Forms functional

#### 9.5 Content Verification

Compare against `CONTENT_REFERENCE.md`:
- [ ] Hero matches
- [ ] Value props match
- [ ] Brand promise matches
- [ ] Services match
- [ ] Features match
- [ ] Specializations match
- [ ] FAQs match
- [ ] CTAs match

---

### Step 10: Commit & Deploy (10 minutes)

#### 10.1 Git Commit
```bash
git add .
git commit -m "feat: migrate content from nycayen.com

- Updated home page with nycayen.com copy
- Updated ServicesList component with new services
- Updated Testimonials heading
- Updated BookingWidget CTA
- Updated Footer description
- Updated metadata across all pages
- Created/updated About page
- Created/updated Services page

Preserved all styling, layout, and design system.
Only text content was modified."
```

#### 10.2 Push to Repository
```bash
git push origin content-migration
```

#### 10.3 Create Pull Request
- Review changes in GitHub
- Verify no styling files changed
- Merge to main branch

#### 10.4 Deploy
```bash
# If using Vercel
vercel --prod

# Or follow your deployment process
```

---

## ✅ Final Checklist

### Content Migration
- [ ] Hero section updated
- [ ] Value propositions updated
- [ ] Brand promise updated
- [ ] Services overview updated
- [ ] Features updated
- [ ] Specializations updated
- [ ] FAQs updated
- [ ] Final CTA updated
- [ ] ServicesList component updated
- [ ] Testimonials heading updated
- [ ] BookingWidget CTA updated
- [ ] Footer description updated
- [ ] About page created/updated
- [ ] Services page created/updated
- [ ] Metadata updated

### Technical Verification
- [ ] TypeScript compiles
- [ ] No lint errors
- [ ] Build succeeds
- [ ] All pages load
- [ ] No console errors
- [ ] Mobile responsive
- [ ] Desktop responsive

### Design Preservation
- [ ] Fonts unchanged
- [ ] Colors unchanged
- [ ] Layout unchanged
- [ ] Spacing unchanged
- [ ] Animations work
- [ ] Components intact

### Quality Assurance
- [ ] Content matches nycayen.com
- [ ] All links work
- [ ] Forms submit
- [ ] Images display
- [ ] Fast loading
- [ ] SEO optimized

---

## 🚨 Common Issues & Solutions

### Issue: TypeScript Errors After Updates
**Solution**: Ensure you didn't accidentally modify component props or interfaces

### Issue: Layout Breaks
**Solution**: Verify you only changed text content, not className attributes

### Issue: Missing Content
**Solution**: Reference CONTENT_REFERENCE.md for exact copy

### Issue: Build Fails
**Solution**: Check for syntax errors in JSX, ensure all tags are closed

### Issue: Styling Changed
**Solution**: Revert any changes to .css files or className attributes

---

## 📞 Need Help?

If you encounter issues:
1. Check this guide first
2. Reference CONTENT_REFERENCE.md for exact copy
3. Compare against backup branch
4. Verify you followed "DO NOT CHANGE" rules
5. Review the original nycayen.com website

---

**Remember**: This is ONLY a content migration. We're updating text, not design!
