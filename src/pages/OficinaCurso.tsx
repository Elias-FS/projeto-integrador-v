import React from "react";
import { Sidebar } from "@/components/ui/Sidebar";
import { Navbar } from "@/components/ui/Navbar";
import { FormsCriaCurso } from "@/components/oficinaComponents/FormsCriaCurso/FormsCriaCurso";
import CardCoursePreview from "@/components/ui/Cards/cardCoursePreview";

const OficinaCurso: React.FC = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex flex-col flex-1 ml-80">
        <Navbar />
        <div className="flex flex-1 mx-8 my-8">
          <FormsCriaCurso />
          <CardCoursePreview name={"Título do Curso"} profissao={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam in lectus volutpat, laoreet neque eget, convallis tortor. "} src={"https://github.com/Elias-FS.png"} />
        </div>
      </div>
    </div>
  );
};

export default OficinaCurso;
