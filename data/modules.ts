import { Module } from '../types';

export const modules: Module[] = [
  {
    id: 1,
    title: "Fundamentos da Dieta",
    subtitle: "Base científica, histórica e prática.",
    icon: "📜",
    content: [
      { type: 'heading', content: "Dieta Carnívora: Definição Clara e Simples" },
      { type: 'paragraph', content: "A dieta carnívora é um padrão alimentar que consiste exclusivamente em produtos de origem animal, como carnes, ovos e alguns laticínios. Diferente de outras dietas restritivas, seu foco principal é remover completamente carboidratos vegetais e processados, permitindo que o corpo funcione a partir de proteínas e gorduras naturais." },
      { type: 'quote', content: "A dieta carnívora não é apenas um plano alimentar; é um caminho para a clareza mental, energia sustentável e um corpo mais forte.", author: "Keto Carnívoro" },
      { type: 'heading', content: "Breve Histórico e Contexto Científico" },
      { type: 'paragraph', content: "Embora pareça uma tendência moderna, a dieta carnívora tem raízes antigas. Povos como os inuítes ou mongóis tradicionais consumiam dietas predominantemente animais, adaptando-se perfeitamente ao ambiente. Nos últimos anos, pesquisas e relatos clínicos têm chamado atenção para seus potenciais benefícios, incluindo redução de inflamação, melhora de marcadores metabólicos e aumento da saciedade." },
      { type: 'heading', content: "Base Científica e Evidências" },
      { type: 'paragraph', content: "Um dos pilares da dieta carnívora é a compreensão do metabolismo energético. Ao eliminar carboidratos, o corpo entra em um estado de cetose nutricional, utilizando gordura como principal fonte de energia. Pesquisas indicam que essa adaptação pode levar a uma maior estabilidade nos níveis de açúcar no sangue, menor inflamação e uma eficiência energética superior." },
      { type: 'list', content: [
        "Metabolismo Otimizado: Estudos comparativos mostram que dietas com baixo carboidrato podem melhorar a flexibilidade metabólica e a sensibilidade à insulina.",
        "Saciedade e Controle de Peso: A densidade nutricional de proteínas e gorduras animais promove saciedade duradoura.",
        "Precedentes Históricos: Povos tradicionais, como os Inuítes e os Massai, são exemplos vivos da viabilidade e dos benefícios de uma alimentação focada em produtos animais."
      ]},
      { type: 'evidence', content: "Pesquisadores como Dr. Shawn Baker e Dr. Paul Saladino têm compilado e analisado uma vasta gama de evidências anedóticas e estudos, demonstrando os potenciais benefícios da dieta carnívora na saúde.", author: "Pioneiros na Pesquisa" },
    ],
  },
  {
    id: 2,
    title: "Benefícios da Transformação",
    subtitle: "Emagrecimento, energia e clareza mental.",
    icon: "🌟",
    content: [
      { type: 'heading', content: "Emagrecimento Sustentável" },
      { type: 'paragraph', content: "Uma das razões mais comuns para iniciar a dieta carnívora é o controle de peso de forma simples e eficaz. Por eliminar carboidratos e focar em proteínas e gorduras naturais, o corpo tende a:" },
      { type: 'list', content: [
        "Sentir mais saciedade, evitando lanches desnecessários e fome constante.",
        "Reduzir picos de insulina, favorecendo a queima de gordura.",
        "Simplificar escolhas alimentares, tornando o planejamento menos estressante."
      ]},
      { type: 'heading', content: "Saúde Metabólica e Energia" },
      { type: 'paragraph', content: "A dieta também pode otimizar marcadores metabólicos, como glicemia e colesterol. Estudos e relatos de usuários sugerem melhora nos níveis de triglicerídeos e HDL, redução da inflamação e desconfortos digestivos, e energia mais constante durante o dia." },
      { type: 'heading', content: "Clareza Mental e Foco" },
      { type: 'paragraph', content: "Muitos iniciantes relatam melhora significativa na concentração e memória. Isso ocorre porque a dieta evita picos de glicose, fornece cetonas e aminoácidos essenciais que suportam a função cerebral, e reduz a inflamação sistêmica que pode interferir na clareza mental." }
    ],
  },
  {
    id: 3,
    title: "Riscos e Considerações",
    subtitle: "Adaptação, deficiências e supervisão médica.",
    icon: "⚠️",
    content: [
      { type: 'heading', content: "Aviso Importante: Consulte Seu Médico Antes de Iniciar!" },
      { type: 'paragraph', content: "A dieta carnívora é uma abordagem dietética restritiva e pode não ser adequada para todos. É fundamental buscar orientação de um profissional de saúde qualificado (médico ou nutricionista) antes de iniciar qualquer mudança dietética significativa. Este material não substitui a consulta médica." },
      { type: 'heading', content: "Possíveis Deficiências Nutricionais" },
      { type: 'paragraph', content: "A ausência de vegetais e frutas pode gerar deficiências em alguns micronutrientes se não houver planejamento e suplementação adequados, sob orientação profissional:" },
      { type: 'list', content: [
        "Vitamina C: Essencial para imunidade e colágeno; pode ser obtida em pequenas quantidades de carnes cruas ou fígado. A deficiência prolongada pode levar a problemas sérios.",
        "Fibra Alimentar: A ausência de vegetais reduz drasticamente a ingestão de fibra. É crucial observar a consistência intestinal e manter hidratação adequada.",
        "Minerais Específicos: Cálcio, magnésio e potássio podem ser insuficientes. Monitoramento laboratorial é recomendado."
      ]},
      { type: 'heading', content: "Período de Adaptação e Sinais de Alerta ('Keto Flu')" },
      { type: 'paragraph', content: "O corpo pode levar de 2 a 6 semanas para se adaptar totalmente. Durante esse período, é comum sentir fadiga, dores de cabeça, mudanças no padrão intestinal e cãibras musculares. Mantenha hidratação adequada e ingestão de sal/eletrólitos para compensar perdas." },
      { type: 'heading', content: "Quando a Supervisão Médica é Indispensável" },
       { type: 'list', content: [
          "Se você tem condições crônicas como diabetes (especialmente tipo 1), hipertensão, problemas renais ou hepáticos.",
          "Se usa medicações contínuas que possam ser afetadas pela dieta (para pressão arterial, glicemia, etc.).",
          "Se possui histórico de transtornos alimentares.",
          "Se está grávida, amamentando ou é uma criança/adolescente.",
          "Se planeja seguir a dieta por longos períodos sem monitoramento."
       ]}
    ],
  },
  {
    id: 4,
    title: "Guia de Início Rápido",
    subtitle: "Plano de ação para as primeiras semanas.",
    icon: "🚀",
    content: [
      { type: 'heading', content: "Preparação Mental e Física para uma Transição Suave" },
      { type: 'paragraph', content: "Antes de iniciar, prepare corpo e mente para as mudanças. Entenda que a dieta exige disciplina inicial e esteja ciente dos desafios da fase de adaptação. Faça uma lista de objetivos claros para se manter motivado." },
      { type: 'heading', content: "Estratégias de Transição Gradual (2-3 Semanas)" },
      { type: 'paragraph', content: "Para minimizar os efeitos da 'gripe low-carb' ou 'keto flu', considere uma transição em etapas. Isso permite que seu corpo se adapte progressivamente." },
      { type: 'list', content: [
          "Semana 1: Redução de Carboidratos Processados. Comece eliminando açúcares, grãos refinados (pães, massas), legumes e frutas ricas em amido. Foque em proteínas, gorduras saudáveis e vegetais de baixo carboidrato. Estratégia: Substitua pães por alface em sanduíches, elimine bebidas açucaradas.",
          "Semana 2: Foco em Alimentos Animais e Eliminação de Vegetais. Reduza drasticamente (ou elimine) todos os vegetais, frutas e laticínios (exceto manteiga/gorduras). Aumente a ingestão de carne, ovos e gorduras animais. Estratégia: Priorize refeições com carne, peixe e ovos. Mantenha hidratação e eletrólitos.",
          "Semana 3 (Opcional): Carnívora Pura e Ajustes. Siga a dieta carnívora estrita. Observe a digestão e os níveis de energia. Esteja atento aos sintomas de adaptação e ajuste a ingestão de sal/eletrólitos. Estratégia: Experimente diferentes cortes e tipos de carne para variedade de nutrientes."
      ]},
       { type: 'heading', content: "Lista de Alimentos Permitidos" },
       { type: 'list', content: [
        "Carnes: Bovina, suína, cordeiro, frango, peixe e frutos do mar.",
        "Ovos e alguns laticínios integrais (manteiga, queijos duros, ghee).",
        "Gorduras naturais: Banha, manteiga, sebo, azeite de oliva (opcional).",
        "Órgãos: Fígado, coração e rins para micronutrientes essenciais."
       ]},
       { type: 'heading', content: "Lista de Alimentos Proibidos" },
       { type: 'list', content: [
        "Vegetais, frutas, grãos, leguminosas, nozes e sementes.",
        "Açúcares refinados, industrializados e bebidas adoçadas.",
        "Produtos ultraprocessados, óleos vegetais refinados ou ricos em carboidratos."
       ]}
    ],
  },
  {
    id: 5,
    title: "Perguntas Frequentes (FAQ)",
    subtitle: "As dúvidas mais comuns sobre a dieta.",
    icon: "❓",
    content: [
      { type: 'heading', content: "1. Como meu corpo se adapta à dieta carnívora?" },
      { type: 'paragraph', content: "Nos primeiros dias, é normal sentir fadiga leve, dores de cabeça e alterações no padrão intestinal. Isso acontece porque o corpo está passando de carboidratos para gordura e proteínas como fonte principal de energia. Em geral, a adaptação ocorre entre 2 a 6 semanas, dependendo do metabolismo individual. Dica: aumente gradualmente a ingestão de gordura e mantenha hidratação e sal adequados." },
      { type: 'heading', content: "2. Posso socializar e comer fora de casa?" },
      { type: 'paragraph', content: "Sim, com planejamento. Prefira restaurantes de carnes (grelhados ou churrascarias), peça cortes de carne com gordura e evite acompanhamentos vegetais. Explique sua escolha de forma breve, se necessário; muitos entenderão ao ver os resultados positivos." },
      { type: 'heading', content: "3. É seguro para crianças e adolescentes?" },
      { type: 'paragraph', content: "A dieta carnívora é geralmente considerada extrema e não é recomendada para crianças e adolescentes sem supervisão e orientação médica rigorosa. Eles estão em fases cruciais de crescimento e desenvolvimento, e uma dieta restritiva pode levar a deficiências nutricionais importantes." },
      { type: 'heading', content: "4. Como a dieta carnívora afeta o colesterol?" },
      { type: 'paragraph', content: "Pode haver um aumento tanto do HDL ('colesterol bom') quanto do LDL ('colesterol ruim'). No entanto, muitos defensores da dieta argumentam que a qualidade das partículas de LDL pode mudar para um padrão menos prejudicial (partículas maiores e menos densas). A resposta individual varia e é crucial monitorar os níveis de colesterol com um médico." },
      { type: 'heading', content: "5. Posso tomar suplementos na dieta carnívora?" },
      { type: 'paragraph', content: "Uma dieta bem formulada geralmente é muito densa em nutrientes. Suplementos nem sempre são necessários. No entanto, alguns podem considerar suplementos como vitamina D (especialmente se a exposição solar for limitada) e eletrólitos (principalmente durante a fase de adaptação para evitar a 'gripe keto'). Sempre consulte um profissional de saúde." },
      { type: 'heading', content: "6. Como lidar com constipação intestinal?" },
      { type: 'paragraph', content: "A constipação pode ocorrer na fase inicial. Para mitigá-la, garanta uma ingestão adequada de gorduras, beba bastante água e certifique-se de consumir eletrólitos suficientes (sódio, potássio, magnésio). Alguns descobrem que comer mais órgãos ou experimentar diferentes cortes de carne pode ajudar." },
      { type: 'heading', content: "7. A dieta carnívora afeta a performance esportiva?" },
      { type: 'paragraph', content: "No início, pode haver leve queda de energia, principalmente em atividades de alta intensidade. Com 2–4 semanas de adaptação, muitos relatam energia mais estável, recuperação mais rápida e melhora no foco e resistência. Dica: ajuste a ingestão de gordura para energia suficiente." },
    ],
  },
  {
    id: 6,
    title: "Histórias de Sucesso",
    subtitle: "Depoimentos e transformações reais.",
    icon: "🏆",
    content: [
      { type: 'heading', content: "Depoimentos Detalhados: Nossas Histórias de Sucesso" },
      { type: 'quote', content: "Minha relação com a comida era cheia de ansiedade. A dieta carnívora me trouxe um controle de apetite que eu nunca imaginei ser possível. Perdi 5 kg e sinto que finalmente encontrei uma abordagem sustentável para minha saúde.", author: "Maria Oliveira, 40 anos - Consultora de Negócios" },
      { type: 'quote', content: "Eu me sentia constantemente exausta e com dificuldade de concentração. Em 4 semanas de dieta carnívora, percebi uma melhora notável na minha disposição e foco. Meus exames de sangue também mostraram uma melhora nos níveis de glicose.", author: "Carla Fernandes, 38 anos - Professora" },
      { type: 'quote', content: "Minhas dores nas articulações eram constantes e limitavam muito minha vida. Desde que adotei a dieta carnívora há 3 meses, as dores diminuíram drasticamente, e eu recuperei a mobilidade. É como se eu tivesse rejuvenescido!", author: "João Martins, 55 anos - Aposentado" },
      { type: 'quote', content: "Eu estava preso em um ciclo de dietas restritivas que nunca funcionavam a longo prazo. A dieta carnívora mudou tudo para mim. Em apenas 6 semanas, perdi 7 kg e, o mais importante, senti uma clareza mental e energia que não tinha há anos.", author: "Lucas Silva, 32 anos - Analista de Marketing" },
      { type: 'heading', content: "Os Números do Sucesso Carnívoro (Baseado em nossa comunidade)" },
      { type: 'list', content: [
          "5-8kg de perda de peso em média nas primeiras 6 semanas de dieta.",
          "90% dos membros relatam aumento de energia mais estável e duradoura.",
          "85% dos usuários reportam maior clareza mental e redução da 'neblina mental'.",
          "70% observam melhora digestiva significativa (redução de inchaço e desconforto).",
          "100% dos relatos de pessoas com dores articulares indicam diminuição de dores e sintomas de doenças autoimunes."
        ]}
    ],
  },
  {
    id: 7,
    title: "Calculadora de Macros",
    subtitle: "Estime suas necessidades diárias.",
    icon: "📊",
    content: [
      { type: 'heading', content: "Calcule Seus Macros" },
      { type: 'paragraph', content: "Use a ferramenta abaixo para obter uma estimativa de suas necessidades diárias de proteína e gordura. Lembre-se que estes são pontos de partida; ouça seu corpo e ajuste conforme necessário para atingir seus objetivos de saciedade e energia." },
    ]
  }
];