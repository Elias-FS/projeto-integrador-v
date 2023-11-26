import { Slide } from "@/models/slide";

interface TemplateOptionProps {
  imageUrl: string;
  title: string;
  type: string;
  slideOpened: number;
  setSlideList: React.Dispatch<React.SetStateAction<Slide[]>>;
  slideList: Slide[];
}

export function TemplateOption({
  imageUrl,
  title,
  type,
  slideOpened,
  setSlideList,
  slideList
}: TemplateOptionProps) {
  function alterandoEstado() {
    setSlideList((prevSlideList) => {
      return prevSlideList.map((slide) => {
        if (slide.id === slideList[slideOpened].id) {
          // Atualiza o slideOpened na lista com o novo tipo
          return { ...slide, slideType: type, options: [""] };
        }
        return slide;
      });
    });
  }

  return (
    <div onClick={alterandoEstado} className="text-center">
      <div className="flex flex-col">
        <div className="w-full flex justify-center items-center">
          <h2 className="text-black font-bold text-xl cursor-pointer mb-5">
            {title}
          </h2>
        </div>
        <img
          src={imageUrl}
          alt="Imagem"
          className="h-44 rounded-md cursor-pointer border-2 border-black"
        />
      </div>
    </div>
  );
}
