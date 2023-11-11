import React, { useEffect, useState } from "react";
import { Sidebar } from "@/components/ui/Sidebar";
import { Navbar } from "@/components/ui/Navbar";
import { SideSlideShow } from "@/components/oficinaComponents/SideSlideShow/sideSlideShow";
import { SlideCreation } from "@/components/oficinaComponents/SlideCreation/slideCreation";
import { Slide } from "@/models/slide";
import { useStore } from "@/zustand-store";
import { Button } from "@material-tailwind/react";
import { Check } from "phosphor-react";

const primeiroSlide: Slide = {
  slideType: `em branco`,
  index: 0,
};

const CriacaoCurso: React.FC = () => {
  const [slideOpened, setSlideOpened] = useState(0);
  const [slideList, setSlideList] = useState<Slide[]>([primeiroSlide]);
  const { curso, saveInformations } = useStore((state) => ({
    curso: state.curso,
    saveInformations: state.saveInformations,
  }));

  useEffect(() => {
    console.log("Curso após re-renderização:", curso);
  }, [curso]); // Executa o efeito sempre que `curso` é alterado

  function salvarSlides() {
    console.log("criação de cursos: ", curso)
    saveInformations({...curso, listaDeSlides: slideList});
  }

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
            slideOpened={slideOpened}
          />
          <SlideCreation
            slideList={slideList}
            slideOpened={slideOpened}
            setSlideList={setSlideList}
          />
          <Button
            className="bg-green-700 w-40 h-20"
            onClick={salvarSlides}
          >
            {"Finalziar Curso"} <Check className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CriacaoCurso;
