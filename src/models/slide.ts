export interface Slide {
  slideType: string;
  index: number;
  question?: string;
  options?: string[];
  correctOption?: number[];
  points?: number;
  midia?: string;
}
