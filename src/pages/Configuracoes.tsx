import React from "react";
import { Sidebar } from "@/components/ui/Sidebar";
import { Navbar } from "@/components/ui/Navbar";

const Configuracoes: React.FC = () => {
  
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex flex-col flex-1 ml-80">
        <Navbar />
        <div className="flex flex-wrap justify-center my-8">
          CONFIGURAÇÕES PARA ALTERAR DADOS PESSOAIS DO USUÁRIO
        </div>
      </div>
    </div>
  );
};

export default Configuracoes;