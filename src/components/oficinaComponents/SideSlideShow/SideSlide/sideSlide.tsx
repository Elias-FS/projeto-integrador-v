interface SideSlideProps {
  numero: number;
  slideType: string;
  setSlideOpened: React.Dispatch<React.SetStateAction<string>>; 
}

export function SideSlide({ numero, slideType, setSlideOpened }: SideSlideProps) {
  const conteudo = slideType
  const index = numero

  console.log(index.toString())
  const openSlide = () => {
    setSlideOpened(conteudo); 
  };

  return (
    <div className="flex items-center">
      <div
        className={`mini-slide w-28 h-14 bg-zinc-200 border border-gray-300 rounded text-black cursor-pointer mb-4 shadow-md border-gray-400`}
        onClick={openSlide}
      >
        {index}
      </div>
      <span className="ml-2 text-x pb-5 text-black p-2 flex items-center">
        {index}
      </span>

    </div>
  );
}