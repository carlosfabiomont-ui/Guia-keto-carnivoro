import React, { useState } from 'react';
import { DiaryEntry } from '../types';
import { TrashIcon } from '../components/icons/TrashIcon';

interface DiaryScreenProps {
  entries: DiaryEntry[];
  addEntry: (entry: Omit<DiaryEntry, 'id' | 'date'>) => void;
  deleteEntry: (id: string) => void;
}

const DiaryScreen: React.FC<DiaryScreenProps> = ({ entries, addEntry, deleteEntry }) => {
  const [weight, setWeight] = useState('');
  const [feeling, setFeeling] = useState<'Bem' | 'Normal' | 'Mal'>('Normal');
  const [hadSymptoms, setHadSymptoms] = useState(false);
  const [notes, setNotes] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!weight) {
      alert('Por favor, insira seu peso.');
      return;
    }
    addEntry({ weight, feeling, hadSymptoms, notes });
    // Reset form
    setWeight('');
    setFeeling('Normal');
    setHadSymptoms(false);
    setNotes('');
  };

  const progressSigns = [
    "Aumento sustentado dos níveis de energia.",
    "Melhora da clareza mental e foco.",
    "Redução de dores articulares ou inflamações.",
    "Estabilização do humor.",
    "Melhora da qualidade do sono.",
    "Redução de problemas digestivos (inchaço, gases).",
    "Diminuição dos desejos por açúcar e carboidratos.",
    "Perda de peso (se esse for um objetivo)."
  ];

  const checklistItems = [
    "Registro de Alimentos: Anote o que você come para identificar padrões e gatilhos.",
    "Níveis de Energia: Monitore sua energia ao longo do dia.",
    "Qualidade do Sono: Observe mudanças no padrão de sono.",
    "Função Digestiva: Acompanhe a regularidade e qualquer desconforto intestinal.",
    "Humor e Clareza Mental: Anote como você se sente emocionalmente e mentalmente.",
    "Ingestão de Água e Sal: Certifique-se de estar bem hidratado e consumindo eletrólitos.",
    "Sintomas Físicos: Qualquer dor, desconforto ou erupções cutâneas."
  ];

  return (
    <div className="animate-fade-in">
      <h2 className="text-3xl font-bold font-serif text-carnivore-dark dark:text-carnivore-white mb-6">Diário de Progresso</h2>
      
      <form onSubmit={handleSubmit} className="bg-white dark:bg-carnivore-dark-secondary p-6 rounded-xl shadow-lg mb-8 space-y-4">
        <h3 className="text-xl font-semibold font-serif text-carnivore-dark dark:text-carnivore-white">Nova Entrada</h3>
        
        <div>
          <label htmlFor="weight" className="block text-sm font-medium text-gray-700 dark:text-carnivore-gray">Peso (kg)</label>
          <input 
            type="number" 
            step="0.1"
            id="weight" 
            value={weight} 
            onChange={(e) => setWeight(e.target.value)}
            placeholder="Ex: 75.5"
            className="mt-1 block w-full bg-gray-50 dark:bg-carnivore-dark border border-gray-300 dark:border-gray-700 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-carnivore-gold focus:border-carnivore-gold"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-carnivore-gray">Como você se sente?</label>
          <div className="mt-1 flex space-x-4">
            {(['Bem', 'Normal', 'Mal'] as const).map(f => (
              <label key={f} className="flex items-center">
                <input type="radio" name="feeling" value={f} checked={feeling === f} onChange={() => setFeeling(f)} className="focus:ring-carnivore-gold h-4 w-4 text-carnivore-gold border-gray-300"/>
                <span className="ml-2 text-gray-700 dark:text-carnivore-gray">{f}</span>
              </label>
            ))}
          </div>
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-carnivore-gray">Sintomas de adaptação ("Gripe Keto")?</label>
           <div className="mt-1 flex space-x-4">
              <label className="flex items-center">
                <input type="radio" name="symptoms" checked={hadSymptoms} onChange={() => setHadSymptoms(true)} className="focus:ring-carnivore-gold h-4 w-4 text-carnivore-gold border-gray-300"/>
                <span className="ml-2 text-gray-700 dark:text-carnivore-gray">Sim</span>
              </label>
               <label className="flex items-center">
                <input type="radio" name="symptoms" checked={!hadSymptoms} onChange={() => setHadSymptoms(false)} className="focus:ring-carnivore-gold h-4 w-4 text-carnivore-gold border-gray-300"/>
                <span className="ml-2 text-gray-700 dark:text-carnivore-gray">Não</span>
              </label>
          </div>
        </div>

        <div>
          <label htmlFor="notes" className="block text-sm font-medium text-gray-700 dark:text-carnivore-gray">Anotações</label>
          <textarea 
            id="notes" 
            rows={3} 
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            placeholder="Refeições, energia, sono, etc."
            className="mt-1 block w-full bg-gray-50 dark:bg-carnivore-dark border border-gray-300 dark:border-gray-700 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-carnivore-gold focus:border-carnivore-gold"
          />
        </div>
        
        <button type="submit" className="w-full px-4 py-2 bg-carnivore-gold text-white font-bold rounded-lg shadow-md hover:bg-carnivore-gold-hover transition-colors">
          Salvar Entrada
        </button>
      </form>
      
      <div className="mb-8">
        <h3 className="text-2xl font-semibold font-serif text-carnivore-dark dark:text-carnivore-white mb-4">Histórico</h3>
        {entries.length === 0 ? (
          <div className="text-center py-8 px-4 bg-gray-50 dark:bg-carnivore-dark-secondary rounded-lg">
            <p className="text-gray-500 dark:text-carnivore-gray">Nenhuma entrada ainda.</p>
            <p className="text-gray-500 dark:text-carnivore-gray">Adicione um registro acima para começar a acompanhar sua evolução.</p>
          </div>
        ) : (
          <div className="space-y-4">
            {entries.map(entry => (
              <div key={entry.id} className="bg-white dark:bg-carnivore-dark-secondary p-4 rounded-lg shadow-sm">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="font-semibold text-carnivore-dark dark:text-carnivore-white">
                      {new Date(entry.date).toLocaleDateString('pt-BR', { day: '2-digit', month: 'long', year: 'numeric' })}
                    </p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Peso: <strong>{entry.weight} kg</strong> | Sensação: <strong>{entry.feeling}</strong> | Sintomas: <strong>{entry.hadSymptoms ? 'Sim' : 'Não'}</strong>
                    </p>
                    {entry.notes && <p className="mt-2 text-gray-700 dark:text-carnivore-gray italic">"{entry.notes}"</p>}
                  </div>
                  <button onClick={() => deleteEntry(entry.id)} className="p-1 text-gray-400 hover:text-red-500 transition-colors -mr-1 -mt-1 flex-shrink-0">
                    <TrashIcon className="w-5 h-5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="space-y-8">
        <div>
          <h3 className="text-2xl font-semibold font-serif text-carnivore-dark dark:text-carnivore-white mb-4">Checklist de Acompanhamento</h3>
          <div className="bg-white dark:bg-carnivore-dark-secondary p-6 rounded-xl shadow-lg">
            <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-carnivore-gray">
              {checklistItems.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-semibold font-serif text-carnivore-dark dark:text-carnivore-white mb-4">Sinais de Progresso para Observar</h3>
          <div className="bg-white dark:bg-carnivore-dark-secondary p-6 rounded-xl shadow-lg">
            <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-carnivore-gray">
              {progressSigns.map((sign, index) => (
                <li key={index}>{sign}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiaryScreen;