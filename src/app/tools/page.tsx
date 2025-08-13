import { Metadata } from "next";
import ToolsClient from "./ToolsClient";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Free Web Development Tools - NCTNetwork | URL to Markdown Converter",
    description: "Free online web development tools by NCTNetwork. Convert any webpage to markdown format instantly. Essential utilities for developers, content creators, and technical writers.",
    keywords: "free web development tools, URL to markdown converter, webpage to markdown, online markdown tools, developer utilities, content conversion tools, technical writing tools, NCTNetwork tools",
    authors: [{ name: 'NCT Network', url: 'https://nctnetwork.co.uk' }],
    creator: 'NCT Network',
    publisher: 'NCT Network',
    alternates: {
      canonical: "https://nctnetwork.co.uk/tools",
      languages: {
        "en-GB": "https://nctnetwork.co.uk/tools",
      },
    },
    metadataBase: new URL("https://nctnetwork.co.uk"),
    openGraph: {
      title: "Free Web Development Tools - NCTNetwork",
      description: "Convert any webpage to markdown format instantly. Free online tools for developers, content creators, and technical writers.",
      url: "https://nctnetwork.co.uk/tools",
      siteName: "NCTNetwork",
      type: "website",
      locale: "en_GB",
      images: [
        {
          url: "/images/og-tools.jpg",
          width: 1200,
          height: 630,
          alt: "NCTNetwork Developer Tools",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "Free Web Development Tools - NCTNetwork",
      description: "Convert any webpage to markdown format instantly. Free online tools for developers and content creators.",
      creator: "@nctnetwork",
      images: ["/images/og-tools.jpg"],
    },
    other: {
      "structured-data": JSON.stringify({
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": "Developer Tools",
        "description": "Free web development tools and utilities by NCTNetwork",
        "url": "https://nctnetwork.co.uk/tools",
        "isPartOf": {
          "@type": "WebSite",
          "name": "NCTNetwork",
          "url": "https://nctnetwork.co.uk"
        },
        "mainEntity": {
          "@type": "SoftwareApplication",
          "name": "URL to Markdown Converter",
          "description": "Free online tool to convert any webpage content to clean markdown format. Perfect for developers, content creators, and technical writers.",
          "applicationCategory": "DeveloperApplication",
          "operatingSystem": "Web Browser",
          "offers": {
            "@type": "Offer",
            "price": "0",
            "priceCurrency": "GBP"
          },
          "featureList": [
            "Convert any webpage to markdown",
            "Clean content extraction", 
            "Free to use",
            "No registration required"
          ]
        }
      })
    }
  };
}

export default function Tools() {
  return <ToolsClient />;
}