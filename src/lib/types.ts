export interface FaqItem {
  question: string;
  answer: string;
}

export interface ServiceItem {
  slug: string;
  title: string;
  category: "puja" | "sanskar" | "vivah" | "katha" | "jyotish";
  shortDescription: string;
  intro: string;
  details: string[];
  preparation: string[];
  benefits: string[];
  faqs: FaqItem[];
  relatedSlugs?: string[];
  image: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string[];
  date: string;
  readTime: string;
  image: string;
}
