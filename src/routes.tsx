import Login from './pages/Login';
import SignUp from './pages/SignUp';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Cursos from './pages/Cursos';
import Academias from './pages/Academias';
import Oficina from './pages/Oficina';
import AboutUs from './pages/AboutUs';
import MeuAprendizado from './pages/MeuAprendizado';
import MinhasAulas from './pages/MinhasAulas';
import CursosPendentes from './pages/CursosPendentes';

const Rotas = () => {
    return (
      <Router>
        <Routes>
          <Route path="/" Component={Login} />
          <Route path="/signup" Component={SignUp} />
          <Route path="/meu-aprendizado" Component={MeuAprendizado} />
          <Route path="/cursos" Component={Cursos} />
          <Route path="/oficina" Component={Oficina} />
          <Route path="/minhas-aulas" Component={MinhasAulas} />
          <Route path="/cursos-pendentes" Component={CursosPendentes} />
          <Route path="/academias" Component={Academias} />
          <Route path="/about-us" Component={AboutUs} />
        </Routes>
      </Router>
    );
  };
  
  export default Rotas;