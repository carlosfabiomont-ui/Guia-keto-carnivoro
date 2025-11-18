import { Resource } from '../types';

export const resources: Resource[] = [
  // Apps e Ferramentas
  {
    id: 'app_1',
    category: 'Apps e Ferramentas',
    title: "Cronometer",
    description: "Para rastrear micronutrientes e garantir uma dieta nutricionalmente completa.",
    author: "Ferramenta Digital",
    url: "https://cronometer.com/"
  },
  {
    id: 'app_2',
    category: 'Apps e Ferramentas',
    title: "MyFitnessPal",
    description: "Alternativa popular para contagem básica de macronutrientes.",
    author: "Ferramenta Digital",
    url: "https://www.myfitnesspal.com/"
  },
  {
    id: 'app_3',
    category: 'Apps e Ferramentas',
    title: "Carb Manager",
    description: "Aplicativo específico e popular para dietas low-carb e cetogênicas.",
    author: "Ferramenta Digital",
    url: "https://www.carbmanager.com/"
  },
  {
    id: 'app_4',
    category: 'Apps e Ferramentas',
    title: "Calculadora de Macros",
    description: "Calcule suas necessidades de proteínas e gorduras com nossa ferramenta interna.",
    author: "Ferramenta do Guia",
    internalView: { current: 'moduleDetail', moduleId: 7 }
  },

  // Canais Educativos
  {
    id: 'channel_1',
    category: 'Canais Educativos',
    title: "Dr. Shawn Baker",
    description: "Um dos principais defensores da dieta carnívora. Conteúdo baseado em ciência e experiência.",
    author: "YouTube / Instagram",
    url: "https://www.youtube.com/c/ShawnBakerMD"
  },
  {
    id: 'channel_2',
    category: 'Canais Educativos',
    title: "Dr. Paul Saladino",
    description: "Conhecido por sua abordagem 'carnívora de ancestralidade', com foco em órgãos.",
    author: "YouTube / Podcast",
    url: "https://www.youtube.com/c/PaulSaladinoMD"
  },
  {
    id: 'channel_3',
    category: 'Canais Educativos',
    title: "Dr. Ken Berry",
    description: "Médico com foco em desmistificar mitos nutricionais sobre dietas low-carb e keto.",
    author: "YouTube",
    url: "https://www.youtube.com/c/KenDBerryMD"
  },

  // Recursos Científicos
  {
    id: 'sci_1',
    category: 'Recursos Científicos',
    title: "PubMed",
    description: "A maior base de dados de estudos científicos e médicos do mundo.",
    author: "Pesquisa Acadêmica",
    url: "https://pubmed.ncbi.nlm.nih.gov/"
  },
  {
    id: 'sci_2',
    category: 'Recursos Científicos',
    title: "Nutrition & Metabolism Journal",
    description: "Jornal científico focado em nutrição e seu impacto no metabolismo.",
    author: "Pesquisa Acadêmica",
    url: "https://nutritionandmetabolism.biomedcentral.com/"
  },

  // Comunidades Online
  {
    id: 'comm_1',
    category: 'Comunidades Online',
    title: "Reddit r/carnivore",
    description: "Comunidade internacional com milhares de membros para troca de experiências e dicas.",
    author: "Comunidade Reddit",
    url: "https://www.reddit.com/r/carnivore/"
  },
  {
    id: 'comm_2',
    category: 'Comunidades Online',
    title: "World Carnivore Tribe",
    description: "Comunidade global no Facebook para troca de experiências e suporte.",
    author: "Grupo do Facebook",
    url: "https://www.facebook.com/groups/worldcarnivoretribe/"
  }
];