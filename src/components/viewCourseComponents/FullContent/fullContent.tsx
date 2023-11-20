import { Slide } from "@/models/slide";
import { ViewMultiplaEscolha } from "./ViewMultiplaEscolha/viewMultiplaEscolha";
import { ViewMultiplaEscolhaMidia } from "./ViewMultiplaEscolhaMidia/viewMultiplaEscolhaMidia";
import { ViewVerdadeiroFalso } from "./ViewVerdadeiroFalso/viewVerdadeiroFalso";
import { ViewVerdadeiroFalsoMidia } from "./ViewVerdadeiroFalsoMidia/viewVerdadeiroFalsoMidia";
import { ViewSomenteMidia } from "./ViewSomenteMidia/viewSomenteMidia";
import { ViewFeedback } from "./ViewFeedback/viewFeedback";

interface FullContentProps {
  slide: Slide;
}

export function FullContent({ slide }: FullContentProps) {
  console.log("cursoo", slide);
  return (
    <div className="flex items-center justify-center h-full w-full flex-col">
      <div className="w-3/4 text-center pb-5">
        {slide.slideType === "em branco" ? (
          <p>em branco</p>
        ) : slide.slideType === "multipla escolha" ? (
          <ViewMultiplaEscolha slide={slide} />
        ) : slide.slideType === "verdadeiro ou falso" ? (
          <ViewVerdadeiroFalso slide={slide} />
        ) : slide.slideType === "multipla escolha com midia" ? (
          <ViewMultiplaEscolhaMidia slide={slide} />
        ) : slide.slideType === "verdadeiro ou falso com midia" ? (
          <ViewVerdadeiroFalsoMidia slide={slide} />
        ) : slide.slideType === "somente midia" ? (
          <ViewSomenteMidia slide={slide} />
        ) : slide.slideType === "feedback ao usuario" ? (
          <ViewFeedback slide={slide} />
        ) : (
          "ERRO"
        )}
      </div>
    </div>
  );
}
