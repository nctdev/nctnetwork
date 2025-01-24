"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { MoonIcon, SunIcon } from 'lucide-react'
import { Switch } from "@/components/ui/switch"
import Link from 'next/link'

export default function Page() {
  const [isDarkMode, setIsDarkMode] = useState(true)
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear())

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode)
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentYear(new Date().getFullYear())
    }, 1000 * 60 * 60) // Check every hour

    return () => clearInterval(interval)
  }, [])

  return (
    <div className={`min-h-screen flex flex-col ${isDarkMode ? 'bg-gray-900 text-gray-100' : 'bg-gray-100 text-gray-900'}`}>
      <header className={`border-b ${isDarkMode ? 'border-gray-800' : 'border-gray-300'} p-4`}>
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-2xl font-bold">
            <span className="text-orange-500">NCT</span>
            <span className={isDarkMode ? 'text-white' : 'text-gray-900'}>Network</span>
          </div>
          <nav>
            <ul className="flex space-x-4">
              <li><Link href="/" className="hover:text-orange-500 transition-colors">Home</Link></li>
              <li><Link href="/latest-projects" className="hover:text-orange-500 transition-colors">Latest Projects</Link></li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="flex-grow container mx-auto p-4 md:p-8">
        <div className={`border-4 border-orange-500 rounded-lg p-6 md:p-12 ${
          isDarkMode 
            ? 'bg-gray-800' 
            : 'bg-gradient-to-br from-gray-50 via-gray-100 to-gray-200'
        }`}>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            <span className={isDarkMode ? 'text-white' : 'text-gray-900'}>Welcome to </span>
            <span className="text-orange-500">NCT</span>
            <span className={isDarkMode ? 'text-white' : 'text-gray-900'}>Network</span>
          </h1>
          <p className="text-xl mb-8">
            This page is to showcase our work in the IT, Web & Network Industry. Feel free to take a look at some of our latest projects.
          </p>
          <Link href="/latest-projects">
            <Button className="bg-orange-500 hover:bg-orange-600 text-white">
              Latest Projects
            </Button>
          </Link>
        </div>
      </main>

      <footer className={`border-t ${isDarkMode ? 'border-gray-800' : 'border-gray-300'} p-4 mt-8`}>
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className={`text-sm ${isDarkMode ? 'text-gray-500' : 'text-gray-600'} mb-4 md:mb-0`}>
            © {currentYear} NCTNetwork. All rights reserved.
          </div>
          <div className="flex space-x-4 items-center">
            <a href="#" className={`${isDarkMode ? 'text-gray-500' : 'text-gray-600'} hover:text-orange-500 transition-colors`}>Privacy Policy</a>
            <div className="flex items-center space-x-2 bg-gray-300 dark:bg-gray-700 rounded-full p-1">
              <SunIcon className={`h-5 w-5 ${isDarkMode ? 'text-gray-400' : 'text-orange-500'}`} />
              <Switch
                checked={isDarkMode}
                onCheckedChange={toggleTheme}
                className="data-[state=checked]:bg-orange-500 data-[state=unchecked]:bg-gray-200 border-2 border-gray-400"
                aria-label="Toggle dark mode"
              />
              <MoonIcon className={`h-5 w-5 ${isDarkMode ? 'text-orange-500' : 'text-gray-400'}`} />
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}