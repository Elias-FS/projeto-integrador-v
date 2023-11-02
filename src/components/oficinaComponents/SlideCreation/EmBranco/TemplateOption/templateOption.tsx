import { Slide } from "@/models/slide";

interface TemplateOptionProps {
  imageUrl: string;
  title: string;
  type: string;
  slideList: Slide[];
  slideOpened: number;
}

export function TemplateOption({
  imageUrl,
  title,
  type,
  slideList,
  slideOpened,
}: TemplateOptionProps) {
  return (
    <div
      onClick={() => (slideList[slideOpened].slideType = type)}
      className="text-center"
    >
      <div className="flex flex-col">
        <div className="w-full flex justify-center items-center">
          <h2 className="text-black font-bold">{title}</h2>
        </div>
        <img src={imageUrl} alt="Imagem" className="h-32" />
      </div>
    </div>
  );
}
