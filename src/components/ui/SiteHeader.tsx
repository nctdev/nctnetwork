"use client"

import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'

export function SiteHeader() {
  const pathname = usePathname()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  
  const scrollToSection = (sectionId: string, e: React.MouseEvent) => {
    e.preventDefault()
    
    // Close mobile menu when navigating
    setIsMobileMenuOpen(false)
    
    // If on homepage, scroll to section
    if (pathname === '/') {
      const element = document.getElementById(sectionId)
      if (element) {
        const headerHeight = 80 // Account for fixed header
        const elementPosition = element.offsetTop - headerHeight
        window.scrollTo({
          top: elementPosition,
          behavior: 'smooth'
        })
      }
    } else {
      // If on another page, navigate to homepage with hash
      window.location.href = `/#${sectionId}`
    }
  }

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-white/20 dark:border-slate-800/20 shadow-lg"
      role="banner"
    >
      <div className="nav-container">
        <div className="flex justify-between items-center w-full">
          <motion.button 
            onClick={(e) => scrollToSection('home', e)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="logo"
            aria-label="NCT Network - Go to homepage"
          >
            <span className="logo-accent">NCT</span>
            <span className="logo-text">Network</span>
          </motion.button>
          
          <nav className="hidden md:block" role="navigation" aria-label="Main navigation">
            <ul className="flex space-x-8">
              <li>
                <motion.button 
                  onClick={(e) => scrollToSection('home', e)}
                  whileHover={{ y: -2 }}
                  className="relative px-4 py-2 text-slate-700 dark:text-slate-300 hover:text-[#f97316] transition-all duration-300 font-medium group"
                  aria-label="Navigate to Home section"
                >
                  Home
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#f97316] group-hover:w-full transition-all duration-300"></span>
                </motion.button>
              </li>
              <li>
                <motion.button 
                  onClick={(e) => scrollToSection('latest-projects', e)}
                  whileHover={{ y: -2 }}
                  className="relative px-4 py-2 text-slate-700 dark:text-slate-300 hover:text-[#f97316] transition-all duration-300 font-medium group"
                  aria-label="Navigate to Projects section"
                >
                  Projects
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#f97316] group-hover:w-full transition-all duration-300"></span>
                </motion.button>
              </li>
            </ul>
          </nav>

          {/* Mobile menu button */}
          <motion.button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            whileTap={{ scale: 0.95 }}
            className="md:hidden p-2 text-slate-700 dark:text-slate-300"
            aria-label={isMobileMenuOpen ? "Close mobile menu" : "Open mobile menu"}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-navigation"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </motion.button>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden overflow-hidden border-t border-white/20 dark:border-slate-800/20"
              id="mobile-navigation"
              role="navigation"
              aria-label="Mobile navigation"
            >
              <div className="px-6 py-4 space-y-4">
                <motion.button 
                  onClick={(e) => scrollToSection('home', e)}
                  whileTap={{ scale: 0.95 }}
                  className="block w-full text-left py-2 text-slate-700 dark:text-slate-300 hover:text-[#f97316] transition-colors font-medium"
                  aria-label="Navigate to Home section"
                >
                  Home
                </motion.button>
                <motion.button 
                  onClick={(e) => scrollToSection('latest-projects', e)}
                  whileTap={{ scale: 0.95 }}
                  className="block w-full text-left py-2 text-slate-700 dark:text-slate-300 hover:text-[#f97316] transition-colors font-medium"
                  aria-label="Navigate to Projects section"
                >
                  Projects
                </motion.button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  )
}
