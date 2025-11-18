import { Module } from '../types';

export const modules: Module[] = [
  {
    id: 1,
    title: "Fundamentos da Dieta",
    subtitle: "Base científica, histórica e prática.",
    icon: "📜",
    content: [
      { type: 'heading', content: "Dieta Carnívora: Definição Clara e Simples" },
      { type: 'paragraph', content: "A dieta carnívora é um padrão alimentar que consiste exclusivamente em produtos de origem animal, como carnes, ovos e alguns laticínios de alta gordura. Diferente de outras dietas restritivas, seu foco principal é remover completamente carboidratos de origem vegetal e alimentos processados, permitindo que o corpo utilize proteínas e gorduras como suas fontes primárias de energia." },
      { type: 'quote', content: "A dieta carnívora não é apenas um plano alimentar; é um caminho para a clareza mental, energia sustentável e um corpo mais forte.", author: "Keto Carnívoro" },
      
      { type: 'heading', content: "Breve Histórico e Contexto Científico" },
      { type: 'paragraph', content: "Embora pareça uma tendência moderna, a dieta carnívora tem raízes antigas. Povos como os Inuítes, Massai e Mongóis consumiam dietas predominantemente animais, adaptando-se perfeitamente a ambientes onde a vegetação era escassa. Eles demonstravam uma saúde robusta, livre de muitas das doenças crônicas que afetam as sociedades modernas. Nos últimos anos, a ciência começou a investigar os relatos clínicos e anedóticos, revelando potenciais benefícios na redução de inflamação, melhora de marcadores metabólicos e aumento da saciedade." },
      
      { type: 'heading', content: "Base Científica: Por que Funciona?" },
      { type: 'paragraph', content: "O pilar da dieta carnívora é a otimização do metabolismo energético. Ao eliminar carboidratos, o corpo entra em um estado de cetose nutricional, onde a gordura (e não a glicose) se torna a principal fonte de combustível. Este estado metabólico está associado a uma maior estabilidade do açúcar no sangue, menor inflamação sistêmica e uma eficiência energética superior para muitas pessoas." },
      { type: 'list', content: [
        "Metabolismo Otimizado: Estudos comparativos mostram que dietas com baixo carboidrato podem melhorar a flexibilidade metabólica, que é a capacidade do corpo de alternar eficientemente entre queimar gordura e glicose, e aumentar a sensibilidade à insulina.",
        "Densidade Nutricional Incomparável: Alimentos de origem animal, especialmente carnes de órgãos, são as fontes mais biodisponíveis de vitaminas essenciais (como B12, A, D, K2), minerais (ferro heme, zinco, selênio) e todos os aminoácidos essenciais.",
        "Eliminação de Antinutrientes: Plantas contêm compostos de defesa (como lectinas, fitatos e oxalatos) que podem interferir na absorção de nutrientes e causar irritação intestinal em indivíduos sensíveis. A dieta carnívora elimina completamente essas substâncias."
      ]},
      { type: 'evidence', content: "Pesquisadores como Dr. Shawn Baker e Dr. Paul Saladino têm compilado e analisado uma vasta gama de evidências anedóticas e estudos, demonstrando os potenciais benefícios da dieta carnívora na saúde, desde a reversão de doenças autoimunes até a otimização da performance atlética.", author: "Pioneiros na Pesquisa" },
    ],
  },
  {
    id: 2,
    title: "Benefícios da Transformação",
    subtitle: "Emagrecimento, energia e clareza mental.",
    icon: "🌟",
    content: [
      { type: 'heading', content: "Emagrecimento Sustentável e Composição Corporal" },
      { type: 'paragraph', content: "O controle de peso é um dos benefícios mais relatados. Ao focar em proteínas e gorduras, a dieta promove uma saciedade profunda e duradoura, o que naturalmente leva a uma menor ingestão calórica sem a necessidade de contar calorias. O corpo tende a:" },
      { type: 'list', content: [
        "Sentir mais saciedade: Proteínas e gorduras são digeridas mais lentamente, mantendo a fome sob controle por mais tempo e eliminando os desejos por snacks.",
        "Reduzir picos de insulina: A ausência de carboidratos mantém os níveis de insulina baixos e estáveis, sinalizando ao corpo para queimar gordura armazenada como energia.",
        "Simplificar escolhas alimentares: A simplicidade da dieta reduz a 'fadiga de decisão' e o estresse associado ao planejamento de refeições complexas."
      ]},
      
      { type: 'heading', content: "Saúde Metabólica e Energia Inabalável" },
      { type: 'paragraph', content: "Muitos usuários descrevem uma transição de picos e quedas de energia para um nível de energia estável e consistente ao longo do dia. Isso se deve à adaptação do corpo para usar gordura como combustível, uma fonte de energia mais duradoura. Os benefícios metabólicos incluem:" },
      { type: 'list', content: [
        "Melhora nos níveis de triglicerídeos e aumento do colesterol HDL ('bom').",
        "Redução drástica da inflamação sistêmica, medida por marcadores como a Proteína C-Reativa (PCR).",
        "Eliminação de desconfortos digestivos como inchaço, gases e síndrome do intestino irritável para muitos indivíduos."
      ]},
      
      { type: 'heading', content: "Clareza Mental, Foco e Saúde Emocional" },
      { type: 'paragraph', content: "O cérebro funciona excepcionalmente bem com cetonas, a fonte de energia derivada da gordura. Muitos iniciantes relatam o fim da 'névoa mental' e uma melhora significativa na concentração e memória. Isso ocorre porque a dieta:" },
      { type: 'list', content: [
        "Evita picos de glicose que causam flutuações de humor e energia mental.",
        "Fornece um fluxo constante de cetonas e aminoácidos essenciais (como a tirosina) que são precursores de neurotransmissores como a dopamina.",
        "Reduz a neuroinflamação, um fator que pode contribuir para a depressão e ansiedade."
      ]},
      
      { type: 'heading', content: "Outros Benefícios Notáveis" },
      { type: 'paragraph', content: "Além dos principais benefícios, muitos usuários relatam melhorias em outras áreas:"},
      { type: 'list', content: [
        "Saúde da Pele: Redução de acne, eczema e psoríase devido à diminuição da inflamação.",
        "Doenças Autoimunes: Relatos de remissão ou melhora significativa em condições como artrite reumatoide, lúpus e doenças inflamatórias intestinais.",
        "Equilíbrio Hormonal: A ingestão adequada de gorduras saudáveis e colesterol é crucial para a produção de hormônios sexuais como testosterona e estrogênio."
      ]}
    ],
  },
  {
    id: 3,
    title: "Riscos e Considerações",
    subtitle: "Adaptação, deficiências e supervisão médica.",
    icon: "⚠️",
    content: [
      { type: 'heading', content: "Aviso Importante: Consulte Seu Médico Antes de Iniciar!" },
      { type: 'paragraph', content: "A dieta carnívora é uma abordagem restritiva e pode não ser adequada para todos. É fundamental buscar orientação de um profissional de saúde qualificado antes de iniciar. Este guia é informativo e não substitui uma consulta médica." },
      
      { type: 'heading', content: "Período de Adaptação: A 'Gripe Keto' ou 'Carnivore Flu'" },
      { type: 'paragraph', content: "O corpo pode levar de 2 a 6 semanas para se adaptar. Durante essa transição de queimar glicose para queimar gordura, é comum sentir sintomas temporários. Gerenciá-los é a chave para uma transição bem-sucedida." },
      { type: 'list', content: [
        "Dias 1-3: Fadiga, dores de cabeça, náuseas e irritabilidade. Solução: Aumente drasticamente a ingestão de sal (sal marinho ou rosa) e água. Seu corpo está perdendo água e eletrólitos.",
        "Dias 4-7: Mudanças no padrão intestinal (diarreia ou constipação) e cãibras musculares. Solução: Para diarreia, reduza a gordura renderizada (líquida) e coma mais gordura sólida. Para constipação, aumente a gordura. Considere um suplemento de magnésio para cãibras.",
        "Semanas 2-4: Paladar e saciedade se ajustam. A aversão a certos alimentos pode ocorrer. Solução: Ouça seu corpo. Coma até a saciedade e não se force a comer se não estiver com fome. A 'fome de carboidratos' diminui drasticamente aqui."
      ]},
      
      { type: 'heading', content: "Desafios Sociais e Psicológicos" },
      { type: 'paragraph', content: "Explicar sua dieta para amigos e familiares pode ser desafiador. Prepare respostas simples e focadas nos seus resultados. Ex: 'Estou focando em alimentos integrais para melhorar minha saúde' ou 'Estou fazendo uma dieta de eliminação para resolver problemas digestivos'." },

      { type: 'heading', content: "Monitoramento e Exames Laboratoriais" },
      { type: 'paragraph', content: "É prudente fazer exames de sangue antes de iniciar e após 3-6 meses para monitorar como seu corpo está respondendo. Discuta com seu médico exames como:" },
      { type: 'list', content: [
          "Hemograma completo",
          "Perfil lipídico (Colesterol Total, HDL, LDL, Triglicerídeos)",
          "Função renal e hepática",
          "Vitaminas e Minerais (Vitamina D, B12, Ferro, Magnésio)"
       ]},
      
      { type: 'heading', content: "Quando a Supervisão Médica é Indispensável" },
       { type: 'list', content: [
          "Se você tem condições crônicas como diabetes (especialmente tipo 1), hipertensão, problemas renais ou hepáticos.",
          "Se usa medicações contínuas que possam ser afetadas pela dieta.",
          "Se possui histórico de transtornos alimentares.",
          "Se está grávida, amamentando ou é uma criança/adolescente."
       ]}
    ],
  },
  {
    id: 4,
    title: "Guia de Início Rápido",
    subtitle: "Plano de ação para as primeiras semanas.",
    icon: "🚀",
    content: [
      { type: 'heading', content: "Preparação: A Chave para o Sucesso" },
      { type: 'paragraph', content: "Antes de comer sua primeira refeição carnívora, prepare seu ambiente. Limpe sua despensa de alimentos não permitidos para evitar tentações. Faça uma lista de compras e abasteça sua geladeira e freezer." },
      
      { type: 'heading', content: "Montando sua Cozinha Carnívora" },
      { type: 'list', content: [
        "Utensílios Essenciais: Uma boa frigideira de ferro fundido, uma assadeira, facas afiadas e recipientes para armazenar sobras.",
        "Despensa Carnívora: Sal de alta qualidade (marinho ou rosa), banha, sebo, manteiga ou ghee. Pimenta do reino e outros temperos simples, se desejar.",
        "Congelador Abastecido: Compre carne em quantidade quando houver promoções. Congele em porções individuais."
      ]},
      
      { type: 'heading', content: "Guia de Transição Gradual (Plano de 3 Semanas)" },
      { type: 'paragraph', content: "Para minimizar os efeitos da 'gripe keto', uma transição em etapas é altamente recomendada." },
      { type: 'list', content: [
          "Semana 1: Foco em Keto Limpo. Elimine açúcares, grãos, sementes e legumes. Coma carnes, ovos, gorduras saudáveis e vegetais de baixo carboidrato (folhas verdes, brócolis). Cardápio Exemplo: Café da manhã de ovos e bacon; almoço de bife com salada; jantar de salmão com brócolis.",
          "Semana 2: Elimine os Vegetais. Remova todos os vegetais restantes. Sua dieta agora consiste em carne, peixe, ovos e gorduras. Observe como sua digestão e energia reagem. Cardápio Exemplo: Café da manhã de ovos e linguiça; almoço com sobras de carne; jantar de costeletas de porco.",
          "Semana 3: Carnívora Pura e Ajustes. Siga a dieta estrita. Comece a experimentar diferentes cortes de carne e órgãos (fígado é um ótimo começo). Ajuste a quantidade de gordura para cima ou para baixo para encontrar seu ponto ideal de saciedade. Cardápio Exemplo: Fígado e ovos pela manhã; hambúrgueres (só carne) no almoço; T-bone steak no jantar."
      ]},

      { type: 'heading', content: "Como Comprar Carne de Qualidade" },
      { type: 'paragraph', content: "A qualidade importa. Se possível, procure por:" },
      { type: 'list', content: [
        "Carne de Pasto (Grass-Fed): Mais rica em ômega-3 e outros nutrientes.",
        "Orgânico: Livre de hormônios e antibióticos.",
        "Açougueiro Local: Construa um relacionamento com seu açougueiro. Eles podem fornecer cortes melhores e informações sobre a origem da carne."
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
      { type: 'paragraph', content: "A adaptação leva de 2 a 6 semanas. É o tempo que seu corpo leva para se tornar eficiente em usar gordura como combustível. Sintomas como fadiga e dores de cabeça são comuns no início. A chave é manter a hidratação e o consumo de sal elevados." },
      { type: 'heading', content: "2. E a falta de fibras? Vou ter constipação?" },
      { type: 'paragraph', content: "Muitas pessoas descobrem que a fibra não é essencial para a regularidade intestinal e que sua eliminação resolve problemas como inchaço e gases. A constipação inicial geralmente é devido à desidratação ou pouca gordura. Aumente a ingestão de gordura e água." },
      { type: 'heading', content: "3. Como a dieta carnívora afeta o colesterol?" },
      { type: 'paragraph', content: "É comum ver um aumento no colesterol total, HDL e LDL. No entanto, o contexto é crucial. Muitos especialistas em dietas low-carb argumentam que, na ausência de inflamação e açúcar alto, o padrão das partículas de LDL muda para um tipo maior e menos denso, considerado menos prejudicial. Monitore com um médico que entenda de dietas low-carb." },
      { type: 'heading', content: "4. Posso tomar suplementos?" },
      { type: 'paragraph', content: "Uma dieta carnívora bem formulada, rica em variedade (músculo, órgãos, frutos do mar), é densa em nutrientes. Suplementos de eletrólitos (sódio, potássio, magnésio) podem ser úteis na fase de adaptação. Vitamina D pode ser necessária se a exposição solar for limitada. Consulte sempre um profissional." },
      { type: 'heading', content: "5. É uma dieta cara?" },
      { type: 'paragraph', content: "Pode ser mais econômica do que parece. Você elimina gastos com snacks, bebidas açucaradas, alimentos processados e restaurantes. Foque em cortes mais baratos como carne moída, órgãos e compre em quantidade." },
      { type: 'heading', content: "6. E o tédio alimentar?" },
      { type: 'paragraph', content: "A variedade é a chave. Rode diferentes tipos de carne (bovina, suína, cordeiro), peixes, frutos do mar e aves. Experimente diferentes métodos de preparo (grelhar, assar, cozinhar lentamente). A simplicidade se torna um prazer, não uma limitação." },
      { type: 'heading', content: "7. Posso beber álcool?" },
      { type: 'paragraph', content: "O álcool é, tecnicamente, uma toxina e contém carboidratos. Bebidas destiladas puras (vodka, gin, uísque) são as opções de menor impacto, mas o álcool pode parar a cetose temporariamente e baixar as inibições, levando a escolhas alimentares ruins. O ideal é evitar, especialmente na fase inicial." },
      { type: 'heading', content: "8. Como a dieta afeta a performance esportiva?" },
      { type: 'paragraph', content: "Após a adaptação de 2-4 semanas, muitos atletas relatam resistência infinita e recuperação mais rápida. Para atividades de alta intensidade, pode ser necessário um período de ajuste mais longo ou um foco estratégico em consumir gordura antes do treino." }
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
      { type: 'heading', content: "Calcule Seus Macros Carnívoros" },
      { type: 'paragraph', content: "Use a ferramenta abaixo para obter uma estimativa de suas necessidades diárias de proteína e gordura. Lembre-se que estes são pontos de partida; ouça seu corpo e ajuste conforme necessário para atingir seus objetivos de saciedade e energia." },
      { type: 'heading', content: "Entendendo os Resultados" },
      { type: 'paragraph', content: "Proteína: Essencial para a construção e reparo muscular, e para a saciedade. A meta geralmente fica entre 1.8g a 2.2g por quilo de peso corporal, dependendo do seu objetivo." },
      { type: 'paragraph', content: "Gordura: Sua principal fonte de energia. A quantidade de gordura é a principal variável que você ajustará. Coma mais gordura para mais energia e saciedade; coma menos se o objetivo for perda de peso e você quiser que seu corpo use a gordura armazenada." },
      { type: 'paragraph', content: "Calorias: Na dieta carnívora, as calorias são um resultado, e não um alvo. Foque em atingir sua meta de proteína e ajustar a gordura conforme a fome. Comer até a saciedade é a regra mais importante." }
    ]
  }
];