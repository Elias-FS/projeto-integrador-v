import { Plus } from "phosphor-react";
import { useState } from "react";

interface PlusSideSlideProps {
  children: string;
}

export function PlusSideSlide({ children }: PlusSideSlideProps) {
  const [isSlideOpen, setSlideOpen] = useState(false);

  const toggleSlide = () => {
    setSlideOpen(!isSlideOpen);
  };

  return (
    <li className="flex items-center">
      <div
        className={`mini-slide ${
          isSlideOpen ? "open" : "closed"
        } w-28 h-14 bg-zinc-200 border border-gray-300 rounded cursor-pointer mb-4 shadow-md border-gray-400 flex items-center justify-center`}
        onClick={toggleSlide}
      >
        <Plus size={32} color="gray" />
      </div>

      <span className="ml-2 text-x pb-5 text-black p-2 flex items-center">
        {children}
      </span>
      {/* Número à direita do slide, centralizado verticalmente */}
    </li>
  );
}
