export interface Slide {
  slideType: string;
  index: number;
  question?: string;
  options?: string[];
  feedbacks?: string[];
  correctOption?: number[];
  points?: number;
  midia?: string;
}
