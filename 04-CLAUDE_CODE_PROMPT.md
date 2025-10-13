# Claude Code Prompt: Neomorphism UI Implementation for Nycayen.com

## 🎯 Project Overview

I need you to transform the Nycayen Hair Salon website (nycayenmoore.com) with a complete neomorphism design system. This is a comprehensive redesign that will touch every page and component while maintaining the existing brand identity.

**Current Tech Stack:**
- Next.js 15.3.5 (App Router)
- TypeScript 5.7.2
- Tailwind CSS 3.4.13
- Framer Motion 11.14.4
- React 19.0.0

**Design Reference:**
I've provided a neomorphism UI design image (Shutterstock source) that contains multiple component types including buttons, inputs, charts, sliders, progress rings, and media controls. Use this as the visual reference for the design system.

---

## 🎨 Design System Specifications

### Color Palette (CRITICAL - Use These Exactly)

```typescript
// Existing Nycayen brand colors - DO NOT CHANGE
colors: {
  'neo-dark': '#0D0D0D',      // Charcoal Black - Primary background
  'neo-steel': '#3B3B3B',     // Slate Steel - Elevated surfaces, cards
  'neo-taupe': '#A69F97',     // Ash Taupe - Muted text, secondary elements
  'neo-champagne': '#D8CFC4', // Champagne Mist - Primary text
  'neo-gold': '#C5A46D',      // Soft Gold - Primary accent (replaces red from reference)
}
```

