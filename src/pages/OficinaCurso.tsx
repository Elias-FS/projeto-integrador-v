import React, { useState } from "react";
import { Sidebar } from "@/components/ui/Sidebar";
import { Navbar } from "@/components/ui/Navbar";
import { FormsCriaCurso } from "@/components/oficinaComponents/FormsCriaCurso/FormsCriaCurso";
import CardCoursePreview from "@/components/oficinaComponents/PreviewCurso/cardCoursePreview";

const OficinaCurso: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [typedTitle, setTypedTitle] = useState("Título do Curso");
  const [typedDescription, setTypedDescription] = useState(
    "Descrição do curso. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam in lectus volutpat, laoreet neque eget, convallis tortor. "
  );

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex flex-col flex-1 ml-80">
        <Navbar />
        <div className="flex flex-1 mx-8 my-8 justify-center items-center space-x-40">
          <FormsCriaCurso
            setSelectedImage={setSelectedImage}
            setTypedTitle={setTypedTitle}
            setTypedDescription={setTypedDescription}
          />
          <CardCoursePreview
            titulo={typedTitle}
            descricao={typedDescription}
            src={selectedImage}
          />
        </div>
      </div>
    </div>
  );
};

export default OficinaCurso;
