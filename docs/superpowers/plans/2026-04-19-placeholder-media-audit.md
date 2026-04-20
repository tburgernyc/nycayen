# Placeholder Media & Site Audit Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace all missing image/video placeholders with real Unsplash CDN images and a free Pexels hero video, fix the missing `node_modules`, and ensure the site runs for a client demo.

**Architecture:** No local image files — all photos served directly from `images.unsplash.com` CDN (requires internet). One local video file `public/videos/hero.mp4` for the hero section (autoplay requires same-origin). Mock data arrays in components are updated in-place with CDN URLs; no new utility files are introduced.

**Tech Stack:** Next.js 15, TypeScript, Tailwind CSS, Framer Motion, `next/image` for portfolio page (needs Unsplash remotePattern), plain `<img>` for all other image renders.

---

## File Map

| File | Change |
|------|--------|
| `next.config.js` | Add `images.unsplash.com` to `remotePatterns` |
| `public/videos/hero.mp4` | Create — downloaded Pexels hair video |
| `components/HeroSection.tsx` | Replace Instagram icon placeholder with `<video>` element |
| `components/PortfolioGrid.tsx` | Add Unsplash URLs to data array; replace Eye-icon div with `<img>` |
| `components/InstagramCarousel.tsx` | Update mock `media_url` values; replace Instagram-icon div with `<img>` |
| `components/BlogPreview.tsx` | Add `image` field to blog post data; replace Tag-icon placeholder with `<img>` |
| `app/portfolio/page.tsx` | Replace local `/images/portfolio/before-N.jpg` paths with Unsplash CDN URLs |
| `utils/shopify.ts` | Replace local product image paths with Unsplash CDN URLs; add 4 more mock products |
| `app/about/page.tsx` | Add "Meet Your Stylist" section with a portrait photo |

---

## Task 1: Install dependencies

**Files:**
- Run: project root

- [ ] **Step 1: Install npm packages**

```bash
cd "/mnt/c/Users/tburg/New folder (2)/nycayenmoore.com"
npm install
```

Expected: `node_modules/` created, no critical errors. Ignore any audit warnings.

- [ ] **Step 2: Verify Next.js binary exists**

```bash
ls node_modules/.bin/next
```

Expected: prints the path to `next` binary.

- [ ] **Step 3: Commit**

```bash
git add package-lock.json
git commit -m "chore: install dependencies"
```

---

## Task 2: Allow Unsplash images in Next.js config

**Files:**
- Modify: `next.config.js`

- [ ] **Step 1: Add Unsplash to remotePatterns**

Open `next.config.js`. Add this object to the `remotePatterns` array (after the existing entries):

```js
{
  protocol: 'https',
  hostname: 'images.unsplash.com',
  port: '',
  pathname: '/**',
},
```

The full `images` block should look like:

```js
images: {
  remotePatterns: [
    {
      protocol: 'https',
      hostname: 'scontent-*.cdninstagram.com',
      port: '',
      pathname: '/**',
    },
    {
      protocol: 'https',
      hostname: 'cdn.shopify.com',
      port: '',
      pathname: '/**',
    },
    {
      protocol: 'https',
      hostname: 'shopify.com',
      port: '',
      pathname: '/**',
    },
    {
      protocol: 'https',
      hostname: 'images.unsplash.com',
      port: '',
      pathname: '/**',
    },
  ],
  formats: ['image/avif', 'image/webp'],
  minimumCacheTTL: 60,
},
```

- [ ] **Step 2: Commit**

```bash
git add next.config.js
git commit -m "chore: allow Unsplash CDN images in next/image"
```

---

## Task 3: Download hero video

**Files:**
- Create: `public/videos/hero.mp4`

- [ ] **Step 1: Create public/videos directory**

```bash
mkdir -p "/mnt/c/Users/tburg/New folder (2)/nycayenmoore.com/public/videos"
```

- [ ] **Step 2: Download free Pexels hair styling video**

```bash
curl -L "https://videos.pexels.com/video-files/3209828/3209828-sd_960_540_25fps.mp4" \
  -o "/mnt/c/Users/tburg/New folder (2)/nycayenmoore.com/public/videos/hero.mp4" \
  --max-time 60
```

Expected: `public/videos/hero.mp4` created, ~5-15 MB.

If the curl fails (404 or timeout), use this fallback — visit https://www.pexels.com/search/videos/hair%20salon/ , download any free video, save it as `public/videos/hero.mp4`.

