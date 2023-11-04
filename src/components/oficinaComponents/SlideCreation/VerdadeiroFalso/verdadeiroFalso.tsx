import { Slide } from "@/models/slide";
import { Input } from "@material-tailwind/react";

interface VerdadeiroFalsoProps {
  slideOpened: number;
}

export function VerdadeiroFalso({ slideOpened }: VerdadeiroFalsoProps) {
  return (
    <div className="flex items-center justify-center h-full w-full flex-col">
      <div className="w-3/4 text-center pb-5">
        TEMPLATE VERDADEIRO FALSO {slideOpened + 1}
        <Input placeholder="Questão:" className="w-full mb-4 rounded-full" />
      </div>
      <div className="flex flex-col items-center w-full">
        <div className="w-2/3 mb-4">
          <Input placeholder="Afirmação 1" className="w-full rounded-full" />
        </div>
        <div className="w-2/3 mb-4">
          <Input placeholder="Afirmação 2" className="w-full rounded-full" />
        </div>
        <div className="w-2/3 mb-4">
          <Input placeholder="Afirmação 3" className="w-full rounded-full" />
        </div>
        <div className="w-2/3 mb-4">
          <Input placeholder="Afirmação 4" className="w-full rounded-full" />
        </div>
      </div>
    </div>
  );
}
