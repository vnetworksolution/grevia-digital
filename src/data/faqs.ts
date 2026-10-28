import faqsJson from './faqs.json';

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category?: string;
}

export const faqsData: FAQItem[] = faqsJson;
