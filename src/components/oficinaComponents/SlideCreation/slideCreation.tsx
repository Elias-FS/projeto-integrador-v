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
  setSlideList: React.Dispatch<React.SetStateAction<Slide[]>>;
}

export function SlideCreation({
  slideOpened,
  slideList,
  setSlideList,
}: SlideCreationProps) {
  return (
    <div className="w-full h-3/4 m-10 bg-gray-100 border border-gray-400 rounded-lg flex items-center justify-center">
      {slideList[slideOpened].slideType === "em branco" ? (
        <EmBranco setSlideList={setSlideList} slideOpened={slideOpened} />
      ) : slideList[slideOpened].slideType === "multipla escolha" ? (
        <MultiplaEscolha slideOpened={slideOpened} />
      ) : slideList[slideOpened].slideType === "verdadeiro ou falso" ? (
        <VerdadeiroFalso slideOpened={slideOpened} />
      ) : slideList[slideOpened].slideType === "multipla escolha com midia" ? (
        <MultiplaEscolhaMidia
          slideOpened={slideOpened}
          setSlideList={setSlideList}
          slideList={slideList}
        />
      ) : slideList[slideOpened].slideType ===
        "verdadeiro ou falso com midia" ? (
        <VerdadeiroFalsoMidia
          slideOpened={slideOpened}
          setSlideList={setSlideList}
          slideList={slideList}
        />
      ) : slideList[slideOpened].slideType === "somente midia" ? (
        <SomenteMidia
          slideOpened={slideOpened}
          setSlideList={setSlideList}
          slideList={slideList}
        />
      ) : slideList[slideOpened].slideType === "feedback ao usuario" ? (
        <Feedback slideOpened={slideOpened} />
      ) : (
        "ERRO"
      )}
    </div>
  );
}
