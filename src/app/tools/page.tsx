import { Metadata } from "next";
import ToolsClient from "./ToolsClient";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Tools - NCTNetwork",
    description: "Useful web development tools including markdown converters, text processors, and more. Free tools for developers and content creators.",
    keywords: "Tools, Web Development Tools, Markdown Converter, URL to Markdown, Text Tools, Developer Tools",
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
      title: "Tools - NCTNetwork",
      description: "Free web development tools and utilities for developers and content creators",
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
      title: "Tools - NCTNetwork",
      description: "Free web development tools and utilities for developers and content creators",
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
          "name": "Web Development Tools",
          "description": "Collection of free tools for developers including markdown converters and text processors",
          "applicationCategory": "DeveloperApplication",
          "operatingSystem": "Web Browser",
          "offers": {
            "@type": "Offer",
            "price": "0",
            "priceCurrency": "GBP"
          }
        }
      })
    }
  };
}

export default function Tools() {
  return <ToolsClient />;
}