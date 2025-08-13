"use client"

import { useState, useEffect } from "react"
import { SiteHeader } from '@/components/ui/SiteHeader'
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import dynamic from 'next/dynamic'

// Dynamically import footer to reduce initial bundle size
const Footer = dynamic(() => import('@/components/ui/Footer').then(mod => ({ default: mod.Footer })), {
  ssr: true,
  loading: () => null,
})

export default function ToolsClient() {
  const [mounted, setMounted] = useState(false)
  const [url, setUrl] = useState('')
  const [markdown, setMarkdown] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  useEffect(() => setMounted(true), [])
  if (!mounted) return null

  const handleConvert = async () => {
    if (!url.trim()) {
      setError('Please enter a valid URL')
      return
    }

    setLoading(true)
    setError('')
    setMarkdown('')

    try {
      const response = await fetch('/api/url-to-markdown', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ url: url.trim() }),
      })

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }

      const data = await response.json()
      
      if (data.error) {
        throw new Error(data.error)
      }

      setMarkdown(data.markdown)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to convert URL to markdown')
    } finally {
      setLoading(false)
    }
  }

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(markdown)
      // You could add a toast notification here
    } catch (err) {
      console.error('Failed to copy:', err)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-slate-900 dark:via-blue-900 dark:to-indigo-900 pt-20 flex flex-col">
      <SiteHeader />
      
      {/* Hero Section */}
      <section className="py-20 relative overflow-hidden flex-1">
        {/* Background decoration */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-indigo-400 to-purple-600 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-blue-400 to-cyan-600 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <motion.div 
            initial={{ y: 40, opacity: 0 }} 
            animate={{ y: 0, opacity: 1 }} 
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-4xl mx-auto text-center mb-12"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="inline-flex items-center px-4 py-2 mb-8 text-sm bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-full border border-white/20 dark:border-slate-700/20 shadow-lg"
            >
              <span className="w-2 h-2 bg-[#f97316] rounded-full mr-2 animate-pulse"></span>
              <span className="text-slate-600 dark:text-slate-300">Developer Tools</span>
            </motion.div>
            
            <motion.h1 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-4xl md:text-6xl font-bold mb-6 leading-tight"
            >
              <span className="bg-gradient-to-r from-slate-900 via-indigo-900 to-slate-900 dark:from-white dark:via-indigo-200 dark:to-white bg-clip-text text-transparent">
                Web Development{" "}
              </span>
              <span className="text-[#f97316]">Tools</span>
            </motion.h1>
            
            <motion.p 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="text-xl text-slate-600 dark:text-slate-300 mb-12 max-w-2xl mx-auto leading-relaxed"
            >
              Free tools and utilities to help developers and content creators work more efficiently
            </motion.p>
          </motion.div>

          {/* URL to Markdown Converter */}
          <motion.div 
            initial={{ y: 40, opacity: 0 }} 
            animate={{ y: 0, opacity: 1 }} 
            transition={{ duration: 0.8, delay: 1 }}
            className="max-w-4xl mx-auto"
          >
            <div className="bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm rounded-2xl border border-white/20 dark:border-slate-700/20 shadow-xl p-6 sm:p-8">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-[#f97316] to-orange-600 rounded-xl flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                  </svg>
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-slate-900 dark:text-white">URL to Markdown Converter</h2>
                  <p className="text-slate-600 dark:text-slate-300">Convert any webpage content to clean markdown format</p>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <label htmlFor="url-input" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                    Enter webpage URL
                  </label>
                  <div className="flex gap-3">
                    <input
                      id="url-input"
                      type="url"
                      value={url}
                      onChange={(e) => setUrl(e.target.value)}
                      placeholder="https://example.com"
                      className="flex-1 px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-900 dark:text-white placeholder-slate-400 focus:ring-2 focus:ring-[#f97316] focus:border-transparent transition-all"
                      disabled={loading}
                    />
                    <Button
                      onClick={handleConvert}
                      disabled={loading || !url.trim()}
                      className="bg-gradient-to-r from-[#f97316] to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-6 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {loading ? (
                        <>
                          <svg className="animate-spin -ml-1 mr-2 h-4 w-4" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Converting...
                        </>
                      ) : (
                        'Convert'
                      )}
                    </Button>
                  </div>
                </div>

                {error && (
                  <div className="p-4 rounded-xl bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800">
                    <p className="text-red-600 dark:text-red-400 text-sm">{error}</p>
                  </div>
                )}

                {markdown && (
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">
                        Markdown Output
                      </label>
                      <Button
                        onClick={copyToClipboard}
                        variant="outline"
                        size="sm"
                        className="border-slate-200 dark:border-slate-600 hover:bg-slate-50 dark:hover:bg-slate-700"
                      >
                        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                        </svg>
                        Copy
                      </Button>
                    </div>
                    <textarea
                      value={markdown}
                      readOnly
                      className="w-full h-64 px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-600 bg-slate-50 dark:bg-slate-700 text-slate-900 dark:text-white font-mono text-sm resize-y"
                    />
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer brandName="NCTNetwork" brandColor="#f97316" />
    </div>
  )
}