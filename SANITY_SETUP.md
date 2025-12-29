# Sanity CMS Setup Instructions

## Quick Start

Your Sanity CMS is almost ready! Follow these steps to complete the setup:

---

## Step 1: Create a Sanity Account and Project

1. **Visit Sanity.io:**
   - Go to [https://www.sanity.io/](https://www.sanity.io/)
   - Click "Get started for free"

2. **Sign up:**
   - Sign up with Google, GitHub, or email
   - Complete the registration process

3. **Create a new project:**
   - Once logged in, you'll be taken to the Sanity dashboard
   - Click "Create new project"
   - Give it a name (e.g., "The First Coastal")
   - Choose a dataset name (default is "production")
   - Copy your **Project ID** (you'll need this next!)

---

## Step 2: Configure Environment Variables

1. **Open the `.env.local` file** in your project root

2. **Replace the placeholder values:**
   ```env
   NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id_here  # ← Replace with your actual Project ID
   NEXT_PUBLIC_SANITY_DATASET=production                # ← Use 'production' or your custom dataset name
   NEXT_PUBLIC_SANITY_API_VERSION=2024-01-01
   ```

3. **Save the file**

---

## Step 3: Restart Your Development Server

Since you updated environment variables, you need to restart the dev server:

1. **Stop the current server** (if running):
   - Press `Ctrl + C` in the terminal

2. **Start it again:**
   ```bash
   npm run dev
   ```

---

## Step 4: Access the Sanity Studio

1. **Open your browser and navigate to:**
   ```
   http://localhost:3001/studio
   ```
   (or whatever port your dev server is running on)

2. **Log in** with the same account you used to create the Sanity project

3. **Authorize the Studio** when prompted

---

## Step 5: Add Your First Content

### Add Services (Homepage)

1. In the Studio, click **"Service"** from the left sidebar
2. Click **"Create new Service"**
3. Fill in:
   - **Service Title**: e.g., "Web Design"
   - **Description**: e.g., "Beautiful, user-focused designs that captivate and convert."
   - **Display Order**: 0 (this determines the order they appear on the homepage)
4. Click **"Publish"**
5. Repeat for other services (Development, SEO, Social Media, etc.)

### Add Portfolio Items (Work Page)

1. Click **"Portfolio Item"** from the left sidebar
2. Click **"Create new Portfolio Item"**
3. Fill in:
   - **Project Title**: e.g., "Coastal Real Estate Website"
   - **Slug**: Click "Generate" to auto-create from title
   - **Client Name**: e.g., "Coastal Realty Inc."
   - **Description**: Describe the project
   - **Project URL**: (optional) Link to live site
   - **Completed Date**: When the project was finished
   - **Project Images**: Upload screenshots or project images
   - **Tags**: Add tags like "Next.js", "Web Design", "SEO", etc.
   - **Featured**: Toggle on to highlight this project
4. Click **"Publish"**

### Add Blog Posts (Blog Page)

1. Click **"Blog Post"** from the left sidebar
2. Click **"Create new Blog Post"**
3. Fill in:
   - **Title**: Your blog post title
   - **Slug**: Click "Generate"
   - **Author**: Your name or team member's name
   - **Published Date**: When to publish
   - **Excerpt**: Short summary (max 200 characters)
   - **Featured Image**: Upload a header image
   - **Content**: Write your blog post using the rich text editor
   - **Category**: Select from Web Design, Development, SEO, etc.
   - **Tags**: Add relevant tags
4. Click **"Publish"**

---

## Step 6: View Your Content on the Site

Once you've published content in the Studio:

1. **Homepage** (`http://localhost:3001/`) - Shows services from CMS
2. **Work Page** (`http://localhost:3001/work`) - Shows portfolio items
3. **Blog Page** (`http://localhost:3001/blog`) - Shows blog posts
4. **Individual Blog** (`http://localhost:3001/blog/[slug]`) - Click any blog post to view

The pages will automatically fetch and display your Sanity content!

---

## Troubleshooting

### "No services/portfolio/blog items found"

**Solution:** You haven't added content yet in the Studio. Follow Step 5 to add content.

### "Failed to fetch content" or CORS errors

**Solution:**
1. Make sure your `.env.local` has the correct Project ID
2. Restart your dev server after changing environment variables
3. Check that you're logged into Sanity in the Studio

### Studio won't load or shows authentication error

**Solution:**
1. Visit [https://www.sanity.io/manage](https://www.sanity.io/manage)
2. Select your project
3. Go to **Settings** → **API** → **CORS Origins**
4. Add `http://localhost:3001` (or your dev server URL)
5. Check both "Allow credentials" boxes
6. Save and refresh the Studio

### Images not displaying

**Solution:**
1. Make sure you uploaded images in the Studio
2. Check that the `@sanity/image-url` package is installed
3. Verify the `urlFor()` function is being used correctly

---

## What's Next?

### Content Types Available:
- ✅ **Services** - Displayed on homepage
- ✅ **Portfolio Items** - Displayed on /work page with filtering
- ✅ **Blog Posts** - Displayed on /blog page and individual post pages

### Features Implemented:
- ✅ Embedded Sanity Studio at `/studio`
- ✅ Content-driven homepage services section
- ✅ Portfolio items with tag-based filtering
- ✅ Blog listing and individual post pages
- ✅ Responsive design and animations
- ✅ Fallback content when CMS is empty

### Future Enhancements (Optional):
- Add Portable Text renderer for rich blog content formatting
- Add image galleries for portfolio items
- Add author profiles for blog posts
- Add categories for portfolio filtering
- Add search functionality for blog
- Add related posts section on blog detail pages

---

## Deployment

When you're ready to deploy to production (Vercel, Netlify, etc.):

1. **Add environment variables** to your hosting platform:
   - `NEXT_PUBLIC_SANITY_PROJECT_ID`
   - `NEXT_PUBLIC_SANITY_DATASET`
   - `NEXT_PUBLIC_SANITY_API_VERSION`

2. **Update CORS settings** in Sanity:
   - Go to [https://www.sanity.io/manage](https://www.sanity.io/manage)
   - Select your project → Settings → API → CORS Origins
   - Add your production URL (e.g., `https://thefirstcoastal.com`)
   - Enable credentials

3. **Deploy your site** and the Studio will be accessible at:
   ```
   https://yourdomain.com/studio
   ```

---

## Resources

- [Sanity Documentation](https://www.sanity.io/docs)
- [Sanity + Next.js Guide](https://www.sanity.io/guides/sanity-nextjs-app-router)
- [Sanity Schema Types](https://www.sanity.io/docs/schema-types)
- [Next.js Documentation](https://nextjs.org/docs)

---

## Support

If you encounter any issues:
1. Check the troubleshooting section above
2. Review the Sanity documentation
3. Check the `/ARCHITECTURE.md` file for system overview
4. Verify your `.env.local` configuration

Happy content managing! 🎉