- [ ] **Step 3: Verify file exists and has size**

```bash
ls -lh "/mnt/c/Users/tburg/New folder (2)/nycayenmoore.com/public/videos/hero.mp4"
```

Expected: file exists, size > 0.

- [ ] **Step 4: Add video to .gitignore (too large for git)**

Open `.gitignore` and add these lines at the bottom:

```
# Large media files
public/videos/*.mp4
```

- [ ] **Step 5: Commit**

```bash
git add .gitignore
git commit -m "chore: add video directory, gitignore mp4 files"
```

---

## Task 4: Update HeroSection with video player

**Files:**
- Modify: `components/HeroSection.tsx`

- [ ] **Step 1: Replace the Instagram placeholder block with a video element**

In `HeroSection.tsx`, find the block starting at line 141:

```tsx
{/* Instagram Video Placeholder */}
<div className="aspect-[9/16] max-w-sm mx-auto bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl overflow-hidden shadow-2xl">
  <div className="instagram-embed">
    {/* Placeholder for Instagram video carousel */}
    <div className="w-full h-full bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center">
      <div className="text-center">
        <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg
            className="w-8 h-8 text-primary"
            fill="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
          </svg>
        </div>
        <p className="text-primary font-medium">Instagram Video</p>
        <p className="text-sm text-muted-foreground">Coming Soon</p>
      </div>
    </div>
  </div>
</div>
```

Replace it with:

```tsx
{/* Hero Video */}
<div className="aspect-[9/16] max-w-sm mx-auto rounded-2xl overflow-hidden shadow-2xl relative">
  <video
    autoPlay
    muted
    loop
    playsInline
    poster="https://images.unsplash.com/photo-1560869713-7d0a29430803?w=400&h=700&fit=crop"
    className="w-full h-full object-cover"
  >
    <source src="/videos/hero.mp4" type="video/mp4" />
  </video>
  <div className="absolute inset-0 bg-gradient-to-t from-dark/30 to-transparent pointer-events-none" />
</div>
```

Note: The `poster` attribute handles the visual fallback if the video file is missing or slow to load — no `<img>` fallback needed inside the `<video>` tag.

- [ ] **Step 2: Commit**

```bash
git add components/HeroSection.tsx
git commit -m "feat: replace hero Instagram placeholder with video player"
```

---

## Task 5: Update PortfolioGrid component with real images

**Files:**
- Modify: `components/PortfolioGrid.tsx`

- [ ] **Step 1: Update portfolioItems array with Unsplash image URLs**

In `PortfolioGrid.tsx`, find the `portfolioItems` array (starting around line 40). Replace the entire array with:

