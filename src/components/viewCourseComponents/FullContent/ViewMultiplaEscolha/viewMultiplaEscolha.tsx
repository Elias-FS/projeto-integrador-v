import { Slide } from "@/models/slide";
import { ViewEstruturaME } from "../ViewEstruturaME/viewEstruturaME";

interface ViewMultiplaEscolhaProps {
  slide: Slide;
  id: string;
}

export function ViewMultiplaEscolha({ slide, id }: ViewMultiplaEscolhaProps) {
  return (
    <div className="flex items-center justify-center h-full w-full flex-col">
      <p className="font-bold text-xl lg:text-3xl">MÚLTIPLA ESCOLHA</p>
      <ViewEstruturaME id={id} slide={slide} />
    </div>
  );
}
