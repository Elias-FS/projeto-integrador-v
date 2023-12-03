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
    const usuario = Usuario.fromJson(JSON.parse(localStorage.getItem("usuario")!))

    CursoService.listarCursos().then(
      (response) => {
        response.data.forEach((element: { fk_Usuario_id: number; }) => {
          if (element.fk_Usuario_id == usuario.id) {
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
  //     capa: "https://dpaschoalteste.blob.core.windows.net/teste/asdfq-base64",
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
          <PlusButton name={"Nova Curso"} path={"/oficina-curso"} />
          {cursos.length > 0 ? cursos.map((curso, index) => (
            <CardCourse
              key={index}
              titulo={curso.titulo}
              descricao={curso.descricao}
              capa={curso.capa}
              type={"inscrito"}
            />
          )) : "Você ainda não criou nenhum curso..."}
        </div>
      </div>
    </div>
  );
};

export default MinhasAulas;
