import React, { useState } from "react";
import { Sidebar } from "@/components/ui/Sidebar";
import { Navbar } from "@/components/ui/Navbar";
import { FormsCriaAcademia } from "@/components/oficinaComponents/FormsCriaAcademia/FormsCriaAcademia";
import CardCoursePreview from "@/components/oficinaComponents/PreviewCurso/cardCoursePreview";

const OficinaAcademia: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string>("");
  const [typedTitle, setTypedTitle] = useState("Título do Academia");
  const [typedDescription, setTypedDescription] = useState(
    "Descrição da Academia. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam in lectus volutpat, laoreet neque eget, convallis tortor. "
  );

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex flex-col flex-1 ml-80">
        <Navbar />
        <div className="flex flex-1 mx-8 my-8 justify-center items-center space-x-40">
          <FormsCriaAcademia
            setSelectedImage={setSelectedImage}
            setTypedTitle={setTypedTitle}
            setTypedDescription={setTypedDescription}
            selectedImage={selectedImage}
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

export default OficinaAcademia;
