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
        <Input id="Enunciado" placeholder="Enunciado" />
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
            <Input id="Alternativa 1" placeholder="Alternativa 1" />
          </div>
        )}
      </div>
    </>
  );
}
