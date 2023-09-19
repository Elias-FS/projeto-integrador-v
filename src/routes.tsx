import Login from './pages/Login';
import SignUp from './pages/SignUp';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Aluno from './pages/Aluno';
import Adm from './pages/Adm';
import Instrutor from './pages/Instrutor';
import AboutUs from './pages/AboutUs';

const Rotas = () => {
    return (
      <Router>
        <Routes>
          <Route path="/" Component={Login} />
          <Route path="/signup" Component={SignUp} />
          <Route path="/aluno" Component={Aluno} />
          <Route path="/adm" Component={Adm} />
          <Route path="/instrutor" Component={Instrutor} />
          <Route path="/about-us" Component={AboutUs} />
        </Routes>
      </Router>
    );
  };
  
  export default Rotas;