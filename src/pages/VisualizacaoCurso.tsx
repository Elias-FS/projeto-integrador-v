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
  const { idAssistir } = useStore(state => ({
    idAssistir: state.idAssistir,
  }));

  useEffect(() => {
    const slidesDoCurso: Array<Slide> = [];
    telaCursoService.listarSlidesPorId(idAssistir).then(
      (response) => {
        console.log("oi")
        response.data.forEach((element: Slide) => {
          slidesDoCurso.push(SlideUtils.fromJson(element));
        });
        console.log("slides: ", slidesDoCurso);
        console.log("primeiroSlide: ", slidesDoCurso[0].tipo);
        setSlides(slidesDoCurso);
      },
      (error) => {
        const _content = error.response && error.response.data;
        error.message;
        error.toString();
      }
    );
  }, [idAssistir]);
  
  console.log("slides: ", slides)
  // const curso = {
  //   id: "031cccd8-0a96-44e6-b8ee-d5247de06767",
  //   titulo: "Curso de Python",
  //   descricao: "Descrição Python",
  //   data_nascimento: "11/11/2023",
  //   academia: "Academia A",
  //   capa: "https://www.interviewbit.com/blog/wp-content/uploads/2023/05/Artboard-1-copy-2.jpg",
  //   listaDeSlides: [
  //     {
  //       id: "a",
  //       tipo: "multipla escolha",
  //       posicao: 0,
  //       texto: "Questão multipla escolha:",
  //       alternativas: ["Angular", "React", "Svelte", "Vue"],
  //       feedbacks: [
  //         "Você acertou! React é a ferramenta que utiliza...",
  //         "Você errou, a resposta correta é React, pois...",
  //       ],
  //       resposta: [1],
  //       points: 10,
  //     },
  //     {
  //       id: "b",
  //       tipo: "verdadeiro ou falso",
  //       posicao: 1,
  //       texto: "Questão verdadeiro ou falso:",
  //       alternativas: ["Google", "Apple", "Netflix", "Facebook"],
  //       feedbacks: [
  //         "Você acertou! React é a ferramenta que utiliza...",
  //         "Você errou, a resposta correta é React, pois...",
  //       ],
  //       resposta: [1, 2],
  //       points: 10,
  //     },
  //     {
  //       id: "c",
  //       tipo: "multipla escolha com midia",
  //       posicao: 2,
  //       midia:
  //         "https://blog-static.petlove.com.br/wp-content/uploads/2019/06/shutterstock_632318627.jpg",
  //       texto: "Questão multipla escolha:",
  //       alternativas: ["Components", "Blocks", "Elements", "Effects"],
  //       feedbacks: [
  //         "Você acertou! React é a ferramenta que utiliza...",
  //         "Você errou, a resposta correta é React, pois...",
  //       ],
  //       resposta: [0],
  //       points: 10,
  //     },
  //     {
  //       id: "d",
  //       tipo: "verdadeiro ou falso com midia",
  //       posicao: 3,
  //       midia:
  //         "https://blog-static.petlove.com.br/wp-content/uploads/2019/06/shutterstock_632318627.jpg",
  //       texto: "Questão verdadeiro ou falso:",
  //       alternativas: ["FBJ", "Babel", "JSX", "ES2015"],
  //       feedbacks: [
  //         "Você acertou! React é a ferramenta que utiliza...",
  //         "Você errou, a resposta correta é React, pois...",
  //       ],
  //       resposta: [2],
  //       points: 10,
  //     },
  //     {
  //       id: "e",
  //       tipo: "somente midia",
  //       posicao: 4,
  //       midia:
  //         "https://blog-static.petlove.com.br/wp-content/uploads/2019/06/shutterstock_632318627.jpg",
  //     },
  //     {
  //       id: "f",
  //       tipo: "feedback ao usuario",
  //       posicao: 5,
  //       texto: "How to pass data into a child component?",
  //     },
  //   ],
  // };

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
            <FullContent id={idAssistir} slide={slides[index]} />
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
