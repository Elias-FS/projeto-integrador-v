export interface Slide {
  slideType: string;
  question?: string;
  options?: string[];
  correctOption?: number | number[];
  points?: number;
  midia?: string;
}