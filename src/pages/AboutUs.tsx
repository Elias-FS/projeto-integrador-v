import React from "react";
import { LoginForm } from "../components/loginAndRegisterComponents/LoginForm/LoginForm";
import { Navbar } from "../components/loginAndRegisterComponents/Navbar/Navbar";
import CardUser from "@/components/ui/Cards/cardUser";

const AboutUs: React.FC = () => {
  return (
    <div>
      <Navbar />
      <div className="flex flex-wrap justify-center items-center gap-5 h-screen">
        <CardUser
          name="Elias Fausto"
          profissao="Developer"
          src="https://github.com/Elias-FS.png"
        />
        <CardUser
          name="Gian Dutra"
          profissao="Developer"
          src="https://github.com/GianDutra.png"
        />
        <CardUser
          name="Kevin Silva"
          profissao="Developer"
          src="https://github.com/kevinsilvadev.png"
        />
        <CardUser
          name="Emílio Biasi"
          profissao="Developer"
          src="https://github.com/emiliobiasi.png"
        />
        <CardUser
          name="Thiago Santos"
          profissao="Developer"
          src="https://github.com/ThiagoSantos21.png"
        />
      </div>
    </div>
  );
};

export default AboutUs;