```tsx
const portfolioItems: PortfolioItem[] = [
  {
    id: "1",
    title: "Dramatic Color Transformation",
    category: "coloring",
    image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=600&h=600&fit=crop&crop=top",
    beforeImage: "https://images.unsplash.com/photo-1562322140-8baeececf3df?w=600&h=600&fit=crop&crop=top",
    description: "Complete hair makeover from brunette to stunning blonde balayage with lowlights for depth and dimension.",
    client: "Sarah M.",
    date: "2024-12-15",
    tags: ["balayage", "blonde", "transformation", "color"],
    likes: 156,
    featured: true,
  },
  {
    id: "2",
    title: "Elegant Wedding Updo",
    category: "special",
    image: "https://images.unsplash.com/photo-1560869713-7d0a29430803?w=600&h=600&fit=crop&crop=top",
    description: "Romantic low bun with soft face-framing pieces and delicate pearl accessories for a garden wedding.",
    client: "Jennifer L.",
    date: "2024-12-10",
    tags: ["wedding", "updo", "romantic", "elegant"],
    likes: 203,
    featured: true,
  },
  {
    id: "3",
    title: "Modern Layered Bob",
    category: "cutting",
    image: "https://images.unsplash.com/photo-1605497788044-5a32c7078486?w=600&h=600&fit=crop&crop=center",
    description: "Chic asymmetrical bob with subtle layers and a sleek finish. Perfect for the busy professional.",
    client: "Maria R.",
    date: "2024-12-08",
    tags: ["bob", "modern", "layers", "professional"],
    likes: 98,
  },
  {
    id: "4",
    title: "Keratin Treatment Results",
    category: "treatments",
    image: "https://images.unsplash.com/photo-1562322140-8baeececf3df?w=600&h=600&fit=crop&crop=center",
    beforeImage: "https://images.unsplash.com/photo-1605497788044-5a32c7078486?w=600&h=600&fit=crop&crop=faces",
    description: "Frizzy, unmanageable hair transformed to smooth, shiny perfection with our premium keratin treatment.",
    client: "Amanda K.",
    date: "2024-12-05",
    tags: ["keratin", "smoothing", "treatment", "frizz"],
    likes: 142,
  },
  {
    id: "5",
    title: "Sunset Balayage",
    category: "coloring",
    image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=600&h=600&fit=crop&crop=entropy",
    description: "Warm sunset-inspired balayage with copper and gold tones that complement natural skin tone beautifully.",
    client: "Lisa P.",
    date: "2024-12-01",
    tags: ["balayage", "sunset", "copper", "warm tones"],
    likes: 167,
  },
  {
    id: "6",
    title: "Prom Night Glamour",
    category: "special",
    image: "https://images.unsplash.com/photo-1560869713-7d0a29430803?w=600&h=600&fit=crop&crop=entropy",
    description: "Hollywood glamour waves with vintage-inspired styling for an unforgettable prom night look.",
    client: "Taylor S.",
    date: "2024-11-28",
    tags: ["prom", "glamour", "vintage", "waves"],
    likes: 189,
  },
  {
    id: "7",
    title: "Pixie Cut Perfection",
    category: "cutting",
    image: "https://images.unsplash.com/photo-1605497788044-5a32c7078486?w=600&h=600&fit=crop&crop=bottom",
    description: "Bold pixie cut with textured styling that enhances facial features and adds edgy sophistication.",
    client: "Rachel N.",
    date: "2024-11-25",
    tags: ["pixie", "short", "textured", "bold"],
    likes: 134,
  },
  {
    id: "8",
    title: "Hair Extension Magic",
    category: "special",
    image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=600&h=600&fit=crop&crop=bottom",
    beforeImage: "https://images.unsplash.com/photo-1562322140-8baeececf3df?w=600&h=600&fit=crop&crop=bottom",
    description: "Seamless tape-in extensions for instant length and volume, perfectly blended for natural results.",
    client: "Nicole B.",
    date: "2024-11-20",
    tags: ["extensions", "length", "volume", "tape-in"],
    likes: 176,
  },
];
```

- [ ] **Step 2: Replace Eye-icon placeholder div with img element**

Find this block inside the grid card (around line 264-274):

```tsx
{/* Image */}
<div className="aspect-square bg-gradient-to-br from-primary/20 to-secondary/20 relative overflow-hidden">
  {/* Placeholder for actual image */}
  <div className="w-full h-full flex items-center justify-center">
    <div className="text-center">
      <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-2">
        <Eye className="w-8 h-8 text-primary/50" />
      </div>
      <p className="text-primary/50 text-sm">{item.title}</p>
    </div>
  </div>
```

Replace with:

```tsx
{/* Image */}
<div className="aspect-square relative overflow-hidden">
  <img
    src={item.image}
    alt={item.title}
    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
  />
```

- [ ] **Step 3: Remove unused Eye import if it's no longer used**

Check the import line at the top:

```tsx
import { SlidersHorizontal as Filter, Grid, List, Search, Eye, Heart, Share2, Calendar } from "lucide-react";
```

Remove `Eye,` since we replaced the Eye icon:

```tsx
import { SlidersHorizontal as Filter, Grid, List, Search, Heart, Share2, Calendar } from "lucide-react";
```

- [ ] **Step 4: Commit**

```bash
git add components/PortfolioGrid.tsx
git commit -m "feat: add real Unsplash photos to PortfolioGrid component"
```

---

## Task 6: Fix InstagramCarousel image rendering

**Files:**
- Modify: `components/InstagramCarousel.tsx`

- [ ] **Step 1: Update mockPosts media_url values**

Find the `mockPosts` array (starting around line 29). Replace the entire array with:

