import { Slide } from "@/models/slide";
import { EmBranco } from "./EmBranco/emBranco";
import { MultiplaEscolha } from "./MultiplaEscolha/multiplaEscolha";
import { VerdadeiroFalso } from "./VerdadeiroFalso/verdadeiroFalso";
import { MultiplaEscolhaMidia } from "./MultiplaEscolhaMidia/multiplaEscolhaMidia";
import { VerdadeiroFalsoMidia } from "./VerdadeiroFalsoMidia/verdadeiroFalsoMidia";
import { SomenteMidia } from "./SomenteMidia/somenteMidia";
import { Feedback } from "./Feedback/feedback";

interface SlideCreationProps {
  slideOpened: number;
  slideList: Slide[];
}

export function SlideCreation({ slideOpened, slideList }: SlideCreationProps) {
  return (
    <div className="w-full h-3/4 m-10 bg-gray-300 border border-gray-400 rounded-lg flex items-center justify-center">
      {slideList[slideOpened].slideType === "em branco" ? (
        <EmBranco slideOpened={slideOpened} slideList={slideList} />
      ) : slideList[slideOpened].slideType === "multipla escolha" ? (
        <MultiplaEscolha slideOpened={slideOpened} slideList={slideList} />
      ) : slideList[slideOpened].slideType === "verdadeiro ou falso" ? (
        <VerdadeiroFalso />
      ) : slideList[slideOpened].slideType === "multipla escolha com midia" ? (
        <MultiplaEscolhaMidia />
      ) : slideList[slideOpened].slideType ===
        "verdadeiro ou falso com midia" ? (
        <VerdadeiroFalsoMidia />
      ) : slideList[slideOpened].slideType === "somente midia" ? (
        <SomenteMidia />
      ) : slideList[slideOpened].slideType === "feedback ao usuario" ? (
        <Feedback />
      ) : (
        "ERRO"
      )}
    </div>
  );
}
