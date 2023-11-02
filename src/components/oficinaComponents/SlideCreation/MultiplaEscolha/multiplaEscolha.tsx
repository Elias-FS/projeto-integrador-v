import { Slide } from "@/models/slide";

interface MultiplaEscolhaProps {
  slideList: Slide[];
  slideOpened: number;
}

export function MultiplaEscolha({
  slideList,
  slideOpened,
}: MultiplaEscolhaProps) {
  return (
    <div className="w-1/2 h-96 bg-gray-300 border border-gray-400 rounded-lg flex items-center justify-center">
      TEMPLATE MULTIPLA ESCOLHA {slideOpened + 1}
    </div>
  );
}
