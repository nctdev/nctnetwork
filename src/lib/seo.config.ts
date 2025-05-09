import { DefaultSeoProps } from 'next-seo';

export const SEO_CONFIG: DefaultSeoProps = {
  title: 'NCT Network',
  titleTemplate: '%s | NCT Network',
  defaultTitle: 'NCT Network',
  description: 'IT, Web & Network Developments',
  canonical: 'https://nctnetwork.co.uk',
  openGraph: {
    url: 'https://nctnetwork.co.uk',
    title: 'NCT Network',
    description: 'IT, Web & Network Developments',
    site_name: 'NCT Network',
    type: 'website',
  },
  twitter: {
    handle: '@nctnetwork',
    site: '@nctnetwork',
    cardType: 'summary_large_image',
  },
  additionalMetaTags: [
    {
      name: 'keywords',
      content: 'IT services, web development, network solutions, technology services',
    },
  ],
};
