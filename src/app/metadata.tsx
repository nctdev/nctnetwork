import { Metadata } from "next"

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "NCT Network",
    description: "IT, Web & Network Developments",
    alternates: {
      canonical: "https://nctnetwork.co.uk",
      languages: {
        "en-GB": "https://nctnetwork.co.uk",
      },
    },
    metadataBase: new URL('https://nctnetwork.co.uk'),
  }
}
