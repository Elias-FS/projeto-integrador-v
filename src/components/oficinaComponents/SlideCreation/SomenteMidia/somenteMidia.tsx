import { Slide } from "@/models/slide";
import DropZoneMidia from "../../DropZoneMidia/dropZoneMidia";

interface SomenteMidiaProps {
  slideOpened: Slide;
}

export function SomenteMidia({ slideOpened }: SomenteMidiaProps) {
  return (
    <div className="flex items-center justify-center h-full w-full flex-col">
      <div className="w-3/4 text-center pb-5">
        TEMPLATE SOMENTE MIDIA {slideOpened.index + 1}
      </div>
      <DropZoneMidia />
      <div />
    </div>
  );
}
