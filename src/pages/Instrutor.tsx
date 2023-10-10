import React from "react";
import { Sidebar } from "@/components/ui/Sidebar";
import { Navbar } from "@/components/ui/Navbar";
import { PlusButton } from "@/components/ui/PlusButton";
import CardCourse from "@/components/ui/Cards/cardCourse";

const Instrutor: React.FC = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex flex-col flex-1 ml-80">
        <Navbar />
        <div className="flex flex-1 mx-8 my-8">
          <CardCourse
            name="Elias Fausto"
            profissao="Developer"
            src="https://github.com/Elias-FS.png"
          />
          <PlusButton />
        </div>
      </div>
    </div>
  );
};

export default Instrutor;
