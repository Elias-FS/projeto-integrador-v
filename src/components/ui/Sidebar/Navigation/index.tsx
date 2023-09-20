import { useState, useEffect } from 'react';
import { BriefcaseMetal, Buildings, ChalkboardTeacher, ClockClockwise, Student } from 'phosphor-react';
import { NavItem } from './NavItem';
import { Video } from '@phosphor-icons/react';

export function Navigation() {
  const [path, setPath] = useState('');

  useEffect(() => {
    const currentPath = window.location.pathname;
    setPath(currentPath);
  }, []);

  let iconsToShow: { icon: React.ElementType; title: string }[] = [];

  if (path === '/instrutor') {
    iconsToShow = [
      { icon: ChalkboardTeacher, title: "Minhas Aulas" },
      { icon: BriefcaseMetal, title: "Oficina" },
      { icon: Video, title: "Cursos" }
    ];
  } else if (path === '/aluno') {
    // Defina os novos ícones para o caminho de aluno aqui
    iconsToShow = [
      { icon: Student, title: "Meu Aprendizado" },
      { icon: Video, title: "Cursos" }
    ];
  } else if (path === '/adm') {
    // Defina os novos ícones para o caminho de aluno aqui
    iconsToShow = [
      { icon: ClockClockwise, title: "Cursos Pendentes" },
      { icon: Buildings, title: "Academias" },
      { icon: Video, title: "Cursos" }
    ];
  }

  return (
    <nav className="flex flex-col gap-0.5">
      {iconsToShow && iconsToShow.map((item, index) => (
        <NavItem key={index} icon={item.icon} title={item.title} />
      ))}
    </nav>
  );
}
