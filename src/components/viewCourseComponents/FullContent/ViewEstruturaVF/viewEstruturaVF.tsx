import { Slide } from "@/models/slide";
import { Button } from "@material-tailwind/react";
import { Checkbox } from "@/components/ui/CheckBox/checkbox";
import { Label } from "@radix-ui/react-label";
import { useEffect, useState } from "react";

interface ViewEstruturaVFProps {
  slide: Slide;
  id: string;
}

export function ViewEstruturaVF({ slide, id }: ViewEstruturaVFProps) {
  const respostaSalva = localStorage.getItem(`resposta_${slide.posicao}_${id}`);
  const acertouSalvo = localStorage.getItem(`acertou_${slide.posicao}_${id}`);
  const [selecionados, setSelecionados] = useState<number[]>(
    respostaSalva ? JSON.parse(respostaSalva) : []
  );
  const [acertou, setAcertou] = useState<number>(
    acertouSalvo ? Number(acertouSalvo) : -1
  );

  useEffect(() => {
    const handleStorageChange = () => {
      const novaRespostaSalva = localStorage.getItem(
        `resposta_${slide.posicao}_${id}`
      );
      setSelecionados(novaRespostaSalva ? JSON.parse(novaRespostaSalva) : []);
      const novoAcertouSalvo = localStorage.getItem(
        `acertou_${slide.posicao}_${id}`
      );

      setAcertou(novoAcertouSalvo ? Number(novoAcertouSalvo) : -1);
    };
    window.addEventListener("storage", handleStorageChange);
    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, [id, slide.posicao]);

  function confirmarEscolha(selecionados: number[]) {
    const acertou =
      slide.resposta &&
      slide.resposta.length === selecionados.length &&
      new Set(slide.resposta).size === new Set(selecionados).size &&
      slide.resposta.every((value) => new Set(selecionados).has(value));

    localStorage.setItem(
      `resposta_${slide.posicao}_${id}`,
      JSON.stringify(selecionados)
    );
    localStorage.setItem(
      `acertou_${slide.posicao}_${id}`,
      String(acertou ? 1 : 0)
    );
    setAcertou(acertou ? 1 : 0);
  }

  return (
    <div className="text-left w-3/4 flex flex-col">
      <Label>{slide.texto}</Label>
      Marque as questões verdadeiras:
      <div className="flex flex-col gap-6 mb-12">
        {slide.alternativas?.map((option, index) => (
          <div className="flex gap-3" key={index}>
            <Checkbox
              checked={selecionados.includes(index)}
              onCheckedChange={(isChecked) => {
                if (isChecked) {
                  // adicionar na lista de selecionados
                  setSelecionados((prevSelecionados) => [
                    ...prevSelecionados,
                    index,
                  ]);
                } else {
                  // tirar da lista de selecionados
                  setSelecionados((prevSelecionados) =>
                    prevSelecionados.filter((item) => item !== index)
                  );
                }
              }}
            />
            <Button
              className={`block font-inherit text-inherit text-2xl border-2 border-dark bg-dark py-3 px-6 cursor-pointer rounded-full transition duration-300 hover:bg-darkest hover:transform-hover ${
                selecionados.length > 0 ? "disabled:cursor-not-allowed" : ""
              }`}
            >
              {option}
            </Button>
          </div>
        ))}
      </div>
      {acertou !== -1 && (
        <div>
          {acertou === 1 ? (
            <div>{slide.feedbacks?.[0]}</div>
          ) : (
            <div>{slide.feedbacks?.[1]}</div>
          )}
        </div>
      )}
      <Button
        className={`block font-inherit text-inherit bg-green-700 text-2xl text-white border-2 ${
          selecionados.length === 0 ? "disabled:cursor-not-allowed" : ""
        }`}
        onClick={() => confirmarEscolha(selecionados)}
      >
        Confirmar
      </Button>
    </div>
  );
}
