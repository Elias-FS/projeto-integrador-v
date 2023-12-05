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
      tipoId,
      posicao,
      texto,
      alternativa1,
      alternativa2,
      alternativa3,
      alternativa4,
      alternativa5,
      feedbackNegativo,
      feedbackPositivo,
      correta,
      midia,
    } = json;

    return {
      id: id,
      tipo: tipoId,
      posicao: posicao,
      texto: texto || "",
      alternativas:
        [
          alternativa1 || "",
          alternativa2 || "",
          alternativa3 || "",
          alternativa4 || "",
          alternativa5 || "",
        ] || [],
      feedbacks: [feedbackPositivo, feedbackNegativo] || [],
      resposta: correta || [],
      midia: midia || "",
    };
  }
}
