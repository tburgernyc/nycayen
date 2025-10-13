# Neomorphism Implementation - Quick Start Guide

## 🚀 Getting Started

This guide will walk you through implementing the neomorphism design system into your Nycayen.com project.

---

## Step 1: Copy Files to Your Project

### 1.1 Copy Configuration Files

```bash
# Copy the updated Tailwind config
cp tailwind.config.js /path/to/nycayenmoore.com/tailwind.config.js

# Backup your current config first!
cp /path/to/nycayenmoore.com/tailwind.config.js /path/to/nycayenmoore.com/tailwind.config.js.backup
```

### 1.2 Create Utility Functions

```bash
# Create utils directory if it doesn't exist
mkdir -p /path/to/nycayenmoore.com/utils

# Copy utility files
cp utils/neo-shadows.ts /path/to/nycayenmoore.com/utils/
cp utils/cn.ts /path/to/nycayenmoore.com/utils/
```

### 1.3 Update Global CSS

Add these neomorphic utilities to your `app/globals.css`:

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

## Step 2: Install Required Dependencies

```bash
cd /path/to/nycayenmoore.com

# Install class-variance-authority for variant management
npm install class-variance-authority

# Install clsx and tailwind-merge (if not already installed)
npm install clsx tailwind-merge

# Install lucide-react (if not already installed)
npm install lucide-react

# Verify framer-motion is installed
npm list framer-motion
```

---

## Step 3: Create Component Directory Structure

```bash
# Create ui components directory
mkdir -p /path/to/nycayenmoore.com/components/ui

# Copy component files
cp components/NeoButton.tsx /path/to/nycayenmoore.com/components/ui/
cp components/NeoCard.tsx /path/to/nycayenmoore.com/components/ui/
cp components/NeoInput.tsx /path/to/nycayenmoore.com/components/ui/
```

---

## Step 4: Test the Components

Create a test page to verify everything works:

### 4.1 Create Test Page

Create `/path/to/nycayenmoore.com/app/test-neo/page.tsx`:

```tsx
"use client";

import { Calendar, Search, Heart } from 'lucide-react';
import { NeoButton } from '@/components/ui/NeoButton';
import { NeoCard, NeoCardHeader, NeoCardTitle, NeoCardDescription, NeoCardContent } from '@/components/ui/NeoCard';
import { NeoInput } from '@/components/ui/NeoInput';

export default function TestNeoPage() {
  return (
    <div className="min-h-screen bg-neo-dark p-8">
      <div className="max-w-4xl mx-auto space-y-8">
        <h1 className="text-4xl font-playfair text-neo-champagne mb-8">
          Neomorphism Component Test
        </h1>

        {/* Button Tests */}
        <NeoCard>
          <NeoCardHeader>
            <NeoCardTitle>Button Variants</NeoCardTitle>
            <NeoCardDescription>Testing different button styles</NeoCardDescription>
          </NeoCardHeader>
          <NeoCardContent className="space-y-4">
            <div className="flex flex-wrap gap-4">
              <NeoButton variant="elevated">Elevated Button</NeoButton>
              <NeoButton variant="pressed">Pressed Button</NeoButton>
              <NeoButton variant="gold">Gold Button</NeoButton>
              <NeoButton variant="ghost">Ghost Button</NeoButton>
            </div>
            
            <div className="flex flex-wrap gap-4">
              <NeoButton size="sm">Small</NeoButton>
              <NeoButton size="md">Medium</NeoButton>
              <NeoButton size="lg">Large</NeoButton>
              <NeoButton size="xl">Extra Large</NeoButton>
            </div>
            
            <div className="flex flex-wrap gap-4">
              <NeoButton icon={<Calendar />} iconPosition="leading">
                Book Now
              </NeoButton>
              <NeoButton icon={<Heart />} iconPosition="trailing">
                Favorite
              </NeoButton>
              <NeoButton size="icon" icon={<Search />} aria-label="Search" />
            </div>
            
            <div className="flex flex-wrap gap-4">
              <NeoButton isLoading loadingText="Processing...">
                Submit
              </NeoButton>
              <NeoButton disabled>Disabled</NeoButton>
            </div>
          </NeoCardContent>
        </NeoCard>

        {/* Card Tests */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <NeoCard variant="elevated" hover animate>
            <NeoCardTitle>Elevated Card</NeoCardTitle>
            <NeoCardContent>
              This card has an elevated shadow and hover effect.
            </NeoCardContent>
          </NeoCard>
          
          <NeoCard variant="pressed" padding="lg">
            <NeoCardTitle>Pressed Card</NeoCardTitle>
            <NeoCardContent>
              This card has an inset shadow (pressed style).
            </NeoCardContent>
          </NeoCard>
        </div>

        {/* Input Tests */}
        <NeoCard>
          <NeoCardHeader>
            <NeoCardTitle>Input Fields</NeoCardTitle>
            <NeoCardDescription>Testing different input styles</NeoCardDescription>
          </NeoCardHeader>
          <NeoCardContent className="space-y-4">
            <NeoInput
              label="Email Address"
              type="email"
              placeholder="Enter your email"
              required
            />
            
            <NeoInput
              label="Search"
              leadingIcon={<Search className="h-4 w-4" />}
              placeholder="Search services..."
            />
            
            <NeoInput
              label="Password"
              type="password"
              placeholder="Enter password"
              helperText="Must be at least 8 characters"
            />
            
            <NeoInput
              label="Error Example"
              error="This field is required"
              placeholder="Input with error"
            />
          </NeoCardContent>
        </NeoCard>
      </div>
    </div>
  );
}
```

