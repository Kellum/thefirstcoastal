# Development Checkpoint - January 2, 2026

## Session: Railway Migration & Server Component Bug Fix

**Tags:** `#deployment` `#railway` `#bug` `#next.js` `#server-components` `#debugging` `#production`

---

## Session Goals

1. Debug server-side exception error on portfolio detail pages
2. Fix Next.js Server/Client Component boundary violations
3. Ensure Railway deployment is stable
4. Maintain proper Next.js 14+ conventions

---

## Work Completed

### 1. Investigated Server-Side Exception Error

**Initial Symptoms:**
- Portfolio detail pages (`/work/[slug]`) throwing server-side exception
- Error: "Application error: a server-side exception has occurred"
- Error occurring both locally and on Railway production
- Work listing page (`/work`) loading fine

**Debugging Process:**
1. Initially suspected params handling issue (Next.js 14+ changed params to Promise)
2. Added comprehensive error handling for image processing
3. Fixed slug extraction inconsistencies in blog queries
4. Added defensive null checks for missing data fields

**Root Cause Discovered:**
- Error logs revealed: `"Functions cannot be passed directly to Client Components unless you explicitly expose it by marking it with 'use server'"`
- The `urlFor` function was being passed from Server Component to Client Component (WebsiteViewToggle)
- This violates Next.js Server/Client component boundary rules

### 2. Fixed Server/Client Component Boundary Violation

**The Problem:**
```typescript
// app/work/[slug]/page.tsx (Server Component)
<WebsiteViewToggle
  images={item.images}
  urlFor={urlFor}  // ❌ Cannot pass functions to Client Components!
/>
```

**The Solution:**
Pre-generate all image URL variations in the Server Component:
```typescript
// Generate URLs in Server Component
const imageUrls = validImages.map((img: any) => ({
  url1400: urlFor(img).width(1400).url(),
  url1600: urlFor(img).width(1600).url(),
  url1000: urlFor(img).width(1000).url(),
  url800: urlFor(img).width(800).height(800).url(),
  url400: urlFor(img).width(400).url(),
  url1200: urlFor(img).width(1200).url(),
  alt: img.alt || `${item.title} screenshot`
}));

// Pass pre-generated URLs instead of function
<WebsiteViewToggle
  imageUrls={imageUrls}  // ✅ Data only, no functions
  title={item.title}
  projectUrl={item.projectUrl}
/>
```

**Updated Components:**
- Modified `WebsiteViewToggle` interface to accept `ImageUrl[]` instead of `images` + `urlFor`
- Removed `safeUrlFor` helper function (no longer needed)
- Updated all three view modes (Desktop, Full Width, Responsive) to use pre-generated URLs

### 3. Additional Fixes & Improvements

**Params Handling (Next.js 14.2+):**
```typescript
// Before
export default async function PortfolioItemPage({
  params
}: {
  params: Promise<{ slug: string }> | { slug: string }
}) {
  const resolvedParams = await Promise.resolve(params);
  const item = await getPortfolioItem(resolvedParams.slug);
}

// After (cleaner)
export default async function PortfolioItemPage({
  params
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params;
  const item = await getPortfolioItem(slug);
}
```

**Image Validation:**
- Filter out invalid images missing `asset` field
- Add try-catch for image URL generation in PortfolioGrid
- Handle missing featured images in blog posts

**Defensive Null Checks:**
- Added checks for `item.client`, `item.completedDate`, `item.description`
- Prevent rendering undefined fields that could cause crashes

**Blog Slug Consistency:**
- Fixed `getBlogPosts()` to extract `slug.current` as `"slug"`
- Updated blog listing page to use `post.slug` instead of `post.slug.current`

---

## Key Decisions

| Decision | Reasoning |
|----------|-----------|
| Pre-generate image URLs in Server Component | Next.js prohibits passing functions across Server/Client boundary; URLs are serializable data |
| Create ImageUrl interface with all size variants | Each view mode needs different sizes; pre-generating all variants prevents runtime errors |
| Always treat params as Promise in Next.js 14.2+ | Next.js 14.2+ made params always a Promise in production; cleaner to handle consistently |
| Filter images before processing | Prevents crashes from malformed Sanity image data missing asset field |
| Add defensive null checks for optional fields | Railway fresh builds are stricter; prevents rendering undefined values |

---

## Challenges & Solutions

| Challenge | Solution |
|-----------|----------|
| Server-side exception with no detailed error message | Checked local dev server stderr logs which revealed the actual error: function passing violation |
| "It was working yesterday, now broken with no code changes" mystery | Code had latent bug since portfolio redesign 3 days ago; Next.js dev cache hid it; Railway fresh build exposed it |
| Function passing to Client Component | Pre-generate all image URL variations in Server Component before passing to client |
| Params type confusion in Next.js 14+ | Simplified to always treat params as Promise, use direct destructuring after await |
| Invalid images crashing page | Filter images for required asset field, add try-catch around urlFor calls |
| Blog slug inconsistency | Standardize on extracting slug.current as "slug" in GROQ query |

