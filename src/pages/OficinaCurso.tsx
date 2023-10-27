import React, { useState } from "react";
import { Sidebar } from "@/components/ui/Sidebar";
import { Navbar } from "@/components/ui/Navbar";
import { FormsCriaCurso } from "@/components/oficinaComponents/FormsCriaCurso/FormsCriaCurso";
import CardCoursePreview from "@/components/oficinaComponents/PreviewCurso/cardCoursePreview";

const OficinaCurso: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex flex-col flex-1 ml-80">
        <Navbar />
        <div className="flex flex-1 mx-8 my-8">
          <FormsCriaCurso setSelectedImage={setSelectedImage} />
          <CardCoursePreview name={"Título do Curso"} profissao={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam in lectus volutpat, laoreet neque eget, convallis tortor. "} src={selectedImage} />
        </div>
      </div>
    </div>
  );
};

export default OficinaCurso;
