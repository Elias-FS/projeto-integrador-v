import { Slide } from "@/models/slide";
import { ViewMultiplaEscolha } from "./ViewMultiplaEscolha/viewMultiplaEscolha";
import { ViewMultiplaEscolhaMidia } from "./ViewMultiplaEscolhaMidia/viewMultiplaEscolhaMidia";
import { ViewVerdadeiroFalso } from "./ViewVerdadeiroFalso/viewVerdadeiroFalso";
import { ViewVerdadeiroFalsoMidia } from "./ViewVerdadeiroFalsoMidia/viewVerdadeiroFalsoMidia";
import { ViewSomenteMidia } from "./ViewSomenteMidia/viewSomenteMidia";
import { ViewFeedback } from "./ViewFeedback/viewFeedback";

interface FullContentProps {
  slide: Slide;
  id: number;
}

export function FullContent({ slide, id }: FullContentProps) {
  slide.alternativas = slide.alternativas?.filter(alternativa => alternativa !== "")
  return (
    <div className="flex items-center justify-center h-full w-full flex-col">
      <div className="lg:w-full text-center lg:pb-5">
        {slide.tipo.toString() === "1" ? (
          <p>em branco</p>
        ) : slide.tipo.toString() === "3" ? (
          <ViewMultiplaEscolha id={id} slide={slide} />
        ) : slide.tipo.toString() === "2" ? (
          <ViewVerdadeiroFalso id={id} slide={slide} />
        ) : slide.tipo.toString() === "5" ? (
          <ViewMultiplaEscolhaMidia id={id} slide={slide} />
        ) : slide.tipo.toString() === "4" ? (
          <ViewVerdadeiroFalsoMidia id={id} slide={slide} />
        ) : slide.tipo.toString() === "6" ? (
          <ViewSomenteMidia slide={slide} />
        ) : slide.tipo.toString() === "7" ? (
          <ViewFeedback slide={slide} />
        ) : (
          "ERRO"
        )}
      </div>
    </div>
  );
}
