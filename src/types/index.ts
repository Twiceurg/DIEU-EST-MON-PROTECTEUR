export interface Product {
  id: string;
  name: string;
  reference: string;
  collection: string;
  description: string;
  images: string[];
  colors: string[];
  price?: string;
  available: boolean;
  featured: boolean;
  isNew: boolean;
  popularity: number;
}

export interface Collection {
  id: string;
  name: string;
  description: string;
  image: string;
  slug: string;
}

export interface Testimonial {
  id: string;
  author: string;
  text: string;
}

export interface Company {
  name: string;
  manager: string;
  description: string;
  phone: string;
  whatsapp: string;
  email: string;
  address: string;
  socialLinks: {
    facebook?: string;
    instagram?: string;
    tiktok?: string;
  };
}
