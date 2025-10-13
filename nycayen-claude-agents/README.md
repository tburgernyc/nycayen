# Nycayen.com Neomorphism Redesign - Claude Code Agents

Complete set of AI agents and commands for redesigning the Nycayen Hair Salon website with neomorphism design using Claude Code.

## 🎯 Project Overview

**Goal**: Transform nycayen.com with a modern neomorphism UI style and new color palette.

**New Color Palette:**
- 🎨 Neo Dark: `#21221F` - Primary background
- 💠 Neo Cyan: `#72BDC2` - Primary accent
- 🌊 Neo Blue: `#388B9E` - Secondary accent
- ⚪ Neo Gray: `#5C7572` - Neutral
- 🟫 Neo Tan: `#988C7F` - Warm accent

**Tech Stack:**
- Next.js 15.3.5 (App Router)
- TypeScript 5.7.2
- Tailwind CSS 3.4.13
- Framer Motion 11.14.4
- Lucide React 0.462.0

---

## 📁 What's Included

### 🤖 Specialized Agents (7)

1. **neomorph-designer** - Specialist in neomorphic UI design
2. **color-system-agent** - Manages color palette and theme
3. **component-builder** - Builds reusable React components
4. **page-builder** - Constructs complete pages
5. **deployment-agent** - Handles staging and production deployments
6. **frontend-developer** - Implements React/Next.js features
7. **style-manager** - Manages CSS and Tailwind styling

### ⚡ Slash Commands (7)

1. `/design-component [name] [type]` - Create neomorphic components
2. `/apply-neomorph-theme` - Apply color palette globally
3. `/build-page [page-name]` - Build pages with neomorphism
4. `/optimize-assets` - Optimize images and assets
5. `/deploy-staging` - Deploy to staging environment
6. `/deploy-production` - Deploy to production
7. `/run-tests` - Run all tests

### 📄 Documentation

- `CLAUDE.md` - Main project context
- Agent files with detailed instructions
- Command files with usage examples
- This README with setup instructions

---

## 🚀 Quick Start

### 1. Installation

Copy the `.claude` directory to your nycayen.com repository:

```bash
# Navigate to your nycayen.com project
cd /path/to/nycayenmoore.com

# Copy the .claude directory
cp -r /path/to/nycayen-claude-agents/.claude ./

# Verify installation
ls -la .claude/
# Should show:
# - CLAUDE.md
# - agents/
# - commands/
```

### 2. Verify Setup

Open your project in VS Code with Claude Code:

```bash
code .
```

In Claude Code, verify agents are loaded:
- Open Command Palette (`Cmd+Shift+P` / `Ctrl+Shift+P`)
- Type "Claude Code: List Agents"
- You should see all 7 agents listed

### 3. Start Using Commands

In Claude Code chat, you can now use slash commands:

```
/apply-neomorph-theme
```

This will start the theme transformation process!

---

## 📖 Usage Guide

### Phase 1: Apply Theme Foundation (30-45 minutes)

Start by applying the neomorphism theme to your entire project:

```
/apply-neomorph-theme
```

**What this does:**
- Updates `tailwind.config.js` with neo colors
- Updates `app/globals.css` with neomorphic styles
- Creates color utility functions
- Builds base UI components
- Scans for old color references

**Expected Output:**
- `tailwind.config.js` (updated)
- `app/globals.css` (updated)
- `utils/colors.ts` (new)
- `utils/cn.ts` (new)
- `components/ui/NeoButton.tsx` (new)
- `components/ui/NeoCard.tsx` (new)
- `components/ui/NeoInput.tsx` (new)
- `components/ui/NeoModal.tsx` (new)

### Phase 2: Create Custom Components (As Needed)

Design specific components for your pages:

```
/design-component ServiceCard card
/design-component BookingButton button
/design-component TestimonialSlider custom
```

**Examples:**

```
/design-component HeroSection custom
```
Creates a neomorphic hero section component.

```
/design-component ContactForm custom
```
Creates a contact form with neomorphic inputs.

### Phase 3: Build/Redesign Pages (15-30 min per page)

Rebuild pages with neomorphism styling:

