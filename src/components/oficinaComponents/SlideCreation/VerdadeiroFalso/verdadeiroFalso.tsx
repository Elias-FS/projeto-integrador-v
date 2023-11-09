import { Slide } from "@/models/slide";
import { Input } from "@material-tailwind/react";
import { EstruturaDeAlternativas } from "../EstruturaDeAlternativas/estruturaDeAlternativas";

interface VerdadeiroFalsoProps {
  slideOpened: number;
  setSlideList: React.Dispatch<React.SetStateAction<Slide[]>>;
  slideList: Slide[];
}

export function VerdadeiroFalso({
  slideOpened,
  setSlideList,
  slideList,
}: VerdadeiroFalsoProps) {
  return (
    <div className="flex items-center justify-center h-full w-full flex-col">
      VERDADEIRO OU FALSO {slideOpened + 1}
      <EstruturaDeAlternativas
        slideOpened={slideOpened}
        setSlideList={setSlideList}
        slideList={slideList}
      />
    </div>
  );
}
