import React, { useEffect, useState } from "react";
import { Sidebar } from "@/components/ui/Sidebar";
import { Navbar } from "@/components/ui/Navbar";
import CardCourse from "@/components/ui/Cards/cardCourse";
import CursoService from "@/services/curso.service";
import { Curso } from "@/models/curso";

const CursosPendentes: React.FC = () => {

  const [ cursos , setCursos ] = useState<Curso[]>([]);

  useEffect(() => {
    const cursosPendentes:Array<Curso> = []

    CursoService.listarCursos().then(
      (response) => {
          response.data.forEach((element: { validado: boolean; }) => {
            if(element.validado != true) {
              cursosPendentes.push(Curso.fromJson(element))
            }
          });
          setCursos(cursosPendentes);
          console.log(response.data)
      },
      (error) => {
        const _content =
          (error.response && error.response.data) 
          error.message 
          error.toString();
      }
    );
  }, []);

  // const cursos = [
  //   {
  //     id: "031cccd8-0a96-44e6-b8ee-d5247de06767",
  //     titulo: "Curso de Python",
  //     descricao: "Descrição Python",
  //     data_nascimento: "11/11/2023",
  //     academia: "Academia A",
  //     capa: "https://www.interviewbit.com/blog/wp-content/uploads/2023/05/Artboard-1-copy-2.jpg",
  //     listaDeSlides: [
  //       { slideType: "em branco" },
  //       { slideType: "em branco" },
  //       { slideType: "em branco" },
  //     ],
  //   },
  //   {
  //     id: "031cccd8-0a96-44e6-b8ee-d5247de06768",
  //     titulo: "Curso de C++",
  //     descricao: "Descrição C++",
  //     data_nascimento: "11/11/2023",
  //     academia: "Academia B",
  //     capa: "https://www.interviewbit.com/blog/wp-content/uploads/2023/05/Artboard-1-copy-2.jpg",
  //     listaDeSlides: [
  //       { slideType: "verdadeiro ou falso" },
  //       { slideType: "verdadeiro ou falso" },
  //       { slideType: "verdadeiro ou falso" },
  //     ],
  //   },
  //   {
  //     id: "031cccd8-0a96-44e6-b8ee-d5247de06769",
  //     titulo: "Curso de TypeScript",
  //     descricao: "Descrição TypeScript",
  //     data_nascimento: "11/11/2023",
  //     academia: "Academia C",
  //     capa: "https://www.interviewbit.com/blog/wp-content/uploads/2023/05/Artboard-1-copy-2.jpg",
  //     listaDeSlides: [
  //       { slideType: "somente midia" },
  //       { slideType: "somente midia" },
  //       { slideType: "somente midia" },
  //     ],
  //   },
  // ];
  
  return (
    <div className="flex">
      <Sidebar /> 
      <div className="flex flex-col flex-1 ml-80">
        <Navbar />
        <div className="flex flex-wrap justify-center my-8">
          {cursos.map((curso, index) => (
            <CardCourse
              key={index}
              titulo={curso.titulo}
              descricao={curso.descricao}
              capa={curso.capa}
              type={"pendente"}
              idCurso={cursos[index].id}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CursosPendentes;
