import React from "react";
import { LoginForm } from "../components/loginAndRegisterComponents/LoginForm/LoginForm";
import { Navbar } from "../components/loginAndRegisterComponents/Navbar/Navbar";

const Aluno: React.FC = () => {
  return (
    <>
      <Navbar />
      <div className="section_form_login_SignUp">
        <h1>Aluno</h1>
      </div>
    </>
  );
};

export default Aluno;
