'use client'

import { useEffect } from 'react'

export function DeferredStyles() {
  useEffect(() => {
    // Load main styles after critical render
    const loadStyles = () => {
      import('@/styles/globals.css')
      
      // Show below-fold content after styles load
      setTimeout(() => {
        document.querySelectorAll('.below-fold').forEach((el) => {
          if (el instanceof HTMLElement) {
            el.style.visibility = 'visible'
          }
        })
      }, 100)
    }

    // Load after the page is interactive
    if (document.readyState === 'loading') {
      window.addEventListener('DOMContentLoaded', loadStyles)
    } else {
      loadStyles()
    }

    return () => {
      window.removeEventListener('DOMContentLoaded', loadStyles)
    }
  }, [])

  return null
}