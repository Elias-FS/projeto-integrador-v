import { Slide } from "@/models/slide";
import { Input } from "@material-tailwind/react";
import DropZoneMidia from "../../DropZoneMidia/dropZoneMidia";
import { EstruturaDeAlternativas } from "../EstruturaDeAlternativas/estruturaDeAlternativas";

interface VerdadeiroFalsoMidiaProps {
  slideOpened: number;
  setSlideList: React.Dispatch<React.SetStateAction<Slide[]>>;
  slideList: Slide[];
}

export function VerdadeiroFalsoMidia({
  slideOpened,
  setSlideList,
  slideList,
}: VerdadeiroFalsoMidiaProps) {
  return (
    <div className="flex items-center justify-center h-full w-full flex-col">
      <div className="w-3/4 text-center pb-5">
        TEMPLATE VERDADEIRO FALSO MIDIA {slideOpened + 1}
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
