import { Slide } from "@/models/slide";
import { PlusSideSlide } from "./SideSlide/plusSideSlide";
import { SideSlide } from "./SideSlide/sideSlide";

interface SideSlideShowProps {
  setSlideOpened: React.Dispatch<React.SetStateAction<string>>;
  setSlideList: React.Dispatch<React.SetStateAction<Slide[]>>;
  slideList: Slide[];
}

export function SideSlideShow({ setSlideOpened, setSlideList, slideList }: SideSlideShowProps) {

  return (
    <div className="w-40 bg-white text-white p-4 border-r border-gray-300 h-screen">
      <ul className="mt-4">
        {slideList.map((slide, index) => (
          <SideSlide
            setSlideOpened={setSlideOpened}
            key={index + 1}
            numero={index + 1}
            slideType={slide.slideType}
          ></SideSlide>
        ))}
        <PlusSideSlide setSlideList={setSlideList} slideList={slideList} />
      </ul>
    </div>
  );
}
