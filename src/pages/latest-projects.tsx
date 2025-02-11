import { useTheme } from "next-themes"
import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { MoonIcon, SunIcon } from 'lucide-react'
import { Switch } from "@/components/ui/switch"
import Link from 'next/link'

const projects = [
  {
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce solution with React and Node.js",
    tech: ["React", "Node.js", "MongoDB", "Stripe"],
    year: "2024"
  },
  {
    title: "Network Infrastructure Upgrade",
    description: "Complete network overhaul for a manufacturing facility",
    tech: ["Cisco", "VLANs", "Security", "WiFi 6"],
    year: "2023"
  },
  {
    title: "Cloud Migration Project",
    description: "Migration of legacy systems to cloud infrastructure",
    tech: ["AWS", "Docker", "Kubernetes", "CI/CD"],
    year: "2023"
  }
]

export default function LatestProjects() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [currentYear] = useState(new Date().getFullYear())

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
        className="flex-grow container mx-auto p-4 md:p-8"
      >
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
<<<<<<< HEAD
          className="border-[3px] border-orange-500 p-6 md:p-12 bg-white dark:bg-gray-800 shadow-lg overflow-hidden"
          style={{ borderRadius: '6px' }}
=======
          className="border-4 border-orange-500 rounded-xl p-6 md:p-12 bg-white dark:bg-gray-800 shadow-lg"
>>>>>>> eb2fef9 (v1.0.11)
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-8">
            <span className="dark:text-white text-gray-900">Latest </span>
            <span className="text-orange-500">Projects</span>
          </h1>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                className="p-6 rounded-xl dark:bg-gray-700 bg-gray-50 shadow-lg border border-gray-200 dark:border-gray-600"
              >
                <h3 className="text-xl font-bold mb-2 dark:text-white text-gray-900">{project.title}</h3>
                <p className="text-sm mb-4 dark:text-gray-300 text-gray-600">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-3">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs rounded-lg bg-orange-500 text-white font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <p className="text-sm dark:text-gray-400 text-gray-500">
                  Year: {project.year}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.main>

      <motion.footer
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="border-t dark:border-gray-800 border-gray-300 p-4 mt-8"
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