'use client'

import { useEffect } from 'react'

export function DeferredStyles() {
  useEffect(() => {
    // Show below-fold content after page is interactive
    const showBelowFold = () => {
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
      window.addEventListener('DOMContentLoaded', showBelowFold)
    } else {
      showBelowFold()
    }

    return () => {
      window.removeEventListener('DOMContentLoaded', showBelowFold)
    }
  }, [])

  return null
}