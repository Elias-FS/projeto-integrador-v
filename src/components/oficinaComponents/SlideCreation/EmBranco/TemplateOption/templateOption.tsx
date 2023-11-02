import { Slide } from "@/models/slide";
import { SetStateAction, useState } from "react";

interface TemplateOptionProps {
  imageUrl: string;
  title: string;
  type: string;
  slideOpened: Slide;
  setSlideOpened: React.Dispatch<SetStateAction<Slide>>;
}

export function TemplateOption({
  imageUrl,
  title,
  type,
  slideOpened,
  setSlideOpened,
}: TemplateOptionProps) {
  function alterandoEstado() {
    slideOpened.slideType = type;
    setSlideOpened(slideOpened);
  }

  return (
    <div onClick={alterandoEstado} className="text-center">
      <div className="flex flex-col">
        <div className="w-full flex justify-center items-center">
          <h2 className="text-black font-bold">{title}</h2>
        </div>
        <img src={imageUrl} alt="Imagem" className="h-32" />
      </div>
    </div>
  );
}
