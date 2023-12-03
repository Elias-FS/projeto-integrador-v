import React, { useEffect, useState } from "react";
import { Sidebar } from "@/components/ui/Sidebar";
import { Navbar } from "@/components/ui/Navbar";
import CardCourse from "@/components/ui/Cards/cardCourse";
import CursoService from "@/services/curso.service";
import { Curso } from "@/models/curso";

const Cursos: React.FC = () => {

  const [ cursos , setCursos ] = useState<Curso[]>([]);

  useEffect(() => {
    const cursosValidados:Array<Curso> = []

    CursoService.listarCursos().then(
      (response) => {
          response.data.forEach((element: { validado: boolean; }) => {
            if(element.validado != false) {
              cursosValidados.push(Curso.fromJson(element))
            }
          });
          setCursos(cursosValidados);
          console.log(cursosValidados)
          console.log(cursosValidados[0].capa)
      },
      (error) => {
        const _content =
          (error.response && error.response.data) 
          error.message 
          error.toString();
      }
    );
  }, []);
  
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex flex-col flex-1 mt-14 lg:mt-0 lg:ml-80">
        <Navbar />
        <div className="flex flex-wrap justify-center my-8">
          {cursos.length > 0 ? cursos.map((curso, index) => (
            <CardCourse
              key={index}
              titulo={curso.titulo}
              descricao={curso.descricao}
              capa={curso.capa}
              type={"nao inscrito"}
            />
          )) : "Ainda não existem cursos para realizar..."}
        </div>
      </div>
    </div>
  );
};

export default Cursos;
