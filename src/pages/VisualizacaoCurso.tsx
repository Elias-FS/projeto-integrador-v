import React, { useEffect, useState } from "react";
import { Sidebar } from "@/components/ui/Sidebar";
import { Navbar } from "@/components/ui/Navbar";
import { FullContent } from "@/components/viewCourseComponents/FullContent/fullContent";
import { CaretLeft, CaretRight } from "phosphor-react";
import telaCursoService from "@/services/telaCurso.service";
import { Slide, SlideUtils } from "@/models/slide";
import { useStore } from "@/zustand-store";

const VisualizacaoCurso: React.FC = () => {
  const [index, setIndex] = useState(0);
  const [slides, setSlides] = useState<Slide[]>([]);
  const [isCarregando, setIsCarregando] = useState<boolean>(true);
  const { idAssistir } = useStore((state) => ({
    idAssistir: state.idAssistir,
  }));

  useEffect(() => {
    getSlides();
  }, [idAssistir]);

  async function getSlides() {
    const slidesDoCurso: Array<Slide> = [];
    const response = await telaCursoService.listarSlidesPorId(idAssistir);
    
    response.data.forEach((element: Slide) => {
      console.log("slideDoCurso: ", element);
      slidesDoCurso.push(SlideUtils.fromJson(element));
    });

    setSlides(slidesDoCurso);
    setIsCarregando(false);
  }

  function proximoSlide() {
    setIndex(index + 1);
  }

  function voltarSlide() {
    setIndex(index - 1);
  }

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex flex-col flex-1 mt-14 lg:mt-0 lg:ml-80">
        <Navbar />
        <div className="flex flex-wrap justify-center lg:my-8">
          <div className="w-full h-full bg-zinc-300 border border-gray-400 rounded-lg flex items-center justify-center m-5 lg:m-10">
            {isCarregando ? (
              `Carregando Slides do Curso...`
            ) : (
              <FullContent id={idAssistir} slide={slides[index]} />
            )}
          </div>
        </div>
        <div className="flex items-center justify-center mt-8">
          {index != 0 ? <CaretLeft size={32} onClick={voltarSlide} /> : ""}
          {index != slides.length - 1 ? (
            <CaretRight size={32} onClick={proximoSlide} />
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
};

export default VisualizacaoCurso;
