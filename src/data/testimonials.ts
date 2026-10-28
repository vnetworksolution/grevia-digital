import testimonialsJson from './testimonials.json';

export interface TestimonialItem {
  id: string;
  clientName: string;
  businessName: string;
  designation: string;
  reviewText: string;
  rating: number;
  tag?: string;
  imagePlaceholder?: string;
  industry?: string;
}

export const testimonialsData: TestimonialItem[] = testimonialsJson;
