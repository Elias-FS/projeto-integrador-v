export interface Slide {
  slideType: string;
  index: number;
  question?: string;
  options?: string[];
  correctOption?: number | number[];
  points?: number;
  midia?: string;
}
