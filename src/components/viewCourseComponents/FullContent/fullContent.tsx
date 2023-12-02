import { Slide } from "@/models/slide";
import { ViewMultiplaEscolha } from "./ViewMultiplaEscolha/viewMultiplaEscolha";
import { ViewMultiplaEscolhaMidia } from "./ViewMultiplaEscolhaMidia/viewMultiplaEscolhaMidia";
import { ViewVerdadeiroFalso } from "./ViewVerdadeiroFalso/viewVerdadeiroFalso";
import { ViewVerdadeiroFalsoMidia } from "./ViewVerdadeiroFalsoMidia/viewVerdadeiroFalsoMidia";
import { ViewSomenteMidia } from "./ViewSomenteMidia/viewSomenteMidia";
import { ViewFeedback } from "./ViewFeedback/viewFeedback";

interface FullContentProps {
  slide: Slide;
  id: string;
}

export function FullContent({ slide, id }: FullContentProps) {
  console.log("cursoo", slide);
  return (
    <div className="flex items-center justify-center h-full w-full flex-col">
      <div className="lg:w-full text-center lg:pb-5">
        {slide.tipo === "em branco" ? (
          <p>em branco</p>
        ) : slide.tipo === "multipla escolha" ? (
          <ViewMultiplaEscolha id={id} slide={slide} />
        ) : slide.tipo === "verdadeiro ou falso" ? (
          <ViewVerdadeiroFalso id={id} slide={slide} />
        ) : slide.tipo === "multipla escolha com midia" ? (
          <ViewMultiplaEscolhaMidia id={id} slide={slide} />
        ) : slide.tipo === "verdadeiro ou falso com midia" ? (
          <ViewVerdadeiroFalsoMidia id={id} slide={slide} />
        ) : slide.tipo === "somente midia" ? (
          <ViewSomenteMidia slide={slide} />
        ) : slide.tipo === "feedback ao usuario" ? (
          <ViewFeedback slide={slide} />
        ) : (
          "ERRO"
        )}
      </div>
    </div>
  );
}
