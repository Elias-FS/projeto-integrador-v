import { Slide } from "@/models/slide";
import { Button } from "@material-tailwind/react";
import { Label } from "@radix-ui/react-label";
import { useState, useEffect } from "react";

interface ViewEstruturaQuestoesProps {
  slide: Slide;
  id: string;
}

export function ViewEstruturaME({ slide, id }: ViewEstruturaQuestoesProps) {
  const respostaSalvaString = localStorage.getItem(`resposta_${id}`);
  const respostaSalva = respostaSalvaString
    ? JSON.parse(respostaSalvaString)
    : null;
  const [selecionado, setSelecionado] = useState<number>(
    respostaSalva ? respostaSalva.selecionado : -1
  );
  const [acertou, setAcertou] = useState<number>(
    respostaSalva ? respostaSalva.acertou : -1
  );

  useEffect(() => {
    if (respostaSalva && respostaSalva.index_curso === "valor_curso") {
      setSelecionado(respostaSalva.selecionado);
      setAcertou(respostaSalva.acertou);
    }

    const handleStorageChange = () => {
      const novaRespostaSalvaString = localStorage.getItem(`resposta_${id}`);
      const novaRespostaSalva = novaRespostaSalvaString
        ? JSON.parse(novaRespostaSalvaString)
        : null;

      if (
        novaRespostaSalva &&
        novaRespostaSalva.index_curso === "valor_curso"
      ) {
        setSelecionado(novaRespostaSalva.selecionado);
        setAcertou(novaRespostaSalva.acertou);
      }
    };

    window.addEventListener("storage", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, [id]);

  function confirmarEscolha(selecionado: number) {
    const acertou = slide.correctOption?.includes(selecionado) ? 1 : 0;

    const respostaSalva = {
      index_curso: id,
      index_slide: slide.index,
      acertou: acertou,
      selecionado: selecionado,
    };

    localStorage.setItem(`resposta_${id}`, JSON.stringify(respostaSalva));
    setAcertou(acertou);
  }

  return (
    <>
      <div className="text-left w-3/4 flex flex-col">
        <Label>{slide.question}</Label>
        <div className="flex flex-col gap-6 mb-12">
          {slide.options?.map((option, index) => (
            <Button
              className={`block font-inherit text-inherit text-2xl ${
                selecionado === index
                  ? "border-accent bg-green-200 text-light transform translate-x-3"
                  : " bg-dark"
              } py-3 px-6 cursor-pointer rounded-full transition duration-300 hover:bg-darkest hover:transform-hover ${
                selecionado !== undefined ? "disabled:cursor-not-allowed" : ""
              }`}
              key={option}
              onClick={() => setSelecionado(index)}
            >
              {option}
            </Button>
          ))}
        </div>
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
        className="block font-inherit text-inherit bg-green-700 text-2xl text-white border-2"
        onClick={() => confirmarEscolha(selecionado)}
      >
        Confirmar
      </Button>
    </>
  );
}
