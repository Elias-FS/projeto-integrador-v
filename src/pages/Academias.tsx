import React from "react";
import { Sidebar } from "@/components/ui/Sidebar";
import { Navbar } from "@/components/ui/Navbar";
import CardCourse from "@/components/ui/Cards/cardCourse";
import { PlusButton } from "@/components/ui/PlusButton";

const Academias: React.FC = () => {
  const academias = [
    {
      name: "Lógica de Programação",
      profissao: "Descrição",
      src: "https://www.superti360.com.br/wp-content/uploads/2022/02/0-destaque-linguagens-de-programacao-2019.jpg",
    },
    {
      name: "Curso de Python",
      profissao: "Descrição",
      src: "https://www.superti360.com.br/wp-content/uploads/2022/02/0-destaque-linguagens-de-programacao-2019.jpg",
    },
    {
      name: "Curso de Python",
      profissao: "Descrição",
      src: "https://www.superti360.com.br/wp-content/uploads/2022/02/0-destaque-linguagens-de-programacao-2019.jpg",
    },
    {
      name: "Curso de Python",
      profissao: "Descrição",
      src: "https://www.superti360.com.br/wp-content/uploads/2022/02/0-destaque-linguagens-de-programacao-2019.jpg",
    },
    {
      name: "Curso de Python",
      profissao: "Descrição",
      src: "https://www.superti360.com.br/wp-content/uploads/2022/02/0-destaque-linguagens-de-programacao-2019.jpg",
    },
    {
      name: "Curso de Python",
      profissao: "Descrição",
      src: "https://www.superti360.com.br/wp-content/uploads/2022/02/0-destaque-linguagens-de-programacao-2019.jpg",
    },
    {
      name: "Curso de Python",
      profissao: "Descrição",
      src: "https://www.superti360.com.br/wp-content/uploads/2022/02/0-destaque-linguagens-de-programacao-2019.jpg",
    },
  ];

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex flex-col flex-1 ml-80">
        <Navbar />
        <div className="flex flex-wrap justify-center my-8">
          <PlusButton name={"Nova Academia"} path={"/oficina-academia"} />
          {academias.map((curso, index) => (
            <CardCourse
              key={index}
              name={curso.name}
              profissao={curso.profissao}
              src={curso.src}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Academias;
