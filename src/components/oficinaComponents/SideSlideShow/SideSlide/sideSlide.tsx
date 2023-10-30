import { useState } from "react";

interface SideSlideProps {
  numero: React.ReactNode;
  content: string;
}

export function SideSlide({ numero, content }: SideSlideProps) {
  const [isSlideOpen, setSlideOpen] = useState(false);

  const toggleSlide = () => {
    setSlideOpen(!isSlideOpen);
  };

  return (
    <div className="flex items-center">
      <div
        className={`mini-slide ${isSlideOpen ? "open" : "closed"} w-28 h-14 bg-zinc-200 border border-gray-300 rounded cursor-pointer mb-4 shadow-md border-gray-400`}
        onClick={toggleSlide}
      >
        {content}
      </div>
      <span className="ml-2 text-x pb-5 text-black p-2 flex items-center">
        {numero}
      </span>
      {/* Número à direita do slide, centralizado verticalmente */}
    </div>
  );
}
