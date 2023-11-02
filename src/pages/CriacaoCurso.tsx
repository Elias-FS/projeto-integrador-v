import React, { useState } from "react";
import { Sidebar } from "@/components/ui/Sidebar";
import { Navbar } from "@/components/ui/Navbar";
import { SideSlideShow } from "@/components/oficinaComponents/SideSlideShow/sideSlideShow";
import { SlideCreation } from "@/components/oficinaComponents/SlideCreation/slideCreation";
import { Slide } from "@/models/slide";

const primeiroSlide: Slide = {
  slideType: `em branco`,
};

const CriacaoCurso: React.FC = () => {
  const [slideOpened, setSlideOpened] = useState(0);
  const [slideList, setSlideList] = useState<Slide[]>([primeiroSlide]);

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
          <SlideCreation slideList={slideList} slideOpened={slideOpened} />
        </div>
      </div>
    </div>
  );
};

export default CriacaoCurso;
