import { Slide } from "@/models/slide";
import { ViewEstruturaME } from "../ViewEstruturaME/viewEstruturaME";

interface ViewMultiplaEscolhaProps {
  slide: Slide;
}

export function ViewMultiplaEscolha({ slide }: ViewMultiplaEscolhaProps) {
  return (
    <div className="flex items-center justify-center h-full w-full flex-col">
      MULTIPLA ESCOLHA
      <ViewEstruturaME slide={slide} />
    </div>
  );
}
