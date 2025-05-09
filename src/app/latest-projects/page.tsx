"use client"

import { useTheme } from "next-themes"
import { useState, useEffect } from "react"
import { MoonIcon, SunIcon } from 'lucide-react'
import { Switch } from "@/components/ui/switch"
import Link from 'next/link'
import { motion } from "framer-motion"
import Image from 'next/image'

const projects = [
  {
    title: "whiskyonthe.rocks",
    description: "whiskyonthe.rocks is a whisky blog with a focus on reviews of single malt scotch whisky.",
    technology: "Wordpress",
    year: "2024",
    link: "https://whiskyonthe.rocks",
    image: "/images/whiskyontherocks.png.webp",
    imageAlt: "Screenshot of whiskyonthe.rocks website showing whisky bottle reviews and tasting notes",
    status: "completed"
  },
  {
    title: "Scotch Whisky Map",
    description: "An interactive map of Scottish whisky distilleries with detailed information and locations.",
    technology: "Next.js & Leaflet",
    year: "2024",
    link: "https://scotch-whisky-map-v2.vercel.app/",
    image: "/images/whisky-map-clip.png",
    imageAlt: "Interactive map of Scottish whisky distilleries with pins marking different locations",
    status: "completed"
  },
  {
    title: "Coming Soon!",
    description: "More projects coming soon!",
    year: "2024",
    status: "coming-soon"
  }
]

export default function LatestProjects() {
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
            <span className="dark:text-white text-gray-900">Latest </span>
            <span className="text-orange-500">Projects</span>
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="p-4 rounded-xl dark:bg-gray-700 bg-gray-50 shadow-lg border border-gray-200 dark:border-gray-600"
              >
                {project.status === "completed" ? (
                  <>
                    <h3 className="text-xl font-bold mb-2 dark:text-white text-gray-900">
                      {project.title}
                    </h3>
                    <a href={project.link} rel="noopener" title={`Visit ${project.title} - ${project.description}`} target="_blank">
                      <Image
                        src={project.image || "/images/placeholder.png"}
                        alt={project.imageAlt || `${project.title} screenshot`}
                        width={400}
                        height={200}
                        className="rounded-md mb-4 cursor-pointer"
                      />
                    </a>
                    <a href={project.link} className="text-sm text-orange-500 hover:text-orange-600 mb-2 block" rel="noopener" target="_blank">Visit {project.title} →</a>
                    <p className="text-sm mb-4 dark:text-gray-300 text-gray-600">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-3">
                      <span className="px-3 py-1 text-xs rounded-lg bg-orange-500 text-white font-medium">
                        {project.technology}
                      </span>
                    </div>
                    <p className="text-sm dark:text-gray-400 text-gray-500">
                      Year: {project.year}
                    </p>
                  </>
                ) : (
                  <>
                    <h3 className="text-xl font-bold mb-2 dark:text-white text-gray-900">
                      {project.title}
                    </h3>
                    <div className="rounded-md mb-4 w-full h-[200px] flex items-center justify-center bg-gray-200 dark:bg-gray-800">
                      <Image 
                        src="/images/placeholder.png" 
                        alt="Coming soon project placeholder"
                        width={32} 
                        height={32} 
                      />
                    </div>
                    <p className="text-sm mb-4 dark:text-gray-300 text-gray-600">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-3">
                      <span className="px-3 py-1 text-xs rounded-lg bg-orange-500 text-white font-medium">
                        Coming Soon
                      </span>
                    </div>
                    <p className="text-sm dark:text-gray-400 text-gray-500">
                      Year: {project.year}
                    </p>
                  </>
                )}
              </motion.div>
            ))}
          </div>
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
