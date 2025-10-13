# Deploy to Production

Deploy the Nycayen website to the production environment (nycayen.com).

⚠️ **WARNING**: This deploys to the live website. Ensure staging has been thoroughly tested.

Usage: `/deploy-production`

## Pre-Deployment Requirements

Before running this command, ensure:
- [ ] Staging deployment successful and tested
- [ ] QA approval received
- [ ] Client/stakeholder approval received
- [ ] All tests passing
- [ ] No critical bugs
- [ ] Backup exists
- [ ] Rollback plan ready

## Workflow

### 1. Safety Checks (3-5 minutes)
```bash
echo "🔒 Running production safety checks..."

# Confirm production deployment
read -p "Deploy to PRODUCTION? Type 'yes' to confirm: " CONFIRM
if [ "$CONFIRM" != "yes" ]; then
  echo "❌ Deployment cancelled"
  exit 0
fi

# Verify staging deployment
echo "Checking staging is healthy..."
curl -f https://staging.nycayen.com || exit 1

# Run full test suite
npm run test:production

# Check environment variables
vercel env ls production
```

### 2. Create Release (2 minutes)
```bash
echo "📦 Creating release..."

# Get version from package.json
VERSION=$(node -p "require('./package.json').version")

# Create git tag
git tag -a "v$VERSION" -m "Release v$VERSION"
git push origin "v$VERSION"

# Generate changelog
echo "Generating changelog..."
```

### 3. Production Deployment (5-7 minutes)
```bash
echo "🚀 Deploying to production..."

# Deploy to Vercel
vercel --prod

# Wait for deployment to complete
echo "Waiting for deployment..."
```

### 4. Post-Deployment Verification (5 minutes)
```bash
echo "✅ Verifying production deployment..."

# Check production is live
RESPONSE=$(curl -s -o /dev/null -w "%{http_code}" https://nycayen.com)
if [ $RESPONSE -ne 200 ]; then
  echo "❌ Production health check failed"
  # Trigger rollback
  vercel rollback
  exit 1
fi

# Run smoke tests
# - Critical pages load
# - Booking system works
# - Shop functionality
# - Contact form
# - Analytics tracking

# Run Lighthouse CI
npx lighthouse-ci autorun --url=https://nycayen.com
```

### 5. Monitoring Setup (2 minutes)
```bash
echo "📊 Setting up monitoring..."

# Enable error tracking
# Monitor Core Web Vitals
# Set up alerts
```

## Production Environment Variables

### Required Variables
```bash
# Site Configuration
NEXT_PUBLIC_SITE_URL=https://nycayen.com
NODE_ENV=production

# Analytics
NEXT_PUBLIC_GA_TRACKING_ID=G-PRODUCTION-ID

# Shopify (Live)
NEXT_PUBLIC_SHOPIFY_DOMAIN=nycayen.myshopify.com
NEXT_PUBLIC_SHOPIFY_STOREFRONT_ACCESS_TOKEN=live_token

# Stripe (Live)
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_live_xxx
STRIPE_SECRET_KEY=sk_live_xxx

# SendGrid (Live)
SENDGRID_API_KEY=SG.live_xxx
SENDGRID_FROM_EMAIL=hello@nycayen.com

# Calendly
NEXT_PUBLIC_CALENDLY_URL=https://calendly.com/nycayen

# Instagram
NEXT_PUBLIC_INSTAGRAM_ACCESS_TOKEN=live_token
```

## Critical Page Verification

After deployment, verify these pages:
```bash
echo "🔍 Verifying critical pages..."

PAGES=(
  "/"
  "/about"
  "/services"
  "/portfolio"
  "/shop"
  "/blog"
  "/contact"
  "/booking"
)

for page in "${PAGES[@]}"; do
  echo "Checking https://nycayen.com$page"
  curl -f "https://nycayen.com$page" || echo "⚠️  Warning: $page failed"
done
```

## Rollback Plan

If deployment fails:
```bash
echo "🔄 Initiating rollback..."

# Option 1: Vercel rollback (instant)
vercel rollback

# Option 2: Redeploy previous version
git checkout v1.0.0
vercel --prod

# Option 3: Revert commit
git revert HEAD
git push origin main
```

## Post-Deployment Tasks

### Immediate (Within 1 hour)
- [ ] Verify all pages load
- [ ] Test booking system
- [ ] Test contact form
- [ ] Check shop/cart
- [ ] Monitor error logs
- [ ] Watch analytics
- [ ] Check mobile performance

### Within 24 Hours
- [ ] Monitor user feedback
- [ ] Check conversion rates
- [ ] Review performance metrics
- [ ] Analyze error reports
- [ ] Check Core Web Vitals
- [ ] Verify SEO rankings maintained

### Within 1 Week
- [ ] Full performance review
- [ ] User feedback analysis
- [ ] A/B test results
- [ ] Conversion optimization
- [ ] Plan next iteration

## Performance Targets

Production must meet:
- **Lighthouse Performance**: > 90
- **First Contentful Paint**: < 1.5s
- **Time to Interactive**: < 3.5s
- **Largest Contentful Paint**: < 2.5s
- **Cumulative Layout Shift**: < 0.1
- **Total Blocking Time**: < 300ms

## Monitoring & Alerts

### Set Up Alerts For:
- Site downtime
- Error rate spike
- Performance degradation
- Failed transactions
- Form submission errors

### Monitoring Tools:
- Vercel Analytics
- Google Analytics
- Google Search Console
- Uptime monitoring
- Error tracking

## Success Criteria

Production deployment is successful when:
- [ ] All pre-deployment checks pass
- [ ] Deployment completes without errors
- [ ] Production URL is accessible (200 response)
- [ ] All critical pages load
- [ ] Booking system works
- [ ] Shop/cart functional
- [ ] Contact form sends emails
- [ ] No console errors
- [ ] Lighthouse score > 90
- [ ] Mobile responsive
- [ ] Analytics tracking works
- [ ] SEO metadata present
- [ ] No broken links

## Deployment Log

After deployment, document:
```markdown
# Production Deployment Log

**Version**: v1.2.3
**Date**: [timestamp]
**Deployed By**: [name]
**Approved By**: [name]

## Changes Deployed
- Feature 1
- Feature 2
- Bug fix 1

## Tests Performed
- [x] Staging QA complete
- [x] All automated tests pass
- [x] Manual testing complete
- [x] Client approval received

## Deployment Details
- Build Duration: 4m 23s
- Deployment URL: https://nycayen.com
- Previous Version: v1.2.2
- Rollback Plan: Ready

## Verification Results
- [x] Homepage loads (< 2s)
- [x] Navigation works
- [x] Forms functional
- [x] Booking system operational
- [x] Shop works correctly
- [x] Mobile responsive
- [x] Lighthouse score: 94

## Notes
No issues detected. All systems operational.
```

## Emergency Contacts

If issues arise:
- **Technical Lead**: [contact]
- **DevOps**: [contact]
- **Business Owner**: [contact]

## Timeline

- **Safety Checks**: 3-5 minutes
- **Release Creation**: 2 minutes
- **Deployment**: 5-7 minutes
- **Verification**: 5 minutes
- **Total**: ~20 minutes

⚠️ **IMPORTANT**: Never deploy to production on Fridays or before holidays/weekends.

Start with: "🚀 Initiating production deployment..."
