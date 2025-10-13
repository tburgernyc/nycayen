# Apply Neomorph Theme

Apply the neomorphism color palette and design system across the entire Nycayen website.

Usage: `/apply-neomorph-theme`

## What This Does

This command initiates a complete theme transformation:

1. **Update Tailwind Configuration**
   - Add neomorphism color palette
   - Define shadow utilities
   - Create border radius tokens
   - Add animation keyframes

2. **Update Global CSS**
   - Set CSS custom properties
   - Define neomorphic utility classes
   - Add component base styles
   - Configure scrollbar styling

3. **Create Color Utilities**
   - Generate color helper functions
   - Create shadow generators
   - Add opacity utilities
   - Build gradient helpers

4. **Update Base Components**
   - Transform existing buttons
   - Redesign card components
   - Update form inputs
   - Restyle navigation

5. **Scan for Old Colors**
   - Find legacy color references
   - Report files needing updates
   - Suggest replacements
   - Create migration checklist

## Workflow

### Phase 1: Configuration (5-10 minutes)
```bash
echo "🎨 Phase 1: Updating configuration files..."
# Update tailwind.config.js
# Update app/globals.css
# Create utils/colors.ts
```

### Phase 2: Base Components (10-15 minutes)
```bash
echo "🔨 Phase 2: Creating base components..."
# Create components/ui/NeoButton.tsx
# Create components/ui/NeoCard.tsx
# Create components/ui/NeoInput.tsx
# Create components/ui/NeoModal.tsx
```

### Phase 3: Migration (15-20 minutes)
```bash
echo "🔄 Phase 3: Migrating existing components..."
# Scan for old color references
# Update Navbar.tsx
# Update Footer.tsx
# Update HeroSection.tsx
```

### Phase 4: Verification (5 minutes)
```bash
echo "✅ Phase 4: Verifying theme application..."
# Check color consistency
# Test contrast ratios
# Verify shadow application
# Run type checks
```

## Files Modified

### Configuration Files
- `tailwind.config.js` - Color palette and utilities
- `app/globals.css` - Global styles and variables
- `next.config.js` - (if needed)

### New Files Created
- `utils/colors.ts` - Color utility functions
- `components/ui/NeoButton.tsx` - Base button component
- `components/ui/NeoCard.tsx` - Base card component
- `components/ui/NeoInput.tsx` - Base input component
- `components/ui/NeoModal.tsx` - Base modal component
- `components/ui/NeoSelect.tsx` - Base select component
- `components/ui/NeoTextarea.tsx` - Base textarea component
- `components/ui/NeoBadge.tsx` - Base badge component
- `utils/cn.ts` - Classnames utility

### Components to Update
- `components/Navbar.tsx`
- `components/Footer.tsx`
- `components/HeroSection.tsx`
- `components/InstagramCarousel.tsx`
- `components/Testimonials.tsx`
- `components/ServicesList.tsx`
- `components/BookingWidget.tsx`
- `components/PortfolioGrid.tsx`
- `components/BlogPreview.tsx`
- `components/CookieBanner.tsx`
- `components/Chatbot.tsx`

## Color Migration Guide

### Old Palette → New Palette
```typescript
// OLD (Nycayen Original)
'#BFA681' → '#72BDC2' (primary → neo-cyan)
'#5C5048' → '#388B9E' (secondary → neo-blue)
'#FFF6E8' → '#988C7F' (accent → neo-tan)
'#181516' → '#21221F' (dark → neo-dark)

// Additional
undefined → '#5C7572' (neo-gray - NEW)
```

### Shadow Migration
```css
/* OLD */
box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

/* NEW - Elevated */
box-shadow: 8px 8px 16px rgba(33, 34, 31, 0.7), 
            -8px -8px 16px rgba(255, 255, 255, 0.05);

/* NEW - Pressed */
box-shadow: inset 8px 8px 16px rgba(0, 0, 0, 0.3), 
            inset -8px -8px 16px rgba(255, 255, 255, 0.05);
```

## Post-Application Checklist

After running this command, verify:

- [ ] Tailwind config updated with neo colors
- [ ] Global CSS has neomorphism styles
- [ ] Color utility functions created
- [ ] Base UI components created
- [ ] All components use new palette
- [ ] No old color references remain
- [ ] Contrast ratios meet WCAG AA
- [ ] Shadows applied consistently
- [ ] Build completes without errors
- [ ] TypeScript types are correct
- [ ] Visual QA on all pages
- [ ] Responsive design maintained
- [ ] Animations working smoothly
- [ ] Dark mode (if applicable) updated

## Expected Results

### Before
- Ambre gold (#BFA681) primary
- Rich brown (#5C5048) secondary
- Cream (#FFF6E8) accent
- Dark (#181516) background
- Traditional shadows

### After
- Neo cyan (#72BDC2) primary
- Neo blue (#388B9E) secondary
- Neo tan (#988C7F) text
- Neo dark (#21221F) background
- Neo gray (#5C7572) neutral
- Neomorphic dual shadows throughout

## Troubleshooting

### Build Errors
```bash
# If build fails after theme application
npm run type-check  # Check TypeScript errors
npm run lint        # Check linting errors
npm run build       # Try production build
```

### Visual Issues
```bash
# If styles don't apply correctly
rm -rf .next        # Clear Next.js cache
npm run dev         # Restart dev server
```

### Color Contrast
```bash
# If contrast ratios fail WCAG
# Use color-system-agent to adjust
# Increase text size for low-contrast elements
# Add background overlays where needed
```

## Timeline

- **Total Duration**: 35-50 minutes
- **Configuration**: 10 minutes
- **Base Components**: 15 minutes
- **Migration**: 20 minutes
- **Verification**: 5 minutes

## Agent Coordination

This command will orchestrate:
1. **color-system-agent** - Updates configuration
2. **component-builder** - Creates base components
3. **neomorph-designer** - Provides design guidance
4. **frontend-developer** - Implements changes

Start with: "🎨 Applying neomorphism theme to Nycayen website..."
