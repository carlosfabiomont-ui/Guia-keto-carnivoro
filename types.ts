export interface DiaryEntry {
  id: string;
  date: string;
  weight: string;
  feeling: 'Bem' | 'Normal' | 'Mal';
  hadSymptoms: boolean;
  notes: string;
}

export type Tab = 'home' | 'modules' | 'recipes' | 'resources' | 'diary';

export interface View {
  current: Tab | 'moduleDetail';
  moduleId?: number;
}

export interface ModuleContent {
  type: 'paragraph' | 'heading' | 'list' | 'quote' | 'evidence';
  content: string | string[];
  author?: string; 
  year?: string;
}

export interface Module {
  id: number;
  title: string;
  subtitle: string;
  icon: string;
  content: ModuleContent[];
}

export type RecipeCategory = 'Café da Manhã' | 'Carne Vermelha' | 'Aves e Refeições Rápidas' | 'Peixes e Frutos do Mar' | 'Snacks e Aperitivos' | 'Sobremesas' | 'Crianças';

export interface Recipe {
  id: string;
  title: string;
  category: RecipeCategory;
  ingredients: string[];
  instructions: string[];
  tip?: string;
}

export type ResourceCategory = 'Apps e Ferramentas' | 'Canais Educativos' | 'Recursos Científicos' | 'Comunidades Online';

export interface Resource {
  id: string;
  category: ResourceCategory;
  title: string;
  description: string;
  author: string;
  url?: string;
  internalView?: View;
}