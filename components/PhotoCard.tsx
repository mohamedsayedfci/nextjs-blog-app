'use client'

import { useState } from 'react'

type PhotoCardProps = {
  title: string
  thumbnailUrl: string
  url: string
}

export default function PhotoCard({ title, thumbnailUrl, url }: PhotoCardProps) {
  const [error, setError] = useState(false)

  return (
    <div className="card bg-base-100 shadow-md hover:shadow-xl transition rounded-xl overflow-hidden">
      <figure className="w-full h-40 bg-base-200 flex items-center justify-center">
        {error ? (
          <div className="flex flex-col items-center justify-center text-gray-400">
            {/* fallback icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-10 w-10"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 16l4-4-4-4m6 8l4-4-4-4m6 8l4-4-4-4"
              />
            </svg>
            <span className="text-xs mt-1">No Image</span>
          </div>
        ) : (
          <img
            src={thumbnailUrl}
            alt={title}
            className="w-full h-40 object-cover"
            onError={() => setError(true)}
          />
        )}
      </figure>
      <div className="card-body p-4">
        <h3 className="text-sm font-medium line-clamp-2">{title}</h3>
        <div className="card-actions mt-2">
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary btn-sm"
          >
            View Full
          </a>
        </div>
      </div>
    </div>
  )
}
