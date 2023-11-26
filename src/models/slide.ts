export interface Slide {
  id: string; 
  slideType: string;
  index: number;
  question?: string;
  options?: string[];
  feedbacks?: string[];
  correctOption?: number[];
  points?: number;
  midia?: string;
}
