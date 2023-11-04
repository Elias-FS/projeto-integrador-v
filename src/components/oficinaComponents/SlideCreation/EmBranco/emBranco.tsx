import { Slide } from "@/models/slide";
import { TemplateOption } from "./TemplateOption/templateOption";
import { SetStateAction } from "react";

interface EmBrancoTemplateProps {
  slideOpened: number;
  setSlideList: React.Dispatch<React.SetStateAction<Slide[]>>;
}

export function EmBranco({ slideOpened, setSlideList }: EmBrancoTemplateProps) {
  return (
    <div className="w-full h-full bg-gray-300 border border-gray-400 rounded-lg flex items-center justify-center">
      <div className="flex">
        Slide: {slideOpened + 1}
        <div>
          <TemplateOption
            imageUrl={
              "https://canaldoensino.com.br/blog/wp-content/uploads/2018/05/provas_de_multipla_escolha.jpg"
            }
            title={"Múltipla escolha"}
            type="multipla escolha"
            slideOpened={slideOpened}
            setSlideList={setSlideList}
          />
          <TemplateOption
            imageUrl={
              "https://canaldoensino.com.br/blog/wp-content/uploads/2018/05/provas_de_multipla_escolha.jpg"
            }
            title={"Verdadeiro ou Falso"}
            type="verdadeiro ou falso"
            slideOpened={slideOpened}
            setSlideList={setSlideList}
          />
          <TemplateOption
            imageUrl={
              "https://canaldoensino.com.br/blog/wp-content/uploads/2018/05/provas_de_multipla_escolha.jpg"
            }
            title={"Múltipla escolha com Mídia"}
            type="multipla escolha com midia"
            slideOpened={slideOpened}
            setSlideList={setSlideList}
          />
        </div>
        <div>
          <TemplateOption
            imageUrl={
              "https://canaldoensino.com.br/blog/wp-content/uploads/2018/05/provas_de_multipla_escolha.jpg"
            }
            title={"Verdadeiro ou Falso com Mídia"}
            type="verdadeiro ou falso com midia"
            slideOpened={slideOpened}
            setSlideList={setSlideList}
          />
          <TemplateOption
            imageUrl={
              "https://canaldoensino.com.br/blog/wp-content/uploads/2018/05/provas_de_multipla_escolha.jpg"
            }
            title={"Somente Mídia"}
            type="somente midia"
            slideOpened={slideOpened}
            setSlideList={setSlideList}
          />
          <TemplateOption
            imageUrl={
              "https://canaldoensino.com.br/blog/wp-content/uploads/2018/05/provas_de_multipla_escolha.jpg"
            }
            title={"Feedback"}
            type="feedback ao usuario"
            slideOpened={slideOpened}
            setSlideList={setSlideList}
          />
        </div>
      </div>
    </div>
  );
}
