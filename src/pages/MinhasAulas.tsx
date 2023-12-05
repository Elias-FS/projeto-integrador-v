import React, { useEffect, useState } from "react";
import { Sidebar } from "@/components/ui/Sidebar";
import { Navbar } from "@/components/ui/Navbar";
import CardCourse from "@/components/ui/Cards/cardCourse";
import { PlusButton } from "@/components/ui/PlusButton";
import { Curso } from "@/models/curso";
import CursoService from "@/services/curso.service";
import { Usuario } from "@/models/usuario";

const MinhasAulas: React.FC = () => {
  const [imageSrc, setImageSrc] = useState("");

  const [cursos, setCursos] = useState<Curso[]>([]);

  useEffect(() => {
    const cursosDoProfessor: Array<Curso> = [];
    const usuario = Usuario.fromJson(
      JSON.parse(localStorage.getItem("usuario")!)
    );

    CursoService.listarCursos().then(
      (response) => {
        response.data.forEach((element: { usuarioId: number }) => {
          if (element.usuarioId == usuario.id) {
            cursosDoProfessor.push(Curso.fromJson(element));
          }
        });
        setCursos(cursosDoProfessor);
      },
      (error) => {
        const _content = error.response && error.response.data;
        error.message;
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
          <PlusButton name={"Nova Curso"} path={"/oficina-curso"} />
          {cursos.length > 0
            ? cursos.map((curso, index) => (
                <CardCourse
                  key={index}
                  titulo={curso.titulo}
                  descricao={curso.descricao}
                  capa={curso.capa}
                  type={"inscrito"}
                  idCurso={cursos[index].id}
                />
              ))
            : "Você ainda não criou nenhum curso..."}
        </div>
      </div>
    </div>
  );
};

export default MinhasAulas;
