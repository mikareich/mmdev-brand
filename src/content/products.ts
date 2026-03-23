export type Product = {
  id: number;
  name: string;
  description: string;
  features: string[];
  price: number;
};

export const PRODUCTS: Product[] = [
  {
    id: 0,
    name: "Postcard",
    description:
      "A sharp, lightning-fast single-page website perfect for focused landing pages, portfolios, or a bold digital business card.",
    features: [
      "Single-Page Application",
      "Basic SEO Setup",
      "Mobile-First Design",
      "Lighting Fast",
    ],
    price: 20,
  },
  {
    id: 1,
    name: "Letter",
    description:
      "A structured, multi-page foundation with a built-in CMS, giving you the space to detail your services and tell your story.",
    features: [
      "Everything in Postcard",
      "Multi-Page Structure",
      "Advanced SEO Setup",
      "Analytics Setup",
      "CMS Integration",
    ],
    price: 40,
  },
  {
    id: 2,
    name: "Parcel",
    description:
      "A robust, scalable platform engineered for complex architecture, dynamic content, and advanced custom integrations.",
    features: [
      "Everything in Letter",
      "Dynamic Architecture",
      "Advanced Headless CMS",
      "API Integrations",
      "Complex Forms & Logic",
      "Premium Performance Auditing",
    ],
    price: 80,
  },
] satisfies Product[];
