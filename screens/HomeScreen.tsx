
import React from 'react';

interface HomeScreenProps {
  onStart: () => void;
}

const BenefitCard: React.FC<{ icon: string; title: string; description: string }> = ({ icon, title, description }) => (
  <div className="bg-white dark:bg-carnivore-dark-secondary p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow border border-transparent hover:border-carnivore-gold/30">
    <div className="flex items-center mb-3">
      <span className="text-3xl mr-4">{icon}</span>
      <h3 className="text-xl font-serif font-semibold text-carnivore-dark dark:text-carnivore-white">{title}</h3>
    </div>
    <p className="text-gray-600 dark:text-carnivore-gray">{description}</p>
  </div>
);

const FeatureItem: React.FC<{ title: string; desc: string }> = ({ title, desc }) => (
  <div className="flex items-start space-x-3 text-left">
    <div className="flex-shrink-0 mt-1">
      <svg className="w-5 h-5 text-carnivore-gold" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
      </svg>
    </div>
    <div>
      <h4 className="font-bold text-carnivore-dark dark:text-carnivore-white">{title}</h4>
      <p className="text-sm text-gray-500 dark:text-carnivore-gray">{desc}</p>
    </div>
  </div>
);

const HomeScreen: React.FC<HomeScreenProps> = ({ onStart }) => {
  return (
    <div className="flex flex-col items-center animate-fade-in pb-12">
      
      {/* Hero Section / Capa */}
      <div className="relative w-full h-[450px] md:h-[550px] rounded-2xl overflow-hidden mb-10 shadow-2xl">
        <img 
          src="https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=2069&auto=format&fit=crop" 
          alt="Carne sendo preparada no fogo" 
          className="w-full h-full object-cover"
        />
        
        <div className="absolute inset-0 bg-gradient-to-t from-carnivore-dark via-carnivore-dark/60 to-transparent flex flex-col items-center justify-end pb-12 px-4 text-center">
          <span className="bg-carnivore-gold/90 text-white text-xs font-bold px-3 py-1 rounded-full mb-4 uppercase tracking-widest animate-pulse">
            Guia Completo 2025
          </span>
          <h1 className="text-4xl md:text-6xl font-bold font-serif text-carnivore-white mb-2 drop-shadow-lg">
            Sua Nova Vida
          </h1>
          <h2 className="text-xl md:text-3xl font-serif text-carnivore-gold mb-8 drop-shadow-md">
            Começa no Prato.
          </h2>
          <button
            onClick={onStart}
            className="px-10 py-5 bg-carnivore-gold text-carnivore-white font-bold text-xl rounded-full shadow-lg hover:bg-carnivore-gold-hover transform hover:scale-105 active:scale-95 transition-all duration-300"
          >
            QUERO COMEÇAR AGORA
          </button>
        </div>
      </div>

      <div className="max-w-4xl px-4 text-center">
        {/* Descrição Principal */}
        <p className="text-xl text-gray-600 dark:text-carnivore-gray mb-16 leading-relaxed">
          Abandone os alimentos inflamatórios. Descubra como a nutrição ancestral pode simplificar sua vida, clarear sua mente e transformar seu corpo de forma definitiva.
        </p>

        {/* O que tem no Guia? (Foco em Vendas/Google Ads) */}
        <div className="bg-gray-50 dark:bg-carnivore-dark-secondary/30 rounded-3xl p-8 mb-16 border border-gray-100 dark:border-gray-800">
          <h3 className="text-2xl font-serif font-bold text-carnivore-dark dark:text-white mb-8">O que você vai encontrar no App:</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <FeatureItem title="+80 Receitas Práticas" desc="Do café da manhã ao jantar, incluindo snacks e sobremesas carnívoras." />
            <FeatureItem title="Calculadora de Macros" desc="Ajuste sua ingestão de proteínas e gorduras para seu objetivo específico." />
            <FeatureItem title="Guia de 30 Dias" desc="Um passo a passo completo para sua transição ser suave e sem erros." />
            <FeatureItem title="Ciência Aplicada" desc="Entenda os fundamentos biológicos por trás da nutrição carnívora." />
            <FeatureItem title="Diário de Evolução" desc="Acompanhe seu peso, energia e sintomas de adaptação diariamente." />
            <FeatureItem title="Lista de Compras" desc="Economize tempo e dinheiro sabendo exatamente o que comprar." />
          </div>
        </div>

        {/* Cards de Benefícios */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-16 w-full">
          <BenefitCard 
            icon="🔄" 
            title="Reinicie seu Corpo" 
            description="Elimine toxinas e antinutrientes. Dê ao seu corpo a chance de se curar de forma natural."
          />
          <BenefitCard 
            icon="⚡️" 
            title="Energia Real" 
            description="Acabe com os picos de insulina. Use a gordura como sua fonte primária de combustível estável."
          />
          <BenefitCard 
            icon="🧠" 
            title="Clareza Mental" 
            description="Elimine a 'névoa cerebral'. Uma mente alimentada por gorduras saudáveis é mais focada."
          />
          <BenefitCard 
            icon="🛡️" 
            title="Simplicidade" 
            description="Sem pesar comida ou contar calorias. Coma até a saciedade e recupere sua saúde."
          />
        </div>

        {/* CTA Final */}
        <div className="mb-20">
          <button
            onClick={onStart}
            className="w-full md:w-auto px-12 py-6 bg-carnivore-dark dark:bg-carnivore-white text-white dark:text-carnivore-dark font-bold text-lg rounded-2xl shadow-xl hover:opacity-90 transition-all"
          >
            ACESSAR GUIA COMPLETO
          </button>
          <p className="mt-4 text-sm text-gray-400">Acesso imediato e vitalício.</p>
        </div>

        {/* Disclaimer Obrigatório */}
        <footer className="w-full border-t border-gray-200 dark:border-gray-800 pt-8 pb-4 text-center">
          <p className="text-xs text-gray-500 dark:text-gray-400 mb-2 font-bold">
            AVISO LEGAL
          </p>
          <p className="text-xs text-gray-500 dark:text-gray-400 text-justify mb-4 leading-relaxed">
            Este produto não substitui o parecer médico profissional. Sempre consulte um médico para tratar de assuntos relativos à saúde. As informações fornecidas neste aplicativo são apenas para fins educacionais e informativos, não constituindo aconselhamento médico, diagnóstico ou tratamento. Os resultados apresentados podem variar de pessoa para pessoa. Ao utilizar este guia, você concorda que o uso das informações é de sua inteira responsabilidade.
          </p>
          <p className="text-xs text-gray-400 dark:text-gray-600">
            &copy; {new Date().getFullYear()} Keto Carnívoro. Todos os direitos reservados.
          </p>
        </footer>
      </div>
    </div>
  );
};

export default HomeScreen;
