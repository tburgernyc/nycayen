# Deploy to Staging

Deploy the Nycayen website to the staging environment for QA testing and review.

Usage: `/deploy-staging`

## What This Does

Deploys the current state of the website to the staging environment with:
- Full build process
- Environment validation
- Automated testing
- Deployment verification

## Workflow

### 1. Pre-Deployment Checks (2-3 minutes)
```bash
echo "🔍 Running pre-deployment checks..."

# TypeScript validation
npm run type-check

# Linting
npm run lint

# Build test
npm run build

# Bundle size analysis
echo "📦 Checking bundle size..."
```

### 2. Staging Deployment (3-5 minutes)
```bash
echo "🚀 Deploying to staging..."

# Deploy via Vercel
vercel

# OR deploy via Git push
git push origin develop
```

### 3. Post-Deployment Verification (2 minutes)
```bash
echo "✅ Verifying deployment..."

# Check deployment is live
curl -f $STAGING_URL

# Run smoke tests
# - Homepage loads
# - Navigation works
# - Forms functional
# - No console errors
```

### 4. Generate Report (1 minute)
```bash
echo "📊 Generating deployment report..."

# Lighthouse score
# Bundle size
# Performance metrics
# Deployment URL
```

## Environment Configuration

### Staging Environment Variables
```bash
NEXT_PUBLIC_SITE_URL=https://staging.nycayen.com
NEXT_PUBLIC_GA_TRACKING_ID=G-STAGING-ID
NODE_ENV=production

# Use test/sandbox credentials for services
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_xxx
STRIPE_SECRET_KEY=sk_test_xxx
SENDGRID_API_KEY=SG.test_xxx
```

## Testing After Deployment

### Automated Tests
- Homepage load test
- Navigation link test
- Form submission test
- API endpoint test
- Mobile responsiveness

### Manual QA Checklist
- [ ] Homepage displays correctly
- [ ] All pages accessible
- [ ] Navigation works
- [ ] Forms submit
- [ ] Booking system functional
- [ ] Images load
- [ ] Animations smooth
- [ ] No console errors
- [ ] Mobile responsive
- [ ] Tablet responsive

## Deployment Artifacts

After deployment, you'll receive:
1. **Deployment URL**: Staging site URL
2. **Lighthouse Report**: Performance scores
3. **Build Log**: Complete build output
4. **Test Results**: Automated test results
5. **Change Summary**: What was deployed

## Common Issues

### Build Fails
```bash
# Clear cache and retry
rm -rf .next node_modules
npm install
npm run build
```

### Environment Variables Missing
```bash
# Check Vercel dashboard
vercel env ls

# Add missing variables
vercel env add VARIABLE_NAME
```

### Deployment Timeout
```bash
# Increase build timeout in vercel.json
{
  "builds": [
    {
      "src": "package.json",
      "use": "@vercel/next",
      "config": {
        "maxDuration": 60
      }
    }
  ]
}
```

## Success Criteria

Deployment is successful when:
- [ ] Build completes without errors
- [ ] Staging URL is accessible
- [ ] Homepage loads in < 3 seconds
- [ ] No console errors
- [ ] Lighthouse performance > 85
- [ ] All critical features work
- [ ] Mobile responsive

## Next Steps

After staging deployment:
1. **Share URL** with stakeholders for review
2. **Conduct QA testing** on all features
3. **Gather feedback** from team/client
4. **Make adjustments** if needed
5. **Approve for production** when ready

## Timeline

- **Pre-checks**: 2-3 minutes
- **Deployment**: 3-5 minutes
- **Verification**: 2 minutes
- **Total**: ~10 minutes

## Agent Used

This command uses the `deployment-agent` to handle the entire staging deployment process.

Start with: "🚀 Deploying to staging environment..."
