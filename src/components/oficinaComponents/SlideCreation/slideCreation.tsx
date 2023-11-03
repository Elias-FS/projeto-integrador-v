import { Slide } from "@/models/slide";
import { EmBranco } from "./EmBranco/emBranco";
import { MultiplaEscolha } from "./MultiplaEscolha/multiplaEscolha";
import { VerdadeiroFalso } from "./VerdadeiroFalso/verdadeiroFalso";
import { MultiplaEscolhaMidia } from "./MultiplaEscolhaMidia/multiplaEscolhaMidia";
import { VerdadeiroFalsoMidia } from "./VerdadeiroFalsoMidia/verdadeiroFalsoMidia";
import { SomenteMidia } from "./SomenteMidia/somenteMidia";
import { Feedback } from "./Feedback/feedback";
import { SetStateAction } from "react";

interface SlideCreationProps {
  slideOpened: Slide;
  slideList: Slide[];
  setSlideOpened: React.Dispatch<SetStateAction<Slide>>;
  setSlideList: React.Dispatch<React.SetStateAction<Slide[]>>;
}

export function SlideCreation({
  slideOpened,
  slideList,
  setSlideOpened,
  setSlideList,
}: SlideCreationProps) {
  return (
    <div className="w-full h-3/4 m-10 bg-gray-300 border border-gray-400 rounded-lg flex items-center justify-center">
      {slideList[slideOpened.index].slideType === "em branco" ? (
        <EmBranco
          setSlideList={setSlideList}
          slideOpened={slideOpened}
          setSlideOpened={setSlideOpened}
        />
      ) : slideList[slideOpened.index].slideType === "multipla escolha" ? (
        <MultiplaEscolha slideOpened={slideOpened} />
      ) : slideList[slideOpened.index].slideType === "verdadeiro ou falso" ? (
        <VerdadeiroFalso slideOpened={slideOpened} />
      ) : slideList[slideOpened.index].slideType ===
        "multipla escolha com midia" ? (
        <MultiplaEscolhaMidia slideOpened={slideOpened} slideList={slideList} />
      ) : slideList[slideOpened.index].slideType ===
        "verdadeiro ou falso com midia" ? (
        <VerdadeiroFalsoMidia slideOpened={slideOpened} slideList={slideList} />
      ) : slideList[slideOpened.index].slideType === "somente midia" ? (
        <SomenteMidia slideOpened={slideOpened} />
      ) : slideList[slideOpened.index].slideType === "feedback ao usuario" ? (
        <Feedback slideOpened={slideOpened} slideList={slideList} />
      ) : (
        "ERRO"
      )}
    </div>
  );
}
