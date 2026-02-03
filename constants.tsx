
import { AppState } from './types';

export const INITIAL_STATE: AppState = {
  isAuthenticated: false,
  theme: {
    primary: '#1e293b',
    secondary: '#f8fafc',
    accent: '#9d174d', // Rose 800
    fontFamily: 'serif'
  },
  content: {
    home: {
      heroTitle: "Elegance woven into every thread.",
      heroSubtitle: "Sri Meenachi Textiles brings the finest international-grade women's fashion fabrics to the global stage. Experience premium quality from the heart of Tamil Nadu.",
      ctaText: "Explore Collections"
    },
    about: {
      story: "Sri Meenachi Textiles was founded with a passion for preserving the rich heritage of Indian textiles while embracing modern global fashion trends. Led by visionary founders T. Sudhakar and T. Karthick, we have grown into a leading name in premium sarees and dress materials.",
      mission: "To deliver unmatched quality in textiles while fostering sustainable global partnerships and empowering local artisans.",
      vision: "To be the world's most trusted partner for premium international women's textiles, bridging cultures through fashion."
    },
    contact: {
      email: "info@srimeenachitextiles.com",
      phones: ["94430 58863", "94884 17241"],
      address: "Shop No.1, Kalaignar Textiles Market, C.B. Road, Barugur – 635104, Krishnagiri District, Tamil Nadu, India"
    }
  },
  posts: [
    {
      id: '1',
      title: 'The Evolution of Silk: From Traditional to Contemporary',
      excerpt: 'How traditional silk weaving is adapting to the modern international fashion scene.',
      content: 'Silk has always been the gold standard for premium textiles. At Sri Meenachi Textiles, we combine centuries-old techniques with modern design sensibilities...',
      image: 'https://picsum.photos/800/600?random=1',
      date: '2024-05-15',
      author: 'T. Sudhakar'
    },
    {
      id: '2',
      title: '2024 Textile Trends for Global Buyers',
      excerpt: 'Key trends in sarees and dress materials that are taking the international markets by storm.',
      content: 'Sustainability and bold prints are the driving forces of this season. We are seeing a massive surge in demand for organic cotton blends...',
      image: 'https://picsum.photos/800/600?random=2',
      date: '2024-05-10',
      author: 'T. Karthick'
    }
  ],
  inquiries: []
};

export const SERVICES = [
  {
    title: "Wholesale Textile Supply",
    description: "Premium bulk sourcing for global fashion brands and boutique retailers.",
    icon: "Package"
  },
  {
    title: "Saree Distribution",
    description: "Traditional and modern sarees, including silk, chiffon, and designer wear.",
    icon: "Layers"
  },
  {
    title: "Dress Materials",
    description: "High-quality fabrics for unstitched suits and western silhouettes.",
    icon: "Scissors"
  },
  {
    title: "International Export",
    description: "Seamless logistics and customs handling for worldwide shipping.",
    icon: "Globe"
  }
];

export const DESTINATIONS = [
  { region: "North America", markets: ["USA", "Canada"], status: "Active" },
  { region: "Europe", markets: ["UK", "France", "Germany", "Italy"], status: "Active" },
  { region: "Middle East", markets: ["UAE", "Saudi Arabia", "Qatar"], status: "Active" },
  { region: "Southeast Asia", markets: ["Singapore", "Malaysia", "Thailand"], status: "Growing" },
  { region: "Oceania", markets: ["Australia", "New Zealand"], status: "Growing" }
];
