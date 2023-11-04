import { Slide } from "@/models/slide";
import { Input } from "@material-tailwind/react";
import DropZoneMidia from "../../DropZoneMidia/dropZoneMidia";

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
        <Input placeholder="Questão:" className="w-full mb-4 rounded-full" />
      </div>
      <div className="flex flex-col items-center w-full">
        <div className="w-2/3 mb-4">
          <Input placeholder="Alternativa 1" className="w-full rounded-full" />
        </div>
        <div className="w-2/3 mb-4">
          <Input placeholder="Alternativa 2" className="w-full rounded-full" />
        </div>
        <div className="w-2/3 mb-4">
          <Input placeholder="Alternativa 3" className="w-full rounded-full" />
        </div>
        <div className="w-2/3 mb-4">
          <Input placeholder="Alternativa 4" className="w-full rounded-full" />
        </div>
      </div>
    </div>
  );
}
