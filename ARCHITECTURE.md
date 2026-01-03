# The First Coastal - Architecture Documentation

## Overview
The First Coastal is a business website built with modern web technologies, designed to showcase portfolio work, publish blog content, and eventually manage client relationships through a custom admin dashboard.

---

## Tech Stack

### Frontend (Main Site)
- **Next.js 14.2.21** - React framework with App Router, SSR/SSG capabilities
- **React 18.3.1** - UI library
- **TypeScript 5.7.2** - Type safety and better developer experience
- **Tailwind CSS 3.4.17** - Utility-first CSS framework
- **Framer Motion 11.11.17** - Animation library

### Content Management
- **Sanity.io** - Headless CMS for portfolio items, blog posts, and public-facing content
- **Embedded Sanity Studio** - CMS editor interface accessible at `/studio` route

---

## System Architecture

### Current Setup (Phase 1)

```
┌─────────────────────────────────────────────────────────┐
│   thefirstcoastal.com                                   │
│   (Next.js App)                                         │
│                                                         │
│   Public Routes:                                        │
│   ├── / (home)                                          │
│   ├── /about                                            │
│   ├── /work (portfolio)                                 │
│   ├── /blog (coming soon)                               │
│   ├── /faq                                              │
│   └── /contact                                          │
│                                                         │
│   CMS Route:                                            │
│   └── /studio (Sanity Studio - content editor)         │
│                                                         │
│   Fetches content from ↓                                │
└─────────────────────────────────────────────────────────┘
                         ↓
┌─────────────────────────────────────────────────────────┐
│   Sanity Cloud (sanity.io)                              │
│   - Portfolio items database                            │
│   - Blog posts database                                 │
│   - Services database                                   │
│   - Media assets (images, videos)                       │
└─────────────────────────────────────────────────────────┘
```

### Future Setup (Phase 2 - Admin Dashboard)

```
┌─────────────────────────────────────────────────────────┐
│   admin.thefirstcoastal.com                             │
│   (Separate Next.js App + Supabase)                     │
│                                                         │
│   Features:                                             │
│   ├── Client management (profiles, contacts)           │
│   ├── Task/Project tracking (kanban, timelines)        │
│   ├── Team collaboration (roles, permissions)          │
│   ├── Client portal (login, view project status)       │
│   ├── Appointment scheduling                            │
│   └── Service delivery tracking                        │
│                                                         │
│   Uses ↓                                                │
└─────────────────────────────────────────────────────────┘
                         ↓
┌─────────────────────────────────────────────────────────┐
│   Supabase                                              │
│   - PostgreSQL database (clients, tasks, projects)     │
│   - Authentication (team + client logins)               │
│   - Row-level security (data isolation)                │
│   - Real-time subscriptions (live updates)             │
└─────────────────────────────────────────────────────────┘
```

---

## Design Decisions

### Why Sanity CMS?
**Requirements:**
- Easy for non-technical content editors
- Cost-effective (free tier: 3 users, 10k documents, 500k API requests/month)
- Quick setup with Next.js
- Managed hosting (no infrastructure to maintain)

**Chosen Solution:** Sanity.io with embedded studio
- Beautiful, intuitive content editing interface
- Real-time collaboration and preview
- Flexible content modeling with schemas
- Excellent Next.js integration
- Studio embedded at `/studio` route (single deployment)

**Alternative Considered:** Payload CMS (more control, self-hosted) - deferred for simplicity

### Why Separate CMS and Admin Dashboard?
**CMS (Sanity):** Public-facing content - portfolio, blog, marketing
**Admin Dashboard:** Internal business operations - clients, tasks, team

**Rationale for Separation:**
- **Clear separation of concerns** - Marketing vs. Operations
- **Independent deployments** - Update one without affecting the other
- **Simpler architecture** - Easier to maintain and reason about
- **Different access patterns** - Public content vs. private business data
- **Can integrate later if needed** - Via APIs, but not required initially

**Integration Considerations (Deferred):**
If we connect them in the future:
- Pros: Publish portfolio items directly from admin when projects complete, link case studies to clients
- Cons: More complex, tighter coupling, harder to swap systems
- Decision: Start separate, add integration only if workflow demands it

### Why Embedded Studio vs. Separate Deploy?
**Option 1 (Rejected):** Deploy studio to `studio.thefirstcoastal.com`
- Requires subdomain DNS setup
- Two separate deployments to manage
- More complex infrastructure

**Option 2 (Chosen):** Embed studio at `/studio` route
- Single codebase and deployment
- Simpler DNS and hosting
- Can always split later if needed
- Studio lives at `thefirstcoastal.com/studio`

