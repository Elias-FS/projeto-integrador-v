import { Slide } from "@/models/slide";
import { ViewEstruturaME } from "../ViewEstruturaME/viewEstruturaME";

interface ViewMultiplaEscolhaProps {
  slide: Slide;
  id: string
}

export function ViewMultiplaEscolha({ slide, id }: ViewMultiplaEscolhaProps) {
  return (
    <div className="flex items-center justify-center h-full w-full flex-col">
      MULTIPLA ESCOLHA
      <ViewEstruturaME id={id} slide={slide} />
    </div>
  );
}