```
/build-page home
/build-page services
/build-page portfolio
/build-page contact
/build-page booking
```

**Each command will:**
- Analyze existing page structure
- Redesign with neomorphic elements
- Update components
- Add animations
- Test responsiveness

### Phase 4: Deploy to Staging (10 minutes)

Once pages are ready, deploy to staging for testing:

```
/deploy-staging
```

**This will:**
- Run type checks
- Run linting
- Build the project
- Deploy to staging
- Verify deployment
- Generate report

### Phase 5: Test & Refine

Test the staging site thoroughly:
- Mobile responsiveness
- All interactions
- Forms and booking
- Shop functionality
- Performance

Make adjustments as needed using the agents.

### Phase 6: Deploy to Production (20 minutes)

When everything is perfect:

```
/deploy-production
```

**This will:**
- Run safety checks
- Create release tag
- Deploy to production
- Verify deployment
- Monitor performance

---

## 🎨 Design System Reference

### Colors

```css
--neo-dark: #21221F;      /* Primary background */
--neo-cyan: #72BDC2;      /* Primary accent, CTAs */
--neo-blue: #388B9E;      /* Secondary accent, hovers */
--neo-gray: #5C7572;      /* Neutral, borders */
--neo-tan: #988C7F;       /* Warm accent, text */
```

### Shadows

```css
/* Elevated (raised) */
shadow-neo-elevated: 8px 8px 16px rgba(33, 34, 31, 0.7), 
                     -8px -8px 16px rgba(255, 255, 255, 0.05);

/* Pressed (inset) */
shadow-neo-pressed: inset 8px 8px 16px rgba(0, 0, 0, 0.3), 
                    inset -8px -8px 16px rgba(255, 255, 255, 0.05);

/* Flat (subtle) */
shadow-neo-flat: 4px 4px 8px rgba(33, 34, 31, 0.7), 
                 -4px -4px 8px rgba(255, 255, 255, 0.05);
```

### Border Radius

```css
rounded-neo-sm: 12px;
rounded-neo-md: 16px;
rounded-neo-lg: 20px;
rounded-neo-xl: 24px;
```

### Component Classes

```typescript
// Button
<button className="neo-btn-primary">Click Me</button>

// Card
<div className="neo-card">Content</div>

// Input
<input className="neo-input" />
```

---

## 🔨 Agent Details

### Neomorph Designer
**Purpose**: Specialist in neomorphic UI design  
**Best For**: Creating new components, design consultation  
**Usage**: Automatically called by `/design-component`

### Color System Agent
**Purpose**: Manages color palette and theme  
**Best For**: Updating colors, theme configuration  
**Usage**: Automatically called by `/apply-neomorph-theme`

### Component Builder
**Purpose**: Builds reusable React components  
**Best For**: Creating base UI components, utility components  
**Usage**: Called when building components

### Page Builder
**Purpose**: Constructs complete pages  
**Best For**: Building/redesigning entire pages  
**Usage**: Automatically called by `/build-page`

### Deployment Agent
**Purpose**: Manages deployments  
**Best For**: Deploying to staging/production  
**Usage**: Called by `/deploy-staging` and `/deploy-production`

---

## ⚡ Command Reference

### /apply-neomorph-theme
Applies the complete neomorphism design system.

**Duration**: 30-45 minutes  
**Requirements**: None  
**Output**: Updated config, new base components

### /design-component [name] [type]
Creates a new neomorphic component.

**Arguments**:
- `name`: Component name (e.g., ServiceCard)
- `type`: button | card | input | modal | custom

**Example**: `/design-component ServiceCard card`

### /build-page [page-name]
Builds or redesigns a complete page.

**Arguments**:
- `page-name`: home | about | services | portfolio | shop | blog | contact | booking

**Example**: `/build-page services`

### /deploy-staging
Deploys to staging environment for testing.

**Duration**: ~10 minutes  
**Requirements**: Build must pass  
**Output**: Staging URL

### /deploy-production
Deploys to production (live site).

**Duration**: ~20 minutes  
**Requirements**: Staging tested and approved  
**Output**: Production URL

---

