import { Slide } from "@/models/slide";
import { ViewEstruturaME } from "../ViewEstruturaME/viewEstruturaME";

interface ViewMultiplaEscolhaMidiaProps {
  slide: Slide;
}

export function ViewMultiplaEscolhaMidia({
  slide,
}: ViewMultiplaEscolhaMidiaProps) {
  return (
    <div className="flex items-center justify-center h-full w-full flex-col">
      MULTIPLA ESCOLHA MÍDIA
      <div className="flex flex-col gap-6 mb-12">
        {slide.midia === "video" ? (
          <video className="w-full" controls>
            <source src={slide.midia} type="video/mp4" />
            Seu navegador não suporta o elemento de vídeo.
          </video>
        ) : (
          <img className="w-full" src={slide.midia} alt="Descrição da imagem" />
        )}
      </div>
      <ViewEstruturaME slide={slide} />
    </div>
  );
}
