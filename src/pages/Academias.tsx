import React, { useEffect, useState } from "react";
import { Sidebar } from "@/components/ui/Sidebar";
import { Navbar } from "@/components/ui/Navbar";
import { PlusButton } from "@/components/ui/PlusButton";
import CardAcademy from "@/components/ui/Cards/cardAcademy";
import AcademiaService from "@/services/academia.service";
import { Academia } from "@/models/academia";

const Academias: React.FC = () => {
  const [academias, setAcademias] = useState<Academia[]>([]);
  

  useEffect(() => {
    const todasAcademias:Array<Academia> = []

    AcademiaService.listarAcademias().then(
      (response) => {
        response.data.forEach((element: Academia) => {
          todasAcademias.push(Academia.fromJson(element));
        });
        console.log(todasAcademias);
        setAcademias(todasAcademias);
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
          <PlusButton name={"Nova Academia"} path={"/oficina-academia"} />
          {academias.length > 0
            ? academias.map((academia, index) => (
                <CardAcademy
                  key={index}
                  titulo={academia.nome}
                  descricao={academia.descricao}
                  capa={academia.imagem || ""}
                />
              ))
            : "Ainda não existem academias..."}
        </div>
      </div>
    </div>
  );
};

export default Academias;
