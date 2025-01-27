import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: 'NCTNetwork | IT, Web & Network Solutions',
  description: 'Discover NCTNetwork innovative IT, web development, and networking solutions. View our latest projects and see how we can help transform your digital presence.',
  keywords: 'IT solutions, web development, networking, NCTNetwork',
  openGraph: {
    title: 'NCTNetwork - IT, Web & Network Solutions',
    description: 'Discover NCTNetwork\'s innovative IT, web development, and networking solutions.',
    type: 'website',
    url: 'https://nctnetwork.co.uk', // Replace with your actual domain
    siteName: 'NCTNetwork',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NCTNetwork | IT, Web & Network Solutions',
    description: 'Discover NCTNetwork innovative IT, web development, and networking solutions.',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
