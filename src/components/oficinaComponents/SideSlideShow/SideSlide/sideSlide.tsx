import { Slide } from "@/models/slide";
import { SetStateAction } from "react";

interface SideSlideProps {
  numero: number;
  setSlideOpened: React.Dispatch<SetStateAction<number>>;
}

export function SideSlide({ numero, setSlideOpened }: SideSlideProps) {
  numero;

  const openSlide = () => {
    setSlideOpened(numero);
  };

  return (
    <div className="flex items-center">
      <div
        className={`mini-slide w-28 h-14 bg-zinc-200 border border-gray-300 rounded text-black cursor-pointer mb-4 shadow-md border-gray-400`}
        onClick={openSlide}
      >
        {numero + 1}
      </div>
      <span className="ml-2 text-x pb-5 text-black p-2 flex items-center">
        {numero + 1}
      </span>
    </div>
  );
}
