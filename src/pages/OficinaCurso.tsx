import React from "react";
import { Sidebar } from "@/components/ui/Sidebar";
import { Navbar } from "@/components/ui/Navbar";
import { FormsCriaCurso } from "@/components/oficinaComponents/FormsCriaCurso/FormsCriaCurso";

const OficinaCurso: React.FC = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex flex-col flex-1 ml-80">
        <Navbar />
        <div className="flex flex-1 mx-8 my-8">
          <FormsCriaCurso />
        </div>
      </div>
    </div>
  );
};

export default OficinaCurso;
