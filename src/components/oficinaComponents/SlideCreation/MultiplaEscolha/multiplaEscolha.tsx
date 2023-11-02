import { Slide } from "@/models/slide";

interface MultiplaEscolhaProps {
  slideList: Slide[];
  slideOpened: Slide;
}

export function MultiplaEscolha({
  slideList,
  slideOpened,
}: MultiplaEscolhaProps) {
  return (
    <div className="w-1/2 h-96 bg-gray-300 border border-gray-400 rounded-lg flex items-center justify-center">
      TEMPLATE MULTIPLA ESCOLHA {slideOpened.index + 1}
    </div>
  );
}
