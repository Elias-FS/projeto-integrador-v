import React from "react";
import { Sidebar } from "@/components/ui/Sidebar";
import { Navbar } from "@/components/ui/Navbar";

const VisualizacaoCurso: React.FC = () => {
  console.log("curso");

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex flex-col flex-1 ml-80">
        <Navbar />
        <div className="flex flex-wrap justify-center my-8">
          <div className="w-full h-full m-10 bg-gray-100 border border-gray-400 rounded-lg flex items-center justify-center">
            CONSUMIR O CURSO AQUI
          </div>
        </div>
      </div>
    </div>
  );
};

export default VisualizacaoCurso;
