"use client"

import { useTheme } from "next-themes"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { MoonIcon, SunIcon } from 'lucide-react'
import Link from 'next/link'
import { motion } from "framer-motion"

export default function HomeClient() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])
  if (!mounted) return null
  return (
    <div className="min-h-screen flex flex-col dark:bg-gray-900 dark:text-gray-100 bg-gray-100 text-gray-900">
      <motion.header initial={{ y: -20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.5 }} className="border-b dark:border-gray-800 border-gray-300 p-4">
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
      <motion.main initial={{ y: 40, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.5, delay: 0.2 }} className="flex-grow container mx-auto px-4 py-4">
        <motion.div initial={{ y: 40, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.5, delay: 0.3 }} className="border-[3px] border-orange-500 p-4 md:p-6 bg-white dark:bg-gray-800 shadow-lg" style={{ borderRadius: '6px' }}>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="dark:text-white text-gray-900">Welcome to </span>
            <span className="text-orange-500">NCT Network</span>
          </h1>
          <p className="mb-6 text-lg dark:text-gray-300 text-gray-700">IT, Web & Network Developments</p>
          <Button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} variant="outline" className="mb-4">
            {theme === 'dark' ? <SunIcon className="w-5 h-5" /> : <MoonIcon className="w-5 h-5" />}
            <span className="ml-2">Toggle Theme</span>
          </Button>
        </motion.div>
      </motion.main>
    </div>
  )
}
