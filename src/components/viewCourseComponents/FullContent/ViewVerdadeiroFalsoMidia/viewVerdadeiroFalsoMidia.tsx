import { Slide } from "@/models/slide";
import { ViewEstruturaVF } from "../ViewEstruturaVF/viewEstruturaVF";

interface ViewVerdadeiroFalsoMidiaProps {
  slide: Slide;
  id: string;
}

export function ViewVerdadeiroFalsoMidia({
  slide,
  id,
}: ViewVerdadeiroFalsoMidiaProps) {
  return (
    <div className="flex items-center justify-center h-full w-full flex-col">
      <p className="font-bold text-xl lg:text-3xl">VERDADEIRO OU FALSO MÍDIA</p>
      <div className="flex flex-col gap-3 mb-6 lg:gap-6 lg:mb-12">
        {slide.midia === "video" ? (
          <video className="w-full" controls>
            <source src={slide.midia} type="video/mp4" />
            Seu navegador não suporta o elemento de vídeo.
          </video>
        ) : (
          <img
            className="w-full px-2 rounded-2xl"
            src={slide.midia}
            alt="Descrição da imagem"
          />
        )}
      </div>
      <ViewEstruturaVF id={id} slide={slide} />
    </div>
  );
}