```tsx
const mockPosts = useMemo<InstagramPost[]>(() => [
  {
    id: '1',
    type: 'video',
    media_url: 'https://images.unsplash.com/photo-1560869713-7d0a29430803?w=600&h=600&fit=crop',
    caption: '✨ Another stunning transformation! From dull to dazzling ✨ #HairTransformation #NycayenMagic',
    permalink: 'https://instagram.com/nycayenmoore',
    timestamp: new Date().toISOString(),
    like_count: 245,
    comments_count: 18,
  },
  {
    id: '2',
    type: 'image',
    media_url: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=600&h=600&fit=crop',
    caption: '💫 Loving this gorgeous balayage! Perfect for the fall season 🍂 #Balayage #HairGoals',
    permalink: 'https://instagram.com/nycayenmoore',
    timestamp: new Date().toISOString(),
    like_count: 189,
    comments_count: 12,
  },
  {
    id: '3',
    type: 'carousel',
    media_url: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?w=600&h=600&fit=crop',
    caption: '🔥 Before & After magic! Swipe to see the incredible transformation ➡️ #BeforeAndAfter #Confidence',
    permalink: 'https://instagram.com/nycayenmoore',
    timestamp: new Date().toISOString(),
    like_count: 312,
    comments_count: 24,
  },
  {
    id: '4',
    type: 'video',
    media_url: 'https://images.unsplash.com/photo-1605497788044-5a32c7078486?w=600&h=600&fit=crop',
    caption: '🎥 Behind the scenes: Watch the technique that creates these stunning curls! #BehindTheScenes #HairTutorial',
    permalink: 'https://instagram.com/nycayenmoore',
    timestamp: new Date().toISOString(),
    like_count: 156,
    comments_count: 8,
  },
  {
    id: '5',
    type: 'image',
    media_url: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=600&h=600&fit=crop&crop=entropy',
    caption: '❤️ Client love! Nothing makes us happier than seeing our clients glow with confidence ✨ #ClientLove #Confidence',
    permalink: 'https://instagram.com/nycayenmoore',
    timestamp: new Date().toISOString(),
    like_count: 201,
    comments_count: 15,
  },
], []);
```

- [ ] **Step 2: Replace Instagram icon div with actual img tag**

Find this block (around line 187-189):

```tsx
<div className="w-full h-full flex items-center justify-center">
  <Instagram className="w-16 h-16 text-neo-gold/50" />
</div>
```

Replace with:

```tsx
<img
  src={posts[currentIndex].thumbnail_url || posts[currentIndex].media_url}
  alt={posts[currentIndex].caption}
  className="w-full h-full object-cover"
/>
```

- [ ] **Step 3: Commit**

```bash
git add components/InstagramCarousel.tsx
git commit -m "feat: render real photos in InstagramCarousel mock data"
```

---

## Task 7: Add images to BlogPreview

**Files:**
- Modify: `components/BlogPreview.tsx`

- [ ] **Step 1: Add image field to each blog post in the data array**

Find the `blogPosts` array (starting around line 35). Replace the array with:

```tsx
const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "10 Essential Hair Care Tips for Winter",
    excerpt: "Winter weather can be harsh on your hair. Learn how to protect and nourish your locks during the cold season with these expert tips from our stylists.",
    slug: "winter-hair-care-tips",
    author: "Nycayen Team",
    publishedAt: "2024-12-15",
    readTime: "5 min read",
    category: "Hair Care",
    tags: ["winter", "hair care", "tips", "protection"],
    image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800&h=450&fit=crop&crop=top",
    featured: true,
    views: 1247,
    comments: 23,
  },
  {
    id: "2",
    title: "The Art of Color Correction: Before & After",
    excerpt: "See how our expert colorists transform hair color disasters into stunning masterpieces. Real client stories and techniques revealed.",
    slug: "color-correction-before-after",
    author: "Maria Rodriguez",
    publishedAt: "2024-12-10",
    readTime: "7 min read",
    category: "Color Techniques",
    tags: ["color correction", "transformation", "techniques"],
    image: "https://images.unsplash.com/photo-1562322140-8baeececf3df?w=800&h=450&fit=crop&crop=top",
    featured: true,
    views: 892,
    comments: 18,
  },
  {
    id: "3",
    title: "Choosing the Perfect Haircut for Your Face Shape",
    excerpt: "Discover which haircuts complement different face shapes and learn how to communicate with your stylist to get the perfect cut.",
    slug: "haircut-face-shape-guide",
    author: "Jennifer Chen",
    publishedAt: "2024-12-08",
    readTime: "6 min read",
    category: "Styling Guide",
    tags: ["haircut", "face shape", "styling", "guide"],
    image: "https://images.unsplash.com/photo-1605497788044-5a32c7078486?w=800&h=450&fit=crop&crop=center",
    views: 654,
    comments: 12,
  },
  {
    id: "4",
    title: "Sustainable Hair Care: Eco-Friendly Products We Love",
    excerpt: "Explore our curated selection of sustainable, eco-friendly hair care products that are kind to both your hair and the environment.",
    slug: "sustainable-hair-care-products",
    author: "Amanda Davis",
    publishedAt: "2024-12-05",
    readTime: "4 min read",
    category: "Product Reviews",
    tags: ["sustainable", "eco-friendly", "products", "environment"],
    image: "https://images.unsplash.com/photo-1560869713-7d0a29430803?w=800&h=450&fit=crop&crop=center",
    views: 423,
    comments: 8,
  },
  {
    id: "5",
    title: "Bridal Hair Trends 2025: What's Hot This Season",
    excerpt: "From romantic updos to modern braids, discover the hottest bridal hair trends that will make your wedding day unforgettable.",
    slug: "bridal-hair-trends-2025",
    author: "Lisa Thompson",
    publishedAt: "2024-12-01",
    readTime: "8 min read",
    category: "Bridal",
    tags: ["bridal", "wedding", "trends", "2025"],
    image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800&h=450&fit=crop&crop=entropy",
    featured: true,
    views: 1156,
    comments: 31,
  },
];
```