### Why Next.js + Supabase for Admin Dashboard?
**Requirements:**
- Client portal with login (clients view their project status)
- Team collaboration with roles/permissions
- Task tracking and project management
- Real-time updates
- Cost-effective for small team

**Chosen Solution (Future):** Next.js + Supabase
- **Built-in authentication** - User management out of the box
- **PostgreSQL database** - Robust relational data for clients/tasks
- **Row-level security** - Automatically isolate client data
- **Real-time capabilities** - Live task updates, notifications
- **Free tier** - 500MB DB, 50k MAU, generous limits
- **Familiar stack** - Same framework as main site (Next.js)

**Alternatives Considered:**
- Next.js + Clerk + PlanetScale + Prisma (more control, higher cost)
- Next.js + NextAuth + self-hosted PostgreSQL (more setup, full control)

---

## Content Model

### Portfolio Items
```typescript
{
  title: string
  slug: string
  description: text
  client: string
  projectUrl?: string
  completedDate: date
  images: image[]
  tags: string[]
  featured: boolean
}
```

### Blog Posts
```typescript
{
  title: string
  slug: string
  author: string
  publishedDate: date
  content: richText
  excerpt: text
  featuredImage: image
  category: string
  tags: string[]
}
```

### Services
```typescript
{
  title: string
  description: text
  icon?: image
  order: number
}
```

---

## Deployment Strategy

### Phase 1 (Current)
**Main Site + Sanity Studio:**
- Platform: Railway
- Deploy: Single deployment
- URL: `thefirstcoastal.com`
- CMS: `thefirstcoastal.com/studio`
- Backend: Sanity Cloud (managed)

### Phase 2 (Future)
**Admin Dashboard:**
- Platform: Railway
- Deploy: Separate deployment
- URL: `admin.thefirstcoastal.com`
- Backend: Supabase (managed)

---

## Workflow Examples

### Adding a Portfolio Item
1. Navigate to `thefirstcoastal.com/studio`
2. Log in with Google/GitHub/Email (Sanity auth)
3. Click "Portfolio Items" → "Create New"
4. Fill in:
   - Project title
   - Client name
   - Description
   - Upload images
   - Add tags
   - Set featured status
5. Click "Publish"
6. Content appears on `/work` page automatically

### Publishing a Blog Post
1. Navigate to `thefirstcoastal.com/studio`
2. Click "Blog Posts" → "Create New"
3. Write content using rich text editor
4. Add featured image
5. Set category and tags
6. Click "Publish"
7. Post appears on `/blog` page

### Future: Managing a Client Project (Admin Dashboard)
1. Navigate to `admin.thefirstcoastal.com`
2. Log in (Supabase auth)
3. Go to "Clients" → Select client
4. Create new project/task
5. Assign team members
6. Update status (client can see in their portal)
7. Optionally: When complete, publish to portfolio via API (if integrated)

---

## Environment Variables

### Required for Sanity
```env
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2024-01-01
SANITY_API_TOKEN=your_token (for write operations)
```

### Future: Required for Admin Dashboard
```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key
```

---

## Development Roadmap

### ✅ Phase 0: Foundation (Complete)
- Next.js setup
- Tailwind CSS configuration
- Basic pages (home, about, work, FAQ, contact)
- Custom ocean color palette

### 🔄 Phase 1: Content Management (In Progress)
- Sanity CMS integration
- Embedded studio setup
- Portfolio items schema and integration
- Blog posts schema and integration
- Services schema and integration

### 📋 Phase 2: Admin Dashboard (Future)
- Separate Next.js app on subdomain
- Supabase setup (database, auth)
- Client management features
- Task/project tracking (kanban board)
- Team collaboration features
- Client portal login and views
- Appointment scheduling
- Service delivery tracking

### 🔮 Phase 3: Advanced Features (Future)
- Potential CMS ↔ Admin integration (if needed)
- Analytics and reporting
- Email notifications
- Invoice generation
- File sharing with clients

---

## Notes & Decisions Log

### 2024-12-19: Architecture Planning
- Decided on Sanity CMS for portfolio/blog content
- Chose embedded studio over separate deployment
- Planned separate admin dashboard for future (Next.js + Supabase)
- Decided to keep CMS and admin separate (can integrate later if needed)
- Prioritized main site completion before admin dashboard development

---

## Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Sanity Documentation](https://www.sanity.io/docs)
- [Sanity + Next.js Guide](https://www.sanity.io/guides/sanity-nextjs-app-router)
- [Supabase Documentation](https://supabase.com/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
