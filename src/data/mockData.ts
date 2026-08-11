import { Collection, Company, Product, Testimonial } from "../types";

import pagneNew01 from "../assets/images/pagne_new_01.jpeg";
import pagneNew02 from "../assets/images/pagne_new_02.jpeg";
import pagneNew03 from "../assets/images/pagne_new_03.jpeg";
import pagneNew04 from "../assets/images/pagne_new_04.jpeg";
import pagneNew05 from "../assets/images/pagne_new_05.jpeg";
import pagneNew06 from "../assets/images/pagne_new_06.jpeg";
import pagneNew07 from "../assets/images/pagne_new_07.jpeg";
import pagneNew08 from "../assets/images/pagne_new_08.jpeg";
import pagneNew09 from "../assets/images/pagne_new_09.jpeg";
import pagneNew10 from "../assets/images/pagne_new_10.jpeg";
import pagneNew11 from "../assets/images/pagne_new_11.jpeg";
import pagneNew12 from "../assets/images/pagne_new_12.jpeg";
import pagneNew13 from "../assets/images/pagne_new_13.jpeg";
import pagneNew14 from "../assets/images/pagne_new_14.jpeg";
import pagneNew15 from "../assets/images/pagne_new_15.jpeg";
import pagneNew16 from "../assets/images/pagne_new_16.jpeg";
import pagneNew17 from "../assets/images/pagne_new_17.jpeg";
import pagneNew18 from "../assets/images/pagne_new_18.jpeg";
import pagneNew19 from "../assets/images/pagne_new_19.jpeg";
import pagneNew20 from "../assets/images/pagne_new_20.jpeg";
import pagneNew21 from "../assets/images/pagne_new_21.jpeg";
import pagneNew22 from "../assets/images/pagne_new_22.jpeg";
import pagneNew23 from "../assets/images/pagne_new_23.jpeg";
import pagneNew24 from "../assets/images/pagne_new_24.jpeg";
import pagneNew25 from "../assets/images/pagne_new_25.jpeg";
import pagneNew26 from "../assets/images/pagne_new_26.jpeg";
import pagneNew27 from "../assets/images/pagne_new_27.jpeg";
import pagneNew28 from "../assets/images/pagne_new_28.jpeg";
import pagneNew29 from "../assets/images/pagne_new_29.jpeg";
import pagneNew30 from "../assets/images/pagne_new_30.jpeg";
import pagneNew31 from "../assets/images/pagne_new_31.jpeg";
import pagneNew32 from "../assets/images/pagne_new_32.jpeg";
import pagneNew33 from "../assets/images/pagne_new_33.jpeg";
import pagneNew34 from "../assets/images/pagne_new_34.jpeg";
import pagneNew35 from "../assets/images/pagne_new_35.jpeg";
import pagneNew36 from "../assets/images/pagne_new_36.jpeg";
import pagneNew37 from "../assets/images/pagne_new_37.jpeg";
import pagneNew38 from "../assets/images/pagne_new_38.jpeg";
import pagneNew39 from "../assets/images/pagne_new_39.jpeg";
import pagneNew40 from "../assets/images/pagne_new_40.jpeg";
import pagneNew41 from "../assets/images/pagne_new_41.jpeg";
import pagneNew42 from "../assets/images/pagne_new_42.jpeg";
import pagneNew43 from "../assets/images/pagne_new_43.jpeg";
import pagneNew44 from "../assets/images/pagne_new_44.jpeg";
import pagneNew45 from "../assets/images/pagne_new_45.jpeg";
import pagneNew46 from "../assets/images/pagne_new_46.jpeg";
import pagneNew47 from "../assets/images/pagne_new_47.jpeg";
import pagneNew48 from "../assets/images/pagne_new_48.jpeg";
import pagneNew49 from "../assets/images/pagne_new_49.jpeg";
import pagneNew50 from "../assets/images/pagne_new_50.jpeg";
import pagneNew51 from "../assets/images/pagne_new_51.jpeg";
import pagneNew52 from "../assets/images/pagne_new_52.jpeg";
import pagneNew53 from "../assets/images/pagne_new_53.jpeg";
import pagneNew54 from "../assets/images/pagne_new_54.jpeg";
import pagneNew55 from "../assets/images/pagne_new_55.jpeg";
import pagneNew56 from "../assets/images/pagne_new_56.jpeg";
import pagneNew57 from "../assets/images/pagne_new_57.jpeg";
import pagneNew58 from "../assets/images/pagne_new_58.jpeg";
import pagneNew59 from "../assets/images/pagne_new_59.jpeg";
import pagneNew60 from "../assets/images/pagne_new_60.jpeg";
import pagneNew61 from "../assets/images/pagne_new_61.jpg";
import pagneNew62 from "../assets/images/pagne_new_62.jpg";
import pagneNew63 from "../assets/images/pagne_new_63.webp";

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
    image: pagneNew01,
  },
  {
    id: "c2",
    name: "Tradition",
    slug: "tradition",
    description: "L'authenticité et la richesse des inspirations africaines.",
    image: pagneNew17,
  },
  {
    id: "c3",
    name: "Prestige",
    slug: "prestige",
    description: "Des tissus sélectionnés pour les moments d'exception.",
    image: pagneNew09,
  },
  {
    id: "c4",
    name: "Tendances",
    slug: "tendances",
    description: "Les motifs et couleurs qui accompagnent les tendances actuelles.",
    image: pagneNew25,
  }
];

export const products: Product[] = [
  {
    id: "p1",
    name: "Aurore Impériale",
    reference: "DEMP-EL-001",
    collection: "Élégance",
    description: "Un tissu d'une rare élégance, tissé avec des fils dorés subtils. Parfait pour les grandes cérémonies et mariages.",
    images: [pagneNew01, pagneNew02, pagneNew03, pagneNew04, pagneNew05, pagneNew06, pagneNew07, pagneNew08],
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
    images: [pagneNew09, pagneNew10, pagneNew11, pagneNew12, pagneNew13, pagneNew14, pagneNew15, pagneNew16],
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
    images: [pagneNew17, pagneNew18, pagneNew19, pagneNew20, pagneNew21, pagneNew22, pagneNew23, pagneNew24],
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
    images: [pagneNew25, pagneNew26, pagneNew27, pagneNew28, pagneNew29, pagneNew30, pagneNew31, pagneNew32],
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
    images: [pagneNew33, pagneNew34, pagneNew35, pagneNew36, pagneNew37, pagneNew38],
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
    images: [pagneNew39, pagneNew40, pagneNew41, pagneNew42, pagneNew43, pagneNew44],
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
    images: [pagneNew45, pagneNew46, pagneNew47, pagneNew48, pagneNew49, pagneNew50],
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
    images: [pagneNew51, pagneNew52, pagneNew53, pagneNew54, pagneNew55, pagneNew56, pagneNew57, pagneNew58, pagneNew59, pagneNew60, pagneNew61, pagneNew62, pagneNew63],
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
