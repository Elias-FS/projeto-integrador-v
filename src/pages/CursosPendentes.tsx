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
      <div className="flex flex-col flex-1 ml-80">
        <Navbar />
        <div className="flex flex-wrap justify-center my-8">
          
          {cursos.length > 0 ? cursos.map((curso, index) => (
            <CardCourse
              key={index}
              titulo={curso.titulo}
              descricao={curso.descricao}
              capa={curso.capa}
              type={"pendente"}
              idCurso={cursos[index].id}
            />
          )) : "Ainda não existem cursos pendentes..."}
        </div>
      </div>
    </div>
  );
};

export default CursosPendentes;
