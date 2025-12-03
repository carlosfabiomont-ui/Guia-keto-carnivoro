
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


const HomeScreen: React.FC<HomeScreenProps> = ({ onStart }) => {
  return (
    <div className="flex flex-col items-center animate-fade-in pb-12">
      
      {/* Hero Section / Capa */}
      <div className="relative w-full h-[400px] md:h-[500px] rounded-2xl overflow-hidden mb-10 shadow-2xl">
        {/* Imagem de Fundo (Placeholder - Substitua pela sua imagem gerada depois) */}
        <img 
          src="https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=2069&auto=format&fit=crop" 
          alt="Carne sendo preparada no fogo" 
          className="w-full h-full object-cover"
        />
        
        {/* Overlay Escuro Gradiente para garantir leitura do texto */}
        <div className="absolute inset-0 bg-gradient-to-t from-carnivore-dark via-carnivore-dark/70 to-transparent flex flex-col items-center justify-end pb-12 px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold font-serif text-carnivore-white mb-2 drop-shadow-lg">
            Sua Nova Vida
          </h1>
          <h2 className="text-xl md:text-3xl font-serif text-carnivore-gold mb-6 drop-shadow-md">
            Começa no Prato.
          </h2>
          <button
            onClick={onStart}
            className="px-8 py-4 bg-carnivore-gold text-carnivore-white font-bold text-lg rounded-full shadow-lg hover:bg-carnivore-gold-hover transform hover:scale-105 transition-all duration-300"
          >
            Iniciar Jornada Carnívora
          </button>
        </div>
      </div>

      <div className="max-w-4xl px-4 text-center">
        <p className="text-xl text-gray-600 dark:text-carnivore-gray mb-12 leading-relaxed">
          Deixe os velhos hábitos para trás. Descubra como a nutrição ancestral pode simplificar sua vida, clarear sua mente e transformar seu corpo.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12 w-full">
          <BenefitCard 
            icon="🔄" 
            title="Reinicie seu Corpo" 
            description="Abandone alimentos inflamatórios e dê ao seu corpo a chance de se curar de dentro para fora."
          />
          <BenefitCard 
            icon="⚡️" 
            title="Energia Real" 
            description="Troque os picos de açúcar por uma fonte de energia estável e duradoura baseada em gorduras."
          />
          <BenefitCard 
            icon="🧠" 
            title="Foco Mental" 
            description="Elimine a névoa cerebral. Uma mente alimentada por cetonas é mais afiada e resiliente."
          />
          <BenefitCard 
            icon="🛡️" 
            title="Simplicidade" 
            description="Liberte-se da contagem de calorias. Coma alimentos reais até a saciedade e recupere sua intuição."
          />
        </div>

        {/* Disclaimer Obrigatório para Hotmart/Produtos de Saúde */}
        <footer className="w-full border-t border-gray-200 dark:border-gray-800 pt-8 pb-4 text-center">
          <p className="text-xs text-gray-500 dark:text-gray-400 mb-2 font-bold">
            AVISO LEGAL
          </p>
          <p className="text-xs text-gray-500 dark:text-gray-400 text-justify mb-4 leading-relaxed">
            Este produto não substitui o parecer médico profissional. Sempre consulte um médico para tratar de assuntos relativos à saúde. As informações fornecidas neste aplicativo são apenas para fins educacionais e informativos, não constituindo aconselhamento médico, diagnóstico ou tratamento. Os resultados apresentados (como perda de peso ou melhora de sintomas) podem variar de pessoa para pessoa e dependem de diversos fatores individuais. Ao utilizar este guia, você concorda que o uso das informações é de sua inteira responsabilidade.
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
