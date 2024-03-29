import { Slide } from "@/models/slide";
import { Trash } from "phosphor-react";
import { SetStateAction } from "react";

interface SideSlideProps {
  numero: number;
  setSlideOpened: React.Dispatch<SetStateAction<number>>;
  setSlideList: React.Dispatch<React.SetStateAction<Slide[]>>;
  slideList: Slide[];
  slideOpened: number;
}

export function SideSlide({
  numero,
  setSlideOpened,
  setSlideList,
  slideList,
  slideOpened,
}: SideSlideProps) {
  numero;

  const openSlide = () => {
    setSlideOpened(numero);
  };

  return (
    <div className="flex items-center">
      <div
        className={`mini-slide w-36 h-20 bg-zinc-200 border border-gray-300 rounded text-center text-black cursor-pointer mb-4 shadow-md border-gray-400`}
        onClick={openSlide}
      >
        Ver Slide 
      </div>
      <span className="ml-2 text-x pb-5 text-black p-2 flex items-center">
        {numero + 1}
      </span>
    </div>
  );
}
