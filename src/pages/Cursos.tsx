import React, { useEffect, useState } from "react";
import { Sidebar } from "@/components/ui/Sidebar";
import { Navbar } from "@/components/ui/Navbar";
import CardCourse from "@/components/ui/Cards/cardCourse";
import CursoService from "@/services/curso.service";
import { Curso } from "@/models/curso";

const Cursos: React.FC = () => {

  const [ cursos , setCursos ] = useState<Curso[]>([]);
  const cursosValidados:Array<Curso> = []

  useEffect(() => {

    CursoService.listarCursos().then(
      (response) => {
          response.data.forEach(element => {
            if(element.validado != false) {
              cursosValidados.push(element)
            }
          });
          setCursos(cursosValidados);
      },
      (error) => {
        const _content =
          (error.response && error.response.data) 
          error.message 
          error.toString();
      }
    );
  }, [cursosValidados]);

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
              capa={"https://dpaschoalteste.blob.core.windows.net/teste/teste.png"}
              type={"nao inscrito"}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Cursos;
