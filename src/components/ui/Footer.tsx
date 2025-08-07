"use client"

import { useTheme } from "next-themes"
import { useState, useEffect } from "react"
import { Switch } from "@/components/ui/switch"
import { MoonIcon, SunIcon } from 'lucide-react'
import { motion } from "framer-motion"

export function Footer() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [currentYear] = useState(new Date().getFullYear())

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }

  return (
    <motion.footer
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.6 }}
      className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm border-t border-white/20 dark:border-slate-800/20"
    >
      <div className="container mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-center md:text-left">
            <div className="text-2xl font-bold mb-2">
              <span className="text-[#f97316]">NCT</span>
              <span className="text-slate-700 dark:text-slate-300">Network</span>
            </div>
            <p className="text-sm text-slate-500 dark:text-slate-400">
              © {currentYear} NCTNetwork. Crafting digital excellence.
            </p>
          </div>

          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-3">
              <span className="text-sm text-slate-600 dark:text-slate-400">Theme</span>
              <div className="flex items-center space-x-2 bg-slate-100 dark:bg-slate-800 rounded-full p-1">
                <SunIcon className="h-4 w-4 text-slate-600 dark:text-slate-400" />
                <Switch
                  checked={theme === 'dark'}
                  onCheckedChange={toggleTheme}
                  className="data-[state=checked]:bg-[#f97316] data-[state=unchecked]:bg-slate-300"
                  aria-label="Toggle dark mode"
                />
                <MoonIcon className="h-4 w-4 text-slate-600 dark:text-slate-400" />
              </div>
            </div>
            
            <div className="hidden md:flex items-center space-x-4">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                className="text-slate-600 dark:text-slate-400 hover:text-[#f97316] transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                </svg>
              </motion.button>
              
              <motion.button 
                whileHover={{ scale: 1.05 }}
                className="text-slate-600 dark:text-slate-400 hover:text-[#f97316] transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.097.118.11.22.081.402-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.746-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001.012.001z"/>
                </svg>
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </motion.footer>
  )
}
