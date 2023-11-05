import { Slide } from "@/models/slide";
import DropZoneMidia from "../../DropZoneMidia/dropZoneMidia";
import { EstruturaDeAlternativas } from "../EstruturaDeAlternativas/estruturaDeAlternativas";

interface MultiplaEscolhaMidiaProps {
  slideOpened: number;
  setSlideList: React.Dispatch<React.SetStateAction<Slide[]>>;
  slideList: Slide[];
}

export function MultiplaEscolhaMidia({
  slideOpened,
  setSlideList,
  slideList,
}: MultiplaEscolhaMidiaProps) {
  return (
    <div className="flex items-center justify-center h-full w-full flex-col">
      <div className="w-3/4 text-center pb-5">
        TEMPLATE MULTIPLA ESCOLHA MIDIA {slideOpened + 1}
        <DropZoneMidia
          slideOpened={slideOpened}
          setSlideList={setSlideList}
          slideList={slideList}
        />
      </div>
      <EstruturaDeAlternativas
        slideOpened={slideOpened}
        setSlideList={setSlideList}
        slideList={slideList}
      />
    </div>
  );
}
