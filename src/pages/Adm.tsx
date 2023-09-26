import React from "react";
import { Sidebar } from "@/components/ui/Sidebar";
import { Navbar } from "@/components/ui/Navbar";

const Adm: React.FC = () => {
  return (
    <div className="flex ">
      <Sidebar />
      <div className="flex flex-col flex-1"> {/* Adicionei uma div de flex para envolver a Navbar */}
        <Navbar />
        {/* Conteúdo da página aqui */}
      </div>
    </div>
  );
};

export default Adm;