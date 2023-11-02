import { Slide } from "@/models/slide";
import { PlusSideSlide } from "./SideSlide/plusSideSlide";
import { SideSlide } from "./SideSlide/sideSlide";
import { Dispatch, SetStateAction } from "react";

interface SideSlideShowProps {
  setSlideOpened: React.Dispatch<SetStateAction<Slide>>;
  setSlideList: React.Dispatch<React.SetStateAction<Slide[]>>;
  slideList: Slide[];
}

export function SideSlideShow({
  setSlideOpened,
  setSlideList,
  slideList,
}: SideSlideShowProps) {
  return (
    <div className="w-40 bg-white text-white p-4 border-r border-gray-300 h-screen">
      <ul className="mt-4">
        {slideList.map((slide, index) => (
          <SideSlide
            slideList={slideList}
            setSlideOpened={setSlideOpened}
            key={index}
            numero={index}
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