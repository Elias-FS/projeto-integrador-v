import React, { useState } from "react";
import { Sidebar } from "@/components/ui/Sidebar";
import { Navbar } from "@/components/ui/Navbar";
import { SideSlideShow } from "@/components/oficinaComponents/SideSlideShow/sideSlideShow";
import { SlideCreation } from "@/components/oficinaComponents/SlideCreation/slideCreation";
import { Slide } from "@/models/slide";

const primeiroSlide: Slide = {
  slideType: `em branco 1`,
};

const CriacaoCurso: React.FC = () => {
  const [slideOpened, setSlideOpened] = useState("");
  const [slideList, setSlideList] = useState<Slide[]>([
    primeiroSlide
  ]);

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex flex-col flex-1 ml-80">
        <Navbar />
        <div className="flex flex-1 space-x-40">
          <SideSlideShow
            slideList={slideList}
            setSlideList={setSlideList}
            setSlideOpened={setSlideOpened}
          />
          <SlideCreation slideOpened={slideOpened} />
        </div>
      </div>
    </div>
  );
};

export default CriacaoCurso;
