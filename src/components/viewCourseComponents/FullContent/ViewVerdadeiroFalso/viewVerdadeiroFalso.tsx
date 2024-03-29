import { Slide } from "@/models/slide";
import { ViewEstruturaVF } from "../ViewEstruturaVF/viewEstruturaVF";

interface ViewVerdadeiroFalsoProps {
  slide: Slide;
  id: number;
}

export function ViewVerdadeiroFalso({ slide, id }: ViewVerdadeiroFalsoProps) {
  return (
    <div className="flex items-center justify-center h-full w-full flex-col">
      <p className="font-bold text-xl lg:text-3xl">VERDADEIRO OU FALSO</p>
      <ViewEstruturaVF id={id} slide={slide} />
    </div>
  );
}
