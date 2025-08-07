"use client"

import { useState, useEffect } from "react"
import { SiteHeader } from '@/components/ui/SiteHeader'
import { Footer } from '@/components/ui/Footer'
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import Image from 'next/image'
import { projects } from '@/data/projects'


export default function HomeClient() {
  const [mounted, setMounted] = useState(false)
  
  useEffect(() => setMounted(true), [])
  if (!mounted) return null

  const scrollToProjects = (e: React.MouseEvent) => {
    e.preventDefault()
    const element = document.getElementById('latest-projects')
    if (element) {
      const header = document.querySelector('header')
      const headerHeight = header ? header.offsetHeight : 80 // Fallback to 80px if header not found
      const elementPosition = element.offsetTop - headerHeight
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      })
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-slate-900 dark:via-blue-900 dark:to-indigo-900 pt-20">
      <SiteHeader />
      
      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-indigo-400 to-purple-600 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-blue-400 to-cyan-600 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-40 left-1/2 w-80 h-80 bg-gradient-to-br from-purple-400 to-pink-600 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse" style={{ animationDelay: '0.5s' }}></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <motion.div 
            initial={{ y: 40, opacity: 0 }} 
            animate={{ y: 0, opacity: 1 }} 
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-4xl mx-auto text-center"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="inline-flex items-center px-4 py-2 mb-8 text-sm bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-full border border-white/20 dark:border-slate-700/20 shadow-lg"
            >
              <span className="w-2 h-2 bg-[#f97316] rounded-full mr-2 animate-pulse"></span>
              <span className="text-slate-600 dark:text-slate-300">New projects coming soon</span>
            </motion.div>
            
            <motion.h1 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
            >
              <span className="bg-gradient-to-r from-slate-900 via-indigo-900 to-slate-900 dark:from-white dark:via-indigo-200 dark:to-white bg-clip-text text-transparent">
                Welcome to{" "}
              </span>
              <span className="text-[#f97316]">NCT</span>
              <span className="bg-gradient-to-r from-slate-700 to-slate-900 dark:from-slate-300 dark:to-slate-100 bg-clip-text text-transparent">Network</span>
            </motion.h1>
            
            <motion.p 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 mb-12 max-w-2xl mx-auto leading-relaxed"
            >
              Crafting next-generation digital experiences with cutting-edge{" "}
              <span className="text-[#f97316] font-semibold">AI</span>,{" "}
              <span className="text-[#f97316] font-semibold">Web</span> & {" "}
              <span className="text-[#f97316] font-semibold">Network</span> solutions
            </motion.p>
            
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="flex justify-center"
            >
              <Button 
                onClick={scrollToProjects} 
                className="bg-gradient-to-r from-[#f97316] to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-8 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                size="lg"
              >
                View Our Work
                <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-label="Scroll down to projects">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="latest-projects" className="py-20 bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ y: 40, opacity: 0 }} 
            animate={{ y: 0, opacity: 1 }} 
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center mb-16"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="inline-flex items-center px-4 py-2 mb-6 text-sm bg-[#f97316]/10 dark:bg-[#f97316]/20 rounded-full border border-[#f97316]/30 dark:border-[#f97316]/50"
            >
              <span className="text-[#f97316]">Our Work</span>
            </motion.div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-slate-900 via-indigo-900 to-slate-900 dark:from-white dark:via-indigo-200 dark:to-white bg-clip-text text-transparent">
              Latest <span className="text-[#f97316]">Projects</span>
            </h2>
            
            <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
              Discover our portfolio of innovative solutions that push the boundaries of technology
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {projects.map((project, index) => (
              <motion.div 
                key={index} 
                initial={{ opacity: 0, y: 30 }} 
                animate={{ opacity: 1, y: 0 }} 
                transition={{ delay: 0.1 * index + 0.6, duration: 0.8 }}
                className="group relative"
              >
                <div className="relative bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm rounded-2xl border border-white/20 dark:border-slate-700/20 shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden hover:scale-[1.02] h-full">
                  {/* Gradient overlay for hover effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  <div className="relative z-10 p-6 sm:p-8 h-full flex flex-col">
                    {project.status === "completed" ? (
                      <>
                        <div className="flex items-start justify-between mb-4">
                          <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white group-hover:text-[#f97316] transition-colors pr-4">
                            {project.title}
                          </h3>
                          <div className="flex items-center space-x-2 flex-shrink-0">
                            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                            <span className="text-xs text-green-600 dark:text-green-400 font-medium">Live</span>
                          </div>
                        </div>
                        
                        <a 
                          href={project.link} 
                          rel="noopener" 
                          target="_blank"
                          className="block mb-6 rounded-xl overflow-hidden group-hover:shadow-lg transition-shadow duration-300"
                          style={{
                            backgroundColor: project.backgroundColor
                          }}
                        >
                          <div 
                            className="relative w-full h-56 sm:h-64 bg-slate-100 dark:bg-slate-700"
                            style={{
                              backgroundColor: project.backgroundColor
                            }}
                          >
                            <Image
                              src={project.image || "/images/placeholder.png"}
                              alt={project.imageAlt || `${project.title} screenshot`}
                              fill
                              className={`transition-transform duration-500 group-hover:scale-105 ${
                                project.backgroundColor 
                                  ? "object-contain p-4" 
                                  : "object-cover"
                              }`}
                              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            />
                          </div>
                        </a>
                        
                        <p className="text-slate-600 dark:text-slate-300 mb-6 leading-relaxed flex-grow text-sm sm:text-base">
                          {project.description}
                        </p>
                        
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mt-auto">
                          <div className="flex flex-wrap gap-2">
                            <span className="px-3 py-1 text-xs rounded-full bg-gradient-to-r from-[#f97316] to-orange-600 text-white font-medium">
                              {project.technology}
                            </span>
                            <span className="px-3 py-1 text-xs rounded-full bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300">
                              {project.year}
                            </span>
                          </div>
                          
                          <a 
                            href={project.link}
                            className="inline-flex items-center text-[#f97316] hover:text-orange-600 transition-all duration-300 group/link self-start sm:self-center"
                            rel="noopener" 
                            target="_blank"
                          >
                            <span className="text-sm font-medium mr-2">Visit Project</span>
                            <svg className="w-4 h-4 transition-transform group-hover/link:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg>
                          </a>
                        </div>
                      </>
                    ) : (
                      <>
                        <div className="flex items-center justify-between mb-4">
                          <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">{project.title}</h3>
                          <span className="px-3 py-1 text-xs rounded-full bg-gradient-to-r from-amber-500 to-orange-500 text-white font-medium">
                            Coming Soon
                          </span>
                        </div>
                        
                        <div className="mb-6 rounded-xl overflow-hidden bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-700 dark:to-slate-800 h-56 sm:h-64 flex items-center justify-center">
                          <div className="text-slate-400 dark:text-slate-500">
                            <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                            </svg>
                          </div>
                        </div>
                        
                        <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-sm sm:text-base">
                          {project.description}
                        </p>
                      </>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer brandName="NCTNetwork" brandColor="#f97316" />
    </div>
  )
}
