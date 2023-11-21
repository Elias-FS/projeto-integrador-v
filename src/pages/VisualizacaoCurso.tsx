import React, { useState } from "react";
import { Sidebar } from "@/components/ui/Sidebar";
import { Navbar } from "@/components/ui/Navbar";
import { FullContent } from "@/components/viewCourseComponents/FullContent/fullContent";
import { CaretLeft, CaretRight } from "phosphor-react";

const VisualizacaoCurso: React.FC = () => {
  const [index, setIndex] = useState(0);

  const curso = {
    id: "031cccd8-0a96-44e6-b8ee-d5247de06767",
    titulo: "Curso de Python",
    descricao: "Descrição Python",
    data_nascimento: "11/11/2023",
    academia: "Academia A",
    capa: "https://www.interviewbit.com/blog/wp-content/uploads/2023/05/Artboard-1-copy-2.jpg",
    listaDeSlides: [
      {
        slideType: "multipla escolha",
        index: 0,
        question: "Questão multipla escolha:",
        options: ["Angular", "React", "Svelte", "Vue"],
        feedbacks: ["Você acertou! React é a ferramenta que utiliza...", "Você errou, a resposta correta é React, pois..."],
        correctOption: [1],
        points: 10,
      },
      {
        slideType: "verdadeiro ou falso",
        index: 1,
        question: "Questão verdadeiro ou falso:",
        options: ["Google", "Apple", "Netflix", "Facebook"],
        feedbacks: ["Você acertou! React é a ferramenta que utiliza...", "Você errou, a resposta correta é React, pois..."],
        correctOption: [1, 2],
        points: 10,
      },
      {
        slideType: "multipla escolha com midia",
        index: 2,
        midia: "https://blog-static.petlove.com.br/wp-content/uploads/2019/06/shutterstock_632318627.jpg",
        question: "Questão multipla escolha:",
        options: ["Components", "Blocks", "Elements", "Effects"],
        feedbacks: ["Você acertou! React é a ferramenta que utiliza...", "Você errou, a resposta correta é React, pois..."],
        correctOption: [0],
        points: 10,
      },
      {
        slideType: "verdadeiro ou falso com midia",
        index: 3,
        midia: "https://blog-static.petlove.com.br/wp-content/uploads/2019/06/shutterstock_632318627.jpg",
        question: "Questão verdadeiro ou falso:",
        options: ["FBJ", "Babel", "JSX", "ES2015"],
        feedbacks: ["Você acertou! React é a ferramenta que utiliza...", "Você errou, a resposta correta é React, pois..."],
        correctOption: [2],
        points: 10,
      },
      {
        slideType: "somente midia",
        index: 4,
        midia: "https://blog-static.petlove.com.br/wp-content/uploads/2019/06/shutterstock_632318627.jpg",
      },
      {
        slideType: "feedback ao usuario",
        index: 5,
        question: "How to pass data into a child component?",
      },
    ],
  };

  function proximoSlide() {
    setIndex(index + 1);
  }

  function voltarSlide() {
    setIndex(index - 1);
  }

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex flex-col flex-1 ml-80">
        <Navbar />
        <div className="flex flex-wrap justify-center my-8">
          <div className="w-full h-full m-10 bg-zinc-300 border border-gray-400 rounded-lg flex items-center justify-center">
            <FullContent id={curso.id} slide={curso.listaDeSlides[index]} />
          </div>
          {index != 0 ? <CaretLeft size={32} onClick={voltarSlide} /> : ""}
          {index != curso.listaDeSlides.length - 1 ? (
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
