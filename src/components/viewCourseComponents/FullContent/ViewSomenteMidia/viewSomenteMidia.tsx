import { Slide } from "@/models/slide";

interface ViewSomenteMidiaProps {
  slide: Slide;
}

export function ViewSomenteMidia({ slide }: ViewSomenteMidiaProps) {
  return (
    <div className="flex flex-col gap-6 mb-12">
      {slide.midia === 'video' ? (
        <video className="w-full" controls>
          <source src={slide.midia} type="video/mp4" />
          Seu navegador não suporta o elemento de vídeo.
        </video>
      ) : (
        <img className="w-full" src={slide.midia} alt="Descrição da imagem" />
      )}
    </div>
  );
}
