import { ThemeProvider } from "next-themes"
import { Geist, Geist_Mono } from "next/font/google"
import type { AppProps } from 'next/app'
import '../styles/globals.css'

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
      <div className={`${geistSans.variable} ${geistMono.variable}`}>
        <Component {...pageProps} />
      </div>
    </ThemeProvider>
  )
} 