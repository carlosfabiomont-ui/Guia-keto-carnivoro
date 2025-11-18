import React from 'react';

interface HomeScreenProps {
  onStart: () => void;
}

const BenefitCard: React.FC<{ icon: string; title: string; description: string }> = ({ icon, title, description }) => (
  <div className="bg-white dark:bg-carnivore-dark-secondary p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
    <div className="flex items-center mb-3">
      <span className="text-3xl mr-4">{icon}</span>
      <h3 className="text-xl font-serif font-semibold text-carnivore-dark dark:text-carnivore-white">{title}</h3>
    </div>
    <p className="text-gray-600 dark:text-carnivore-gray">{description}</p>
  </div>
);


const HomeScreen: React.FC<HomeScreenProps> = ({ onStart }) => {
  return (
    <div className="flex flex-col items-center justify-center text-center py-8 animate-fade-in">
      <h1 className="text-3xl md:text-5xl font-bold font-serif text-carnivore-dark dark:text-carnivore-white mb-4">
        Dieta Carnívora para Iniciantes
      </h1>
      <h2 className="text-xl md:text-2xl font-serif text-carnivore-gold mb-6">
        Seu Primeiro Passo para a Transformação
      </h2>
      <p className="max-w-3xl text-lg text-gray-600 dark:text-carnivore-gray mb-10">
        Descubra como a nutrição carnívora pode transformar seu corpo e mente. Simplifique sua alimentação e alcance resultados reais sem complicação.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12 w-full max-w-4xl">
        <BenefitCard 
          icon="✅" 
          title="Resultados Sustentáveis" 
          description="Perda de peso saudável que varia de pessoa para pessoa."
        />
        <BenefitCard 
          icon="⚡️" 
          title="Energia Que Transborda" 
          description="Aumento de energia relatado já nas primeiras semanas."
        />
        <BenefitCard 
          icon="🧠" 
          title="Foco e Clareza Mental" 
          description="Elimine a névoa cerebral e alcance seu potencial máximo."
        />
        <BenefitCard 
          icon="🌿" 
          title="Melhora Digestiva" 
          description="Reduza inchaço e desconfortos, promovendo um intestino saudável."
        />
      </div>

      <button
        onClick={onStart}
        className="px-8 py-3 bg-carnivore-gold text-carnivore-white font-bold rounded-lg shadow-md hover:bg-carnivore-gold-hover transform hover:scale-105 transition-all duration-300"
      >
        Começar a Transformação
      </button>
    </div>
  );
};

export default HomeScreen;