### 4.2 Test in Browser

```bash
# Start development server
npm run dev

# Visit the test page
open http://localhost:3000/test-neo
```

You should see:
- ✅ All buttons with neomorphic shadows
- ✅ Smooth hover and press animations
- ✅ Cards with proper elevation
- ✅ Input fields with inset shadows
- ✅ Icons displaying correctly

---

## Step 5: Update Existing Components

Now that core components work, start updating existing components:

### 5.1 Update Navbar

Edit `components/Navbar.tsx`:

```tsx
import { NeoButton } from '@/components/ui/NeoButton';
import { Phone, Calendar } from 'lucide-react';

// Replace existing button elements with:
<NeoButton
  variant="elevated"
  size="sm"
  icon={<Phone />}
  iconPosition="leading"
  onClick={() => window.location.href = 'tel:+1234567890'}
>
  Call Now
</NeoButton>

<NeoButton
  variant="gold"
  size="md"
  icon={<Calendar />}
  iconPosition="leading"
  onClick={() => window.location.href = '/booking'}
>
  Book Online
</NeoButton>
```

### 5.2 Update HeroSection

Edit `components/HeroSection.tsx`:

```tsx
import { NeoButton } from '@/components/ui/NeoButton';
import { Calendar, Phone } from 'lucide-react';

// Replace CTA buttons with:
<div className="flex flex-col sm:flex-row gap-4">
  <NeoButton
    variant="gold"
    size="xl"
    icon={<Calendar />}
    iconPosition="leading"
  >
    Book Your Appointment
  </NeoButton>
  
  <NeoButton
    variant="elevated"
    size="xl"
    icon={<Phone />}
    iconPosition="leading"
  >
    Call (123) 456-7890
  </NeoButton>
</div>
```

### 5.3 Update ServicesList

Edit `components/ServicesList.tsx`:

```tsx
import { NeoCard, NeoCardTitle, NeoCardDescription, NeoCardContent, NeoCardFooter } from '@/components/ui/NeoCard';
import { NeoButton } from '@/components/ui/NeoButton';

// Replace service cards with:
{services.map((service) => (
  <NeoCard
    key={service.id}
    hover
    animate
    className="h-full"
  >
    <NeoCardTitle>{service.name}</NeoCardTitle>
    <NeoCardDescription>{service.duration} | {service.price}</NeoCardDescription>
    <NeoCardContent className="mt-4">
      <p>{service.description}</p>
    </NeoCardContent>
    <NeoCardFooter className="mt-6">
      <NeoButton variant="gold" fullWidth>
        Book Now
      </NeoButton>
    </NeoCardFooter>
  </NeoCard>
))}
```

---

## Step 6: Build and Test

```bash
# Run TypeScript type check
npm run type-check

# Run linter
npm run lint

# Build for production
npm run build

# Test production build locally
npm run start
```

---

## Common Issues & Solutions

### Issue 1: Components Not Found
```
Error: Cannot find module '@/components/ui/NeoButton'
```

**Solution**: Verify your `tsconfig.json` has the correct path alias:
```json
{
  "compilerOptions": {
    "paths": {
      "@/*": ["./*"]
    }
  }
}
```

### Issue 2: Tailwind Classes Not Working
```
Warning: Class 'shadow-neo-elevated' not found
```

**Solution**: 
1. Restart your dev server after updating `tailwind.config.js`
2. Clear Next.js cache: `rm -rf .next`
3. Verify Tailwind config is correct

### Issue 3: Animations Not Smooth
**Solution**: Ensure `framer-motion` is properly installed and components use `"use client"` directive

### Issue 4: TypeScript Errors
```
Type 'VariantProps<typeof neoButtonVariants>' is not assignable...
```

**Solution**: Install `class-variance-authority`:
```bash
npm install class-variance-authority
```

---

## Next Steps

Once core components are working:

1. **Create Additional Components**:
   - NeoSearchInput
   - NeoDropdown
   - NeoSelect
   - NeoTextarea
   - NeoModal
   - NeoProgressRing

2. **Update All Pages**:
   - Homepage
   - Services
   - Portfolio
   - Shop
   - Booking
   - Contact

3. **Test Thoroughly**:
   - All breakpoints (mobile, tablet, desktop)
   - All browsers (Chrome, Firefox, Safari, Edge)
   - Accessibility (keyboard navigation, screen readers)
   - Performance (Lighthouse scores)

---

## 📚 Additional Resources

- **Audit Document**: See `NEOMORPHISM_AUDIT.md` for complete design specifications
- **Claude Prompt**: See `CLAUDE_CODE_PROMPT.md` for detailed implementation instructions
- **Component Examples**: See `components/` directory for reference implementations

---

## 🆘 Need Help?

If you encounter issues:
1. Check the audit document for design specifications
2. Review the component examples
3. Verify all dependencies are installed
4. Check browser console for errors
5. Test in a clean Next.js project first

---

**Ready to transform your website with neomorphism? Let's go! 🚀**