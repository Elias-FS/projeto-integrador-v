import { Slide } from "@/models/slide";
import {
  EstruturaDeAlternativas,
} from "../EstruturaDeAlternativas/estruturaDeAlternativas";

interface MultiplaEscolhaProps {
  slideOpened: number;
  setSlideList: React.Dispatch<React.SetStateAction<Slide[]>>;
  slideList: Slide[];
}

export function MultiplaEscolha({
  slideOpened,
  setSlideList,
  slideList,
}: MultiplaEscolhaProps) {
  return (
    <div className="flex items-center justify-center h-full w-full flex-col">
      <div className="w-3/4 text-center pb-5">
        TEMPLATE MULTIPLA ESCOLHA {slideOpened + 1}
      </div>
      <EstruturaDeAlternativas
        slideOpened={slideOpened}
        setSlideList={setSlideList}
        slideList={slideList}
      />
    </div>
  );
}