- [ ] **Step 2: Replace Tag-icon placeholder in grid layout with img element**

In the grid layout (around line 254), find:

```tsx
{/* Image Placeholder */}
<div className="w-full h-full flex items-center justify-center">
  <div className="text-center">
    <Tag className="w-12 h-12 text-neo-gold/50 mx-auto mb-2" />
    <p className="text-neo-gold/50 text-sm px-4 line-clamp-2">{post.title}</p>
  </div>
</div>
```

Replace with:

```tsx
{post.image && (
  <img
    src={post.image}
    alt={post.title}
    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
  />
)}
```

- [ ] **Step 3: Replace Tag-icon placeholder in list layout with img element**

In the list layout (around line 158), find:

```tsx
<div className="aspect-video bg-neo-dark shadow-neo-pressed rounded-neo-md flex items-center justify-center">
  <div className="text-center">
    <Tag className="w-8 h-8 text-neo-gold/50 mx-auto mb-2" />
    <p className="text-neo-gold/50 text-sm">{post.category}</p>
  </div>
</div>
```

Replace with:

```tsx
<div className="aspect-video bg-neo-dark shadow-neo-pressed rounded-neo-md overflow-hidden">
  {post.image ? (
    <img
      src={post.image}
      alt={post.title}
      className="w-full h-full object-cover"
    />
  ) : (
    <div className="w-full h-full flex items-center justify-center">
      <Tag className="w-8 h-8 text-neo-gold/50" />
    </div>
  )}
</div>
```

- [ ] **Step 4: Commit**

```bash
git add components/BlogPreview.tsx
git commit -m "feat: add Unsplash cover images to blog post previews"
```

---

## Task 8: Fix portfolio page before/after images

**Files:**
- Modify: `app/portfolio/page.tsx`

- [ ] **Step 1: Replace all local image paths with Unsplash CDN URLs**

In `app/portfolio/page.tsx`, find the `portfolioItems` array (starts around line 35). Replace the `beforeImage` and `afterImage` values for all 9 items:

