import React from "react";
import { Sidebar } from "@/components/ui/Sidebar";
import { Navbar } from "@/components/ui/Navbar";
import { PlusButton } from "@/components/ui/PlusButton";
import CardAcademy from "@/components/ui/Cards/cardAcademy";

const Academias: React.FC = () => {
  const academias = [
    {
      id: "031cccd8-0a96-44e6-b8ee-d5247de06767",
      titulo: "Academia A",
      descricao: "Descrição A",
      data_nascimento: "11/11/2023",
      capa: "https://www.interviewbit.com/blog/wp-content/uploads/2023/05/Artboard-1-copy-2.jpg",
    },
    {
      id: "031cccd8-0a96-44e6-b8ee-d5247de06768",
      titulo: "Academia B",
      descricao: "Descrição B",
      data_nascimento: "11/11/2023",
      academia: "Academia B",
      capa: "https://www.interviewbit.com/blog/wp-content/uploads/2023/05/Artboard-1-copy-2.jpg",
    },
    {
      id: "031cccd8-0a96-44e6-b8ee-d5247de06769",
      titulo: "Academia C",
      descricao: "Descrição C",
      data_nascimento: "11/11/2023",
      academia: "Academia C",
      capa: "https://www.interviewbit.com/blog/wp-content/uploads/2023/05/Artboard-1-copy-2.jpg",
    }
  ];

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex flex-col flex-1 ml-80">
        <Navbar />
        <div className="flex flex-wrap justify-center my-8">
          <PlusButton name={"Nova Academia"} path={"/oficina-academia"} />
          {academias.map((curso, index) => (
            <CardAcademy
              key={index}
              titulo={curso.titulo}
              descricao={curso.descricao}
              capa={curso.capa}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Academias;
