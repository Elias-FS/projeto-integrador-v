import React, { useState } from "react";
import { Sidebar } from "@/components/ui/Sidebar";
import { Navbar } from "@/components/ui/Navbar";
import { SideSlideShow } from "@/components/oficinaComponents/SideSlideShow/sideSlideShow";
import { SlideCreation } from "@/components/oficinaComponents/SlideCreation/slideCreation";
import { Slide } from "@/models/slide";

const primeiroSlide: Slide = {
  slideType: `em branco`,
  index: 0,
};

const CriacaoCurso: React.FC = () => {
  const [slideOpened, setSlideOpened] = useState(primeiroSlide);
  const [slideList, setSlideList] = useState<Slide[]>([primeiroSlide]);

  console.log(slideList);

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex flex-col flex-1 ml-80">
        <Navbar />
        <div className="flex flex-1 ">
          <SideSlideShow
            slideList={slideList}
            setSlideList={setSlideList}
            setSlideOpened={setSlideOpened}
          />
          <SlideCreation
            slideList={slideList}
            slideOpened={slideOpened}
            setSlideOpened={setSlideOpened}
            setSlideList={setSlideList}
          />
        </div>
      </div>
    </div>
  );
};

export default CriacaoCurso;