```tsx
const portfolioItems: PortfolioItem[] = [
  {
    id: "1",
    title: "Elegant Balayage Transformation",
    description: "Stunning balayage highlights that perfectly complement natural hair color",
    category: "coloring",
    service: "Balayage",
    beforeImage: "https://images.unsplash.com/photo-1562322140-8baeececf3df?w=800&h=600&fit=crop&crop=top",
    afterImage: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800&h=600&fit=crop&crop=top",
    clientName: "Sarah M.",
    rating: 5,
    date: "2024-01-15",
    tags: ["balayage", "highlights", "natural", "blonde"],
    testimonial: "I absolutely love my new look! The balayage is so natural and beautiful."
  },
  {
    id: "2",
    title: "Dramatic Color Correction",
    description: "Expert color correction from damaged blonde to healthy brunette",
    category: "coloring",
    service: "Color Correction",
    beforeImage: "https://images.unsplash.com/photo-1605497788044-5a32c7078486?w=800&h=600&fit=crop&crop=top",
    afterImage: "https://images.unsplash.com/photo-1560869713-7d0a29430803?w=800&h=600&fit=crop&crop=top",
    clientName: "Emily R.",
    rating: 5,
    date: "2024-01-20",
    tags: ["color-correction", "brunette", "healthy", "transformation"],
    testimonial: "Nycayen saved my hair! I can't believe how healthy and beautiful it looks now."
  },
  {
    id: "3",
    title: "Precision Pixie Cut",
    description: "Bold pixie cut with modern styling and texture",
    category: "styling",
    service: "Haircut & Styling",
    beforeImage: "https://images.unsplash.com/photo-1562322140-8baeececf3df?w=800&h=600&fit=crop&crop=center",
    afterImage: "https://images.unsplash.com/photo-1605497788044-5a32c7078486?w=800&h=600&fit=crop&crop=center",
    clientName: "Maya L.",
    rating: 5,
    date: "2024-01-25",
    tags: ["pixie", "short", "modern", "edgy"],
    testimonial: "I feel so confident and stylish with my new pixie cut!"
  },
  {
    id: "4",
    title: "Bridal Updo Elegance",
    description: "Romantic bridal updo with delicate curls and accessories",
    category: "special",
    service: "Wedding Styling",
    beforeImage: "https://images.unsplash.com/photo-1560869713-7d0a29430803?w=800&h=600&fit=crop&crop=center",
    afterImage: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800&h=600&fit=crop&crop=entropy",
    clientName: "Jessica K.",
    rating: 5,
    date: "2024-02-01",
    tags: ["bridal", "updo", "elegant", "romantic"],
    testimonial: "Perfect for my wedding day! I felt like a princess."
  },
  {
    id: "5",
    title: "Keratin Smoothing Treatment",
    description: "Frizz-free, smooth hair transformation with keratin treatment",
    category: "treatments",
    service: "Keratin Treatment",
    beforeImage: "https://images.unsplash.com/photo-1605497788044-5a32c7078486?w=800&h=600&fit=crop&crop=bottom",
    afterImage: "https://images.unsplash.com/photo-1562322140-8baeececf3df?w=800&h=600&fit=crop&crop=entropy",
    clientName: "Amanda T.",
    rating: 5,
    date: "2024-02-05",
    tags: ["keratin", "smooth", "frizz-free", "treatment"],
    testimonial: "My hair is so much more manageable now. I save so much time styling!"
  },
  {
    id: "6",
    title: "Vibrant Fashion Colors",
    description: "Bold fashion colors with professional color placement",
    category: "coloring",
    service: "Fashion Colors",
    beforeImage: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800&h=600&fit=crop&crop=bottom",
    afterImage: "https://images.unsplash.com/photo-1560869713-7d0a29430803?w=800&h=600&fit=crop&crop=bottom",
    clientName: "Zoe P.",
    rating: 5,
    date: "2024-02-10",
    tags: ["fashion-colors", "bold", "creative", "vibrant"],
    testimonial: "I love how creative and vibrant my hair looks! So unique!"
  },
  {
    id: "7",
    title: "Long Layer Cut",
    description: "Beautiful long layers with face-framing highlights",
    category: "styling",
    service: "Haircut & Styling",
    beforeImage: "https://images.unsplash.com/photo-1560869713-7d0a29430803?w=800&h=600&fit=crop&crop=entropy",
    afterImage: "https://images.unsplash.com/photo-1605497788044-5a32c7078486?w=800&h=600&fit=crop&crop=entropy",
    clientName: "Lisa H.",
    rating: 5,
    date: "2024-02-15",
    tags: ["long-layers", "highlights", "face-framing", "natural"],
    testimonial: "The layers add so much movement and life to my hair!"
  },
  {
    id: "8",
    title: "Curl Enhancement Treatment",
    description: "Natural curl enhancement with specialized treatments",
    category: "treatments",
    service: "Curl Treatment",
    beforeImage: "https://images.unsplash.com/photo-1562322140-8baeececf3df?w=800&h=600&fit=crop&crop=faces",
    afterImage: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800&h=600&fit=crop&crop=faces",
    clientName: "Maria S.",
    rating: 5,
    date: "2024-02-20",
    tags: ["curls", "enhancement", "natural", "defined"],
    testimonial: "My curls have never looked better! They're so defined and bouncy."
  },
  {
    id: "9",
    title: "Gradient Ombré",
    description: "Smooth ombré transition from dark to light",
    category: "coloring",
    service: "Ombré",
    beforeImage: "https://images.unsplash.com/photo-1605497788044-5a32c7078486?w=800&h=600&fit=crop&crop=faces",
    afterImage: "https://images.unsplash.com/photo-1560869713-7d0a29430803?w=800&h=600&fit=crop&crop=faces",
    clientName: "Rachel D.",
    rating: 5,
    date: "2024-02-25",
    tags: ["ombre", "gradient", "smooth", "transition"],
    testimonial: "The ombré is so seamless and beautiful. I get compliments everywhere!"
  }
];
```

