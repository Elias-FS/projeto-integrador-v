import React from "react";
import { Sidebar } from "@/components/ui/Sidebar";
import { Navbar } from "@/components/ui/Navbar";
import CardCourse from "@/components/ui/Cards/cardCourse";

const Adm: React.FC = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex flex-col flex-1 ml-80">
        {" "}
        {/* Adicione uma margem à direita para evitar sobreposição */}
        <Navbar />
        <div className="flex flex-1 mx-8 my-8">
          
          <CardCourse
            name="Elias Fausto"
            profissao="Developer"
            src="https://github.com/Elias-FS.png"
          />
        </div>
      </div>
    </div>
  );
};

export default Adm;
