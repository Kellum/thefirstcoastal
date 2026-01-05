# Instagram Integration Setup Guide

This guide will help you set up Instagram API integration to display authentic Instagram posts on your portfolio website.

## Overview

The Instagram integration allows you to:
- Display real Instagram posts with authentic styling
- Show profile pictures and usernames
- Include verified badges for verified accounts
- Display post captions
- Link to original Instagram posts

## Current Setup (Manual Mode)

Right now, you can add Instagram-looking posts **without** the API by manually entering data in Sanity:

### For Each Client Project:

1. **Go to Sanity Studio** and edit a portfolio item with "Social Media" service
2. **Fill in Instagram fields**:
   - **Instagram Username**: Enter the client's Instagram handle (without @)
   - **Instagram Profile Picture**: Upload their profile picture
   - **Instagram Verified Account**: Check if they have a blue checkmark
3. **Add Social Media Posts**:
   - Upload the post image
   - Enter the **Post Caption** (the actual text from Instagram)
   - Add **Link to Original Post** (optional - the Instagram URL)
   - Select Platform: Instagram

That's it! The posts will now display with professional Instagram styling including profile pic, username, verified badge, and caption.

---

## Advanced Setup (Instagram API - Optional)

If you want to **automatically fetch** posts from Instagram (rather than manually uploading), follow these steps:

### Step 1: Create Facebook Developer App

1. Go to [Facebook Developers](https://developers.facebook.com)
2. Click "My Apps" → "Create App"
3. Choose app type: **"Consumer"** or **"Business"**
4. Enter app details and create the app

### Step 2: Add Instagram Basic Display

1. In your app dashboard, click **"Add Product"**
2. Find **"Instagram Basic Display"** and click "Set Up"
3. Scroll to **"User Token Generator"**
4. Click **"Add or Remove Instagram Testers"**
5. Add the Instagram accounts you want to access

### Step 3: Get Access Tokens

#### For Instagram Testers:

1. Each tester must accept the invitation:
   - Go to Instagram app → Settings → Apps and Websites → Tester Invites
   - Accept the invitation

2. Generate token in Facebook Developer Console:
   - Instagram Basic Display → User Token Generator
   - Click "Generate Token" for the Instagram account
   - Authorize the app
   - **Copy the access token** (it will expire in 60 days)

### Step 4: Convert to Long-Lived Token

Short-lived tokens expire in 1 hour. Convert to long-lived (60 days):

```bash
curl -X GET "https://graph.instagram.com/access_token?grant_type=ig_exchange_token&client_secret=YOUR_APP_SECRET&access_token=SHORT_LIVED_TOKEN"
```

**Response:**
```json
{
  "access_token": "LONG_LIVED_TOKEN",
  "token_type": "bearer",
  "expires_in": 5184000
}
```

### Step 5: Store Token in Sanity

You can store the access token in Sanity (in a secure field) or use environment variables:

#### Option A: Environment Variables
Create `.env.local`:
```env
# Instagram API (optional - for auto-fetching posts)
INSTAGRAM_APP_ID=your_app_id
INSTAGRAM_APP_SECRET=your_app_secret

# Client-specific tokens (example)
INSTAGRAM_TOKEN_CLIENT1=long_lived_token_here
INSTAGRAM_TOKEN_CLIENT2=long_lived_token_here
```

#### Option B: Sanity Field (Advanced)
Add a secure field to store tokens per client in Sanity Studio.

### Step 6: Use the Instagram API Service

The Instagram API service is already created at `/lib/instagram.ts`. Example usage:

```typescript
import { getInstagramProfile, getInstagramMedia } from '@/lib/instagram';

// Fetch profile
const profile = await getInstagramProfile(accessToken);

// Fetch recent posts
const posts = await getInstagramMedia(accessToken, 12);
```

### Step 7: Token Refresh (Important!)

Long-lived tokens expire after 60 days. Refresh them before expiration:

```typescript
import { refreshLongLivedToken } from '@/lib/instagram';

const newToken = await refreshLongLivedToken(currentToken);
// Store the new token
```

Set up a cron job or scheduled task to refresh tokens every 30 days.

---

## Manual vs API Comparison

| Feature | Manual Entry | Instagram API |
|---------|-------------|---------------|
| **Setup Difficulty** | Easy | Moderate |
| **Maintenance** | Manual uploads | Auto-sync |
| **Post Captions** | Enter manually | Fetched automatically |
| **Profile Pictures** | Upload manually | Fetched automatically |
| **Cost** | Free | Free (API limits apply) |
| **Control** | Full control over what shows | Shows actual posts |
| **Token Management** | None | Must refresh every 60 days |

## Recommendations

**For most use cases**: Use the **manual entry method** described at the top of this document. It gives you:
- Full control over which posts to showcase
- No API rate limits or token management
- No dependency on Instagram's API being available
- Professional, authentic-looking results

**Use the API if**:
- You manage many client accounts
- You want posts to auto-update
- Clients frequently post and you want real-time updates

---

## Troubleshooting

### Posts look generic or missing profile pictures
- Make sure you've filled in the Instagram fields in Sanity:
  - Instagram Username
  - Instagram Profile Picture
  - Instagram Verified Account (if applicable)

### Caption not showing
- Add the caption text in the "Post Caption" field when uploading a social media post in Sanity

### Want to link to actual Instagram post
- Add the full Instagram URL in "Link to Original Post" field

---

## Questions?

For more help:
- [Instagram Basic Display API Docs](https://developers.facebook.com/docs/instagram-basic-display-api)
- [Instagram Graph API (Advanced)](https://developers.facebook.com/docs/instagram-api)
