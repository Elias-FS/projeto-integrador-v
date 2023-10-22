import React from "react";
import { Sidebar } from "@/components/ui/Sidebar";
import { Navbar } from "@/components/ui/Navbar";
import CardCourse from "@/components/ui/Cards/cardCourse";
import { PlusButton } from "@/components/ui/PlusButton";

const Academias: React.FC = () => {
  const cursos = [
    {
      name: "Elias Fausto",
      profissao: "Developer",
      src: "https://github.com/Elias-FS.png",
    },
    {
      name: "Elias Fausto",
      profissao: "Developer",
      src: "https://github.com/Elias-FS.png",
    },
    {
      name: "Elias Fausto",
      profissao: "Developer",
      src: "https://github.com/Elias-FS.png",
    },
    {
      name: "Elias Fausto",
      profissao: "Developer",
      src: "https://github.com/Elias-FS.png",
    },
    {
      name: "Elias Fausto",
      profissao: "Developer",
      src: "https://github.com/Elias-FS.png",
    },
    {
      name: "Elias Fausto",
      profissao: "Developer",
      src: "https://github.com/Elias-FS.png",
    },
    {
      name: "Elias Fausto",
      profissao: "Developer",
      src: "https://github.com/Elias-FS.png",
    },
  ];

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex flex-col flex-1 ml-80">
        <Navbar />
        <div className="flex flex-wrap justify-center my-8">
          <PlusButton name={"Nova Academia"} />
          {cursos.map((curso, index) => (
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
