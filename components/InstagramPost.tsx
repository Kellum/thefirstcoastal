'use client';

import { useState } from 'react';

interface InstagramPostProps {
  imageUrl: string;
  alt?: string;
  profilePictureUrl?: string;
  username?: string;
  displayName?: string;
  isVerified?: boolean;
  caption?: string;
  postUrl?: string;
}

export default function InstagramPost({
  imageUrl,
  alt = 'Instagram post',
  profilePictureUrl,
  username,
  displayName,
  isVerified = false,
  caption,
  postUrl,
}: InstagramPostProps) {
  const [showFullCaption, setShowFullCaption] = useState(false);

  // Truncate caption to ~125 characters if longer
  const truncatedCaption = caption && caption.length > 125
    ? caption.substring(0, 125) + '...'
    : caption;

  const finalUsername = username || displayName || 'Client';

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200">
      {/* Instagram Header */}
      <div className="p-3 border-b border-gray-200">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            {/* Profile Picture */}
            {profilePictureUrl ? (
              <div className="w-8 h-8 rounded-full overflow-hidden border-2 border-gray-200">
                <img
                  src={profilePictureUrl}
                  alt={`${finalUsername} profile`}
                  className="w-full h-full object-cover"
                />
              </div>
            ) : (
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#8DB1B6] to-[#5D878C] flex items-center justify-center text-white text-sm font-bold border-2 border-gray-200">
                {finalUsername.charAt(0).toUpperCase()}
              </div>
            )}
            {/* Username with Verified Badge */}
            <div className="flex items-center gap-1">
              <span className="font-semibold text-sm text-gray-900">
                {finalUsername}
              </span>
              {isVerified && (
                <svg
                  className="w-3.5 h-3.5 text-blue-500"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-label="Verified"
                >
                  <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                </svg>
              )}
            </div>
          </div>
          {/* Three dots menu (decorative) */}
          <button className="text-gray-600 hover:text-gray-900" aria-label="More options">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <circle cx="12" cy="5" r="1.5" />
              <circle cx="12" cy="12" r="1.5" />
              <circle cx="12" cy="19" r="1.5" />
            </svg>
          </button>
        </div>
      </div>

      {/* Post Image */}
      <div className="aspect-square overflow-hidden bg-gray-100">
        <img
          src={imageUrl}
          alt={alt}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Action Buttons */}
      <div className="p-3 space-y-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            {/* Like */}
            <button className="hover:text-gray-500 transition-colors" aria-label="Like">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </button>
            {/* Comment */}
            <button className="hover:text-gray-500 transition-colors" aria-label="Comment">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
            </button>
            {/* Share */}
            <button className="hover:text-gray-500 transition-colors" aria-label="Share">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
              </svg>
            </button>
          </div>
          {/* Bookmark */}
          <button className="hover:text-gray-500 transition-colors" aria-label="Save">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
            </svg>
          </button>
        </div>

        {/* Caption */}
        {caption && (
          <div className="text-sm">
            <span className="font-semibold mr-1">{finalUsername}</span>
            <span className="text-gray-900">
              {showFullCaption ? caption : truncatedCaption}
              {caption.length > 125 && (
                <button
                  onClick={() => setShowFullCaption(!showFullCaption)}
                  className="text-gray-500 ml-1 hover:text-gray-700"
                >
                  {showFullCaption ? 'less' : 'more'}
                </button>
              )}
            </span>
          </div>
        )}

        {/* View on Instagram link */}
        {postUrl && (
          <div className="pt-1">
            <a
              href={postUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-[#5D878C] hover:text-[#4A6C70] font-medium flex items-center gap-1"
            >
              View on Instagram
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
