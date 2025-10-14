# Claude Code Prompt: Nycayen.com Content Migration

## 🎯 Objective
Update the nycayenmoore.com GitHub repository to match the copy, pages, and service offerings from nycayen.com while **preserving all existing font styling, layout, and design system**.

## 🚨 Critical Rules - DO NOT CHANGE
1. ❌ **DO NOT** modify Tailwind configuration
2. ❌ **DO NOT** change font families (Playfair Display, Poppins)
3. ❌ **DO NOT** alter component layouts or structure
4. ❌ **DO NOT** modify the neomorphism design system
5. ❌ **DO NOT** change color palette or styling classes
6. ✅ **ONLY** update text content, copy, and content placement
7. ✅ **ONLY** update service offerings and descriptions

## 📋 Source Website Content (nycayen.com)

### Brand Positioning
- **Business Name**: Nycayen Moore
- **Tagline**: "Expert Hair Styling Services for Men and Women"
- **Value Proposition**: "Get the perfect look with our expert hair styling services anywhere in the US"

### Core Service Pillars
1. **Trendy Styles** - Stay up-to-date with the latest trendy hairstyles
2. **Customized Looks** - Get a customized look tailored to your individual preferences and features
3. **Attention to Detail** - Experience meticulous attention to detail in every aspect of our services
4. **Celebrity Treatment** - Receive the same VIP treatment enjoyed by celebrities and influencers

### Brand Message
"Nycayen believe that great hair can transform your life. Our personalized hair styling services are designed to enhance your natural beauty and boost your confidence. Whether it's a chic cut or a glamorous updo, we ensure you leave our care feeling empowered and ready to take on the world."

### Service Categories
1. **Professional Hair Styling** - For all occasions
2. **Men's Grooming** - Specialized men's hair services
3. **Bridal Hair Styling** - Wedding and special events
4. **Personalized Styling** - Custom looks for any occasion

### Service Features
- **Skillful Styling**: "Trust in our stylists' expertise to transform your hair into a work of art"
- **Precision Perfectionists**: "We believe that even the smallest details can make or break a hairstyle. That's why we take pride in our precision and ensure every element is flawlessly executed. From start to finish, we go above and beyond for flawless results"
- **Tailored Treatments**: "We understand that every individual is unique and deserves a customized experience. Our stylists take the time to listen to your preferences and tailor our services to meet your specific needs. From consultation to completion, we ensure you receive exceptional service every step of the way"

### Service Specializations
1. **Romantic Updos** - "Look stunning on your wedding day with our personalized hair styling services"
2. **Elegant Braids** - "From romantic updos to elegant braids, our expert stylists will make sure you look stunning on your wedding day"
3. **Latest Trends** - "Our creative team is always experimenting with new styles to bring you the latest trends in hair fashion"
4. **Versatile Looks** - "Our stylists excel in creating versatile looks that can be easily transformed to match any event or mood"
5. **Expert Knowledge** - "With their expert knowledge and skills, our team brings out the best in your hair, leaving you feeling confident and beautiful"
6. **Occasion Styling** - "Whether it's a red carpet event or a romantic date night, we will create a stunning hairstyle that suits the occasion"
7. **Quality Care** - "Our commitment to quality ensures that your hair receives optimal care and stays healthy and vibrant"

### FAQs
**Q: What services does Nycayen Moore specialize in?**
A: Nycayen Moore specializes in men's grooming, bridal hair styling, and personalized hair styling for any occasion.

**Q: Can Nycayen Moore handle all hair types?**
A: Yes, our expert hairstylists at Nycayen Moore have experience handling all hair types and textures.

**Q: Does Nycayen Moore offer services outside of their location?**
A: Absolutely! Nycayen Moore offers its professional services anywhere in the United States.

**Q: What makes Nycayen Moore different from other salons?**
A: Nycayen Moore stands out with its focus on expert techniques, attention to detail, and personalized service for each client.

**Q: Does Nycayen Moore offer makeup services?**
A: No, Nycayen Moore specializes in hair services only. We do not offer makeup services.

### Call to Action
"Schedule Your Appointment Today - Ready to transform your hair and experience the difference? Fill out the form below to schedule your appointment and take the first step towards your new look. We can't wait to meet you!"

---

## 📝 Tasks to Execute

### Phase 1: Home Page Content Update (Priority 1)
**File**: `app/page.tsx`

Update the following sections with nycayen.com copy:

1. **Hero Section**
   - Main headline: "Expert Hair Styling Services for Men and Women"
   - Subheadline: "Get the perfect look with our expert hair styling services anywhere in the US"
   - Update CTA buttons to match booking flow

2. **Value Props Section** (4 cards)
   - Card 1: Trendy Styles
   - Card 2: Customized Looks
   - Card 3: Attention to Detail
   - Card 4: Celebrity Treatment

3. **About Section**
   - Title: "Radiate Confidence"
   - Body: Use the "Nycayen believe that great hair..." paragraph
   - Keep existing layout and styling

4. **Services Overview**
   - Title: "Professional Hair Styling"
   - Subtitle: "Discover our range of hair services for all occasions"
   - Description: Use the services description paragraph

5. **Features Section** (3 items)
   - Skillful Styling
   - Precision Perfectionists
   - Tailored Treatments
   - Use exact copy from website

6. **Specializations Section** (6 items)
   - Romantic Updos
   - Latest Trends
   - Versatile Looks
   - Expert Knowledge
   - Occasion Styling
   - Quality Care