- [ ] **Step 2: Verify Image component usage is correct**

The portfolio page already imports `Image from "next/image"`. Find where portfolio images are rendered in the JSX (search for `<Image` in the file). Ensure the `src` prop will now use the Unsplash URLs from the updated data — no changes needed to the JSX itself, just confirm the `src={item.beforeImage}` / `src={item.afterImage}` pattern is being used.

- [ ] **Step 3: Commit**

```bash
git add app/portfolio/page.tsx
git commit -m "feat: replace missing local portfolio images with Unsplash CDN URLs"
```

---

## Task 9: Fix shop page mock product images

**Files:**
- Modify: `utils/shopify.ts`

- [ ] **Step 1: Replace mock product image paths and add more products**

In `utils/shopify.ts`, find the mock products array returned when `!this.isConfigured` (around line 71). Replace with:

```ts
return [
  {
    id: '1',
    title: 'Premium Hair Care Set',
    description: 'Complete hair care routine with shampoo, conditioner, and deep treatment mask from our top-recommended brands.',
    price: '$89.99',
    image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=600&h=600&fit=crop&crop=top',
    variants: [{
      id: '1',
      title: 'Default',
      price: '$89.99',
      available: true,
    }],
    available: true,
  },
  {
    id: '2',
    title: 'Professional Styling Tools',
    description: 'Salon-grade blow dryer, flat iron, and curling wand set for perfect results at home.',
    price: '$149.99',
    image: 'https://images.unsplash.com/photo-1560869713-7d0a29430803?w=600&h=600&fit=crop&crop=top',
    variants: [{
      id: '2',
      title: 'Default',
      price: '$149.99',
      available: true,
    }],
    available: true,
  },
  {
    id: '3',
    title: 'Balayage Maintenance Kit',
    description: 'Purple shampoo, toning gloss, and bond-strengthening treatment to keep your color fresh between appointments.',
    price: '$64.99',
    image: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?w=600&h=600&fit=crop&crop=top',
    variants: [{
      id: '3',
      title: 'Default',
      price: '$64.99',
      available: true,
    }],
    available: true,
  },
  {
    id: '4',
    title: 'Keratin Smoothing Treatment',
    description: 'At-home keratin treatment kit for frizz-free, smooth hair that lasts up to 8 weeks.',
    price: '$79.99',
    image: 'https://images.unsplash.com/photo-1605497788044-5a32c7078486?w=600&h=600&fit=crop&crop=top',
    variants: [{
      id: '4',
      title: 'Default',
      price: '$79.99',
      available: true,
    }],
    available: true,
  },
  {
    id: '5',
    title: 'Curl Defining Collection',
    description: 'Leave-in conditioner, curl cream, and diffuser attachment for bouncy, defined curls.',
    price: '$54.99',
    image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=600&h=600&fit=crop&crop=entropy',
    variants: [{
      id: '5',
      title: 'Default',
      price: '$54.99',
      available: true,
    }],
    available: true,
  },
  {
    id: '6',
    title: 'Scalp Revival Serum',
    description: 'Nourishing scalp serum with biotin and peptides to promote healthy hair growth and reduce breakage.',
    price: '$44.99',
    image: 'https://images.unsplash.com/photo-1560869713-7d0a29430803?w=600&h=600&fit=crop&crop=entropy',
    variants: [{
      id: '6',
      title: 'Default',
      price: '$44.99',
      available: false,
    }],
    available: false,
  },
];
```

- [ ] **Step 2: Commit**

```bash
git add utils/shopify.ts
git commit -m "feat: expand mock shop products with Unsplash images"
```

---

## Task 10: Add stylist photo to About page

**Files:**
- Modify: `app/about/page.tsx`

- [ ] **Step 1: Add "Meet Your Stylist" section after the Mission & Vision section**

In `app/about/page.tsx`, find the closing `</section>` tag of the "Mission & Vision" section (around line 170). After it, add this new section:

