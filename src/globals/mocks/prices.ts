export interface PricingPlan {
  id: string;
  title: string;
  price: number;
  description: string;
  features: string[];
  whatsappMessage: string;
}

export const pricingPlans: PricingPlan[] = [
  {
    id: "bronze",
    title: "Consulta Bronze",
    price: 200,
    description:
      "Ideal para quem deseja iniciar o acompanhamento nutricional com um plano personalizado.",
    features: [
      "Consulta online",
      "Dieta totalmente personalizada",
      "Acesso ao aplicativo",
      "Lista de compras",
      "Diário de metas",
    ],
    whatsappMessage:
      "Olá! Tenho interesse na Consulta Bronze da nutricionista Karla Braga.",
  },
  {
    id: "prata",
    title: "Consulta Prata",
    price: 380,
    description:
      "Para quem busca acompanhamento mais próximo e suporte contínuo.",
    features: [
      "Duas consultas online",
      "Dieta totalmente personalizada",
      "Acesso ao aplicativo",
      "Lista de compras",
      "Diário de metas",
      "Suporte 24 horas",
    ],
    whatsappMessage:
      "Olá! Tenho interesse na Consulta Prata da nutricionista Karla Braga.",
  },
  {
    id: "ouro",
    title: "Consulta Ouro",
    price: 540,
    description:
      "Acompanhamento completo para resultados consistentes e duradouros.",
    features: [
      "Três consultas online",
      "Dieta totalmente personalizada",
      "Acesso ao aplicativo",
      "Lista de compras",
      "Diário de metas",
      "Suporte 24 horas",
    ],
    whatsappMessage:
      "Olá! Tenho interesse na Consulta Ouro da nutricionista Karla Braga.",
  },
];