7. **FAQ Section**
   - Replace with 5 FAQs from nycayen.com
   - Keep accordion component structure

8. **Final CTA**
   - Update with "Schedule Your Appointment Today" copy

### Phase 2: Services Page (Priority 2)
**File**: `app/services/page.tsx` (create if doesn't exist)

Create/update services page with:
- Service categories
- Detailed service descriptions
- Pricing structure (if available)
- Booking CTAs

### Phase 3: About Page (Priority 3)
**File**: `app/about/page.tsx` (create if doesn't exist)

Content to include:
- "Radiate Confidence" brand message
- Expertise highlights
- Service philosophy
- Professional approach

### Phase 4: Components Content Update
Update these components with nycayen.com copy:

1. **ServicesList Component** (`components/ServicesList.tsx`)
   - Update service names and descriptions
   - Update pricing if shown
   - Keep filtering and layout

2. **Testimonials Component** (`components/Testimonials.tsx`)
   - Add "Impressive - Exceptional Testimonials from Satisfied Clients" heading
   - Keep existing testimonial structure

3. **BookingWidget Component** (`components/BookingWidget.tsx`)
   - Update booking CTA text
   - Keep Calendly integration

4. **Footer Component** (`components/Footer.tsx`)
   - Update business description
   - Keep existing layout

### Phase 5: Meta Data & SEO
Update metadata in all pages:
- Page titles with "Nycayen Moore" or "Nycayen"
- Meta descriptions using nycayen.com copy
- Keep existing SEO structure

---

## 🔧 Implementation Steps

### Step 1: Content Audit
```bash
# Review current content in key files
cat app/page.tsx
cat components/HeroSection.tsx
cat components/ServicesList.tsx
```

### Step 2: Create Content Map
Create a content mapping document showing:
- Current content → New content
- Which components need updates
- Which pages need creation

### Step 3: Update Home Page
Priority order:
1. Hero Section
2. Value Props
3. About Section
4. Services Overview
5. Features
6. Specializations
7. FAQs
8. Final CTA

### Step 4: Update Components
1. ServicesList
2. Testimonials heading
3. BookingWidget CTA
4. Footer description

### Step 5: Create Missing Pages
If these pages don't have content, create them:
- About page
- Services page (detailed)
- Contact page with updated copy

### Step 6: Update Metadata
- Page titles
- Meta descriptions
- OG tags

### Step 7: Verification
- [ ] All nycayen.com copy migrated
- [ ] No styling or layout changes
- [ ] All links work
- [ ] Forms still functional
- [ ] Mobile responsive maintained
- [ ] No TypeScript errors
- [ ] Build succeeds

---

## 📊 Content Migration Checklist

### Home Page (`app/page.tsx`)
- [ ] Hero headline updated
- [ ] Hero subheadline updated
- [ ] 4 value prop cards updated
- [ ] About section copy updated
- [ ] Services overview updated
- [ ] 3 feature items updated
- [ ] 6 specialization items updated
- [ ] 5 FAQ items updated
- [ ] Final CTA updated

### Components
- [ ] `HeroSection.tsx` - Copy updated
- [ ] `ServicesList.tsx` - Services updated
- [ ] `Testimonials.tsx` - Heading updated
- [ ] `BookingWidget.tsx` - CTA updated
- [ ] `Footer.tsx` - Description updated

### Pages
- [ ] `app/about/page.tsx` - Created/updated
- [ ] `app/services/page.tsx` - Created/updated
- [ ] `app/contact/page.tsx` - Copy updated

### Metadata
- [ ] Home page meta updated
- [ ] About page meta updated
- [ ] Services page meta updated
- [ ] Global site name updated

---

## ⚠️ What NOT to Do

### DO NOT Change:
- Tailwind classes
- Component structure
- Layout grids
- Font families or sizes
- Color variables
- Shadow utilities
- Animation classes
- Responsive breakpoints
- Image components
- Form structure
- API integrations

### ONLY Change:
- Text content
- Headings
- Paragraphs
- Button labels
- Link text
- Alt text (to match new content)
- Meta descriptions
- Page titles

---

## 🧪 Testing Checklist

After making changes:
```bash
# Type check
npm run type-check

# Lint
npm run lint

# Build
npm run build

# Run locally
npm run dev
```

Verify:
- [ ] No console errors
- [ ] All pages load
- [ ] Content displays correctly
- [ ] Links work
- [ ] Forms still functional
- [ ] Mobile view intact
- [ ] Desktop view intact
- [ ] No layout shifts
- [ ] Fonts render correctly
- [ ] Colors unchanged

---

## 📦 Deliverables

1. **Updated Files**
   - Home page with nycayen.com copy
   - All component copy updated
   - New/updated service pages

2. **Content Migration Report**
   - What was changed
   - What was preserved
   - Any discrepancies noted

3. **Build Verification**
   - TypeScript compilation successful
   - No build errors
   - All tests pass

---

## 🚀 Execution Command

To execute this migration with Claude Code:

```bash
# Run Claude Code with this prompt
claude-code execute CLAUDE_CODE_PROMPT.md
```

Or in Claude Code interface:
1. Open Claude Code
2. Load this prompt file
3. Execute with: "Execute the content migration following this prompt exactly"

---

## 📞 Support

If you encounter issues:
1. Check that no styling files were modified
2. Verify TypeScript compiles
3. Test build process
4. Compare before/after screenshots
5. Validate all content matches nycayen.com

**Goal**: Seamlessly migrate content from nycayen.com while preserving the beautiful design system already built in the repository.
