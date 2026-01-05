/**
 * Instagram Basic Display API Service
 *
 * This service provides methods to fetch Instagram profile and media data.
 * Requires an Instagram access token for each account.
 *
 * Setup Instructions:
 * 1. Create a Facebook Developer App at https://developers.facebook.com
 * 2. Add Instagram Basic Display product
 * 3. Configure OAuth redirect URIs
 * 4. Get access tokens for each client account
 */

export interface InstagramProfile {
  id: string;
  username: string;
  account_type: 'BUSINESS' | 'MEDIA_CREATOR' | 'PERSONAL';
  media_count: number;
}

export interface InstagramMedia {
  id: string;
  caption?: string;
  media_type: 'IMAGE' | 'VIDEO' | 'CAROUSEL_ALBUM';
  media_url: string;
  permalink: string;
  timestamp: string;
  username: string;
}

interface InstagramProfileResponse {
  id: string;
  username: string;
  account_type: 'BUSINESS' | 'MEDIA_CREATOR' | 'PERSONAL';
  media_count: number;
}

interface InstagramMediaResponse {
  data: InstagramMedia[];
  paging?: {
    cursors: {
      before: string;
      after: string;
    };
    next?: string;
  };
}

/**
 * Fetch Instagram user profile information
 */
export async function getInstagramProfile(
  accessToken: string
): Promise<InstagramProfile | null> {
  try {
    const fields = 'id,username,account_type,media_count';
    const url = `https://graph.instagram.com/me?fields=${fields}&access_token=${accessToken}`;

    const response = await fetch(url, {
      next: { revalidate: 3600 } // Cache for 1 hour
    });

    if (!response.ok) {
      console.error('Instagram API error:', response.status, response.statusText);
      return null;
    }

    const data: InstagramProfileResponse = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching Instagram profile:', error);
    return null;
  }
}

/**
 * Fetch user's Instagram media (posts)
 */
export async function getInstagramMedia(
  accessToken: string,
  limit: number = 12
): Promise<InstagramMedia[]> {
  try {
    const fields = 'id,caption,media_type,media_url,permalink,timestamp,username';
    const url = `https://graph.instagram.com/me/media?fields=${fields}&limit=${limit}&access_token=${accessToken}`;

    const response = await fetch(url, {
      next: { revalidate: 3600 } // Cache for 1 hour
    });

    if (!response.ok) {
      console.error('Instagram API error:', response.status, response.statusText);
      return [];
    }

    const data: InstagramMediaResponse = await response.json();
    return data.data || [];
  } catch (error) {
    console.error('Error fetching Instagram media:', error);
    return [];
  }
}

/**
 * Fetch a specific Instagram media item by ID
 */
export async function getInstagramMediaById(
  mediaId: string,
  accessToken: string
): Promise<InstagramMedia | null> {
  try {
    const fields = 'id,caption,media_type,media_url,permalink,timestamp,username';
    const url = `https://graph.instagram.com/${mediaId}?fields=${fields}&access_token=${accessToken}`;

    const response = await fetch(url, {
      next: { revalidate: 3600 } // Cache for 1 hour
    });

    if (!response.ok) {
      console.error('Instagram API error:', response.status, response.statusText);
      return null;
    }

    const data: InstagramMedia = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching Instagram media by ID:', error);
    return null;
  }
}

/**
 * Check if an access token is still valid
 */
export async function validateInstagramToken(
  accessToken: string
): Promise<boolean> {
  try {
    const url = `https://graph.instagram.com/me?fields=id&access_token=${accessToken}`;
    const response = await fetch(url);
    return response.ok;
  } catch (error) {
    console.error('Error validating Instagram token:', error);
    return false;
  }
}

/**
 * Exchange short-lived token for long-lived token (60 days)
 * Should be called server-side only
 */
export async function exchangeForLongLivedToken(
  shortLivedToken: string,
  appId: string,
  appSecret: string
): Promise<string | null> {
  try {
    const url = `https://graph.instagram.com/access_token?grant_type=ig_exchange_token&client_secret=${appSecret}&access_token=${shortLivedToken}`;

    const response = await fetch(url);

    if (!response.ok) {
      console.error('Token exchange error:', response.status, response.statusText);
      return null;
    }

    const data = await response.json();
    return data.access_token || null;
  } catch (error) {
    console.error('Error exchanging token:', error);
    return null;
  }
}

/**
 * Refresh a long-lived token (extends expiration by 60 days)
 * Should be called before token expires
 */
export async function refreshLongLivedToken(
  accessToken: string
): Promise<string | null> {
  try {
    const url = `https://graph.instagram.com/refresh_access_token?grant_type=ig_refresh_token&access_token=${accessToken}`;

    const response = await fetch(url);

    if (!response.ok) {
      console.error('Token refresh error:', response.status, response.statusText);
      return null;
    }

    const data = await response.json();
    return data.access_token || null;
  } catch (error) {
    console.error('Error refreshing token:', error);
    return null;
  }
}
