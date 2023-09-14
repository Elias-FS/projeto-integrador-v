import React from "react";
import { Navbar } from "../components/loginAndRegisterComponents/Navbar/Navbar";
import { SignUpForm } from "../components/loginAndRegisterComponents/SignUpForm/SingUpForm";

const SignUp: React.FC = () => {
  return (
    <>
      <Navbar />
      <div className="section_form_login_SignUp">
        <SignUpForm />
      </div>
    </>
  );
};

export default SignUp;
