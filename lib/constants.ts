export const BRAND = {
  name: "Personalize-se",
  creators: {
    name1: "Victor Hugo Alves",
    name2: "Ana Beatriz Mendes",
  },
  mission: "Criar produtos personalizados com qualidade impecável que transmitam autenticidade e emoção.",
  vision: "Ser reconhecida como uma marca de referência em personalização criativa e tecnológica no Maranhão.",
  purpose: "Tornar cada pessoa e marca única, através de produtos que contam histórias com arte e cuidado.",
} as const;

export const COLORS = {
  background: "#F9F5F0",
  dark: "#1E1E1E",
  accent: {
    primary: "#C97A65",
    secondary: "#B28D8B",
    tertiary: "#A66B5B",
  },
} as const;

export const NAVIGATION = {
  home: "/",
  about: "/about",
  products: "/products",
  contact: "/contact",
} as const;

export const HERO = {
  title: "Presentes únicos, feitos com",
  titleHighlight: "personalidade",
  description: "Canecas, camisas e muito mais — cada detalhe pensado pra ser tão especial quanto quem vai receber.",
  cta: "Peça a sua",
} as const;

export const ABOUT = {
  title: "Sobre a Personalize-se",
  description: "Somos uma marca de produtos personalizados que une criatividade, qualidade e tecnologia para transformar itens comuns em peças únicas e cheias de personalidade.",
  values: [
    {
      title: "Criatividade",
      description: "Cada produto é uma obra de arte única.",
    },
    {
      title: "Qualidade",
      description: "Acabamento impecável em cada detalhe.",
    },
    {
      title: "Tecnologia",
      description: "Ferramentas modernas para resultados perfeitos.",
    },
  ],
} as const;

export const PRODUCTS = {
  title: "Nossos Produtos",
  description: "Transforme ideias em realidade com nossos produtos personalizados.",
  items: [
    {
      id: 1,
      name: "Canecas Personalizadas",
      description: "Canecas de alta qualidade com sua arte ou mensagem única.",
      image: "/images/products/custom.jpeg",
    },
    {
      id: 2,
      name: "Canecas Corporativas",
      description: "Canecas com a logo da sua empresa ou evento.",
      image: "/images/products/corporative.jpeg",
    },
    {
      id: 3,
      name: "Canecas Temáticas",
      description: "Canecas com temas como filmes, séries, jogos, etc.",
      image: "/images/products/tematic.jpeg",
    },
  ],
} as const;

export const TESTIMONIALS = {
  title: "O que nossos clientes dizem",
  items: [
    {
      id: 1,
      name: "Cliente Satisfeito",
      text: "Produto incrível! Superou todas as expectativas.",
      rating: 5,
    },
    {
      id: 2,
      name: "Cliente Feliz",
      text: "Qualidade impecável e atendimento excepcional.",
      rating: 5,
    },
    {
      id: 3,
      name: "Cliente Encantado",
      text: "Presente perfeito! Recebeu muitos elogios.",
      rating: 5,
    },
  ],
} as const;

export const LOCATION = {
  city: "São Luís",
  state: "Maranhão",
  stateCode: "MA",
  cityCode: "SLZ",
  country: "Brasil",
  countryCode: "BR",
  coordinates: {
    latitude: -2.5297,
    longitude: -44.3028,
  },
} as const;

export const BUSINESS_HOURS = {
  weekdays: {
    opens: "08:00",
    closes: "18:00",
    days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
  },
} as const;

export const CONTACT = {
  title: "Entre em contato",
  description: "Solicite um orçamento ou tire suas dúvidas. Estamos prontos para transformar suas ideias em realidade!",
  email: "personalize.se.studio@gmail.com",
  phone: "(98) 92002-1053",
  whatsapp: "https://wa.me/5598920021053?text=Ol%C3%A1!%20Vi%20os%20seus%20produtos%20no%20site%20e%20gostaria%20de%20conhecer%20mais",
} as const;

export const FOOTER = {
  copyright: `© ${new Date().getFullYear()} ${BRAND.name}. Todos os direitos reservados.`,
  links: {
    instagram: "https://instagram.com/personalize_se.slz",
    // facebook: "https://facebook.com/personalize-se",
  },
} as const;

