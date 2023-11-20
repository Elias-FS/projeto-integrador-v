import { Slide } from "@/models/slide";
import { ViewEstruturaVF } from "../ViewEstruturaVF/viewEstruturaVF";

interface ViewVerdadeiroFalsoProps {
  slide: Slide;
}

export function ViewVerdadeiroFalso({ slide }: ViewVerdadeiroFalsoProps) {
  return (
    <div className="flex items-center justify-center h-full w-full flex-col">
      VERDADEIRO OU FALSO
      <ViewEstruturaVF slide={slide} />
    </div>
  );
}
