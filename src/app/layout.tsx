import { Metadata } from 'next';
import { ThemeProvider } from 'next-themes';
import Script from 'next/script';
import { Inter } from 'next/font/google';
import { CriticalCSS } from '@/components/CriticalCSS';
import { DeferredStyles } from '@/components/DeferredStyles';

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'NCT Network',
  description: 'IT, Web & Network Developments',
  authors: [{ name: 'NCT Network', url: 'https://nctnetwork.co.uk' }],
  creator: 'NCT Network',
  publisher: 'NCT Network',
  metadataBase: new URL('https://nctnetwork.co.uk'),
  viewport: {
    width: 'device-width',
    initialScale: 1,
  },
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#f97316' },
    { media: '(prefers-color-scheme: dark)', color: '#f97316' },
  ],
  openGraph: {
    title: 'NCT Network',
    description: 'IT, Web & Network Developments',
    siteName: 'NCT Network',
    type: 'website',
    locale: 'en_GB',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NCT Network',
    description: 'IT, Web & Network Developments',
    creator: '@nctnetwork',
  },
  alternates: {
    canonical: 'https://nctnetwork.co.uk',
    languages: {
      'en-GB': 'https://nctnetwork.co.uk',
    },
  },
  other: {
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'default',
    'apple-mobile-web-app-title': 'NCT Network',
    'msapplication-TileColor': '#f97316',
    'msapplication-config': '/browserconfig.xml',
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
        <CriticalCSS />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link rel="preconnect" href="https://analytics.ahrefs.com" />
        <link rel="preconnect" href="https://nctnetwork.co.uk" />
        <link rel="dns-prefetch" href="https://whiskyonthe.rocks" />
        <link rel="dns-prefetch" href="https://scotch-whisky-map-v2.vercel.app" />
        <link rel="preload" href="/images/whiskyontherocks.png.webp" as="image" type="image/webp" />
        <link rel="preload" href="/images/whisky-map-clip.png" as="image" type="image/png" />
        <Script
          id="defer-styles"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              // Defer non-critical CSS loading
              const loadCSS = function(href, before, media) {
                var link = document.createElement("link");
                link.rel = "stylesheet";
                link.href = href;
                link.media = media || "all";
                if (before) {
                  before.parentNode.insertBefore(link, before);
                } else {
                  document.head.appendChild(link);
                }
                return link;
              };
              
              // Load main stylesheet after critical rendering
              window.addEventListener('load', function() {
                loadCSS('/_next/static/css/app/layout.css');
                // Show below-fold content after styles load
                setTimeout(function() {
                  document.querySelectorAll('.below-fold').forEach(function(el) {
                    el.style.visibility = 'visible';
                  });
                }, 100);
              });
            `,
          }}
        />
        <Script
          src="https://analytics.ahrefs.com/analytics.js"
          data-key="qUg220+3azEuraIDkbyxuA"
          strategy="lazyOnload"
          async
        />
      </head>
      <body className={`min-h-screen bg-background font-sans antialiased ${inter.variable}`}>
        <DeferredStyles />
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