```tsx
{/* Meet Your Stylist */}
<section className="py-20 bg-dark">
  <div className="container mx-auto px-4">
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
      className="max-w-5xl mx-auto"
    >
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <motion.div variants={itemVariants} className="relative">
          <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1560869713-7d0a29430803?w=600&h=800&fit=crop&crop=top"
              alt="Nycayen — Master Hair Stylist"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute -bottom-4 -right-4 bg-primary text-primary-foreground px-6 py-3 rounded-xl shadow-lg">
            <p className="text-sm font-semibold">5+ Years</p>
            <p className="text-xs opacity-80">Master Stylist</p>
          </div>
        </motion.div>

        <motion.div variants={itemVariants} className="space-y-6">
          <div>
            <h2 className="text-4xl md:text-5xl font-cormorant font-bold text-primary mb-2">
              Meet Nycayen
            </h2>
            <p className="text-lg text-muted-foreground italic">Master Hair Stylist & Founder</p>
          </div>

          <p className="text-lg text-muted-foreground leading-relaxed">
            With over 5 years of experience transforming hair and boosting confidence, 
            Nycayen brings a unique blend of technical mastery and artistic vision to every 
            appointment. Trained in the latest color techniques, cutting methods, and 
            treatments, she treats every client&apos;s hair as a canvas for her art.
          </p>

          <p className="text-lg text-muted-foreground leading-relaxed">
            Her philosophy is simple: when you look good, you feel unstoppable. Whether 
            it&apos;s a dramatic transformation or a subtle refresh, Nycayen tailors every 
            service to your unique lifestyle and goals.
          </p>

          <div className="grid grid-cols-2 gap-4 pt-4">
            {certifications.slice(0, 4).map((cert, index) => (
              <div key={index} className="flex items-start space-x-2">
                <Scissors className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                <span className="text-sm text-muted-foreground">{cert}</span>
              </div>
            ))}
          </div>

          <Link
            href="/booking"
            className="inline-flex items-center space-x-2 bg-primary text-primary-foreground px-8 py-4 rounded-lg font-medium hover:bg-primary/90 transition-colors"
          >
            <span>Book With Nycayen</span>
          </Link>
        </motion.div>
      </div>
    </motion.div>
  </div>
</section>
```

- [ ] **Step 2: Add missing Link import if not already present**

Check the imports at the top of `app/about/page.tsx`. If `Link` is not already imported, add it:

```tsx
import Link from "next/link";
```

- [ ] **Step 3: Commit**

```bash
git add app/about/page.tsx
git commit -m "feat: add Meet Your Stylist section with photo to About page"
```

---

## Task 11: Start dev server and verify all pages visually

**Files:** None — verification only

- [ ] **Step 1: Start development server**

```bash
cd "/mnt/c/Users/tburg/New folder (2)/nycayenmoore.com"
npm run dev
```

Expected output includes: `Local: http://localhost:3000`

- [ ] **Step 2: Verify each page in browser**

Open http://localhost:3000 and check each page. Confirm:

| Page | What to verify |
|------|----------------|
| `/` (Home) | Hero video autoplays; PortfolioGrid shows photos; InstagramCarousel shows photos; BlogPreview shows images |
| `/portfolio` | Before/after images load; grid shows photos |
| `/shop` | 6 mock products show with photos; "Demo Mode" banner visible |
| `/about` | "Meet Your Stylist" section shows portrait photo |
| `/services` | Page loads without errors |
| `/booking` | Page loads without errors |
| `/contact` | Page loads without errors |

- [ ] **Step 3: Fix any broken images**

If any Unsplash image returns 404 (shows broken image icon), replace its URL with one of the confirmed working IDs:
- `photo-1522337360788-8b13dee7a37e` — blonde balayage
- `photo-1560869713-7d0a29430803` — hair coloring
- `photo-1605497788044-5a32c7078486` — salon styling
- `photo-1562322140-8baeececf3df` — blow dry

Format: `https://images.unsplash.com/{photo-id}?w={width}&h={height}&fit=crop`

- [ ] **Step 4: Final commit**

```bash
git add -A
git commit -m "chore: verify all placeholder media rendering correctly"
```

---

## Verification Summary

All pages should render without broken image icons. The hero video should autoplay silently on load. The shop should show 6 products in "Demo Mode." The portfolio page should show before/after photo pairs. The about page should have a stylist portrait. No TypeScript errors should block compilation.