**IMPORTANT**: The reference image uses RED (#FF0000) as the primary accent. Replace ALL red accents with neo-gold (#C5A46D) to maintain brand consistency.

### Neomorphic Shadow System

```typescript
// Dual-shadow technique for neomorphism
boxShadow: {
  // Elevated (raised, floating elements)
  'neo-flat': '4px 4px 8px rgba(0,0,0,0.4), -4px -4px 8px rgba(59,59,59,0.1)',
  'neo-elevated': '8px 8px 16px rgba(0,0,0,0.6), -8px -8px 16px rgba(59,59,59,0.15)',
  'neo-high': '12px 12px 24px rgba(0,0,0,0.7), -12px -12px 24px rgba(59,59,59,0.2)',
  
  // Pressed (inset, recessed elements)
  'neo-pressed': 'inset 6px 6px 12px rgba(0,0,0,0.6), inset -6px -6px 12px rgba(59,59,59,0.15)',
  'neo-pressed-deep': 'inset 8px 8px 16px rgba(0,0,0,0.7), inset -8px -8px 16px rgba(59,59,59,0.2)',
  
  // Interactive states
  'neo-elevated-hover': '10px 10px 20px rgba(0,0,0,0.65), -10px -10px 20px rgba(59,59,59,0.18)',
  'neo-focus': '0 0 0 3px rgba(197,164,109,0.3), 8px 8px 16px rgba(0,0,0,0.6), -8px -8px 16px rgba(59,59,59,0.15)',
}
```

### Border Radius Standards

```javascript
borderRadius: {
  'neo-sm': '12px',
  'neo-md': '16px',
  'neo-lg': '20px',
  'neo-xl': '24px',
}
```

---

## 📦 Components to Create

### Phase 1: Core UI Components (CRITICAL)

#### 1. NeoButton Component
**File**: `components/ui/NeoButton.tsx`

**Requirements:**
- Support 3 variants: `elevated` (default), `pressed`, `flat`
- Support 3 sizes: `sm`, `md`, `lg`
- Support icon placement: `leading`, `trailing`, or `none`
- Include hover scale animation (scale-105)
- Include active press animation (scale-95)
- Support disabled state
- Full TypeScript typing
- Accessibility: proper ARIA labels, keyboard support

**Props Interface:**
```typescript
interface NeoButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'elevated' | 'pressed' | 'flat';
  size?: 'sm' | 'md' | 'lg';
  icon?: React.ReactNode;
  iconPosition?: 'leading' | 'trailing';
  isLoading?: boolean;
  fullWidth?: boolean;
}
```

**Example Usage:**
```tsx
<NeoButton variant="elevated" size="md" icon={<Calendar />} iconPosition="leading">
  Book Now
</NeoButton>
```

---

#### 2. NeoCard Component
**File**: `components/ui/NeoCard.tsx`

**Requirements:**
- Elevated neomorphic shadow by default
- Optional hover effect (lift + enhanced shadow)
- Optional pressed/flat variants
- Padding variants
- Support for header/body/footer sections
- Full TypeScript typing

**Props Interface:**
```typescript
interface NeoCardProps {
  children: React.ReactNode;
  variant?: 'elevated' | 'flat' | 'pressed';
  padding?: 'none' | 'sm' | 'md' | 'lg';
  hover?: boolean; // Enable hover lift effect
  className?: string;
}
```

---

#### 3. NeoInput Component
**File**: `components/ui/NeoInput.tsx`

**Requirements:**
- Pressed (inset) shadow style by default
- Support for leading/trailing icons
- Support for labels and error messages
- Focus state with neo-focus shadow
- Support different input types
- Full TypeScript typing
- Accessibility compliant

**Props Interface:**
```typescript
interface NeoInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  leadingIcon?: React.ReactNode;
  trailingIcon?: React.ReactNode;
  helperText?: string;
}
```

---

#### 4. NeoSearchInput Component
**File**: `components/ui/NeoSearchInput.tsx`

**Requirements:**
- Based on NeoInput with search icon
- Clear button when text is entered
- Pressed shadow style
- Debounced onChange callback
- Loading state indicator
- Full TypeScript typing

---

#### 5. NeoDropdown Component
**File**: `components/ui/NeoDropdown.tsx`

**Requirements:**
- Trigger button with neomorphic style
- Animated dropdown panel with elevated shadow
- Keyboard navigation support
- Close on click outside
- Optional icon support for items
- Full TypeScript typing
- Uses Framer Motion for animations

---

#### 6. NeoIconButton Component
**File**: `components/ui/NeoIconButton.tsx`

**Requirements:**
- Square or circular shape options
- Icon-only (no text)
- Elevated shadow with hover effect
- Active press state
- Support for loading state
- Tooltip support (optional)
- Full TypeScript typing

**Example from reference image:**
- Home icon button
- Bookmark icon button
- Search icon button
- Heart/favorite icon button

---

#### 7. NeoCTAButton Component
**File**: `components/ui/NeoCTAButton.tsx`

**Requirements:**
- Large, prominent circular or rounded button
- Strong elevation shadow
- Animated hover effect with scale
- Optional icon
- Pulsing animation option for primary CTAs
- Full TypeScript typing

**Example use case:**
- Main "Book Now" CTA on hero section
- Primary action buttons

---

### Phase 2: Advanced Components (HIGH PRIORITY)

#### 8. NeoList & NeoListItem Components
**Files**: `components/ui/NeoList.tsx`, `components/ui/NeoListItem.tsx`

**Requirements:**
- Bullet points with neo-gold colored dots
- Pressed background shadow
- Proper spacing between items
- Support for nested lists
- Icon support for bullets
- Full TypeScript typing

---

#### 9. NeoProgressRing Component
**File**: `components/ui/NeoProgressRing.tsx`

**Requirements:**
- Circular progress indicator (like 78% example in reference)
- Animated stroke progress
- Center text showing percentage
- Color coding based on value (optional)
- Size variants
- Full TypeScript typing

**Example from reference:** Shows "78%" in center of circular progress ring

---

#### 10. NeoSlider Component
**File**: `components/ui/NeoSlider.tsx`

**Requirements:**
- Range input with neomorphic styling
- Track with pressed shadow
- Handle with elevated shadow
- Value display (optional)
- Min/max range support
- Step support
- Full TypeScript typing

---

#### 11. NeoSelect Component
**File**: `components/ui/NeoSelect.tsx`

**Requirements:**
- Dropdown select with pressed shadow
- Chevron icon indicator
- Animated dropdown menu
- Searchable option (optional)
- Multi-select support (optional)
- Full TypeScript typing

---

#### 12. NeoBarChart Component
**File**: `components/ui/NeoBarChart.tsx`

**Requirements:**
- Vertical bar chart visualization
- Animated bar growth
- Hover tooltips
- Color variants (gold and champagne)
- Responsive sizing
- Data prop for chart values
- Full TypeScript typing

**Example from reference:** Red vertical bar chart and white vertical bar chart

---

### Phase 3: Specialty Components (MEDIUM PRIORITY)

#### 13. NeoToggle Component
**File**: `components/ui/NeoToggle.tsx`

**Requirements:**
- Toggle switch with neomorphic styling
- Animated sliding handle
- On/off states with color indication
- Size variants
- Full TypeScript typing

---

#### 14. NeoTextarea Component
**File**: `components/ui/NeoTextarea.tsx`

**Requirements:**
- Multi-line text input
- Pressed shadow style
- Auto-resize option
- Character counter option
- Full TypeScript typing

---

#### 15. NeoModal Component
**File**: `components/ui/NeoModal.tsx`

**Requirements:**
- Full-screen overlay with backdrop blur
- Content card with elevated shadow
- Animated entrance/exit
- Close button
- Keyboard support (Escape to close)
- Full TypeScript typing

---

#### 16. NeoTooltip Component
**File**: `components/ui/NeoTooltip.tsx`

**Requirements:**
- Small elevated card
- Positioned relative to trigger element
- Arrow pointer
- Fade in/out animation
- Full TypeScript typing

---

### Phase 4: Optional/Future Components

#### 17. NeoWaveform Component
**File**: `components/ui/NeoWaveform.tsx`

**Requirements:**
- Audio waveform visualization
- Animated vertical bars
- Playback indicator
- Only create if needed for Instagram video/audio features

---

#### 18. NeoMediaControls Component
**File**: `components/ui/NeoMediaControls.tsx`

**Requirements:**
- Play/pause, next/previous, volume controls
- Icon buttons with neomorphic style
- Only create if adding media player functionality

---

## 🏗️ Implementation Workflow

### Step 1: Update Configuration Files

#### A. Update `tailwind.config.js`

Add the neomorphic shadow utilities and ensure color palette is correct:

```javascript
/** @type {import('tailwindcss').Config} */
module.exports = {
  // ... existing config
  theme: {
    extend: {
      colors: {
        // Verify these are present
        'neo-dark': '#0D0D0D',
        'neo-steel': '#3B3B3B',
        'neo-taupe': '#A69F97',
        'neo-champagne': '#D8CFC4',
        'neo-gold': '#C5A46D',
        // ... other colors
      },
      boxShadow: {
        // ADD THESE SHADOW UTILITIES
        'neo-flat': '4px 4px 8px rgba(0,0,0,0.4), -4px -4px 8px rgba(59,59,59,0.1)',
        'neo-elevated': '8px 8px 16px rgba(0,0,0,0.6), -8px -8px 16px rgba(59,59,59,0.15)',
        'neo-high': '12px 12px 24px rgba(0,0,0,0.7), -12px -12px 24px rgba(59,59,59,0.2)',
        'neo-pressed': 'inset 6px 6px 12px rgba(0,0,0,0.6), inset -6px -6px 12px rgba(59,59,59,0.15)',
        'neo-pressed-deep': 'inset 8px 8px 16px rgba(0,0,0,0.7), inset -8px -8px 16px rgba(59,59,59,0.2)',
        'neo-elevated-hover': '10px 10px 20px rgba(0,0,0,0.65), -10px -10px 20px rgba(59,59,59,0.18)',
        'neo-focus': '0 0 0 3px rgba(197,164,109,0.3), 8px 8px 16px rgba(0,0,0,0.6), -8px -8px 16px rgba(59,59,59,0.15)',
      },
      borderRadius: {
        'neo-sm': '12px',
        'neo-md': '16px',
        'neo-lg': '20px',
        'neo-xl': '24px',
      },
      // ... rest of config
    },
  },
};
```

#### B. Update `app/globals.css`

Add neomorphic utility classes and ensure smooth transitions:

```css
/* Add after existing @tailwind directives */

/* Neomorphic Utilities */
@layer utilities {
  .neo-elevated-interactive {
    @apply shadow-neo-elevated transition-all duration-300;
  }
  
  .neo-elevated-interactive:hover {
    @apply shadow-neo-elevated-hover scale-105;
  }
  
  .neo-elevated-interactive:active {
    @apply shadow-neo-pressed scale-95;
  }
  
  .neo-pressed-input {
    @apply shadow-neo-pressed transition-all duration-300;
  }
  
  .neo-pressed-input:focus {
    @apply shadow-neo-focus;
  }
}

/* Smooth animations for all neomorphic elements */
.neo-transition {
  transition-property: box-shadow, transform, opacity;
  transition-duration: 300ms;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
}
```

---

### Step 2: Create Utility Functions

#### Create `utils/cn.ts` (if not exists)

```typescript
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
```

#### Create `utils/neo-shadows.ts`

```typescript
/**
 * Neomorphic shadow utility functions
 * Helps generate consistent shadows across components
 */

export const neoShadows = {
  flat: {
    light: '4px 4px 8px rgba(0, 0, 0, 0.4)',
    dark: '-4px -4px 8px rgba(59, 59, 59, 0.1)',
  },
  elevated: {
    light: '8px 8px 16px rgba(0, 0, 0, 0.6)',
    dark: '-8px -8px 16px rgba(59, 59, 59, 0.15)',
  },
  high: {
    light: '12px 12px 24px rgba(0, 0, 0, 0.7)',
    dark: '-12px -12px 24px rgba(59, 59, 59, 0.2)',
  },
  pressed: {
    light: 'inset 6px 6px 12px rgba(0, 0, 0, 0.6)',
    dark: 'inset -6px -6px 12px rgba(59, 59, 59, 0.15)',
  },
  pressedDeep: {
    light: 'inset 8px 8px 16px rgba(0, 0, 0, 0.7)',
    dark: 'inset -8px -8px 16px rgba(59, 59, 59, 0.2)',
  },
} as const;

export type NeoShadowType = keyof typeof neoShadows;

/**
 * Combine light and dark shadows for the dual-shadow neomorphic effect
 */
export function getShadow(type: NeoShadowType): string {
  const shadow = neoShadows[type];
  return `${shadow.light}, ${shadow.dark}`;
}

/**
 * Get Framer Motion shadow object for animations
 */
export function getAnimatedShadow(type: NeoShadowType) {
  return getShadow(type);
}
```

---

### Step 3: Build Core Components

Start with Phase 1 components in this exact order:
1. NeoButton
2. NeoCard  
3. NeoInput
4. NeoSearchInput
5. NeoDropdown
6. NeoIconButton
7. NeoCTAButton

For each component:
- Create full TypeScript interface for props
- Use Framer Motion for animations
- Implement all variants and states
- Add comprehensive JSDoc comments
- Ensure accessibility (ARIA labels, keyboard navigation)
- Use `cn()` utility for className merging
- Follow the styling patterns from the audit document

**Example Component Structure:**

```typescript
"use client";

import { forwardRef } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/utils/cn';
import { type VariantProps, cva } from 'class-variance-authority';

// Define variants using cva
const buttonVariants = cva(
  // Base classes
  "inline-flex items-center justify-center font-medium transition-all duration-300 focus:outline-none",
  {
    variants: {
      variant: {
        elevated: "bg-neo-steel text-neo-gold shadow-neo-elevated hover:shadow-neo-elevated-hover active:shadow-neo-pressed",
        pressed: "bg-neo-dark text-neo-champagne shadow-neo-pressed hover:text-neo-gold",
        flat: "bg-neo-steel text-neo-champagne shadow-neo-flat hover:shadow-neo-elevated",
      },
      size: {
        sm: "px-4 py-2 text-sm rounded-xl",
        md: "px-6 py-3 text-base rounded-xl",
        lg: "px-8 py-4 text-lg rounded-2xl",
      },
    },
    defaultVariants: {
      variant: "elevated",
      size: "md",
    },
  }
);

interface NeoButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  icon?: React.ReactNode;
  iconPosition?: 'leading' | 'trailing';
  isLoading?: boolean;
}

export const NeoButton = forwardRef<HTMLButtonElement, NeoButtonProps>(
  ({ className, variant, size, icon, iconPosition = 'leading', isLoading, children, ...props }, ref) => {
    return (
      <motion.button
        ref={ref}
        className={cn(buttonVariants({ variant, size, className }))}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        {...props}
      >
        {icon && iconPosition === 'leading' && <span className="mr-2">{icon}</span>}
        {children}
        {icon && iconPosition === 'trailing' && <span className="ml-2">{icon}</span>}
      </motion.button>
    );
  }
);

NeoButton.displayName = 'NeoButton';
```

---

### Step 4: Update Existing Components

After core UI components are built, update existing components to use them:

#### Update `components/Navbar.tsx`:
- Replace standard buttons with NeoButton
- Add neomorphic card wrapper for navbar container
- Update mobile menu with neomorphic styling
- Replace icon buttons with NeoIconButton

#### Update `components/Footer.tsx`:
- Wrap in NeoCard
- Update social icons with NeoIconButton
- Update newsletter form with NeoInput and NeoButton

#### Update `components/HeroSection.tsx`:
- Replace CTA button with NeoCTAButton
- Update any secondary buttons with NeoButton
- Ensure cards use NeoCard component

#### Update Other Components:
- `InstagramCarousel.tsx` - Use NeoIconButton for navigation
- `Testimonials.tsx` - Wrap testimonial cards in NeoCard
- `ServicesList.tsx` - Use NeoCard for service items, NeoButton for CTAs
- `BookingWidget.tsx` - Use NeoInput, NeoSelect, NeoButton
- `PortfolioGrid.tsx` - Use NeoCard for portfolio items
- `BlogPreview.tsx` - Use NeoCard for blog post previews
- `CookieBanner.tsx` - Update buttons with NeoButton
- `Chatbot.tsx` - Update with neomorphic styling

---

### Step 5: Create/Update Pages

For each page, ensure:
- All components use the new neomorphic design system
- Consistent spacing and layout
- Proper use of NeoCard for content sections
- All CTAs use appropriate button components
- Forms use neomorphic input components

**Pages to Update:**
1. Homepage - `app/page.tsx`
2. Services - `app/services/page.tsx`
3. Portfolio - `app/portfolio/page.tsx`
4. About - `app/about/page.tsx`
5. Shop - `app/shop/page.tsx`
6. Blog - `app/blog/page.tsx`
7. Contact - `app/contact/page.tsx`
8. Booking - `app/booking/page.tsx`

---

## 🎯 Critical Requirements

### 1. Color Consistency
- **NEVER** use red (#FF0000) from the reference image
- **ALWAYS** replace with neo-gold (#C5A46D)
- Maintain existing brand color palette
- Use neo-champagne for primary text
- Use neo-gold for accents and CTAs

### 2. Shadow System
- All elevated elements use `shadow-neo-elevated`
- All pressed/inset elements use `shadow-neo-pressed`
- Hover states enhance shadows
- Active/pressed states use inset shadows
- Focus states use `shadow-neo-focus`

### 3. Animations
- Use Framer Motion for all animations
- Hover scale: 1.05 (subtle lift)
- Active scale: 0.95 (press down)
- Transition duration: 300ms
- Use cubic-bezier(0.4, 0, 0.2, 1) easing

### 4. Accessibility
- All interactive elements are keyboard accessible
- Proper ARIA labels on icon buttons
- Focus indicators are visible
- Color contrast meets WCAG AA standards
- Form labels are associated with inputs

### 5. TypeScript
- Full TypeScript typing for all components
- No `any` types
- Proper prop interfaces
- Extend HTML element types correctly
- Use generics where appropriate

### 6. Responsiveness
- Mobile-first approach
- Test all breakpoints (sm, md, lg, xl)
- Touch-friendly sizing (min 44x44px)
- Proper spacing adjustments
- Stack layouts appropriately

---

## 📋 Deliverables Checklist

When you're done, I should have:

### Configuration
- [  ] Updated `tailwind.config.js` with neomorphic utilities
- [ ] Updated `app/globals.css` with utility classes
- [ ] Created `utils/cn.ts` (if needed)
- [ ] Created `utils/neo-shadows.ts`

### Core Components (Phase 1)
- [ ] `components/ui/NeoButton.tsx`
- [ ] `components/ui/NeoCard.tsx`
- [ ] `components/ui/NeoInput.tsx`
- [ ] `components/ui/NeoSearchInput.tsx`
- [ ] `components/ui/NeoDropdown.tsx`
- [ ] `components/ui/NeoIconButton.tsx`
- [ ] `components/ui/NeoCTAButton.tsx`

### Advanced Components (Phase 2)
- [ ] `components/ui/NeoList.tsx` & `NeoListItem.tsx`
- [ ] `components/ui/NeoProgressRing.tsx`
- [ ] `components/ui/NeoSlider.tsx`
- [ ] `components/ui/NeoSelect.tsx`
- [ ] `components/ui/NeoBarChart.tsx`

### Additional Components (Phase 3)
- [ ] `components/ui/NeoToggle.tsx`
- [ ] `components/ui/NeoTextarea.tsx`
- [ ] `components/ui/NeoModal.tsx`
- [ ] `components/ui/NeoTooltip.tsx`

### Updated Existing Components
- [ ] `components/Navbar.tsx`
- [ ] `components/Footer.tsx`
- [ ] `components/HeroSection.tsx`
- [ ] `components/InstagramCarousel.tsx`
- [ ] `components/Testimonials.tsx`
- [ ] `components/ServicesList.tsx`
- [ ] `components/BookingWidget.tsx`
- [ ] `components/PortfolioGrid.tsx`
- [ ] `components/BlogPreview.tsx`
- [ ] `components/CookieBanner.tsx`
- [ ] `components/Chatbot.tsx`

### Updated Pages
- [ ] `app/page.tsx` (Homepage)
- [ ] `app/services/page.tsx`
- [ ] `app/portfolio/page.tsx`
- [ ] `app/about/page.tsx`
- [ ] `app/shop/page.tsx`
- [ ] `app/blog/page.tsx`
- [ ] `app/contact/page.tsx`
- [ ] `app/booking/page.tsx`

### Quality Assurance
- [ ] No TypeScript errors
- [ ] No build errors
- [ ] All components render correctly
- [ ] Animations are smooth (60fps)
- [ ] Responsive on all breakpoints
- [ ] Accessibility standards met
- [ ] Performance is maintained (Lighthouse 90+)

---

## 🚀 Getting Started

1. **First**, update the configuration files (tailwind.config.js, globals.css)
2. **Then**, create utility functions (cn.ts, neo-shadows.ts)
3. **Next**, build Phase 1 components one by one, testing each
4. **After that**, move to Phase 2 and 3 components
5. **Finally**, integrate components into existing pages and components

---

## 💡 Tips for Success

- **Start small**: Build and test one component at a time
- **Use the reference image**: Refer back to the Shutterstock design for shadow depths and styling
- **Test frequently**: Build and run the dev server after each component
- **Maintain consistency**: Use the same shadow patterns across all components
- **Document as you go**: Add JSDoc comments to complex functions
- **Think about reusability**: Make components flexible with props
- **Prioritize accessibility**: Don't sacrifice accessibility for aesthetics

---

## 📞 Questions to Ask Me

If you encounter any ambiguity, ask me about:
- Specific component behavior or interaction patterns
- Whether a component from the reference image should be implemented
- Priority of certain features
- Integration details for existing components
- Design decisions not covered in this prompt

---

**Let's build something beautiful! Start with Step 1: Update Configuration Files, and let me know when you're ready to proceed to the next step.**