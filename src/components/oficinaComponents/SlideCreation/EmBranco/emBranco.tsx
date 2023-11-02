import { Slide } from "@/models/slide";
import { TemplateOption } from "./TemplateOption/templateOption";

interface EmBrancoTemplateProps {
  slideList: Slide[];
  slideOpened: number;
}

export function EmBranco({ slideList, slideOpened }: EmBrancoTemplateProps) {
  return (
    <div className="w-full h-96 bg-gray-300 border border-gray-400 rounded-lg flex items-center justify-center">
      Slide: {slideOpened + 1}
      <div className="flex">
        <div>
          <TemplateOption
            imageUrl={
              "https://canaldoensino.com.br/blog/wp-content/uploads/2018/05/provas_de_multipla_escolha.jpg"
            }
            title={"Múltipla escolha"}
            type="multipla escolha"
            slideList={slideList}
            slideOpened={slideOpened}
          />
          <TemplateOption
            imageUrl={
              "https://canaldoensino.com.br/blog/wp-content/uploads/2018/05/provas_de_multipla_escolha.jpg"
            }
            title={"Verdadeiro ou Falso"}
            type="verdadeiro ou falso"
            slideList={slideList}
            slideOpened={slideOpened}
          />
          <TemplateOption
            imageUrl={
              "https://canaldoensino.com.br/blog/wp-content/uploads/2018/05/provas_de_multipla_escolha.jpg"
            }
            title={"Múltipla escolha com Mídia"}
            type="multipla escolha com midia"
            slideList={slideList}
            slideOpened={slideOpened}
          />
        </div>
        <div>
          <TemplateOption
            imageUrl={
              "https://canaldoensino.com.br/blog/wp-content/uploads/2018/05/provas_de_multipla_escolha.jpg"
            }
            title={"Verdadeiro ou Falso com Mídia"}
            type="verdadeiro ou falso com midia"
            slideList={slideList}
            slideOpened={slideOpened}
          />
          <TemplateOption
            imageUrl={
              "https://canaldoensino.com.br/blog/wp-content/uploads/2018/05/provas_de_multipla_escolha.jpg"
            }
            title={"Somente Mídia"}
            type="somente midia"
            slideList={slideList}
            slideOpened={slideOpened}
          />
          <TemplateOption
            imageUrl={
              "https://canaldoensino.com.br/blog/wp-content/uploads/2018/05/provas_de_multipla_escolha.jpg"
            }
            title={"Feedback"}
            type="feedback ao usuario"
            slideList={slideList}
            slideOpened={slideOpened}
          />
        </div>
      </div>
    </div>
  );
}
