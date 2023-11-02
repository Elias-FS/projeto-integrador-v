import { Slide } from "@/models/slide";
import { Minus, Plus } from "phosphor-react";
import { SetStateAction } from "react";

interface PlusSideSlideProps {
  setSlideList: React.Dispatch<React.SetStateAction<Slide[]>>;
  slideList: Slide[];
  setSlideOpened: React.Dispatch<SetStateAction<Slide>>;
}

export function PlusSideSlide({
  setSlideList,
  slideList,
  setSlideOpened,
}: PlusSideSlideProps) {
  const addSlide = () => {
    const newSlide: Slide = {
      slideType: "em branco",
      index: slideList.length,
    };
    setSlideList([...slideList, newSlide]);
    setSlideOpened(newSlide);
  };

  const takeSlide = () => {
    setSlideList((prevList) => prevList.slice(0, prevList.length - 1));
    setSlideOpened(slideList[0]);
  };

  return (
    <div className="flex items-center">
      <div
        className="mini-slide w-28 h-14 bg-green-600 border border-gray-300 rounded cursor-pointer mb-4 shadow-md border-gray-400 flex items-center justify-center"
        onClick={addSlide}
      >
        <Plus size={32} color="white" />
      </div>
      <div
        className="mini-slide w-28 h-14 bg-red-400 border border-gray-300 rounded cursor-pointer mb-4 shadow-md border-gray-400 flex items-center justify-center ml-2"
        onClick={takeSlide}
      >
        <Minus size={32} color="white" />
      </div>
    </div>
  );
}