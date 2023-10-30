import React, { useState } from "react";
import { Sidebar } from "@/components/ui/Sidebar";
import { Navbar } from "@/components/ui/Navbar";
import { FormsCriaCurso } from "@/components/oficinaComponents/FormsCriaCurso/FormsCriaCurso";
import CardCoursePreview from "@/components/oficinaComponents/PreviewCurso/cardCoursePreview";
import { SideSlideShow } from "@/components/oficinaComponents/SideSlideShow/sideSlideShow";

const CriacaoCurso: React.FC = () => {


  return (
    <div className="flex">
      <Sidebar />
      <div className="flex flex-col flex-1 ml-80">
        <Navbar />
        <div className="flex flex-1 space-x-40">
          <SideSlideShow />
        </div>
      </div>
    </div>
  );
};

export default CriacaoCurso;
