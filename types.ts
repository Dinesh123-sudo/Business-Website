
export interface Content {
  home: {
    heroTitle: string;
    heroSubtitle: string;
    ctaText: string;
  };
  about: {
    story: string;
    mission: string;
    vision: string;
  };
  contact: {
    email: string;
    phones: string[];
    address: string;
  };
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  date: string;
  author: string;
}

export interface Inquiry {
  id: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  status: 'new' | 'read' | 'replied';
  timestamp: number;
}

export interface ThemeConfig {
  primary: string;
  secondary: string;
  accent: string;
  fontFamily: 'serif' | 'sans';
}

export interface AppState {
  content: Content;
  posts: BlogPost[];
  inquiries: Inquiry[];
  theme: ThemeConfig;
  isAuthenticated: boolean;
}
