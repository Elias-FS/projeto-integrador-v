import React from "react";
import { Sidebar } from "@/components/ui/Sidebar";
import { Navbar } from "@/components/ui/Navbar";
import CardCourse from "@/components/ui/Cards/cardCourse";

const Cursos: React.FC = () => {
  const cursos = [
    {
      name: "Curso de Python",
      profissao: "Descrição",
      src: "https://www.interviewbit.com/blog/wp-content/uploads/2023/05/Artboard-1-copy-2.jpg",
    },
    {
      name: "Curso de Python",
      profissao: "Descrição",
      src: "https://www.interviewbit.com/blog/wp-content/uploads/2023/05/Artboard-1-copy-2.jpg",
    },
    {
      name: "Curso de Python",
      profissao: "Descrição",
      src: "https://www.interviewbit.com/blog/wp-content/uploads/2023/05/Artboard-1-copy-2.jpg",
    },
    {
      name: "Curso de Python",
      profissao: "Descrição",
      src: "https://www.interviewbit.com/blog/wp-content/uploads/2023/05/Artboard-1-copy-2.jpg",
    },
    {
      name: "Curso de Python",
      profissao: "Descrição",
      src: "https://www.interviewbit.com/blog/wp-content/uploads/2023/05/Artboard-1-copy-2.jpg",
    },
    {
      name: "Curso de Python",
      profissao: "Descrição",
      src: "https://www.interviewbit.com/blog/wp-content/uploads/2023/05/Artboard-1-copy-2.jpg",
    },
    {
      name: "Curso de Python",
      profissao: "Descrição",
      src: "https://www.interviewbit.com/blog/wp-content/uploads/2023/05/Artboard-1-copy-2.jpg",
    },
  ];

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex flex-col flex-1 ml-80">
        <Navbar />
        <div className="flex flex-wrap justify-center my-8">
          {cursos.map((curso, index) => (
            <CardCourse
              key={index}
              name={curso.name}
              profissao={curso.profissao}
              src={curso.src}
              type={"nao inscrito"}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Cursos;
