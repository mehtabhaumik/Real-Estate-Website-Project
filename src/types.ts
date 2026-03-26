export interface Property {
  id: string;
  title: string;
  price: number;
  address: string;
  city: string;
  state: string;
  zip: string;
  type: 'House' | 'Condo' | 'Townhouse' | 'Land';
  bedrooms: number;
  bathrooms: number;
  sqft: number;
  description: string;
  features: string[];
  images: string[];
  isFeatured?: boolean;
  agentId: string;
  coordinates: { lat: number; lng: number };
}

export interface Agent {
  id: string;
  name: string;
  title: string;
  bio: string;
  phone: string;
  email: string;
  photo: string;
  socials: {
    facebook?: string;
    instagram?: string;
    twitter?: string;
    linkedin?: string;
  };
  recentSales: {
    id: string;
    address: string;
    price: number;
    date: string;
  }[];
}

export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  photo: string;
}