---

## Current State

### What's Working
✅ Portfolio detail pages loading without errors
✅ Server/Client component boundary properly respected
✅ Railway deployment succeeding
✅ All image sizes pre-generated for optimal rendering
✅ Params handling follows Next.js 14.2+ conventions
✅ Defensive error handling prevents crashes on malformed data
✅ Both local and production environments working consistently

### Production URLs
- **Live Site:** https://thefirstcoastal.com (Railway)
- **GitHub Repo:** https://github.com/Kellum/thefirstcoastal
- **Sanity Studio:** https://thefirstcoastal.com/studio

### Technical Architecture
- **Hosting:** Railway (migrated from Vercel)
- **Framework:** Next.js 14.2.21
- **React:** 18.3.1
- **CMS:** Sanity (Project ID: y0gns0g3)
- **Deployment:** Git-based auto-deploy from main branch

### Files Modified (This Session)

**Core Fixes:**
- `app/work/[slug]/page.tsx` - Pre-generate image URLs, fix params handling
- `app/blog/[slug]/page.tsx` - Fix params handling, add image validation
- `components/WebsiteViewToggle.tsx` - Accept imageUrls instead of urlFor function
- `lib/sanity.ts` - Fix getBlogPosts slug extraction

**Error Handling:**
- `app/work/page.tsx` - Add try-catch for portfolio fetch
- `app/blog/page.tsx` - Add try-catch for blog fetch, fix slug access
- `components/PortfolioGrid.tsx` - Add try-catch for image URL generation

---

## Next Steps

### Immediate Priorities
1. **Monitor Railway Deployment**
   - Verify all portfolio pages load correctly
   - Check that image toggles work in all view modes
   - Test with multiple portfolio items

2. **Clean Up Background Dev Servers**
   - Multiple dev servers still running (ports 3000, 3001)
   - Kill old processes to free up resources

3. **Domain Configuration**
   - User has ANAME records set up with Porkbun
   - Verify custom domain routing to Railway

### Content & CMS
4. **Add More Portfolio Items**
   - Current site only has one portfolio entry
   - Test different project types (website, social-media, other)
   - Verify all rendering paths work correctly

5. **Populate Blog Content**
   - Add sample blog posts to test blog detail pages
   - Verify Portable Text rendering when implemented

### Future Enhancements
- Implement Portable Text renderer for full blog content
- Add SEO meta tags and Open Graph data
- Set up analytics tracking
- Optimize remaining images with Next.js Image component
- Add automated tests for Server/Client component boundaries

### Known Issues
- ⚠️ Multiple background dev servers running (non-critical)
- ⚠️ Contact form still simulation-only (not functional)
- ⚠️ Blog content uses excerpt only (Portable Text renderer needed)

---

## Git Commits (This Session)

```bash
bf9e483 - Fix: Pre-generate image URLs instead of passing function to client component
d674784 - Fix params handling and add defensive null checks
c6c5bfb - Fix image handling with comprehensive error checking
d5ad0a0 - Add comprehensive error handling and fix slug extraction
a2b0137 - Fix dynamic route params handling for Next.js 14+
f74c6b5 - Optimize build to reduce legacy JavaScript output
8bc8692 - Fix Sanity Studio config with fallback projectId
ceebf2a - Add fallback values for Sanity client during build
763f252 - Fix Sanity client initialization for Railway deployment
2755c16 - Fix Railway configuration - simplify toml file
ddb550b - Redesign portfolio display and add Railway deployment config
```

---

## Lessons Learned

### Next.js Server/Client Component Boundaries
- **Never pass functions** from Server to Client Components
- Pre-compute all data that requires server-side functions (like urlFor)
- Pass only serializable data (strings, numbers, arrays, objects)
- Error messages in production are hidden; check dev server logs

### Next.js 14+ Params Handling
- In Next.js 14.2+, `params` is **always a Promise** in production
- Even if it works in dev, production builds enforce Promise handling
- Use `const { slug } = await params` for clean, consistent code

### Caching Can Hide Bugs
- Next.js `.next` cache can hide Server/Client boundary violations
- Fresh builds (like Railway deploys) expose latent issues
- If "it was working before with no changes," suspect build cache

### Railway vs Vercel Differences
- Railway does fresh builds every deploy (no cache)
- More strict about Next.js conventions
- Requires proper environment variable fallbacks during build phase

---

**Session Date:** January 2, 2026
**Session Duration:** ~1.5 hours
**Status:** ✅ **FIXED & DEPLOYED**
**Deployment:** Railway - Successful
**Next Review:** Monitor for any additional edge cases with portfolio/blog pages
