import { PlusSideSlide } from "./SideSlide/plusSideSlide";
import { SideSlide } from "./SideSlide/sideSlide";
import { useState } from "react";

interface Slide {
  content: string;
}

export function SideSlideShow() {
  const [slideList, setSlideList] = useState<Slide[]>([]);

  return (
    <div className="w-40 bg-white text-white p-4 border-r border-gray-300 h-screen">
      <ul className="mt-4">
        {slideList.map((slide, index) => (
          <SideSlide
            key={index + 1}
            numero={index + 1}
            content={slide.content}
          ></SideSlide>
        ))}
        <PlusSideSlide setSlideList={setSlideList} slideList={slideList}/>
      </ul>
    </div>
  );
}
