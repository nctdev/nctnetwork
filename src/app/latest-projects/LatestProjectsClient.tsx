"use client"

import { useEffect } from "react"

export default function LatestProjectsClient() {
  useEffect(() => {
    // Redirect to homepage with projects section
    window.location.replace('/#latest-projects')
  }, [])

  return (
    <div className="flex items-center justify-center min-h-screen bg-background dark:bg-background">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-500 mx-auto mb-4"></div>
        <p className="text-gray-600 dark:text-gray-400">Redirecting to projects section...</p>
      </div>
    </div>
  )
}
