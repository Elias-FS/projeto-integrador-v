import { Checkbox } from "@/components/ui/CheckBox/checkbox";
import { Input } from "@/components/ui/Input/input";
import { Label } from "@/components/ui/Label/label";
import { Slide } from "@/models/slide";

interface EstruturaMultiplaEscolhaProps {
  slideOpened: number;
  setSlideList: React.Dispatch<React.SetStateAction<Slide[]>>;
  slideList: Slide[];
}

export function EstruturaMultiplaEscolha({
  slideOpened,
  setSlideList,
  slideList,
}: EstruturaMultiplaEscolhaProps) {
  return (
    <>
      <div className="text-left w-3/4">
        <Label htmlFor="Enunciado">Enunciado: </Label>
        {slideList[slideOpened]?.question ? (
          <Input
            id="Enunciado"
            placeholder="Enunciado"
            value={slideList[slideOpened]?.question}
            onChange={(e) => {
              const updatedValue = e.target.value;
              setSlideList((prevSlideList) =>
                prevSlideList.map((slide) => {
                  if (slide.index === slideOpened) {
                    return { ...slide, question: updatedValue };
                  }
                  return slide;
                })
              );
            }}
          />
        ) : (
          <Input
            id="Enunciado"
            placeholder="Enunciado"
            onChange={(e) => {
              const updatedValue = e.target.value;
              setSlideList((prevSlideList) =>
                prevSlideList.map((slide) => {
                  if (slide.index === slideOpened) {
                    return { ...slide, question: updatedValue };
                  }
                  return slide;
                })
              );
            }}
          />
        )}
      </div>
      <div className="flex flex-col items-center w-full">
        <div className="text-left w-2/3">
          <Label htmlFor="Alternativas">Alternativas: </Label>
        </div>
        {slideList[slideOpened]?.options ? (
          slideList[slideOpened].options?.map((questao, index) => (
            <div className="w-2/3 mb-4 flex items-center space-x-2">
              <Checkbox />
              <Input
                id={`Alternativa ${index}`}
                placeholder={`Alternativa ${index}`}
                value={questao}
              />
            </div>
          ))
        ) : (
          <div className="w-2/3 mb-4 flex items-center space-x-2">
            <Checkbox />
            <Input
              id="Alternativa 1"
              placeholder="Alternativa 1"
              onChange={(e) => {
                const updatedValue = e.target.value;

                setSlideList((prevSlideList) =>
                  prevSlideList.map((slide) => {
                    if (slide.index === slideOpened) {
                      // Atualiza o slideOpened na lista com o novo valor para a questão
                      return { ...slide, question: updatedValue };
                    }
                    return slide;
                  })
                );
              }}
            />
          </div>
        )}
      </div>
    </>
  );
}
