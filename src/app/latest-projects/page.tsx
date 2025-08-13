import { Metadata } from "next";
import LatestProjectsClient from "./LatestProjectsClient";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Latest Projects - NCTNetwork",
    description: "Explore our latest web development projects including whisky blogs and interactive mapping solutions. View our portfolio of React, Next.js, and WordPress projects.",
    keywords: "Projects, Portfolio, Web Development, React, Next.js, WordPress, Interactive Maps, whisky blog",
    authors: [{ name: 'NCT Network', url: 'https://nctnetwork.co.uk' }],
    creator: 'NCT Network',
    publisher: 'NCT Network',
    alternates: {
      canonical: "https://nctnetwork.co.uk/latest-projects",
      languages: {
        "en-GB": "https://nctnetwork.co.uk/latest-projects",
      },
    },
    metadataBase: new URL("https://nctnetwork.co.uk"),
    openGraph: {
      title: "Latest Projects - NCTNetwork",
      description: "Explore our latest web development projects and case studies",
      url: "https://nctnetwork.co.uk/latest-projects",
      siteName: "NCTNetwork",
      type: "website",
      locale: "en_GB",
      images: [
        {
          url: "/images/og-projects.jpg",
          width: 1200,
          height: 630,
          alt: "NCTNetwork Latest Projects Portfolio",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "Latest Projects - NCTNetwork",
      description: "Explore our latest web development projects and case studies",
      creator: "@nctnetwork",
      images: ["/images/og-projects.jpg"],
    },
    other: {
      "structured-data": JSON.stringify({
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": "Latest Projects",
        "description": "Portfolio of web development projects by NCTNetwork",
        "url": "https://nctnetwork.co.uk/latest-projects",
        "isPartOf": {
          "@type": "WebSite",
          "name": "NCTNetwork",
          "url": "https://nctnetwork.co.uk"
        },
        "mainEntity": {
          "@type": "ItemList",
          "name": "Web Development Projects",
          "itemListElement": [
            {
              "@type": "CreativeWork",
              "name": "whiskyonthe.rocks",
              "description": "whisky blog with focus on single malt scotch whisky reviews",
              "url": "https://whiskyonthe.rocks",
              "creator": {
                "@type": "Organization",
                "name": "NCTNetwork"
              }
            },
            {
              "@type": "CreativeWork", 
              "name": "Scotch Whisky Map",
              "description": "Interactive map of Scottish whisky distilleries",
              "url": "https://scotch-whisky-map-v2.vercel.app/",
              "creator": {
                "@type": "Organization",
                "name": "NCTNetwork"
              }
            }
          ]
        }
      })
    }
  };
}

export default function LatestProjects() {
  return <LatestProjectsClient />;
}
