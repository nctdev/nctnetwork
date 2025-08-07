import { Metadata } from "next";
import HomeClient from "./HomeClient";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "NCTNetwork - IT, Web & Network Developments",
    description: "NCTNetwork specializes in IT, Web & Network Developments. Explore our latest projects including whisky blogs and interactive mapping solutions.",
    keywords: "IT, Web Development, Network Development, React, Next.js, WordPress, Interactive Maps",
    alternates: {
      canonical: "https://nctnetwork.co.uk",
      languages: {
        "en-GB": "https://nctnetwork.co.uk",
      },
    },
    metadataBase: new URL("https://nctnetwork.co.uk"),
    openGraph: {
      title: "NCTNetwork - IT, Web & Network Developments",
      description: "Explore our latest web development projects and IT solutions",
      url: "https://nctnetwork.co.uk",
      siteName: "NCTNetwork",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: "NCTNetwork - IT, Web & Network Developments",
      description: "Explore our latest web development projects and IT solutions",
    },
    other: {
      "structured-data": JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "NCTNetwork",
        "description": "IT, Web & Network Developments",
        "url": "https://nctnetwork.co.uk",
        "sameAs": [],
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Web Development Services",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Web Development",
                "description": "Custom web development solutions using modern frameworks like React and Next.js"
              }
            },
            {
              "@type": "Offer", 
              "itemOffered": {
                "@type": "Service",
                "name": "IT Consulting",
                "description": "Professional IT consulting and network development services"
              }
            }
          ]
        }
      })
    }
  };
}

export default function Home() {
  return <HomeClient />;
}
