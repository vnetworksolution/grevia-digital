export interface IndustryItem {
  id: string;
  name: string;
  description: string;
  iconName: string;
}

export const industriesData: IndustryItem[] = [
  {
    id: "startups",
    name: "Startups & Emerging Businesses",
    description: "Building strong initial online visibility, modern web infrastructure, and targeted launch marketing campaigns.",
    iconName: "rocket"
  },
  {
    id: "hotels-homestays",
    name: "Hotels & Homestays",
    description: "Showcasing guest experiences, capturing direct website booking enquiries, and dominating local travel search.",
    iconName: "building-2"
  },
  {
    id: "travel-agencies",
    name: "Travel & Tour Agencies",
    description: "Promoting custom tour packages, generating qualified travel enquiries, and building organic search presence.",
    iconName: "compass"
  },
  {
    id: "healthcare",
    name: "Healthcare & Medical Clinics",
    description: "Establishing professional clinical authority, clear patient information channels, and local search trust.",
    iconName: "activity"
  },
  {
    id: "salons-wellness",
    name: "Salons & Wellness Centers",
    description: "Local Google Map pack rankings, Instagram visual marketing, and streamlined appointment enquiry routes.",
    iconName: "sparkles"
  },
  {
    id: "corporate-agencies",
    name: "Corporate Agencies & B2B",
    description: "High-authority corporate web design, corporate brand positioning, and targeted B2B client acquisition.",
    iconName: "briefcase"
  },
  {
    id: "ngos",
    name: "NGOs & Non-Profit Organizations",
    description: "Clear mission presentation, community engagement platforms, and transparent digital communication.",
    iconName: "heart"
  },
  {
    id: "industries-manufacturing",
    name: "Industrial & Manufacturing",
    description: "Structured product catalogs, B2B lead capture funnels, and search engine visibility for industrial buyers.",
    iconName: "factory"
  },
  {
    id: "local-service-businesses",
    name: "Local & Service Businesses",
    description: "Connecting local service providers directly with active nearby customers through targeted local SEO.",
    iconName: "wrench"
  },
  {
    id: "entrepreneurs-professionals",
    name: "Entrepreneurs & Professionals",
    description: "Personal brand websites, consultation booking funnels, and digital authority establishment.",
    iconName: "user-check"
  }
];
