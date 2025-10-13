# Vercel Deployment Guide for nycayenmoore.com

## 🚀 Quick Deploy to Vercel

### Prerequisites
- Vercel account (free tier works)
- GitHub repository with this code
- Optional: API keys for integrations (SendGrid, Stripe, Shopify, Instagram)

---

## Step 1: Push to GitHub

```bash
git add .
git commit -m "feat: prepare for Vercel deployment"
git push origin main
```

---

## Step 2: Import to Vercel

1. Go to [vercel.com](https://vercel.com)
2. Click "New Project"
3. Import your GitHub repository
4. Vercel will auto-detect Next.js settings

---

## Step 3: Configure Environment Variables

Add these environment variables in Vercel project settings:

### Required (Minimum for deployment)
```
NEXT_PUBLIC_SITE_URL=https://your-domain.vercel.app
NEXT_PUBLIC_SITE_NAME=Nycayen
NODE_ENV=production
```

### Optional Integrations

#### Google Analytics (Optional)
```
NEXT_PUBLIC_GA_TRACKING_ID=G-XXXXXXXXXX
```

#### SendGrid Email (Optional - Leave empty for demo mode)
```
SENDGRID_API_KEY=SG.your_api_key
SENDGRID_FROM_EMAIL=noreply@nycayen.com
```

#### Stripe Payments (Optional - Leave empty for demo mode)
```
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_live_xxxx
STRIPE_SECRET_KEY=sk_live_xxxx
STRIPE_WEBHOOK_SECRET=whsec_xxxx
```

#### Shopify Store (Optional - Leave empty for demo mode with mock products)
```
NEXT_PUBLIC_SHOPIFY_DOMAIN=your-store.myshopify.com
NEXT_PUBLIC_SHOPIFY_STOREFRONT_ACCESS_TOKEN=your_token
```

#### Instagram Feed (Optional - Leave empty for mock data)
```
NEXT_PUBLIC_INSTAGRAM_ACCESS_TOKEN=your_token
NEXT_PUBLIC_INSTAGRAM_USER_ID=your_id
```

#### Calendly Booking (Optional - Leave empty for contact form fallback)
```
NEXT_PUBLIC_CALENDLY_URL=https://calendly.com/your-account
```

#### Social Media & Business Info
```
NEXT_PUBLIC_INSTAGRAM_URL=https://instagram.com/nycayenmoore
NEXT_PUBLIC_FACEBOOK_URL=https://facebook.com/nycayen
NEXT_PUBLIC_TWITTER_URL=https://twitter.com/nycayen
NEXT_PUBLIC_BUSINESS_NAME=Nycayen
NEXT_PUBLIC_BUSINESS_PHONE=+1-555-123-4567
NEXT_PUBLIC_BUSINESS_EMAIL=info@nycayen.com
NEXT_PUBLIC_BUSINESS_ADDRESS=123 Beauty Street, City, State 12345
```

---

## Step 4: Deploy

1. Click "Deploy"
2. Wait for build to complete (~2-5 minutes)
3. Your site will be live at `https://your-project.vercel.app`

---

## Step 5: Custom Domain (Optional)

1. Go to Project Settings → Domains
2. Add your custom domain (e.g., nycayen.com)
3. Update DNS records as instructed
4. SSL certificate is automatically provisioned

---

## 📊 Deployment Configuration

### Build Settings (Auto-detected)
```
Framework: Next.js
Build Command: npm run build
Output Directory: .next
Install Command: npm install
Node Version: 18.x
```

### Serverless Functions
- API routes automatically deployed as serverless functions
- Max duration: 10 seconds (configurable in vercel.json)
- Region: iad1 (US East)

---

## 🔍 Post-Deployment Checklist

- [ ] Test all pages load correctly
- [ ] Verify contact form works (check SendGrid if configured)
- [ ] Test booking system (Calendly or contact form)
- [ ] Check shop functionality (Shopify or mock data)
- [ ] Verify Instagram feed (API or mock data)
- [ ] Test mobile responsiveness
- [ ] Check performance with Lighthouse
- [ ] Verify SEO meta tags
- [ ] Test cookie banner GDPR compliance

---

## 🎨 Features That Work Out of the Box

### ✅ Fully Functional (No API Keys Required)
- All page navigation
- Responsive design and animations
- Contact forms (with email logging fallback)
- Booking widget (with contact form fallback)
- Portfolio gallery (with placeholder images)
- Blog articles (with mock data)
- Cookie consent banner
- Chatbot UI (basic functionality)
- 404 error page
- Privacy policy page

### ⚙️ Enhanced with API Keys
- **SendGrid**: Real email delivery for contacts/bookings
- **Stripe**: Live payment processing for shop
- **Shopify**: Real product catalog and cart
- **Instagram**: Live social media feed
- **Google Analytics**: Traffic and conversion tracking
- **Calendly**: Professional booking calendar

---

## 🔧 Troubleshooting

### Build Failures
```bash
# Clear cache and rebuild
vercel --prod --force
```

### Environment Variables Not Working
- Ensure variables are set in Vercel dashboard
- Redeploy after adding/changing variables
- Check variable names match exactly (case-sensitive)

### API Routes Timing Out
- Check serverless function logs in Vercel dashboard
- Increase timeout in vercel.json if needed
- Verify external API credentials

---

## 📈 Performance Optimization

### Already Configured
- ✅ Image optimization (AVIF, WebP)
- ✅ Automatic code splitting
- ✅ Server-side rendering
- ✅ Static generation where possible
- ✅ Compression enabled
- ✅ ETags for caching

### Recommended Next Steps
1. Add ISR for blog posts
2. Implement edge caching for static assets
3. Set up Vercel Analytics
4. Configure Web Vitals monitoring

---

## 🔐 Security

### Implemented
- ✅ HTTPS enforced
- ✅ Security headers (CSP, XSS protection)
- ✅ GDPR-compliant cookie banner
- ✅ Environment variable encryption
- ✅ API rate limiting ready

---

## 📞 Support

For deployment issues:
1. Check Vercel deployment logs
2. Review build output for errors
3. Verify all environment variables
4. Test locally first: `npm run build && npm start`

---

## 🎉 You're Live!

Your salon website is now deployed and ready to accept bookings!

**Next Steps:**
1. Configure your custom domain
2. Add real API keys for full functionality
3. Test all features thoroughly
4. Share with clients and start booking!
