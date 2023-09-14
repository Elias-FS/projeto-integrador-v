import React from "react";
import { LoginForm } from "../components/loginAndRegisterComponents/LoginForm/LoginForm";
import { Navbar } from "../components/loginAndRegisterComponents/Navbar/Navbar";

const Login: React.FC = () => {
  return (
    <>
      <Navbar />
      <div className="section_form_login_SignUp">
        <LoginForm />
      </div>
    </>
  );
};

export default Login;
