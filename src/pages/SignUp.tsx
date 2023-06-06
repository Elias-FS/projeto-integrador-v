import React from 'react';
import { Navbar } from '../components/Navbar/Navbar';
import { SignUpForm } from '../components/SignUpForm/SingUpForm';


const SignUp: React.FC = () => {
  return (
    <>
      <Navbar />
      <div className="section_form_login_SignUp">
        <SignUpForm/>
      </div>
    </>
  );
};

export default SignUp;