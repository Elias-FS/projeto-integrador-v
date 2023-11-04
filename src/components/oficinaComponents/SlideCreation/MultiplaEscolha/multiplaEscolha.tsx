import { Slide } from "@/models/slide";
import { Input } from "@material-tailwind/react";
import { EstruturaMultiplaEscolha } from "../MultiplaEscolhaMidia/estruturaMultiplaEscolha";

interface MultiplaEscolhaProps {
  slideOpened: number;
}

export function MultiplaEscolha({ slideOpened }: MultiplaEscolhaProps) {
  return (
    <div className="flex items-center justify-center h-full w-full flex-col">
      <div className="w-3/4 text-center pb-5">
        TEMPLATE MULTIPLA ESCOLHA {slideOpened + 1}
      </div>
      {/* <EstruturaMultiplaEscolha /> */}
    </div>
  );
}
