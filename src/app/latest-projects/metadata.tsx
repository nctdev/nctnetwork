import { Metadata } from "next"

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Latest Projects - NCT Network",
    description: "Explore our latest web development projects and case studies",
    alternates: {
      canonical: "https://nctnetwork.co.uk/latest-projects",
      languages: {
        "en-GB": "https://nctnetwork.co.uk/latest-projects",
      },
    },
    metadataBase: new URL('https://nctnetwork.co.uk'),
  }
}
