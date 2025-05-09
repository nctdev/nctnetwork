import { Metadata } from 'next';
import '@/styles/globals.css';
import { ThemeProvider } from 'next-themes';
import Script from 'next/script';

export const metadata: Metadata = {
  title: 'NCT Network',
  description: 'IT, Web & Network Developments',
  metadataBase: new URL('https://nctnetwork.co.uk'),
  openGraph: {
    title: 'NCT Network',
    description: 'IT, Web & Network Developments',
    siteName: 'NCT Network',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NCT Network',
    description: 'IT, Web & Network Developments',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <Script
          src="https://analytics.ahrefs.com/analytics.js"
          data-key="qUg220+3azEuraIDkbyxuA"
          strategy="lazyOnload"
          async
        />
      </head>
      <body className="min-h-screen flex flex-col bg-background font-sans antialiased">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="flex-grow">
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
