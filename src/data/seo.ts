export interface PageSEO {
  title: string;
  description: string;
  canonical: string;
  keywords: string[];
  ogImage?: string;
}

export const seoData: Record<string, PageSEO> = {
  home: {
    title: "Grevia Digital | Digital Marketing, SEO & Website Design Agency in Siliguri",
    description: "Grevia Digital helps businesses build a strong online presence, improve search visibility, and generate qualified customer leads with custom Website Designing, SEO Services, and targeted Digital Marketing in Siliguri.",
    canonical: "https://greviadigital.com/",
    keywords: [
      "Digital Marketing in Siliguri",
      "SEO Services in Siliguri",
      "Website Designing in Siliguri",
      "Digital Marketing Agency Siliguri",
      "SEO Agency Siliguri",
      "Website Design Agency Siliguri",
      "Local SEO Siliguri",
      "Web Development West Bengal",
      "Google Business Profile Optimization Siliguri",
      "Meta Ads Agency Siliguri"
    ],
    ogImage: "https://greviadigital.com/images/og-image.jpg"
  },
  about: {
    title: "About Grevia Digital | Digital Growth Agency with 8+ Years Experience",
    description: "Learn about Grevia Digital, a Siliguri-based agency with 8+ years of experience and 100+ completed projects helping businesses grow online with custom web design, SEO, and digital strategy.",
    canonical: "https://greviadigital.com/about/",
    keywords: [
      "About Grevia Digital",
      "Digital Marketing Agency Siliguri",
      "Web Design Team Siliguri",
      "SEO Experts North Bengal",
      "Grevia Digital Story",
      "Digital Consultants Siliguri"
    ],
    ogImage: "https://greviadigital.com/images/og-image.jpg"
  },
  services: {
    title: "Services | Website Design, SEO Services & Digital Marketing in Siliguri",
    description: "Explore Grevia Digital's core services: Custom Website Design, SEO Services (On-Page, Technical, Local SEO, AEO, GEO), and Digital Marketing (Meta Ads, Google Ads, Lead Generation).",
    canonical: "https://greviadigital.com/services/",
    keywords: [
      "Website Designing in Siliguri",
      "SEO Services in Siliguri",
      "Digital Marketing in Siliguri",
      "WordPress Web Design Siliguri",
      "Technical SEO Audit",
      "Local SEO Optimization Siliguri",
      "Google Ads Agency Siliguri"
    ],
    ogImage: "https://greviadigital.com/images/og-image.jpg"
  },
  contact: {
    title: "Contact Us | Get a Free Quote from Grevia Digital Siliguri",
    description: "Get in touch with Grevia Digital for a free consultation and quotation on Website Design, SEO Services, or Digital Marketing campaigns in Siliguri and beyond.",
    canonical: "https://greviadigital.com/contact/",
    keywords: [
      "Contact Grevia Digital",
      "Get Free Quote Digital Marketing",
      "Siliguri Marketing Agency Contact",
      "Hire SEO Agency Siliguri",
      "Website Design Enquiry Siliguri"
    ],
    ogImage: "https://greviadigital.com/images/og-image.jpg"
  },
  privacy: {
    title: "Privacy Policy | Grevia Digital",
    description: "Learn how Grevia Digital collects, uses, and protects your personal information when you use our website, services, or request a quotation.",
    canonical: "https://greviadigital.com/privacy/",
    keywords: [
      "Grevia Digital Privacy Policy",
      "Privacy Policy Digital Marketing Agency",
      "Data Protection Policy"
    ],
    ogImage: "https://greviadigital.com/images/og-image.jpg"
  },
  terms: {
    title: "Terms and Conditions | Grevia Digital",
    description: "Read the terms and conditions for using Grevia Digital's website and hiring our website design, SEO, and digital marketing services.",
    canonical: "https://greviadigital.com/terms/",
    keywords: [
      "Grevia Digital Terms and Conditions",
      "Agency Terms of Service",
      "Digital Marketing Service Terms"
    ],
    ogImage: "https://greviadigital.com/images/og-image.jpg"
  }
};

// Schema.org Generators
export function getOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["ProfessionalService", "LocalBusiness"],
    "name": "Grevia Digital",
    "alternateName": "Grevia Digital Agency",
    "url": "https://greviadigital.com/",
    "logo": "https://greviadigital.com/favicon.svg",
    "image": "https://greviadigital.com/images/hero-consultant.jpg",
    "description": "Grevia Digital provides high-performance Website Design, Search Engine Optimization (SEO), and Digital Marketing to help businesses build search authority and generate qualified leads.",
    "telephone": "+91-70014-63876",
    "email": "hello@greviadigital.com",
    "priceRange": "₹₹",
    "currenciesAccepted": "INR, USD",
    "paymentAccepted": "Cash, Credit Card, UPI, Bank Transfer",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Subash Pally",
      "addressLocality": "Siliguri",
      "addressRegion": "West Bengal",
      "postalCode": "734001",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "26.7271",
      "longitude": "88.3953"
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        "opens": "10:00",
        "closes": "19:00"
      }
    ],
    "areaServed": [
      {
        "@type": "City",
        "name": "Siliguri"
      },
      {
        "@type": "State",
        "name": "West Bengal"
      },
      {
        "@type": "Country",
        "name": "India"
      }
    ],
    "sameAs": [
      "https://facebook.com/greviadigital",
      "https://instagram.com/greviadigital",
      "https://linkedin.com/company/greviadigital",
      "https://twitter.com/greviadigital",
      "https://youtube.com/@greviadigital"
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Digital Marketing & Web Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Website Design & Development",
            "description": "Custom modern, mobile-first, and high-speed business websites engineered for conversion."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Search Engine Optimization (SEO)",
            "description": "On-Page SEO, Technical SEO, Local SEO, and AI Search Optimization to rank on Google."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Digital Marketing & Performance Ads",
            "description": "Targeted Google Ads, Meta Ads, and multi-channel lead generation campaigns."
          }
        }
      ]
    },
    "knowsAbout": [
      "Digital Marketing in Siliguri",
      "SEO Services in Siliguri",
      "Website Designing in Siliguri",
      "Search Engine Optimization",
      "Local SEO Optimization",
      "WordPress Web Development",
      "Performance Marketing"
    ]
  };
}

export function getBreadcrumbSchema(breadcrumbs: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": breadcrumbs.map((crumb, idx) => ({
      "@type": "ListItem",
      "position": idx + 1,
      "name": crumb.name,
      "item": crumb.url
    }))
  };
}

export function getFAQSchema(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };
}
