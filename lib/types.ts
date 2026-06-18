export type Category =
  | "Home-cooked Meals"
  | "Baking & Desserts"
  | "Tailoring & Alterations"
  | "Handicrafts"
  | "Beauty at Home"
  | "Tuition & Classes"
  | "Jewelry"
  | "Hair Accessories"
  | "Bags & Pouches"
  | "Fashion Add-ons"
  | "Home-to-Wear Crossover";

export interface Listing {
  id: string;
  name: string;
  description: string;
  price: number;
  photo: string;
}

export interface Review {
  id: string;
  customerName: string;
  rating: number;
  comment: string;
  date: string;
  status?: "pending" | "approved";
}

export interface Homemaker {
  id: string;
  businessName: string;
  ownerFirstName: string;
  ownerEmail?: string;
  category: Category;
  area: string;            // e.g. "Wellawatte", "Nugegoda"
  bio: string;
  photos: string[];
  rating: number;          // 0–5
  reviewCount: number;
  priceFrom: number;       // LKR
  verified: boolean;
  featured: boolean;
  availableToday: boolean;
  whatsappNumber: string;  // e.g. "94771234567"
  listings: Listing[];
  reviews: Review[];
}

export interface Inquiry {
  id: string;
  homemakerId: string;
  homemakerName: string;
  customerName: string;
  customerPhone: string;
  message: string;
  date: string;
}
