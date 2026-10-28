export interface ServiceItem {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  iconName: string;
  features: string[];
  deliverables: string[];
}

export interface ServiceCategory {
  id: string;
  title: string;
  tagline: string;
  overview: string;
  valueProposition: string;
  services: ServiceItem[];
}

export const servicesData: ServiceCategory[] = [
  {
    id: "website-design",
    title: "Website Design",
    tagline: "Fast, AI-Assisted & High-Converting Websites",
    overview: "We create modern, fast-loading, SEO-friendly business websites engineered with AI tools to build trust and convert visitors into active customer enquiries.",
    valueProposition: "Every website we create is built with an SEO-first methodology, clean architecture, fast loading speed, and strategic conversion pathways.",
    services: [
      {
        id: "wordpress-elementor",
        title: "WordPress + Elementor Website Design",
        shortDescription: "Custom, easy-to-manage WordPress sites built with flexible Elementor layouts.",
        fullDescription: "Bespoke WordPress websites configured with drag-and-drop Elementor page builders for effortless ongoing content management.",
        iconName: "layout",
        features: ["Custom Elementor Layouts", "Drag-and-Drop CMS", "Theme Customization", "Security Hardening"],
        deliverables: ["Fully Editable CMS Site", "Admin Training", "Security Configuration"]
      },
      {
        id: "ai-assisted-design",
        title: "Fast AI Assisted Website Design",
        shortDescription: "Accelerated web design workflows leveraging modern AI copy and visual tools.",
        fullDescription: "We combine human creativity with AI-powered design tools to deliver ultra-fast turnaround times without compromising quality.",
        iconName: "zap",
        features: ["AI Copy Frameworks", "Rapid Wireframing", "Modern Visual Hierarchy", "Fast Turnaround"],
        deliverables: ["High-Speed Website Launch", "AI Content Integration", "Responsive Layout"]
      },
      {
        id: "landing-pages",
        title: "High-Converting Landing Pages",
        shortDescription: "Single-page lead funnels designed specifically to maximize paid campaign ROI.",
        fullDescription: "Laser-focused landing pages engineered with persuasion architecture to convert ad clicks into phone calls and enquiries.",
        iconName: "target",
        features: ["Persuasive Headline Copy", "Frictionless Forms", "Click-to-Call Buttons", "Social Proof Integration"],
        deliverables: ["High-Converting Funnel Page", "Conversion Tracking", "Mobile-Optimized Layout"]
      },
      {
        id: "responsive-mobile",
        title: "Responsive Mobile Friendly",
        shortDescription: "Flawless viewports and touch navigation across mobile, tablet, and desktop screens.",
        fullDescription: "Mobile-first website architecture ensuring zero horizontal scrolling, fast mobile renders, and thumb-friendly navigation.",
        iconName: "smartphone",
        features: ["Mobile-First Grid", "Touch Navigation", "Fluid Typography", "Adaptive Container Widths"],
        deliverables: ["Cross-Device Compatibility", "Mobile Performance Audit", "Touch-Optimized UI"]
      },
      {
        id: "seo-friendly-design",
        title: "SEO-Friendly Website Design",
        shortDescription: "Clean code structure, semantic HTML5, and automated schema markup for search engines.",
        fullDescription: "Built from the ground up to rank on search engines with clean semantic tags, canonical URLs, and structured data.",
        iconName: "search",
        features: ["Semantic HTML5", "Clean URL Architecture", "XML Sitemap & Robots.txt", "Schema.org Markup"],
        deliverables: ["Search Engine Indexed Site", "SEO Meta Structure", "Structured Data Audit"]
      },
      {
        id: "secure-web-apps",
        title: "Secure & Fast Loading Web App",
        shortDescription: "Ultra-fast page loads, sub-second renders, SSL encryption, and WebP compression.",
        fullDescription: "Engineered for maximum speed and security with Core Web Vitals optimization, asset compression, and robust protection.",
        iconName: "shield-check",
        features: ["Core Web Vitals Optimized", "WebP Image Compression", "SSL Encryption", "Minimal JS Overhead"],
        deliverables: ["Fast Page Renders", "SSL Security Certificate", "Performance Benchmark"]
      },
      {
        id: "website-redesign-maintenance",
        title: "Website Redesign & Maintenance",
        shortDescription: "Modern UI/UX refreshes for outdated websites and ongoing technical maintenance.",
        fullDescription: "Transform slow, outdated sites into modern digital platforms with complete UI overhauls and monthly security maintenance.",
        iconName: "refresh-cw",
        features: ["UI/UX Overhaul", "SEO Equity Preservation", "Monthly Backups", "Plugin Updates"],
        deliverables: ["Modern Redesigned Website", "Ongoing Maintenance Plan", "Security Patching"]
      },
      {
        id: "domain-hosting-server",
        title: "Domain & Hosting Server",
        shortDescription: "Reliable domain management, SSL configuration, and high-speed cloud hosting server setup.",
        fullDescription: "End-to-end server setup, DNS mapping, domain registration assistance, and high-uptime hosting configuration.",
        iconName: "server",
        features: ["High-Uptime Server Setup", "DNS & Domain Mapping", "Free SSL Certificate", "Email Server Setup"],
        deliverables: ["Active Server Hosting", "Custom Business Email", "DNS Verification"]
      }
    ]
  },
  {
    id: "seo-services",
    title: "SEO Services",
    tagline: "Organic Visibility & AI Search Engine Rankings",
    overview: "People are searching for your services right now. We optimize your website, content, and Google profile using modern AEO & GEO AI search optimization.",
    valueProposition: "We implement strategic On-Page, Technical, Local, AEO, and GEO optimizations focused on building sustainable search visibility and consistent organic traffic.",
    services: [
      {
        id: "complete-seo-audit",
        title: "Complete SEO Website Audit",
        shortDescription: "In-depth technical diagnostic identifying ranking blockers, crawl errors, and speed bottlenecks.",
        fullDescription: "Comprehensive analysis of your website's search performance, indexing health, backlink profile, and content gaps.",
        iconName: "file-text",
        features: ["Crawl Error Identification", "Competitor Benchmark", "Indexation Health Check", "Content Gap Analysis"],
        deliverables: ["Full Diagnostic Audit Report", "Priority Action Roadmap", "Technical Fix List"]
      },
      {
        id: "on-page-technical-seo",
        title: "On-Page SEO & Technical SEO",
        shortDescription: "Optimization of meta tags, H1-H4 hierarchy, XML sitemaps, canonical tags, and site speed.",
        fullDescription: "Systematic optimization of your site structure, metadata, crawl budgets, and internal links so Google ranks your pages higher.",
        iconName: "code",
        features: ["Meta Title & Description Tuning", "H1-H4 Heading Hierarchy", "XML Sitemap & Robots.txt", "Canonical URL Mapping"],
        deliverables: ["Fully Optimized On-Page Structure", "Technical Error Fixes", "Search Console Verification"]
      },
      {
        id: "off-page-authority-link-building",
        title: "Off-Page SEO & Authority Link Building",
        shortDescription: "High-quality backlink outreach, digital brand footprint expansion, and citation building.",
        fullDescription: "Build domain authority and trust signals through relevant external backlinks, business directories, and authority mentions.",
        iconName: "share-2",
        features: ["High-Authority Backlinks", "Directory Citations", "Brand Footprint Expansion", "Competitor Link Analysis"],
        deliverables: ["Monthly Backlink Report", "Authority Directory Listings", "Clean Backlink Profile"]
      },
      {
        id: "keyword-competitor-analysis",
        title: "Keyword Research & Competitor Analysis",
        shortDescription: "High-intent buyer keyword discovery and competitor strategy gap analysis.",
        fullDescription: "Uncover what your prospective customers are typing into Google and map high-converting keywords to target pages.",
        iconName: "search",
        features: ["High-Intent Buyer Keywords", "Competitor Keyword Gap Analysis", "Search Volume Mapping", "Intent Classification"],
        deliverables: ["Target Keyword Roadmap", "Competitor Benchmarking", "Content Mapping Strategy"]
      },
      {
        id: "content-image-optimization",
        title: "Content & Image Optimization",
        shortDescription: "Persuasive keyword-optimized copy and WebP compressed images with alt tag attributes.",
        fullDescription: "Format text and compress images so pages rank for relevant keywords while maintaining ultra-fast loading speed.",
        iconName: "image",
        features: ["Keyword-Rich Copy", "WebP Image Compression", "Descriptive Alt Tags", "Readability Enhancements"],
        deliverables: ["Optimized Page Content", "Compressed Asset Library", "Alt Tag Verification"]
      },
      {
        id: "local-seo-map-pack",
        title: "Local SEO & Google Map Pack",
        shortDescription: "Dominate Siliguri and regional local map pack rankings for location-based searches.",
        fullDescription: "Capture local business enquiries by optimizing local keyword targeting, map pack listings, and regional service pages.",
        iconName: "map-pin",
        features: ["Local Map Pack Rankings", "Geo-Targeted Keywords", "Local Service Page Setup", "NAP Consistency Audit"],
        deliverables: ["Local Search Dominance Strategy", "Map Pack Optimization", "Regional Keyword Report"]
      },
      {
        id: "google-business-profile-optimisation",
        title: "Google Business Profile Optimisation",
        shortDescription: "Complete Google Business Profile setup, category tuning, photo uploads, and review strategy.",
        fullDescription: "Transform your Google Business Profile into a lead magnet with complete profile optimization, service tags, and review guidance.",
        iconName: "google-profile",
        features: ["Profile Category Tuning", "Photo & Video Uploads", "Service Description Tagging", "Review Response Guidance"],
        deliverables: ["Fully Optimized Google Profile", "Review Request Templates", "Monthly Local Insights"]
      },
      {
        id: "aeo-geo-ai-assisted-seo",
        title: "AEO, GEO & AI-Assisted SEO Search",
        shortDescription: "Optimization for AI Overviews, ChatGPT answers, Google Gemini, and Answer Engines (AEO/GEO).",
        fullDescription: "Prepare your brand for the future of search by structuring content so AI answer engines cite your business as an authority.",
        iconName: "cpu",
        features: ["Answer Engine Optimization", "Generative Engine Optimization", "FAQ Schema Markup", "Conversational AI Targeting"],
        deliverables: ["AI Search Readiness Audit", "Direct Answer Formatting", "Schema Content Validation"]
      }
    ]
  },
  {
    id: "digital-marketing",
    title: "Digital Marketing",
    tagline: "AI-Driven Paid Campaigns & Lead Funnels",
    overview: "Reach your ideal customers with targeted ad campaigns, active social media marketing, and automated lead generation funnels.",
    valueProposition: "We combine targeted social media marketing, precision paid ad campaigns, email marketing, and lead funnels to turn online attention into real sales opportunities.",
    services: [
      {
        id: "social-media-marketing",
        title: "Social Media Marketing",
        shortDescription: "Strategic content creation, platform management, and audience growth across Facebook, Instagram, and LinkedIn.",
        fullDescription: "Engaging social media campaigns designed to build brand recognition, showcase authority, and maintain an active digital presence.",
        iconName: "share",
        features: ["Content Calendar Strategy", "Visual Brand Graphics", "Community Engagement", "Platform Optimization"],
        deliverables: ["Monthly Content Calendar", "Custom Social Graphics", "Performance Analytics"]
      },
      {
        id: "facebook-meta-ads",
        title: "Facebook Meta Ads Management",
        shortDescription: "Precision demographic and interest-based paid ad campaigns on Facebook and Instagram.",
        fullDescription: "Target high-intent demographics with persuasive Meta ad copy, eye-catching creative, and custom audience retargeting.",
        iconName: "thumbs-up",
        features: ["Custom Audience Segmentation", "Retargeting Pixel Setup", "Ad Copy & Creative Direction", "A/B Testing"],
        deliverables: ["Active Campaign Management", "ROAS & Conversion Reporting", "Continuous Ad Optimization"]
      },
      {
        id: "google-ppc-ads",
        title: "Google PPC Ads Management",
        shortDescription: "Capture active search demand on Google Search with high-converting Pay-Per-Click campaigns.",
        fullDescription: "Place your business at the top of Google search results instantly for high-intent search terms with optimized PPC campaigns.",
        iconName: "target",
        features: ["High-Intent Keyword Bidding", "Negative Keyword Filtering", "Ad Extension Setup", "Conversion Tracking"],
        deliverables: ["PPC Campaign Architecture", "Conversion Analytics Setup", "Monthly ROI Reports"]
      },
      {
        id: "youtube-video-ads",
        title: "YouTube Video Ads Campaigns",
        shortDescription: "High-impact video ad campaigns targeting relevant viewers on YouTube.",
        fullDescription: "Promote your brand with engaging YouTube video ads that reach potential customers while they watch industry-related content.",
        iconName: "video",
        features: ["Video Audience Targeting", "In-Stream & Discovery Ads", "Script & Concept Guidance", "Viewer Action Triggers"],
        deliverables: ["YouTube Campaign Launch", "View-Through Conversion Analytics", "Audience Insights"]
      },
      {
        id: "lead-generation-acquisition",
        title: "Lead Generation & Acquisition",
        shortDescription: "End-to-end multi-channel lead funnels built to capture qualified customer enquiries.",
        fullDescription: "Dedicated multi-channel marketing campaigns combining search ads, landing pages, and lead forms to deliver steady business leads.",
        iconName: "user-plus",
        features: ["End-to-End Funnel Setup", "Lead Capture Form Tuning", "Lead Quality Filtering", "Multi-Channel Promotion"],
        deliverables: ["Qualified Lead Funnel", "Instant Lead Notifications", "Campaign Performance Dashboard"]
      },
      {
        id: "whatsapp-sms-marketing",
        title: "WhatsApp & SMS Business Marketing",
        shortDescription: "Direct customer communication campaigns via automated WhatsApp and SMS broadcasts.",
        fullDescription: "Connect directly with prospective and existing customers via automated WhatsApp and SMS campaigns for immediate engagement.",
        iconName: "message-circle",
        features: ["WhatsApp Business Broadcasts", "SMS Campaign Setup", "Click-to-WhatsApp Buttons", "Broadcast Scheduling"],
        deliverables: ["Automated Broadcast Setup", "Campaign Delivery Reports", "Contact Segmentation"]
      },
      {
        id: "email-marketing-automation",
        title: "Email Marketing Automation",
        shortDescription: "Automated welcome series, lead nurture workflows, and promotional email broadcasts.",
        fullDescription: "Nurture leads and build repeat business with automated email sequences, custom newsletter templates, and targeted broadcasts.",
        iconName: "mail",
        features: ["Automated Welcome Series", "Lead Nurture Workflows", "Custom Email Templates", "Audience Segmentation"],
        deliverables: ["Email Automation Setup", "Open & Click Analytics", "Custom Copywriting"]
      },
      {
        id: "brand-awareness-promotion",
        title: "Brand Awareness & Promotion",
        shortDescription: "Expand market reach and elevate brand authority across digital media channels.",
        fullDescription: "Maximize local and regional brand recognition through multi-channel digital media campaigns designed to build long-term trust.",
        iconName: "megaphone",
        features: ["Multi-Channel Exposure", "Local Market Targeting", "Press & Announcement Ads", "Visual Asset Design"],
        deliverables: ["Brand Exposure Campaign", "Reach & Frequency Reports", "Media Asset Bundle"]
      }
    ]
  },
  {
    id: "graphic-designing",
    title: "Graphic Designing",
    tagline: "Creative Visual Identity & Branding Solutions",
    overview: "Elevate your brand presence with eye-catching logo design, print marketing collateral, social media visual posts, and professional business cards.",
    valueProposition: "We create high-impact visual assets that build instant brand recognition, capture customer attention, and establish corporate credibility.",
    services: [
      {
        id: "logo-designing",
        title: "Logo Designing",
        shortDescription: "Bespoke vector logo design, brand mark creation, and comprehensive visual identity guidelines.",
        fullDescription: "Custom brand logos engineered to represent your business identity with unique iconography, brand color palettes, and fully scalable vector formats.",
        iconName: "pen-tool",
        features: ["Custom Vector Concepts", "Full Source Files (AI, SVG, EPS)", "Brand Color Guide", "Transparent PNG Exports"],
        deliverables: ["Primary & Secondary Logo Marks", "Brand Identity Guidelines", "Vector Master File Suite"]
      },
      {
        id: "boucher-flyer-design",
        title: "Boucher & Flyer Design",
        shortDescription: "High-resolution print-ready brochures, tri-fold pamphlets, and promotional flyers.",
        fullDescription: "Striking print marketing collateral designed with clear visual hierarchy, persuasive typography, and commercial print bleed setup.",
        iconName: "layers",
        features: ["Print-Ready High DPI Layouts", "Tri-Fold & Bi-Fold Formats", "Custom Copy Layouts", "Commercial Print Bleed Setup"],
        deliverables: ["Print-Ready PDF Master", "Editable Vector Source File", "Digital Marketing PDF"]
      },
      {
        id: "social-media-post-design",
        title: "Social Media Post Design",
        shortDescription: "Engaging visual posts, promotional banners, and story graphics for Facebook, Instagram & LinkedIn.",
        fullDescription: "Custom social media creative graphics tailored to boost engagement, highlight promotional offers, and maintain cohesive brand identity.",
        iconName: "layout-grid",
        features: ["Custom Feed & Story Formats", "Brand Consistent Templates", "Promotional Offer Banners", "High-Resolution Image Exports"],
        deliverables: ["Social Media Graphic Bundle", "Editable Design Templates", "Optimized Web Assets"]
      },
      {
        id: "business-cards-design",
        title: "Business Cards Design",
        shortDescription: "Premium double-sided business card designs ready for professional printing.",
        fullDescription: "Clean, elegant, double-sided business card layouts incorporating brand colors, contact information, and optional QR code integration.",
        iconName: "credit-card",
        features: ["Double-Sided Layouts", "Standard & Custom Dimensions", "Contact QR Code Integration", "High-Resolution Vector Graphics"],
        deliverables: ["Print-Ready Master PDF", "Vector Source Files", "Digital Card Preview"]
      }
    ]
  }
];
