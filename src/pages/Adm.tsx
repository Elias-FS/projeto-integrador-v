import React from 'react';
import { LoginForm } from '../components/LoginForm/LoginForm';
import { Navbar } from '../components/Navbar/Navbar';

const Adm: React.FC = () => {
  return (
    <>
      <Navbar />
      <div className="section_form_login_SignUp">
        <h1>ADM</h1>
      </div>
    </>
  );
};

export default Adm;