"use client"

import { useTheme } from "next-themes"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { MoonIcon, SunIcon } from 'lucide-react'
import { Switch } from "@/components/ui/switch"
import Link from 'next/link'
import { motion } from "framer-motion"

export default function Home() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [currentYear] = useState(new Date().getFullYear())

  // Prevent hydration mismatch
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }

  return (
    <div className="min-h-screen flex flex-col dark:bg-gray-900 dark:text-gray-100 bg-gray-100 text-gray-900">
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="border-b dark:border-gray-800 border-gray-300 p-4"
      >
        <div className="container mx-auto flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold">
            <span className="text-orange-500">NCT</span>
            <span className="dark:text-white text-gray-900">Network</span>
          </Link>
          <nav>
            <ul className="flex space-x-4">
              <li><Link href="/" className="hover:text-orange-500 transition-colors">Home</Link></li>
              <li><Link href="/latest-projects" className="hover:text-orange-500 transition-colors">Latest Projects</Link></li>
            </ul>
          </nav>
        </div>
      </motion.header>

      <motion.main
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="flex-grow container mx-auto px-4 py-4"
      >
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="border-[3px] border-orange-500 p-4 md:p-6 bg-white dark:bg-gray-800 shadow-lg"
          style={{ borderRadius: '6px' }}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="dark:text-white text-gray-900">Welcome to </span>
            <span className="text-orange-500">NCT</span>
            <span className="dark:text-white text-gray-900">Network</span>
          </h1>
          <p className="text-xl mb-8">
            This page is to showcase our work in the IT, Web & Network Industry. Feel free to take a look at some of our latest projects.
          </p>
          <Link href="/latest-projects">
            <Button className="bg-orange-500 hover:bg-orange-600 text-white">
              Latest Projects →
            </Button>
          </Link>
        </motion.div>
      </motion.main>

      <motion.footer
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="border-t dark:border-gray-800 border-gray-300 p-4 mt-4"
      >
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="text-sm dark:text-gray-500 text-gray-600 mb-4 md:mb-0">
            © {currentYear} NCTNetwork. All rights reserved.
          </div>
          <div className="flex items-center space-x-2 bg-gray-300 dark:bg-gray-700 rounded-full p-1">
            <SunIcon className="h-5 w-5 dark:text-gray-400 text-orange-500" />
            <Switch
              checked={theme === 'dark'}
              onCheckedChange={toggleTheme}
              className="data-[state=checked]:bg-orange-500 data-[state=unchecked]:bg-gray-200 border-2 border-gray-400"
              aria-label="Toggle dark mode"
            />
            <MoonIcon className="h-5 w-5 dark:text-orange-500 text-gray-400" />
          </div>
        </div>
      </motion.footer>
    </div>
  )
}
