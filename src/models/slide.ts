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

export class SlideUtils {
  static fromJson(json: any): Slide {
    const {
      id,
      tipo,
      posicao,
      texto,
      alternativas,
      feedbacks,
      resposta,
      midia
    } = json;

    return {
      id: id,
      tipo: tipo,
      posicao: posicao,
      texto: texto || '',
      alternativas: alternativas || [],
      feedbacks: feedbacks || [],
      resposta: resposta || [],
      midia: midia || ''
    };
  }
}
