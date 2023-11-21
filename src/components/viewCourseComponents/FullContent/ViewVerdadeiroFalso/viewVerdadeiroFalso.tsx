import { Slide } from "@/models/slide";
import { ViewEstruturaVF } from "../ViewEstruturaVF/viewEstruturaVF";

interface ViewVerdadeiroFalsoProps {
  slide: Slide;
  id: string;
}

export function ViewVerdadeiroFalso({ slide, id }: ViewVerdadeiroFalsoProps) {
  return (
    <div className="flex items-center justify-center h-full w-full flex-col">
      VERDADEIRO OU FALSO
      <ViewEstruturaVF id={id} slide={slide} />
    </div>
  );
}
