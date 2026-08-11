import { Collection, Company, Product, Testimonial } from "../types";

import africanVelvet from "../assets/images/african_velvet_fabric_1786449988555.jpg";
import ghanaKente from "../assets/images/ghana_kente_cloth_1786450001089.jpg";
import burkinaDanFani from "../assets/images/burkina_faso_dan_fani_1786450013076.jpg";
import africanScarf from "../assets/images/african_headwrap_scarf_1786450028137.jpg";

import nigerianVelvet2 from "../assets/images/nigerian_velvet_2_1786450178572.jpg";
import ghanaKente2 from "../assets/images/ghana_kente_2_1786450192768.jpg";
import burkinaDanFani2 from "../assets/images/burkina_dan_fani_2_1786450204500.jpg";
import africanScarf2 from "../assets/images/african_scarf_2_1786450215098.jpg";

export const company: Company = {
  name: "DIEU EST MON PROTECTEUR",
  manager: "KPODZO Akossiwa",
  description: "Maison dédiée à la découverte et à la valorisation de pagnes et tissus sélectionnés avec soin.",
  phone: "+228 93 40 91 91",
  whatsapp: "+22893409191",
  email: "contact@dieuestmonprotecteur.com",
  address: "Lomé, Togo",
  socialLinks: {
    facebook: "https://facebook.com",
    instagram: "https://instagram.com",
  }
};

export const collections: Collection[] = [
  {
    id: "c1",
    name: "Élégance",
    slug: "elegance",
    description: "Des motifs raffinés pour vos occasions spéciales.",
    image: africanVelvet,
  },
  {
    id: "c2",
    name: "Tradition",
    slug: "tradition",
    description: "L'authenticité et la richesse des inspirations africaines.",
    image: ghanaKente,
  },
  {
    id: "c3",
    name: "Prestige",
    slug: "prestige",
    description: "Des tissus sélectionnés pour les moments d'exception.",
    image: burkinaDanFani,
  },
  {
    id: "c4",
    name: "Tendances",
    slug: "tendances",
    description: "Les motifs et couleurs qui accompagnent les tendances actuelles.",
    image: africanScarf,
  }
];

export const products: Product[] = [
  {
    id: "p1",
    name: "Aurore Impériale",
    reference: "DEMP-EL-001",
    collection: "Élégance",
    description: "Un tissu d'une rare élégance, tissé avec des fils dorés subtils. Parfait pour les grandes cérémonies et mariages.",
    images: [
      africanVelvet,
      nigerianVelvet2
    ],
    colors: ["Noir", "Or", "Rouge"],
    available: true,
    featured: true,
    isNew: true,
    popularity: 98,
  },
  {
    id: "p2",
    name: "Nuit Étoilée",
    reference: "DEMP-PR-042",
    collection: "Prestige",
    description: "Inspiré par la voûte céleste, ce pagne sombre aux éclats argentés confère une prestance incomparable.",
    images: [
      burkinaDanFani,
      burkinaDanFani2
    ],
    colors: ["Terre", "Beige", "Noir"],
    available: true,
    featured: true,
    isNew: false,
    popularity: 95,
  },
  {
    id: "p3",
    name: "Racines",
    reference: "DEMP-TR-012",
    collection: "Tradition",
    description: "Motifs géométriques traditionnels revisités dans une palette chaleureuse pour un retour aux sources assumé.",
    images: [
      ghanaKente,
      ghanaKente2
    ],
    colors: ["Rouge", "Jaune", "Vert", "Bleu"],
    available: true,
    featured: false,
    isNew: true,
    popularity: 85,
  },
  {
    id: "p4",
    name: "Souffle Océanique",
    reference: "DEMP-TE-089",
    collection: "Tendances",
    description: "Des nuances de bleu apaisantes sur une trame légère. Idéal pour une tenue de jour chic et décontractée.",
    images: [
      africanScarf,
      africanScarf2
    ],
    colors: ["Multicolore"],
    available: false,
    featured: true,
    isNew: false,
    popularity: 92,
  },
  {
    id: "p5",
    name: "Émeraude Royale",
    reference: "DEMP-EL-002",
    collection: "Élégance",
    description: "Un vert profond et vibrant. Ce tissu velours capte la lumière pour révéler des textures riches et sophistiquées.",
    images: [
      nigerianVelvet2
    ],
    colors: ["Vert", "Or", "Argent"],
    available: true,
    featured: false,
    isNew: true,
    popularity: 88,
  },
  {
    id: "p6",
    name: "Feu de Savane",
    reference: "DEMP-TR-045",
    collection: "Tradition",
    description: "Un tissage kente aux teintes ardentes de rouge, orange et or, symbole de force et de vitalité.",
    images: [
      ghanaKente2
    ],
    colors: ["Orange", "Rouge", "Or", "Noir"],
    available: true,
    featured: true,
    isNew: false,
    popularity: 90,
  },
  {
    id: "p7",
    name: "Indigo Profond",
    reference: "DEMP-PR-088",
    collection: "Prestige",
    description: "Faso Dan Fani authentique aux rayures indigo et blanches, alliant rusticité et élégance pure.",
    images: [
      burkinaDanFani2
    ],
    colors: ["Indigo", "Blanc"],
    available: true,
    featured: false,
    isNew: true,
    popularity: 82,
  },
  {
    id: "p8",
    name: "Éclat Solaire",
    reference: "DEMP-TE-102",
    collection: "Tendances",
    description: "Motifs circulaires vibrants aux couleurs audacieuses, parfait pour des créations contemporaines.",
    images: [
      africanScarf2
    ],
    colors: ["Magenta", "Cyan", "Jaune"],
    available: true,
    featured: true,
    isNew: true,
    popularity: 94,
  }
];

export const testimonials: Testimonial[] = [
  {
    id: "t1",
    author: "Aminata D.",
    text: "Une très belle sélection et un excellent accueil. Les pagnes sont d'une qualité exceptionnelle."
  },
  {
    id: "t2",
    author: "Sophie M.",
    text: "J'ai trouvé exactement le tissu que je recherchais pour mon mariage. Merci à Mme Kpodzo pour ses précieux conseils."
  },
  {
    id: "t3",
    author: "Chantal O.",
    text: "La qualité et les motifs sont magnifiques. Une adresse incontournable pour les amoureuses du beau textile."
  }
];
