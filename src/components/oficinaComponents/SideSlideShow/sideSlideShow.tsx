import { Slide } from "@/models/slide";
import { PlusSideSlide } from "./SideSlide/plusSideSlide";
import { SideSlide } from "./SideSlide/sideSlide";
import { Dispatch, SetStateAction } from "react";

interface SideSlideShowProps {
  setSlideOpened: React.Dispatch<SetStateAction<number>>;
  setSlideList: React.Dispatch<React.SetStateAction<Slide[]>>;
  slideList: Slide[];
  slideOpened: number;
}

export function SideSlideShow({
  setSlideOpened,
  setSlideList,
  slideList,
  slideOpened,
}: SideSlideShowProps) {
  return (
    <div className="w-52 bg-white text-white p-4 border-r border-gray-300 h-screen">
      <ul className="mt-4">
        {slideList.map((slide, index) => (
          <SideSlide
            setSlideOpened={setSlideOpened}
            key={index}
            numero={index}
            setSlideList={setSlideList}
            slideList={slideList}
          ></SideSlide>
        ))}
        <PlusSideSlide
          setSlideOpened={setSlideOpened}
          setSlideList={setSlideList}
          slideList={slideList}
        />
      </ul>
    </div>
  );
}
