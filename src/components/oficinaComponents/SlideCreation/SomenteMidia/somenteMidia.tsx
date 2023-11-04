import { Slide } from "@/models/slide";
import DropZoneMidia from "../../DropZoneMidia/dropZoneMidia";

interface SomenteMidiaProps {
  slideOpened: number;
  setSlideList: React.Dispatch<React.SetStateAction<Slide[]>>;
  slideList: Slide[];
}

export function SomenteMidia({
  slideOpened,
  setSlideList,
  slideList,
}: SomenteMidiaProps) {
  return (
    <div className="flex items-center justify-center h-full w-full flex-col">
      <div className="w-3/4 text-center pb-5">
        TEMPLATE SOMENTE MIDIA {slideOpened + 1}
      </div>
      <DropZoneMidia
        slideOpened={slideOpened}
        setSlideList={setSlideList}
        slideList={slideList}
      />
      <div />
    </div>
  );
}