## 📋 Project Checklist

### Phase 1: Foundation ✅
- [ ] Run `/apply-neomorph-theme`
- [ ] Verify Tailwind config updated
- [ ] Check globals.css updated
- [ ] Test base components work
- [ ] Review color palette application

### Phase 2: Components 🔨
- [ ] Redesign Navbar
- [ ] Redesign Footer
- [ ] Redesign HeroSection
- [ ] Redesign all 11 existing components
- [ ] Create any new components needed

### Phase 3: Pages 📄
- [ ] Build/redesign Home page
- [ ] Build/redesign About page
- [ ] Build/redesign Services page
- [ ] Build/redesign Portfolio page
- [ ] Build/redesign Shop page
- [ ] Build/redesign Blog page
- [ ] Build/redesign Contact page
- [ ] Build/redesign Booking page

### Phase 4: Testing 🧪
- [ ] Test on mobile devices
- [ ] Test on tablets
- [ ] Test on desktop
- [ ] Test all forms
- [ ] Test booking system
- [ ] Test shop/cart
- [ ] Check performance (Lighthouse)
- [ ] Verify accessibility

### Phase 5: Deployment 🚀
- [ ] Deploy to staging
- [ ] QA testing on staging
- [ ] Client review/approval
- [ ] Fix any issues
- [ ] Deploy to production
- [ ] Verify production
- [ ] Monitor for 24 hours

---

## 💡 Pro Tips

### Efficient Workflow
1. Apply theme foundation first
2. Work on one page at a time
3. Test components in isolation
4. Use staging liberally
5. Deploy production only when confident

### Component Strategy
- Start with base components (Button, Card, Input)
- Build page-specific components next
- Keep components small and focused
- Use TypeScript for type safety
- Document component props

### Performance Optimization
- Optimize images before adding
- Use lazy loading for off-screen content
- Minimize animation complexity
- Test on real devices
- Monitor Core Web Vitals

### Collaboration
- Share staging URL for feedback
- Use git branches for features
- Document changes in commit messages
- Keep team updated on progress

---

## 🐛 Troubleshooting

### Build Errors
```bash
# Clear cache and rebuild
rm -rf .next node_modules package-lock.json
npm install
npm run build
```

### Type Errors
```bash
# Run type check
npm run type-check

# Fix TypeScript issues before proceeding
```

### Style Not Applying
```bash
# Restart dev server
npm run dev

# Clear browser cache
# Hard refresh (Cmd+Shift+R / Ctrl+Shift+F5)
```

### Agent Not Found
```bash
# Verify .claude directory exists
ls -la .claude/

# Check agents directory
ls -la .claude/agents/

# Restart VS Code
```

---

## 📚 Additional Resources

### Neomorphism Design
- [Neomorphism.io](https://neomorphism.io/) - Generator tool
- [Dribbble](https://dribbble.com/tags/neomorphism) - Design inspiration
- [Behance](https://www.behance.net/search/projects?search=neomorphism) - Design examples

### Next.js Documentation
- [Next.js Docs](https://nextjs.org/docs)
- [App Router](https://nextjs.org/docs/app)
- [Deployment](https://nextjs.org/docs/deployment)

### Claude Code
- [Documentation](https://docs.claude.com/en/docs/claude-code)
- [Getting Started](https://docs.claude.com/en/docs/claude-code/getting-started)

---

## 📞 Support

For questions about these agents:
- Review agent files in `.claude/agents/`
- Review command files in `.claude/commands/`
- Check `CLAUDE.md` for project context

For Nycayen website questions:
- Contact: developer@nycayen.com
- Website: nycayen.com

---

## 🎉 Ready to Start?

1. ✅ Agents installed in `.claude/` directory
2. ✅ VS Code with Claude Code open
3. ✅ Project structure understood
4. ✅ Color palette memorized

**Run your first command:**

```
/apply-neomorph-theme
```

Let's transform nycayen.com with beautiful neomorphism design! 🚀

---

**Last Updated**: October 2025  
**Version**: 1.0.0  
**AI Agent Framework**: Claude Code  
**Project**: Nycayen.com Neomorphism Redesign
