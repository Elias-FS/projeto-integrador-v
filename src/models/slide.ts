export interface Slide {
  id: string; 
  tipo: string;
  posicao: number;
  texto?: string;
  alternativas?: string[];
  feedbacks?: string[];
  resposta?: number[];
  midia?: string;
}

//correctOption - Resposta
//question - texto
//options - alternativas
//slideType - tipo
