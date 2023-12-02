import React, { useEffect, useState } from "react";
import { Sidebar } from "@/components/ui/Sidebar";
import { Navbar } from "@/components/ui/Navbar";
import CardCourse from "@/components/ui/Cards/cardCourse";
import CursoService from "@/services/curso.service";
import { Curso } from "@/models/curso";

const Cursos: React.FC = () => {

  const [ cursos , setCursos ] = useState<Curso[]>([]);
  const cursosPendentes:Array<Curso> = []

  useEffect(() => {

    CursoService.listarCursos().then(
      (response) => {
          response.data.forEach(element => {
            if(element.validado != false) {
              cursosPendentes.push(element)
            }
          });
          setCursos(cursosPendentes);
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
  //   }
  // ];
  
  console.log(localStorage.getItem('token'))
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex flex-col flex-1 mt-14 lg:mt-0 lg:ml-80">
        <Navbar />
        <div className="flex flex-wrap justify-center my-8">
          {cursos.map((curso, index) => (

            <CardCourse
              key={index}
              titulo={curso.titulo}
              descricao={curso.descricao}
              capa={curso.capa}
              type={"nao inscrito"}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Cursos;
